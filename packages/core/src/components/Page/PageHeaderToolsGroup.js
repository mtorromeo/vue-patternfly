
import styles from '@patternfly/react-styles/css/components/Page/page';

import { breakpointProp, classesFromBreakpointProps } from '../../util.ts';
import { h } from 'vue';

export default {
  name: 'PfPageHeaderToolsGroup',

  props: {
    ...breakpointProp('visibility', String, ['', 'hidden', 'visible']),
  },

  render() {
    return h('div', {
      class: [
        styles.pageHeaderToolsGroup,
        classesFromBreakpointProps(this.$props, ['visibility'], styles, { short: true }),
      ],
    }, this.$slots);
  },
};
