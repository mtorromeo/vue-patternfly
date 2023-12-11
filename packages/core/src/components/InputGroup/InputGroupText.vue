<template>
  <pf-input-group-item box>
    <component :is="component" :class="styles.inputGroupText">
      <slot />
    </component>
  </pf-input-group-item>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import PfInputGroupItem, { type Props as PfInputGroupItemProps } from './InputGroupItem.vue';
import type { Component } from 'vue';

defineOptions({
  name: 'PfInputGroupText',
});

export interface Props extends /* @vue-ignore */ Omit<PfInputGroupItemProps, 'box'> {
    /** Component that wraps the input group text. */
  component?: string | Component;
}

withDefaults(defineProps<Props>(), {
  component: 'span',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
