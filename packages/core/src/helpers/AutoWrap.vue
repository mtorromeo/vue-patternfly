<template>
  <render />
</template>

<script lang="ts" setup>
import { h, useAttrs, ref, resolveDynamicComponent, type VNode, type VNodeTypes, type Ref, type Teleport } from "vue";
import { findChildrenVNodes } from "../util";
import type { ComponentPublicInstance } from "vue";
import type { Component } from "vue";

// Teleport is already in VNodeTypes but it is explicitly defined to avoid a runtime warning (bug)
// where NodeFilter would not be allowed to be an object
type NodeFilter = VNodeTypes[] | VNodeTypes | InstanceType<typeof Teleport> | ((vnode: VNode) => boolean);

function makeFilterFunction(filter: NodeFilter | undefined, fallback = true): (vnode: VNode) => boolean {
  if (typeof filter === 'function') {
    return filter as any;
  }

  let typeList: VNodeTypes[] = [];
  if (filter) {
    typeList = Array.isArray(filter) ? filter : [filter];
  }

  if (!typeList.length) {
    return () => fallback;
  }

  return (vnode: VNode) => typeList.includes(vnode.type);
}

defineOptions({
  inheritAttrs: false,
});

interface Props {
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

  /** Flag to wrap each child element individually, even when consecutives */
  each?: boolean;

  /** Flag to always create the wrapping component, even if empty */
  force?: boolean;

  options?: {
    component?: VNodeTypes;
    include?: NodeFilter;
    exclude?: NodeFilter;
    each?: boolean;
    force?: boolean;
  }[];
}

const props = defineProps<Props>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const attrs = useAttrs();
const el: Ref<Element | ComponentPublicInstance | null> = ref(null);

function renderGroup(childrenNodes: VNode[], component: VNodeTypes | undefined, include: NodeFilter | undefined, exclude: NodeFilter | undefined, each: boolean, force: boolean) {
  if (!component) {
    return childrenNodes;
  }

  const includeFn = makeFilterFunction(include);
  const excludeFn = makeFilterFunction(exclude, false);

  const c = resolveDynamicComponent(component) as Component;
  const nodeProps = {...attrs, ref: (node: Element | ComponentPublicInstance | null) => (el.value = node)};

  const wrap = (c: Component, vnodes: VNode | VNode[]) => h(c, nodeProps, typeof component === 'string' ? vnodes : () => vnodes);

  const children: VNode[] = [];
  let consecutives: VNode[] = [];

  for (const child of childrenNodes) {
    if (component !== child.type && includeFn(child) && !excludeFn(child)) {
      if (each) {
        children.push(wrap(c, child))
      } else {
        consecutives.push(child);
      }
    } else {
      if (consecutives.length) {
        children.push(wrap(c, consecutives));
        consecutives = [];
      }

      children.push(child);
    }
  }

  if (consecutives.length) {
    children.push(wrap(c, consecutives));
  }

  if (!force && !children.length) {
    return null;
  }

  return children;
}

function render() {
  if (!slots.default) {
    return;
  }

  const children = slots.default();
  let childrenNodes = findChildrenVNodes(children);

  const groups = props.options ?? [{
    component: props.component,
    include: props.include,
    exclude: props.exclude,
    each: props.each,
    force: props.force,
  }];

  for (const group of groups) {
    childrenNodes = renderGroup(
      childrenNodes,
      group.component ?? props.component,
      group.include ?? props.include,
      group.exclude ?? props.exclude,
      group.each ?? props.each,
      group.force ?? props.force,
    ) ?? childrenNodes;
  }

  return childrenNodes;
}

defineExpose({
  el,
});
</script>
