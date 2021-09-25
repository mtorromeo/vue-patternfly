import { h, resolveDynamicComponent } from 'vue';

export default {
  name: 'PfLevelItem',

  props: {
    /** The tag or component to use as container */
    component: {
      type: [String, Object],
      default: 'div',
    },
  },

  render() {
    return h(resolveDynamicComponent(this.component), {}, this.$slots);
  },
};
