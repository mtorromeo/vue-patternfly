<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.skeleton,
      fontSize && fontSizeClass[fontSize],
      {
        [styles.modifiers.circle]: shape === 'circle',
        [styles.modifiers.square]: shape === 'square',
      },
    ]"
    :style="{ [cssWidth.name]: width, [cssHeight.name]: height }"
  >
    <span class="pf-v6-screen-reader">{{ screenreaderText }}</span>
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** The width of the Skeleton. Must specify pixels or percentage. */
  width?: string;
  /** The height of the Skeleton. Must specify pixels or percentage. */
  height?: string;
  /** The font size height of the Skeleton */
  fontSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  /** The shape of the Skeleton */
  shape?: 'circle' | 'square';
  /** Text read just to screen reader users */
  screenreaderText?: string;
}

const fontSizeClass: Record<NonNullable<Props['fontSize']>, string> = {
  sm: styles.modifiers.textSm,
  md: styles.modifiers.textMd,
  lg: styles.modifiers.textLg,
  xl: styles.modifiers.textXl,
  '2xl': styles.modifiers.text_2xl,
  '3xl': styles.modifiers.text_3xl,
  '4xl': styles.modifiers.text_4xl,
};
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Skeleton/skeleton';
import cssHeight from '@patternfly/react-tokens/dist/esm/c_skeleton_Height';
import cssWidth from '@patternfly/react-tokens/dist/esm/c_skeleton_Width';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfSkeleton',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
</script>
