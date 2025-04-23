<template>
  <div v-bind="(ouiaProps as any)" :class="styles.page">
    <slot name="skeleton" />

    <div v-if="$slots.drawer" :class="styles.pageDrawer">
      <pf-drawer :expanded="drawerExpanded">
        <pf-drawer-content>
          <template #content>
            <pf-drawer-panel-content>
              <slot name="drawer" />
            </pf-drawer-panel-content>
          </template>

          <pf-drawer-content-body>
            <component
              :is="mainComponent"
              :id="mainContainerId"
              :role="role"
              :class="styles.pageMain"
              :tabindex="mainTabIndex"
              :aria-label="mainAriaLabel"
              @click="mainClick"
              @touchstart.passive="mainClick"
            >
              <slot />
            </component>
          </pf-drawer-content-body>
        </pf-drawer-content>
      </pf-drawer>
    </div>

    <component
      :is="mainComponent"
      v-else
      :id="mainContainerId"
      :role="role"
      :class="styles.pageMain"
      :tabindex="mainTabIndex"
      :aria-label="mainAriaLabel"
      @click="mainClick"
      @touchstart.passive="mainClick"
    >
      <slot />
    </component>
  </div>
</template>

<script lang="ts">
export const PageManagedSidebarKey = Symbol('PageManagedSidebarKey') as InjectionKey<Ref<boolean>>;
export const PageSidebarOpenKey = Symbol('PageSidebarOpenKey') as InjectionKey<WritableComputedRef<boolean>>;

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Sets the value for role on the <main> element */
  role?: string;
  /** an id to use for the [role="main"] element */
  mainContainerId?: string;
  /** tabIndex to use for the [role="main"] element, null to unset it */
  mainTabIndex?: number;
  /**
   * If true, manages the sidebar open/close state and there is no need to pass the isSidebarOpen boolean into
   * the sidebar component or add a callback onNavToggle function into the PageHeader component
   */
  managedSidebar?: boolean;
  /** Flag indicating if tertiary nav width should be limited */
  tertiaryNavWidthLimited?: boolean;
  /** Flag indicating Notification drawer in expanded */
  notificationDrawerExpanded?: boolean;
  /** If true, the managed sidebar is initially open for desktop view */
  defaultManagedSidebarOpen?: boolean;
  /** Accessible label, can be used to name main section */
  mainAriaLabel?: string;
  /** Flag indicating Notification drawer in expanded */
  drawerExpanded?: boolean;
  /** HTML component used as main component of the page. Defaults to 'main', only pass in 'div' if another 'main' element already exists. */
  mainComponent?: 'main' | 'div';
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';
import globalBreakpointXl from '@patternfly/react-tokens/dist/esm/global_breakpoint_xl';
import { useWindowSize } from '@vueuse/core';
import { ref, provide, computed, watch, type Ref, type InjectionKey, type WritableComputedRef, type HTMLAttributes } from 'vue';
import PfDrawer from '../Drawer/Drawer.vue';
import PfDrawerContent from '../Drawer/DrawerContent.vue';
import PfDrawerPanelContent from '../Drawer/DrawerPanelContent.vue';
import PfDrawerContentBody from '../Drawer/DrawerContentBody.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfPage',
});

const props = withDefaults(defineProps<Props>(), {
  defaultManagedSidebarOpen: true,
  mainComponent: 'main',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'page-resize', v: { mobileView: boolean, windowSize: number }): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  drawer?: (props?: Record<never, never>) => any;
  skeleton?: (props?: Record<never, never>) => any;
}>();

const mobileView = ref(false);
const mobileSidebarOpen = ref(false);
const desktopSidebarOpen = ref(!props.managedSidebar || props.defaultManagedSidebarOpen);

const managedSidebar = ref(props.managedSidebar);
provide(PageManagedSidebarKey, managedSidebar);

const sidebarOpen = computed({
  get() {
    return mobileView.value ? mobileSidebarOpen.value : desktopSidebarOpen.value;
  },

  set(open: boolean) {
    if (mobileView.value) {
      mobileSidebarOpen.value = open;
    } else {
      desktopSidebarOpen.value = open;
    }
  },
});
provide(PageSidebarOpenKey, sidebarOpen);

const { width: windowWidth } = useWindowSize();

watch(windowWidth, (width) => {
  mobileView.value = width < Number.parseInt(globalBreakpointXl.value, 10);
  emit('page-resize', { mobileView: mobileView.value, windowSize: width });
}, { immediate: true });

function navToggle() {
  sidebarOpen.value = !sidebarOpen.value;
}

function mainClick() {
  if (mobileView.value && sidebarOpen.value) {
    sidebarOpen.value = false;
  }
}

defineExpose({
  navToggle,
});
</script>
