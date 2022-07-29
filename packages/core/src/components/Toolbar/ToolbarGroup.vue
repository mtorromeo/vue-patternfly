<template>
  <div :class="[styles.toolbarGroup, breakpointClasses, variantClass]">
    <slot />
  </div>
</template>

<script lang="ts">
import { breakpointProp, classesFromBreakpointProps, toCamelCase } from '../../util';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { defineComponent, markRaw, PropType } from 'vue';

export default defineComponent({
  name: 'PfToolbarGroup',

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

  emits: ['clear-all-filters', 'mounted'],

  setup() {
    return {
      styles: markRaw(styles) as typeof styles,
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
  },

  mounted() {
    this.$emit('mounted', this.$el);
  },
});
</script>
