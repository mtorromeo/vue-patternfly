import styles from '@patternfly/react-styles/css/components/AlertGroup/alert-group';

import { h } from 'vue';
import { findChildrenVNodes } from '../../util';

export default {
  name: 'PfAlertGroupInline',

  props: {
    toast: Boolean,
  },

  render() {
    return h('ul', {
      class: [styles.alertGroup, {
        [styles.modifiers.toast]: this.toast,
      }],
    }, {
      default: () => {
        const children = findChildrenVNodes(this.$slots.default());
        return children.map((e, index) => h('li', { key: index }, e));
      },
    });
  },
};
