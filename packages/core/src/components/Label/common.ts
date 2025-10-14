import type { ComponentExposed } from 'vue-component-type-helpers';
import type { ChildrenTrackerInjectionKey } from '../../use';
import PfLabel from './Label.vue';

export const LabelKey = Symbol("LabelKey") as ChildrenTrackerInjectionKey<ComponentExposed<typeof PfLabel>>;
