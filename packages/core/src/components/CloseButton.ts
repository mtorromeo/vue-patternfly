import { defineComponent, h } from 'vue';
import PfButton from './Button.vue';
import TimesIcon from '@vue-patternfly/icons/dist/esm/icons/times-icon';

export default defineComponent({
  name: 'PfCloseButton',

  render() {
    return h(PfButton, {
      type: 'button',
      variant: 'plain',
      'aria-label': 'Close',
    }, {
      default: () => h(TimesIcon),
    });
  },
});
