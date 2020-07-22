
import _styles from '@patternfly/react-styles/css/components/Page/page';

// commonjs bug
let styles = _styles.default;

import {h, mergeProps} from 'vue';
const PfBrand = (props) => h('img', mergeProps({class: [styles.brand]}, props));
PfBrand.inheritAttrs = false;
export default PfBrand;
