export default {
  name: 'Void',

  inheritAttrs: false,

  props: {
    alter: {
      type: Function,
      default: null,
    },

    useRef: {
      type: Object,
      default: null,
    },

    template: Boolean,
  },

  render() {
    if (this.template) {
      this.templateFn = this.$slots.default;
      return [];
    }

    if (this.useRef && this.useRef.templateFn) {
      return this.useRef.templateFn();
    }

    if (!this.$slots.default) {
      return;
    }

    if (!this.$slots.default) {
      return [];
    }

    let children = this.$slots.default();
    if (this.alter) {
      children = this.alter(children);
    }

    return children;
  },
};
