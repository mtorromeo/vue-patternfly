<template>
  <component
    :is="typeahead ? 'div' : 'button'"
    :class="[styles.selectToggle, {
      [styles.modifiers.disabled]: disabled,
      [styles.modifiers.plain]: plain,
      [styles.modifiers.active]: active,
    }]"
    :style="{width}"
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

<script>
import styles from '@patternfly/react-styles/css/components/Select/select';
// import buttonStyles from '@patternfly/react-styles/css/components/Button/button';

import CaretDownIcon from '@vue-patternfly4/icons/dist/esm/icons/caret-down-icon';

export default {
  name: 'PfSelectToggle',

  components: {CaretDownIcon},

  inject: ['select'],

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
      validator: v => ['single', 'checkbox', 'typeahead', 'typeaheadmulti'].includes(v),
    },
  },

  emits: ['enter', 'close', 'update:open', 'typeaheadKeys'],

  data() {
    return {
      styles,
    };
  },

  mounted() {
    document.addEventListener('click', this.onDocClick);
    document.addEventListener('keydown', this.handleGlobalKeys);
  },

  beforeUnmount() {
    document.removeEventListener('click', this.onDocClick);
    document.removeEventListener('keydown', this.handleGlobalKeys);
  },

  methods: {
    toggle() {
      this.$emit('update:open', !this.open);
    },

    onDocClick(event) {
      const clickedOnToggle = () => this.select && this.select.$refs.select.contains(event.target);

      const clickedWithinMenu = () => {
        const menu = this.select && this.select.$refs.menu.$el;
        return menu && menu.contains && menu.contains(event.target);
      };

      if (this.open && !(clickedOnToggle() || clickedWithinMenu())) {
        this.toggle();
        this.$emit('close');
      }
    },

    handleGlobalKeys(event) {
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
        const menu = this.select && this.select.$refs.menu.$el;
        return menu && menu.contains && menu.contains(event.target);
      };

      if (escFromToggle() || escFromWithinMenu()) {
        this.toggle();
        this.$emit('close');
        this.$el.focus();
      }
    },

    onKeydown(event) {
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
        return
      }

      if (
        (event.key === 'Tab' && !this.open) ||
        (event.key !== 'Enter' && event.key !== ' ')
      ) {
        return;
      }

      event.preventDefault();
      if ((event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') && this.open) {
        this.toggle();
        this.$emit('close');
        this.$el.focus();
      } else if ((event.key === 'Enter' || event.key === ' ') && !this.open) {
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
};
</script>
