<template>
  <div
    :class="[styles.toolbarExpandableContent, {[styles.modifiers.expanded]: expanded}]"
    v-bind="$attrs"
  >
    <slot />

    <pf-toolbar-group v-if="numberOfFilters">
      <pf-toolbar-group />
      <pf-toolbar-item v-if="showClearFiltersButton">
        <pf-button variant="link" inline @click="clearAllFilters">
          {{ clearFiltersButtonText }}
        </pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
  </div>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import PfToolbarGroup from './ToolbarGroup.vue';
import PfToolbarItem from './ToolbarItem.vue';

export default {
  name: 'PfToolbarExpandableContent',

  components: {
    PfToolbarGroup,
    PfToolbarItem,
  },

  inject: ['numberOfFilters', 'clearAllFilters'],

  props: {
    expanded: Boolean,
    showClearFiltersButton: Boolean,

    clearFiltersButtonText: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      styles,
    };
  },
};
</script>
