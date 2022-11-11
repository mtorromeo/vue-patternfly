<template>
  <div
    :class="[styles.toolbarContent, {
      [styles.modifiers.hidden]: numberOfFilters === 0 || expanded,
    }]"
    :hidden="numberOfFilters === 0 || expanded"
  >
    <pf-toolbar-group
      :x-class="{ [styles.modifiers.hidden]: collapseListedFilters }"
      :x-hidden="collapseListedFilters"
      :x-aria-hidden="collapseListedFilters"
      @mounted="$emit('mounted', $event)"
    />

    <pf-toolbar-group v-if="collapseListedFilters && numberOfFilters > 0 && !expanded">
      <pf-toolbar-item>{{ numberOfFilters }} filters applied</pf-toolbar-item>
    </pf-toolbar-group>

    <pf-toolbar-item v-if="showClearFiltersButton && !expanded">
      <pf-button
        variant="link"
        inline
        @click="$emit('clear-all-filters')"
      >{{ clearFiltersButtonText }}</pf-button>
    </pf-toolbar-item>
  </div>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { globalBreakpoints } from './ToolbarUtils';
import PfToolbarGroup from './ToolbarGroup.vue';
import PfToolbarItem from './ToolbarItem.vue';
import PfButton from '../Button.vue';
import { useWindowSize } from '@vueuse/core';
import { defineComponent, markRaw, type PropType } from 'vue';

export default defineComponent({
  name: 'PfToolbarChipGroupContent',

  components: {
    PfToolbarGroup,
    PfToolbarItem,
    PfButton,
  },

  props: {
    clearFiltersButtonText: {
      type: String,
      default: 'Clear all filters',
    },

    collapseListedFiltersBreakpoint: {
      type: String as PropType<keyof typeof globalBreakpoints | 'all'>,
      default: 'lg',
      validator: (v: any) => v === 'all' || v in globalBreakpoints,
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
    const { width: windowWidth } = useWindowSize();
    return {
      windowWidth,
      styles: markRaw(styles) as typeof styles,
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
});
</script>
