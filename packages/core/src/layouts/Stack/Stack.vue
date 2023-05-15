<script lang="ts">
import styles from '@patternfly/react-styles/css/layouts/Stack/stack';
import { type DefineComponent, defineComponent, type PropType, type SlotsType } from 'vue';

import { render } from '../factory';

export default defineComponent({
  name: 'PfStack',

  props: {
    /** The tag or component to use as container */
    component: {
      type: [String, Object] as PropType<string | DefineComponent>,
      default: 'div',
    },
    /** Adds space between children */
    gutter: Boolean,
  },

  slots: Object as SlotsType<{
    default?: Record<never, never>;
  }>,

  render() {
    return render.call(this, styles.stack, styles.modifiers);
  },
});
</script>
