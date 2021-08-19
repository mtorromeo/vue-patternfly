<template>
  <pf-divider
    v-if="variant == 'separator'"
    :class="styles.modifiers.vertical"
    v-bind="$attrs"
  />
  <div
    v-else
    :class="[styles.toolbarItem, breakpointClasses, variantClass, {
      [styles.modifiers.expanded]: allExpanded,
    }]"
    :aria-hidden="variant == 'label'"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script>
import PfDivider from '../Divider';
import { breakpointProp, classesFromBreakpointProps, toCamel } from '../../util';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';

export default {
  name: 'PfToolbarItem',

  components: { PfDivider },

  props: {
    variant: {
      type: String,
      default: '',
      validator: v => ['', 'separator', 'bulk-select', 'overflow-menu', 'pagination', 'search-filter', 'label', 'chip-group', 'expand-all'].includes(v),
    },
    ...breakpointProp('visibility', String, ['', 'hidden', 'visible']),
    ...breakpointProp('alignment', String, ['', 'right', 'left']),
    ...breakpointProp('spacer', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),

    allExpanded: Boolean,
  },

  emits: ['clear-all-filters'],

  data() {
    return {
      styles,
    };
  },

  computed: {
    breakpointClasses() {
      return [
        ...classesFromBreakpointProps(this.$props, ['visibility', 'alignment'], styles, { short: true }),
        ...classesFromBreakpointProps(this.$props, ['spacer'], styles),
      ];
    },

    variantClass() {
      return this.variant ? styles.modifiers[toCamel(this.variant)] : null;
    },
  },
};
</script>
