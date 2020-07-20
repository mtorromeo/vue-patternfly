import _styles from '@patternfly/react-styles/css/components/Label/label';

// commonjs bug
let styles = _styles.default;

import {h} from 'vue';
import Btn from './Btn.vue';
import {TimesIcon} from '@vue-patternfly4/icons';

const colorStyles = {
  blue: styles.modifiers.blue,
  cyan: styles.modifiers.cyan,
  green: styles.modifiers.green,
  orange: styles.modifiers.orange,
  purple: styles.modifiers.purple,
  red: styles.modifiers.red,
  grey: '',
};

const Label = (props, {slots, emit}) => {
  let component = 'span';
  if (props.href) {
    component = 'a';
  } else if (props.to) {
    component = 'router-link';
  }

  return h('span', {
    class: [styles.label, colorStyles[props.color], {
      [styles.modifiers.outline]: props.outline || props.variant === 'outline',
    }],
  }, [
    h(component, {
      to: props.to,
      href: props.href,
      class: styles.labelContent,
    }, [
      slots.icon && h('span', {class: styles.labelIcon}, slots.icon()),
      slots.default(),
    ]),
    props.close && h(Btn, {
      type: 'btn',
      variant: 'plain',
      onClick: e => emit('close', e),
      'aria-label': 'label-close-button',
    }, h(TimesIcon)),
  ]);
};

Label.props = {
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
};

Label.inheritAttrs = false;

export default Label;
