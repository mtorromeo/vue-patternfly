import type { InjectionKey, Ref } from 'vue';

export const HelperTextComponentKey = Symbol('HelperTextComponentKey') as InjectionKey<Readonly<Ref<'div' | 'ul'>>>;
