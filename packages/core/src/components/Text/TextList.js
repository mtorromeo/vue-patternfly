import {h, mergeProps} from 'vue';

export const TextListVariants = [
  'ul',
  'ol',
  'dl',
];

const TextList = (props, {slots, attrs}) => h(props.component, mergeProps({'data-pf-content': true}, attrs), slots.default());

TextList.props = {
  component: {
    type: String,
    default: 'ul',
    validator: v => TextListVariants.includes(v),
  },
};

TextList.inheritAttrs = false;

export default TextList;
