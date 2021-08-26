<script>
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';

import { h, provide } from 'vue';
import { findChildrenVNodes } from '../../util';
import { useManagedProp } from '../../use';

export default {
  name: 'PfSimpleList',

  props: {
    /**
     * value of the selected item
     * @model
     */
    modelValue: {
      default: null,
      validator: v => true,
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
    provide('listValue', value);
    return {
      value,
    };
  },

  render() {
    const children = this.$slots.default ? findChildrenVNodes(this.$slots.default()) : [];
    const grouped = children.length === 0 ? false : children[0].type.name === 'PfSimpleListGroup';

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
};
</script>
