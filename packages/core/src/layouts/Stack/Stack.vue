<script>
import styles from '@patternfly/react-styles/css/layouts/Stack/stack';

import { render } from '../factory';

export default {
  name: 'PfStack',

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
    return render.call(this, styles.stack, styles.modifiers);
  },
};
</script>
