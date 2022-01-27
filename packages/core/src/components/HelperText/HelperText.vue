<template>
  <component :is="component" :class="styles.helperText">
    <slot />
  </component>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/HelperText/helper-text';
import { defineComponent, InjectionKey, markRaw, PropType, provide } from 'vue';

export const HelperTextComponentKey = Symbol('HelperTextComponentKey') as InjectionKey<'div' | 'ul'>;

export default defineComponent({
  name: 'PfHelperText',

  props: {
    component: {
      type: String as PropType<'div' | 'ul'>,
      default: 'div',
      validator: (v: any) => ['div', 'ul'].includes(v),
    },
  },

  setup(props) {
    provide(HelperTextComponentKey, props.component);
    return {
      styles: markRaw(styles),
    };
  },
});
</script>
