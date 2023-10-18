<template>
  <span
    :class="[styles.formControlIcon, {
      [styles.modifiers.status]: status,
    }]">
    <slot>
      <circle-check-icon v-if="status === 'success'" />
      <circle-exclamation-icon v-else-if="status === 'warning'" />
      <triangle-exclamation-icon v-else-if="status === 'error'" />
    </slot>
  </span>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';

import { type HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfFormControlIcon',
});// expands object types one level deep

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** The status icon to render. */
  status?: 'success' | 'error' | 'warning';
}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
