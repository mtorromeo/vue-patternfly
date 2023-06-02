<template>
  <div :class="[styles.content, { [styles.modifiers.visited]: visited }]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Content/content';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfTextContent',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
    /** Flag to indicate the all links in a the content block have visited styles applied if the browser determines the link has been visited */
  visited?: boolean;
}

defineProps<Props>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
