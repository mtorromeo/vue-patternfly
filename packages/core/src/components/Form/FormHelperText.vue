<template>
  <component
    :is="component"
    :class="[styles.formHelperText, {
      [styles.modifiers.error]: error,
      [styles.modifiers.hidden]: hidden,
    }]"
  >
    <span v-if="$slots.icon" :class="styles.formHelperTextIcon">
      <slot name="icon" />
    </span>
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Form/form';

withDefaults(defineProps<{
  /** Adds error styling to the Helper Text  * */
  error?: boolean;
  /** Hides the helper text * */
  hidden?: boolean;
  /** Component type of the form helper text */
  component?: 'p' | 'div';
}>(), {
  component: 'p',
});
</script>
