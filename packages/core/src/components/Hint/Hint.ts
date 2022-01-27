import styles from '@patternfly/react-styles/css/components/Hint/hint';
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'PfHint',

  render() {
    const children = [];

    if (this.$slots.actions) {
      children.push(
        h('div', {
          class: styles.hintActions,
        }, {
          default: this.$slots.actions,
        }),
      );
    }

    if (this.$slots.default) {
      children.push(this.$slots.default());
    }

    return h('div', { class: styles.hint }, children);
  },
});
