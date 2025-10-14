<template>
  <component
    :is="component"
    :class="[styles.gallery, { [styles.modifiers.gutter]: gutter }]"
    :style="{
      ...cssVarsFromBreakpointProps($props, 'minWidth', cssGridTemplateColumnsMin.name),
      ...cssVarsFromBreakpointProps($props, 'maxWidth', cssGridTemplateColumnsMax.name),
    }"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/layouts/Gallery/gallery';
import cssGridTemplateColumnsMin from '@patternfly/react-tokens/dist/esm/l_gallery_GridTemplateColumns_min';
import cssGridTemplateColumnsMax from '@patternfly/react-tokens/dist/esm/l_gallery_GridTemplateColumns_max';

import type { Component, HTMLAttributes } from 'vue';
import { cssVarsFromBreakpointProps } from '../../breakpoints';

defineOptions({
  name: 'PfGallery',
});

interface Props extends /* @vue-ignore */ HTMLAttributes {
  component?: string | Component;

  /** Adds space between children. */
  gutter?: boolean;

  /** Minimum width */
  minWidth?: string;
  /** Minimum width at Sm breakpoint */
  minWidthSm?: string;
  /** Minimum width at Md breakpoint */
  minWidthMd?: string;
  /** Minimum width at Lg breakpoint */
  minWidthLg?: string;
  /** Minimum width at Xl breakpoint */
  minWidthXl?: string;
  /** Minimum width at Xl2 breakpoint */
  minWidth2xl?: string;

  /** Maximum width */
  maxWidth?: string;
  /** Maximum width at Sm breakpoint */
  maxWidthSm?: string;
  /** Maximum width at Md breakpoint */
  maxWidthMd?: string;
  /** Maximum width at Lg breakpoint */
  maxWidthLg?: string;
  /** Maximum width at Xl breakpoint */
  maxWidthXl?: string;
  /** Maximum width at Xl2 breakpoint */
  maxWidth2xl?: string;
}

withDefaults(defineProps<Props>(), {
  component: 'div',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
