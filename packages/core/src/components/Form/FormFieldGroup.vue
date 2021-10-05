<template>
  <div :class="[styles.formFieldGroup, {[styles.modifiers.expanded]: managedExpandable && managedExpanded}]">
    <div v-if="managedExpandable" :class="styles.formFieldGroupToggle">
      <div :class="styles.formFieldGroupToggleButton">
        <pf-button
          :id="uniqueId"
          variant="plain"
          :aria-label="toggleAriaLabel"
          :aria-expanded="managedExpanded"
          :aria-labelledby="uniqueId"
          @click="managedExpanded = !managedExpanded"
        >
          <span :class="styles.formFieldGroupToggleIcon">
            <pf-angle-right-icon aria-hidden />
          </span>
        </pf-button>
      </div>
    </div>
    <slot name="header" />
    <div v-if="!managedExpandable || managedExpanded" :class="styles.formFieldGroupBody">
      <slot />
    </div>
  </div>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Form/form';
import PfButton from '../Button.vue';
import PfAngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';
import { useManagedProp } from '../../use.ts';
import { getUniqueId } from '../../util.ts';
import { markRaw } from 'vue';

export default {
  name: 'PfFormFieldGroup',

  components: {
    PfButton,
    PfAngleRightIcon,
  },

  props: {
    /** Flag indicating if the field group is expandable */
    expandable: Boolean,

    /** Flag indicate if the form field group is expanded. Modifies the card to be expandable. */
    expanded: {
      type: Boolean,
      default: null,
    },

    /** Aria-label to use on the form filed group toggle button */
    toggleAriaLabel: {
      type: String,
      default: '',
    },
  },

  emits: ['update:expanded'],

  setup() {
    return {
      managedExpanded: useManagedProp('expanded', false),
      styles: markRaw(styles),
    };
  },

  computed: {
    uniqueId() {
      return `form-field-group-toggle-${getUniqueId()}`;
    },

    managedExpandable() {
      return this.expandable || this.expanded !== null;
    },
  },
};
</script>
