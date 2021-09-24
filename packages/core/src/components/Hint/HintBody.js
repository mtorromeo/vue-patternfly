import styles from '@patternfly/react-styles/css/components/Hint/hint';
import { h } from 'vue';

export default {
  name: 'PfHintBody',

  render() {
    return h('div', { class: styles.hintBody }, this.$slots);
  },
};
