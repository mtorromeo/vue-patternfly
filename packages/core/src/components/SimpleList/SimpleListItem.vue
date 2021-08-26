<script>
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';

import { h, mergeProps } from 'vue';

export default {
  name: 'PfSimpleListItem',

  inject: {
    listValue: {
      default: null,
    },
  },

  props: {
    /**
     * Identifier fot the item. If the SimpleList has a name it will be used as the form field value.
     */
    value: {
      type: String,
      default: null,
    },

    /** Component type of the SimpleList item */
    component: {
      type: String,
      default: 'button',
      validator: v => ['button', 'a'].includes(v),
    },

    /** Additional classes added to the SimpleList <a> or <button> */
    componentClass: {
      type: [String, Array, Object],
      default: '',
    },

    /** Additional attrs added to the SimpleList <a> or <button> */
    componentAttrs: {
      type: Object,
      default: () => ({}),
    },

    /** Type of button SimpleList item */
    type: {
      type: String,
      default: 'button',
      validator: v => ['button', 'a'].includes(v),
    },

    /** Default hyperlink location */
    href: {
      type: String,
      default: '',
    },
  },

  emits: ['click'],

  render() {
    const current = this.listValue.value === (this.value === null ? this : this.value);

    const itemProps = {};
    if (this.component === 'button') {
      itemProps.type = this.type;
    } else {
      itemProps.href = this.href;
      itemProps.tabIndex = 0;
    };

    return h(
      'li', {
        class: styles.simpleListSection,
      }, h(
        this.component,
        mergeProps({
          class: [styles.simpleListItemLink, this.componentClass, {
            [styles.modifiers.current]: current,
          }],
          onClick: (e) => {
            this.$emit('click', e);
            this.listValue.value = this.value === null ? this : this.value;
          },
          'aria-hidden': true,
          ...itemProps,
        }, this.componentAttrs),
        this.$slots,
      ),
    );
  },
};
</script>
