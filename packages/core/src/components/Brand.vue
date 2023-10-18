<template>
  <picture v-if="$slots.default" :class="[styles.brand, styles.modifiers.picture]" :style="pictureStyle">
    <slot />
    <img :src="src" :alt="alt">
  </picture>
  <img v-else :class="styles.brand" :src="src" :alt="alt">
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Brand/brand';
import { cssVarsFromBreakpointProps, type WidthBreakpointProps, type HeightBreakpointProps } from '../breakpoints';
import type { ImgHTMLAttributes } from 'vue';

defineOptions({
  name: 'PfBrand',
});

export interface Props extends WidthBreakpointProps, HeightBreakpointProps, /* @vue-ignore */ Omit<ImgHTMLAttributes, 'width' | 'height'> {
  src: string;
  alt?: string;
}

const props = defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const pictureStyle = {
  ...cssVarsFromBreakpointProps(props, 'width', '--pf-v5-c-brand--Width'),
  ...cssVarsFromBreakpointProps(props, 'height', '--pf-v5-c-brand--Height'),
};
</script>
