<script>
import styles from '@patternfly/react-styles/css/layouts/Split/split';

import {render} from '../factory';

export default {
  name: 'PfSplit',

  props: {
    /** The tag or component to use as container */
    component: {
      type: String,
      default: 'div',
    },
    /** Adds space between children */
    gutter: Boolean,
  },

  render() {
    return render.call(this, styles.split, styles.modifiers);
  },
};
</script>
