<template>
  <div :class="styles.textInputGroupUtilities">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfTextInputGroupUtilities',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
}

defineProps<Props>();
</script>
