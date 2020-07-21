import _styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

// commonjs bug
let styles = _styles.default;

import {h, mergeProps} from 'vue';

export default {
  name: 'DropdownMenu',

  inject: {
    menuComponent: {
      default: null,
    },
  },

  props: {
    component: {
      type: String,
      default: 'ul',
    },
    position: {
      type: String,
      default: 'left',
      validator: v => ['left', 'right'].includes(v),
    },
    open: {
      type: Boolean,
      default: true,
    },
    openedOnEnter: Boolean,
    autoFocus: Boolean,
    grouped: Boolean,
  },

  render() {
    const props = {
      class: [styles.dropdownMenu, {
        [styles.modifiers.alignRight]: this.position === 'right',
      }],
      hidden: !this.open,
    };

    if (this.component === 'div') {
      return h('div', mergeProps({
        onClick: e => this.$emit('select', e),
      }, props), this.$slots.default());
    }

    return h(this.menuComponent || (this.grouped ? 'div' : this.component), mergeProps({
      role: 'menu',
    }, props), this.$slots.default());
  },
};
