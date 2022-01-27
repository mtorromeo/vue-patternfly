import styles from '@patternfly/react-styles/css/components/Page/page';

import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'PfBrand',

  render() {
    return h('img', { class: styles.brand });
  },
});
