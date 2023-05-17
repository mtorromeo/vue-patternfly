<template>
  <div
    id="page-sidebar"
    :class="[styles.pageSidebar, {
      [styles.modifiers.light]: theme === 'light',
      [styles.modifiers.expanded]: sidebarOpen,
      [styles.modifiers.collapsed]: !sidebarOpen,
    }]"
  >
    <div :class="styles.pageSidebarBody">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export const SidebarOpenKey = Symbol('SidebarOpenKey') as InjectionKey<ComputedRef<boolean> | boolean>;
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';
import { computed, type ComputedRef, inject, type InjectionKey, provide } from 'vue';
import { PageManagedSidebarKey, PageNavOpenKey } from './Page.vue';

defineOptions({
  name: 'PfPageSidebar',
});

const props = withDefaults(defineProps<{
  /** Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed */
  navOpen?: boolean;

  /** Indicates the color scheme of the sidebar */
  theme?: 'light' | 'dark';
}>(), {
  theme: 'dark',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const managedNavOpen = inject(PageNavOpenKey);
const managedSidebar = inject(PageManagedSidebarKey);

const sidebarOpen = computed(() => managedSidebar?.value ? !!managedNavOpen?.value : props.navOpen);
provide(SidebarOpenKey, sidebarOpen);
</script>
