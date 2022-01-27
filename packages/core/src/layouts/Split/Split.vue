<script lang="ts">
import styles from '@patternfly/react-styles/css/layouts/Split/split';
import { DefineComponent, defineComponent, PropType } from 'vue';

import { render } from '../factory';

export default defineComponent({
  name: 'PfSplit',

  props: {
    /** The tag or component to use as container */
    component: {
      type: [String, Object] as PropType<string | DefineComponent>,
      default: 'div',
    },
    /** Adds space between children */
    gutter: Boolean,
  },

  render() {
    return render.call(this, styles.split, styles.modifiers);
  },
});
</script>
