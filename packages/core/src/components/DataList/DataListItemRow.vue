<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.dataListItemRow,
      {
        [styles.modifiers[wrapModifier ?? 'nowrap']]: wrapModifier,
      },
    ]"
  >
    <slot v-if="!!datalistItem?.expandable.value" name="toggle">
      <pf-data-list-toggle :expanded="datalistItem?.expanded.value" @click="toggle" />
    </slot>

    <auto-wrap :component="PfDataListItemCells" :include="PfDataListCell">
      <slot />
    </auto-wrap>
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Determines which wrapping modifier to apply to the row */
  wrapModifier?: DataListWrapModifier;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { inject, type HTMLAttributes, type VNode } from 'vue';
import PfDataListItemCells from './DataListItemCells.vue';
import PfDataListCell from './DataListCell.vue';
import PfDataListToggle from './DataListToggle.vue';
import AutoWrap from '../../helpers/AutoWrap.vue';
import { DataListItemKey, type DataListWrapModifier } from './common';

defineOptions({
  name: 'PfDataListItemRow',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Controls, cells and actions of the row; consecutive pf-data-list-cell elements are wrapped in pf-data-list-item-cells */
  default?: (props?: Record<never, never>) => VNode[];
  /** Toggle of an expandable item, replacing the default pf-data-list-toggle */
  toggle?: (props?: Record<never, never>) => VNode[];
}>();

const datalistItem = inject(DataListItemKey, undefined);

function toggle() {
  if (datalistItem) {
    datalistItem.expanded.value = !datalistItem.expanded.value;
  }
}

defineExpose({
  toggle,
});
</script>
