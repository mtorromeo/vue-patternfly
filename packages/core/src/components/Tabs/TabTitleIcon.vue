<script>
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import { h } from 'vue';

export default {
  name: 'PfTabTitleIcon',

  render() {
    return h('span', { class: styles.tabsItemIcon }, this.$slots);
  },
};
</script>
