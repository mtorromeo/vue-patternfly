import styles from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';

import { h, mergeProps, resolveDynamicComponent, type DefineComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'PfBullseye',

  inheritAttrs: false,

  props: {
    component: {
      type: [String, Object],
      default: 'div',
    },
  },

  setup(props, { slots, attrs }) {
    const Component = resolveDynamicComponent(props.component) as DefineComponent;
    return () => h(Component, mergeProps({ class: styles.bullseye }, attrs), slots);
  },
});
