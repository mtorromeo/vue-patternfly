<template>
  <div
    :class="[
      styles.inputGroupItem, {
        [styles.modifiers.plain]: plain,
        [styles.modifiers.fill]: fill,
        [styles.modifiers.box]: box,
        [styles.modifiers.disabled]: disabled,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';

import { type HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfInputGroupItem',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Enables box styling to the input group item */
  box?: boolean;
  /** Flag to indicate if the input group item is plain. */
  plain?: boolean;
  /** Flag to indicate if the input group item should fill the available horizontal space */
  fill?: boolean;
  /** Flag to indicate if the input group item is disabled. */
  disabled?: boolean;
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
