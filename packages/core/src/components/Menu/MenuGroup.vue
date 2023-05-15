<template>
  <section :class="styles.menuGroup">
    <component :is="labelHeadingLevel" v-if="label" :class="styles.menuGroupTitle">
      <slot name="label">{{ label }}</slot>
    </component>
    <slot />
  </section>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';

withDefaults(defineProps<{
  /** Group label */
  label?: string;
  /** ID for title label */
  titleId?: string;
  /** Group label heading level. Default is h1. */
  labelHeadingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>(), {
  labelHeadingLevel: 'h1',
});
</script>
