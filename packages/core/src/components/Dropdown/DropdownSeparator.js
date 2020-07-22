import {h} from 'vue';
import PfDropdownItem from './DropdownItem';
import PfDivider from '../Divider';

export default {
  name: 'PfDropdownSeparator',

  provide: {
    dividerComponent: 'div',
  },

  render() {
    return h(PfDropdownItem, {
      role: 'separator',
      component: PfDivider,
    });
  },
};
