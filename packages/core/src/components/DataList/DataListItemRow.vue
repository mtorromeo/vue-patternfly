<template>
  <div
    :class="[
      styles.dataListItemRow, {
        [styles.modifiers[wrapModifier ?? 'nowrap']]: wrapModifier,
      },
    ]"
  >
    <slot v-if="!!datalistItem?.expandable.value" name="toggle">
      <pf-data-list-toggle @click="toggle" />
    </slot>

    <overridable-wrapper :component="PfDataListItemCells" :include="PfDataListCell">
      <slot />
    </overridable-wrapper>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

import { inject, type HTMLAttributes } from "vue";
import type { DataListWrapModifier } from './DataList.vue';
import PfDataListItemCells from './DataListItemCells.vue';
import PfDataListCell from './DataListCell.vue';
import PfDataListToggle from './DataListToggle.vue';
import OverridableWrapper from '../../helpers/OverridableWrapper';
import { DataListItemKey } from './DataListItem.vue';

defineOptions({
  name: 'PfDataListItemRow',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  wrapModifier?: DataListWrapModifier
}

defineProps<Props>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
  toggle?: (props: Record<never, never>) => any;
}>();

const datalistItem = inject(DataListItemKey);

function toggle() {
  if (datalistItem) {
    datalistItem.expanded.value = !datalistItem.expanded.value;
  }
}

defineExpose({
  toggle,
});
</script>
