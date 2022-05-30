import styles from '@patternfly/react-styles/css/components/FormControl/form-control';

import { defineComponent, h } from 'vue';
import { provideChildrenTracker, useManagedProp } from '../../use';
import PfFormSelectOption from './FormSelectOption';

export default defineComponent({
  name: 'PfFormSelect',

  props: {
    /** @model */
    modelValue: {
      type: String,
      default: null,
    },

    /**
     * Value to indicate if the input is modified to show that validation state.
     * If set to success, input will be modified to indicate valid state.
     * If set to error,  input will be modified to indicate error state.
     * @values default, success, warning, error
     */
    validated: {
      type: String,
      default: null,
      validator: (v: any) => [null, 'default', 'success', 'warning', 'error'].includes(v),
    },
  },

  emits: ['update:modelValue'],

  setup() {
    return {
      options: provideChildrenTracker<InstanceType<typeof PfFormSelectOption>>(),
      value: useManagedProp('modelValue', ''),
    };
  },

  computed: {
    selectedOption() {
      return this.options.find(option => option.$attrs.value === this.value);
    },

    selectedPlaceholder() {
      return this.selectedOption && this.selectedOption.placeholder;
    },
  },

  render() {
    return h('select', {
      value: this.value,
      class: [styles.formControl, {
        [styles.modifiers.success]: this.validated === 'success',
        [styles.modifiers.warning]: this.validated === 'warning',
        [styles.modifiers.placeholder]: this.selectedPlaceholder,
      }],
      onChange: (e: Event) => {
        if (e.target instanceof HTMLInputElement) {
          this.value = e.target.value;
        }
      },
    }, this.$slots);
  },
});
