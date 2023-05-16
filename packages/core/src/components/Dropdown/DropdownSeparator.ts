import { defineComponent, h, provide } from 'vue';
import PfDropdownItem from './DropdownItem.vue';
import PfDivider from '../Divider.vue';
import { DividerComponentKey } from './Dropdown';

export default defineComponent({
  name: 'PfDropdownSeparator',

  setup() {
    provide(DividerComponentKey, 'div');
  },

  render() {
    return h(PfDropdownItem, {
      role: 'separator',
      component: PfDivider,
    });
  },
});
