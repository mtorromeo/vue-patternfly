
import styles from '@patternfly/react-styles/css/components/Page/page';

import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'PfPageHeaderTools',

  render() {
    return h('div', { class: styles.pageHeaderTools }, this.$slots);
  },
});
