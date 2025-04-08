import type { ComponentPublicInstance } from "vue";
import type { ChildrenTrackerInjectionKey } from "../../use";

export const FormInputsKey = Symbol("FormInputsKey") as ChildrenTrackerInjectionKey<ComponentPublicInstance>;
