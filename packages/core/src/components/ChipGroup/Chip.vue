<template>
  <component
    :is="component"
    v-if="overflow"
    :id="id"
    v-bind="{...ouiaProps, ...$attrs}"
    :class="[styles.chip, styles.modifiers.overflow]"
    :style="{
      '--pf-v5-c-chip__text--MaxWidth': textMaxWidth,
    }"
    :type="component === 'button' ? 'button' : undefined"
    @click="emit('click', $event)"
  >
    <span :class="styles.chipContent">
      <span :class="styles.chipText">
        <slot />
      </span>
      <slot name="badge" />
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
      :style="{
        [cssChipTextMaxWidth.name]: textMaxWidth,
      }"
      :type="component === 'button' ? 'button' : undefined"
    >
      <span :class="styles.chipContent">
        <span :id="id" ref="text" :class="styles.chipText">
          <slot />
        </span>
        <slot name="badge" />
      </span>

      <span v-if="!readonly" :class="styles.chipActions">
        <pf-button
          v-if="!readonly"
          :id="`remove_${id}`"
          variant="plain"
          :aria-label="closeBtnAriaLabel"
          :aria-labelledby="`remove_${id} ${id}`"
          @click="emit('click', $event)"
        >
          <xmark-icon aria-hidden />
        </pf-button>
      </span>
    </component>
  </pf-tooltip>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Chip/chip';
import cssChipTextMaxWidth from '@patternfly/react-tokens/dist/esm/c_chip__text_MaxWidth';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import PfButton from '../Button.vue';
import PfTooltip from '../Tooltip/Tooltip.vue';
import { useElementOverflow } from '../../use';
import { type Component, type HTMLAttributes, useId, useTemplateRef } from 'vue';
import type { Placement } from '../../helpers/FloatingUi.vue';

defineOptions({
  name: 'PfChip',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'type' | 'onClick'> {
  id?: string;
  readonly?: boolean;
  overflow?: boolean;
  component?: string | Component;
  tooltipPosition?: Placement;
  closeBtnAriaLabel?: string;
  /** Css property expressed in percentage or any css unit that overrides the default value of the max-width of the chip's text */
  textMaxWidth?: string;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'div',
  tooltipPosition: 'top',
  closeBtnAriaLabel: 'close',
  id: () => useId(),
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'click', e: PointerEvent): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  badge?: (props?: Record<never, never>) => any;
}>();

const textRef = useTemplateRef('text');
const textOverflowing = useElementOverflow(textRef);
</script>
