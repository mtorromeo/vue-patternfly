<template>
  <div
    :class="styles.panelMain"
    :style="{ '--pf-v5-c-panel__main--MaxHeight': maxHeight }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfPanelMain',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Max height of the panel main div as a string with the value and unit */
  maxHeight?: string;
}

defineProps<Props>();
</script>
