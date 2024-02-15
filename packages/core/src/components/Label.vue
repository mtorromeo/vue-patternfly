<template>
  <component
    v-bind="ouiaProps"
    :is="overflow ? 'button' : 'span'"
    :class="[styles.label, colorStyles[color], {
      [styles.modifiers.outline]: outline || variant === 'outline',
      [styles.modifiers.compact]: compact,
      [styles.modifiers.overflow]: overflow,
    }]">
    <pf-tooltip :position="tooltipPosition">
      <component :is="href ? 'a' : to ? 'router-link' : 'span'" :to="to" :href="href" :class="styles.labelContent">
        <span v-if="$slots.icon" :class="styles.labelIcon">
          <slot name="icon" />
        </span>

        <span ref="textRef" :class="styles.labelText" :style="textMaxWidth ? {[cssTextMaxWidth.name]: textMaxWidth} : undefined">
          <slot />
        </span>
      </component>

      <template v-if="textOverflowing" #content>
        <slot />
      </template>
    </pf-tooltip>
    <span v-if="onClose || $slots.actions" :class="styles.labelActions">
      <slot name="actions">
        <pf-close-button :aria-label="closeBtnAriaLabel" @click="onClose" />
      </slot>
    </span>
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Label/label';
import cssTextMaxWidth from '@patternfly/react-tokens/dist/esm/c_label__text_MaxWidth';
import { ref, type Ref, type ButtonHTMLAttributes, type VNode } from 'vue';
import { useElementOverflow } from '../use';
import PfCloseButton from './CloseButton.vue';
import PfTooltip from './Tooltip/Tooltip.vue';
import type { RouteLocationRaw } from 'vue-router';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';
import type { Placement } from '../helpers/FloatingUi.vue';

const colorStyles = {
  blue: styles.modifiers.blue,
  cyan: styles.modifiers.cyan,
  green: styles.modifiers.green,
  orange: styles.modifiers.orange,
  purple: styles.modifiers.purple,
  red: styles.modifiers.red,
  gold: styles.modifiers.gold,
  grey: '',
};

defineOptions({
  name: 'PfLabel',
});

export interface Props extends OUIAProps, /* @vue-ignore */ ButtonHTMLAttributes {
  /** The color of the label outline/fill */
  color?: 'blue' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'gold' | 'grey',
  variant?: 'outline' | 'filled';
  tooltipPosition?: Placement;
  to?: RouteLocationRaw;
  href?: string;
  outline?: boolean;
  /** Flag indicating the label is compact. */
  compact?: boolean;
  /** Flag indicating if the label is an overflow label. */
  overflow?: boolean;
  /** The max width of the label before it is truncated. Can be any valid CSS unit, such as '100%', '100px', or '16ch'. */
  textMaxWidth?: string;
  /** Aria label for close button */
  closeBtnAriaLabel?: string;
  /** Callback for when the label is clicked. This should not be passed in if the href or editable props are also passed in. */
  onClose?: (e: Event) => void;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'grey',
  variant: 'filled',
  tooltipPosition: 'top',
  closeBtnAriaLabel: 'Close',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
  icon?: (props?: Record<never, never>) => VNode[];
  actions?: (props?: Record<never, never>) => VNode[];
}>();

const textRef: Ref<HTMLSpanElement | undefined> = ref();
const textOverflowing = useElementOverflow(textRef);
</script>
