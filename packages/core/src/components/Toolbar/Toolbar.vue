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
    />
  </div>
</template>

<script>
import {provide, ref, computed} from 'vue'
import {breakpointProp, classesFromBreakpointProps} from '../../util';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import PfToolbarChipGroupContent from './ToolbarChipGroupContent.vue';

export default {
  name: 'PfToolbar',

  components: {PfToolbarChipGroupContent},

  provide() {
    return {
      toggleExpanded: this.toggleExpanded,
      clearFiltersButtonText: this.clearFiltersButtonText,
      numberOfFilters: this.numberOfFilters,
      showClearFiltersButton: this.showClearFiltersButton,
      clearAllFilters: this.clearAllFilters,
    };
  },

  props: {
    clearFiltersButtonText: {
      type: String,
      default: '',
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

  setup(props, {emit}) {
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

    return {
      managedToggleExpanded,
      toggleManaged,
      effectiveExpanded,
    };
  },

  data() {
    return {
      styles,
      filterInfo: {},
    };
  },

  computed: {
    breakpointClasses() {
      return classesFromBreakpointProps(this.$props, ['inset'], styles);
    },

    numberOfFilters() {
      return Object.values(this.filterInfo).reduce((acc, cur) => acc + cur, 0);
    },

    showClearFiltersButton() {
      return this.numberOfFilters > 0;
    },
  },

  mounted() {
    if (this.toggleManaged) {
      window.addEventListener('resize', this.closeExpandableContent);
    }
  },

  beforeUnmount() {
    if (this.toggleManaged) {
      window.removeEventListener('resize', this.closeExpandableContent);
    }
  },

  methods: {
    closeExpandableContent() {
      this.effectiveExpanded = false;
    },

    toggleExpanded() {
      this.effectiveExpanded = !this.effectiveExpanded;
    },

    updateNumberFilters(categoryName, numberOfFilters) {
      const filterInfoToUpdate = {...this.staticFilterInfo};
      if (!Object.hasOwnProperty.call(filterInfoToUpdate, categoryName) || filterInfoToUpdate[categoryName] !== numberOfFilters) {
        filterInfoToUpdate[categoryName] = numberOfFilters;
        this.staticFilterInfo = filterInfoToUpdate;
        this.filterInfo = filterInfoToUpdate;
      }
    },

    clearAllFilters() {
      this.$emit('clear-all-filters');
    },
  },
};
</script>
