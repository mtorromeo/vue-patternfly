<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Label/label';

import { type DefineComponent, defineComponent, h, mergeProps, type PropType, ref, resolveDynamicComponent } from 'vue';
import { useElementOverflow } from '../use';
import PfCloseButton from './CloseButton';
import PfTooltip, { TooltipPosition } from './Tooltip/Tooltip.vue';

const colorStyles = {
  blue: styles.modifiers.blue,
  cyan: styles.modifiers.cyan,
  green: styles.modifiers.green,
  orange: styles.modifiers.orange,
  purple: styles.modifiers.purple,
  red: styles.modifiers.red,
  grey: '',
};

export default defineComponent({
  name: 'PfLabel',

  props: {
    /** The color of the label outline/fill */
    color: {
      type: String as PropType<keyof typeof colorStyles>,
      default: 'grey',
      validator: (v: any) => v in colorStyles,
    },
    variant: {
      type: String as PropType<'outline' | 'filled'>,
      default: 'filled',
      validator: (v: any) => ['outline', 'filled'].includes(v),
    },
    tooltipPosition: {
      type: String as PropType<TooltipPosition>,
      default: 'top',
      validator: (v: any) => v && v in TooltipPosition,
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
    onClose(e: Event) {
      this.$emit('close', e);
    },
  },

  render() {
    let component: string | DefineComponent = 'span';
    if (this.href) {
      component = 'a';
    } else if (this.to) {
      component = 'router-link';
    }

    const children = this.$slots.default();
    let content = children;
    if (this.truncated) {
      content = [h('span', { ref: 'textRef', class: styles.labelText }, children)];
    }

    component = resolveDynamicComponent(component) as DefineComponent;
    const labelChild = h(component, {
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
});
</script>
