import _styles from '@patternfly/react-styles/css/components/Title/title';

// commonjs bug
let styles = _styles.default;

import {h, mergeProps} from 'vue';

const TitleSizes = [
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
];

const headingLevelSizeMap = {
  [1]: '2xl',
  [2]: 'xl',
  [3]: 'lg',
  [4]: 'md',
  [5]: 'md',
  [6]: 'md',
};

const Title = ({size, h: hl}, {slots, attrs}) => {
  size = size || headingLevelSizeMap[Number(hl)];

  return h(`h${hl}`, mergeProps({
    class: [styles.title, {
      [styles.modifiers[size]]: size,
    }],
  }, attrs), slots.default());
};

Title.props = {
  size: {
    type: String,
    default: '',
    validator: v => !v || TitleSizes.includes(v),
  },

  h: {
    type: [Number, String],
    default: 1,
    validator: v => typeof headingLevelSizeMap[Number(v)] !== 'undefined',
  },
};

Title.inheritAttrs = false;

export default Title;
