import PfDivider from '../Divider';
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'PfNavItemSeparator',

  render() {
    return h(PfDivider, { component: 'li' });
  },
});
