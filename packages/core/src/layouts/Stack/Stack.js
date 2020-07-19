import _styles from '@patternfly/react-styles/css/layouts/Stack/stack';

// commonjs bug
let styles = _styles.default;

import LayoutFactory from '../factory';
export default LayoutFactory('Stack', styles.stack, styles.modifiers);
