<script lang="ts">
import { defineComponent, h, PropType } from 'vue';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { useChildrenTracker, useManagedProp } from '../use';
import InputValidationMixin from '../mixins/InputValidationMixin';

export default defineComponent({
  name: 'PfTextInput',

  mixins: [InputValidationMixin],

  props: {
    type: {
      type: String,
      default: 'text',
    },

    /** Trim text on left */
    leftTruncated: Boolean,

    /** @values calendar, clock, search */
    iconVariant: {
      type: String as PropType<'calendar' | 'clock' | 'search' | null>,
      default: null,
      validator: (v: any) => [null, '', 'calendar', 'clock', 'search'].includes(v),
    },

    /** Custom icon url to set as the input's background-image */
    iconUrl: {
      type: String,
      default: '',
    },

    /** Dimensions for the custom icon set as the input's background-size */
    iconDimensions: {
      type: String,
      default: '',
    },
  },

  emits: ['input', 'blur', 'change', 'invalid', 'keyup', 'update:modelValue', 'update:validated'],

  setup() {
    useChildrenTracker();
    return {
      value: useManagedProp('modelValue', ''),
    };
  },

  render() {
    const style = {
      backgroundImage: this.iconUrl ? `url(${this.iconUrl})` : undefined,
      backgroundSize: this.iconDimensions ? this.iconDimensions : undefined,
    };

    return h('input', {
      value: this.value,
      class: [
        styles.formControl, {
          [styles.modifiers.success]: this.effectiveValidated === 'success',
          [styles.modifiers.warning]: this.effectiveValidated === 'warning',
          [styles.modifiers.icon]: (this.iconVariant && this.iconVariant !== 'search') || this.iconUrl,
          [styles.modifiers[this.iconVariant]]: this.iconVariant,
        },
      ],
      type: this.type,
      style,
      'aria-invalid': this.effectiveValidated === 'error',
      onChange: this.onChange,
      onInput: this.onInput,
      onBlur: this.onBlur,
      onInvalid: this.onInvalid,
      onKeyUp: this.onKeyUp,
    });
  },
});
</script>
