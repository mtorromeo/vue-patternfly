import {h, mergeProps} from 'vue';
import PfButton from '../Button.vue';

const PfAlertActionLink = (props, {slots, attrs}) => h(PfButton, mergeProps({
  type: 'button',
  variant: 'link',
  inline: true,
}, attrs), slots);

PfAlertActionLink.inheritAttrs = false;

export default PfAlertActionLink;
