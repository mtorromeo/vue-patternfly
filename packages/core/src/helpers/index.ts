export { default as FloatingUi } from './FloatingUi.vue';
export { default as FocusTrap } from './FocusTrap.vue';
export { default as OverridableWrapper } from './OverridableWrapper.vue';
export { default as PassThrough } from './PassThrough.vue';
export { default as Sort } from './Sort.vue';
export { default as SortBy } from './SortBy.vue';
export { default as Wrap } from './Wrap.vue';

import type { ComponentPublicInstance } from 'vue';
import OverridableWrapper from "./OverridableWrapper.vue";

export function isOverridableWrapper(el: any): el is InstanceType<typeof OverridableWrapper> {
  return typeof el === 'object' && el.$?.vnode?.type === OverridableWrapper;
}

export function resolveOverridableComponent<T extends Element | ComponentPublicInstance | undefined | null>(node: InstanceType<typeof OverridableWrapper> | T): T {
  if (!isOverridableWrapper(node)) {
    return node;
  }
  return node.el as T;
}
