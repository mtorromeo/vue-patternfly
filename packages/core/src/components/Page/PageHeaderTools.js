
import styles from '@patternfly/react-styles/css/components/Page/page';

import {h, mergeProps} from 'vue';
const PfPageHeaderTools = (props, {slots}) => h('div', mergeProps({class: [styles.pageHeaderTools]}, props), slots.default());
export default PfPageHeaderTools;
