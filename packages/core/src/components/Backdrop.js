import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';

import { h } from 'vue';

export default {
  name: 'PfBackdrop',

  render() {
    return h('div', { class: styles.backdrop }, this.$slots);
  },
};
