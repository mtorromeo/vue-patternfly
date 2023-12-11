<template>
  <div v-if="$slots.default || AlertVariantIcons[variant]" :class="styles.alertIcon">
    <slot>
      <component :is="AlertVariantIcons[variant]" />
    </slot>
  </div>
</template>

<script lang="ts">
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
import CircleInfoIcon from '@vue-patternfly/icons/circle-info-icon';
import BellIcon from '@vue-patternfly/icons/bell-icon';
import type { HTMLAttributes } from 'vue';

export const AlertVariantIcons = {
  success: CircleCheckIcon,
  danger: CircleExclamationIcon,
  warning: TriangleExclamationIcon,
  info: CircleInfoIcon,
  custom: BellIcon,
};

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  variant?: keyof typeof AlertVariantIcons;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Alert/alert';

defineOptions({
  name: 'PfAlertIcon',
});

withDefaults(defineProps<Props>(), {
  variant: 'custom',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
