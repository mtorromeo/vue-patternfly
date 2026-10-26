<template>
  <pf-button
    v-bind="ouiaProps"
    :id="id"
    variant="plain"
    :hamburger="hamburger"
    :hamburger-variant="hamburgerVariant"
    :expanded="sidebarOpen"
    aria-label="Side navigation toggle"
    @click="sidebarOpen = !sidebarOpen"
  >
    <slot v-if="!hamburger" />
  </pf-button>
</template>

<script lang="ts">
interface Props
  extends
    OUIAProps,
    /* @vue-ignore */ Omit<
      ComponentProps<typeof PfButton>,
      'variant' | 'expanded' | 'aria-label' | 'aria-expanded' | 'onClick' | 'ouiaId' | 'ouiaSafe'
    > {
  /** Sidebar id */
  id?: string;
  /** Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed */
  sidebarOpen?: boolean;
  /** Flag indicating the button is a hamburger button. This will override the icon property. */
  hamburger?: boolean;
  /** Adjusts and animates the hamburger icon to indicate what will happen upon clicking the button. Requires hamburger. */
  hamburgerVariant?: 'expand' | 'collapse';
}
</script>

<script lang="ts" setup>
import { computed, inject, type VNode } from 'vue';
import { PageManagedSidebarKey, PageSidebarOpenKey } from './common';
import PfButton from '../Button.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { ComponentProps } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfPageToggleButton',
});

const props = withDefaults(defineProps<Props>(), {
  id: 'nav-toggle',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  (name: 'update:sidebarOpen', value: boolean): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const managedSidebarOpen = inject(PageSidebarOpenKey, undefined);
const managedSidebar = inject(PageManagedSidebarKey, undefined);

const sidebarOpen = computed({
  get: () => Boolean(managedSidebar?.value ? managedSidebarOpen?.value : props.sidebarOpen),
  set(value) {
    if (managedSidebar?.value && managedSidebarOpen) {
      managedSidebarOpen.value = value;
    } else {
      emit('update:sidebarOpen', value);
    }
  },
});
</script>
