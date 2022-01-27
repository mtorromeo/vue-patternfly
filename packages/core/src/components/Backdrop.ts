import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';

import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'PfBackdrop',

  render() {
    return h('div', { class: styles.backdrop }, this.$slots);
  },
});
