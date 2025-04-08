import type { ChildrenTrackerInjectionKey } from '../../use';
import PfLabel from './Label.vue';

export const LabelKey = Symbol("LabelKey") as ChildrenTrackerInjectionKey<InstanceType<typeof PfLabel>>;
