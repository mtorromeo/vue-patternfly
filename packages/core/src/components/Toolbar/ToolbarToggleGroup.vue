<template>
  <div :class="[styles.toolbarGroup, styles.modifiers.toggleGroup, breakpointClasses]">
    <div :class="styles.toolbarToggle">
      <pf-button
        variant="plain"
        aria-label="Show Filters"
        :aria-expanded="expanded.value"
        :aria-haspopup="expanded.value && isContentPopup"
        @click="toggleExpanded"
      >
        <slot name="icon" />
      </pf-button>
    </div>
    <teleport
      v-if="expanded.value && expandableRef.value"
      :to="expandableRef.value"
    >
      <slot />
    </teleport>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script>
import { breakpointProp, classesFromBreakpointProps, toCamel } from '../../util.ts';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import globalBreakpointLg from '@patternfly/react-tokens/dist/js/global_breakpoint_lg';
import PfButton from '../Button.vue';
import { useWindowSize } from '@vueuse/core';
import { markRaw } from 'vue';

export default {
  name: 'PfToolbarToggleGroup',

  components: { PfButton },

  inject: ['expanded', 'toggleExpanded', 'expandableRef'],

  props: {
    variant: {
      type: String,
      default: '',
      validator: v => ['', 'filter-group', 'icon-button-group', 'button-group'].includes(v),
    },
    ...breakpointProp('visibility', String, ['', 'hidden', 'visible']),
    ...breakpointProp('alignment', String, ['', 'right', 'left']),
    ...breakpointProp('spacer', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
    ...breakpointProp('spaceItems', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
  },

  setup() {
    const { width: windowWidth } = useWindowSize();
    return {
      styles: markRaw(styles),
      windowWidth,
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
      return this.variant ? styles.modifiers[toCamel(this.variant)] : null;
    },

    isContentPopup() {
      const lgBreakpointValue = parseInt(globalBreakpointLg.value);
      return this.windowWidth < lgBreakpointValue;
    },
  },
};
</script>
