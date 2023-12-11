<template>
  <component v-bind="ouiaProps" :is="component" :class="styles.cardFooter">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Card/card';
import type { Component, HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfCardFooter',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Sets the base component to render. */
  component?: string | Component;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'div',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
