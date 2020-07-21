import {h} from 'vue';
import DropdownItem from './DropdownItem';
import Divider from '../Divider';

export default {
  name: 'DropdownSeparator',

  provide: {
    dividerComponent: 'div',
  },

  render() {
    return h(DropdownItem, {
      role: 'separator',
      component: Divider,
    });
  },
};
