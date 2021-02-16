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
    </pf-toolbar-expandable-content>
  </div>
</template>

<script>
import {ref, provide} from 'vue'
import {breakpointProp, classesFromBreakpointProps} from '../../util';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import PfToolbarExpandableContent from './ToolbarExpandableContent.vue';

export default {
  name: 'PfToolbarContent',

  components: {PfToolbarExpandableContent},

  inject: ['expanded', 'showClearFiltersButton', 'clearFiltersButtonText'],

  props: {
    ...breakpointProp('visibility', String, ['', 'hidden', 'visible']),
    ...breakpointProp('alignment', String, ['', 'right', 'left']),
  },

  setup() {
    const expandable = ref(null);
    provide('expandableRef', expandable);
    return {expandable};
  },

  data() {
    return {
      styles,
    };
  },

  computed: {
    breakpointClasses() {
      return [
        ...classesFromBreakpointProps(this.$props, ['visibility', 'alignment'], styles, {short: true}),
      ];
    },
  },

  beforeUnmount() {
    this.expandable.value = null;
  },
};
</script>
