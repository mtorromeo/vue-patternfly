<template>
  <div :class="[styles.formGroup, styles.modifiers.action]">
    <div :class="styles.formGroupControl">
      <div :class="styles.formActions">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Form/form';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfActionGroup',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
}

defineProps<Props>();
</script>
