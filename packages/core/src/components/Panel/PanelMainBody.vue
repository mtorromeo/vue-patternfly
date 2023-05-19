<template>
  <div :class="styles.panelMainBody">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfPanelMainBody',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
}

defineProps<Props>();
</script>
