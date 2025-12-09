<template>
  <section v-bind="ouiaProps" :class="[styles.notificationDrawerGroup, { [styles.modifiers.expanded]: expanded }]">
    <component :is="headingLevel">
      <button :class="styles.notificationDrawerGroupToggle" :aria-expanded="expanded" @click="expanded = !expanded" @keydown="onKeydown">
        <pf-tooltip :position="tooltipPosition">
          <template v-if="textOverflowing" #content>{{ title }}</template>

          <div
            ref="textRef"
            :class="styles.notificationDrawerGroupToggleTitle"
            tabindex="0"
            :style="truncateTitle ? { [maxLines.name]: truncateTitle.toString() } : undefined"
          >
            <slot name="title">{{ title }}</slot>
          </div>
        </pf-tooltip>

        <div :class="styles.notificationDrawerGroupToggleCount">
          <pf-badge :read="read">{{ count }}</pf-badge>
        </div>

        <span :class="styles.notificationDrawerGroupToggleIcon">
          <angle-right-icon />
        </span>
      </button>
    </component>

    <slot v-if="expanded" />
  </section>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import maxLines from '@patternfly/react-tokens/dist/esm/c_notification_drawer__group_toggle_title_max_lines';
import type { HTMLAttributes } from 'vue';
import PfTooltip from '../Tooltip/Tooltip.vue';
import PfBadge from '../Badge.vue';
import { useTemplateRef } from 'vue';
import { useElementOverflow } from '../../use';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { Placement } from '../../helpers/FloatingUi.vue';

defineOptions({
  name: 'PfNotificationDrawerGroup',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /**  Notification drawer group count */
  count: number | string;
  /**  Adds styling to the group to indicate whether it has been read */
  read?: boolean;
  /**  Callback for when group button is clicked to expand */
  onExpand?: (event: any, value: boolean) => void;
  /**  Notification drawer group title */
  title?: string;
  /** Truncate title to number of lines */
  truncateTitle?: number;
  /** Position of the tooltip which is displayed if text is truncated */
  tooltipPosition?: Placement;
  /** Sets the heading level to use for the group title. Default is h1. */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const props = withDefaults(defineProps<Props>(), {
  truncateTitle: 0,
  headingLevel: 'h1',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

/**  Adds styling to the group to indicate expanded state */
const expanded = defineModel<boolean>('expanded', { default: false });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  title?: (props?: Record<never, never>) => any;
}>();

const text = useTemplateRef('textRef');
const textOverflowing = useElementOverflow(text);

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    expanded.value = !expanded.value;
  }
}
</script>
