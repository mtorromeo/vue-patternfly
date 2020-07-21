import _styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

// commonjs bug
let styles = _styles.default;

let currentId = 0;
import {h} from 'vue';
import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';

export default {
  name: 'Dropdown',

  props: {
    id: {
      type: String,
      default: null,
    },
    baseComponent: {
      type: String,
      default: 'div',
    },
    direction: {
      type: String,
      default: 'down',
      validator: v => ['up', 'down'].includes(v),
    },
    position: {
      type: String,
      default: 'left',
      validator: v => ['left', 'right'].includes(v),
    },
    menuAppendTo: {
      type: [String, Object],
      default: 'inline',
      validator: v => typeof v !== 'string' || ['inline', 'parent'].includes(v),
    },
    text: {
      type: String,
      default: '',
    },
    open: Boolean,
    plain: Boolean,
    grouped: Boolean,
    autoFocus: Boolean,
  },

  data() {
    return {
      openedOnEnter: false,
    };
  },

  watch: {
    open: {
      handler(value) {
        if (!value) {
          this.openedOnEnter = false;
        }
      },
      immediate: true,
    },
  },

  render() {
    const id = this.id || `pf-dropdown-toggle-id-${currentId++}`;

    const children = [];
    let items = [];
    if (this.$slots.default) {
      items.push(...this.$slots.default());
    }

    const ariaHasPopup = items.length > 0;

    if (this.$slots.toggle) {
      children.push(...this.$slots.toggle());
    } else {
      const toggle = h(DropdownToggle, {
        id,
        open: this.open,
        plain: this.plain,
        'aria-haspopup': ariaHasPopup,
        onEnter: () => this.openedOnEnter = true,
        'onUpdate:open': v => this.$emit('update:open', v),
      }, {
        default: () => this.text,
      });
      children.push(toggle);
    }

    if (this.menuAppendTo === 'inline' && this.open) {
      const menu = h(DropdownMenu, {}, {
        default: () => items,
      });
      children.push(menu);
    }

    return h(this.baseComponent, {
      class: [styles.dropdown, {
        [styles.modifiers.top]: this.direction === 'up',
        [styles.modifiers.alignRight]: this.position === 'right',
        [styles.modifiers.expanded]: this.open,
      }],
      open: this.open,
      position: this.position,
      'aria-labelledby': `${id}-toggle`,
    }, children);
  },
};
