<template>
  <component
    :is="component"
    :class="[
      styles.inputGroupText, {
        [styles.modifiers.plain]: plain,
      },
    ]"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';

import { type Component, type HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfInputGroupText',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
    /** Component that wraps the input group text. */
  component?: string | Component;
  /** Input group plain variant */
  plain?: boolean;
}

withDefaults(defineProps<Props>(), {
  component: 'span',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
