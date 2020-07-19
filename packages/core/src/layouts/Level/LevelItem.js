import {h} from 'vue';
const LevelItem = (props, {slots}) => h('div', props, [slots.default()]);
LevelItem.inheritAttrs = false;
export default LevelItem;
