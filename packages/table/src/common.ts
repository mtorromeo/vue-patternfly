import type { ChildrenTrackerInjectionKey } from '@vue-patternfly/core';
import type PfTr from './Tr.vue';

export const TableTrKey = Symbol("TableTrKey") as ChildrenTrackerInjectionKey<InstanceType<typeof PfTr>>;
