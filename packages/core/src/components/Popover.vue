<template>
  <pass-through @children="findReference">
    <slot />
  </pass-through>

  <floating-ui
    v-slot="{ placement, middlewareData }"
    :reference="referenceElement"
    :placement="position"
    :middleware="floatingMiddleware"
  >
    <pf-focus-trap
      v-if="visible"
      ref="dialog"
      v-bind="$attrs"
      :active="focusTrap && managedOpen"
      :class="[styles.popover, (styles.modifiers as any)[placement], {
        [styles.modifiers.noPadding]: noPadding,
        [styles.modifiers.widthAuto]: autoWidth,
      }]"
      role="dialog"
      aria-modal="true"
      :aria-label="$slots.header ? undefined : ariaLabel"
      :aria-labelledby="$slots.header ? `popover-${uniqueId}-header` : undefined"
      :aria-describedby="`popover-${uniqueId}-body`"
      :style="{
        minWidth: hasCustomMinWidth ? minWidth : null,
        maxWidth: hasCustomMaxWidth ? maxWidth : null,
        opacity,
        transition: `opacity ${animationDuration}ms cubic-bezier(.54, 1.5, .38, 1.11)`,
      }"
      :data-popper-reference-hidden="middlewareData.hide?.referenceHidden"
      :data-popper-escaped="middlewareData.hide?.escaped"
      :data-popper-placement="placement"
    >
      <div :class="styles.popoverArrow" />
      <div :class="styles.popoverContent">
        <pf-close-button
          v-if="showClose"
          :aria-label="closeBtnAriaLabel"
          @click.prevent="managedOpen = false"
        />

        <pf-title v-if="$slots.header" :id="`popover-${uniqueId}-header`" :h="6" size="md">
          <slot name="header" />
        </pf-title>

        <div :id="`popover-${uniqueId}-body`" :class="styles.popoverBody">
          <slot name="body" />
        </div>

        <footer
          v-if="$slots.footer"
          :id="`popover-${uniqueId}-footer`"
          :class="styles.popoverFooter"
        >
          <slot name="footer" />
        </footer>
      </div>
    </pf-focus-trap>
  </floating-ui>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { getUniqueId } from '../util';
import { useHtmlElementFromVNodes, useManagedProp } from '../use';
import { computed, defineComponent, markRaw, type PropType, type Ref, ref, watch } from 'vue';
import popoverMaxWidth from '@patternfly/react-tokens/dist/js/c_popover_MaxWidth';
import popoverMinWidth from '@patternfly/react-tokens/dist/js/c_popover_MinWidth';

import PfFocusTrap from '../helpers/FocusTrap.vue';
import PfCloseButton from './CloseButton.vue';
import PfTitle from './Title.vue';
import FloatingUi from '../helpers/FloatingUi.vue';
import PassThrough from '../helpers/PassThrough';
import { offset, autoPlacement, type Placement, hide, flip, type FlipOptions, type AutoPlacementOptions } from '@floating-ui/core';

export default defineComponent({
  name: 'PfPopover',

  components: {
    PfFocusTrap,
    PfCloseButton,
    PfTitle,
    FloatingUi,
    PassThrough,
  },

  inheritAttrs: false,

  props: {
    /** Whether to trap focus in the popover */
    focusTrap: Boolean,

    /** Removes fixed-width and allows width to be defined by contents */
    autoWidth: Boolean,

    /** Allows content to touch edges of popover container */
    noPadding: Boolean,

    /** Whether to show the close button */
    showClose: Boolean,

    /**
     * If true, tries to keep the popover in view by flipping it if necessary.
     * Otherwise it uses an auto-placement strategy.
     */
    flip: Boolean,

    flipOptions: {
      type: Object as PropType<FlipOptions>,
    },

    placementOptions: {
      type: Object as PropType<AutoPlacementOptions>,
    },

    /** Hides the popover when a click occurs outside (only works if isVisible is not controlled by the user) */
    noHideOnOutsideClick: Boolean,

    /**
     * Popover position.
     * Notice: it will change the position if there is not enough space for the starting position.
     * The behavior of where it flips to can be controlled through the flip, flipOptions or placementOptions props.
     */
    position: {
      type: String as PropType<Placement>,
      default: 'top',
    },

    /** Minimum width of the popover (default 6.25rem) */
    minWidth: {
      type: String,
      default: popoverMinWidth.value,
    },

    /** Maximum width of the popover (default 18.75rem) */
    maxWidth: {
      type: String,
      default: popoverMaxWidth.value,
    },

    /** CSS fade transition animation duration */
    animationDuration: {
      type: Number,
      default: 300,
    },

    open: {
      type: Boolean,
      default: null,
    },

    closeBtnAriaLabel: {
      type: String,
      default: 'Close',
    },

    distance: {
      type: Number,
      default: 25,
    },

    ariaLabel: {
      type: String,
      default: undefined,
    },
  },

  emits: ['update:open', 'show', 'shown', 'hide', 'hidden'],

  setup(props) {
    const managedOpen = useManagedProp('open', false);
    const dialog: Ref<InstanceType<typeof PfFocusTrap> | undefined> = ref();
    const { element: referenceElement, findReference } = useHtmlElementFromVNodes();

    watch(referenceElement, (el) => {
      el?.addEventListener('click', (e: Event) => {
        e.stopPropagation();
        managedOpen.value = !managedOpen.value;
      });
    });

    const floatingMiddleware = computed(() => [
      props.flip
        ? flip(props.flipOptions)
        : autoPlacement(props.placementOptions),
      offset(props.distance),
      hide(),
      hide({
        strategy: 'escaped',
      }),
    ]);

    return {
      managedOpen,
      dialog,
      findReference,
      styles: markRaw(styles) as typeof styles,
      visible: managedOpen,
      referenceElement,
      floatingMiddleware,
    };
  },

  data() {
    return {
      opacity: 0,
      hideTimer: undefined as number | undefined,
      showTimer: undefined as number | undefined,
      transitionTimer: undefined as number | undefined,
    };
  },

  computed: {
    uniqueId() {
      return getUniqueId();
    },

    hasCustomMinWidth() {
      return this.minWidth !== popoverMinWidth.value;
    },

    hasCustomMaxWidth() {
      return this.maxWidth !== popoverMaxWidth.value;
    },
  },

  watch: {
    managedOpen(open) {
      if (open) {
        this.$emit('show');
        if (this.transitionTimer) {
          clearTimeout(this.transitionTimer);
        }
        if (this.hideTimer) {
          clearTimeout(this.hideTimer);
        }
        this.showTimer = setTimeout(() => {
          this.visible = true;
          this.opacity = 1;
          this.$emit('shown');
        }, 0);
      } else {
        this.$emit('hide');
        if (this.showTimer) {
          clearTimeout(this.showTimer);
        }
        this.hideTimer = setTimeout(() => {
          this.visible = false;
          this.opacity = 0;
          this.transitionTimer = setTimeout(() => {
            this.$emit('hidden');
          }, this.animationDuration);
        }, 0);
      }
    },
  },

  mounted() {
    document.addEventListener('click', this.onDocumentClick);
    document.addEventListener('keydown', this.onEscPress, { capture: true });
  },

  beforeUnmount() {
    document.removeEventListener('click', this.onDocumentClick);
    document.removeEventListener('keydown', this.onEscPress, { capture: true });
  },

  methods: {
    onDocumentClick(event: MouseEvent | TouchEvent) {
      if (this.noHideOnOutsideClick || !this.visible) {
        return;
      }
      // check if we clicked within the popper, if so don't do anything
      if (this.dialog?.$el?.contains(event.target)) {
        return;
      }
      this.managedOpen = false;
    },

    onEscPress(event: KeyboardEvent) {
      const keyCode = event.keyCode || event.which;

      if (!this.managedOpen || !(keyCode === 27 /* ESC */)) {
        return;
      }

      this.managedOpen = false;
    },
  },
});
</script>
