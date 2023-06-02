<template>
  <component :is="component" :class="[styles.grid, ...gridClasses, { [styles.modifiers.gutter]: gutter }]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/layouts/Grid/grid';
import { breakpoints } from '../../breakpoints';
import { computed, type Component, type HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfGrid',
});

export type GridSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
                     | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  component?: string | Component;
  gutter?: boolean;

  /** The number of rows a column in the grid should span.  Value should be a number 1-12 */
  span?: GridSpan;
  /** the number of columns all grid items should span on a small device */
  sm?: GridSpan;
  /** the number of columns all grid items should span on a medium device */
  md?: GridSpan;
  /** the number of columns all grid items should span on a large device */
  lg?: GridSpan;
  /** the number of columns all grid items should span on a xLarge device */
  xl?: GridSpan;
  /** the number of columns all grid items should span on a 2xLarge device */
  xl2?: GridSpan;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'div',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const gridClasses = computed(() => {
  const classes: string[] = [];

  if (props.span) {
    classes.push(styles.modifiers[`all_${props.span}Col`]);
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
    const propValue = props[prop];
    if (propValue) {
      classes.push(styles.modifiers[`all_${propValue}ColOn${breakpointSuffix}`]);
    }
  }

  return classes;
});
</script>
