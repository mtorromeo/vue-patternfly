<template>
  <button v-if="horizontal" :class="styles.navScrollButton" :aria-label="ariaLeftScroll" :disabled="scrollViewAtStart" @click="scrollLeft">
    <AngleLeftIcon />
  </button>
  <ul ref="navList" v-bind="$attrs" :class="styles.navList" @scroll="handleScrollButtons">
    <slot />
  </ul>
  <button v-if="horizontal" :class="styles.navScrollButton" :aria-label="ariaRightScroll" :disabled="scrollViewAtEnd" @click="scrollRight">
    <AngleRightIcon />
  </button>
</template>

<script>
import AngleLeftIcon from '@vue-patternfly/icons/dist/esm/icons/angle-left-icon';
import AngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';
import { isElementInView } from '../../util.ts';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import { markRaw } from 'vue';

export default {
  name: 'PfNavList',

  components: {
    AngleLeftIcon,
    AngleRightIcon,
  },

  inject: ['horizontal', 'scrollable'],

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
    return {
      styles: markRaw(styles),
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
