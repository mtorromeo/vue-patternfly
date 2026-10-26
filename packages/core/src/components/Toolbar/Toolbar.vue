<template>
  <div
    v-bind="ouiaProps"
    :id="id"
    ref="toolbarRef"
    :class="[
      styles.toolbar,
      breakpointClasses,
      {
        [styles.modifiers.container]: container,
        [styles.modifiers.vertical]: vertical,
        [styles.modifiers.fullHeight]: fullHeight,
        [styles.modifiers.static]: static,
        [styles.modifiers.sticky]: sticky,
        [styles.modifiers.stickyBase]: stickyBase,
        [styles.modifiers.stickyStuck]: stickyStuck,
        [styles.modifiers.primary]: colorVariant === 'primary',
        [styles.modifiers.secondary]: colorVariant === 'secondary',
        [styles.modifiers.noBackground]: colorVariant === 'no-background',
        [styles.modifiers.noPadding]: noPadding,
      },
    ]"
  >
    <slot />
    <pf-toolbar-label-group-content
      :expanded="effectiveExpanded"
      :show-clear-filters-button="showClearFiltersButton"
      :clear-filters-button-text="clearFiltersButtonText"
      :number-of-filters="numberOfFilters"
      :number-of-filters-text="numberOfFiltersText"
      :collapse-listed-filters-breakpoint="collapseListedFiltersBreakpoint"
      @clear-all-filters="clearAllFilters"
      @mounted="labelGroupContent = $event"
    >
      <template v-if="$slots['label-group-content']" #default>
        <slot name="label-group-content" />
      </template>
    </pf-toolbar-label-group-content>
  </div>
</template>

<script lang="ts">
export const ToolbarToggleExpandedKey = Symbol('ToolbarToggleExpandedKey') as InjectionKey<() => void>;
export const ToolbarClearFilterButtonTextKey = Symbol('ToolbarClearFilterButtonTextKey') as InjectionKey<string>;
export const ToolbarShowClearFiltersButtonKey = Symbol('ToolbarShowClearFiltersButtonKey') as InjectionKey<
  ComputedRef<boolean>
>;
export const ToolbarClearAllFiltersKey = Symbol('ToolbarClearAllFiltersKey') as InjectionKey<() => void>;
export const ToolbarUpdateNumberFiltersKey = Symbol('ToolbarUpdateNumberFiltersKey') as InjectionKey<
  (category: string, numberOfFilters: number) => void
>;
export const ToolbarExpandedKey = Symbol('ToolbarExpandedKey') as InjectionKey<Ref<boolean>>;
export const ToolbarLabelGroupContentRefKey = Symbol('ToolbarLabelGroupContentRefKey') as InjectionKey<
  Ref<HTMLDivElement | null>
>;
export const ToolbarNumberOfFiltersKey = Symbol('ToolbarNumberOfFiltersKey') as InjectionKey<ComputedRef<number>>;
export const ToolbarIdKey = Symbol('ToolbarIdKey') as InjectionKey<() => string>;
/** Renders the custom label group content of the toolbar, undefined without it */
export const ToolbarCustomLabelGroupContentKey = Symbol('ToolbarCustomLabelGroupContentKey') as InjectionKey<
  ComputedRef<(() => VNode[]) | undefined>
>;
/** Width of the toolbar when it is a container for CSS container queries, undefined otherwise */
export const ToolbarContainerWidthKey = Symbol('ToolbarContainerWidthKey') as InjectionKey<
  ComputedRef<number | undefined>
>;

interface Props extends OUIAProps, InsetBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  /** Id of the toolbar. Generated when not set. */
  id?: string;
  /** Text to display in the clear all filters button */
  clearFiltersButtonText?: string;
  /** The breakpoint at which the listed filters in label groups are collapsed down to a summary */
  collapseListedFiltersBreakpoint?: keyof typeof globalBreakpoints | 'all';
  /** Text to display in the total number of applied filters, when the listed filters are collapsed */
  numberOfFiltersText?: (numberOfFilters: number) => string;
  /** Flag indicating if a data toolbar toggle group's expandable content is expanded */
  expanded?: boolean;
  /** Flag indicating the toolbar height should expand to the full height of the container */
  fullHeight?: boolean;
  /** Flag indicating the toolbar is static */
  static?: boolean;
  /** Flag indicating the toolbar should stick to the top of its container. This property applies both the sticky position and styling. */
  sticky?: boolean;
  /** @beta Flag indicating the toolbar should have sticky positioning to the top of its container */
  stickyBase?: boolean;
  /** @beta Flag indicating the toolbar should have stuck styling, when the toolbar is not at the top of the scroll container */
  stickyStuck?: boolean;
  /** Background color variant of the toolbar */
  colorVariant?: 'default' | 'no-background' | 'primary' | 'secondary';
  /** Flag indicating the toolbar padding is removed */
  noPadding?: boolean;
  /** Flag indicating if the toolbar is a container for CSS container queries */
  container?: boolean;
  /** Flag indicating the toolbar has a vertical orientation */
  vertical?: boolean;
}
</script>

<script lang="ts" setup>
import {
  provide,
  ref,
  computed,
  watch,
  onBeforeUnmount,
  useTemplateRef,
  type InjectionKey,
  type Ref,
  type ComputedRef,
  type HTMLAttributes,
  type VNode,
  useId,
} from 'vue';
import { classesFromBreakpointProps, type InsetBreakpointProps } from '../../breakpoints';
import { useElementSize, useWindowSize } from '@vueuse/core';
import { getBreakpoint } from '../../util';
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
  id: () => useId(),
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  (name: 'update:expanded', value: boolean): void;
  (name: 'clearAllFilters'): void;
}>();

const slots = defineSlots<{
  /** Content of the toolbar, such as pf-toolbar-content */
  default?: (props?: Record<never, never>) => VNode[];
  /** Custom content appended to the label group of the filters, such as pf-toolbar-item or pf-toolbar-group. It replaces the default "Clear all filters" button. */
  'label-group-content'?: (props?: Record<never, never>) => VNode[];
}>();

provide(ToolbarIdKey, () => props.id);
provide(
  ToolbarCustomLabelGroupContentKey,
  computed(() => slots['label-group-content']),
);

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
const toolbarRef = useTemplateRef('toolbarRef');
const { width: toolbarWidth } = useElementSize(toolbarRef);
const containerWidth = computed(() => (props.container && toolbarWidth.value ? toolbarWidth.value : undefined));
provide(ToolbarContainerWidthKey, containerWidth);
const containerBreakpoint = computed(() => (containerWidth.value ? getBreakpoint(containerWidth.value) : undefined));

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
  if (toggleManaged.value && !props.container) {
    closeExpandableContent();
  }
});

// a container toolbar closes its expandable content when its own breakpoint changes
watch(containerBreakpoint, (breakpoint, oldBreakpoint) => {
  if (toggleManaged.value && breakpoint && oldBreakpoint) {
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
