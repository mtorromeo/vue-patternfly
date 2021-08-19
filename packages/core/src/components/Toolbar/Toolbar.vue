<template>
  <div :class="[styles.toolbar, breakpointClasses, {
    [styles.modifiers.pageInsets]: pageInsets,
  }]">
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

<script>
import { provide, ref, computed } from 'vue';
import { breakpointProp, classesFromBreakpointProps } from '../../util';
import { useWindowSize } from '@vueuse/core';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import PfToolbarChipGroupContent from './ToolbarChipGroupContent.vue';

export default {
  name: 'PfToolbar',

  components: { PfToolbarChipGroupContent },

  provide() {
    return {
      toggleExpanded: this.toggleExpanded,
      clearFiltersButtonText: this.clearFiltersButtonText,
      showClearFiltersButton: this.showClearFiltersButton,
      clearAllFilters: this.clearAllFilters,
      updateNumberFilters: this.updateNumberFilters,
    };
  },

  props: {
    clearFiltersButtonText: {
      type: String,
      default: 'Clear all filters',
    },

    collapseListedFiltersBreakpoint: {
      type: String,
      default: 'lg',
      validator: v => ['', 'all', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'].includes(v),
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
      set(value) {
        if (toggleManaged.value) {
          managedToggleExpanded.value = value;
        }
        emit('update:expanded', value);
      },
    });

    provide('expanded', effectiveExpanded);

    const chipGroupContent = ref(null);
    provide('chipGroupContentRef', chipGroupContent);

    const { width: windowWidth } = useWindowSize();

    const filterInfo = ref({});
    const numberOfFilters = computed(() => Object.values(filterInfo.value).reduce((acc, cur) => acc + cur, 0));
    provide('numberOfFilters', numberOfFilters);

    return {
      managedToggleExpanded,
      toggleManaged,
      effectiveExpanded,
      chipGroupContent,
      filterInfo,
      numberOfFilters,
      windowWidth,
    };
  },

  data() {
    return {
      styles,
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
      this.chipGroupContent.value = null;
    }
  },

  methods: {
    closeExpandableContent() {
      this.effectiveExpanded = false;
    },

    toggleExpanded() {
      this.effectiveExpanded = !this.effectiveExpanded;
    },

    updateNumberFilters(category, numberOfFilters) {
      this.filterInfo[category] = numberOfFilters;
    },

    clearAllFilters() {
      this.$emit('clear-all-filters');
    },
  },
};
</script>
