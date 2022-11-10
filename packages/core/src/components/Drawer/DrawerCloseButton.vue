<template>
  <div :class="styles.drawerClose">
    <pf-button variant="plain" @click="emit('close')" :aria-label="ariaLabel">
      <xmark-icon />
    </pf-button>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';

import PfButton from '../Button.vue';
import XmarkIcon from '@vue-patternfly/icons/dist/esm/icons/xmark-icon';

defineProps<{
  /** Accessible label for the drawer close button */
  ariaLabel?: string;
}>();

const emit = defineEmits({
  /** A callback for when the close button is clicked  */
  close: () => true,
});
</script>
