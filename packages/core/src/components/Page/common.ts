import type { ComponentPublicInstance, ComputedRef, InjectionKey, Ref, WritableComputedRef } from 'vue';
import type { ChildrenTrackerInjectionKey } from '../../use';

/** Whether the page manages the open state of its sidebar */
export const PageManagedSidebarKey = Symbol('PageManagedSidebarKey') as InjectionKey<Readonly<Ref<boolean>>>;
/** The open state of the sidebar managed by the page */
export const PageSidebarOpenKey = Symbol('PageSidebarOpenKey') as InjectionKey<WritableComputedRef<boolean>>;
/** Whether the page is narrower than the xl breakpoint, where the sidebar overlays the content */
export const PageMobileKey = Symbol('PageMobileKey') as InjectionKey<Readonly<Ref<boolean>>>;
export const PageSidebarsKey = Symbol('PageSidebarsKey') as ChildrenTrackerInjectionKey<ComponentPublicInstance>;

/** Whether the enclosing sidebar is open, used by its content to leave the tab order while collapsed */
export const SidebarOpenKey = Symbol('SidebarOpenKey') as InjectionKey<ComputedRef<boolean> | boolean>;
