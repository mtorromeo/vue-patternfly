import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'PfFormAlert',

  render() {
    return h('form', { class: 'pf-c-form__alert' }, this.$slots);
  },
});
