import styles from '@patternfly/react-styles/css/components/Nav/nav';

import { h, mergeProps } from 'vue';
import { getUniqueId } from '../../util';

const PfNavGroup = (props, { attrs, slots }) => h(
  'section',
  mergeProps({ class: styles.navSection, ariaLabelledby: props.id }, attrs),
  [
    h('h2', { class: styles.navSectionTitle, id: props.id }, [props.title]),
    h('ul', slots.default()),
  ],
);

PfNavGroup.props = {
  title: {
    type: String,
    default: '',
    required: true,
  },
  id: {
    type: String,
    default: getUniqueId(),
  },
};
PfNavGroup.inheritAttrs = false;

export default PfNavGroup;
