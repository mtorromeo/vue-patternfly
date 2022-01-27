import styles from '@patternfly/react-styles/css/components/AlertGroup/alert-group';

import { defineComponent, h } from 'vue';
import { findChildrenVNodes } from '../../util';

export default defineComponent({
  name: 'PfAlertGroupInline',

  props: {
    toast: Boolean,
    liveRegion: Boolean,
  },

  render() {
    return h('ul', {
      class: [styles.alertGroup, {
        [styles.modifiers.toast]: this.toast,
      }],
      'aria-live': this.liveRegion ? 'polite' : null,
      'aria-atomic': this.liveRegion ? false : null,
    }, {
      default: () => {
        const children = findChildrenVNodes(this.$slots.default());
        return children.map((e, index) => h('li', { key: index }, e));
      },
    });
  },
});
