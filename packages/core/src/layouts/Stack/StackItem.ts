import styles from '@patternfly/react-styles/css/layouts/Stack/stack';
import { h, resolveDynamicComponent, defineComponent, DefineComponent } from 'vue';

export default defineComponent({
  name: 'PfStackItem',

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
      class: [styles.stackItem, {
        [styles.modifiers.fill]: props.filled,
      }],
    }, slots);
  },
});
