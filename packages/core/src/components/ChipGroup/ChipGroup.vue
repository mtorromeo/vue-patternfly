<template>
  <div
    v-if="$slots.default"
    v-bind="ouiaProps"
    :id="id"
    :class="[styles.chipGroup, {
      [styles.modifiers.category]: category,
    }]"
  >
    <div :class="styles.chipGroupMain">
      <pf-tooltip v-if="category">
        <template v-if="labelOverflowing" #content>
          {{ category }}
        </template>

        <span ref="labelRef" :class="styles.chipGroupLabel">
          {{ category }}
        </span>
      </pf-tooltip>

      <ul
        :class="styles.chipGroupList"
        :aria-labelledby="id"
        :aria-label="ariaLabel"
        role="list"
      >
        <render />
      </ul>

      <div v-if="closable" :class="styles.chipGroupClose">
        <pf-button variant="plain" :aria-label="closeBtnAriaLabel" @click="emit('click', $event)">
          <circle-xmark-icon aria-hidden />
        </pf-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { h, ref, type Ref, type HTMLAttributes } from 'vue';
import styles from '@patternfly/react-styles/css/components/Chip/chip-group';
import CircleXmarkIcon from '@vue-patternfly/icons/circle-xmark-icon';
import PfChip from './Chip.vue';
import PfButton from '../Button.vue';
import PfTooltip from '../Tooltip/Tooltip.vue';
import { findChildrenVNodes, fillTemplate } from '../../util';
import { useElementOverflow } from '../../use';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { Placement } from '../../helpers/FloatingUi.vue';

defineOptions({
  name: 'PfChipGroup',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  id?: string;
  defaultOpen?: boolean;
  closable?: boolean;
  category?: string;
  numChips?: number;
  tooltipPosition?: Placement;
  closeBtnAriaLabel?: string;
  ariaLabel?: string;
  expandedText?: string;
  collapsedText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  numChips: 3,
  tooltipPosition: 'top',
  closeBtnAriaLabel: 'Close chip group',
  ariaLabel: 'Chip group category',
  expandedText: 'Show Less',
  collapsedText: '${remaining} more',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'click', e: MouseEvent | TouchEvent): void;
  (name: 'overflow-chip-click', e: MouseEvent | TouchEvent): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const labelRef: Ref<HTMLSpanElement | undefined> = ref();
const labelOverflowing = useElementOverflow(labelRef);
const open = ref(props.defaultOpen);

function overflowChipClick(e: MouseEvent | TouchEvent) {
  toggleCollapse();
  emit('overflow-chip-click', e);
}

function toggleCollapse() {
  open.value = !open.value;
}

function render() {
  const children = slots.default ? findChildrenVNodes(slots.default({})) : [];

  const chipArray = open.value ? children : children.slice(0, props.numChips);

  const lis = chipArray.map((child, i) => h('li', { key: i, class: styles.chipGroupListItem }, child));

  if (children.length > props.numChips) {
    const collapsedTextResult = fillTemplate(props.collapsedText, {
      remaining: children.length - chipArray.length,
    });
    lis.push(h('li', { class: styles.chipGroupListItem }, [
      h(PfChip, {
        component: 'button',
        overflow: true,
        onClick: overflowChipClick,
      },
        () => open.value ? props.expandedText : collapsedTextResult,
      ),
    ]));
  }

  return lis;
}
</script>
