<template>
  <picture v-if="$slots.default" v-bind="{...ouiaProps as any, ...$attrs}" :class="[styles.brand, styles.modifiers.picture]" :style="pictureStyle">
    <slot />
    <img :src="src" :alt="alt">
  </picture>
  <img v-else v-bind="{...ouiaProps, ...$attrs}" :class="styles.brand" :src="src" :alt="alt">
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Brand/brand';
import { cssVarsFromBreakpointProps, type WidthBreakpointProps, type HeightBreakpointProps } from '../breakpoints';
import type { ImgHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfBrand',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, WidthBreakpointProps, HeightBreakpointProps, /* @vue-ignore */ Omit<ImgHTMLAttributes, 'width' | 'height' | 'src' | 'alt'> {
  src: string;
  alt?: string;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const pictureStyle = {
  ...cssVarsFromBreakpointProps(props, 'width', '--pf-v5-c-brand--Width'),
  ...cssVarsFromBreakpointProps(props, 'height', '--pf-v5-c-brand--Height'),
};
</script>
