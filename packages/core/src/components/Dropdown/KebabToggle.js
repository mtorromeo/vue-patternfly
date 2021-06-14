import {h, mergeProps} from 'vue';
import PfToggle from './Toggle';
import EllipsisVIcon from '@vue-patternfly/icons/dist/esm/icons/ellipsis-v-icon';

export default {
  name: 'PfKebabToggle',

  props: {
    open: Boolean,
    ariaLabel: {
      type: String,
      default: 'Actions',
    },
  },

  render() {
    return h(PfToggle, mergeProps({
      open: this.open,
      'aria-label': this.ariaLabel,
      'onUpdate:open': v => this.$emit('update:open', v),
      onEnter: () => this.$emit('enter'),
    }, this.$attrs), {
      default: () => h(EllipsisVIcon),
    });
  },

  methods: {
    toggle() {
      this.$emit('update:open', !this.open);
    },
  },
};
