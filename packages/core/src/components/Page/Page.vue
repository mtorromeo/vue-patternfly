<template>
  <define-main-container>
    <div :class="[styles.pageMainContainer, { [styles.modifiers.fill]: contentFilled }]">
      <component
        :is="mainComponent"
        :id="mainContainerId"
        ref="mainRef"
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
        [styles.modifiers.plain]: plain,
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
          [styles.modifiers.overlay]: dockOverlay,
        },
      ]"
    >
      <div :class="styles.pageDockMain">
        <slot name="dock-content" />
      </div>
    </div>

    <slot name="sidebar" />

    <div v-if="$slots.drawer" :class="styles.pageDrawer">
      <pf-drawer :expanded="drawerExpanded" @expand="emit('notificationDrawerExpand', $event)">
        <pf-drawer-content>
          <template #content>
            <pf-drawer-panel-content
              :default-size="drawerDefaultSize"
              :min-size="drawerMinSize"
              :max-size="drawerMaxSize"
            >
              <slot name="drawer" />
            </pf-drawer-panel-content>
          </template>

          <main-container />
        </pf-drawer-content>
      </pf-drawer>
    </div>

    <main-container v-else />

    <slot name="footer" />
  </div>
</template>

<script lang="ts">
export { PageManagedSidebarKey, PageSidebarOpenKey, PageSidebarsKey } from './common';

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Sets the value for role on the <main> element */
  role?: string;
  /** an id to use for the [role="main"] element */
  mainContainerId?: string;
  /** tabIndex to use for the [role="main"] element, null to unset it */
  mainTabIndex?: number | null;
  /**
   * If true, manages the sidebar open/close state and there is no need to pass the isSidebarOpen boolean into
   * the sidebar component or add a callback onNavToggle function into the PageHeader component
   */
  managedSidebar?: boolean;
  /** If true, the managed sidebar is initially open for desktop view */
  defaultManagedSidebarOpen?: boolean;
  /** Accessible label, can be used to name main section */
  mainAriaLabel?: string;
  /** Flag indicating the notification drawer is expanded */
  drawerExpanded?: boolean;
  /** Sets the default size of the notification drawer */
  drawerDefaultSize?: string;
  /** Sets the minimum size of the notification drawer */
  drawerMinSize?: string;
  /** Sets the maximum size of the notification drawer */
  drawerMaxSize?: string;
  /** HTML component used as main component of the page. Defaults to 'main', only pass in 'div' if another 'main' element already exists. */
  mainComponent?: 'main' | 'div';
  /** Enables children to fill the available vertical space. Child page sections or groups that should fill should be passed the isFilled property. */
  contentFilled?: boolean;
  /** Indicates the layout variant */
  variant?: 'default' | 'docked';
  /** Flag indicating the docked nav is expanded. Only applies when variant is docked. */
  dockExpanded?: boolean;
  /** Flag indicating the docked nav should expand as an overlay instead of the default inline. */
  dockOverlay?: boolean;
  /** Flag indicating the page should render without the content area background and overflow scroll. */
  plain?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';
import { globalWidthBreakpoints } from '../../constants';
import { createReusableTemplate, useElementSize, useWindowSize } from '@vueuse/core';
import { ref, provide, computed, watch, toRef, type HTMLAttributes, type VNode, useTemplateRef } from 'vue';
import PfDrawer from '../Drawer/Drawer.vue';
import PfDrawerContent from '../Drawer/DrawerContent.vue';
import PfDrawerPanelContent from '../Drawer/DrawerPanelContent.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { getBreakpoint, getVerticalBreakpoint } from '../../util';
import { provideChildrenTracker } from '../../use';
import { PageManagedSidebarKey, PageMobileKey, PageSidebarOpenKey, PageSidebarsKey } from './common';

defineOptions({
  name: 'PfPage',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  defaultManagedSidebarOpen: true,
  mainComponent: 'main',
  mainTabIndex: -1,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  /** The page was resized, with whether it is below the xl breakpoint and its width */
  (name: 'pageResize', v: { mobileView: boolean; windowSize: number }): void;
  /** The notification drawer finished expanding or collapsing */
  (name: 'notificationDrawerExpand', event: TransitionEvent): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
  drawer?: (props?: Record<never, never>) => VNode[];
  'skip-to-content'?: (props?: Record<never, never>) => VNode[];
  'dock-content'?: (props?: Record<never, never>) => VNode[];
  /** The horizontal masthead content (e.g. PfMasthead or PfPageHeader). When using the docked variant, this content will only render at mobile viewports. */
  masthead?: (props?: Record<never, never>) => VNode[];
  sidebar?: (props?: Record<never, never>) => VNode[];
  /** Content rendered inside the page footer, e.g. PfPageFooter */
  footer?: (props?: Record<never, never>) => VNode[];
}>();

const [DefineMainContainer, MainContainer] = createReusableTemplate();
const pageRef = useTemplateRef('page');
const mainRef = useTemplateRef<HTMLElement>('mainRef');
const { width, height } = useElementSize(pageRef);
const sidebars = provideChildrenTracker(PageSidebarsKey);

const mobileView = ref(false);
const mobileSidebarOpen = ref(false);
const desktopSidebarOpen = ref(!props.managedSidebar || props.defaultManagedSidebarOpen);

provide(PageManagedSidebarKey, toRef(props, 'managedSidebar'));
provide(PageMobileKey, mobileView);

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

// like upstream, the page is mobile when it is narrower than the xl breakpoint, falling back to the window
// before it is measured
const { width: windowWidth } = useWindowSize();
const pageWidth = computed(() => width.value || windowWidth.value);

watch(
  pageWidth,
  width => {
    mobileView.value = width < globalWidthBreakpoints.xl;
    emit('pageResize', { mobileView: mobileView.value, windowSize: width });
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
  /** The main section of the page */
  main: mainRef,
});
</script>
