<template>
  <div v-bind="ouiaProps" :class="styles.dataListItemControl">
    <slot />
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import type { HTMLAttributes, VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDataListControl',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Controls of the item, such as pf-data-list-check, pf-data-list-toggle or pf-data-list-drag-button */
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
