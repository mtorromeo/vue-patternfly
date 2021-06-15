<script>
import {h, mergeProps} from 'vue';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';

export default {
  name: 'PfTextInput',

  props: {
    type: {
      type: String,
      default: 'text',
    },

    /** @model */
    value: {
      type: [String, Number],
      default: null,
    },

    /**
     * @values blur, input, change
     */
    autovalidate: {
      type: [Boolean, String],
      default: true,
      validator: v => typeof v === 'boolean' || ['blur', 'input', 'change'].includes(v),
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
      validator: v => [null, 'default', 'success', 'warning', 'error'].includes(v),
    },

    /** Trim text on left */
    leftTruncated: Boolean,

    /** @values calendar, clock, search */
    iconVariant: {
      type: String,
      default: '',
      validator: v => ['', 'calendar', 'clock', 'search'].includes(v),
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

  emits: ['input', 'blur', 'change', 'invalid', 'keyup', 'update:value', 'update:validated'],

  data() {
    return {
      innerValidated: 'default',
    };
  },

  computed: {
    effectiveValidated() {
      return this.validated === null ? this.innerValidated : this.validated;
    },
  },

  watch: {
    value() {
      this.innerValidated = 'default';
    },

    innerValidated(validity) {
      this.$emit('update:validated', validity);
    },
  },

  methods: {
    onInput(event) {
      this.$emit('input', event);
      this.$emit('update:value', event.target.value);
      if (this.autovalidate === 'input') {
        this.reportValidity();
      } else {
        this.innerValidated = 'default';
      }
    },

    onBlur(event) {
      this.$emit('blur', event);
      if (this.autovalidate === 'blur') {
        this.reportValidity(true);
      } else if (['input', 'change'].includes(this.autovalidate) && this.innerValidated === 'default') {
        this.checkValidity();
      }
    },

    onChange(event) {
      this.$emit('change', event);
      if (this.autovalidate === 'change') {
        this.reportValidity();
      }
    },

    onInvalid(event) {
      this.$emit('invalid', event);
      this.innerValidated = 'error';
    },

    onKeyUp(event) {
      this.$emit('keyup', event);
      if (event.key === 'Enter' && this.autovalidate) {
        this.reportValidity();
      }
    },

    checkValidity() {
      if (this.$el && this.$el.checkValidity()) {
        this.innerValidated = 'success';
        return true;
      }
      return false;
    },

    reportValidity(once) {
      const validatedWas = this.innerValidated;
      const valid = this.checkValidity();
      if (!once || (valid && validatedWas !== 'success') || (!valid && validatedWas !== 'error')) {
        this.$el && this.$el.reportValidity();
      }
      return valid;
    },
  },

  render() {
    let style = {};
    if (this.iconUrl) {
      style['background-image'] = `url('${this.iconUrl}')`;
    }
    if (this.iconDimensions) {
      style['background-size'] = this.iconDimensions;
    }

    const inputProps = {};
    if (this.value !== null) {
      inputProps.value = this.value;
    }

    return h('input', mergeProps({
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
      ...inputProps,
    }, this.$attrs));
  },
};
</script>
