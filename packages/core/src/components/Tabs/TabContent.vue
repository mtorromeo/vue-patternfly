<script lang="ts">
import { defineComponent, h, inject } from 'vue';
import styles from '@patternfly/react-styles/css/components/TabContent/tab-content';
import { TabsVariantKey } from './Tabs.vue';

export default defineComponent({
  name: 'PfTabContent',

  props: {
    activeKey: {
      type: [Number, String],
      default: null,
    },

    eventKey: {
      type: [Number, String],
      default: null,
    },
  },

  setup() {
    return {
      variant: inject(TabsVariantKey),
    };
  },

  render() {
    return h(
      'section',
      {
        class: ['pf-c-tab-content', {
          [styles.modifiers.light_300]: this.variant === 'light300',
        }],
        role: 'tabpanel',
        hidden: this.eventKey !== this.activeKey,
        tabindex: '0',
      },
      this.$slots,
    );
  },
});
</script>
