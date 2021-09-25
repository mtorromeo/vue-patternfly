<template>
  <pf-popper
    :top="styles.modifiers.top"
    :bottom="styles.modifiers.bottom"
    :left="styles.modifiers.left"
    :right="styles.modifiers.right"
    :top-start="styles.modifiers.topLeft"
    :top-end="styles.modifiers.topRight"
    :bottom-start="styles.modifiers.bottomLeft"
    :bottom-end="styles.modifiers.bottomRight"
    :left-start="styles.modifiers.leftTop"
    :left-end="styles.modifiers.leftBottom"
    :right-start="styles.modifiers.rightTop"
    :right-end="styles.modifiers.rightBottom"
    :distance="distance"
    :placement="position"
    :visible="visible"
    :disable-flip="noFlip"
    :flip-behavior="flipBehavior"
    @click="managedOpen = !managedOpen"
    @keydown.enter="managedOpen = true"
  >
    <slot />

    <template #popper>
      <pf-focus-trap
        ref="dialog"
        :active="focusTrap && managedOpen"
        :class="[styles.popover, {
          [styles.modifiers.noPadding]: noPadding,
          [styles.modifiers.widthAuto]: autoWidth,
        }]"
        role="dialog"
        aria-modal="true"
        :aria-label="$slots.header ? null : ariaLabel"
        ::aria-labelledby="$slots.header ? `popover-${uniqueId}-header` : null"
        :aria-describedby="`popover-${uniqueId}-body`"
        :style="{
          minWidth: hasCustomMinWidth ? minWidth : null,
          maxWidth: hasCustomMaxWidth ? maxWidth : null,
          opacity,
          transition: getOpacityTransition(animationDuration)
        }"
      >
        <div :class="styles.popoverArrow" />
        <div :class="styles.popoverContent">
          <pf-close-button v-if="showClose" :aria-label="closeBtnAriaLabel" @click.prevent="managedOpen = false" />

          <pf-title v-if="$slots.header" :id="`popover-${uniqueId}-header`" h="6" size="md">
            <slot name="header" />
          </pf-title>

          <div :id="`popover-${uniqueId}-body`" :class="styles.popoverBody">
            <slot name="body" />
          </div>

          <footer v-if="$slots.footer" :id="`popover-${uniqueId}-footer`" :class="styles.popoverFooter">
            <slot name="footer" />
          </footer>
        </div>
      </pf-focus-trap>
    </template>
  </pf-popper>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { getUniqueId } from '../util';
import { useManagedProp } from '../use';
import { markRaw } from 'vue';
import popoverMaxWidth from '@patternfly/react-tokens/dist/js/c_popover_MaxWidth';
import popoverMinWidth from '@patternfly/react-tokens/dist/js/c_popover_MinWidth';

import PfFocusTrap from './FocusTrap.vue';
import PfPopper, { getOpacityTransition, positions } from './Popper';
import PfCloseButton from './CloseButton';
import PfTitle from './Title.vue';

export default {
  name: 'PfPopover',

  components: {
    PfFocusTrap,
    PfPopper,
    PfCloseButton,
    PfTitle,
  },

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
     * If false, tries to keep the popover in view by flipping it if necessary
     * If the position is set to 'auto', this prop is ignored
     */
    noFlip: Boolean,

    /**
     * The desired position to flip the popover to if the initial position is not possible.
     * By setting this prop to 'flip' it attempts to flip the popover to the opposite side if there is no space.
     * You can also pass an array of positions that determines the flip order. It should contain the initial position
     * followed by alternative positions if that position is unavailable.
     * Example: Initial position is 'top'. Button with popover is in the top right corner. 'flipBehavior' is set to
     * ['top', 'right', 'left']. Since there is no space to the top, it checks if right is available. There's also no
     * space to the right, so it finally shows the popover on the left.
     */
    flipBehavior: {
      type: [String, Array],
      default: () => ['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom'],
      validator(v) {
        if (v === 'flip') {
          return true;
        }
        if (!Array.isArray(v)) {
          return false;
        }
        return v.every(pos => positions.includes(pos));
      },
    },

    /** Hides the popover when a click occurs outside (only works if isVisible is not controlled by the user) */
    noHideOnOutsideClick: Boolean,

    /**
     * Popover position. Note: With 'noFlip' set to false,
     * it will change the position if there is not enough space for the starting position.
     * The behavior of where it flips to can be controlled through the flipBehavior prop.
     */
    position: {
      type: String,
      default: 'top',
      validator: v => positions.includes(v),
    },

    /** Minimum width of the popover (default 6.25rem) */
    minWidth: {
      type: String,
      default: popoverMinWidth && popoverMinWidth.value,
    },

    /** Maximum width of the popover (default 18.75rem) */
    maxWidth: {
      type: String,
      default: popoverMaxWidth && popoverMaxWidth.value,
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

  setup() {
    return {
      managedOpen: useManagedProp('open', false),
      styles: markRaw(styles),
    };
  },

  data() {
    return {
      visible: this.managedOpen,
      opacity: 0,
      hideTimer: null,
      showTimer: null,
      transitionTimer: null,
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
    getOpacityTransition,

    onDocumentClick(event) {
      if (this.noHideOnOutsideClick || !this.visible) {
        return;
      }
      // check if we clicked within the popper, if so don't do anything
      if (this.$refs.dialog.$el && this.$refs.dialog.$el.contains(event.target)) {
        return;
      }
      this.managedOpen = false;
    },

    onEscPress(event) {
      const keyCode = event.keyCode || event.which;

      if (!this.managedOpen || !(keyCode === 27 /* ESC */)) {
        return;
      }

      this.managedOpen = false;
    },
  },
};
</script>
