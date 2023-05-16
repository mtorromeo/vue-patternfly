<template>
  <button
    v-if="horizontal"
    :class="styles.navScrollButton"
    :aria-label="ariaLeftScroll"
    :disabled="scrollViewAtStart"
    @click="scrollLeft"
  >
    <AngleLeftIcon />
  </button>
  <ul ref="navList" v-bind="$attrs" :class="styles.navList" @scroll="handleScrollButtons">
    <slot />
  </ul>
  <button
    v-if="horizontal"
    :class="styles.navScrollButton"
    :aria-label="ariaRightScroll"
    :disabled="scrollViewAtEnd"
    @click="scrollRight"
  >
    <AngleRightIcon />
  </button>
</template>

<script lang="ts" setup>
import AngleLeftIcon from '@vue-patternfly/icons/dist/esm/icons/angle-left-icon';
import AngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';
import { isElementInView } from '../../util';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import { inject, ref, type Ref, onMounted, onBeforeUnmount } from 'vue';
import { NavHorizontalKey, NavScrollablelKey } from './Nav.vue';

defineOptions({
  name: 'PfNavList',
  inheritAttrs: false,
});

withDefaults(defineProps<{
  ariaLeftScroll?: string;
  ariaRightScroll?: string;
}>(), {
  ariaLeftScroll: 'Scroll left',
  ariaRightScroll: 'Scroll right',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const navList: Ref<HTMLUListElement | undefined> = ref();
const horizontal = inject(NavHorizontalKey);
const scrollable = inject(NavScrollablelKey);
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

function scrollLeft() {
  // find first Element that is fully in view on the left, then scroll to the element before it
  const container = navList.value;
  if (container) {
    const childrenArr = Array.from(container.children);
    let firstElementInView;
    let lastElementOutOfView;
    for (let i = 0; i < childrenArr.length && !firstElementInView; i++) {
      if (isElementInView(container, childrenArr[i], false)) {
        firstElementInView = childrenArr[i];
        lastElementOutOfView = childrenArr[i - 1];
      }
    }
    if (lastElementOutOfView) {
      container.scrollLeft -= lastElementOutOfView.scrollWidth;
    }
    handleScrollButtons();
  }
}

function scrollRight() {
  // find last Element that is fully in view on the right, then scroll to the element after it
  const container = navList.value;
  if (container) {
    const childrenArr = Array.from(container.children);
    let lastElementInView;
    let firstElementOutOfView;
    for (let i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
      if (isElementInView(container, childrenArr[i], false)) {
        lastElementInView = childrenArr[i];
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
