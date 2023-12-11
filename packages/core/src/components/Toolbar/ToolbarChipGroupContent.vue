<template>
  <div
    :class="[styles.toolbarContent, {
      [styles.modifiers.hidden]: numberOfFilters === 0 || expanded,
    }]"
    :hidden="numberOfFilters === 0 || expanded"
  >
    <pf-toolbar-group
      :class="{ [styles.modifiers.hidden]: collapseListedFilters }"
      :hidden="collapseListedFilters"
      :aria-hidden="collapseListedFilters"
      @mounted="emit('mounted', $event)"
    />

    <pf-toolbar-group v-if="collapseListedFilters && numberOfFilters > 0 && !expanded">
      <pf-toolbar-item>{{ numberOfFilters }} filters applied</pf-toolbar-item>
    </pf-toolbar-group>

    <pf-toolbar-item v-if="showClearFiltersButton && !expanded">
      <pf-button
        variant="link"
        inline
        @click="emit('clear-all-filters')"
      >{{ clearFiltersButtonText }}</pf-button>
    </pf-toolbar-item>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { globalBreakpoints } from './common';
import PfToolbarGroup from './ToolbarGroup.vue';
import PfToolbarItem from './ToolbarItem.vue';
import PfButton from '../Button.vue';
import { useWindowSize } from '@vueuse/core';
import { computed, type HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfToolbarChipGroupContent',
});

export interface Props extends /* @vue-ignore */ Omit<HTMLAttributes, 'hidden'> {
  clearFiltersButtonText?: string;
  collapseListedFiltersBreakpoint?: keyof typeof globalBreakpoints | 'all';
  numberOfFilters?: number;
  expanded?: boolean,
  showClearFiltersButton?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  clearFiltersButtonText: 'Clear all filters',
  collapseListedFiltersBreakpoint: 'lg',
  numberOfFilters: 0,
});

const emit = defineEmits<{
  (name: 'clear-all-filters'): void;
  (name: 'mounted', el: HTMLDivElement): void;
}>();

defineSlots<Record<string, never>>();

const { width: windowWidth } = useWindowSize();

const collapseListedFilters = computed(() => {
  if (props.collapseListedFiltersBreakpoint === 'all') {
    return true;
  }
  return windowWidth.value < globalBreakpoints[props.collapseListedFiltersBreakpoint];
});
</script>
