<template>
  <div
    v-bind="ouiaProps"
    :id="id"
    :class="[styles.pageSidebar, {
      [styles.modifiers.expanded]: sidebarOpen,
      [styles.modifiers.collapsed]: !sidebarOpen,
    }]"
  >
    <div :class="styles.pageSidebarMain">
      <auto-wrap :component="PfPageSidebarBody">
        <slot />
      </auto-wrap>
    </div>
  </div>
</template>

<script lang="ts">
export const SidebarOpenKey = Symbol('SidebarOpenKey') as InjectionKey<ComputedRef<boolean> | boolean>;

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Sidebar id */
  id?: string;
  /** Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed */
  sidebarOpen?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';
import { computed, type ComputedRef, inject, type InjectionKey, provide, type HTMLAttributes } from 'vue';
import { PageManagedSidebarKey, PageSidebarOpenKey, PageSidebarsKey } from './Page.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { useChildrenTracker } from '../../use';
import AutoWrap from '../../helpers/AutoWrap.vue';
import PfPageSidebarBody from './PageSidebarBody.vue';

defineOptions({
  name: 'PfPageSidebar',
});

const props = withDefaults(defineProps<Props>(), {
  id: 'page-sidebar',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

useChildrenTracker(PageSidebarsKey);
const managedSidebarOpen = inject(PageSidebarOpenKey, undefined);
const managedSidebar = inject(PageManagedSidebarKey, undefined);

const sidebarOpen = computed(() => managedSidebar?.value ? !!managedSidebarOpen?.value : props.sidebarOpen);
provide(SidebarOpenKey, sidebarOpen);
</script>
