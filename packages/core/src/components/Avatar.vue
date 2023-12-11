<template>
  <img
    v-bind="(ouiaProps as any)"
    :class="[styles.avatar, {
      [styles.modifiers.light]: border === 'light',
      [styles.modifiers.dark]: border === 'dark',
    }]"
  >
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Avatar/avatar';
import type { ImgHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfAvatar',
});

export interface Props extends OUIAProps, /* @vue-ignore */ ImgHTMLAttributes {
  /** Border to add */
  border?: 'light' | 'dark' | null;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
</script>
