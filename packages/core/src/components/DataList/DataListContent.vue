<template>
  <section :class="styles.dataListExpandableContent" :hidden="sectionHidden">
    <div
      :class="[
        styles.dataListExpandableContentBody, {
          [styles.modifiers.noPadding]: noPadding,
        },
      ]"
    >
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

import { computed, defineComponent, inject, markRaw } from "vue";
import { DataListItemKey } from './DataListItem.vue';

export default defineComponent({
  name: 'PfDataListContent',

  props: {
    noPadding: Boolean,
    hidden: {
      type: Boolean,
      default: undefined,
    },
  },

  setup(props) {
    const datalistItem = inject(DataListItemKey);

    return {
      styles: markRaw(styles) as typeof styles,
      sectionHidden: computed(() => props.hidden !== undefined ? props.hidden : !(datalistItem.expandable.value && datalistItem.expanded.value)),
    };
  },
});
</script>
