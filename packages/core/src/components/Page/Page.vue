<template>
  <div :class="styles.page">
    <slot name="skeleton" />
    <main
      :id="mainContainerId"
      :role="role"
      :class="styles.pageMain"
      :tab-index="mainTabIndex"
      :aria-label="mainAriaLabel"
      @click="mainClick"
      @touchstart="mainClick"
    >
      <section
        v-if="$slots.breadcrumb"
        :class="[styles.pageMainBreadcrumb, {
          [styles.modifiers.limitWidth]: breadcrumbWidthLimited,
          [styles.modifiers.stickyTop]: breadcrumbStickyTop,
        }]"
      >
        <div
          v-if="breadcrumbWidthLimited"
          :class="styles.pageMainBody"
        >
          <slot name="breadcrumb" />
        </div>
        <template v-else>
          <slot name="breadcrumb" />
        </template>
      </section>
      <slot />
    </main>
  </div>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Page/page';
import globalBreakpointXl from '@patternfly/react-tokens/dist/esm/global_breakpoint_xl';
import { useWindowSize } from '@vueuse/core';
import { ref, provide, computed } from 'vue';

export default {
  name: 'PfPage',

  props: {
    /** Sets the value for role on the <main> element */
    role: {
      type: String,
      default: '',
    },

    /** an id to use for the [role="main"] element */
    mainContainerId: {
      type: String,
      default: '',
    },

    /** tabIndex to use for the [role="main"] element, null to unset it */
    mainTabIndex: {
      type: Number,
      default: -1,
    },

    /**
     * If true, manages the sidebar open/close state and there is no need to pass the isNavOpen boolean into
     * the sidebar component or add a callback onNavToggle function into the PageHeader component
     */
    managedSidebar: Boolean,

    /** If true, the managed sidebar is initially open for desktop view */
    defaultManagedSidebarOpen: {
      type: Boolean,
      default: true,
    },

    /** Accessible label, can be used to name main section */
    mainAriaLabel: {
      type: String,
      default: '',
    },

    /** Flag indicating if breadcrumb width should be limited */
    breadcrumbWidthLimited: Boolean,
    /** Flag indicating if breadcrumb should be sticky at top */
    breadcrumbStickyTop: Boolean,
  },

  emits: {
    'page-resize'({ mobileView, windowSize }) {
      if (typeof mobileView !== 'boolean' || typeof windowSize !== 'number') {
        console.warn('Invalid page-resize event payload!');
        return false;
      }
      return true;
    },
  },

  setup(props) {
    const mobileView = ref(false);
    const mobileNavOpen = ref(false);
    const desktopNavOpen = ref(!props.managedSidebar || props.defaultManagedSidebarOpen);

    const managedSidebar = ref(props.managedSidebar);
    provide('managedSidebar', managedSidebar);

    const navOpen = computed({
      get() {
        return mobileView.value ? mobileNavOpen.value : desktopNavOpen.value;
      },

      set(open) {
        if (mobileView.value) {
          mobileNavOpen.value = open;
        } else {
          desktopNavOpen.value = open;
        }
      },
    });
    provide('navOpen', navOpen);

    const { width: windowWidth } = useWindowSize();

    return {
      navOpen,
      mobileView,
      mobileNavOpen,
      desktopNavOpen,
      windowWidth,
    };
  },

  data() {
    return {
      styles,
    };
  },

  watch: {
    windowWidth(width) {
      this.mobileView = width < Number.parseInt(globalBreakpointXl.value, 10);
      this.$emit('page-resize', { mobileView: this.mobileView, windowSize: width });
    },
  },

  methods: {
    navToggle() {
      this.navOpen = !this.navOpen;
    },

    mainClick() {
      if (this.mobileView && this.navOpen) {
        this.navOpen = false;
      }
    },
  },
};
</script>
