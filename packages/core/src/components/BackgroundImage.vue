<template>
  <div
    :class="styles.backgroundImage" :style="{
      '--pf-v5-c-background-image--BackgroundImage': `url(${src})`
    }"
  />
</template>

<script lang="ts">
export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Override image styles using a string or BackgroundImageSrc */
  src: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/BackgroundImage/background-image';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfBackgroundImage',
});

defineProps<Props>();
</script>
