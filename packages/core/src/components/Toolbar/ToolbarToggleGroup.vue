<template>
  <div :class="[styles.toolbarGroup, styles.modifiers.toggleGroup, breakpointClasses]">
    <div :class="styles.toolbarToggle">
      <pf-button
        variant="plain"
        aria-label="Show Filters"
        :aria-expanded="expanded"
        :aria-haspopup="expanded && isContentPopup"
        @click="toggleExpanded ?? undefined"
      >
        <slot name="icon" />
      </pf-button>
    </div>
    <teleport v-if="expanded && expandableRef" :to="expandableRef">
      <slot />
    </teleport>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script lang="ts">
import { breakpointProp, classesFromBreakpointProps, toCamelCase } from '../../util';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import globalBreakpointLg from '@patternfly/react-tokens/dist/js/global_breakpoint_lg';
import PfButton from '../Button.vue';
import { useWindowSize } from '@vueuse/core';
import { defineComponent, inject, markRaw, type PropType } from 'vue';
import { ToolbarExpandedKey, ToolbarToggleExpandedKey } from './Toolbar.vue';
import { ToolbarContentExpandableRefKey } from './ToolbarContent.vue';

export default defineComponent({
  name: 'PfToolbarToggleGroup',

  components: { PfButton },

  props: {
    variant: {
      type: String as PropType<'filter-group' | 'icon-button-group' | 'button-group'>,
      default: '',
      validator: (v: any) => ['', 'filter-group', 'icon-button-group', 'button-group'].includes(v),
    },
    ...breakpointProp('visibility', String, ['', 'hidden', 'visible']),
    ...breakpointProp('alignment', String, ['', 'right', 'left']),
    ...breakpointProp('spacer', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
    ...breakpointProp('spaceItems', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
  },

  setup() {
    const { width: windowWidth } = useWindowSize();
    return {
      styles: markRaw(styles) as typeof styles,
      windowWidth,
      expanded: inject(ToolbarExpandedKey),
      toggleExpanded: inject(ToolbarToggleExpandedKey),
      expandableRef: inject(ToolbarContentExpandableRefKey),
    };
  },

  computed: {
    breakpointClasses() {
      return [
        ...classesFromBreakpointProps(this.$props, ['visibility', 'alignment'], styles, { short: true }),
        ...classesFromBreakpointProps(this.$props, ['spacer', 'spaceItems'], styles),
      ];
    },

    variantClass() {
      return this.variant ? styles.modifiers[toCamelCase(this.variant)] : null;
    },

    isContentPopup() {
      const lgBreakpointValue = parseInt(globalBreakpointLg.value);
      return this.windowWidth < lgBreakpointValue;
    },
  },
});
</script>
