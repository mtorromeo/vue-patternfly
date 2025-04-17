<template>
  <div
    v-bind="ouiaProps"
    :class="[styles.skeleton, {
      [fontHeightClassName ?? styles.modifiers.circle]: fontSize,
      [styles.modifiers.circle]: shape === 'circle',
      [styles.modifiers.square]: shape === 'square',
    }]"
    :style="(sizes as any)"
  >
    <span class="pf-v6-screen-reader">{{ screenreaderText }}</span>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Skeleton/skeleton';
import cssHeight from '@patternfly/react-tokens/dist/esm/c_skeleton_Height';
import cssWidth from '@patternfly/react-tokens/dist/esm/c_skeleton_Width';
import { computed, type HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfSkeleton',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** The width of the Skeleton. Must specify pixels or percentage. */
  width?: string;
  /** The height of the Skeleton. Must specify pixels or percentage. */
  height?: string;

  /** Position of the tooltip which is displayed if title is truncated. */
  fontSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

  /** The shape of the Skeleton. */
  shape?: 'circle' | 'square';

  /** Text read just to screen reader users. */
  screenreaderText?: string;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const fontHeightClassName = computed(() => {
  return props.fontSize
    ? Object.values(styles.modifiers).find(k => k === `pf-m-text-${props.fontSize}`)
    : undefined;
});

const sizes = computed(() => {
  return {
    [cssWidth.name]: props.width,
    [cssHeight.name]: props.height,
  };
});
</script>
