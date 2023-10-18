<template>
  <pf-input-group-item box :plain="plain" :disabled="disabled">
    <component :is="component" :class="styles.inputGroupText">
      <slot />
    </component>
  </pf-input-group-item>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import PfInputGroupItem from './InputGroupItem.vue';

import { type Component, type HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfInputGroupText',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
    /** Component that wraps the input group text. */
  component?: string | Component;
  /** Flag to to indicate if the input group item is plain. */
  plain?: boolean;
  /** Flag to indicate if the input group text is disabled. */
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  component: 'span',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
