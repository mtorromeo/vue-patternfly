<template>
  <component :is="`h${h}`" v-bind="ouiaProps" :class="[styles.title, size && size in styles.modifiers ? styles.modifiers[size] : styles.modifiers[hSize]]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Title/title';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';
import { computed } from 'vue';

const headingLevelSizeMap: Record<number, keyof typeof styles.modifiers> = {
  [1]: '2xl',
  [2]: 'xl',
  [3]: 'lg',
  [4]: 'md',
  [5]: 'md',
  [6]: 'md',
};

defineOptions({
  name: 'PfTitle',
});

const props = withDefaults(defineProps<{
  /** The size of the Title  */
  size?: keyof typeof styles.modifiers;
  /** Heading level to use */
  h?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | number;
} & OUIAProps>(), {
  h: 1,
});

const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const hSize = computed(() => headingLevelSizeMap[Number(props.h) as keyof typeof headingLevelSizeMap]);
</script>
