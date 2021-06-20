import { h, mergeProps } from 'vue';
import PfButton from './Button.vue';
import TimesIcon from '@vue-patternfly/icons/dist/esm/icons/times-icon';

const PfCloseButton = (props, { attrs }) => h(PfButton, mergeProps({
  type: 'button',
  variant: 'plain',
  'aria-label': 'label-close-button',
}, attrs), {
  default: () => h(TimesIcon),
});

PfCloseButton.inheritAttrs = false;

export default PfCloseButton;
