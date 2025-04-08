<template>
  <div
    v-bind="ouiaProps"
    :id="id"
    :class="[styles.pageSidebar, {
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

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Sidebar id */
  id?: string;
  /** Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed */
  sidebarOpen?: boolean;
  /** Indicates the color scheme of the sidebar */
  theme?: 'light' | 'dark';
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';
import { computed, type ComputedRef, inject, type InjectionKey, provide, type HTMLAttributes } from 'vue';
import { PageManagedSidebarKey, PageSidebarOpenKey } from './Page.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfPageSidebar',
});

const props = withDefaults(defineProps<Props>(), {
  id: 'page-sidebar',
  theme: 'dark',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const managedSidebarOpen = inject(PageSidebarOpenKey);
const managedSidebar = inject(PageManagedSidebarKey);

const sidebarOpen = computed(() => managedSidebar?.value ? !!managedSidebarOpen?.value : props.sidebarOpen);
provide(SidebarOpenKey, sidebarOpen);
</script>
