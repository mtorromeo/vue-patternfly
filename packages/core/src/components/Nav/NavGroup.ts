import styles from '@patternfly/react-styles/css/components/Nav/nav';

import { defineComponent, h } from 'vue';
import { getUniqueId } from '../../util';

export default defineComponent({
  name: 'PfNavGroup',

  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    id: {
      type: String,
      default: getUniqueId(),
    },
  },

  render() {
    return h(
      'section',
      { class: styles.navSection, ariaLabelledby: this.id },
      [
        h('h2', { class: styles.navSectionTitle, id: this.id }, [this.title]),
        h('ul', { class: styles.navList }, this.$slots),
      ],
    );
  },
});
