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
    autoFocus: {
      type: Boolean,
      default: true,
    },
    grouped: Boolean,
  },

  mounted() {
    if (this.autoFocus) {
      const autoFocus = this.getItems()
        .find(c => c.$el && !c.disabled && c.focus);
      if (autoFocus) {
        autoFocus.focus();
      }
    }
  },

  render() {
    const props = {
      class: [styles.dropdownMenu, {
        [styles.modifiers.alignRight]: this.position === 'right',
      }],
      hidden: !this.open,
    };

    this.$items = this.$slots.default ? this.$slots.default() : [];

    if (this.component === 'div') {
      return h('div', mergeProps({
        onClick: e => this.$emit('select', e),
      }, props), this.$items);
    }

    return h(this.menuComponent || (this.grouped ? 'div' : this.component), mergeProps({
      role: 'menu',
    }, props), this.$items);
  },

  methods: {
    getItems() {
      return this.$items
        .map(v => v.component.proxy)
        .filter(c => !c.disabled && c.role !== 'separator' && c.$el.getAttribute('role') !== 'separator');
    },
  },
};
