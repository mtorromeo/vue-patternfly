import styles from '@patternfly/react-styles/css/components/AlertGroup/alert-group';

import {h, mergeProps} from 'vue';
import {findChildrenVNodes} from '../../util';

const PfAlertGroupInline = (props, {slots, attrs}) => h('ul',
mergeProps({
  class: [styles.alertGroup, {
    [styles.modifiers.toast]: props.toast,
  }],
}, attrs), {
  default() {
    const children = findChildrenVNodes(slots.default());
    return children.map((e, index) => h('li', {key: index}, e));
  },
});

PfAlertGroupInline.props = {
  toast: Boolean,
};

PfAlertGroupInline.inheritAttrs = false;

export default PfAlertGroupInline;
