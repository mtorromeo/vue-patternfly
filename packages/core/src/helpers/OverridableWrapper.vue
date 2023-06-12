<template>
  <render />
</template>

<script lang="ts" setup>
import { type DefineComponent, h, useAttrs, ref, resolveDynamicComponent, type VNode, type VNodeTypes, type Ref, type Teleport } from "vue";
import { findChildrenVNodes, vnodeTypeIsComponent } from "../util";
import type { ComponentPublicInstance } from "vue";

// Teleport is already in VNodeTypes but it is explicitly defined to avoid a runtime warning (bug)
// where NodeFilter would not be allowed to be an object
type NodeFilter = VNodeTypes[] | VNodeTypes | InstanceType<typeof Teleport> | ((vnode: VNode) => boolean);

function makeFilterFunction(filter: NodeFilter | undefined, fallback = true): (vnode: VNode) => boolean {
  if (typeof filter === 'function') {
    return filter as any;
  }

  let typeList: VNodeTypes[] = [];
  if (filter && !Array.isArray(filter)) {
    typeList = [filter];
  }

  if (!typeList.length) {
    return () => fallback;
  }

  return (vnode: VNode) => typeList.includes(vnode.type);
}

defineOptions({
  inheritAttrs: false,
});

export interface Props {
  /**
   * Defines the component to look for in children.
   * If there is already a matching component the children are left untouched, otherwise a new component of this type is created and children matching the optional include/exclude filters are nested inside it.
   */
  component?: VNodeTypes;

  /**
   * Defined a filter or a set of component types to select the children to nest inside the wrapping component.
   * Other children are left as sibling of the wrapping component.
   */
  include?: NodeFilter;

  /**
   * Defined a filter or a set of component types to select the children to nest inside the wrapping component.
   * Other children are left as sibling of the wrapping component.
   */
  exclude?: NodeFilter;

  /** Flag to always create the wrapping component */
  force?: boolean;
}

const props = defineProps<Props>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const attrs = useAttrs();
const el: Ref<Element | ComponentPublicInstance | null> = ref(null);

function render() {
  if (!slots.default) {
    return;
  }

  const children = slots.default();
  const childrenNodes = findChildrenVNodes(children);

  if (!props.force && childrenNodes.find(vnode => {
    if (typeof props.component === 'string') {
      let tag = null;
      if (typeof vnode.type === 'string') {
        tag = vnode.type;
      } else if (vnodeTypeIsComponent(vnode.type)) {
        tag = vnode.type.name || vnode.type.__name;
      }
      return tag === props.component;
    } else {
      return props.component === vnode.type;
    }
  })) {
    return children;
  }

  const includeFn = makeFilterFunction(props.include);
  const excludeFn = makeFilterFunction(props.exclude, false);

  let firstMatch: number | null = null;
  const outsideChildren: VNode[] = [];
  const insideChildren: VNode[] = [];
  for (const [index, child] of childrenNodes.entries()) {
    if (includeFn(child) && !excludeFn(child)) {
      firstMatch ??= index;
      insideChildren.push(child);
    } else {
      outsideChildren.push(child);
    }
  }

  const component = resolveDynamicComponent(props.component) as DefineComponent;
  const defaultSlot = typeof component === 'string' ? insideChildren : () => insideChildren;

  const nodeProps = {...attrs, ref: (node: Element | ComponentPublicInstance | null) => (el.value = node)};
  outsideChildren.splice(firstMatch ?? 0, 0, h(component, nodeProps, defaultSlot));

  return outsideChildren;
}

defineExpose({
  el,
});
</script>
