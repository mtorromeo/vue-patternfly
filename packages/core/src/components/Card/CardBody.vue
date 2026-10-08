<template>
  <component v-bind="ouiaProps" :is="component" :class="[styles.cardBody, { [styles.modifiers.noFill]: noFill }]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Card/card';
import type { Component, HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfCardBody',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Sets the base component to render. */
  component?: string | Component;

  /** Disables the body Content to fill the height of the card. */
  noFill?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'div',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
