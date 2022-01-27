import { defineComponent, h } from 'vue';
import { useChildrenTracker } from '../../use';

export default defineComponent({
  name: 'PfFormSelectOption',

  props: {
    label: {
      type: String,
      default: '',
    },

    placeholder: Boolean,
  },

  setup() {
    useChildrenTracker();
  },

  render() {
    return h('option', {}, this.$slots.default ? this.$slots.default() : this.label);
  },
});
