import styles from '@patternfly/react-styles/css/components/Divider/divider';

import { breakpointProp, classesFromBreakpointProps } from '../util';
import { h, inject } from 'vue';

export default {
  name: 'PfDivider',

  props: {
    ...breakpointProp('inset', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
    vertical: Boolean,
    component: {
      type: String,
      default: 'hr',
      validator: v => ['hr', 'li', 'div'].includes(v),
    },
  },

  render() {
    const attrs = {
      class: [
        styles.divider,
        classesFromBreakpointProps(this.$props, ['inset'], styles),
        {
          [styles.modifiers.vertical]: this.vertical,
        },
      ],
    };

    const component = inject('dividerComponent', this.component);

    if (component !== 'hr') {
      attrs.role = 'separator';
    }

    return h(component, attrs);
  },
};
