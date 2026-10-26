<template>
  <div
    v-bind="ouiaProps"
    :id="id"
    :class="[
      styles.pageSidebar,
      {
        [styles.modifiers.expanded]: sidebarOpen && mobile,
        [styles.modifiers.collapsed]: !sidebarOpen,
      },
    ]"
    :aria-hidden="!sidebarOpen"
  >
    <div :class="styles.pageSidebarMain">
      <auto-wrap :component="PfPageSidebarBody">
        <slot />
      </auto-wrap>
    </div>
  </div>
</template>

<script lang="ts">
export { SidebarOpenKey } from './common';

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Sidebar id */
  id?: string;
  /** Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed */
  sidebarOpen?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';
import { computed, inject, provide, type HTMLAttributes, type VNode } from 'vue';
import { PageManagedSidebarKey, PageMobileKey, PageSidebarOpenKey, PageSidebarsKey, SidebarOpenKey } from './common';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { useChildrenTracker } from '../../use';
import AutoWrap from '../../helpers/AutoWrap.vue';
import PfPageSidebarBody from './PageSidebarBody.vue';

defineOptions({
  name: 'PfPageSidebar',
});

const props = withDefaults(defineProps<Props>(), {
  id: 'page-sidebar',
  sidebarOpen: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

useChildrenTracker(PageSidebarsKey);
const managedSidebarOpen = inject(PageSidebarOpenKey, undefined);
const managedSidebar = inject(PageManagedSidebarKey, undefined);
const mobile = inject(PageMobileKey, undefined);

const sidebarOpen = computed(() => (managedSidebar?.value ? !!managedSidebarOpen?.value : props.sidebarOpen));
provide(SidebarOpenKey, sidebarOpen);
</script>
