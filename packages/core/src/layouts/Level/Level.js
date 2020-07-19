import _styles from '@patternfly/react-styles/css/layouts/Level/level';

// commonjs bug
let styles = _styles.default;

import LayoutFactory from '../factory';
export default LayoutFactory('Level', styles.level, styles.modifiers);
