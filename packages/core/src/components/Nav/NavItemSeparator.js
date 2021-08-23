import PfDivider from '../Divider';
import { h } from 'vue';

export default {
  name: 'PfNavItemSeparator',

  render() {
    return h(PfDivider, { component: 'li' });
  },
};
