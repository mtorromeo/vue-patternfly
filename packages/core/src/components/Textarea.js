import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import heightToken from '@patternfly/react-tokens/dist/esm/c_form_control_textarea_Height';

import { h } from 'vue';
import InputValidationMixin from '../mixins/InputValidationMixin';
import { useChildrenTracker, useManagedProp } from '../use.ts';
import { canUseDOM } from '../util.ts';

export default {
  name: 'PfTextarea',

  mixins: [InputValidationMixin],

  props: {
    required: Boolean,

    /** Flag to modify height based on contents. */
    autoResize: Boolean,

    /**
     * Sets the orientation to limit the resize to
     * @values horizontal, vertical, both
     */
    resizeOrientation: {
      type: String,
      default: 'both',
      validator: v => ['horizontal', 'vertical', 'both'].includes(v),
    },

    /** Specifies a regular expression that the value should match */
    pattern: {
      type: [String, RegExp],
      default: '',
    },
  },

  emits: ['input', 'blur', 'change', 'invalid', 'keyup', 'update:modelValue', 'update:validated'],

  computed: {
    regexPattern() {
      if (this.pattern instanceof RegExp) {
        return this.pattern;
      }
      return new RegExp(`^(?:${this.pattern})$`, 'us');
    },
  },

  setup() {
    useChildrenTracker();
    return {
      value: useManagedProp('modelValue', ''),
    };
  },

  render() {
    return h('textarea', {
      class: [styles.formControl, {
        [styles.modifiers[this.resizeOrientation]]: this.resizeOrientation !== 'both',
        [styles.modifiers.success]: this.validated === 'success',
        [styles.modifiers.warning]: this.validated === 'warning',
      }],
      required: this.required,
      'aria-invalid': this.effectiveValidated === 'error',
      onChange: this.handleChange,
      onInput: this.onInput,
      onBlur: this.onBlur,
      onInvalid: this.onInvalid,
      onKeyUp: this.onKeyUp,
    }, this.value);
  },

  methods: {
    handleChange(event) {
      // // https://gomakethings.com/automatically-expand-a-textarea-as-the-user-types-using-vanilla-javascript/
      const field = event.currentTarget;
      if (this.autoResize && canUseDOM) {
        field.style.setProperty(heightToken.name, 'inherit');
        const computed = window.getComputedStyle(field);
        // Calculate the height
        const height =
          parseInt(computed.getPropertyValue('border-top-width')) +
          parseInt(computed.getPropertyValue('padding-top')) +
          field.scrollHeight +
          parseInt(computed.getPropertyValue('padding-bottom')) +
          parseInt(computed.getPropertyValue('border-bottom-width'));
        field.style.setProperty(heightToken.name, `${height}px`);
      }
      this.onChange(event);
    },

    checkValidity() {
      if (this.pattern && this.value) {
        let error = !this.regexPattern.test(this.value);
        if (error) {
          error = 'Please match the format requested.';
          if (this.$el.title) {
            error += `\n${this.$el.title}`;
          }
          this.setCustomValidity(error);
          return false;
        }

        this.setCustomValidity('');
        this.innerValidated = 'success';
        return true;
      }

      return InputValidationMixin.methods.checkValidity.call(this);
    },
  },
};
