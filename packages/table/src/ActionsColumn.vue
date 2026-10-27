<template>
  <slot name="outside" />
  <actions-dropdown />
</template>

<script setup lang="ts">
defineOptions({
  name: 'PfActionsColumn',
  inheritAttrs: false,
});

const props = defineProps<Props>();
const messages = usePfMessages();

const slots = defineSlots<{
  /** Actions of the dropdown: pf-dropdown-item and pf-divider (with component="li") */
  default?: (props?: Record<never, never>) => any;
  /** Actions rendered outside of the dropdown, before the toggle */
  outside?: (props?: Record<never, never>) => any;
  /** Custom toggle of the dropdown, which receives its expanded and disabled state */
  toggle?: (props?: Record<never, never>) => any;
}>();

/** Open state of the actions dropdown */
const open = defineModel<boolean>('open', { default: false });

const attrs = useAttrs();

// the toggle vnodes are passed to the dropdown directly, as it binds its state to them
const ActionsDropdown = () =>
  h(
    PfDropdown,
    {
      position: 'right',
      ...attrs,
      disabled: props.disabled,
      open: open.value,
      'onUpdate:open': (v: boolean) => (open.value = v),
    },
    {
      toggle: () =>
        slots.toggle?.() ?? [
          h(
            PfMenuToggle,
            { 'aria-label': messages.value.actionsColumnToggle, variant: 'plain' },
            { icon: () => h(EllipsisVerticalIcon) },
          ),
        ],
      default: () => h(PfDropdownList, null, slots.default),
    },
  );
</script>

<script lang="ts">
import { h, useAttrs } from 'vue';
import { usePfMessages } from '@vue-patternfly/core/messages';
import type { ComponentProps } from 'vue-component-type-helpers';
import { PfDropdown, PfDropdownList, PfMenuToggle } from '@vue-patternfly/core';
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';

interface Props extends /* @vue-ignore */ Omit<ComponentProps<typeof PfDropdown>, 'open' | 'disabled'> {
  /** Indicates whether the actions dropdown is disabled */
  disabled?: boolean;
}
</script>
