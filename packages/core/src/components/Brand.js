import styles from '@patternfly/react-styles/css/components/Page/page';

import { h } from 'vue';

export default {
  name: 'PfBrand',

  render() {
    return h('img', { class: styles.brand });
  },
};
