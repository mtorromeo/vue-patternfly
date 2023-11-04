<template>
  <component
    :is="component ?? (href === undefined ? 'span' : 'a')"
    :class="styles.mastheadBrand"
    :tabindex="(component === 'a' || href !== undefined) ? 0 : undefined"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
import type { AnchorHTMLAttributes } from 'vue';

defineOptions({
  name: 'PfMastheadBrand',
});

export interface Props extends /* @vue-ignore */ AnchorHTMLAttributes {
  component?: string;
  href?: string;
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
