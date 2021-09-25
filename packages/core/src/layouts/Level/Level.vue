<script>
import styles from '@patternfly/react-styles/css/layouts/Level/level';

import { render } from '../factory';

export default {
  name: 'PfLevel',

  props: {
    /** The tag or component to use as container */
    component: {
      type: [String, Object],
      default: 'div',
    },
    /** Adds space between children */
    gutter: Boolean,
  },

  render() {
    return render.call(this, styles.level, styles.modifiers);
  },
};
</script>
