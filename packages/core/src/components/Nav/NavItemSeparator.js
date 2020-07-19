import Divider from '../Divider';
import {h, mergeProps} from 'vue';

export default (props) => h(Divider, mergeProps({component: 'li'}, props));
