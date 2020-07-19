<template>
  <li
    :class="[styles.navItem, styles.modifiers.expandable, {
      [styles.modifiers.expanded]: realExpanded,
      [styles.modifiers.current]: active,
    }]"
    @click="handleToggle"
  >
    <a
      :id="srText ? null : validId"
      ref="expandable"
      :class="styles.navLink"
      href="#"
      :aria-expanded="realExpanded"
      @click.prevent
      @mousedown.prevent
    >
      {{ title }}
      <span :class="styles.navToggle">
        <span :class="styles.navToggleIcon">
          <svg fill="currentColor" height="1em" width="1em" viewBox="0 0 256 512" aria-hidden="true" role="img" style="vertical-align: -0.125em;">
            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" transform="" />
          </svg>
          <!-- <AngleRightIcon aria-hidden="true" /> -->
        </span>
      </span>
    </a>
    <section :class="styles.navSubnav" :aria-labelledby="validId" :hidden="realExpanded ? null : true">
      <h2 v-if="srText" :id="validId" :class="a11yStyles.screenReader">
        {{ srText }}
      </h2>
      <ul :class="styles.navList">
        <slot />
      </ul>
    </section>
  </li>
</template>

<script>
import _styles from '@patternfly/react-styles/css/components/Nav/nav';
import _a11yStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';

// commonjs bug
let styles = _styles.default;
let a11yStyles = _a11yStyles.default;

import {getUniqueId} from '../../util';

export default {
  name: 'NavExpandable',

  props: {
    title: {
      type: String,
      default: '',
    },
    srText: {
      type: String,
      default: '',
    },
    groupdId: {
      type: [String, Number],
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    active: Boolean,
    managed: Boolean,
    expanded: Boolean,
  },

  data() {
    return {
      styles,
      a11yStyles,
      scrollViewAtStart: false,
      scrollViewAtEnd: false,
      expandedState: this.expanded,
    };
  },

  computed: {
    validId() {
      return this.id || getUniqueId();
    },

    realExpanded: {
      get() {
        return this.managed ? this.expandedState : this.expanded;
      },

      set(value) {
        if (this.managed) {
          this.expandedState = value;
        } else {
          this.$emit('update:expanded', value, this.groupId);
        }
      },
    },
  },

  beforeUmount() {
    window.removeEventListener('resize', this.handleScrollButtons, false);
  },

  methods: {
    handleToggle(e) {
      // Item events can bubble up, ignore those
      if (!this.$refs.expandable || !this.$refs.expandable.contains(e.target)) {
        return;
      }
      this.realExpanded = !this.realExpanded;
    },
  },
};
</script>
