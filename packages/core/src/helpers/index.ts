export { default as FloatingUi } from './FloatingUi.vue';
export { default as FocusTrap } from './FocusTrap.vue';
export { default as OverridableWrapper } from './OverridableWrapper';
export { default as Void } from './Void';

import OverridableWrapper from "./OverridableWrapper";

export function isOverridableWrapper(el: any): el is InstanceType<typeof OverridableWrapper> {
  return typeof el === 'object' && el.$?.vnode?.type === OverridableWrapper;
}

export function resolveOverridableComponent<T>(node: InstanceType<typeof OverridableWrapper> | T | null): T {
  if (!isOverridableWrapper(node)) {
    return node;
  }
  return node.el;
}
