import styles from '@patternfly/react-styles/css/components/Page/page';

import {h, mergeProps} from 'vue';

const PfTextContent = (props, {slots}) => h('div', mergeProps({
  class: styles.content,
}, props), slots.default());

export default PfTextContent;
