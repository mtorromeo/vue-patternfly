<template>
  <div :class="`${styles.fileUpload}__helper-text`">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/FileUpload/file-upload';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfFileUploadHelperText',
});

interface Props extends /* @vue-ignore */ HTMLAttributes {}

defineProps<Props>();

defineSlots<{
  /** Helper text content, typically a pf-helper-text */
  default?: (props?: Record<never, never>) => any;
}>();
</script>
