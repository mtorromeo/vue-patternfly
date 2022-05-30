import { defineComponent, h, mergeProps, Ref, ref } from 'vue';
import { findChildrenVNodes } from '../../util';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

export default defineComponent({
  name: 'PfDropdownToggleCheckbox',

  props: {
    checked: Boolean,
    ariaLabel: {
      type: String,
      default: 'Actions',
    },
  },

  setup() {
    const checkbox: Ref<HTMLInputElement | null> = ref(null);
    return {
      checkbox,
    };
  },

  watch: {
    checked() {
      if (this.checkbox) {
        this.checkbox.indeterminate = this.checked === null;
      }
    },
  },

  mounted() {
    if (this.checkbox) {
      this.checkbox.indeterminate = this.checked === null;
    }
  },

  render() {
    const children = this.$slots.default ? findChildrenVNodes(this.$slots.default()) : [];

    let text = null;
    if (children.length) {
      text = h('span', {
        class: styles.dropdownToggleText,
        'aria-hidden': true,
      }, children);
    }

    return h('label',
             {
               class: styles.dropdownToggleCheck,
             }, [
               h('input', mergeProps({
                 ref: el => (this.checkbox = el as HTMLInputElement),
                 type: 'checkbox',
                 'aria-label': this.ariaLabel,
                 checked: this.checked,
                 onChange: (e: Event) => {
                   if (e.target instanceof HTMLInputElement) {
                     this.$emit('change', e.target.checked);
                   }
                 },
               }, this.$attrs)),
               text,
             ],
    );
  },
});
