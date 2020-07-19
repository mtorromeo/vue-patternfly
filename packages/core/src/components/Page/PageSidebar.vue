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
import _styles from '@patternfly/react-styles/css/components/Page/page';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'PageSidebar',

  inject: {
    managedNavOpen: {
      from: 'navOpen',
    },
  },

  props: {
    managedSidebar: Boolean,

    /** Programmatically manage if the side nav is shown, if managedSidebar is set to true in the Page component, this prop is managed */
    navOpen: Boolean,

    /** Indicates the color scheme of the sidebar */
    theme: {
      type: String,
      default: 'dark',
      validate: v => ['light', 'dark'].includes(v),
    },
  },

  data() {
    return {
      styles,
    };
  },

  computed: {
    sidebarOpen() {
      return this.managedSidebar ? this.managedNavOpen.value : this.navOpen;
    },
  },
};
</script>