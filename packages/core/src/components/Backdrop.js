import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';

import { h, mergeProps } from 'vue';

const PfBackdrop = (props, { slots, attrs }) => h('div', mergeProps({
  class: [styles.backdrop],
}, attrs), slots);

PfBackdrop.inheritAttrs = false;

export default PfBackdrop;
