import { computed, inject, reactive, ref, type InjectionKey } from 'vue';

export type FormValidator = (value: string) => string | null | undefined;

export interface FormContext {
  /** Record of values for all fieldIds */
  values: Record<string, string>;
  /** Record of errors for all fieldIds */
  errors: Record<string, string>;
  /** Record of touched state for all fieldIds */
  touched: Record<string, boolean>;
  /** Flag to determine the overall validity. True if the record of errors is empty. */
  readonly isValid: boolean;

  /** Get the value for a given fieldId */
  getValue(fieldId: string): string;
  /** Set the value for a given fieldId, running its validator */
  setValue(fieldId: string, value: string, triggerValidation?: boolean): void;
  /** Set multiple values within the managed record of values */
  setValues(values: Record<string, string> | ((values: Record<string, string>) => Record<string, string>)): void;

  /** Get the error message for a given fieldId */
  getError(fieldId: string): string;
  /** Set the error message for a given fieldId, removing it when empty */
  setError(fieldId: string, error: string | null | undefined): void;
  /** Set multiple errors within the managed record of errors */
  setErrors(errors: Record<string, string> | ((errors: Record<string, string>) => Record<string, string>)): void;

  /** Used to determine touched state for a given fieldId */
  isTouched(fieldId: string): boolean;
  /** Used to update the touched state for a given fieldId */
  setTouched(fieldId: string, touched: boolean): void;

  /** Triggers all fieldId-specific validators, returning the errors found */
  validate(): Record<string, string>;
  /** Set a validator for a specific fieldId */
  setValidator(fieldId: string, validate: FormValidator): void;
}

export const FormContextKey = Symbol('FormContextKey') as InjectionKey<FormContext>;

function omit<T>(record: Record<string, T>, key: string) {
  const { [key]: _, ...rest } = record;
  return rest;
}

/** Creates the reactive form state provided by pf-form-context-provider */
export function createFormContext(initialValues?: Record<string, string>): FormContext {
  const values = ref<Record<string, string>>({ ...initialValues });
  const errors = ref<Record<string, string>>({});
  const touched = ref<Record<string, boolean>>({});
  const validators = ref<Record<string, FormValidator>>({});

  const context = reactive({
    values,
    errors,
    touched,
    isValid: computed(() => Object.keys(errors.value).length === 0),

    getValue: (fieldId: string) => values.value[fieldId] ?? '',
    setValue(fieldId: string, value: string, triggerValidation = true) {
      if (values.value[fieldId] !== value) {
        values.value = { ...values.value, [fieldId]: value };
        if (triggerValidation) {
          validators.value[fieldId]?.(value);
        }
      }
    },
    setValues(newValues: Parameters<FormContext['setValues']>[0]) {
      values.value = typeof newValues === 'function' ? newValues(values.value) : newValues;
    },

    getError: (fieldId: string) => errors.value[fieldId] ?? '',
    setError(fieldId: string, error: string | null | undefined) {
      if (errors.value[fieldId] !== error) {
        errors.value = { ...omit(errors.value, fieldId), ...(error ? { [fieldId]: error } : {}) };
      }
    },
    setErrors(newErrors: Parameters<FormContext['setErrors']>[0]) {
      errors.value = typeof newErrors === 'function' ? newErrors(errors.value) : newErrors;
    },

    isTouched: (fieldId: string) => touched.value[fieldId] ?? false,
    setTouched(fieldId: string, isTouched: boolean) {
      if (touched.value[fieldId] !== isTouched) {
        touched.value = { ...omit(touched.value, fieldId), ...(isTouched ? { [fieldId]: true } : {}) };
      }
    },

    validate() {
      const result: Record<string, string> = {};
      for (const [fieldId, validateField] of Object.entries(validators.value)) {
        const error = validateField(values.value[fieldId] ?? '');
        if (error) {
          result[fieldId] = error;
        }
      }
      return result;
    },
    setValidator(fieldId: string, validate: FormValidator) {
      if (validators.value[fieldId] !== validate) {
        validators.value = { ...validators.value, [fieldId]: validate };
      }
    },
  });
  return context;
}

/** Returns the form state of the closest pf-form-context-provider */
export function useFormContext() {
  return inject(FormContextKey, undefined);
}
