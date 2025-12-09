<template>
  <div
    v-bind="ouiaProps"
    :class="styles.backgroundImage" :style="{
      [cssBackgroundImage.name]: `url(${src})`
    }"
  />
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/BackgroundImage/background-image';
import cssBackgroundImage from '@patternfly/react-tokens/dist/esm/c_background_image_BackgroundImage';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Override image styles using a string or BackgroundImageSrc */
  src: string;
}

defineOptions({
  name: 'PfBackgroundImage',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
</script>
