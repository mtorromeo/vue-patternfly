<template>
  <picture
    v-if="$slots.default"
    v-bind="{ ...ouiaProps, ...$attrs }"
    :class="[styles.brand, styles.modifiers.picture]"
    :style="responsiveStyle"
  >
    <slot />
    <img :src="src" :alt="alt" />
  </picture>
  <img
    v-else
    v-bind="{ ...ouiaProps, ...$attrs }"
    :class="styles.brand"
    :style="responsiveStyle"
    :src="src"
    :alt="alt"
  />
</template>

<script lang="ts">
interface Props
  extends
    OUIAProps,
    WidthBreakpointProps,
    HeightBreakpointProps,
    /* @vue-ignore */ Omit<ImgHTMLAttributes, 'width' | 'height' | 'src' | 'alt'> {
  /** URL of the image. With source elements in the default slot, the URL of the fallback image. */
  src?: string;
  /** Alternative text of the image. With source elements in the default slot, the one of the fallback image. */
  alt?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Brand/brand';
import { cssVarsFromBreakpointProps, type WidthBreakpointProps, type HeightBreakpointProps } from '../breakpoints';
import cssBrandHeight from '@patternfly/react-tokens/dist/esm/c_brand_Height';
import cssBrandWidth from '@patternfly/react-tokens/dist/esm/c_brand_Width';
import { computed, type ImgHTMLAttributes, type VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfBrand',
  inheritAttrs: false,
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Source elements: they turn the brand into a picture element, with the image as fallback. */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const responsiveStyle = computed(() => ({
  ...cssVarsFromBreakpointProps(props, 'width', cssBrandWidth.name),
  ...cssVarsFromBreakpointProps(props, 'height', cssBrandHeight.name),
}));
</script>
