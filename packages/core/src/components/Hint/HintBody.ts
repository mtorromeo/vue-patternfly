import styles from '@patternfly/react-styles/css/components/Hint/hint';
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'PfHintBody',

  render() {
    return h('div', { class: styles.hintBody }, this.$slots);
  },
});
