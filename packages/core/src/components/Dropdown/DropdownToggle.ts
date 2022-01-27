import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

import { defineComponent, h, inject, mergeProps, VNode } from 'vue';
import PfToggle from './Toggle';
import CaretDownIcon from '@vue-patternfly/icons/dist/esm/icons/caret-down-icon';
import { DropdownDisabledClassKey, DropdownToggleIndicatorClassKey, DropdownToggleTextClassKey } from './Dropdown';

export default defineComponent({
  name: 'PfDropdownToggle',

  props: {
    open: Boolean,
    variant: {
      type: String,
      default: 'checkbox',
      validator: (v: any) => ['checkbox', 'action'].includes(v),
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

  setup() {
    return {
      toggleTextClass: inject(DropdownToggleTextClassKey, styles.dropdownToggleText),
      toggleIndicatorClass: inject(DropdownToggleIndicatorClassKey, styles.dropdownToggleIcon),
      disabledClass: inject(DropdownDisabledClassKey, styles.modifiers.disabled),
    };
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

    const children: VNode[] = [];

    if (this.$slots.icon) {
      children.push(
        h('span', { class: styles.dropdownToggleImage }, this.$slots.icon()),
      );
    }

    if (this.$slots.default) {
      children.push(
        h('span', { class: indicator ? this.toggleTextClass : null }, this.$slots.default()),
      );
    }

    if (indicator) {
      children.push(
        h('span', {
          class: { [this.toggleIndicatorClass]: !splitButton },
        }, indicator),
      );
    }

    const toggle = h(PfToggle, mergeProps({
      open: this.open,
      disabled: this.disabled,
      splitButton,
      'aria-label': splitButton ? this.ariaLabel : null,
      'onUpdate:open': (v: boolean) => this.$emit('update:open', v),
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
            [this.disabledClass]: this.disabled,
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
});
