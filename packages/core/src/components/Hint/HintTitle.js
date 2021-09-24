import styles from '@patternfly/react-styles/css/components/Hint/hint';
import { h } from 'vue';

export default {
  name: 'PfHintTitle',

  render() {
    return h('div', { class: styles.hintTitle }, this.$slots);
  },
};
