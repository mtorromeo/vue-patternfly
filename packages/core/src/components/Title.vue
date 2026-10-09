<template>
  <component :is="`h${level}`" v-bind="ouiaProps" :class="[styles.title, size && size in styles.modifiers ? styles.modifiers[size] : hModifier]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Title/title';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';
import { computed, type HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfTitle',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** The size of the Title  */
  size?: keyof typeof styles.modifiers;
  /** Heading level to use */
  h?: '1' | '2' | '3' | '4' | '5' | '6' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | number;
}

const props = withDefaults(defineProps<Props>(), {
  h: 1,
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const level = computed(() => Number(String(props.h).replace(/^h/, '')));

const hModifier = computed(() => styles.modifiers[`h${level.value}` as keyof typeof styles.modifiers]);
</script>
