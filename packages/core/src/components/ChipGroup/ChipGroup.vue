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
import PfLabelGroup, { type Props as LabelGroupProps } from '../Label/LabelGroup.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfChipGroup',
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<LabelGroupProps & { onClick?: (event: PointerEvent) => void }, 'numLabels'> {
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
