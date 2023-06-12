<template>
  <component :is="component" :class="styles.helperText">
    <slot />
  </component>
</template>

<script lang="ts">
export const HelperTextComponentKey = Symbol('HelperTextComponentKey') as InjectionKey<'div' | 'ul'>;

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  component?: 'div' | 'ul';
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/HelperText/helper-text';
import { type InjectionKey, type HTMLAttributes, provide } from 'vue';

defineOptions({
  name: 'PfHelperText',
});

const props = withDefaults(defineProps<Props>(), {
  component: 'div',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

provide(HelperTextComponentKey, props.component);
</script>
