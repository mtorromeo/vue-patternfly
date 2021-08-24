import { h } from 'vue';

export default {
  name: 'PfFormAlert',

  render() {
    return h('form', { class: 'pf-c-form__alert' }, this.$slots);
  },
};
