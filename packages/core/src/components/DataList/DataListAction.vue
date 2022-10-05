<template>
  <div :class="[styles.dataListItemAction, breakpointClasses]">
    <div v-if="plainButton" :class="styles.dataListAction">
      <slot />
    </div>
    <slot v-else />
  </div>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

import { defineComponent, markRaw } from "vue";
import { breakpointProp, classesFromBreakpointProps } from '../../util';

export default defineComponent({
  name: 'PfDataListAction',

  props: {
    plainButton: Boolean,
    ...breakpointProp('visibility', String, ['', 'hidden', 'visible']),
  },

  setup(props) {
    const breakpointClasses = classesFromBreakpointProps(props, ['visibility'], styles, { short: true });
    return {
      styles: markRaw(styles) as typeof styles,
      breakpointClasses,
    };
  },
});
</script>
