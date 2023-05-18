export { default as FloatingUi } from './FloatingUi.vue';
export { default as FocusTrap } from './FocusTrap.vue';
export { default as OverridableWrapper } from './OverridableWrapper';
export { default as PassThrough } from './PassThrough';
export { default as Sort } from './Sort.vue';
export { default as SortBy } from './SortBy.vue';
export { default as Wrap } from './Wrap.vue';

import OverridableWrapper from "./OverridableWrapper";

export function isOverridableWrapper(el: any): el is InstanceType<typeof OverridableWrapper> {
  return typeof el === 'object' && el.$?.vnode?.type === OverridableWrapper;
}

export function resolveOverridableComponent<T>(node: InstanceType<typeof OverridableWrapper> | T | undefined): T | undefined {
  if (!isOverridableWrapper(node)) {
    return node;
  }
  return node.el as T;
}
