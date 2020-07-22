import PfDivider from '../Divider';
import {h, mergeProps} from 'vue';

export default (props) => h(PfDivider, mergeProps({component: 'li'}, props));
