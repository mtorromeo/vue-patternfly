<template>
  <div id="page-sidebar" :class="[styles.pageSidebar, {
    [styles.modifiers.light]: theme === 'light',
    [styles.modifiers.expanded]: navOpen,
    [styles.modifiers.collapsed]: !navOpen,
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
    managedIsNavOpen: {
      from: 'isNavOpen',
    },
  },

  props: {
    isManagedSidebar: Boolean,

    /** Programmatically manage if the side nav is shown, if isManagedSidebar is set to true in the Page component, this prop is managed */
    isNavOpen: Boolean,

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
    navOpen() {
      return this.isManagedSidebar ? this.managedIsNavOpen.value : this.isNavOpen;
    },
  },
};
</script>
