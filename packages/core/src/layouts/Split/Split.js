import _styles from '@patternfly/react-styles/css/layouts/Split/split';

// commonjs bug
let styles = _styles.default;

import LayoutFactory from '../factory';
export default LayoutFactory('Split', styles.split, styles.modifiers);
