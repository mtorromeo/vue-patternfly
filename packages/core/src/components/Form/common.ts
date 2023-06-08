import type { ComputedRef } from "vue";
import type { ChildrenTrackerInjectionKey } from "../../use";
import type { InputValidateState } from "../../input";

export const FormGroupInputsKey = Symbol("FormGroupInputsKey") as ChildrenTrackerInjectionKey<ComputedRef<InputValidateState>>;
