import type { ComponentExposed } from 'vue-component-type-helpers';
import type { ChildrenTrackerInjectionKey } from '../../use';
import type PfFormSelectOption from './FormSelectOption.vue';

export const FormSelectOptionsKey = Symbol('FormSelectOptionsKey') as ChildrenTrackerInjectionKey<
  ComponentExposed<typeof PfFormSelectOption>
>;
