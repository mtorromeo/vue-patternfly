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
          <BarsIcon />
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
import {BarsIcon} from '@vue-patternfly4/icons';
import Btn from '../Btn.vue';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'PageHeader',

  components: {
    BarsIcon,
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
