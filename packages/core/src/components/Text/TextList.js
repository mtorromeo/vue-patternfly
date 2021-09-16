import { h, resolveDynamicComponent } from 'vue';

export const TextListVariants = [
  'ul',
  'ol',
  'dl',
];

export default {
  name: 'PfTextList',

  props: {
    component: {
      type: String,
      default: 'ul',
      validator: v => TextListVariants.includes(v),
    },
  },

  render() {
    return h(resolveDynamicComponent(this.component), { 'data-pf-content': true }, this.$slots);
  },
};
