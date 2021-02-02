<template>
  <header :class="styles.pageHeader">
    <div v-if="showNavToggle || $slots.logo" :class="styles.pageHeaderBrand">
      <div v-if="showNavToggle" :class="styles.pageHeaderBrandToggle">
        <pf-button
          id="nav-toggle"
          aria-controls="page-sidebar"
          :aria-label="ariaLabel"
          :aria-expanded="sidebarOpen ? 'true' : 'false'"
          variant="plain"
          @click="sidebarOpen = !sidebarOpen"
        >
          <BarsIcon />
        </pf-button>
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
import styles from '@patternfly/react-styles/css/components/Page/page';
import BarsIcon from '@vue-patternfly4/icons/dist/esm/icons/bars-icon';
import PfButton from '../Button.vue';

export default {
  name: 'PfPageHeader',

  components: {
    BarsIcon,
    PfButton,
  },

  inject: {
    managedNavOpen: {
      from: 'navOpen',
    },
    managedSidebar: {
      from: 'managedSidebar',
    },
  },

  props: {
    showNavToggle: Boolean,

    navOpen: Boolean,

    /** Aria label for the nav toggle button */
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
        return this.managedSidebar.value ? this.managedNavOpen.value : this.navOpen;
      },
      set(open) {
        if (this.managedSidebar.value) {
          this.managedNavOpen.value = open;
        }
      },
    },
  },
};
</script>
