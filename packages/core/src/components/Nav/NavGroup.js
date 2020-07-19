import _styles from '@patternfly/react-styles/css/components/Nav/nav';

// commonjs bug
let styles = _styles.default;

import {h, mergeProps} from 'vue';
import {getUniqueId} from '../../util';

const NavGroup = (props, {attrs, slots}) => h(
  'section',
  mergeProps({class: styles.navSection, ariaLabelledby: props.id}, attrs),
  [
    h('h2', {class: styles.navSectionTitle, id: props.id}, [props.title]),
    h('ul', [slots.default()]),
  ],
);

NavGroup.props = {
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
NavGroup.inheritAttrs = false;

export default NavGroup;
