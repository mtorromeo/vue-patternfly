import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    /** @model */
    modelValue: {
      type: [String, Number] as PropType<string | number | undefined | null>,
      default: null,
    },

    /**
     * @values blur, input, change, enter
     */
    autoValidate: {
      type: [String, Boolean] as PropType<'' | 'blur' | 'input' | 'change' | 'enter' | boolean>,
      default: 'change',
      validator: (v: any) => typeof v === 'boolean' || ['', 'blur', 'input', 'change', 'enter'].includes(v),
    },

    /** Value to indicate if the textarea is modified to show that validation state.
     * If set to success, textarea will be modified to indicate valid state.
     * If set to error, textarea will be modified to indicate error state.
     * @values default, success, warning, error
     */
    validated: {
      type: String,
      default: null,
      validator: (v: any) => [null, 'default', 'success', 'warning', 'error'].includes(v),
    },
  },

  data() {
    return {
      innerValidated: 'default',
      value: '', // redeclare in concrete component
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
    onInput(event: Event) {
      if (!(event.target instanceof HTMLInputElement)) {
        return;
      }

      this.$emit('input', event);
      this.value = event.target.value;
      if (this.autoValidate === 'input') {
        this.reportValidity();
      } else {
        this.innerValidated = 'default';
      }
    },

    onBlur(event: Event) {
      this.$emit('blur', event);
      if (typeof this.autoValidate !== 'string') {
        return;
      }
      if (this.autoValidate === 'blur') {
        this.reportValidity(true);
      } else if (['input', 'change'].includes(this.autoValidate) && this.innerValidated === 'default') {
        this.checkValidity();
      }
    },

    onChange(event: Event) {
      this.$emit('change', event);
      if (this.autoValidate === 'change') {
        this.reportValidity();
      }
    },

    onInvalid(event: Event) {
      this.$emit('invalid', event);
      this.innerValidated = 'error';
    },

    onKeyUp(event: KeyboardEvent) {
      this.$emit('keyup', event);
      if (event.key === 'Enter' && this.autoValidate) {
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

    reportValidity(once = false) {
      const validatedWas = this.innerValidated;
      const valid = this.checkValidity();
      if (!once || (valid && validatedWas !== 'success') || (!valid && validatedWas !== 'error')) {
        this.$el && this.$el.reportValidity();
      }
      return valid;
    },

    setCustomValidity(error: string) {
      this.$el.setCustomValidity(error);
    },
  },
});
