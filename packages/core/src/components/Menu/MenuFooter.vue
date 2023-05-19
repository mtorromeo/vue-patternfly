<template>
  <div :class="styles.menuFooter">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfMenuFooter',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
}

defineProps<Props>();
</script>
