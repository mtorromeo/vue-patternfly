<template>
  <define-main-container>
    <div :class="[styles.pageMainContainer, { [styles.modifiers.fill]: contentFilled }]">
      <component :is="mainComponent" :id="mainContainerId" :role="role" :class="styles.pageMain" :tabindex="mainTabIndex" :aria-label="mainAriaLabel" @click="mainClick" @touchstart.passive="mainClick">
        <slot />
      </component>
    </div>
  </define-main-container>

  <div
    ref="page"
    v-bind="{ ...ouiaProps, ...$attrs }"
    :class="[
      styles.page,
      {
        'pf-m-resize-observer': width && height,
        [`pf-m-breakpoint-${getBreakpoint(width)}`]: width,
        [`pf-m-height-breakpoint-${getVerticalBreakpoint(height)}`]: height,
        [styles.modifiers.docked]: variant === 'docked',
        [styles.modifiers.noSidebar]: sidebars.length === 0,
      },
    ]"
  >
    <slot name="skip-to-content" />

    <slot name="masthead" />

    <div
      v-if="variant === 'docked'"
      :class="[
        styles.pageDock,
        {
          [styles.modifiers.expanded]: dockExpanded,
          [styles.modifiers.textExpanded]: dockTextExpanded,
        },
      ]"
    >
      <div :class="styles.pageDockMain">
        <slot name="dock-content" />
      </div>
    </div>

    <slot name="sidebar" />

    <div v-if="$slots.drawer" :class="styles.pageDrawer">
      <pf-drawer :expanded="drawerExpanded">
        <pf-drawer-content>
          <template #content>
            <pf-drawer-panel-content>
              <slot name="drawer" />
            </pf-drawer-panel-content>
          </template>

          <main-container />
        </pf-drawer-content>
      </pf-drawer>
    </div>

    <main-container v-else />
  </div>
</template>

<script lang="ts">
export const PageManagedSidebarKey = Symbol("PageManagedSidebarKey") as InjectionKey<Ref<boolean>>;
export const PageSidebarOpenKey = Symbol("PageSidebarOpenKey") as InjectionKey<WritableComputedRef<boolean>>;
export const PageSidebarsKey = Symbol("PageSidebarsKey") as ChildrenTrackerInjectionKey<ComponentPublicInstance>;

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
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
  mainComponent?: "main" | "div";
  /** Enables children to fill the available vertical space. Child page sections or groups that should fill should be passed the isFilled property. */
  contentFilled?: boolean;
  /** Indicates the layout variant */
  variant?: "default" | "docked";
  /** Flag indicating the docked nav is expanded on mobile. Only applies when variant is docked. */
  dockExpanded?: boolean;
  /** Flag indicating the docked nav should display text on desktop. Only applies when variant is docked, and will handle setting isTextExpanded on individual isDocked components. */
  dockTextExpanded?: boolean;
}
</script>

<script lang="ts" setup>
import styles from "@patternfly/react-styles/css/components/Page/page";
import { globalWidthBreakpoints } from "../../constants";
import { createReusableTemplate, useElementSize, useWindowSize } from "@vueuse/core";
import { ref, provide, computed, watch, type Ref, type InjectionKey, type WritableComputedRef, type HTMLAttributes, useTemplateRef, type ComponentPublicInstance } from "vue";
import PfDrawer from "../Drawer/Drawer.vue";
import PfDrawerContent from "../Drawer/DrawerContent.vue";
import PfDrawerPanelContent from "../Drawer/DrawerPanelContent.vue";
import { useOUIAProps, type OUIAProps } from "../../helpers/ouia";
import { getBreakpoint, getVerticalBreakpoint } from "../../util";
import { provideChildrenTracker, type ChildrenTrackerInjectionKey } from "../../use";

defineOptions({
  name: "PfPage",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  defaultManagedSidebarOpen: true,
  mainComponent: "main",
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  (name: "pageResize", v: { mobileView: boolean; windowSize: number }): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  drawer?: (props?: Record<never, never>) => any;
  "skip-to-content"?: (props?: Record<never, never>) => any;
  "dock-content"?: (props?: Record<never, never>) => any;
  masthead?: (props?: Record<never, never>) => any;
  sidebar?: (props?: Record<never, never>) => any;
}>();

const [DefineMainContainer, MainContainer] = createReusableTemplate();
const pageRef = useTemplateRef("page");
const { width, height } = useElementSize(pageRef);
const sidebars = provideChildrenTracker(PageSidebarsKey);

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

watch(
  windowWidth,
  (width) => {
    mobileView.value = width < globalWidthBreakpoints.xl;
    emit("pageResize", { mobileView: mobileView.value, windowSize: width });
  },
  { immediate: true },
);

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
