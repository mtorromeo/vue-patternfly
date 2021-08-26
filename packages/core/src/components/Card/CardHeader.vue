<template>
  <div
    :class="[styles.cardHeader, {
      [styles.modifiers.toggleRight]: toggleRightAligned,
    }]"
  >
    <slot v-if="toggleRightAligned" />

    <div v-if="expandable.value" :class="styles.cardHeaderToggle">
      <pf-button variant="plain" v-bind="toggleButtonAttrs" @click="toggle">
        <span :class="styles.cardHeaderToggleIcon">
          <pf-angle-right-icon aria-hidden="true" />
        </span>
      </pf-button>
    </div>
    <slot v-if="!toggleRightAligned" />
  </div>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Card/card';
import PfAngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';
import PfButton from '../Button.vue';

export default {
  name: 'PfCardHeader',

  components: {
    PfAngleRightIcon,
    PfButton,
  },

  inject: {
    expandable: {
      default: false,
    },

    expanded: {
      default: false,
    },
  },

  props: {
    /** Whether to right-align expandable toggle button */
    toggleRightAligned: Boolean,

    /** Additional props for expandable toggle button */
    toggleButtonAttrs: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      styles,
    };
  },

  methods: {
    toggle() {
      this.expanded.value = !this.expanded.value;
    },
  },
};
</script>
