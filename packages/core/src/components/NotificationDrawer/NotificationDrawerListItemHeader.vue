<template>
  <div v-bind="ouiaProps" :class="styles.notificationDrawerListItemHeader">
    <span :class="styles.notificationDrawerListItemHeaderIcon">
      <slot name="icon">
        <component :is="variantIcons[variant]" />
      </slot>
    </span>
    <pf-tooltip :position="tooltipPosition">
      <template v-if="textOverflowing" #content>{{ title }}</template>

      <component :is="headingLevel" ref="textRef" :class="[styles.notificationDrawerListItemHeaderTitle, { [styles.modifiers.truncate]: truncateTitle }]">
        <span v-if="srTitle" class="pf-v6-screen-reader">{{ srTitle }}</span>
        {{ title }}
      </component>
    </pf-tooltip>
  </div>
  <div v-if="$slots.default" :class="styles.notificationDrawerListItemAction">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import PfTooltip from '../Tooltip/Tooltip.vue';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
import CircleInfoIcon from '@vue-patternfly/icons/circle-info-icon';
import BellIcon from '@vue-patternfly/icons/bell-icon';
import { useElementOverflow } from '../../use';
import { useTemplateRef } from 'vue';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { Placement } from '../../helpers/FloatingUi.vue';

defineOptions({
  name: 'PfNotificationDrawerListItem',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /**  Notification drawer list item header screen reader title */
  srTitle?: string;
  /**  Notification drawer list item title */
  title: string;
  /**  Variant indicates the severity level */
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'custom';
  /** Truncate title to number of lines */
  truncateTitle?: number;
  /** Position of the tooltip which is displayed if text is truncated */
  tooltipPosition?: Placement;
  /** Sets the heading level to use for the list item header title. Default is h2. */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'custom',
  truncateTitle: 0,
  headingLevel: 'h2',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
}>();

const variantIcons = {
  success: CircleCheckIcon,
  danger: CircleExclamationIcon,
  warning: TriangleExclamationIcon,
  info: CircleInfoIcon,
  custom: BellIcon,
};

const text = useTemplateRef<HTMLElement>('textRef');
const textOverflowing = useElementOverflow(text);
</script>
