import type { ComponentPublicInstance, ComputedRef } from "vue";
import type { ChildrenTrackerInjectionKey } from "../../use";
import type { InputValidateState } from "../../input";

export const FormInputsKey = Symbol("FormInputsKey") as ChildrenTrackerInjectionKey<ComponentPublicInstance>;
export const FormGroupInputsKey = Symbol("FormGroupInputsKey") as ChildrenTrackerInjectionKey<ComputedRef<InputValidateState>>;
