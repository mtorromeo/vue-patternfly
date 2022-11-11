import { type DefineComponent, defineComponent, type PropType, type Slot, type VNode } from "vue";

export default defineComponent({
  name: 'Void',

  inheritAttrs: false,

  props: {
    alter: {
      type: Function as PropType<(v: VNode[]) => VNode[]>,
      default: null,
    },

    useRef: {
      type: Object as PropType<DefineComponent>,
      default: null,
    },

    template: Boolean,
  },

  emits: {
    children: (c: VNode[]) => Array.isArray(c),
  },

  setup() {
    return {
      templateFn: null as Slot,
    };
  },

  render() {
    const retEmit = (children: VNode[]) => {
      this.$emit('children', children);
      return children;
    };

    if (this.template) {
      this.templateFn = this.$slots.default;
      return retEmit([]);
    }

    if (this.useRef && this.useRef.templateFn) {
      return retEmit(this.useRef.templateFn());
    }

    if (!this.$slots.default) {
      return retEmit([]);
    }

    let children = this.$slots.default();
    if (this.alter) {
      children = this.alter(children);
    }

    return retEmit(children);
  },
});
