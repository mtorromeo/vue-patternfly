import { computed, getCurrentInstance, ref, unref, watch, type MaybeRef, type Ref, onBeforeUnmount, useModel, type MaybeRefOrGetter, toValue } from "vue";
import { onMounted } from "vue";

export type InputValidateState = 'success' | 'warning' | 'error' | 'default';
type InputElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
export type InputType = 'text' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'time' | 'url' | 'week';

export function useInputValidation({
  autoValidate,
  validated,
  inputElement,
  type,
  customCheckValidity,
}: {
  autoValidate: '' | 'blur' | 'input' | 'change' | 'enter' | boolean;
  validated?: Ref<InputValidateState | undefined>;
  inputElement?: MaybeRef<InputElement | null>;
  type?: MaybeRefOrGetter<InputType>;
  customCheckValidity?: () => boolean;
}) {
  const instance = getCurrentInstance()?.proxy;

  const innerValidated: Ref<InputValidateState> = ref('default');
  const effectiveValidated = computed(() => validated?.value ?? innerValidated.value);
  watch(effectiveValidated, () => instance?.$emit('update:validated', effectiveValidated.value));

  const [value, modifiers] = useModel((instance?.$props ?? {}) as { modelValue?: string | number | null }, 'modelValue', {
    get: (v) => v,
    set: (v) => {
      // force number cast unlike default number modifier
      if (modifiers.number || toValue(type) === 'number') {
        return Number(v) as any;
      }
      return String(v) as any;
    },
  });

  function getInput() {
    return unref(inputElement) ?? (instance?.$el as InputElement | undefined);
  }

  function setCustomValidity(error: string) {
    const input = getInput();
    if (input) {
      const proto = input.constructor.prototype as InputElement;
      proto.setCustomValidity.call(input, error);
    }
    if (!error) {
      innerValidated.value = 'default';
    }
  }

  function checkValidity() {
    if (customCheckValidity) {
      return customCheckValidity();
    }

    const input = getInput();
    if (input) {
      const proto = input.constructor.prototype as InputElement;
      if (proto.checkValidity.call(input)) {
        innerValidated.value = 'success';
        return true;
      }
    }

    return false;
  }

  function reportValidity(once = false) {
    const validatedWas = innerValidated.value;
    const valid = checkValidity();
    if (!once || (valid && validatedWas !== 'success') || (!valid && validatedWas !== 'error')) {
      const input = getInput();
      if (input) {
        const proto = input.constructor.prototype as InputElement;
        proto.reportValidity.call(input);
      }
    }
    return valid;
  }

  onMounted(() => {
    const input = getInput();
    if (input) {
      input.setCustomValidity = setCustomValidity;
      input.checkValidity = checkValidity;
      input.reportValidity = reportValidity;
    }
  });

  onBeforeUnmount(() => {
    const input = getInput();
    if (input) {
      const proto = input.constructor.prototype as InputElement;
      input.setCustomValidity = proto.setCustomValidity;
      input.checkValidity = proto.checkValidity;
      input.reportValidity = proto.reportValidity;
    }
  });

  return {
    value,
    innerValidated,
    effectiveValidated,

    checkValidity,
    reportValidity,
    setCustomValidity,

    onInput(event: InputEvent, value?: any) {
      instance?.$emit('input', event);
      if (!modifiers.lazy) {
        value.value = value ?? (event.target as InputElement).value;
      }
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

    onChange(event: Event, value?: any) {
      instance?.$emit('change', event);
      if (modifiers.lazy) {
        value.value = value ?? (event.target as InputElement).value;
      }
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
  };
}
