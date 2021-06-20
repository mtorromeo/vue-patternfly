import PfDivider from '../Divider';
import { h, mergeProps } from 'vue';

const PfNavItemSeparator = (props) => h(PfDivider, mergeProps({ component: 'li' }, props));
export default PfNavItemSeparator;
