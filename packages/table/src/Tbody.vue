<template>
  <tbody
    v-bind="ouiaProps"
    role="rowgroup"
    :class="[styles.tableTbody, {
      [styles.modifiers.striped]: oddStriped,
      [styles.modifiers.stripedEven]: evenStriped,
      [styles.modifiers.expanded]: expanded,
    }]"
  >
    <slot />
  </tbody>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PfTbody',
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
  /** Modifies the body to allow for expandable rows */
  expanded?: boolean;
  /** Flag indicating the <tbody> contains oddly striped rows. */
  oddStriped?: boolean;
  /** Flag indicating the <tbody> contains evenly striped rows. */
  evenStriped?: boolean;
}
</script>
