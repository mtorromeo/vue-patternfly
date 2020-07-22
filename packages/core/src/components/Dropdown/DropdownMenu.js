import _styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

// commonjs bug
let styles = _styles.default;

import {h, mergeProps, provide, computed} from 'vue';
import {provideChildrenTracker, keyNavigation} from '../../use';

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

  setup() {
    const items = [];
    provideChildrenTracker(items);
    const $items = computed(() => items.filter(
      c => Boolean(c.focusElement()) && !c.disabled && c.focus,
    ));
    const onKeyDown = keyNavigation($items);
    provide('keyDown', onKeyDown);
    return {
      '$items': $items,
    };
  },

  mounted() {
    if (this.autoFocus && this.$items.length) {
      this.$items[0].focus();
    }
  },

  render() {
    const props = {
      class: [styles.dropdownMenu, {
        [styles.modifiers.alignRight]: this.position === 'right',
      }],
      hidden: !this.open,
    };

    const items = this.$slots.default ? this.$slots.default() : [];

    if (this.component === 'div') {
      return h('div', mergeProps({
        onClick: e => this.$emit('select', e),
      }, props), items);
    }

    return h(this.menuComponent || (this.grouped ? 'div' : this.component), mergeProps({
      role: 'menu',
    }, props), items);
  },
};
