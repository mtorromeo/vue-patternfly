<template>
  <component
    :is="typeahead ? 'div' : 'button'"
    :class="[styles.selectToggle, {
      [styles.modifiers.disabled]: disabled,
      [styles.modifiers.plain]: plain,
      [styles.modifiers.active]: active,
    }]"
    :style="{ width }"
    :disabled="disabled"
    @click="onClick"
    @keydown="onKeydown"
  >
    <slot />
    <span :class="styles.selectToggleArrow">
      <CaretDownIcon />
    </span>
  </component>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Select/select';
// import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { defineComponent, inject, markRaw, unref } from 'vue';

import CaretDownIcon from '@vue-patternfly/icons/dist/esm/icons/caret-down-icon';
import { SelectKey } from './Select.vue';

export default defineComponent({
  name: 'PfSelectToggle',

  components: { CaretDownIcon },

  props: {
    open: Boolean,
    typeahead: Boolean,
    disabled: Boolean,
    plain: Boolean,
    active: Boolean,
    type: {
      type: String,
      default: 'button',
    },
    width: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: 'single',
      validator: (v: any) => ['single', 'checkbox', 'typeahead', 'typeaheadmulti'].includes(v),
    },
  },

  emits: ['enter', 'close', 'update:open', 'typeaheadKeys'],

  setup() {
    return {
      styles: markRaw(styles) as typeof styles,
      select: inject(SelectKey),
    };
  },

  mounted() {
    document.addEventListener('click', this.onDocClick);
    document.addEventListener('touchstart', this.onDocClick);
    document.addEventListener('keydown', this.handleGlobalKeys);
  },

  beforeUnmount() {
    document.removeEventListener('click', this.onDocClick);
    document.removeEventListener('touchstart', this.onDocClick);
    document.removeEventListener('keydown', this.handleGlobalKeys);
  },

  methods: {
    toggle() {
      this.$emit('update:open', !this.open);
    },

    onDocClick(event: MouseEvent | TouchEvent) {
      const clickedOnToggle = () => event.target instanceof Element && unref(this.select?.element)?.contains?.(event.target);

      const clickedWithinMenu = () => {
        const menu = unref(this.select?.menu)?.$el;
        return event.target instanceof HTMLElement && menu?.contains?.(event.target);
      };

      if (this.open && !(clickedOnToggle() || clickedWithinMenu())) {
        this.toggle();
        this.$emit('close');
      }
    },

    handleGlobalKeys(event: KeyboardEvent) {
      if (
        this.open &&
        event.key === 'Tab' &&
        ['typeahead', 'typeaheadmulti'].includes(this.variant)
      ) {
        this.$emit('typeaheadKeys', 'tab');
        event.preventDefault();
        return;
      }

      const keyCode = event.keyCode || event.which;
      if (!this.open || !(keyCode === 27 /* ESC */ || event.key === 'Tab')) {
        return;
      }

      const escFromToggle = () => this.$parent && this.$parent.$el && this.$parent.$el.contains(event.target);

      const escFromWithinMenu = () => {
        const menu = unref(this.select?.menu)?.$el;
        return event.target instanceof HTMLElement && menu?.contains?.(event.target);
      };

      if (escFromToggle() || escFromWithinMenu()) {
        this.toggle();
        this.$emit('close');
        this.$el.focus();
      }
    },

    onKeydown(event: KeyboardEvent) {
      if (['typeahead', 'typeaheadmulti'].includes(this.variant)) {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          this.$emit('typeaheadKeys', (event.key === 'ArrowDown' && 'down') || (event.key === 'ArrowUp' && 'up'));
          event.preventDefault();
        } else if (event.key === 'Enter') {
          if (this.open) {
            this.$emit('typeaheadKeys', 'enter');
          } else {
            this.toggle();
          }
        }
        return;
      }

      if (
        (event.key === 'Tab' && !this.open) ||
        (event.key !== 'Enter' && event.key !== ' ')
      ) {
        return;
      }

      event.preventDefault();
      if (this.open) {
        this.toggle();
        this.$emit('close');
        this.$el.focus();
      } else {
        this.toggle();
        this.$emit('enter');
      }
    },

    onClick() {
      this.toggle();
      if (this.open) {
        this.$emit('close');
      }
    },
  },
});
</script>
