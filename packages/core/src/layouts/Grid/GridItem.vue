<template>
  <component :is="component" :class="[styles.gridItem, ...gridClasses]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/layouts/Grid/grid';
import { breakpoints } from '../../breakpoints';
import type { HTMLAttributes, Component } from 'vue';
import { computed } from 'vue';
import type { GridSpan } from './Grid.vue';

defineOptions({
  name: 'PfGridItem',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** The tag or component to use as container */
  component?: string | Component;

  /** the number of columns the grid item spans. Value should be a number 1-12   */
  span?: GridSpan;
  /** the number of rows the grid item spans. Value should be a number 1-12   */
  rowSpan?: GridSpan;
  /** the number of columns a grid item is offset */
  offset?: GridSpan;
  /** the number of columns the grid item spans on small device. Value should be a number 1-12   */
  sm?: GridSpan;
  /** the number of rows the grid item spans on medium device. Value should be a number 1-12   */
  smRowSpan?: GridSpan;
  /** the number of columns the grid item is offset on small device. Value should be a number 1-12   */
  smOffset?: GridSpan;
  /** the number of columns the grid item spans on medium device. Value should be a number 1-12   */
  md?: GridSpan;
  /** the number of rows the grid item spans on medium device. Value should be a number 1-12   */
  mdRowSpan?: GridSpan;
  /** the number of columns the grid item is offset on medium device. Value should be a number 1-12   */
  mdOffset?: GridSpan;
  /** the number of columns the grid item spans on large device. Value should be a number 1-12   */
  lg?: GridSpan;
  /** the number of rows the grid item spans on large device. Value should be a number 1-12   */
  lgRowSpan?: GridSpan;
  /** the number of columns the grid item is offset on large device. Value should be a number 1-12   */
  lgOffset?: GridSpan;
  /** the number of columns the grid item spans on xLarge device. Value should be a number 1-12   */
  xl?: GridSpan;
  /** the number of rows the grid item spans on large device. Value should be a number 1-12   */
  xlRowSpan?: GridSpan;
  /** the number of columns the grid item is offset on xLarge device. Value should be a number 1-12   */
  xlOffset?: GridSpan;
  /** the number of columns the grid item spans on 2xLarge device. Value should be a number 1-12   */
  xl2?: GridSpan;
  /** the number of rows the grid item spans on 2xLarge device. Value should be a number 1-12   */
  xl2RowSpan?: GridSpan;
  /** the number of columns the grid item is offset on 2xLarge device. Value should be a number 1-12   */
  xl2Offset?: GridSpan;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'div',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const gridClasses = computed(() => {
  const classes: string[] = [];

  if (props.span) {
    classes.push(styles.modifiers[`${props.span}Col`]);
  }

  if (props.rowSpan) {
    classes.push(styles.modifiers[`${props.rowSpan}Row`]);
  }

  if (props.offset) {
    classes.push(styles.modifiers[`offset_${props.offset}Col`]);
  }

  for (const breakpoint of breakpoints) {
    let prop: 'sm' | 'md' | 'lg' | 'xl' | 'xl2';
    if (breakpoint === '') {
      continue;
    }
    let breakpointSuffix: 'Sm' | 'Md' | 'Lg' | 'Xl' | '_2xl';
    if (breakpoint === '2xl') {
      prop = 'xl2';
      breakpointSuffix = '_2xl';
    } else {
      prop = breakpoint.toLowerCase() as Lowercase<typeof breakpoint>;
      breakpointSuffix = breakpoint;
    }

    const spanValue = props[prop];
    const rowSpanValue = props[`${prop}RowSpan`];
    const offsetValue = props[`${prop}Offset`];

    if (spanValue) {
      classes.push(styles.modifiers[`${spanValue}ColOn${breakpointSuffix}`]);
    }
    if (rowSpanValue) {
      classes.push(styles.modifiers[`${rowSpanValue}RowOn${breakpointSuffix}`]);
    }
    if (offsetValue) {
      classes.push(styles.modifiers[`offset_${offsetValue}ColOn${breakpointSuffix}`]);
    }
  }

  return classes;
});
</script>
