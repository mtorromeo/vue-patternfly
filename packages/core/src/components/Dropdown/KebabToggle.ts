import { defineComponent, h, mergeProps } from 'vue';
import PfToggle from './Toggle';
import EllipsisVerticalIcon from '@vue-patternfly/icons/dist/esm/icons/ellipsis-vertical-icon';

export default defineComponent({
  name: 'PfKebabToggle',

  props: {
    open: Boolean,
    ariaLabel: {
      type: String,
      default: 'Actions',
    },
  },

  methods: {
    toggle() {
      this.$emit('update:open', !this.open);
    },
  },

  render() {
    return h(PfToggle, mergeProps({
      open: this.open,
      'aria-label': this.ariaLabel,
      'onUpdate:open': (v: boolean) => this.$emit('update:open', v),
      onEnter: () => this.$emit('enter'),
    }, this.$attrs), {
      default: () => h(EllipsisVerticalIcon),
    });
  },
});
