import {h, mergeProps} from 'vue';
import Toggle from './Toggle';
import EllipsisVIcon from '@vue-patternfly4/icons/dist/esm/icons/ellipsis-v-icon';

export default {
  name: 'KebabToggle',

  props: {
    open: Boolean,
    ariaLabel: {
      type: String,
      default: 'Actions',
    },
  },

  render() {
    return h(Toggle, mergeProps({
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
