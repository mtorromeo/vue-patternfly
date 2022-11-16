import { defineComponent, h } from 'vue';
import { useChildrenTracker } from '../../use';
import { FormSelectOptionsKey } from './FormSelect';

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
    useChildrenTracker(FormSelectOptionsKey);
  },

  render() {
    return h('option', {}, this.$slots.default ? this.$slots.default() : this.label);
  },
});
