<script>
import styles from '@patternfly/react-styles/css/components/Radio/radio';

import { h, mergeProps } from 'vue';

export default {
  name: 'PfRadio',

  props: {
    /** Flag to show if the radio label is wrapped on small screen. */
    labelWrapped: Boolean,

    /** Flag to show if the radio label is shown before the radio button. */
    labelBeforeButton: Boolean,

    /** Flag to show if the radio is checked. */
    checked: Boolean,

    /** Flag to show if the radio is disabled. */
    disabled: Boolean,

    /** Flag to show if the radio selection is valid or invalid. */
    valid: Boolean,

    /** Id of the radio. */
    id: {
      type: String,
      required: true,
    },

    /** Label text of the radio. */
    label: {
      type: String,
      default: '',
    },

    /** Body of the radio. */
    body: {
      type: String,
      default: '',
    },

    /** Description text of the radio. */
    description: {
      type: String,
      default: '',
    },

    /** Aria label for the radio. */
    ariaLabel: {
      type: String,
      default: '',
    },
  },

  emits: ['change'],

  render() {
    const children = [];

    let label = null;
    if (this.label || this.$slots.label) {
      const labelProps = {
        class: [styles.radioLabel, {
          [styles.modifiers.disabled]: this.disabled,
        }],
      };
      if (!this.labelWrapped) {
        labelProps.for = this.id;
      }
      label = h(this.labelWrapped ? 'span' : 'label', labelProps, this.label || this.$slots.label());
    }

    const input = h('input', mergeProps({
      id: this.id,
      type: 'radio',
      class: styles.radioInput,
      'aria-invalid': !this.valid,
      disabled: this.disabled,
      checked: this.checked,
      'aria-label': (this.label || this.$slots.label) ? null : this.ariaLabel,
      onChange: e => this.$emit('change', e),
    }, this.$attrs));

    if (this.labelBeforeButton) {
      children.push(label);
    }

    children.push(input);

    if (!this.labelBeforeButton) {
      children.push(label);
    }

    if (this.description || this.$slots.description) {
      children.push(h('span', { class: styles.radioDescription }, this.description || this.$slots.description()));
    }

    if (this.body || this.$slots.body) {
      children.push(h('span', { class: styles.radioBody }, this.body || this.$slots.body()));
    }

    if (this.labelWrapped) {
      return h('label', { class: styles.radio, for: this.id }, children);
    }

    return h('div', {
      class: [styles.radio, {
        [styles.modifiers.standalone]: !(this.label || this.$slots.label),
      }],
    }, children);
  },
};
</script>
