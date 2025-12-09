<template>
  <img
    v-bind="ouiaProps"
    :class="[styles.avatar, {
      [styles.modifiers.bordered]: bordered,
      [styles.modifiers[size as NonNullable<typeof size>]]: size,
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

interface Props extends OUIAProps, /* @vue-ignore */ ImgHTMLAttributes {
  /** Flag to indicate the avatar should have a border. */
  bordered?: boolean;

  /** Size variant of avatar. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
</script>
