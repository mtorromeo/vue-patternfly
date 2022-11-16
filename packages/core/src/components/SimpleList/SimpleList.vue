<script lang="ts">
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';

import { type Component, defineComponent, h, type InjectionKey, provide, type WritableComputedRef } from 'vue';
import { findChildrenVNodes } from '../../util';
import { useManagedProp } from '../../use';

export const SimpleListValueKey = Symbol('SimpleListValueKey') as InjectionKey<WritableComputedRef<any>>;

export default defineComponent({
  name: 'PfSimpleList',

  props: {
    /**
     * value of the selected item
     * @model
     */
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: null,
    },

    /** Form element name */
    name: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue'],

  setup() {
    const value = useManagedProp('modelValue', null);
    provide(SimpleListValueKey, value);
    return {
      value,
    };
  },

  render() {
    const children = this.$slots.default ? findChildrenVNodes(this.$slots.default()) : [];
    const grouped = children.length === 0 ? false : typeof children[0].type === 'object' && (children[0].type as Component).name === 'PfSimpleListGroup';

    let content = children;
    if (!grouped) {
      content = [h('ul', content)];
    }
    if (this.name) {
      content.unshift(h('input', { type: 'hidden', name: this.name, value: this.value }));
    }

    return h('div', {
      class: styles.simpleList,
      role: grouped ? 'list' : undefined,
    }, content);
  },
});
</script>
