<template>
  <div v-if="horizontal && (!scrollViewAtStart || !scrollViewAtEnd)" :class="styles.navScrollButton">
    <pf-button
      variant="plain"
      :aria-label="backScrollAriaLabel ?? messages.navScrollBack"
      :disabled="scrollViewAtStart"
      :tabindex="sidebarOpen ? undefined : -1"
      @click="scrollBack"
    >
      <template #icon>
        <angle-left-icon />
      </template>
    </pf-button>
  </div>
  <ul ref="navListRef" v-bind="$attrs" :class="styles.navList" role="list" @scroll.passive="handleScrollButtons">
    <slot />
  </ul>
  <div v-if="horizontal && (!scrollViewAtStart || !scrollViewAtEnd)" :class="styles.navScrollButton">
    <pf-button
      variant="plain"
      :aria-label="forwardScrollAriaLabel ?? messages.navScrollForward"
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

<script lang="ts">
interface Props extends /* @vue-ignore */ Omit<HTMLAttributes, 'onScroll'> {
  /** Aria-label for the back scroll button. Defaults to the `navScrollBack` message. */
  backScrollAriaLabel?: string;
  /** Aria-label for the forward scroll button. Defaults to the `navScrollForward` message. */
  forwardScrollAriaLabel?: string;
}
</script>

<script lang="ts" setup>
import PfButton from '../Button.vue';
import { usePfMessages } from '../../messages';
import { SidebarOpenKey } from '../Page/PageSidebar.vue';
import AngleLeftIcon from '@vue-patternfly/icons/angle-left-icon';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { isElementInView } from '../../util';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import { inject, ref, onMounted, useTemplateRef, type HTMLAttributes, type VNode } from 'vue';
import { useResizeObserver } from '@vueuse/core';
import { NavHorizontalKey, NavScrollableKey } from './common';

defineOptions({
  name: 'PfNavList',
  inheritAttrs: false,
});
const messages = usePfMessages();

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const navList = useTemplateRef('navListRef');
const horizontal = inject(NavHorizontalKey, undefined);
const scrollable = inject(NavScrollableKey, undefined);
const sidebarOpen = inject(SidebarOpenKey, true);
const scrollViewAtStart = ref(false);
const scrollViewAtEnd = ref(false);

onMounted(handleScrollButtons);
useResizeObserver(navList, handleScrollButtons);

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

// scrolling back moves left in a left-to-right layout and right in a right-to-left one
function scrollBy(container: HTMLElement, width: number) {
  container.scrollLeft += getComputedStyle(container).direction === 'rtl' ? -width : width;
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
      scrollBy(container, -lastElementOutOfView.scrollWidth);
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
      scrollBy(container, firstElementOutOfView.scrollWidth);
    }
    handleScrollButtons();
  }
}
</script>
