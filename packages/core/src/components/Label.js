import styles from '@patternfly/react-styles/css/components/Label/label';

import {h, mergeProps} from 'vue';
import PfCloseButton from './CloseButton';

const colorStyles = {
  blue: styles.modifiers.blue,
  cyan: styles.modifiers.cyan,
  green: styles.modifiers.green,
  orange: styles.modifiers.orange,
  purple: styles.modifiers.purple,
  red: styles.modifiers.red,
  grey: '',
};

const PfLabel = (props, {slots, attrs, emit}) => {
  let component = 'span';
  if (props.href) {
    component = 'a';
  } else if (props.to) {
    component = 'router-link';
  }

  let children = slots.default();
  if (props.truncated) {
    children = h('span', {class: styles.labelText}, children);
  }

  return h('span', mergeProps({
    class: [styles.label, colorStyles[props.color], {
      [styles.modifiers.outline]: props.outline || props.variant === 'outline',
    }],
  }, attrs), [
    h(component, {
      to: props.to,
      href: props.href,
      class: styles.labelContent,
    }, [
      slots.icon && h('span', {class: styles.labelIcon}, slots.icon()),
      children,
    ]),
    props.close && h(PfCloseButton, {
      onClick: e => emit('close', e),
    }),
  ]);
};

PfLabel.props = {
  color: {
    type: String,
    default: 'grey',
    validator: v => typeof colorStyles[v] !== 'undefined',
  },
  variant: {
    type: String,
    default: 'filled',
    validator: v => ['outline', 'filled'].includes(v),
  },
  to: {
    type: [String, Object],
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  outline: Boolean,
  close: Boolean,
  truncated: Boolean,
};

PfLabel.inheritAttrs = false;

export default PfLabel;
