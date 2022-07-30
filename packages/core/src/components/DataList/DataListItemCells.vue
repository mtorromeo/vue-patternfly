<template>
  <div :class="styles.dataListItemContent">
    <slot />
  </div>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

import { defineComponent, markRaw } from "vue";

export default defineComponent({
  name: 'PfDataListItemCells',

  setup() {
    return {
      styles: markRaw(styles) as typeof styles,
    };
  },
});
</script>
