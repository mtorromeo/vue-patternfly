import styles from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';

import { h, mergeProps, resolveDynamicComponent, type DefineComponent, defineComponent, type SlotsType } from 'vue';

export default defineComponent({
  name: 'PfBullseye',

  inheritAttrs: false,

  props: {
    component: {
      type: [String, Object],
      default: 'div',
    },
  },

  slots: Object as SlotsType<{
    default?: Record<never, never>;
  }>,

  setup(props, { slots, attrs }) {
    const Component = resolveDynamicComponent(props.component) as DefineComponent;
    return () => h(Component, mergeProps({ class: styles.bullseye }, attrs), slots);
  },
});
