import _styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

// commonjs bug
let styles = _styles.default;

import {h} from 'vue';

export default {
  name: 'Toggle',

  props: {
    type: {
      type: String,
      default: 'button',
      validator: v => ['button', 'submit', 'reset'].includes(v),
    },
    open: Boolean,
    splitButton: Boolean,
    active: Boolean,
    plain: Boolean,
    primary: Boolean,
    bubbleEvent: Boolean,
  },

  render() {
    return h('button', {
      class: [
        this.splitButton ? styles.dropdownToggleButton : styles.dropdownToggle,
        {
          [styles.modifiers.active]: this.active,
          [styles.modifiers.plain]: this.plain,
          [styles.modifiers.primary]: this.primary,
        },
      ],
      type: this.type,
      'aria-expanded': this.open,
      onClick: this.toggle,
      onKeyDown: this.onKeyDown,
    }, this.$slots.default ? this.$slots.default() : []);
  },

  methods: {
    toggle() {
      this.$emit('update:open', !this.open);
    },

    onKeyDown(event) {
      if (event.key === 'Tab' && !this.open) {
        return;
      }
      if (!this.bubbleEvent) {
        event.stopPropagation();
      }
      event.preventDefault();
      if ((event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') && this.open) {
        this.toggle();
      } else if ((event.key === 'Enter' || event.key === ' ') && !this.open) {
        this.toggle();
        this.$emit('enter');
      }
    },
  },
};
