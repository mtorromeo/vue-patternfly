<script>
export default {
  name: 'PfTab',

  props: {
    /** Content rendered in the tab title. */
    title: {
      type: String,
      default: null,
    },

    /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs component="nav"> should have an href. */
    href: {
      type: String,
      default: null,
    },

    hidden: Boolean,

    contentRef: {
      type: Object,
      default: null,
    },
  },

  render() {
    return this.$slots.default && !this.contentRef ? this.$slots.default() : [];
  },
};
</script>
