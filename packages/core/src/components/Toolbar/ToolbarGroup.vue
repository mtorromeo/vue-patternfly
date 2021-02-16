<template>
  <div :class="[styles.toolbarGroup, breakpointClasses, variantClass]">
    <slot />
  </div>
</template>

<script>
import {breakpointProp, classesFromBreakpointProps, toCamel} from '../../util';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';

export default {
  name: 'PfToolbarGroup',

  props: {
    variant: {
      type: String,
      default: '',
      validator: v => ['', 'filter-group', 'icon-button-group', 'button-group'].includes(v),
    },
    ...breakpointProp('visibility', String, ['', 'hidden', 'visible']),
    ...breakpointProp('alignment', String, ['', 'right', 'left']),
    ...breakpointProp('spacer', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
    ...breakpointProp('spacerItems', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
  },

  emits: ['clear-all-filters', 'mounted'],

  data() {
    return {
      styles,
    };
  },

  computed: {
    breakpointClasses() {
      return [
        ...classesFromBreakpointProps(this.$props, ['visibility', 'alignment'], styles, {short: true}),
        ...classesFromBreakpointProps(this.$props, ['spacer', 'spacerItems'], styles),
      ];
    },

    variantClass() {
      return this.variant ? toCamel(this.variant) : null;
    },
  },

  mounted() {
    this.$emit('mounted', this.$el);
  },
};
</script>
