export { default as FloatingUi } from './FloatingUi.vue';
export { default as FocusTrap } from './FocusTrap.vue';
export { default as AutoWrap } from './AutoWrap.vue';
export { default as PassThrough } from './PassThrough.vue';
export { default as Sort } from './Sort.vue';
export { default as SortBy } from './SortBy.vue';
export { default as TeleportCopy } from './TeleportCopy.vue';
export { default as Wrap } from './Wrap.vue';

import type { ComponentPublicInstance } from 'vue';
import AutoWrap from "./AutoWrap.vue";
import type { ComponentExposed } from 'vue-component-type-helpers';

export function isOverridableWrapper(el: any): el is ComponentExposed<typeof AutoWrap> {
  return typeof el === 'object' && el.$?.vnode?.type === AutoWrap;
}

export function resolveOverridableComponent<T extends Element | ComponentPublicInstance | undefined | null>(node: ComponentExposed<typeof AutoWrap> | T): T {
  if (!isOverridableWrapper(node)) {
    return node;
  }
  return node.el as T;
}
