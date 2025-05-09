<template>
  <div
    v-bind="(ouiaProps as any)"
    :class="[styles.toolbar, breakpointClasses, {
      [styles.modifiers.fullHeight]: fullHeight,
      [styles.modifiers.static]: static,
      [styles.modifiers.pageInsets]: pageInsets,
      [styles.modifiers.sticky]: sticky,
    }]"
  >
    <slot />
    <pf-toolbar-chip-group-content
      :expanded="effectiveExpanded"
      :show-clear-filters-button="showClearFiltersButton"
      :clear-filters-button-text="clearFiltersButtonText"
      :number-of-filters="numberOfFilters"
      :collapse-listed-filters-breakpoint="collapseListedFiltersBreakpoint"
      @clear-all-filters="clearAllFilters"
      @mounted="chipGroupContent = $event"
    />
  </div>
</template>

<script lang="ts">
export const ToolbarToggleExpandedKey = Symbol('ToolbarToggleExpandedKey') as InjectionKey<() => void>;
export const ToolbarClearFilterButtonTextKey = Symbol('ToolbarClearFilterButtonTextKey') as InjectionKey<string>;
export const ToolbarShowClearFiltersButtonKey = Symbol('ToolbarShowClearFiltersButtonKey') as InjectionKey<ComputedRef<boolean>>;
export const ToolbarClearAllFiltersKey = Symbol('ToolbarClearAllFiltersKey') as InjectionKey<() => void>;
export const ToolbarUpdateNumberFiltersKey = Symbol('ToolbarUpdateNumberFiltersKey') as InjectionKey<(category: string, numberOfFilters: number) => void>;
export const ToolbarExpandedKey = Symbol('ToolbarExpandedKey') as InjectionKey<Ref<boolean>>;
export const ToolbarChipGroupContentRefKey = Symbol('ToolbarChipGroupContentRefKey') as InjectionKey<Ref<HTMLDivElement | null>>;
export const ToolbarNumberOfFiltersKey = Symbol('ToolbarNumberOfFiltersKey') as InjectionKey<ComputedRef<number>>;

export interface Props extends OUIAProps, InsetBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  /** Text to display in the clear all filters button */
  clearFiltersButtonText?: string;
  /** The breakpoint at which the listed filters in chip groups are collapsed down to a summary */
  collapseListedFiltersBreakpoint?: keyof typeof globalBreakpoints;
  /** Flag indicating if a data toolbar toggle group's expandable content is expanded */
  expanded?: boolean;
  /** Flag indicating the toolbar should use the Page insets */
  pageInsets?: boolean;
  /** Flag indicating the toolbar height should expand to the full height of the container */
  fullHeight?: boolean;
  /** Flag indicating the toolbar is static */
  static?: boolean;
  /** Flag indicating the toolbar should stick to the top of its container */
  sticky?: boolean;
}
</script>

<script lang="ts" setup>
import { provide, ref, computed, watch, onBeforeUnmount, type InjectionKey, type Ref, type ComputedRef, type HTMLAttributes } from 'vue';
import { classesFromBreakpointProps, type InsetBreakpointProps } from '../../breakpoints';
import { useWindowSize } from '@vueuse/core';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import PfToolbarChipGroupContent from './ToolbarChipGroupContent.vue';
import { globalBreakpoints } from './common';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfToolbar',
});

const props = withDefaults(defineProps<Props>(), {
  clearFiltersButtonText: 'Clear all filters',
  collapseListedFiltersBreakpoint: 'lg',
  expanded: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'update:expanded', value: boolean): void;
  (name: 'clear-all-filters'): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const managedToggleExpanded = ref(false);

const toggleManaged = computed(() => !props.expanded && props.expanded !== false);

const effectiveExpanded = computed({
  get() {
    return toggleManaged.value ? managedToggleExpanded.value : (props.expanded ?? false);
  },
  set(value: boolean) {
    if (toggleManaged.value) {
      managedToggleExpanded.value = value;
    }
    emit('update:expanded', value);
  },
});

provide(ToolbarExpandedKey, effectiveExpanded);

const chipGroupContent: Ref<HTMLDivElement | null> = ref(null);
provide(ToolbarChipGroupContentRefKey, chipGroupContent);

const { width: windowWidth } = useWindowSize();

const filterInfo: Ref<Record<string, number>> = ref({});
const numberOfFilters = computed(() => Object.values(filterInfo.value).reduce((acc, cur) => acc + cur, 0));
provide(ToolbarNumberOfFiltersKey, numberOfFilters);

const breakpointClasses = computed(() => classesFromBreakpointProps(props, ['inset'], styles));

const showClearFiltersButton = computed(() => numberOfFilters.value > 0);
provide(ToolbarShowClearFiltersButtonKey, showClearFiltersButton);

provide(ToolbarToggleExpandedKey, toggleExpanded);
provide(ToolbarClearFilterButtonTextKey, props.clearFiltersButtonText);
provide(ToolbarClearAllFiltersKey, clearAllFilters);
provide(ToolbarUpdateNumberFiltersKey, updateNumberFilters);

watch(windowWidth, () => {
  if (toggleManaged.value) {
    closeExpandableContent();
  }
});

onBeforeUnmount(() => {
  if (chipGroupContent.value) {
    chipGroupContent.value = null;
  }
});

function closeExpandableContent() {
  effectiveExpanded.value = false;
}

function toggleExpanded() {
  effectiveExpanded.value = !effectiveExpanded.value;
}

function updateNumberFilters(category: string, numberOfFilters: number) {
  filterInfo.value[category] = numberOfFilters;
}

function clearAllFilters() {
  emit('clear-all-filters');
}
</script>
