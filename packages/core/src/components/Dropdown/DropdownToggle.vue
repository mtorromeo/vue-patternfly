<template>
  <wrap>
    <slot name="buttons" />

    <pf-toggle
      v-bind="$attrs"
      :open="open"
      :disabled="disabled"
      :split-button="!!$slots.buttons"
      :aria-label="$slots.buttons ? ariaLabel : undefined"
      @update:open="$emit('update:open', $event)"
    >
      <span v-if="$slots.icon" :class="styles.dropdownToggleImage">
        <slot name="icon" />
      </span>

      <span v-if="$slots.default" :class="{ [toggleTextClass]: indicator }">
        <slot />
      </span>

      <span v-if="indicator ?? !$slots.icon" :class="{ [toggleIndicatorClass]: !$slots.buttons }">
        <slot name="indicator">
          <caret-down-icon />
        </slot>
      </span>
    </pf-toggle>

    <template v-if="$slots.buttons" #with>
      <div
        :class="[
          styles.dropdownToggle,
          styles.modifiers.splitButton,
          {
            [styles.modifiers.action]: variant === 'action',
            [disabledClass]: disabled,
          },
        ]"
      />
    </template>
  </wrap>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

import { inject, type VNode } from 'vue';
import PfToggle, { type Props as ToggleProps } from './Toggle.vue';
import CaretDownIcon from '@vue-patternfly/icons/caret-down-icon';
import { DropdownDisabledClassKey, DropdownToggleIndicatorClassKey, DropdownToggleTextClassKey } from './Dropdown.vue';
import Wrap from '../../helpers/Wrap.vue';

defineOptions({
  name: 'PfDropdownToggle',
  inheritAttrs: false,
});

export interface Props extends /* @vue-ignore */ Omit<ToggleProps, 'splitButton'> {
  open?: boolean;
  variant?: 'checkbox' | 'action';
  ariaLabel?: string;
  indicator?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'checkbox',
  ariaLabel: 'Select',
  indicator: undefined,
  open: undefined,
});

const emit = defineEmits<{
  (name: 'update:open', value: boolean): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
  buttons?: (props?: Record<never, never>) => VNode[];
  icon?: (props?: Record<never, never>) => VNode[];
  indicator?: (props?: Record<never, never>) => VNode[];
}>();

const toggleTextClass = inject(DropdownToggleTextClassKey, styles.dropdownToggleText);
const toggleIndicatorClass = inject(DropdownToggleIndicatorClassKey, styles.dropdownToggleIcon);
const disabledClass = inject(DropdownDisabledClassKey, styles.modifiers.disabled);

function toggle() {
  emit('update:open', !props.open);
}

defineExpose({
  toggle,
});
</script>
