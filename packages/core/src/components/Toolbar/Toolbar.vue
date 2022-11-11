<template>
  <div
    :class="[styles.toolbar, breakpointClasses, {
      [styles.modifiers.pageInsets]: pageInsets,
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
import { provide, ref, computed, markRaw, defineComponent, type InjectionKey, type Ref, type PropType, type ComputedRef } from 'vue';
import { breakpointProp, classesFromBreakpointProps } from '../../util';
import { useWindowSize } from '@vueuse/core';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import PfToolbarChipGroupContent from './ToolbarChipGroupContent.vue';
import { globalBreakpoints } from './ToolbarUtils';

export const ToolbarToggleExpandedKey = Symbol('ToolbarToggleExpandedKey') as InjectionKey<() => void>;
export const ToolbarClearFilterButtonTextKey = Symbol('ToolbarClearFilterButtonTextKey') as InjectionKey<string>;
export const ToolbarShowClearFiltersButtonKey = Symbol('ToolbarShowClearFiltersButtonKey') as InjectionKey<boolean>;
export const ToolbarClearAllFiltersKey = Symbol('ToolbarClearAllFiltersKey') as InjectionKey<() => void>;
export const ToolbarUpdateNumberFiltersKey = Symbol('ToolbarUpdateNumberFiltersKey') as InjectionKey<(category: string, numberOfFilters: number) => void>;
export const ToolbarExpandedKey = Symbol('ToolbarExpandedKey') as InjectionKey<Ref<boolean>>;
export const ToolbarChipGroupContentRefKey = Symbol('ToolbarChipGroupContentRefKey') as InjectionKey<Ref<HTMLDivElement | null>>;
export const ToolbarNumberOfFiltersKey = Symbol('ToolbarNumberOfFiltersKey') as InjectionKey<ComputedRef<number>>;

export default defineComponent({
  name: 'PfToolbar',

  components: { PfToolbarChipGroupContent },

  provide() {
    return {
      [ToolbarToggleExpandedKey as symbol]: this.toggleExpanded,
      [ToolbarClearFilterButtonTextKey as symbol]: this.clearFiltersButtonText,
      [ToolbarShowClearFiltersButtonKey as symbol]: this.showClearFiltersButton,
      [ToolbarClearAllFiltersKey as symbol]: this.clearAllFilters,
      [ToolbarUpdateNumberFiltersKey as symbol]: this.updateNumberFilters,
    };
  },

  props: {
    clearFiltersButtonText: {
      type: String,
      default: 'Clear all filters',
    },

    collapseListedFiltersBreakpoint: {
      type: String as PropType<keyof typeof globalBreakpoints>,
      default: 'lg',
      validator: (v: any) => v === 'all' || v in globalBreakpoints,
    },

    expanded: {
      type: Boolean,
      default: null,
    },
    pageInsets: Boolean,

    ...breakpointProp('inset', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
  },

  emits: ['update:expanded', 'clear-all-filters'],

  setup(props, { emit }) {
    const managedToggleExpanded = ref(false);

    const toggleManaged = computed(() => !props.expanded && props.expanded !== false);

    const effectiveExpanded = computed({
      get() {
        return toggleManaged.value ? managedToggleExpanded.value : props.expanded;
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

    return {
      styles: markRaw(styles) as typeof styles,
      managedToggleExpanded,
      toggleManaged,
      effectiveExpanded,
      chipGroupContent,
      filterInfo,
      numberOfFilters,
      windowWidth,
    };
  },

  computed: {
    breakpointClasses() {
      return classesFromBreakpointProps(this.$props, ['inset'], styles);
    },

    showClearFiltersButton() {
      return this.numberOfFilters > 0;
    },
  },

  watch: {
    windowWidth() {
      if (this.toggleManaged) {
        this.closeExpandableContent();
      }
    },
  },

  beforeUnmount() {
    if (this.chipGroupContent) {
      this.chipGroupContent = null;
    }
  },

  methods: {
    closeExpandableContent() {
      this.effectiveExpanded = false;
    },

    toggleExpanded() {
      this.effectiveExpanded = !this.effectiveExpanded;
    },

    updateNumberFilters(category: string, numberOfFilters: number) {
      this.filterInfo[category] = numberOfFilters;
    },

    clearAllFilters() {
      this.$emit('clear-all-filters');
    },
  },
});
</script>
