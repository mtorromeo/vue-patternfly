import { h } from 'vue';
const PfLevelItem = (props, { slots }) => h('div', props, slots.default());
Object.defineProperty(PfLevelItem, 'name', { value: 'PfLevelItem', writable: false });
export default PfLevelItem;
