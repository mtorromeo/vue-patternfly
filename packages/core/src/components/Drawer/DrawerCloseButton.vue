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

defineOptions({
  name: 'PfDrawerCloseButton',
});

defineProps<{
  /** Accessible label for the drawer close button */
  ariaLabel?: string;
}>();

const emit = defineEmits<{
  /** A callback for when the close button is clicked  */
  (name: 'close'): void;
}>();
</script>
