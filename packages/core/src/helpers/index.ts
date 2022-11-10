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
