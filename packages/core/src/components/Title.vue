<template>
  <component
    :is="`h${level}`"
    v-bind="ouiaProps"
    :class="[styles.title, size && size in styles.modifiers ? styles.modifiers[size] : hModifier]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** The size of the Title. Defaults to the size of the heading level. */
  size?: keyof typeof styles.modifiers;
  /** Heading level to use */
  h?: '1' | '2' | '3' | '4' | '5' | '6' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | number;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Title/title';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';
import { computed, type HTMLAttributes, type VNode } from 'vue';

defineOptions({
  name: 'PfTitle',
});

const props = withDefaults(defineProps<Props>(), {
  h: 1,
  ouiaSafe: true,
});

defineSlots<{
  /** Content of the title */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const level = computed(() => Number(String(props.h).replace(/^h/, '')));

const hModifier = computed(() => styles.modifiers[`h${level.value}` as keyof typeof styles.modifiers]);
</script>
