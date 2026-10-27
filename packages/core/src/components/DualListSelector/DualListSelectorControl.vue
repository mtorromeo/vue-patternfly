<template>
  <div :class="styles.dualListSelectorControlsItem">
    <pf-button
      ref="button"
      variant="plain"
      :disabled="disabled"
      :aria-disabled="disabled"
      :aria-label="ariaLabel"
      :tabindex="-1"
      @click="emit('click', $event)"
    >
      <template v-if="$slots.icon" #icon>
        <slot name="icon" />
      </template>
      <slot />
    </pf-button>
    <pf-tooltip v-if="tooltip || $slots.tooltip" position="left" :trigger-ref="buttonEl" v-bind="tooltipAttrs">
      <template #content>
        <slot name="tooltip">{{ tooltip }}</slot>
      </template>
    </pf-tooltip>
  </div>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Flag indicating the control is disabled. */
  disabled?: boolean;
  /** Accessible label of the control button. */
  ariaLabel?: string;
  /** Content of a tooltip shown on hover of the control. */
  tooltip?: string;
  /** Additional attributes of the tooltip, e.g. `{ position: 'top' }` */
  tooltipAttrs?: Record<string, unknown>;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { useTemplateRef, type HTMLAttributes, type VNode } from 'vue';
import PfButton from '../Button.vue';
import PfTooltip from '../Tooltip/Tooltip.vue';

defineOptions({
  name: 'PfDualListSelectorControl',
});

defineProps<Props>();

const emit = defineEmits<{
  /** Fired when the control is clicked */
  (name: 'click', event: PointerEvent): void;
}>();

defineSlots<{
  /** Content of the control button */
  default?: (props?: Record<never, never>) => VNode[];
  /** Icon of the control button */
  icon?: (props?: Record<never, never>) => VNode[];
  /** Content of the tooltip, replacing the `tooltip` prop */
  tooltip?: (props?: Record<never, never>) => VNode[];
}>();

const button = useTemplateRef('button');

function buttonEl() {
  const el = button.value?.el;
  return el instanceof HTMLElement ? el : null;
}
</script>
