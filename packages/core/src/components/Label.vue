<script>
import styles from '@patternfly/react-styles/css/components/Label/label';

import { h, mergeProps, ref, resolveDynamicComponent } from 'vue';
import { useElementOverflow } from '../use.ts';
import PfCloseButton from './CloseButton';
import PfTooltip from './Tooltip/Tooltip.vue';

const colorStyles = {
  blue: styles.modifiers.blue,
  cyan: styles.modifiers.cyan,
  green: styles.modifiers.green,
  orange: styles.modifiers.orange,
  purple: styles.modifiers.purple,
  red: styles.modifiers.red,
  grey: '',
};

export default {
  name: 'PfLabel',

  props: {
    /** The color of the label outline/fill */
    color: {
      type: String,
      default: 'grey',
      validator: v => typeof colorStyles[v] !== 'undefined',
    },
    variant: {
      type: String,
      default: 'filled',
      validator: v => ['outline', 'filled'].includes(v),
    },
    tooltipPosition: {
      type: String,
      default: 'top',
      validator: v => ['auto', 'top', 'bottom', 'left', 'right'].includes(v),
    },
    to: {
      type: [String, Object],
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    outline: Boolean,
    close: Boolean,
    truncated: Boolean,
  },

  emits: ['close'],

  setup() {
    const textRef = ref(null);

    return {
      textRef,
      textOverflowing: useElementOverflow(textRef),
    };
  },

  methods: {
    onClose(e) {
      this.$emit('close', e);
    },
  },

  render() {
    let component = 'span';
    if (this.href) {
      component = 'a';
    } else if (this.to) {
      component = 'router-link';
    }

    const children = this.$slots.default();
    let content = children;
    if (this.truncated) {
      content = h('span', { ref: 'textRef', class: styles.labelText }, children);
    }

    const labelChild = h(resolveDynamicComponent(component), {
      to: this.to,
      href: this.href,
      class: styles.labelContent,
    }, [
      this.$slots.icon && h('span', { class: styles.labelIcon }, this.$slots.icon()),
      content,
    ]);

    let tooltip = null;
    if (this.textOverflowing) {
      tooltip = h(PfTooltip, { position: this.tooltipPosition }, {
        default: () => labelChild,
        content: () => children,
      });
    }

    return h('span', mergeProps({
      class: [styles.label, colorStyles[this.color], {
        [styles.modifiers.outline]: this.outline || this.variant === 'outline',
      }],
    }, this.$attrs), [
      tooltip || labelChild,
      this.close && h(PfCloseButton, {
        onClick: this.onClose,
      }),
    ]);
  },
};
</script>
