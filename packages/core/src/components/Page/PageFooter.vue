<template>
  <component v-bind="ouiaProps" :is="component" :class="styles.pageFooter">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';
import type { Component, HTMLAttributes, VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfPageFooter',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Sets the base component to render. Defaults to footer */
  component?: string | Component;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'footer',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
