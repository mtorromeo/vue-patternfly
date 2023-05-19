<template>
  <component
    :is="typeahead || isSplitButton ? 'div' : 'button'"
    :class="typeahead ? styles.modifiers.typeahead : [styles.menuToggle, {
      [styles.modifiers.splitButton]: isSplitButton,
      [styles.modifiers.action]: splitButton === 'action',
      [styles.modifiers.expanded]: managedExpanded,
      [styles.modifiers.primary]: variant === 'primary',
      [styles.modifiers.secondary]: variant === 'secondary',
      [styles.modifiers.plain]: variant === 'plain' || variant === 'plainText',
      [styles.modifiers.text]: variant === 'plainText',
      [styles.modifiers.fullHeight]: fullHeight,
      [styles.modifiers.fullWidth]: fullWidth,
      [styles.modifiers.disabled]: disabled,
    }]"
    :type="typeahead ? undefined : 'button'"
    :aria-expanded="typeahead ? undefined : managedExpanded"
    :disabled="typeahead ? undefined : disabled"
    @click="typeahead ? undefined : (managedExpanded = !managedExpanded)"
  >
    <slot v-if="!isSplitButton && variant === 'plain'" />

    <template v-else>
      <span v-if="!isSplitButton && $slots.icon" :class="styles.menuToggleIcon">
        <slot name="icon" />
      </span>

      <span v-if="typeahead" :class="styles.menuToggleText">
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
        :aria-expanded="managedExpanded"
        aria-label="Menu toggle"
        @click="managedExpanded = !managedExpanded"
      >
        <span :class="styles.menuToggleControls">
          <span :class="styles.menuToggleIcon">
            <caret-down-icon />
          </span>
        </span>
      </component>
    </template>
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import CaretDownIcon from '@vue-patternfly/icons/dist/esm/icons/caret-down-icon';
import { computed, useSlots, type ButtonHTMLAttributes } from 'vue';
import PassThrough from '../../helpers/PassThrough';
import { useManagedProp } from '../../use';

defineOptions({
  name: 'PfMenuToggle',
});

export interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  /** Flag indicating the toggle has expanded styling */
  expanded?: boolean;
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

const $props = withDefaults(defineProps<Props>(), {
  expanded: undefined,
});

defineEmits<{
  (name: 'update:expanded', value: boolean): void;
}>();

const $slots = useSlots();

const typeahead = computed(() => $props.variant === 'typeahead');
const isSplitButton = computed(() => !typeahead.value && !!$props.splitButton);

const managedExpanded = useManagedProp('expanded', false);
</script>
