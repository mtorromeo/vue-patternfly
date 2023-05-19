<template>
  <div :class="styles.menuBreadcrumb">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfMenuBreadcrumb',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
}

defineProps<Props>();
</script>
