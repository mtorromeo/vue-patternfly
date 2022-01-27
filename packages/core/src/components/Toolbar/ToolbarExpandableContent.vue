<template>
  <div :class="[styles.toolbarExpandableContent, { [styles.modifiers.expanded]: expanded }]">
    <slot />

    <pf-toolbar-group v-if="numberOfFilters" :class="styles.modifiers.chipContainer">
      <slot name="chip-container" />
      <pf-toolbar-item v-if="showClearFiltersButton">
        <pf-button variant="link" inline @click="clearAllFilters">{{ clearFiltersButtonText }}</pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
  </div>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { defineComponent, inject, markRaw } from 'vue';
import PfButton from '../Button.vue';
import { ToolbarClearAllFiltersKey, ToolbarNumberOfFiltersKey } from './Toolbar.vue';
import PfToolbarGroup from './ToolbarGroup.vue';
import PfToolbarItem from './ToolbarItem.vue';

export default defineComponent({
  name: 'PfToolbarExpandableContent',

  components: {
    PfToolbarGroup,
    PfToolbarItem,
    PfButton,
  },

  props: {
    expanded: Boolean,
    showClearFiltersButton: Boolean,

    clearFiltersButtonText: {
      type: String,
      default: 'Clear all filters',
    },
  },

  setup() {
    return {
      styles: markRaw(styles),
      numberOfFilters: inject(ToolbarNumberOfFiltersKey),
      clearAllFilters: inject(ToolbarClearAllFiltersKey),
    };
  },
});
</script>
