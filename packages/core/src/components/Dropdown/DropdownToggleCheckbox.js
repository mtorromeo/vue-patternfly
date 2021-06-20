import { h, mergeProps } from 'vue';
import { findChildrenVNodes } from '../../util';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

export default {
  name: 'PfDropdownToggleCheckbox',

  props: {
    checked: Boolean,
    ariaLabel: {
      type: String,
      default: 'Actions',
    },
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
                 ref: 'checkbox',
                 type: 'checkbox',
                 'aria-label': this.ariaLabel,
                 checked: this.checked,
                 onChange: e => this.$emit('change', e.target.checked),
               }, this.$attrs)),
               text,
             ],
    );
  },

  mounted() {
    if (this.$refs.checkbox) {
      this.$refs.checkbox.indeterminate = this.checked === null;
    }
  },

  watch: {
    checked() {
      if (this.$refs.checkbox) {
        this.$refs.checkbox.indeterminate = this.checked === null;
      }
    },
  },
};
