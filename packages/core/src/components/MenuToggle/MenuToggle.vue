<template>
  <define-toggle-controls>
    <span :class="styles.menuToggleControls">
      <span v-if="status || $slots['status-icon']" :class="styles.menuToggleStatusIcon">
        <slot name="status-icon">
          <circle-check-icon v-if="status === 'success'" />
          <triangle-exclamation-icon v-else-if="status === 'warning'" />
          <circle-exclamation-icon v-else-if="status === 'danger'" />
        </slot>
      </span>
      <span :class="styles.menuToggleToggleIcon">
        <caret-down-icon />
      </span>
    </span>
  </define-toggle-controls>

  <component
    v-bind="{...ouiaProps, ...$attrs}"
    :is="typeahead || isSplitButton ? 'div' : 'button'"
    ref="elRef"
    :class="[styles.menuToggle, {
      [styles.modifiers.typeahead]: typeahead,
      [styles.modifiers.splitButton]: isSplitButton,
      [styles.modifiers.expanded]: managedExpanded,
      [styles.modifiers.primary]: variant === 'primary',
      [styles.modifiers.secondary]: variant === 'secondary',
      [styles.modifiers[status as NonNullable<typeof status>]]: status,
      [styles.modifiers.plain]: variant === 'plain' || variant === 'plainText',
      [styles.modifiers.text]: variant === 'plainText',
      [styles.modifiers.fullHeight]: fullHeight,
      [styles.modifiers.fullWidth]: fullWidth,
      [styles.modifiers.disabled]: disabled,
      [styles.modifiers.placeholder]: placeholder,
      [styles.modifiers.small]: small,
    }]"
    :type="typeahead || isSplitButton ? undefined : 'button'"
    :aria-expanded="typeahead || isSplitButton ? undefined : managedExpanded"
    :disabled="typeahead || isSplitButton ? undefined : disabled"
    @click="typeahead || isSplitButton ? undefined : (managedExpanded = !managedExpanded)"
  >
    <slot v-if="!isSplitButton && variant === 'plain'" />

    <template v-else>
      <span v-if="!isSplitButton && $slots.icon" :class="styles.menuToggleIcon">
        <slot name="icon" />
      </span>

      <span v-if="!isSplitButton && !typeahead" :class="styles.menuToggleText">
        <slot />
      </span>
      <slot v-else-if="!isSplitButton" />
      <slot v-else name="split-buttons" />

      <span v-if="!isSplitButton && $slots.badge" :class="styles.menuToggleCount">
        <slot name="badge" />
      </span>

      <button
        v-if="typeahead || isSplitButton"
        type="button"
        :class="styles.menuToggleButton"
        :disabled="disabled"
        :aria-expanded="managedExpanded"
        aria-label="Menu toggle"
        @click="managedExpanded = !managedExpanded"
      >
        <span v-if="isSplitButton" :class="styles.menuToggleText">
          <slot />
        </span>
        <slot v-else />
        <toggle-controls />
      </button>

      <toggle-controls v-else />
    </template>
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import CaretDownIcon from '@vue-patternfly/icons/caret-down-icon';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
import { computed, type ButtonHTMLAttributes, useTemplateRef } from 'vue';
import { useManagedProp } from '../../use';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { createReusableTemplate } from '@vueuse/core';

defineOptions({
  name: 'PfMenuToggle',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'type' | 'aria-expanded' | 'placeholder' | 'onClick'> {
  /** Flag indicating the toggle has expanded styling */
  expanded?: boolean;
  /** Flag indicating the toggle is disabled */
  disabled?: boolean;
  /** Flag indicating the toggle is full height */
  fullHeight?: boolean;
  /** Flag indicating the toggle takes up the full width of its parent */
  fullWidth?: boolean;
  /** Flag indicating the toggle contains placeholder text */
  placeholder?: boolean;
  /** Variant styles of the menu toggle */
  variant?: 'default' | 'plain' | 'primary' | 'plainText' | 'secondary' | 'typeahead';
  /** Status styles of the menu toggle */
  status?: 'success' | 'warning' | 'danger';
  /** Smaller size of the menu toggle */
  small?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  expanded: undefined,
});

defineEmits<{
  (name: 'update:expanded', value: boolean): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
  'status-icon'?: (props?: Record<never, never>) => any;
  badge?: (props?: Record<never, never>) => any;
  'split-buttons'?: (props?: Record<never, never>) => any;
}>();

const typeahead = computed(() => props.variant === 'typeahead');
const isSplitButton = computed(() => !typeahead.value && !!slots['split-buttons']);
const managedExpanded = useManagedProp('expanded', false);
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
const el = useTemplateRef<HTMLDivElement | HTMLButtonElement>('elRef');

const [DefineToggleControls, ToggleControls] = createReusableTemplate();

function focus() {
  el.value?.focus();
}

defineExpose({
  el,
  focus,
});
</script>
