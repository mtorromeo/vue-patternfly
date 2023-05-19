<template>
  <li :class="styles.listItem">
    <span v-if="$slots.icon" :class="styles.listItemIcon">
      <slot name="icon" />
    </span>
    <slot />
  </li>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/List/list';
import type { LiHTMLAttributes } from 'vue';

defineOptions({
  name: 'PfListItem',
});

export interface Props extends /* @vue-ignore */ LiHTMLAttributes {
}

defineProps<Props>();
</script>
