import type { MaybeRef } from "@vueuse/shared";
import { computed, getCurrentInstance, type PropType, ref, unref, watch } from "vue";
import { useManagedProp } from "./use";

export const inputProps = {
  /** @model */
  modelValue: {
    type: [String, Number],
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
    type: String as PropType<'success' | 'warning' | 'error' | 'default' | null>,
    validator: (v: any) => [null, 'default', 'success', 'warning', 'error'].includes(v),
  },
};

export function useInputValidation({
  autoValidate,
  validated,
  inputElement,
}: {
  autoValidate: '' | 'blur' | 'input' | 'change' | 'enter' | boolean;
  validated?: 'success' | 'warning' | 'error' | 'default' | null;
  inputElement?: MaybeRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
}) {
  const instance = getCurrentInstance()?.proxy;

  const innerValidated = ref('default');
  const effectiveValidated = computed(() => validated ?? innerValidated.value);
  watch(effectiveValidated, () => instance?.$emit('update:validated', effectiveValidated.value));

  const value = useManagedProp('modelValue', '');

  function checkValidity() {
    if ((unref(inputElement) ?? instance?.$el)?.checkValidity()) {
      innerValidated.value = 'success';
      return true;
    }
    return false;
  }

  function reportValidity(once = false) {
    const validatedWas = innerValidated.value;
    const valid = checkValidity();
    if (!once || (valid && validatedWas !== 'success') || (!valid && validatedWas !== 'error')) {
      (unref(inputElement) ?? instance?.$el)?.reportValidity();
    }
    return valid;
  }

  return {
    value,
    innerValidated,
    effectiveValidated,

    checkValidity,
    reportValidity,

    onInput(event: InputEvent) {
      instance?.$emit('input', event);
      value.value = (event.target as HTMLInputElement).value;
      if (autoValidate === 'input') {
        reportValidity();
      } else {
        innerValidated.value = 'default';
      }
    },

    onBlur(event: FocusEvent) {
      instance?.$emit('blur', event);
      if (autoValidate === 'blur') {
        reportValidity(true);
      } else if (typeof autoValidate === 'string' && ['input', 'change'].includes(autoValidate) && innerValidated.value === 'default') {
        checkValidity();
      }
    },

    onChange(event: Event) {
      instance?.$emit('change', event);
      if (autoValidate === 'change') {
        reportValidity();
      }
    },

    onInvalid(event: Event) {
      instance?.$emit('invalid', event);
      innerValidated.value = 'error';
    },

    onKeyUp(event: KeyboardEvent) {
      instance?.$emit('keyup', event);
      if (event.key === 'Enter' && (autoValidate === true || autoValidate === '')) {
        reportValidity();
      }
    },

    setCustomValidity(error: string) {
      (unref(inputElement) ?? instance?.$el).setCustomValidity(error);
    },
  };
}
