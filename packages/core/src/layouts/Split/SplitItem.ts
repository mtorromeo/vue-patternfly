import styles from '@patternfly/react-styles/css/layouts/Split/split';
import { h, resolveDynamicComponent, defineComponent, DefineComponent } from 'vue';

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

  setup(props, { slots }) {
    const Component = resolveDynamicComponent(props.component) as DefineComponent;
    return () => h(Component, {
      class: [styles.splitItem, {
        [styles.modifiers.fill]: props.filled,
      }],
    }, slots);
  },
});
