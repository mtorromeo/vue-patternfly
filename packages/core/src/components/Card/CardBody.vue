<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Card/card';

import { DefineComponent, defineComponent, h, PropType, resolveDynamicComponent } from 'vue';

export default defineComponent({
  name: 'PfCardBody',

  props: {
    /** Sets the base component to render. */
    component: {
      type: [String, Object] as PropType<string | DefineComponent>,
      default: 'div',
    },

    /** Enables the body Content to fill the height of the card. */
    filled: Boolean,
  },

  render() {
    const component = resolveDynamicComponent(this.component) as DefineComponent;
    return h(component, {
      class: [styles.cardBody, {
        [styles.modifiers.noFill]: !this.filled,
      }],
    }, this.$slots);
  },
});
</script>
