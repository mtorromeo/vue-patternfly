<template>
  <div
    :class="[styles.skeleton, {
      [fontHeightClassName]: fontSize,
      [styles.modifiers.circle]: shape === 'circle',
      [styles.modifiers.square]: shape === 'square',
    }]"
    :style="sizes"
  >
    <span class="pf-u-screen-reader">{{ screenreaderText }}</span>
  </div>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Skeleton/skeleton';
import { markRaw } from 'vue';

export default {
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
      validator: v => ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'].includes(v),
    },

    /** The shape of the Skeleton. */
    shape: {
      type: String,
      default: null,
      validator: v => ['circle', 'square'].includes(v),
    },

    /** Text read just to screen reader users. */
    screenreaderText: {
      type: String,
      default: undefined,
    },
  },

  setup() {
    return {
      styles: markRaw(styles),
    };
  },

  computed: {
    fontHeightClassName() {
      return this.fontSize
        ? Object.values(styles.modifiers).find(k => k === `pf-m-text-${this.fontSize}`)
        : undefined;
    },

    sizes() {
      const sizes = {};
      if (this.width) {
        sizes['--pf-c-skeleton--Width'] = this.width;
      }
      if (this.height) {
        sizes['--pf-c-skeleton--Height'] = this.height;
      }
      return sizes;
    },
  },
};
</script>
