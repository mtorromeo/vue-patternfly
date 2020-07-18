
import _styles from '@patternfly/react-styles/css/components/Page/page';

// commonjs bug
let styles = _styles.default;

import {h} from 'vue';
export default (props, {attrs}) => h('img', {class: [styles.brand], ...attrs});
