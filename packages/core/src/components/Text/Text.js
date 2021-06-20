import { h, mergeProps } from 'vue';

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

const PfText = (props, { slots, attrs }) => h(props.component, mergeProps({ 'data-pf-content': true }, attrs), slots.default());

PfText.props = {
  component: {
    type: String,
    default: 'p',
    validator: v => TextVariants.includes(v),
  },
};

PfText.inheritAttrs = false;

export default PfText;
