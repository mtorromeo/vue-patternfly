<template>
  <tfoot v-bind="ouiaProps" :class="styles.tableTfoot">
    <slot />
  </tfoot>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PfTfoot',
});

const props = defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
</script>

<script lang="ts">
import type { HTMLAttributes } from "vue";
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import styles from '@patternfly/react-styles/css/components/Table/table';

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
}
</script>
