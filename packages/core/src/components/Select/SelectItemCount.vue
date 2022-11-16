<template>
  <span v-if="isDefined(count) && count !== ''" :class="styles.selectMenuItemRow">
    <span :class="styles.selectMenuItemText">
      <slot />
    </span>
    <span :class="styles.selectMenuItemCount">{{ count }}</span>
  </span>
  <slot v-else />
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Select/select';
import { isDefined } from '../../use';

defineProps<{
  count?: number | string;
}>();
</script>
