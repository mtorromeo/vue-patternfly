<template>
  <div v-bind="ouiaProps" :class="styles.mastheadBrand">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfMastheadBrand',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** The masthead logo, typically a pf-masthead-logo */
  default?: (props?: Record<never, never>) => any;
}>();
</script>
