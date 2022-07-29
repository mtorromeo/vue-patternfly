<template>
  <div
    :class="[styles.skeleton, {
      [fontHeightClassName]: fontSize,
      [styles.modifiers.circle]: shape === 'circle',
      [styles.modifiers.square]: shape === 'square',
    }]"
    :style="(sizes as any)"
  >
    <span class="pf-u-screen-reader">{{ screenreaderText }}</span>
  </div>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Skeleton/skeleton';
import { defineComponent, markRaw, PropType } from 'vue';

export default defineComponent({
  name: 'PfSkeleton',

  props: {
    /** The width of the Skeleton. Must specify pixels or percentage. */
    width: {
      type: String,
      default: null,
    },

    /** The height of the Skeleton. Must specify pixels or percentage. */
    height: {
      type: String,
      default: null,
    },

    /** Position of the tooltip which is displayed if title is truncated. */
    fontSize: {
      type: String,
      default: null,
      validator: (v: any) => ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'].includes(v),
    },

    /** The shape of the Skeleton. */
    shape: {
      type: String as PropType<'circle' | 'square'>,
      default: null,
      validator: (v: any) => ['circle', 'square'].includes(v),
    },

    /** Text read just to screen reader users. */
    screenreaderText: {
      type: String,
      default: undefined,
    },
  },

  setup() {
    return {
      styles: markRaw(styles) as typeof styles,
    };
  },

  computed: {
    fontHeightClassName() {
      return this.fontSize
        ? Object.values(styles.modifiers).find(k => k === `pf-m-text-${this.fontSize}`)
        : undefined;
    },

    sizes() {
      return {
        '--pf-c-skeleton--Width': this.width,
        '--pf-c-skeleton--Height': this.height,
      };
    },
  },
});
</script>
