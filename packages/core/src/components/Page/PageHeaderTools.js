
import styles from '@patternfly/react-styles/css/components/Page/page';

import { h } from 'vue';

export default {
  name: 'PfPageHeaderTools',

  render() {
    return h('div', { class: styles.pageHeaderTools }, this.$slots);
  },
};
