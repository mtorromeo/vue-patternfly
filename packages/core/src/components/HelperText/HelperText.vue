<template>
  <component v-bind="ouiaProps" :is="component" :class="styles.helperText">
    <slot />
  </component>
</template>

<script lang="ts">
export const HelperTextComponentKey = Symbol('HelperTextComponentKey') as InjectionKey<'div' | 'ul'>;

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  component?: 'div' | 'ul';
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/HelperText/helper-text';
import { type InjectionKey, type HTMLAttributes, provide } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfHelperText',
});

const props = withDefaults(defineProps<Props>(), {
  component: 'div',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

provide(HelperTextComponentKey, props.component);
</script>
