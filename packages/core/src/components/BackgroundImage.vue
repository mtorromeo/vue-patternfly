<template>
  <div
    v-bind="(ouiaProps as any)"
    :class="styles.backgroundImage" :style="{
      '--pf-v5-c-background-image--BackgroundImage': `url(${src})`
    }"
  />
</template>

<script lang="ts">
export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Override image styles using a string or BackgroundImageSrc */
  src: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/BackgroundImage/background-image';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfBackgroundImage',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
</script>
