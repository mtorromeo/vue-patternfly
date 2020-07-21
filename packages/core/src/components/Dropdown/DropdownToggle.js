import _styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

// commonjs bug
let styles = _styles.default;

import {h, mergeProps} from 'vue';
import Toggle from './Toggle';
import CaretDownIcon from '@vue-patternfly4/icons/dist/esm/icons/caret-down-icon';

export default {
  name: 'DropdownToggle',

  props: {
    open: Boolean,
    variant: {
      type: String,
      default: 'checkbox',
      validator: v => ['checkbox', 'action'].includes(v),
    },
    ariaLabel: {
      type: String,
      default: 'Select',
    },
    disabled: Boolean,
  },

  render() {
    const splitButton = Boolean(this.$slots.splitButtons);

    let indicator = null;

    if (this.$slots.indicator) {
      indicator = this.$slots.indicator();
    } else {
      indicator = h(CaretDownIcon);
    }

    const children = [];

    if (this.$slots.icon) {
      children.push(
        h('span', {class: [styles.dropdownToggleImage]}, this.$slots.icon()),
      );
    }

    if (this.$slots.default) {
      children.push(
        h('span', {class: indicator ? styles.dropdownToggleText : null}, this.$slots.default()),
      );
    }

    if (indicator) {
      children.push(
        h('span', {
          class: {[styles.dropdownToggleIcon]: !splitButton},
        }, indicator),
      );
    }

    const toggle = h(Toggle, mergeProps({
      open: this.open,
      disabled: this.disabled,
      splitButton,
      'aria-label': splitButton ? this.ariaLabel : null,
      'onUpdate:open': v => this.$emit('update:open', v),
      onEnter: () => this.$emit('enter'),
    }, this.$attrs), {
      default: () => children,
    });

    if (splitButton) {
      return h('div', {
        class: [
          styles.dropdownToggle,
          styles.modifiers.splitButton,
          {
            [styles.modifiers.action]: this.variant === 'action',
            [styles.modifiers.disabled]: this.disabled,
          },
        ],
      }, [
        this.$slots.splitButtons(),
        toggle,
      ]);
    }

    return toggle;
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