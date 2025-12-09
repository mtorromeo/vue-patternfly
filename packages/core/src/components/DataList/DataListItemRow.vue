<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.dataListItemRow, {
        [styles.modifiers[wrapModifier ?? 'nowrap']]: wrapModifier,
      },
    ]"
  >
    <slot v-if="!!datalistItem?.expandable.value" name="toggle">
      <pf-data-list-toggle @click="toggle" />
    </slot>

    <auto-wrap :component="PfDataListItemCells" :include="PfDataListCell">
      <slot />
    </auto-wrap>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { inject, type HTMLAttributes } from "vue";
import type { DataListWrapModifier } from './DataList.vue';
import PfDataListItemCells from './DataListItemCells.vue';
import PfDataListCell from './DataListCell.vue';
import PfDataListToggle from './DataListToggle.vue';
import AutoWrap from '../../helpers/AutoWrap.vue';
import { DataListItemKey } from './DataListItem.vue';

defineOptions({
  name: 'PfDataListItemRow',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  wrapModifier?: DataListWrapModifier
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  toggle?: (props?: Record<never, never>) => any;
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
