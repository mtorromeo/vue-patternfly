<template>
  <div
    :class="[
      styles.dataListCell, {
        [styles.modifiers.noFill]: noFill,
        [styles.modifiers[wrapModifier]]: wrapModifier,
        [styles.modifiers.alignRight]: alignRight,
        [styles.modifiers.icon]: icon,
        [styles.modifiers[`flex_${width}` as 'flex_2' | 'flex_3' | 'flex_4' | 'flex_5']]: width > 1,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

import { defineComponent, markRaw, type PropType } from "vue";
import type { DataListWrapModifier } from './DataList.vue';

export default defineComponent({
  name: 'PfDataListCell',

  props: {
    noFill: Boolean,
    width: Number as PropType<1 | 2 | 3 | 4 | 5>,
    alignRight: Boolean,
    icon: Boolean,
    wrapModifier: String as PropType<DataListWrapModifier>,
  },

  setup() {
    return {
      styles: markRaw(styles) as typeof styles,
    };
  },
});
</script>
