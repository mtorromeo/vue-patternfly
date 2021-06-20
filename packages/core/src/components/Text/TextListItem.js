import { h, mergeProps } from 'vue';

export const TextListItemVariants = [
  'li',
  'dt',
  'dd',
];

const PfTextListItem = (props, { slots, attrs }) => h(props.component, mergeProps({ 'data-pf-content': true }, attrs), slots.default());

PfTextListItem.props = {
  component: {
    type: String,
    default: 'li',
    validator: v => TextListItemVariants.includes(v),
  },
};

PfTextListItem.inheritAttrs = false;

export default PfTextListItem;
