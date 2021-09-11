<script>
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/TabContent/tab-content';

export default {
  name: 'PfTabContent',

  inject: {
    variant: {
      default: null,
    },
  },

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
};
</script>
