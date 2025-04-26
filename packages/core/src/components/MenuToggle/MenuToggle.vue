<template>
  <component
    v-bind="ouiaProps"
    :is="typeahead || isSplitButton ? 'div' : 'button'"
    ref="elRef"
    :class="[styles.menuToggle, {
      [styles.modifiers.typeahead]: typeahead,
      [styles.modifiers.splitButton]: isSplitButton,
      [styles.modifiers.action]: splitButton === 'action',
      [styles.modifiers.expanded]: expanded,
      [styles.modifiers.primary]: variant === 'primary',
      [styles.modifiers.secondary]: variant === 'secondary',
      [styles.modifiers.plain]: variant === 'plain' || variant === 'plainText',
      [styles.modifiers.text]: variant === 'plainText',
      [styles.modifiers.fullHeight]: fullHeight,
      [styles.modifiers.fullWidth]: fullWidth,
      [styles.modifiers.disabled]: disabled,
    }]"
    :type="typeahead || isSplitButton ? undefined : 'button'"
    :aria-expanded="typeahead || isSplitButton ? undefined : expanded"
    :disabled="typeahead || isSplitButton ? undefined : disabled"
    @click="typeahead || isSplitButton ? undefined : (expanded = !expanded)"
  >
    <slot v-if="!isSplitButton && variant === 'plain'" />

    <template v-else>
      <span v-if="!isSplitButton && $slots.icon" :class="styles.menuToggleIcon">
        <slot name="icon" />
      </span>

      <span v-if="!isSplitButton && !typeahead" :class="styles.menuToggleText">
        <slot />
      </span>

      <slot v-else />

      <span v-if="!isSplitButton && $slots.badge" :class="styles.menuToggleCount">
        <slot name="badge" />
      </span>

      <component
        :is="typeahead || isSplitButton ? 'button' : PassThrough"
        type="button"
        :class="styles.menuToggleButton"
        :disabled="disabled"
        :aria-expanded="expanded"
        aria-label="Menu toggle"
        @click="expanded = !expanded"
      >
        <span :class="styles.menuToggleControls">
          <span :class="styles.menuToggleToggleIcon">
            <caret-down-icon />
          </span>
        </span>
      </component>
    </template>
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import CaretDownIcon from '@vue-patternfly/icons/caret-down-icon';
import { computed, type ButtonHTMLAttributes, useTemplateRef } from 'vue';
import PassThrough from '../../helpers/PassThrough.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfMenuToggle',
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'type' | 'aria-expanded' | 'onClick'> {
  /** Flag indicating the toggle is disabled */
  disabled?: boolean;
  /** Flag indicating the toggle is full height */
  fullHeight?: boolean;
  /** Flag indicating the toggle takes up the full width of its parent */
  fullWidth?: boolean;
  /** Variant of split button toggle */
  splitButton?: boolean | 'default' | 'action' | 'checkbox';
  /** Variant styles of the menu toggle */
  variant?: 'default' | 'plain' | 'primary' | 'plainText' | 'secondary' | 'typeahead';
}

const props = defineProps<Props>();

/** Flag indicating the toggle has expanded styling */
const expanded = defineModel<boolean>('expanded', { default: false });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
  badge?: (props?: Record<never, never>) => any;
}>();

const typeahead = computed(() => props.variant === 'typeahead');
const isSplitButton = computed(() => !typeahead.value && !!props.splitButton);

const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
const el = useTemplateRef<HTMLDivElement | HTMLButtonElement>('elRef');

function focus() {
  el.value?.focus();
}

defineExpose({
  el,
  focus,
});
</script>
