<template>
  <ol v-if="innerList" :class="styles.wizardNavList" role="list">
    <slot />
  </ol>
  <nav v-else :class="[styles.wizardNav, { [styles.modifiers.expanded]: expanded }]">
    <ol :class="styles.wizardNavList" role="list">
      <slot />
    </ol>
  </nav>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Whether the navigation is expanded */
  expanded?: boolean;
  /** True to return the inner list without the wrapping navigation element */
  innerList?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import type { HTMLAttributes, VNode } from 'vue';

defineOptions({
  name: 'PfWizardNav',
});

defineProps<Props>();

defineSlots<{
  /** pf-wizard-nav-item components */
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
