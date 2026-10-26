<template>
  <component
    v-bind="ouiaProps"
    :is="effectiveComponent"
    :class="[styles.helperTextItem, variant === 'default' ? null : styles.modifiers[variant]]"
  >
    <span v-if="variant !== 'default' || $slots.icon" :class="styles.helperTextItemIcon" aria-hidden="true">
      <slot name="icon">
        <minus-icon v-if="variant === 'default' || variant === 'indeterminate'" />
        <triangle-exclamation-icon v-else-if="variant === 'warning'" />
        <circle-check-icon v-else-if="variant === 'success'" />
        <circle-exclamation-icon v-else-if="variant === 'error'" />
      </slot>
    </span>
    <span :class="styles.helperTextItemText">
      <slot />
      <span v-if="variant !== 'default' && screenReaderText" class="pf-v6-screen-reader"
        >: {{ screenReaderText }};</span
      >
    </span>
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/HelperText/helper-text';
import { inject, computed, type LiHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import MinusIcon from '@vue-patternfly/icons/minus-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import { HelperTextComponentKey } from './common';

defineOptions({
  name: 'PfHelperTextItem',
});

interface Props extends OUIAProps, /* @vue-ignore */ LiHTMLAttributes {
  /** Variant styling of the helper text item. Will also render a default icon, which can be overridden with the icon slot. */
  variant?: 'default' | 'warning' | 'success' | 'error' | 'indeterminate';
  /** Sets the component type of the helper text item. Defaults to li inside a ul helper text, div otherwise. */
  component?: 'div' | 'li';
  /** Text that is only accessible to screen readers in order to announce the variant of a helper text item.
   * It is only rendered when the variant is not "default", and defaults to "<variant> status".
   */
  screenReaderText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  screenReaderText: (props: Props) => `${props.variant ?? 'default'} status`,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  /** Custom icon prefixing the helper text, overriding the default icon of the variant */
  icon?: (props?: Record<never, never>) => any;
}>();

const helperTextComponent = inject(HelperTextComponentKey, undefined);

const effectiveComponent = computed(() => props.component ?? (helperTextComponent?.value === 'ul' ? 'li' : 'div'));
</script>
