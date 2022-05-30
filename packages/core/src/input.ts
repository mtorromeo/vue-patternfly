import { computed, ExtractPropTypes, getCurrentInstance, PropType, ref, watch } from "vue";
import { useManagedProp } from "./use";

export const inputProps = {
  /** @model */
  modelValue: {
    type: [String, Number],
    default: null as string,
  },

  /**
   * @values blur, input, change, enter
   */
  autoValidate: {
    type: String as PropType<'blur' | 'input' | 'change' | 'enter'>,
    default: 'change',
    validator: (v: any) => ['blur', 'input', 'change', 'enter'].includes(v),
  },

  /** Value to indicate if the textarea is modified to show that validation state.
   * If set to success, textarea will be modified to indicate valid state.
   * If set to error, textarea will be modified to indicate error state.
   * @values default, success, warning, error
   */
  validated: {
    type: String,
    default: null as string,
    validator: (v: any) => [null, 'default', 'success', 'warning', 'error'].includes(v),
  },
};

export function useInputValidation(props: ExtractPropTypes<typeof inputProps>) {
  const instance = getCurrentInstance()?.proxy;

  const innerValidated = ref('default');
  const validated = computed(() => props.validated === null ? innerValidated.value : props.validated);
  watch(validated, () => instance.$emit('update:validated', validated.value));

  const value = useManagedProp('modelValue', '');

  function checkValidity() {
    if (instance.$el && instance.$el.checkValidity()) {
      innerValidated.value = 'success';
      return true;
    }
    return false;
  }

  function reportValidity(once = false) {
    const validatedWas = innerValidated.value;
    const valid = checkValidity();
    if (!once || (valid && validatedWas !== 'success') || (!valid && validatedWas !== 'error')) {
      instance.$el && instance.$el.reportValidity();
    }
    return valid;
  }

  return {
    value,
    innerValidated,
    effectiveValidated: validated,

    checkValidity,
    reportValidity,

    onInput(event: InputEvent) {
      instance.$emit('input', event);
      value.value = (event.target as HTMLInputElement).value;
      if (props.autoValidate === 'input') {
        reportValidity();
      } else {
        innerValidated.value = 'default';
      }
    },

    onBlur(event: FocusEvent) {
      instance.$emit('blur', event);
      if (props.autoValidate === 'blur') {
        reportValidity(true);
      } else if (['input', 'change'].includes(props.autoValidate) && innerValidated.value === 'default') {
        checkValidity();
      }
    },

    onChange(event: Event) {
      instance.$emit('change', event);
      if (props.autoValidate === 'change') {
        reportValidity();
      }
    },

    onInvalid(event: Event) {
      instance.$emit('invalid', event);
      innerValidated.value = 'error';
    },

    onKeyUp(event: KeyboardEvent) {
      instance.$emit('keyup', event);
      if (event.key === 'Enter' && props.autoValidate) {
        reportValidity();
      }
    },

    setCustomValidity(error: string) {
      instance.$el.setCustomValidity(error);
    },
  };
}
