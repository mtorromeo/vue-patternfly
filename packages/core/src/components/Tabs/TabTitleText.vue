<script>
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import { h } from 'vue';

export default {
  name: 'PfTabTitleText',

  render() {
    return h('span', { class: styles.tabsItemText }, this.$slots);
  },
};
</script>
