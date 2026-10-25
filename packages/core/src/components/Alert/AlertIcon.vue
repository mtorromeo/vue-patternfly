<template>
  <div v-if="$slots.default || AlertVariantIcons[variant]" v-bind="ouiaProps" :class="styles.alertIcon">
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
import type { HTMLAttributes, VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

export const AlertVariantIcons = {
  success: CircleCheckIcon,
  danger: CircleExclamationIcon,
  warning: TriangleExclamationIcon,
  info: CircleInfoIcon,
  custom: BellIcon,
};

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Variant of the alert icon. */
  /** Variant of the alert icon. */
  variant?: keyof typeof AlertVariantIcons;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Alert/alert';

defineOptions({
  name: 'PfAlertIcon',
});

const props = withDefaults(defineProps<Props>(), {
  variant: 'custom',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** A custom icon, replacing the one of the variant. */
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
