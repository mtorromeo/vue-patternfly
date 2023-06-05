<template>
  <component
    :is="component"
    v-if="overflow"
    :id="effectiveId"
    v-bind="$attrs"
    :class="[styles.chip, styles.modifiers.overflow]"
    :type="component === 'button' ? 'button' : undefined"
    @click="$emit('click', $event)"
  >
    <span :class="styles.chipText">
      <slot />
    </span>
  </component>

  <pf-tooltip v-else :position="props.tooltipPosition">
    <template v-if="textOverflowing" #content>
      <slot />
    </template>

    <component
      :is="component"
      v-bind="$attrs"
      :class="styles.chip"
      :type="component === 'button' ? 'button' : undefined"
    >
      <span :id="effectiveId" ref="textRef" :class="styles.chipText">
        <slot />
      </span>

      <pf-button
        v-if="!readonly"
        :id="`remove_${effectiveId}`"
        variant="plain"
        :aria-label="closeBtnAriaLabel"
        :aria-labelledby="`remove_${effectiveId} ${effectiveId}`"
        @click="$emit('click', $event)"
      >
        <xmark-icon aria-hidden />
      </pf-button>
    </component>
  </pf-tooltip>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Chip/chip';

import XmarkIcon from '@vue-patternfly/icons/dist/esm/icons/xmark-icon';
import PfButton from '../Button.vue';
import PfTooltip, { type TooltipPosition } from '../Tooltip/Tooltip.vue';
import { getUniqueId } from '../../util';
import { useElementOverflow } from '../../use';
import { type Component, computed, ref, type Ref, type HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfChip',
  inheritAttrs: false,
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  id?: string;
  readonly?: boolean;
  overflow?: boolean;
  component?: string | Component;
  tooltipPosition?: TooltipPosition;
  closeBtnAriaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'div',
  tooltipPosition: 'top',
  closeBtnAriaLabel: 'close',
});

defineEmits<{
  (name: 'click', e: MouseEvent | TouchEvent): void;
}>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const textRef: Ref<HTMLSpanElement | undefined> = ref();
const textOverflowing = useElementOverflow(textRef);
const effectiveId = computed(() => props.id ?? getUniqueId());
</script>
