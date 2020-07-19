
import _styles from '@patternfly/react-styles/css/components/Page/page';

// commonjs bug
let styles = _styles.default;

import {h, mergeProps} from 'vue';
const PageHeaderTools = (props, {slots}) => h('div', mergeProps({class: [styles.pageHeaderTools]}, props), [slots.default()]);
PageHeaderTools.inheritAttrs = false;
export default PageHeaderTools;
