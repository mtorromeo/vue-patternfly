import { h, mergeProps } from 'vue';

export const TextListVariants = [
  'ul',
  'ol',
  'dl',
];

const PfTextList = (props, { slots, attrs }) => h(props.component, mergeProps({ 'data-pf-content': true }, attrs), slots.default());

PfTextList.props = {
  component: {
    type: String,
    default: 'ul',
    validator: v => TextListVariants.includes(v),
  },
};

PfTextList.inheritAttrs = false;

export default PfTextList;
