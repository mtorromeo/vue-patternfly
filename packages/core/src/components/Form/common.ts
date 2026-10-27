import {
  computed,
  inject,
  onBeforeUnmount,
  type ComponentPublicInstance,
  type ComputedRef,
  type InjectionKey,
  type Ref,
} from 'vue';
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

export interface FormGroupField {
  /** Own id of the field, used by the label when set */
  ownId: () => string | undefined;
  /** Whether the field can be named by the label of the group, false when it has a label of its own */
  eligible: () => boolean;
}

export interface FormGroupFieldProvide {
  /**
   * Registers a field of the form group. The label of the group is linked to the first eligible field, if the group
   * has a label and is not a group or radiogroup. Returns the id of the group while the field is the linked one.
   */
  register: (field: FormGroupField) => ComputedRef<string | undefined>;
  unregister: (field: FormGroupField) => void;
}

export const FormGroupFieldKey = Symbol('FormGroupFieldKey') as InjectionKey<FormGroupFieldProvide>;

/**
 * Registers the field in the surrounding form group, whose label is linked to the first eligible field.
 * The returned id is the own id of the field, or the one of the form group while the field is linked.
 */
export function useFormGroupFieldId(ownId: () => string | undefined, eligible: () => boolean = () => true) {
  const group = inject(FormGroupFieldKey, undefined);
  const field = { ownId, eligible };
  const groupId = group?.register(field);
  if (group) {
    onBeforeUnmount(() => group.unregister(field));
  }
  return {
    id: computed(() => ownId() ?? groupId?.value),
    linked: computed(() => groupId?.value !== undefined),
  };
}
