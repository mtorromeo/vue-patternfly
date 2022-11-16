import styles from '@patternfly/react-styles/css/components/FormControl/form-control';

import { defineComponent, h, type PropType } from 'vue';
import { provideChildrenTracker, useManagedProp, type ChildrenTrackerInjectionKey } from '../../use';
import type PfFormSelectOption from './FormSelectOption';

export const FormSelectOptionsKey = Symbol("FormSelectOptionsKey") as ChildrenTrackerInjectionKey;

export default defineComponent({
  name: 'PfFormSelect',

  props: {
    /** @model */
    modelValue: {
      type: String as PropType<string | undefined | null>,
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
      options: provideChildrenTracker<InstanceType<typeof PfFormSelectOption>>(FormSelectOptionsKey),
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
        if (e.currentTarget instanceof HTMLSelectElement) {
          this.value = e.currentTarget.value;
        }
      },
    }, this.$slots);
  },
});
