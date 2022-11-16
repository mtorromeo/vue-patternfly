<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Select/select';

import { defineComponent, h, inject, mergeProps } from 'vue';
import { SelectKey } from './Select.vue';

export default defineComponent({
  name: 'PfSelectGroup',

  props: {
    label: {
      type: String,
      default: '',
    },
  },

  setup() {
    return {
      select: inject(SelectKey),
    };
  },

  render() {
    let children;
    if (this.select?.variant === 'checkbox') {
      children = this.$slots.default?.();
    } else {
      children = h('ul', { role: 'listbox' }, this.$slots.default?.());
    }

    return h('div', mergeProps({
      class: styles.selectMenuGroup,
    }, this.$attrs), [
      h('div', { class: styles.selectMenuGroupTitle }, this.label),
      children,
    ]);
  },
});
</script>
