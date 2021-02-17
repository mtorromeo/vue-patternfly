import {h, mergeProps} from 'vue';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

export default {
  name: 'PfOverflowMenuGroup',

  props: {
    persistent: Boolean,
    type: {
      type: String,
      default: '',
      validator: v => ['', 'button', 'icon'].includes(v),
    },
  },

  inject: {
    isBelowBreakpoint: {
      default: () => ({value: false}),
    },
  },

  render() {
    if (this.isBelowBreakpoint.value && !this.persistent) {
      return null;
    }

    return h('div', mergeProps({
      class: [
        styles.overflowMenuGroup, {
          [styles.modifiers.buttonGroup]: this.type === 'button',
          [styles.modifiers.iconButtonGroup]: this.type === 'icon',
        },
      ],
    }, this.$attrs), {
      default: () => this.$slots.default(),
    });
  },
};
