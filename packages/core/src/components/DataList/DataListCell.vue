<template>
  <component :is="tooltipVisible ? PfTooltip : PassThrough">
    <div
      v-bind="{ ...ouiaProps, ...$attrs }"
      ref="cellRef"
      :class="[
        styles.dataListCell,
        {
          [styles.modifiers.noFill]: noFill,
          [styles.modifiers[wrapModifier ?? 'nowrap']]: wrapModifier,
          [styles.modifiers.alignRight]: alignRight,
          [styles.modifiers.icon]: icon,
          [styles.modifiers[`flex_${width}` as 'flex_2' | 'flex_3' | 'flex_4' | 'flex_5']]: (width ?? 0) > 1,
        },
      ]"
      :tabindex="tooltipVisible ? 0 : undefined"
    >
      <slot />
    </div>
    <template v-if="tooltipVisible" #content>
      <slot />
    </template>
  </component>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Flag to keep the cell from filling the available space (upstream isFilled = false) */
  noFill?: boolean;
  /** Width (from 1-5) of the cell */
  width?: 1 | 2 | 3 | 4 | 5;
  /** Aligns the cell content to the right of its parent */
  alignRight?: boolean;
  /** Set to true if the cell content is an icon */
  icon?: boolean;
  /** Determines which wrapping modifier to apply to the cell. Truncated content is shown in a tooltip. */
  wrapModifier?: DataListWrapModifier;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { ref, useTemplateRef, watch, type HTMLAttributes, type VNode } from 'vue';
import { useElementSize } from '@vueuse/core';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import PassThrough from '../../helpers/PassThrough.vue';
import PfTooltip from '../Tooltip/Tooltip.vue';
import type { DataListWrapModifier } from './common';

defineOptions({
  name: 'PfDataListCell',
  inheritAttrs: false,
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Content of the cell */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const cell = useTemplateRef<HTMLElement>('cellRef');
const { width: cellWidth } = useElementSize(cell);
const tooltipVisible = ref(false);

// truncated content becomes focusable and shows a tooltip
watch(
  () => [cellWidth.value, props.wrapModifier],
  () => {
    tooltipVisible.value =
      props.wrapModifier === 'truncate' && !!cell.value && cell.value.offsetWidth < cell.value.scrollWidth;
  },
);
</script>
