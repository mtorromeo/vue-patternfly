<template>
  <component
    v-bind="ouiaProps"
    :is="component"
    :class="[
      styles.helperTextItem,
      variant === 'default' ? null : styles.modifiers[variant],
      {
        [styles.modifiers.dynamic]: dynamic,
      },
    ]"
  >
    <span v-if="icon || $slots.icon" :class="styles.helperTextItemIcon" aria-hidden>
      <slot name="icon">
        <minus-icon v-if="variant === 'default' || variant === 'indeterminate'" />
        <triangle-exclamation-icon v-else-if="variant === 'warning'" />
        <circle-check-icon v-else-if="variant === 'success'" />
        <circle-exclamation-icon v-else-if="variant === 'error'" />
      </slot>
    </span>
    <span :class="styles.helperTextItemText">
      <slot />
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
import { HelperTextComponentKey } from './HelperText.vue';

defineOptions({
  name: 'PfHelperTextItem',
});

export interface Props extends OUIAProps, /* @vue-ignore */ LiHTMLAttributes {
  /** Variant styling of the helper text item. */
  variant?: 'default' | 'warning' | 'success' | 'error' | 'indeterminate';

  /** Flag indicating the helper text should have an icon. Dynamic helper texts include icons by default while static helper texts do not. */
  icon?: boolean;

  /** Flag indicating the helper text item is dynamic. */
  dynamic?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
}>();

const helperTextComponent = inject(HelperTextComponentKey, 'div');

const component = computed(() => {
  return helperTextComponent === 'ul'
    ? 'li'
    : 'div';
});
</script>
