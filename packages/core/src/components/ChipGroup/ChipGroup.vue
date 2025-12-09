<template>
  <pf-label-group
    v-bind="ouiaProps"
    :num-labels="numChips"
    :close-btn-aria-label="closeBtnAriaLabel"
    :aria-label="ariaLabel"
    :expanded-text="expandedText"
    :collapsed-text="collapsedText"
  >
    <slot />
  </pf-label-group>
</template>

<script lang="ts" setup>
import PfLabelGroup from '../Label/LabelGroup.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { ComponentProps } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfChipGroup',
});

interface Props extends OUIAProps, /* @vue-ignore */ Omit<ComponentProps<typeof PfLabelGroup> & { onClick?: (event: PointerEvent) => void }, 'numLabels' | 'ouiaId' | 'ouiaSafe'> {
  id?: string;
  numChips?: number;
  closeBtnAriaLabel?: string;
  ariaLabel?: string;
  expandedText?: string;
  collapsedText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  numChips: 3,
  closeBtnAriaLabel: 'Close chip group',
  ariaLabel: 'Chip group category',
  expandedText: 'Show Less',
  collapsedText: '${remaining} more',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
