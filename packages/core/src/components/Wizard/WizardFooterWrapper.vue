<template>
  <footer :class="styles.wizardFooter">
    <slot />
  </footer>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import type { VNode } from 'vue';

defineOptions({
  name: 'PfWizardFooterWrapper',
});

defineSlots<{
  /** Content of the footer, such as a pf-action-list */
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
