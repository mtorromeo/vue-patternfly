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
import { ref, provide, markRaw, defineComponent, type InjectionKey, type Ref, inject } from 'vue';
import { breakpointProp, classesFromBreakpointProps } from '../../util';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import PfToolbarExpandableContent from './ToolbarExpandableContent.vue';
import PfToolbarGroup from './ToolbarGroup.vue';
import { ToolbarClearFilterButtonTextKey, ToolbarExpandedKey, ToolbarShowClearFiltersButtonKey } from './Toolbar.vue';

export const ToolbarContentExpandableRefKey = Symbol('ToolbarContentExpandableRefKey') as InjectionKey<Ref<HTMLDivElement | null>>;
export const ToolbarContentChipContainerRefKey = Symbol('ToolbarContentChipContainerRefKey') as InjectionKey<Ref<HTMLDivElement | null>>;

export default defineComponent({
  name: 'PfToolbarContent',

  components: { PfToolbarExpandableContent, PfToolbarGroup },

  props: {
    ...breakpointProp('visibility', String, ['', 'hidden', 'visible']),
    ...breakpointProp('alignment', String, ['', 'right', 'left']),
  },

  setup() {
    const expandable: Ref<HTMLDivElement | null> = ref(null);
    provide(ToolbarContentExpandableRefKey, expandable);

    const chipContainer: Ref<HTMLDivElement | null> = ref(null);
    provide(ToolbarContentChipContainerRefKey, chipContainer);

    return {
      expandable,
      chipContainer,
      expanded: inject(ToolbarExpandedKey),
      showClearFiltersButton: inject(ToolbarShowClearFiltersButtonKey),
      clearFiltersButtonText: inject(ToolbarClearFilterButtonTextKey),
      styles: markRaw(styles) as typeof styles,
    };
  },

  computed: {
    breakpointClasses() {
      return [
        ...classesFromBreakpointProps(this.$props, ['visibility', 'alignment'], styles, { short: true }),
      ];
    },
  },

  beforeUnmount() {
    if (this.expandable) {
      this.expandable = null;
    }
    if (this.chipContainer) {
      this.chipContainer = null;
    }
  },
});
</script>
