<template>
  <component :is="href ? 'a' : 'button'" :type="href ? undefined : 'button'" :href="href">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'vue';

defineOptions({
  name: 'PfTabButton',
});

export interface Props extends /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'type'>, /* @vue-ignore */ Omit<AnchorHTMLAttributes, 'type'> {
  /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs component="nav"> should have an href. */
  href?: string;
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
