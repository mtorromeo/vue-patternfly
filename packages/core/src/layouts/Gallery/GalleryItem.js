import {h} from 'vue';
const GalleryItem = (props, {slots}) => h('div', props, [slots.default()]);
GalleryItem.inheritAttrs = false;
export default GalleryItem;
