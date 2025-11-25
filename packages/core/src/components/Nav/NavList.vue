<template>
  <div v-if="horizontal && (!scrollViewAtStart || !scrollViewAtEnd)" :class="styles.navScrollButton">
    <pf-button
      variant="plain"
      :aria-label="backScrollAriaLabel"
      :disabled="scrollViewAtStart"
      :tabindex="sidebarOpen ? undefined : -1"
      @click="scrollBack"
    >
      <template #icon>
        <angle-left-icon />
      </template>
    </pf-button>
  </div>
  <ul ref="navListRef" v-bind="$attrs" :class="styles.navList" @scroll.passive="handleScrollButtons">
    <slot />
  </ul>
  <div v-if="horizontal && (!scrollViewAtStart || !scrollViewAtEnd)" :class="styles.navScrollButton">
    <pf-button
      variant="plain"
      :aria-label="forwardScrollAriaLabel"
      :disabled="scrollViewAtEnd"
      :tabindex="sidebarOpen ? undefined : -1"
      @click="scrollForward"
    >
      <template #icon>
        <angle-right-icon />
      </template>
    </pf-button>
  </div>
</template>

<script lang="ts" setup>
import PfButton from '../Button.vue';
import { SidebarOpenKey } from '../Page/PageSidebar.vue';
import AngleLeftIcon from '@vue-patternfly/icons/angle-left-icon';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { isElementInView } from '../../util';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import { inject, ref, onMounted, onBeforeUnmount, useTemplateRef, type HTMLAttributes } from 'vue';
import { NavHorizontalKey, NavScrollableKey } from './Nav.vue';

defineOptions({
  name: 'PfNavList',
  inheritAttrs: false,
});

interface Props extends /* @vue-ignore */ Omit<HTMLAttributes, 'onScroll'> {
  /** Aria-label for the back scroll button */
  backScrollAriaLabel?: string;
  /** Aria-label for the forward scroll button */
  forwardScrollAriaLabel?: string;
}

withDefaults(defineProps<Props>(), {
  backScrollAriaLabel: 'Scroll back',
  forwardScrollAriaLabel: 'Scroll forward',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const navList = useTemplateRef('navListRef');
const horizontal = inject(NavHorizontalKey);
const scrollable = inject(NavScrollableKey);
const sidebarOpen = inject(SidebarOpenKey, false);
const scrollViewAtStart = ref(false);
const scrollViewAtEnd = ref(false);

onMounted(() => {
  window.addEventListener('resize', handleScrollButtons, false);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleScrollButtons, false);
});

function handleScrollButtons() {
  const container = navList.value;
  if (container) {
    // check if it elements are in view
    scrollViewAtStart.value = isElementInView(container, container.firstElementChild, false);
    scrollViewAtEnd.value = isElementInView(container, container.lastElementChild, false);
    if (scrollable) {
      scrollable.value = !scrollViewAtStart.value || !scrollViewAtEnd.value;
    }
  }
}

function scrollBack() {
  // find first Element that is fully in view on the left, then scroll to the element before it
  const container = navList.value;
  if (container) {
    const childrenArr = Array.from(container.children);
    let firstElementInView: Element | undefined;
    let lastElementOutOfView: Element | undefined;
    for (let i = 0; i < childrenArr.length && !firstElementInView; i++) {
      const child = childrenArr[i];
      if (child && isElementInView(container, child, false)) {
        firstElementInView = child;
        lastElementOutOfView = childrenArr[i - 1];
      }
    }
    if (lastElementOutOfView) {
      container.scrollLeft -= lastElementOutOfView.scrollWidth;
    }
    handleScrollButtons();
  }
}

function scrollForward() {
  // find last Element that is fully in view on the right, then scroll to the element after it
  const container = navList.value;
  if (container) {
    const childrenArr = Array.from(container.children);
    let lastElementInView: Element | undefined;
    let firstElementOutOfView: Element | undefined;
    for (let i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
      const child = childrenArr[i];
      if (child && isElementInView(container, child, false)) {
        lastElementInView = child;
        firstElementOutOfView = childrenArr[i + 1];
      }
    }
    if (firstElementOutOfView) {
      container.scrollLeft += firstElementOutOfView.scrollWidth;
    }
    handleScrollButtons();
  }
}
</script>
