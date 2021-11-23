<template>
  <div :class="[styles.formGroup, styles.modifiers.action]">
    <div :class="styles.formGroupControl">
      <div :class="styles.formActions">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import styles from '@patternfly/react-styles/css/components/Form/form';
</script>

<script>
export default {
  name: 'PfActionGroup',
};
</script>
