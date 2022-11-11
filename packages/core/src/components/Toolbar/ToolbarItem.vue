<template>
  <pf-divider v-if="variant == 'separator'" :class="styles.modifiers.vertical" v-bind="$attrs" />
  <div
    v-else
    :class="[styles.toolbarItem, breakpointClasses, variantClass, {
      [styles.modifiers.expanded]: allExpanded,
    }]"
    :style="breakpointWidths"
    :aria-hidden="variant == 'label'"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import PfDivider from '../Divider';
import { breakpoints, breakpointProp, classesFromBreakpointProps, toCamelCase } from '../../util';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { defineComponent, markRaw, type PropType } from 'vue';

export default defineComponent({
  name: 'PfToolbarItem',

  components: { PfDivider },

  props: {
    variant: {
      type: String as PropType<'separator' | 'bulk-select' | 'overflow-menu' | 'pagination' | 'search-filter' | 'label' | 'chip-group' | 'expand-all' | null>,
      default: null,
      validator: (v: any) => ['', null, 'separator', 'bulk-select', 'overflow-menu', 'pagination', 'search-filter', 'label', 'chip-group', 'expand-all'].includes(v),
    },
    ...breakpointProp('visibility', String, ['', 'hidden', 'visible']),
    ...breakpointProp('alignment', String, ['', 'right', 'left']),
    ...breakpointProp('spacer', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
    ...breakpointProp('width', String),

    allExpanded: Boolean,
  },

  emits: ['clear-all-filters'],

  setup() {
    return {
      styles: markRaw(styles) as typeof styles,
    };
  },

  computed: {
    breakpointClasses() {
      return [
        ...classesFromBreakpointProps(this.$props, ['visibility', 'alignment'], styles, { short: true }),
        ...classesFromBreakpointProps(this.$props, ['spacer'], styles),
      ];
    },

    breakpointWidths() {
      const widths: Record<string, any> = {};
      for (const b of breakpoints) {
        const prop = `width${b}`;
        if (!this.$props[prop as keyof typeof this.$props]) {
          continue;
        }
        widths[`--pf-c-toolbar__item--Width${b ? `-on-${b.toLowerCase()}` : ''}`] = this.$props[prop as keyof typeof this.$props];
      }
      return widths;
    },

    variantClass() {
      return this.variant && this.variant !== 'separator' ? styles.modifiers[toCamelCase(this.variant)] : null;
    },
  },
});
</script>
