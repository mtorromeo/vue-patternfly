<script lang="ts">
import styles from '@patternfly/react-styles/css/layouts/Level/level';
import { type DefineComponent, defineComponent, type PropType, type SlotsType } from 'vue';

import { render } from '../factory';

export default defineComponent({
  name: 'PfLevel',

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
    return render.call(this, styles.level, styles.modifiers);
  },
});
</script>
