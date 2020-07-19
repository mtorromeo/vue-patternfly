<template>
  <header :class="styles.pageHeader">
    <div v-if="showNavToggle || $slots.logo" :class="styles.pageHeaderBrand">
      <div v-if="showNavToggle" :class="styles.pageHeaderBrandToggle">
        <Btn
          id="nav-toggle"
          aria-controls="page-sidebar"
          :aria-label="ariaLabel"
          :aria-expanded="navOpen ? 'true' : 'false'"
          variant="plain"
          @click="sidebarOpen = !sidebarOpen"
        >
          <!-- <BarsIcon /> -->
          <svg fill="currentColor" height="1em" width="1em" viewBox="0 0 448 512" aria-hidden="true" role="img" style="vertical-align: -0.125em;">
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" transform="" />
          </svg>
        </Btn>
      </div>

      <component :is="logoComponent" v-if="$slots.logo" :class="styles.pageHeaderBrandLink" v-bind="logoProps">
        <slot name="logo" />
      </component>
    </div>

    <!-- Hide for now until we have the context selector component -->
    <!--
      <div className={css(styles.pageHeaderSelector)}>
        pf-c-context-selector
      </div>
    -->
    <div v-if="$slots.topNav" :class="styles.pageHeaderNav">
      <slot name="top-nav" />
    </div>

    <slot />
  </header>
</template>

<script>
import _styles from '@patternfly/react-styles/css/components/Page/page';
import Btn from '../Btn.vue';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'PageHeader',

  components: {
    Btn,
  },

  inject: {
    managedNavOpen: {
      from: 'navOpen',
    },
  },

  props: {
    showNavToggle: Boolean,

    navOpen: Boolean,
    /**
     * If true, manages the sidebar open/close state and there is no need to pass the navOpen boolean into
     * the sidebar component or add a callback onNavToggle function into the PageHeader component
     */
    managedSidebar: Boolean,

    /** Aria Label for the nav toggle button */
    ariaLabel: {
      type: String,
      default: 'Global navigation',
    },

    logoComponent: {
      type: String,
      default: 'a',
    },

    logoProps: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      styles,
    };
  },

  computed: {
    sidebarOpen: {
      get() {
        return this.managedSidebar ? this.managedNavOpen.value : this.navOpen;
      },
      set(open) {
        if (this.managedSidebar) {
          this.managedNavOpen.value = open;
        }
      },
    },
  },
};
</script>
