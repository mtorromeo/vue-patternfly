<template>
  <pf-toggle :plain="plain">
    <pf-badge v-bind="badge">
      <slot />
      <span :class="styles.dropdownToggleIcon">
        <caret-down-icon />
      </span>
    </pf-badge>
  </pf-toggle>
</template>

<script lang="ts" setup>
import { default as PfBadge, type Props as BadgeProps } from '../Badge.vue';
import { default as PfToggle, type Props as ToggleProps } from './Toggle.vue';
import CaretDownIcon from '@vue-patternfly/icons/caret-down-icon';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

defineOptions({
  name: 'PfBadgeToggle',
});

export interface Props extends /* @vue-ignore */ ToggleProps {
  plain?: boolean,
  badge?: BadgeProps,
}

withDefaults(defineProps<Props>(), {
  plain: true,
  badge: () => ({
    read: true,
  }),
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
