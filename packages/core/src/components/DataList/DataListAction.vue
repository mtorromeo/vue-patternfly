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

import { defineComponent, markRaw, PropType } from "vue";
import { formatBreakpointMods } from '../../util';

export default defineComponent({
  name: 'PfDataListAction',

  props: {
    plainButton: Boolean,
    visibility: Object as PropType<{
      default?: 'hidden' | 'visible';
      sm?: 'hidden' | 'visible';
      md?: 'hidden' | 'visible';
      lg?: 'hidden' | 'visible';
      xl?: 'hidden' | 'visible';
      '2xl'?: 'hidden' | 'visible';
    }>,
  },

  setup(props) {
    const breakpointClasses = formatBreakpointMods(props.visibility, styles);
    return {
      styles: markRaw(styles) as typeof styles,
      breakpointClasses,
    };
  },
});
</script>
