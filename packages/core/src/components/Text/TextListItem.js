import { h } from 'vue';

export const TextListItemVariants = [
  'li',
  'dt',
  'dd',
];

export default {
  name: 'PfTextListItem',

  props: {
    component: {
      type: String,
      default: 'li',
      validator: v => TextListItemVariants.includes(v),
    },
  },

  render() {
    return h(this.component, { 'data-pf-content': true }, this.$slots);
  },
};
