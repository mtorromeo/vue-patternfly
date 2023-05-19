<template>
  <span
    :class="[styles.label, colorStyles[color], {
      [styles.modifiers.outline]: outline || variant === 'outline',
    }]">
    <pf-tooltip :position="tooltipPosition">
      <component :is="href ? 'a' : to ? 'router-link' : 'span'" :to="to" :href="href" :class="styles.labelContent">
        <span v-if="$slots.icon" :class="styles.labelIcon">
          <slot name="icon" />
        </span>

        <span v-if="truncated" ref="textRef" :class="styles.labelText">
          <slot />
        </span>
        <slot v-else />
      </component>

      <template v-if="textOverflowing" #content>
        <slot />
      </template>
    </pf-tooltip>
    <pf-close-button v-if="close" @click="$emit('close', $event)" />
  </span>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Label/label';

import { ref, type Ref, type HTMLAttributes, type VNode } from 'vue';
import { useElementOverflow } from '../use';
import PfCloseButton from './CloseButton.vue';
import PfTooltip, { type TooltipPosition } from './Tooltip/Tooltip.vue';
import type { RouteLocationRaw } from 'vue-router';

const colorStyles = {
  blue: styles.modifiers.blue,
  cyan: styles.modifiers.cyan,
  green: styles.modifiers.green,
  orange: styles.modifiers.orange,
  purple: styles.modifiers.purple,
  red: styles.modifiers.red,
  grey: '',
};

defineOptions({
  name: 'PfLabel',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** The color of the label outline/fill */
  color?: keyof typeof colorStyles,
  variant?: 'outline' | 'filled';
  tooltipPosition?: TooltipPosition;
  to?: RouteLocationRaw;
  href?: string;
  outline?: boolean;
  close?: boolean;
  truncated?: boolean;
}

withDefaults(defineProps<Props>(), {
  color: 'grey',
  variant: 'filled',
  tooltipPosition: 'top',
});

defineEmits<{
  (name: 'close', e: Event): void;
}>();

defineSlots<{
  default?: (props: Record<never, never>) => VNode[];
  icon?: (props: Record<never, never>) => VNode[];
}>();

const textRef: Ref<HTMLSpanElement | undefined> = ref();
const textOverflowing = useElementOverflow(textRef);
</script>
