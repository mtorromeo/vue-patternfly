<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'PfTabTitleIcon',

  render() {
    return h('span', { class: styles.tabsItemIcon }, this.$slots);
  },
});
</script>
