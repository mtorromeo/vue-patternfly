<template>
  <div :class="styles.panelHeader">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfPanelHeader',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
}

defineProps<Props>();

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();
</script>
