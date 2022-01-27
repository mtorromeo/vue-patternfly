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
import styles from '@patternfly/react-styles/css/components/Page/page';
import { computed, ComputedRef, defineComponent, inject, InjectionKey, markRaw, provide } from 'vue';
import { PageManagedSidebarKey, PageNavOpenKey } from './Page.vue';

export const SidebarOpenKey = Symbol('SidebarOpenKey') as InjectionKey<ComputedRef<boolean> | boolean>;

export default defineComponent({
  name: 'PfPageSidebar',

  props: {
    /** Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed */
    navOpen: Boolean,

    /** Indicates the color scheme of the sidebar */
    theme: {
      type: String,
      default: 'dark',
      validator: (v: any) => ['light', 'dark'].includes(v),
    },
  },

  setup(props) {
    const managedNavOpen = inject(PageNavOpenKey);
    const managedSidebar = inject(PageManagedSidebarKey);

    const sidebarOpen = computed(() => managedSidebar.value ? managedNavOpen.value : props.navOpen);
    provide(SidebarOpenKey, sidebarOpen);

    return {
      styles: markRaw(styles),
      sidebarOpen,
      managedNavOpen,
      managedSidebar,
    };
  },
});
</script>
