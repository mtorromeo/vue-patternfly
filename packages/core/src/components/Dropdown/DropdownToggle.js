import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

import {h, mergeProps} from 'vue';
import PfToggle from './Toggle';
import CaretDownIcon from '@vue-patternfly4/icons/dist/esm/icons/caret-down-icon';

export default {
  name: 'PfDropdownToggle',

  inject: ['toggleTextClass', 'toggleIndicatorClass', 'toggleIconClass', 'disabledClass'],

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
    indicator: {
      type: Boolean,
      default: null,
    },
    disabled: Boolean,
  },

  render() {
    const splitButton = Boolean(this.$slots.buttons);

    let indicator = null;

    if (this.indicator === null ? !this.$slots.icon : this.indicator) {
      if (this.$slots.indicator) {
        indicator = this.$slots.indicator();
      } else {
        indicator = h(CaretDownIcon);
      }
    }

    const children = [];

    if (this.$slots.icon) {
      children.push(
        h('span', {class: [this.toggleIconClass || styles.dropdownToggleImage]}, this.$slots.icon()),
      );
    }

    if (this.$slots.default) {
      children.push(
        h('span', {class: indicator ? (this.toggleTextClass || styles.dropdownToggleText) : null}, this.$slots.default()),
      );
    }

    if (indicator) {
      children.push(
        h('span', {
          class: {[this.toggleIndicatorClass || styles.dropdownToggleIcon]: !splitButton},
        }, indicator),
      );
    }

    const toggle = h(PfToggle, mergeProps({
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
            [this.disabledClass || styles.modifiers.disabled]: this.disabled,
          },
        ],
      }, [
        this.$slots.buttons(),
        toggle,
      ]);
    }

    return toggle;
  },

  methods: {
    toggle() {
      this.$emit('update:open', !this.open);
    },
  },
};
