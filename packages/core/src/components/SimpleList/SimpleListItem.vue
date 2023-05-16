<script lang="ts">
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';

import { defineComponent, h, inject, mergeProps } from 'vue';
import { SimpleListValueKey } from './SimpleList.vue';
import { isDefined } from '@vueuse/shared';

export default defineComponent({
  name: 'PfSimpleListItem',

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
      validator: (v: any) => ['button', 'a'].includes(v),
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
      validator: (v: any) => ['button', 'a'].includes(v),
    },

    /** Default hyperlink location */
    href: {
      type: String,
      default: '',
    },
  },

  emits: ['click'],

  setup() {
    return {
      listValue: inject(SimpleListValueKey, undefined),
    };
  },

  render() {
    const current = this.listValue === (this.value === null ? this : this.value);

    const itemProps: {
      type?: string;
      href?: string;
      tabIndex?: number;
    } = {};

    if (this.component === 'button') {
      itemProps.type = this.type;
    } else {
      itemProps.href = this.href;
      itemProps.tabIndex = 0;
    }

    return h(
      'li', {
        class: styles.simpleListSection,
      }, h(
        this.component,
        mergeProps({
          class: [styles.simpleListItemLink, this.componentClass, {
            [styles.modifiers.current]: current,
          }],
          onClick: (e: MouseEvent | TouchEvent) => {
            this.$emit('click', e);
            if (isDefined(this.listValue)) {
              this.listValue = this.value === null ? this : this.value as any;
            }
          },
          'aria-hidden': true,
          ...itemProps,
        }, this.componentAttrs),
        this.$slots,
      ),
    );
  },
});
</script>
