<template>
  <div :class="[styles.toolbarExpandableContent, { [styles.modifiers.expanded]: expanded }]">
    <slot />

    <pf-toolbar-group v-if="numberOfFilters" :class="styles.modifiers.chipContainer">
      <slot name="chip-container" />
      <pf-toolbar-item v-if="showClearFiltersButton">
        <pf-button variant="link" inline @click="clearAllFilters ?? undefined">{{ clearFiltersButtonText }}</pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { inject, type HTMLAttributes } from 'vue';
import PfButton from '../Button.vue';
import { ToolbarClearAllFiltersKey, ToolbarNumberOfFiltersKey } from './Toolbar.vue';
import PfToolbarGroup from './ToolbarGroup.vue';
import PfToolbarItem from './ToolbarItem.vue';

defineOptions({
  name: 'PfToolbarExpandableContent',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  expanded?: boolean;
  showClearFiltersButton?: boolean;
  clearFiltersButtonText?: string;
}

withDefaults(defineProps<Props>(), {
  clearFiltersButtonText: 'Clear all filters',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
  'chip-container'?: (props: Record<never, never>) => any;
}>();

const numberOfFilters = inject(ToolbarNumberOfFiltersKey);
const clearAllFilters = inject(ToolbarClearAllFiltersKey);
</script>
