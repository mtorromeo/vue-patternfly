<template>
  <component
    v-bind="ouiaProps"
    :is="component"
    :class="[styles.form, {
      [styles.modifiers.horizontal]: horizontal,
      [styles.modifiers.limitWidth]: widthLimited,
    }]"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Form/form';
import type { Component, FormHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfForm',
});

export interface Props extends OUIAProps, /* @vue-ignore */ FormHTMLAttributes {
  component?: string | Component;
  horizontal?: boolean;
  widthLimited?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'form',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
