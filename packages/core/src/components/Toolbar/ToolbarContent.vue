<template>
  <div :class="[styles.toolbarContent, breakpointClasses]">
    <div :class="styles.toolbarContentSection">
      <slot />
    </div>

    <pf-toolbar-expandable-content
      :expanded="expanded"
      :show-clear-filters-button="showClearFiltersButton"
      :clear-filters-button-text="clearFiltersButtonText"
    >
      <pf-toolbar-group @mounted="expandable = $event" />

      <template #chip-container>
        <pf-toolbar-group @mounted="chipContainer = $event" />
      </template>
    </pf-toolbar-expandable-content>
  </div>
</template>

<script lang="ts">
export const ToolbarContentExpandableRefKey = Symbol('ToolbarContentExpandableRefKey') as InjectionKey<Ref<HTMLDivElement | undefined>>;
export const ToolbarContentChipContainerRefKey = Symbol('ToolbarContentChipContainerRefKey') as InjectionKey<Ref<HTMLDivElement | undefined>>;

export interface Props extends VisibilityBreakpointProps, AlignBreakpointProps, /* @vue-ignore */ HTMLAttributes {}
</script>

<script lang="ts" setup>
import { computed, ref, provide, onBeforeUnmount, type InjectionKey, type Ref, type HTMLAttributes, inject } from 'vue';
import { classesFromBreakpointProps, type AlignBreakpointProps, type VisibilityBreakpointProps } from '../../breakpoints';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import PfToolbarExpandableContent from './ToolbarExpandableContent.vue';
import PfToolbarGroup from './ToolbarGroup.vue';
import { ToolbarClearFilterButtonTextKey, ToolbarExpandedKey, ToolbarShowClearFiltersButtonKey } from './Toolbar.vue';

defineOptions({
  name: 'PfToolbarContent',
});

const props = defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const expandable: Ref<HTMLDivElement | undefined> = ref();
provide(ToolbarContentExpandableRefKey, expandable);

const chipContainer: Ref<HTMLDivElement | undefined> = ref();
provide(ToolbarContentChipContainerRefKey, chipContainer);

const expanded = inject(ToolbarExpandedKey);
const showClearFiltersButton = inject(ToolbarShowClearFiltersButtonKey);
const clearFiltersButtonText = inject(ToolbarClearFilterButtonTextKey);

const breakpointClasses = computed(() => [
  ...classesFromBreakpointProps(props, ['visibility'], styles, { short: true }),
  ...classesFromBreakpointProps(props, ['align'], styles),
]);

onBeforeUnmount(() => {
  if (expandable.value) {
    expandable.value = undefined;
  }
  if (chipContainer.value) {
    chipContainer.value = undefined;
  }
});
</script>
