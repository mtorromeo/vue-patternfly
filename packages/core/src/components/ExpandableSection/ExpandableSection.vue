<template>
  <div
    :class="[styles.expandableSection, {
      [styles.modifiers.expanded]: managedExpanded,
      [styles.modifiers.active]: active,
      [styles.modifiers.detached]: detached,
      [styles.modifiers.displayLg]: large,
      [styles.modifiers.limitWidth]: widthLimited,
    }]"
  >
    <button
      v-if="!detached"
      :class="styles.expandableSectionToggle"
      type="button"
      :aria-controls="contentId"
      :aria-expanded="managedExpanded"
      @click="managedExpanded = !managedExpanded"
    >
      <span :class="styles.expandableSectionToggleIcon">
        <pf-angle-right-icon aria-hidden />
      </span>
      <span :class="styles.expandableSectionToggleText">{{ computedToggleText }}</span>
    </button>

    <div :id="contentId" :class="styles.expandableSectionContent" :hidden="!managedExpanded">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';
import PfAngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';
import { useManagedProp } from '../../use';
import { defineComponent, markRaw } from 'vue';

export default defineComponent({
  name: 'PfExpandableSection',

  components: {
    PfAngleRightIcon,
  },

  props: {
    /** Flag to indicate if the content is expanded */
    expanded: Boolean,

    /** Text that appears in the attached toggle */
    toggleText: {
      type: String,
      default: '',
    },

    /** Text that appears in the attached toggle when expanded (will override toggleText if both are specified; used for uncontrolled expandable with dynamic toggle text) */
    toggleTextExpanded: {
      type: String,
      default: '',
    },

    /** Text that appears in the attached toggle when collapsed (will override toggleText if both are specified; used for uncontrolled expandable with dynamic toggle text) */
    toggleTextCollapsed: {
      type: String,
      default: '',
    },

    /** Forces active state */
    active: Boolean,

    /** Indicates the expandable section has a detached toggle */
    detached: Boolean,

    /** ID of the content of the expandable section */
    contentId: {
      type: String,
      default: '',
    },

    /** Flag for disclosure styling. */
    large: Boolean,

    /** Flag to indicate the width of the component is limited. Set to true for disclosure styling. */
    widthLimited: Boolean,
  },

  emits: ['update:expanded'],

  setup() {
    return {
      managedExpanded: useManagedProp('expanded', false),
      styles: markRaw(styles),
    };
  },

  computed: {
    computedToggleText() {
      if (this.managedExpanded && this.toggleTextExpanded) {
        return this.toggleTextExpanded;
      }
      if (!this.managedExpanded && this.toggleTextCollapsed) {
        return this.toggleTextCollapsed;
      }
      return this.toggleText;
    },
  },
});
</script>
