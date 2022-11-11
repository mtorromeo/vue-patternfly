<script lang="ts">
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';

import { type DefineComponent, defineComponent, h, mergeProps, type PropType, resolveDynamicComponent } from 'vue';

export default defineComponent({
  name: 'PfInputGroupText',

  props: {
    /** Component that wraps the input group text. */
    component: {
      type: [String, Object] as PropType<DefineComponent>,
      default: 'span',
    },

    /** Input group plain variant */
    plain: Boolean,
  },

  render() {
    const component = resolveDynamicComponent(this.component) as DefineComponent;
    return h(component, mergeProps({
      class: [
        styles.inputGroupText, {
          [styles.modifiers.plain]: this.plain,
        },
      ],
    }, this.$props), this.$slots);
  },
});
</script>
