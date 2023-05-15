import styles from '@patternfly/react-styles/css/layouts/Split/split';
import { h, resolveDynamicComponent, defineComponent, type DefineComponent, type SlotsType } from 'vue';

export default defineComponent({
  name: 'PfSplitItem',

  props: {
    /** The tag or component to use as container */
    component: {
      type: [String, Object],
      default: 'div',
    },
    filled: Boolean,
  },

  slots: Object as SlotsType<{
    default?: Record<never, never>;
  }>,

  setup(props, { slots }) {
    const Component = resolveDynamicComponent(props.component) as DefineComponent;
    return () => h(Component, {
      class: [styles.splitItem, {
        [styles.modifiers.fill]: props.filled,
      }],
    }, slots);
  },
});
