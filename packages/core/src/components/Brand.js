
import _styles from '@patternfly/react-styles/css/components/Page/page';

// commonjs bug
let styles = _styles.default;

import {h, mergeProps} from 'vue';
const Brand = (props) => h('img', mergeProps({class: [styles.brand]}, props));
Brand.inheritAttrs = false;
export default Brand;
