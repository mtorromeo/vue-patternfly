<template>
  <header :class="styles.pageHeader">
    <div v-if="showNavToggle || $slots.logo" :class="styles.pageHeaderBrand">
      <div v-if="showNavToggle" :class="styles.pageHeaderBrandToggle">
        <pf-button
          :id="navToggleId"
          :aria-controls="ariaControls"
          :aria-label="ariaLabel"
          :aria-expanded="sidebarOpen ? 'true' : 'false'"
          variant="plain"
          @click="sidebarOpen = !sidebarOpen"
        >
          <BarsIcon />
        </pf-button>
      </div>

      <component
        :is="logoComponent"
        v-if="$slots.logo"
        :class="styles.pageHeaderBrandLink"
        v-bind="logoProps"
      >
        <slot name="logo" />
      </component>
    </div>

    <div v-if="$slots.topNav" :class="styles.pageHeaderNav">
      <slot name="top-nav" />
    </div>

    <slot />
  </header>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';
import { computed, inject, type Component, type HTMLAttributes } from 'vue';
import BarsIcon from '@vue-patternfly/icons/dist/esm/icons/bars-icon';
import PfButton from '../Button.vue';
import { PageManagedSidebarKey, PageNavOpenKey } from './Page.vue';

defineOptions({
  name: 'PfPageHeader',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Additional props passed to the logo anchor container */
  logoProps?: object;
  /** Component to use to wrap the passed <logo> */
  logoComponent?: string | Component;
  /** Component to render the header tools, use <PageHeaderTools />  */
  // headerTools?: React.ReactNode;
  /** True to show the nav toggle button (toggles side nav) */
  showNavToggle?: boolean;
  /** Id for the nav toggle button */
  navToggleId?: string;
  /** True if the side nav is shown  */
  navOpen?: boolean;
  /** Aria Label for the nav toggle button */
  ariaLabel?: string;
  /** Aria controls for the nav toggle button */
  ariaControls?: string;
}

const props = withDefaults(defineProps<Props>(), {
  ariaLabel: 'Global navigation',
  ariaControls: 'page-sidebar',
  navToggleId: 'nav-toggle',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
  logo?: (props: Record<never, never>) => any;
  'top-nav'?: (props: Record<never, never>) => any;
}>();

const managedNavOpen = inject(PageNavOpenKey);
const managedSidebar = inject(PageManagedSidebarKey);

const sidebarOpen = computed({
  get() {
    return managedSidebar?.value && managedNavOpen ? managedNavOpen.value : props.navOpen;
  },
  set(open: boolean) {
    if (managedSidebar?.value && managedNavOpen) {
      managedNavOpen.value = open;
    }
  },
});
</script>
