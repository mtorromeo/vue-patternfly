import { h, resolveDynamicComponent, defineComponent, DefineComponent } from 'vue';

export default defineComponent({
  name: 'PfLevelItem',

  props: {
    /** The tag or component to use as container */
    component: {
      type: [String, Object],
      default: 'div',
    },
  },

  setup(props, { slots }) {
    const Component = resolveDynamicComponent(props.component) as DefineComponent;
    return () => h(Component, {}, slots);
  },
});
