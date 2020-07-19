<template>
  <button v-if="horizontal" :class="styles.navScrollButton" :aria-label="ariaLeftScroll" :disabled="scrollViewAtStart" @click="scrollLeft">
    <svg fill="currentColor" height="1em" width="1em" viewBox="0 0 256 512" aria-hidden="true" role="img" style="vertical-align: -0.125em;">
      <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" transform="" />
    </svg>
    <!-- <AngleLeftIcon /> -->
  </button>
  <ul ref="navList" v-bind="$attrs" :class="styles.navList" @scroll="handleScrollButtons">
    <slot />
  </ul>
  <button v-if="horizontal" :class="styles.navScrollButton" :aria-label="ariaRightScroll" :disabled="scrollViewAtEnd" @click="scrollRight">
    <svg fill="currentColor" height="1em" width="1em" viewBox="0 0 256 512" role="img" style="vertical-align: -0.125em;">
      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" transform="" />
    </svg>
    <!-- <AngleRightIcon /> -->
  </button>
</template>

<script>
import {isElementInView} from '../../util';
import _styles from '@patternfly/react-styles/css/components/Nav/nav';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'NavList',

  inject: ['horizontal', 'scrollable'],

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

  data() {
    return {
      styles,
      scrollViewAtStart: false,
      scrollViewAtEnd: false,
    };
  },

  mounted() {
    window.addEventListener('resize', this.handleScrollButtons, false);
  },

  beforeUmount() {
    window.removeEventListener('resize', this.handleScrollButtons, false);
  },

  methods: {
    handleScrollButtons() {
      const container = this.$refs.navList;
      if (container) {
        // check if it elements are in view
        this.scrollViewAtStart = isElementInView(container, container.firstChildElement, false);
        this.scrollViewAtEnd = isElementInView(container, container.lastChildElement, false);
        this.scrollable.value = !this.scrollViewAtStart || !this.scrollViewAtEnd;
      }
    },

    scrollLeft() {
      // find first Element that is fully in view on the left, then scroll to the element before it
      const container = this.$refs.navList;
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
      const container = this.$refs.navList;
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
};
</script>
