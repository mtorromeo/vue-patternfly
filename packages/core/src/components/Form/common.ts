import type { ComponentPublicInstance, ComputedRef, InjectionKey, Ref } from 'vue';
import type { ChildrenTrackerInjectionKey } from '../../use';
import type { InputValidateState } from '../../input';

export const FormInputsKey = Symbol('FormInputsKey') as ChildrenTrackerInjectionKey<ComponentPublicInstance>;
export const FormGroupInputsKey = Symbol('FormGroupInputsKey') as ChildrenTrackerInjectionKey<
  ComputedRef<InputValidateState>
>;

export interface FormFieldGroupProvide {
  /** Id of the header title, labelling the group and its toggle */
  titleId: Ref<string | undefined>;
}

export const FormFieldGroupKey = Symbol('FormFieldGroupKey') as InjectionKey<FormFieldGroupProvide>;
