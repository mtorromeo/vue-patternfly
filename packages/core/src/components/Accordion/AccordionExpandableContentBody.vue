<template>
  <div :class="styles.accordionExpandableContentBody">
    <slot />
  </div>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ HTMLAttributes {}
</script>

<script lang="ts" setup>
import type { HTMLAttributes, VNode } from 'vue';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';

defineOptions({
  name: 'PfAccordionExpandableContentBody',
});

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
