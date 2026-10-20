import type { ComputedRef, InjectionKey } from 'vue';
import type { InputValidateState } from '../../input';

export type TextInputGroupProvide = {
  disabled: ComputedRef<boolean>;
  validated: ComputedRef<InputValidateState | undefined>;
};

export const TextInputGroupKey = Symbol('TextInputGroupKey') as InjectionKey<TextInputGroupProvide>;
