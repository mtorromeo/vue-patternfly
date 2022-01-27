import styles from '@patternfly/react-styles/css/components/Breadcrumb/breadcrumb';
import { defineComponent, h } from 'vue';
import { findChildrenVNodes } from '../../util';

export default defineComponent({
  name: 'PfBreadcrumb',

  props: {
    ariaLabel: {
      type: String,
      default: 'Breadcrumb',
    },
  },

  render() {
    return h(
      'nav',
      {
        class: styles.breadcrumb,
        ariaLabel: this.ariaLabel,
      },
      h('ol', {
        class: styles.breadcrumbList,
      }, {
        default: () => {
          const children = findChildrenVNodes(this.$slots.default());
          return children.map((e, index) => {
            e.props.showDivider = index > 0;
            return e;
          });
        },
      }),
    );
  },
});
