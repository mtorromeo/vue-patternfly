<template>
  <div :class="styles.page">
    <slot name="skeleton" />
    <main :id="mainContainerId" :role="role" :class="styles.pageMain" :tab-index="mainTabIndex" :aria-label="mainAriaLabel">
      <section v-if="$slots.breadcrumb" :class="styles.pageMainBreadcrumb">
        <slot name="breadcrumb" />
      </section>
      <slot />
    </main>
  </div>
</template>

<script>
import _styles from '@patternfly/react-styles/css/components/Page/page';
import globalBreakpointXl from '@patternfly/react-tokens/dist/esm/global_breakpoint_xl';
import {debounce} from '../../util';
import {ref, provide, computed} from 'vue';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'Page',

  props: {
    role: {
      type: String,
      default: '',
    },

    mainContainerId: {
      type: String,
      default: '',
    },

    mainTabIndex: {
      type: Number,
      default: -1,
    },

    managedSidebar: Boolean,

    defaultManagedSidebarOpen: {
      type: Boolean,
      default: true,
    },

    mainAriaLabel: {
      type: String,
      default: '',
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

    return {navOpen, mobileView, mobileNavOpen, desktopNavOpen};
  },

  data() {
    return {
      styles,
    };
  },

  mounted() {
    window.addEventListener('resize', debounce(this.handleResize, 250));
    // Initial check if should be shown
    this.handleResize();
  },

  beforeUnmount() {
    window.removeEventListener('resize', debounce(this.handleResize, 250));
  },

  methods: {
    handleResize() {
      const windowSize = window.innerWidth;
      this.mobileView = windowSize < Number.parseInt(globalBreakpointXl.value, 10);
      this.$emit('page-resize', {mobileView: this.mobileView, windowSize});
    },

    navToggle() {
      this.navOpen = !this.navOpen;
    },
  },
};
</script>
