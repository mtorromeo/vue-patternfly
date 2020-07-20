import _styles from '@patternfly/react-styles/css/components/Page/page';

// commonjs bug
let styles = _styles.default;

import {h, mergeProps} from 'vue';

const TextContent = (props, {slots}) => h('div', mergeProps({
  class: styles.content,
}, props), slots.default());

export default TextContent;
