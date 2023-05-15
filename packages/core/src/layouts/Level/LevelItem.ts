import { h, resolveDynamicComponent, defineComponent, type DefineComponent, type SlotsType } from 'vue';

export default defineComponent({
  name: 'PfLevelItem',

  props: {
    /** The tag or component to use as container */
    component: {
      type: [String, Object],
      default: 'div',
    },
  },

  slots: Object as SlotsType<{
    default?: Record<never, never>;
  }>,

  setup(props, { slots }) {
    const Component = resolveDynamicComponent(props.component) as DefineComponent;
    return () => h(Component, {}, slots);
  },
});
