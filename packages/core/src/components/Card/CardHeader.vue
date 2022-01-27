<template>
  <div
    :class="[styles.cardHeader, {
      [styles.modifiers.toggleRight]: toggleRightAligned,
    }]"
  >
    <slot v-if="toggleRightAligned" />

    <div v-if="expandable" :class="styles.cardHeaderToggle">
      <pf-button variant="plain" v-bind="toggleButtonAttrs" @click="toggle">
        <span :class="styles.cardHeaderToggleIcon">
          <pf-angle-right-icon aria-hidden />
        </span>
      </pf-button>
    </div>
    <slot v-if="!toggleRightAligned" />
  </div>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Card/card';
import PfAngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';
import PfButton from '../Button.vue';
import { defineComponent, inject, markRaw } from 'vue';
import { CardExpandableKey, CardExpandedKey } from './Card.vue';

export default defineComponent({
  name: 'PfCardHeader',

  components: {
    PfAngleRightIcon,
    PfButton,
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

  setup() {
    return {
      expandable: inject(CardExpandableKey),
      expanded: inject(CardExpandedKey),
      styles: markRaw(styles),
    };
  },

  methods: {
    toggle() {
      this.expanded = !this.expanded;
    },
  },
});
</script>
