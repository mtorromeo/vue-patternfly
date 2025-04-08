<template>
  <component
    v-bind="ouiaProps"
    :is="overflow ? 'button' : 'span'"
    :type="overflow ? 'button' : undefined"
    :class="[styles.label, colorStyles[color], {
      [styles.modifiers.filled]: variant === 'filled',
      [styles.modifiers.outline]: outline || variant === 'outline',
      [styles.modifiers.compact]: compact,
      [styles.modifiers.overflow]: overflow,
    }]">
    <pf-tooltip :position="tooltipPosition">
      <component
        :is="contentComponent"
        :to="to"
        :href="href"
        :type="contentComponent === 'button' ? 'button' : undefined"
        :disabled="contentComponent === 'button' && isClickableDisabled ? true : undefined"
        :aria-disabled="contentComponent === 'a' && isClickableDisabled ? true : undefined"
        :class="[styles.labelContent, { [styles.modifiers.clickable]: isClickable }]"
      >
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
        <pf-button variant="plain" no-padding :aria-label="closeBtnAriaLabel" :disabled="isClickableDisabled ? true : undefined" @click="onClose">
          <template #icon>
            <xmark-icon />
          </template>
        </pf-button>
      </slot>
    </span>
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Label/label';
import cssTextMaxWidth from '@patternfly/react-tokens/dist/esm/c_label__text_MaxWidth';
import { type ButtonHTMLAttributes, type VNode, computed, useTemplateRef } from 'vue';
import { useChildrenTracker, useElementOverflow } from '../../use';
import PfButton from '../Button.vue';
import PfTooltip from '../Tooltip/Tooltip.vue';
import type { RouteLocationRaw } from 'vue-router';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { Placement } from '../../helpers/FloatingUi.vue';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import { LabelKey } from './common';

const colorStyles = {
  blue: styles.modifiers.blue,
  teal: styles.modifiers.teal,
  green: styles.modifiers.green,
  orange: styles.modifiers.orange,
  purple: styles.modifiers.purple,
  red: styles.modifiers.red,
  orangered: styles.modifiers.orangered,
  yellow: styles.modifiers.yellow,
  grey: '',
};

defineOptions({
  name: 'PfLabel',
});

export interface Props extends OUIAProps, /* @vue-ignore */ ButtonHTMLAttributes {
  /** The color of the label outline/fill */
  color?: 'blue' | 'teal' | 'green' | 'orange' | 'purple' | 'red' | 'orangered' | 'grey' | 'yellow',
  /** Variant of the label. */
  variant?: 'outline' | 'filled' | 'add';
  /** Status of the label with a respective icon and color. Overrides the color set by the color property. */
  status?: 'success' | 'warning' | 'danger' | 'info' | 'custom';
  /** Position of the tooltip which is displayed if text is truncated */
  tooltipPosition?: Placement;
  /** vue-router destination for a label that is a router-link. If present, the label will change to an anchor element. */
  to?: RouteLocationRaw;
  /** Href for a label that is a link. If present, the label will change to an anchor element. This should not be passed in if the onClick prop is also passed in. */
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
  /** Callback for when the label is clicked. This should not be passed in if the href or isEditable props are also passed in. */
  onClick?: (e: Event) => void;
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

useChildrenTracker(LabelKey);

const text = useTemplateRef('textRef');
const textOverflowing = useElementOverflow(text);
const isClickable = computed(() => props.onClick && !props.overflow);
const isClickableDisabled = computed(() => (props.href || props.onClick) && props.disabled);

const contentComponent = computed(() => {
  if (props.href) {
    return 'a';
  }
  if (props.to) {
    return 'router-link';
  }
  if (isClickable.value) {
    return 'button';
  }
  return 'span';
});
</script>
