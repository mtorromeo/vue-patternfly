import { h } from 'vue';

export const TextVariants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'a',
  'small',
  'blockquote',
  'pre',
];

export default {
  name: 'PfText',

  props: {
    component: {
      type: String,
      default: 'p',
      validator: v => TextVariants.includes(v),
    },
  },

  render() {
    return h(this.component, { 'data-pf-content': true }, this.$slots);
  },
};
