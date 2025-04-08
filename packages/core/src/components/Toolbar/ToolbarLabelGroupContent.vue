<template>
  <div
    v-bind="ouiaProps"
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

    <pf-toolbar-group v-if="showNumberOfFilters || showDefaultClearFilter || $slots.default" variant="action-group-inline">
      <pf-toolbar-item v-if="showNumberOfFilters">{{ numberOfFilters }} filters applied</pf-toolbar-item>
      <pf-toolbar-item v-if="showDefaultClearFilter">
        <pf-button variant="link" inline @click="emit('clear-all-filters')">
          {{ clearFiltersButtonText }}
        </pf-button>
      </pf-toolbar-item>
      <slot />
    </pf-toolbar-group>
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
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfToolbarLabelGroupContent',
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'hidden'> {
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
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'clear-all-filters'): void;
  (name: 'mounted', el: HTMLDivElement): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const { width: windowWidth } = useWindowSize();

const collapseListedFilters = computed(() => {
  if (props.collapseListedFiltersBreakpoint === 'all') {
    return true;
  }
  return windowWidth.value < globalBreakpoints[props.collapseListedFiltersBreakpoint];
});

const showNumberOfFilters = computed(() => collapseListedFilters.value && props.numberOfFilters > 0 && !props.expanded);
const showDefaultClearFilter = computed(() => props.showClearFiltersButton && !props.expanded && !slots.default);
</script>
