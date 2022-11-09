<template>
  <div
    :class="styles.panelMain"
    :style="{ '--pf-c-panel__main--MaxHeight': maxHeight }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Panel/panel';

defineProps<{
  /** Max height of the panel main div as a string with the value and unit */
  maxHeight?: string;
}>();
</script>
