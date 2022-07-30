<template>
  <div
    :class="[
      styles.dataListItemRow, {
        [styles.modifiers[wrapModifier]]: wrapModifier,
      },
    ]"
  >
    <slot v-if="expandable" name="toggle">
      <pf-data-list-toggle @click="expanded = !expanded" />
    </slot>

    <overridable-wrapper :component="PfDataListItemCells" :include="PfDataListCell">
      <slot />
    </overridable-wrapper>
  </div>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

import { defineComponent, inject, markRaw, PropType } from "vue";
import { DataListWrapModifier } from './DataList.vue';
import PfDataListItemCells from './DataListItemCells.vue';
import PfDataListCell from './DataListCell.vue';
import PfDataListToggle from './DataListToggle.vue';
import OverridableWrapper from '../OverridableWrapper';
import { DataListItemKey } from './DataListItem.vue';

export default defineComponent({
  name: 'PfDataListItemRow',

  components: {
    PfDataListToggle,
    OverridableWrapper,
  },

  props: {
    wrapModifier: String as PropType<DataListWrapModifier>,
  },

  setup() {
    const datalistItem = inject(DataListItemKey);

    return {
      PfDataListItemCells,
      PfDataListCell,

      expandable: datalistItem.expandable,
      expanded: datalistItem.expanded,
      styles: markRaw(styles) as typeof styles,
    };
  },
});
</script>
