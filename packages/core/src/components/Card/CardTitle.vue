<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Card/card';

import { type DefineComponent, defineComponent, h, type PropType, resolveDynamicComponent } from 'vue';

export default defineComponent({
  name: 'PfCardTitle',

  props: {
    /** Sets the base component to render. */
    component: {
      type: [String, Object] as PropType<string | DefineComponent>,
      default: 'div',
    },
  },

  render() {
    const component = resolveDynamicComponent(this.component) as DefineComponent;
    return h(component, { class: styles.cardTitle }, this.$slots);
  },
});
</script>
