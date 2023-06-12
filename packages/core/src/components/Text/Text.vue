<template>
  <component :is="component" data-pf-content :class="{[styles.modifiers.visited]: visited && component === 'a'}">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Content/content';
import type { AnchorHTMLAttributes, BlockquoteHTMLAttributes } from 'vue';

export type TextVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a' | 'small' | 'blockquote' | 'pre';

defineOptions({
  name: 'PfText',
});

export interface Props extends /* @vue-ignore */ AnchorHTMLAttributes, /* @vue-ignore */ BlockquoteHTMLAttributes {
  component?: TextVariants;

  /** Flag to indicate the link has visited styles applied if the browser determines the link has been visited */
  visited?: boolean;
}

withDefaults(defineProps<Props>(), {
  component: 'p',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
