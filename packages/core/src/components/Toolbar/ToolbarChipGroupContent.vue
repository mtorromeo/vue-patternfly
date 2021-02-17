<template>
  <div
    :class="[styles.toolbarContent, {
      [styles.modifiers.hidden]: numberOfFilters === 0 || expanded,
    }]"
    :hidden="numberOfFilters === 0 || expanded"
  >
    <pf-toolbar-group
      :x-class="{[styles.modifiers.hidden]: collapseListedFilters}"
      :x-hidden="collapseListedFilters"
      :x-aria-hidden="collapseListedFilters"
      @mounted="$emit('mounted', $event)"
    />

    <pf-toolbar-group v-if="collapseListedFilters && numberOfFilters > 0 && !expanded">
      <pf-toolbar-item>{{ numberOfFilters }} filters applied</pf-toolbar-item>
    </pf-toolbar-group>

    <pf-toolbar-item v-if="showClearFiltersButton && !expanded">
      <pf-button variant="link" inline @click="$emit('clear-all-filters')">
        {{ clearFiltersButtonText }}
      </pf-button>
    </pf-toolbar-item>
  </div>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import {globalBreakpoints} from './ToolbarUtils';
import PfToolbarGroup from './ToolbarGroup.vue';
import PfToolbarItem from './ToolbarItem.vue';
import {useWindowWidth} from '../../use';

export default {
  name: 'PfToolbarChipGroupContent',

  components: {
    PfToolbarGroup,
    PfToolbarItem,
  },

  props: {
    clearFiltersButtonText: {
      type: String,
      default: 'Clear all filters',
    },

    collapseListedFiltersBreakpoint: {
      type: String,
      default: 'lg',
      validator: v => ['', 'all', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'].includes(v),
    },

    numberOfFilters: {
      type: Number,
      default: 0,
    },

    expanded: Boolean,
    showClearFiltersButton: Boolean,
  },

  emits: ['clear-all-filters', 'mounted'],

  setup() {
    return {
      windowWidth: useWindowWidth(),
    };
  },

  data() {
    return {
      styles,
    };
  },

  computed: {
    collapseListedFilters() {
      if (this.collapseListedFiltersBreakpoint === 'all') {
        return true;
      }
      return this.windowWidth < globalBreakpoints[this.collapseListedFiltersBreakpoint];
    },
  },
};
</script>
