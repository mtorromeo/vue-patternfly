<template>
  <div
    v-bind="ouiaProps"
    :class="[styles.toolbar, breakpointClasses, {
      [styles.modifiers.fullHeight]: fullHeight,
      [styles.modifiers.static]: static,
      [styles.modifiers.sticky]: sticky,
      [styles.modifiers.primary]: colorVariant === 'primary',
      [styles.modifiers.secondary]: colorVariant === 'secondary',
      [styles.modifiers.noBackground]: colorVariant === 'no-background',
      [styles.modifiers.noPadding]: noPadding,
    }]"
  >
    <slot />
    <pf-toolbar-label-group-content
      :expanded="effectiveExpanded"
      :show-clear-filters-button="showClearFiltersButton"
      :clear-filters-button-text="clearFiltersButtonText"
      :number-of-filters="numberOfFilters"
      :collapse-listed-filters-breakpoint="collapseListedFiltersBreakpoint"
      @clear-all-filters="clearAllFilters"
      @mounted="labelGroupContent = $event"
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
export const ToolbarLabelGroupContentRefKey = Symbol('ToolbarLabelGroupContentRefKey') as InjectionKey<Ref<HTMLDivElement | null>>;
export const ToolbarNumberOfFiltersKey = Symbol('ToolbarNumberOfFiltersKey') as InjectionKey<ComputedRef<number>>;

export interface Props extends OUIAProps, InsetBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  /** Text to display in the clear all filters button */
  clearFiltersButtonText?: string;
  /** The breakpoint at which the listed filters in label groups are collapsed down to a summary */
  collapseListedFiltersBreakpoint?: keyof typeof globalBreakpoints;
  /** Flag indicating if a data toolbar toggle group's expandable content is expanded */
  expanded?: boolean;
  /** Flag indicating the toolbar height should expand to the full height of the container */
  fullHeight?: boolean;
  /** Flag indicating the toolbar is static */
  static?: boolean;
  /** Flag indicating the toolbar should stick to the top of its container */
  sticky?: boolean;
  /** Background color variant of the toolbar */
  colorVariant?: 'default' | 'no-background' | 'primary' | 'secondary';
  /** Flag indicating the toolbar padding is removed */
  noPadding?: boolean;
}
</script>

<script lang="ts" setup>
import { provide, ref, computed, watch, onBeforeUnmount, type InjectionKey, type Ref, type ComputedRef, type HTMLAttributes } from 'vue';
import { classesFromBreakpointProps, type InsetBreakpointProps } from '../../breakpoints';
import { useWindowSize } from '@vueuse/core';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import PfToolbarLabelGroupContent from './ToolbarLabelGroupContent.vue';
import { globalBreakpoints } from './common';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfToolbar',
});

const props = withDefaults(defineProps<Props>(), {
  clearFiltersButtonText: 'Clear all filters',
  collapseListedFiltersBreakpoint: 'lg',
  expanded: undefined,
  colorVariant: 'default',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'update:expanded', value: boolean): void;
  (name: 'clearAllFilters'): void;
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

const labelGroupContent: Ref<HTMLDivElement | null> = ref(null);
provide(ToolbarLabelGroupContentRefKey, labelGroupContent);

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
  if (labelGroupContent.value) {
    labelGroupContent.value = null;
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
  emit('clearAllFilters');
}
</script>
