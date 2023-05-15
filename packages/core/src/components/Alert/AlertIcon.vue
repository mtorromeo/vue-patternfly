<template>
  <div v-if="$slots.default || AlertVariantIcons[variant]" :class="styles.alertIcon">
    <slot>
      <component :is="AlertVariantIcons[variant]" />
    </slot>
  </div>
</template>

<script lang="ts">
import CircleCheckIcon from '@vue-patternfly/icons/dist/esm/icons/circle-check-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/dist/esm/icons/circle-exclamation-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/dist/esm/icons/triangle-exclamation-icon';
import CircleInfoIcon from '@vue-patternfly/icons/dist/esm/icons/circle-info-icon';
import BellIcon from '@vue-patternfly/icons/dist/esm/icons/bell-icon';

export const AlertVariantIcons = {
  success: CircleCheckIcon,
  danger: CircleExclamationIcon,
  warning: TriangleExclamationIcon,
  info: CircleInfoIcon,
  default: BellIcon,
};
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Alert/alert';

defineOptions({
  name: 'PfAlertIcon',
});

withDefaults(defineProps<{
  variant?: keyof typeof AlertVariantIcons;
}>(), {
  variant: 'default',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
