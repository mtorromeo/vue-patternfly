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

<script lang="ts">
import AngleLeftIcon from '@vue-patternfly/icons/dist/esm/icons/angle-left-icon';
import AngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';
import { isElementInView } from '../../util';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import { defineComponent, inject, markRaw, ref, Ref } from 'vue';
import { NavHorizontalKey, NavScrollablelKey } from './Nav.vue';

export default defineComponent({
  name: 'PfNavList',

  components: {
    AngleLeftIcon,
    AngleRightIcon,
  },

  inheritAttrs: false,

  props: {
    ariaLeftScroll: {
      type: String,
      default: 'Scroll left',
    },
    ariaRightScroll: {
      type: String,
      default: 'Scroll right',
    },
  },

  setup() {
    const navList: Ref<HTMLUListElement | null> = ref(null);
    return {
      navList,
      styles: markRaw(styles),
      horizontal: inject(NavHorizontalKey),
      scrollable: inject(NavScrollablelKey),
    };
  },

  data() {
    return {
      scrollViewAtStart: false,
      scrollViewAtEnd: false,
    };
  },

  mounted() {
    window.addEventListener('resize', this.handleScrollButtons, false);
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.handleScrollButtons, false);
  },

  methods: {
    handleScrollButtons() {
      const container = this.navList;
      if (container) {
        // check if it elements are in view
        this.scrollViewAtStart = isElementInView(container, container.firstElementChild, false);
        this.scrollViewAtEnd = isElementInView(container, container.lastElementChild, false);
        this.scrollable = !this.scrollViewAtStart || !this.scrollViewAtEnd;
      }
    },

    scrollLeft() {
      // find first Element that is fully in view on the left, then scroll to the element before it
      const container = this.navList;
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
        this.handleScrollButtons();
      }
    },

    scrollRight() {
      // find last Element that is fully in view on the right, then scroll to the element after it
      const container = this.navList;
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
        this.handleScrollButtons();
      }
    },
  },
});
</script>
