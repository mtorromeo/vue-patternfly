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
</script>
