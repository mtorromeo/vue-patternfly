import styles from '@patternfly/react-styles/css/components/Hint/hint';
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'PfHintTitle',

  render() {
    return h('div', { class: styles.hintTitle }, this.$slots);
  },
});
