import { defineComponent, h } from 'vue';

export const TextListVariants = [
  'ul',
  'ol',
  'dl',
];

export default defineComponent({
  name: 'PfTextList',

  props: {
    component: {
      type: String,
      default: 'ul',
      validator: (v: any) => TextListVariants.includes(v),
    },
  },

  render() {
    return h(this.component, { 'data-pf-content': true }, this.$slots);
  },
});
