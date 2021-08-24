import styles from '@patternfly/react-styles/css/components/Chip/chip';

import TimesIcon from '@vue-patternfly/icons/dist/esm/icons/times-icon';
import PfButton from '../Button.vue';
import PfTooltip from '../Tooltip/Tooltip.vue';
import { getUniqueId } from '../../util';
import { h, mergeProps, ref } from 'vue';
import { useElementOverflow } from '../../use';

export default {
  name: 'PfChip',

  inheritAttrs: false,

  props: {
    readonly: Boolean,
    overflow: Boolean,
    component: {
      type: String,
      default: 'div',
    },
    tooltipPosition: {
      type: String,
      default: 'top',
      validator: v => ['auto', 'top', 'bottom', 'left', 'right'].includes(v),
    },
    closeBtnAriaLabel: {
      type: String,
      default: 'close',
    },
  },

  setup() {
    const textRef = ref(null);

    return {
      textRef,
      textOverflowing: useElementOverflow(textRef),
    };
  },

  render() {
    const renderOverflow = () => {
      return h(this.component, {
        onClick: e => this.$emit('click', e),
        class: [styles.chip, styles.modifiers.overflow],
        ...(this.component === 'button' ? { type: 'button' } : {}),
      }, h('span', { class: styles.chipText }, this.$slots.default && this.$slots.default()));
    };

    const renderSimple = id => {
      const children = [
        h('span', { ref: 'textRef', class: styles.chipText, id }, this.$slots.default && this.$slots.default()),
      ];

      if (!this.readonly) {
        children.push(h(PfButton, {
          onClick: e => this.$emit('click', e),
          variant: 'plain',
          'aria-label': this.closeBtnAriaLabel,
          id: `remove_${id}`,
          'aria-labelledby': `remove_${id} ${id}`,
        }, {
          default: () => h(TimesIcon, { 'aria-hidden': true }),
        }));
      }

      const props = mergeProps(this.$attrs, {
        class: styles.chip,
      });
      delete props.onClick;

      const chip = h(this.component, props, children);

      if (!this.textOverflowing) {
        return chip;
      }
      return h(PfTooltip, { position: this.tooltipPosition }, {
        content: () => this.$slots.default && this.$slots.default(),
        default: () => chip,
      });
    };

    return this.overflow ? renderOverflow() : renderSimple(this.$attrs.id || getUniqueId());
  },
};
