import {h, mergeProps} from 'vue';

export const TextListItemVariants = [
  'li',
  'dt',
  'dd',
];

const TextListItem = (props, {slots, attrs}) => h(props.component, mergeProps({'data-pf-content': true}, attrs), slots.default());

TextListItem.props = {
  component: {
    type: String,
    default: 'li',
    validator: v => TextListItemVariants.includes(v),
  },
};

TextListItem.inheritAttrs = false;

export default TextListItem;
