<template>
  <define-toggle-controls>
    <span v-if="variant !== 'plain'" :class="styles.menuToggleControls">
      <span v-if="status" :class="styles.menuToggleStatusIcon">
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
    v-bind="rootAttrs"
    :is="wrapper ? 'div' : 'button'"
    ref="elRef"
    :class="[
      styles.menuToggle,
      {
        [styles.modifiers.typeahead]: typeahead,
        [styles.modifiers.splitButton]: isSplitButton,
        [styles.modifiers.expanded]: expanded,
        [styles.modifiers.primary]: variant === 'primary',
        [styles.modifiers.secondary]: variant === 'secondary',
        [styles.modifiers[status as NonNullable<typeof status>]]: status,
        [styles.modifiers.plain]: variant === 'plain' || variant === 'plainText',
        [styles.modifiers.text]: variant === 'plainText',
        [styles.modifiers.fullHeight]: fullHeight,
        [styles.modifiers.fullWidth]: fullWidth,
        [styles.modifiers.form]: inForm,
        [styles.modifiers.disabled]: disabled,
        [styles.modifiers.placeholder]: placeholder,
        [styles.modifiers.settings]: settings,
        [styles.modifiers.small]: small,
        [styles.modifiers.circle]: circle && variant === 'plain',
        [styles.modifiers.docked]: docked,
      },
    ]"
    :type="wrapper ? undefined : 'button'"
    :aria-expanded="wrapper ? undefined : expanded"
    :aria-haspopup="wrapper ? undefined : ariaHaspopup"
    :disabled="wrapper ? undefined : disabled"
    @click="!wrapper && onToggleClick($event)"
  >
    <span v-if="!isSplitButton && ($slots.icon || settings)" :class="styles.menuToggleIcon">
      <gear-icon v-if="settings" />
      <slot v-else name="icon" />
    </span>

    <span
      v-if="!isSplitButton && variant === 'plain' && !settings && !$slots.icon && !$slots.badge && !$slots.default"
      :class="styles.menuToggleIcon"
    >
      <ellipsis-vertical-icon />
    </span>

    <template v-else>
      <span v-if="!isSplitButton && !typeahead && $slots.default" :class="styles.menuToggleText">
        <slot />
      </span>
      <slot v-else-if="!isSplitButton" />
      <slot v-else name="split-buttons" />

      <span v-if="!isSplitButton && $slots.badge" :class="styles.menuToggleCount">
        <slot name="badge" />
      </span>

      <button
        v-if="wrapper"
        v-bind="buttonAttrs"
        type="button"
        :class="[styles.menuToggleButton, { [styles.modifiers.text]: isSplitButton && $slots.default }]"
        :disabled="disabled"
        :aria-expanded="expanded"
        :aria-haspopup="ariaHaspopup"
        :tabindex="typeahead ? -1 : undefined"
        @click="onToggleClick"
      >
        <span v-if="isSplitButton && $slots.default" :class="styles.menuToggleText">
          <slot />
        </span>
        <toggle-controls />
      </button>

      <toggle-controls v-else />
    </template>
  </component>
</template>

<script lang="ts">
interface Props
  extends
    OUIAProps,
    /* @vue-ignore */ Omit<
      ButtonHTMLAttributes,
      'type' | 'aria-expanded' | 'aria-haspopup' | 'placeholder' | 'onClick'
    > {
  /** Flag indicating the toggle is disabled */
  disabled?: boolean;
  /** Flag indicating the toggle is full height */
  fullHeight?: boolean;
  /** Flag indicating the toggle takes up the full width of its parent */
  fullWidth?: boolean;
  /** Flag indicating the toggle is placed inside a form */
  inForm?: boolean;
  /** Flag indicating the toggle contains placeholder text */
  placeholder?: boolean;
  /** Flag indicating whether the toggle is a settings toggle. This will override the icon property */
  settings?: boolean;
  /** Variant styles of the menu toggle */
  variant?: 'default' | 'plain' | 'primary' | 'plainText' | 'secondary' | 'typeahead';
  /** Status styles of the menu toggle */
  status?: 'success' | 'warning' | 'danger';
  /** Smaller size of the menu toggle */
  small?: boolean;
  /** Flag indicating the toggle has circular styling. Can only be applied to plain toggles. */
  circle?: boolean;
  /** Flag indicating the menu toggle is a docked variant. For use in docked navigation. */
  docked?: boolean;
  /** Indicates what type of popup will be triggered by the menu toggle. A value of true is the same as a value of "menu". */
  ariaHaspopup?: 'menu' | 'listbox' | 'true' | 'false' | boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import { usePfMessages } from '../../messages';
import { computed, type ButtonHTMLAttributes, useAttrs, useTemplateRef, type VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { createReusableTemplate } from '@vueuse/core';

import CaretDownIcon from '@vue-patternfly/icons/caret-down-icon';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';
import GearIcon from '@vue-patternfly/icons/gear-icon';

defineOptions({
  name: 'PfMenuToggle',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  ariaHaspopup: 'menu',
});
const messages = usePfMessages();

/** Flag indicating the toggle has expanded styling */
const expanded = defineModel<boolean>('expanded', { default: false });

const emit = defineEmits<{
  /** The toggle button was clicked */
  (name: 'click', event: MouseEvent): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
  icon?: (props?: Record<never, never>) => VNode[];
  'status-icon'?: (props?: Record<never, never>) => VNode[];
  badge?: (props?: Record<never, never>) => VNode[];
  'split-buttons'?: (props?: Record<never, never>) => VNode[];
}>();

const attrs = useAttrs();
const typeahead = computed(() => props.variant === 'typeahead');
const isSplitButton = computed(() => !typeahead.value && !!slots['split-buttons']);
// typeahead and split toggles render a wrapper div around the toggle button
const wrapper = computed(() => typeahead.value || isSplitButton.value);
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
const el = useTemplateRef<HTMLDivElement | HTMLButtonElement>('elRef');

// like upstream, the OUIA attributes and the aria-label always target the toggle button, and a split toggle keeps
// only class and style on the wrapper, passing every other attribute to its toggle button
const rootAttrs = computed(() => {
  if (isSplitButton.value) {
    return { class: attrs.class, style: attrs.style };
  }
  if (typeahead.value) {
    return { ...attrs, 'aria-label': undefined };
  }
  return { ...ouiaProps, ...attrs };
});

const buttonAttrs = computed(() => {
  if (isSplitButton.value) {
    return { ...attrs, ...ouiaProps, class: undefined, style: undefined };
  }
  const ariaLabel = attrs['aria-label'];
  return { ...ouiaProps, 'aria-label': typeof ariaLabel === 'string' ? ariaLabel : messages.value.menuToggle };
});

const [DefineToggleControls, ToggleControls] = createReusableTemplate();

function onToggleClick(event: MouseEvent) {
  expanded.value = !expanded.value;
  emit('click', event);
}

function focus() {
  el.value?.focus();
}

defineExpose({
  el,
  focus,
});
</script>
