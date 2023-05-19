<template>
  <div :class="styles.drawerClose">
    <pf-button variant="plain" :aria-label="ariaLabel" @click="emit('close')">
      <xmark-icon />
    </pf-button>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';

import PfButton from '../Button.vue';
import XmarkIcon from '@vue-patternfly/icons/dist/esm/icons/xmark-icon';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfDrawerCloseButton',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Accessible label for the drawer close button */
  ariaLabel?: string;
}

defineProps<Props>();

const emit = defineEmits<{
  /** A callback for when the close button is clicked  */
  (name: 'close'): void;
}>();
</script>
