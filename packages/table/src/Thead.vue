<template>
  <thead
    v-bind="ouiaProps"
    :class="[styles.tableThead, {
      [styles.modifiers.nowrap]: noWrap,
      [styles.modifiers.nestedColumnHeader]: nestedHeader,
    }]"
  >
    <slot />
  </thead>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PfThead',
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

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Won't wrap the table head if true */
  noWrap?: boolean;
  /** Indicates the <thead> contains a nested header */
  nestedHeader?: boolean;
}
</script>
