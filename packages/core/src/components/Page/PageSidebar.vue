<template>
  <div id="page-sidebar" :class="[styles.pageSidebar, {
    [styles.modifiers.light]: theme === 'light',
    [styles.modifiers.expanded]: sidebarOpen,
    [styles.modifiers.collapsed]: !sidebarOpen,
  }]"
  >
    <div :class="styles.pageSidebarBody">
      <slot />
    </div>
  </div>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Page/page';

export default {
  name: 'PfPageSidebar',

  provide() {
    return {
      sidebar: this,
    };
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
    /** Programmatically manage if the side nav is shown, if managedSidebar is set to true in the PfPage component, this prop is managed */
    navOpen: Boolean,

    /** Indicates the color scheme of the sidebar */
    theme: {
      type: String,
      default: 'dark',
      validator: v => ['light', 'dark'].includes(v),
    },
  },

  data() {
    return {
      styles,
    };
  },

  computed: {
    sidebarOpen() {
      return this.managedSidebar.value ? this.managedNavOpen.value : this.navOpen;
    },
  },
};
</script>
