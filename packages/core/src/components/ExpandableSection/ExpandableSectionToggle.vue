<template>
  <div
    :class="[styles.expandableSection, styles.modifiers.detached, {
      [styles.modifiers.expanded]: managedExpanded,
    }]"
  >
    <button
      :class="styles.expandableSectionToggle"
      type="button"
      :aria-expanded="managedExpanded"
      :aria-controls="contentId"
      @click="managedExpanded = !managedExpanded"
    >
      <span :class="[styles.expandableSectionToggleIcon, {
        [styles.modifiers.expandTop]: direction === 'up',
      }]">
        <pf-angle-right-icon aria-hidden />
      </span>
      <span :class="styles.expandableSectionToggleText">
        <slot />
      </span>
    </button>
  </div>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';
import PfAngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';
import { useManagedProp } from '../../use.ts';
import { markRaw } from 'vue';

export default {
  name: 'PfExpandableSectionToggle',

  components: {
    PfAngleRightIcon,
  },

  props: {
    /** Flag to indicate if the content is expanded */
    expanded: Boolean,

    /** ID of the content of the expandable section */
    contentId: {
      type: String,
      default: '',
    },

    /** Direction the toggle arrow should point when the expandable section is expanded. */
    direction: {
      type: String,
      default: 'down',
      validator: v => ['up', 'down'].includes(v),
    },
  },

  emits: ['update:expanded'],

  setup() {
    return {
      managedExpanded: useManagedProp('expanded', false),
      styles: markRaw(styles),
    };
  },
};
</script>
