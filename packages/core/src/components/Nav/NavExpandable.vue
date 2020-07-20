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
          <AngleRightIcon aria-hidden="true" />
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

import {AngleRightIcon} from '@vue-patternfly4/icons';
import {getUniqueId} from '../../util';

export default {
  name: 'NavExpandable',

  components: {
    AngleRightIcon,
  },

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
