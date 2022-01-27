<template>
  <div :class="[styles.formGroup, styles.modifiers.action]">
    <div :class="styles.formGroupControl">
      <div :class="styles.formActions">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Form/form';
import { defineComponent, markRaw } from 'vue';

export default defineComponent({
  name: 'PfActionGroup',

  setup() {
    return {
      styles: markRaw(styles),
    };
  },
});
</script>
