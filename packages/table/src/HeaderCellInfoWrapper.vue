<template>
  <div :class="styles.tableColumnHelp">
    <pf-table-text v-if="textContent(slots.default?.())">
      <slot />
    </pf-table-text>
    <slot v-else />
    <span :class="styles.tableColumnHelpAction">
      <pf-popover v-if="popover" v-bind="popoverAttrs">
        <template v-if="$slots['popover-header']" #header>
          <slot name="popover-header" />
        </template>
        <template #body>
          <slot name="info">{{ info }}</slot>
        </template>
        <template v-if="$slots['popover-footer']" #footer>
          <slot name="popover-footer" />
        </template>
        <pf-button variant="plain" no-padding :aria-label="buttonAriaLabel">
          <template #icon><circle-question-icon /></template>
        </pf-button>
      </pf-popover>
      <pf-tooltip v-else :content="info" v-bind="tooltipAttrs">
        <template v-if="$slots.info" #content>
          <slot name="info" />
        </template>
        <pf-button variant="plain" no-padding :aria-label="buttonAriaLabel">
          <template #icon><circle-question-icon /></template>
        </pf-button>
      </pf-tooltip>
    </span>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PfHeaderCellInfoWrapper',
});

const props = defineProps<Props>();
const messages = usePfMessages();

const slots = defineSlots<{
  /** The header cell content that is wrapped */
  default?: (props?: Record<never, never>) => any;
  /** The information presented in the tooltip/popover, replacing the info prop */
  info?: (props?: Record<never, never>) => any;
  /** Header of the popover */
  'popover-header'?: (props?: Record<never, never>) => any;
  /** Footer of the popover */
  'popover-footer'?: (props?: Record<never, never>) => any;
}>();

const buttonAriaLabel = computed(() => props.ariaLabel || props.info || messages.value.thInfo);
</script>

<script lang="ts">
import { computed } from 'vue';
import { usePfMessages } from '@vue-patternfly/core/messages';
import type { ComponentProps } from 'vue-component-type-helpers';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { PfButton, PfPopover, PfTooltip } from '@vue-patternfly/core';
import CircleQuestionIcon from '@vue-patternfly/icons/circle-question-icon';
import PfTableText from './TableText.vue';
import { textContent } from './common';

interface Props {
  /** The information that is presented in the tooltip/popover */
  info?: string;
  /** Presents the information in a popover instead of a tooltip */
  popover?: boolean;
  /** Additional props forwarded to the tooltip */
  tooltipAttrs?: Omit<ComponentProps<typeof PfTooltip>, 'content'>;
  /** Additional props forwarded to the popover */
  popoverAttrs?: Record<string, unknown>;
  /** Aria label of the info button. Defaults to the info text. */
  ariaLabel?: string;
}
</script>
