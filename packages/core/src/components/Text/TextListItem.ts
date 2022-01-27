import { defineComponent, h } from 'vue';

export const TextListItemVariants = [
  'li',
  'dt',
  'dd',
];

export default defineComponent({
  name: 'PfTextListItem',

  props: {
    component: {
      type: String,
      default: 'li',
      validator: (v: any) => TextListItemVariants.includes(v),
    },
  },

  render() {
    return h(this.component, { 'data-pf-content': true }, this.$slots);
  },
});
