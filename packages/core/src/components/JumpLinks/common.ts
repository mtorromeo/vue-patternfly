import type { InjectionKey, Ref } from 'vue';
import type { ComputedRefWithControl } from '@vueuse/core';
import type { ComponentExposed } from 'vue-component-type-helpers';
import type { ChildrenTrackerInjectionKey } from '../../use';
import type PfJumpLinksItem from './JumpLinksItem.vue';

export const JumpLinksKey = Symbol("FormSelectOptionsKey") as ChildrenTrackerInjectionKey<ComponentExposed<typeof PfJumpLinksItem>>;
export const JumpLinkInjectionKey = Symbol('JumpLinkInjectionKey') as InjectionKey<{
  offset: number;
  scrollPosition: Ref<number>;
  currentTargetPosition: Ref<number | undefined>;
  scrollableHTMLElement: ComputedRefWithControl<HTMLElement | undefined>;
}>;
