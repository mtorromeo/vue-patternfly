<template>
  <pf-tooltip v-model:visible="tooltipVisible" trigger="manual" :content="tooltipContent">
    <component
      :is="component"
      v-bind="ouiaProps"
      :class="[styles.dataListText, { [styles.modifiers[wrapModifier ?? 'nowrap']]: wrapModifier }]"
      @mouseenter="onMouseEnter"
      @mouseleave="tooltipVisible = false"
    >
      <slot />
    </component>
  </pf-tooltip>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Determines which element to render as a data list text. Usually div or span */
  component?: string | Component;
  /** Determines which wrapping modifier to apply to the data list text */
  wrapModifier?: DataListWrapModifier;
  /** Text of the tooltip shown when the text is truncated. Defaults to the text itself. */
  tooltip?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { ref, type Component, type HTMLAttributes, type VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import PfTooltip from '../Tooltip/Tooltip.vue';
import type { DataListWrapModifier } from './common';

defineOptions({
  name: 'PfDataListText',
});

const props = withDefaults(defineProps<Props>(), {
  component: 'span',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Content of the data list text */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const tooltipVisible = ref(false);
const tooltipContent = ref('');

// a tooltip shows the whole text when it overflows
function onMouseEnter(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement;
  if (target.offsetWidth < target.scrollWidth) {
    tooltipContent.value = props.tooltip || target.textContent || '';
    tooltipVisible.value = true;
  } else {
    tooltipVisible.value = false;
  }
}
</script>
