<template>
  <div v-if="expanded" :class="styles.cardExpandableContent">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Card/card';
import { CardExpandedKey } from './Card.vue';
import { type HTMLAttributes, inject } from 'vue';

defineOptions({
  name: 'PfCardExpandableContent',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
    /** Flag indicating that the actions have no offset. */
  noOffset?: boolean;
}

defineProps<Props>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const expanded = inject(CardExpandedKey);
</script>
