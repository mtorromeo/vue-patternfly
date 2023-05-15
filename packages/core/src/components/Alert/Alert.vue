<template>
  <div
    v-if="!dismissed"
    :class="[
      styles.alert,
      variant === 'default' ? undefined : styles.modifiers[variant], {
        [styles.modifiers.inline]: inline,
        [styles.modifiers.plain]: plain,
        [styles.modifiers.expandable]: expandable,
        [styles.modifiers.expanded]: expanded,
      }
    ]"
    :aria-live="liveRegion ? 'polite' : undefined"
    :aria-atomic="liveRegion ? 'false' : undefined"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div v-if="expandable" :class="styles.alertToggle">
      <pf-button
        variant="plain"
        :aria-expanded="managedExpanded"
        :aria-label="toggleAriaLabel || `Toggle ${variantLabel} ${title}`"
        @click="managedExpanded = !managedExpanded"
      >
        <span :class="styles.alertToggleIcon">
          <pf-angle-right-icon aria-hidden />
        </span>
      </pf-button>
    </div>

    <pf-alert-icon :variant="variant">
      <template v-if="$slots['custom-icon']" #default>
        <slot name="custom-icon" />
      </template>
    </pf-alert-icon>

    <component :is="tooltipVisible ? PfTooltip : 'pass-through'" :position="tooltipPosition">
      <component
        :is="titleHeadingLevel"
        ref="titleRef"
        :class="[styles.alertTitle, {
          [styles.modifiers.truncate]: truncateTitle,
        }]"
        :style="truncateTitle ? `${maxLinesVar}: ${truncateTitle}` : null"
        :tabindex="tooltipVisible ? '0' : null"
      >
        <span :class="accessibleStyles.screenReader">{{ variantLabel }}</span>
        {{ title }}
      </component>
      <template v-if="tooltipVisible" #content>{{ title }}</template>
    </component>

    <div v-if="close" :class="styles.alertAction">
      <pf-close-button @click="$emit('close', $event)" />
    </div>

    <div v-if="$slots.default && (!expandable || expanded)" :class="styles.alertDescription">
      <slot />
    </div>

    <div v-if="$slots['action-links']" :class="styles.alertActionGroup">
      <slot name="action-links" />
    </div>
  </div>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import maxLines from '@patternfly/react-tokens/dist/esm/c_alert__title_max_lines';

import PassThrough from '../../helpers/PassThrough';
import PfTooltip, { TooltipPosition } from '../Tooltip/Tooltip.vue';
import PfButton from '../Button.vue';
import PfCloseButton from '../CloseButton.vue';
import PfAlertIcon, { AlertVariantIcons } from './AlertIcon';
import PfAngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';

import { ref, watch, markRaw, defineComponent, type PropType, type Ref } from 'vue';
import { useElementSize } from '@vueuse/core';
import { useManagedProp } from '../../use';

export default defineComponent({
  name: 'PfAlert',

  components: { PfAlertIcon, PfAngleRightIcon, PfButton, PfCloseButton, PfTooltip, PassThrough },

  props: {
    /** Flag to indicate if the alert is inline */
    inline: Boolean,

    /** Flag to indicate if the alert is plain */
    plain: Boolean,

    /** Truncate title to number of lines */
    truncateTitle: {
      type: Number,
      default: 0,
    },

    /** Flag to indicate if the alert is in a live region */
    liveRegion: Boolean,

    /** Show close button */
    close: Boolean,

    /** Flag indicating that the alert is expandable */
    expandable: Boolean,

    /** Flag indicating that the alert is expanded */
    expanded: {
      type: Boolean,
      default: null,
    },

    /** Adds accessible text to the alert Toggle */
    toggleAriaLabel: {
      type: String,
      default: null,
    },

    /** Title of the alert  */
    title: {
      type: String,
      required: true,
    },

    /** Adds alert variant styles  */
    variant: {
      type: String as PropType<keyof typeof AlertVariantIcons>,
      default: 'default',
      validator: (v: any) => v in AlertVariantIcons,
    },

    /** If set to true, the timeout is 8000 milliseconds. If a number is provided, alert will be dismissed after that amount of time in milliseconds. */
    timeout: {
      type: [Boolean, Number],
      default: false,
    },

    /** If the user hovers over the alert and `timeout` expires, this is how long to wait before finally dismissing the alert */
    timeoutAnimation: {
      type: Number,
      default: 3000,
    },

    tooltipPosition: {
      type: String as PropType<TooltipPosition>,
      default: TooltipPosition.auto,
      validator: (v: any) => v in TooltipPosition,
    },

    /** Sets the heading level to use for the alert title. Default is h4. */
    titleHeadingLevel: {
      type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>,
      default: 'h4',
    },
  },

  emits: {
    close: (e: Event) => e instanceof Event,
    mouseenter: (e: Event) => e instanceof Event,
    mouseleave: (e: Event) => e instanceof Event,
    timeout: () => true,
  },

  setup(props) {
    const titleRef: Ref<HTMLElement | undefined> = ref();
    const { width, height } = useElementSize(titleRef);

    const tooltipVisible = ref(false);

    watch(() => [width.value, height.value], () => {
      if (!titleRef.value || !props.truncateTitle) {
        return false;
      }
      tooltipVisible.value = titleRef.value.offsetHeight < titleRef.value.scrollHeight;
    });

    return {
      PfTooltip,
      titleRef,
      tooltipVisible,
      managedExpanded: useManagedProp('expanded', false),
      styles: markRaw(styles) as typeof styles,
      accessibleStyles: markRaw(accessibleStyles) as typeof accessibleStyles,
    };
  },

  data(this: void) {
    return {
      maxLinesVar: maxLines.name,
      timer: undefined as number | undefined,
      animationTimer: undefined as number | undefined,

      timedOut: false,
      timedOutAnimation: true,
      containsFocus: false,
      isMouseOver: false,
    };
  },

  computed: {
    variantLabel() {
      return `${this.variant.charAt(0).toUpperCase()}${this.variant.slice(1)} alert:`;
    },

    dismissed() {
      return this.timedOut && this.timedOutAnimation && !this.isMouseOver && !this.containsFocus;
    },
  },

  watch: {
    dismissed() {
      if (this.dismissed) {
        this.$emit('timeout');
      }
    },
  },

  mounted() {
    if (this.timeout) {
      this.timer = setTimeout(() => (this.timedOut = true), this.timeout === true ? 8000 : this.timeout);
    }

    document.addEventListener('focus', this.onDocumentFocus, true);

    this.$watch(() => [this.containsFocus, this.isMouseOver], () => {
      if (!this.containsFocus || !this.isMouseOver) {
        this.animationTimer = setTimeout(() => (this.timedOutAnimation = true), this.timeoutAnimation);
      }
    });
  },

  beforeUnmount() {
    clearTimeout(this.timer);
    clearTimeout(this.animationTimer);
    document.removeEventListener('focus', this.onDocumentFocus, true);
  },

  methods: {
    onDocumentFocus() {
      if (this.$el && this.$el.contains(document.activeElement)) {
        this.containsFocus = true;
        this.timedOutAnimation = false;
      } else if (this.containsFocus) {
        this.containsFocus = false;
      }
    },

    onMouseEnter(e: Event) {
      this.isMouseOver = true;
      this.timedOutAnimation = false;
      this.$emit('mouseenter', e);
    },

    onMouseLeave(e: Event) {
      this.isMouseOver = false;
      this.$emit('mouseleave', e);
    },
  },
});
</script>
