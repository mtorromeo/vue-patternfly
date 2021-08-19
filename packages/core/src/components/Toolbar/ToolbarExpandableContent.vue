<template>
  <div
    :class="[styles.toolbarExpandableContent, {[styles.modifiers.expanded]: expanded}]"
    v-bind="$attrs"
  >
    <slot />

    <pf-toolbar-group
      v-if="numberOfFilters.value"
      :class="styles.modifiers.chipContainer"
    >
      <slot name="chip-container" />
      <pf-toolbar-item v-if="showClearFiltersButton">
        <pf-button
          variant="link"
          inline
          @click="clearAllFilters"
        >
          {{ clearFiltersButtonText }}
        </pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
  </div>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import PfButton from '../Button.vue';
import PfToolbarGroup from './ToolbarGroup.vue';
import PfToolbarItem from './ToolbarItem.vue';

export default {
  name: 'PfToolbarExpandableContent',

  components: {
    PfToolbarGroup,
    PfToolbarItem,
    PfButton,
  },

  inject: ['numberOfFilters', 'clearAllFilters'],

  props: {
    expanded: Boolean,
    showClearFiltersButton: Boolean,

    clearFiltersButtonText: {
      type: String,
      default: 'Clear all filters',
    },
  },

  data() {
    return {
      styles,
    };
  },
};
</script>
