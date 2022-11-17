import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import heightToken from '@patternfly/react-tokens/dist/esm/c_form_control_textarea_Height';

import { computed, defineComponent, getCurrentInstance, h, type PropType } from 'vue';
import { inputProps, useInputValidation } from '../input';
import { useChildrenTracker } from '../use';
import { canUseDOM } from '../util';
import { FormGroupInputsKey } from './Form/common';

export default defineComponent({
  name: 'PfTextarea',

  props: {
    required: Boolean,

    /** Flag to modify height based on contents. */
    autoResize: Boolean,

    /**
     * Sets the orientation to limit the resize to
     * @values horizontal, vertical, both
     */
    resizeOrientation: {
      type: String as PropType<'horizontal' | 'vertical' | 'both'>,
      default: 'both',
      validator: (v: any) => ['horizontal', 'vertical', 'both'].includes(v),
    },

    /** Specifies a regular expression that the value should match */
    pattern: {
      type: [String, RegExp],
      default: '',
    },

    ...inputProps,
  },

  emits: ['input', 'blur', 'change', 'invalid', 'keyup', 'update:modelValue', 'update:validated'],

  setup(props) {
    useChildrenTracker(FormGroupInputsKey);

    const { checkValidity, value, ...inputValidationData } = useInputValidation(props);

    const regexPattern = computed(() => {
      if (props.pattern instanceof RegExp) {
        return props.pattern;
      }
      return new RegExp(`^(?:${props.pattern})$`, 'us');
    });

    return {
      value,

      checkValidity() {
        if (props.pattern && value.value) {
          const $el: HTMLInputElement | null = getCurrentInstance()?.proxy?.$el;

          const error = !regexPattern.value.test(value.value);
          if (error) {
            let error = 'Please match the format requested.';
            if ($el?.title) {
              error += `\n${$el.title}`;
            }
            inputValidationData.setCustomValidity(error);
            return false;
          }

          inputValidationData.setCustomValidity('');
          inputValidationData.innerValidated.value = 'success';
          return true;
        }

        return checkValidity();
      },

      ...inputValidationData,
    };
  },

  methods: {
    handleChange(event: Event) {
      // // https://gomakethings.com/automatically-expand-a-textarea-as-the-user-types-using-vanilla-javascript/
      const field = event.currentTarget;
      if (this.autoResize && canUseDOM && field instanceof HTMLElement) {
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
  },

  render() {
    return h('textarea', {
      class: [styles.formControl, {
        [styles.modifiers.resizeVertical]: this.resizeOrientation === 'vertical',
        [styles.modifiers.resizeHorizontal]: this.resizeOrientation === 'horizontal',
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
});
