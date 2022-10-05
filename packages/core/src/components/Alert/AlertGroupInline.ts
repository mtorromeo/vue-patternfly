import styles from '@patternfly/react-styles/css/components/AlertGroup/alert-group';

import { defineComponent, h } from 'vue';
import { findChildrenVNodes } from '../../util';

export default defineComponent({
  name: 'PfAlertGroupInline',

  props: {
    toast: Boolean,
    liveRegion: Boolean,
    overflowMessage: String,
  },

  emits: {
    overflowClick: (e: MouseEvent | TouchEvent) => e !== undefined,
  },

  render() {
    return h('ul', {
      class: [styles.alertGroup, {
        [styles.modifiers.toast]: this.toast,
      }],
      'aria-live': this.liveRegion ? 'polite' : null,
      'aria-atomic': this.liveRegion ? false : null,
    }, {
      default: () => {
        let children = findChildrenVNodes(this.$slots.default());
        children = children.map((e, index) => h('li', { key: index }, e));

        if (this.overflowMessage) {
          const li = h('li', {}, [
            h('button', {
              class: styles.alertGroupOverflowButton,
              onClick: (e: MouseEvent | TouchEvent) => this.$emit('overflowClick', e),
            }, this.overflowMessage),
          ]);
          children.push(li);
        }

        return children;
      },
    });
  },
});
