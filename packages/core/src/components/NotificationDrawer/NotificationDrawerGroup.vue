<template>
  <section :class="[styles.notificationDrawerGroup, { [styles.modifiers.expanded]: managedExpanded }]">
    <component :is="headingLevel">
      <button :class="styles.notificationDrawerGroupToggle" :aria-expanded="managedExpanded" @click="managedExpanded = !managedExpanded">
        <pf-tooltip :position="tooltipPosition">
          <template v-if="textOverflowing" #content>{{ title }}</template>

          <div ref="textRef" :class="styles.notificationDrawerGroupToggleTitle" tabindex="0">
            <slot name="title">{{ title }}</slot>
          </div>
        </pf-tooltip>

        <div :class="styles.notificationDrawerGroupToggleCount">
          <pf-badge :read="read">{{ count }}</pf-badge>
        </div>

        <span class="pf-v5-c-notification-drawer__group-toggle-icon">
          <angle-right-icon />
        </span>
      </button>
    </component>

    <slot v-if="managedExpanded" />
  </section>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import type { HTMLAttributes } from 'vue';
import PfTooltip, { type TooltipPosition } from '../Tooltip/Tooltip.vue';
import PfBadge from '../Badge.vue';
import { ref, type Ref } from 'vue';
import { useElementOverflow, useManagedProp } from '../../use';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';

defineOptions({
  name: 'PfNotificationDrawerGroup',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /**  Notification drawer group count */
  count: number | string;
  /**  Adds styling to the group to indicate expanded state */
  expanded?: boolean;
  /**  Adds styling to the group to indicate whether it has been read */
  read?: boolean;
  /**  Callback for when group button is clicked to expand */
  onExpand?: (event: any, value: boolean) => void;
  /**  Notification drawer group title */
  title?: string;
  /** Truncate title to number of lines */
  truncateTitle?: number;
  /** Position of the tooltip which is displayed if text is truncated */
  tooltipPosition?: TooltipPosition;
  /** Sets the heading level to use for the group title. Default is h1. */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

withDefaults(defineProps<Props>(), {
  expanded: undefined,
  truncateTitle: 0,
  headingLevel: 'h1',
});

defineEmits<{
  (name: 'update:expanded', value: boolean): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  title?: (props?: Record<never, never>) => any;
}>();

const managedExpanded = useManagedProp('expanded', false);

const textRef: Ref<HTMLElement | undefined> = ref();
const textOverflowing = useElementOverflow(textRef);
</script>
