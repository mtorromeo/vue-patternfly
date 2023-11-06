<template>
  <pf-button
    :id="id"
    variant="plain"
    aria-label="Side navigation toggle"
    :aria-expanded="sidebarOpen ? 'true' : 'false'"
    @click="sidebarOpen = !sidebarOpen"
  >
    <slot />
  </pf-button>
</template>

<script lang="ts">
export const SidebarOpenKey = Symbol('SidebarOpenKey') as InjectionKey<ComputedRef<boolean> | boolean>;

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Sidebar id */
  id?: string;
  /** Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed */
  sidebarOpen?: boolean;
}
</script>

<script lang="ts" setup>
import { computed, type ComputedRef, inject, type InjectionKey, type HTMLAttributes } from 'vue';
import { PageManagedSidebarKey, PageSidebarOpenKey } from './Page.vue';

defineOptions({
  name: 'PfPageToggleButton',
});

const props = withDefaults(defineProps<Props>(), {
  id: 'nav-toggle',
});

const emit = defineEmits<{
  (name: 'update:sidebar-open', value: boolean): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const managedSidebarOpen = inject(PageSidebarOpenKey);
const managedSidebar = inject(PageManagedSidebarKey);

const sidebarOpen = computed({
  get: () => managedSidebar?.value ? !!managedSidebarOpen?.value : props.sidebarOpen,
  set(value) {
    if (managedSidebar?.value && managedSidebarOpen) {
      managedSidebarOpen.value = value;
    } else {
      emit('update:sidebar-open', value);
    }
  },
});
</script>
