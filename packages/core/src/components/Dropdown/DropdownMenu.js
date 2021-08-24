import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

import { h, mergeProps, provide, computed } from 'vue';
import { provideChildrenTracker, keyNavigation } from '../../use';

export default {
  name: 'PfDropdownMenu',

  inject: {
    menuComponent: {
      default: null,
    },
    menuClass: {
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
    autoFocus: {
      type: Boolean,
      default: true,
    },
    grouped: Boolean,
  },

  setup() {
    const children = provideChildrenTracker();
    const items = computed(() => children.value.filter(
      c => Boolean(c.focusElement()) && !c.disabled && c.focus,
    ));
    const onKeydown = keyNavigation(items);
    provide('keydown', onKeydown);
    return {
      items,
    };
  },

  mounted() {
    if (this.autoFocus && this.items.length) {
      this.items[0].focus();
    }
  },

  render() {
    const props = {
      class: [this.menuClass || styles.dropdownMenu, {
        [styles.modifiers.alignRight]: this.position === 'right',
      }],
      hidden: !this.open,
    };

    const items = this.$slots.default ? this.$slots.default() : [];

    if (this.component === 'div') {
      return h(
        'div',
        mergeProps({
          onClick: e => this.$emit('select', e),
        }, props),
        items,
      );
    }

    return h(
      this.menuComponent || (this.grouped ? 'div' : this.component),
      mergeProps({
        role: 'menu',
      }, props),
      items,
    );
  },
};
