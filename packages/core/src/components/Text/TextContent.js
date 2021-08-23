import styles from '@patternfly/react-styles/css/components/Page/page';

import { h } from 'vue';

export default {
  name: 'PfTextContent',

  render() {
    return h('div', { class: styles.content }, this.$slots);
  },
};
