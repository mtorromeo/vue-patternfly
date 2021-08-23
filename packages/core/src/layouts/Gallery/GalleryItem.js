import { h } from 'vue';
const PfGalleryItem = (props, { slots }) => h('div', props, slots.default());
Object.defineProperty(PfGalleryItem, 'name', { value: 'PfGalleryItem', writable: false });
export default PfGalleryItem;
