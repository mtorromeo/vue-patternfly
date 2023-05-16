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

defineOptions({
  name: 'PfBrand',
});

const props = defineProps<{
  src: string;
  alt?: string;
} & WidthBreakpointProps & HeightBreakpointProps>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const pictureStyle = {
  ...cssVarsFromBreakpointProps(props, 'width', '--pf-c-brand--Width'),
  ...cssVarsFromBreakpointProps(props, 'height', '--pf-c-brand--Height'),
};
</script>
