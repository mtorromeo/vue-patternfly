<script>
import styles from '@patternfly/react-styles/css/layouts/Gallery/gallery';

import {render} from '../factory';

export default {
  name: 'PfGallery',

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
    return render.call(this, styles.gallery, styles.modifiers);
  },
};
</script>
