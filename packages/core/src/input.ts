import { computed, getCurrentInstance, ref, unref, watch, type MaybeRef, type Ref } from "vue";
import { useManagedProp } from "./use";

export type InputValidateState = 'success' | 'warning' | 'error' | 'default';

export function useInputValidation({
  autoValidate,
  validated,
  inputElement,
  customCheckValidity,
}: {
  autoValidate: '' | 'blur' | 'input' | 'change' | 'enter' | boolean;
  validated?: InputValidateState | null;
  inputElement?: MaybeRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
  customCheckValidity?: () => boolean;
}) {
  const instance = getCurrentInstance()?.proxy;

  const innerValidated: Ref<InputValidateState> = ref('default');
  const effectiveValidated = computed(() => validated ?? innerValidated.value);
  watch(effectiveValidated, () => instance?.$emit('update:validated', effectiveValidated.value));

  const value = useManagedProp('modelValue', '');

  function checkValidity() {
    if (customCheckValidity) {
      return customCheckValidity();
    }

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
      (unref(inputElement) ?? instance?.$el)?.setCustomValidity(error);
    },
  };
}
