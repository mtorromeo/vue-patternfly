import _styles from '@patternfly/react-styles/css/layouts/Gallery/gallery';

// commonjs bug
let styles = _styles.default;

import LayoutFactory from '../factory';
export default LayoutFactory('Gallery', styles.gallery, styles.modifiers);
