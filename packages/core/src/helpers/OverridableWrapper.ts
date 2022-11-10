import { Component, DefineComponent, defineComponent, h, PropType, resolveDynamicComponent, VNode, VNodeTypes } from "vue";
import { findChildrenVNodes } from "../util";

function vnodeTypeIsComponent(vtype: VNodeTypes): vtype is Component {
  return typeof vtype === 'object' && !(vtype as any).type;
}

function makeFilterFunction(filter: string | VNodeTypes | (string | VNodeTypes)[] | ((vnode: VNode) => boolean) | null, fallback = true): (vnode: VNode) => boolean {
  if (typeof filter === 'function') {
    return filter as any;
  }

  let typeList: (string | VNodeTypes)[] = [];
  if (filter && !Array.isArray(filter)) {
    typeList = [filter];
  }

  if (!typeList.length) {
    return () => fallback;
  }

  return (vnode: VNode) => typeList.includes(vnode.type);
}

export default defineComponent({
  name: 'OverridableWrapper',

  inheritAttrs: false,

  props: {
    /**
     * Defines the component to look for in children.
     * If there is already a matching component the children are left untouched, otherwise a new component of this type is created and children matching the optional childrenFilter are nested inside it.
     */
    component: {
      type: [String, Object] as PropType<string | VNodeTypes>,
      default: null,
    },

    /**
     * Defined a filter or a set of component types to select the children to nest inside the wrapping component.
     * Other children are left as sibling of the wrapping component.
     */
    include: {
      type: [String, Object, Array, Function] as PropType<string | VNodeTypes | (string | VNodeTypes)[] | ((vnode: VNode) => boolean)>,
      default: null,
    },

    /**
     * Defined a filter or a set of component types to select the children to nest inside the wrapping component.
     * Other children are left as sibling of the wrapping component.
     */
    exclude: {
      type: [String, Object, Array, Function] as PropType<string | VNodeTypes | (string | VNodeTypes)[] | ((vnode: VNode) => boolean)>,
      default: null,
    },
  },

  render() {
    if (!this.$slots.default) {
      return;
    }

    if (!this.$slots.default) {
      return [];
    }

    const children = this.$slots.default();

    if (findChildrenVNodes(children).find(vnode => {
      if (typeof this.component === 'string') {
        let tag = null;
        if (typeof vnode.type === 'string') {
          tag = vnode.type;
        } else if (vnodeTypeIsComponent(vnode.type)) {
          tag = vnode.type.name;
        }
        return tag === this.component;
      } else {
        return this.component === vnode.type;
      }
    })) {
      return children;
    }

    const includeFn = makeFilterFunction(this.include);
    const excludeFn = makeFilterFunction(this.exclude, false);

    let firstMatch: number | null = null;
    const outsideChildren: VNode[] = [];
    const insideChildren: VNode[] = [];
    for (const [index, child] of findChildrenVNodes(children).entries()) {
      if (includeFn(child) && !excludeFn(child)) {
        firstMatch ??= index;
        insideChildren.push(child);
      } else {
        outsideChildren.push(child);
      }
    }

    const component = resolveDynamicComponent(this.component) as DefineComponent;
    outsideChildren.splice(firstMatch ?? 0, 0, h(component, this.$attrs, () => insideChildren));

    return outsideChildren;
  },
});
