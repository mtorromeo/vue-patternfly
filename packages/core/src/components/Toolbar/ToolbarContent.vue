<template>
  <div :class="[styles.toolbarContent, breakpointClasses]">
    <div :class="styles.toolbarContentSection">
      <slot />
    </div>

    <pf-toolbar-expandable-content
      :expanded="expanded.value"
      :show-clear-filters-button="showClearFiltersButton"
      :clear-filters-button-text="clearFiltersButtonText"
    >
      <pf-toolbar-group @mounted="expandable = $event" />

      <template #chip-container>
        <pf-toolbar-group @mounted="chipContainer = $event" />
      </template>
    </pf-toolbar-expandable-content>
  </div>
</template>

<script>
import { ref, provide, markRaw } from 'vue';
import { breakpointProp, classesFromBreakpointProps } from '../../util';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import PfToolbarExpandableContent from './ToolbarExpandableContent.vue';
import PfToolbarGroup from './ToolbarGroup.vue';

export default {
  name: 'PfToolbarContent',

  components: { PfToolbarExpandableContent, PfToolbarGroup },

  inject: ['expanded', 'showClearFiltersButton', 'clearFiltersButtonText'],

  props: {
    ...breakpointProp('visibility', String, ['', 'hidden', 'visible']),
    ...breakpointProp('alignment', String, ['', 'right', 'left']),
  },

  setup() {
    const expandable = ref(null);
    provide('expandableRef', expandable);

    const chipContainer = ref(null);
    provide('chipContainerRef', chipContainer);

    return {
      expandable,
      chipContainer,
      styles: markRaw(styles),
    };
  },

  computed: {
    breakpointClasses() {
      return [
        ...classesFromBreakpointProps(this.$props, ['visibility', 'alignment'], styles, { short: true }),
      ];
    },
  },

  beforeUnmount() {
    if (this.expandable) {
      this.expandable.value = null;
    }
    if (this.chipContainer) {
      this.chipContainer.value = null;
    }
  },
};
</script>
