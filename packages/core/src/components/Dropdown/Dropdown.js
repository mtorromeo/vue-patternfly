import _styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

// commonjs bug
let styles = _styles.default;

let currentId = 0;
import {h, mergeProps} from 'vue';
import PfDropdownToggle from './DropdownToggle';
import PfDropdownMenu from './DropdownMenu';

export default {
  name: 'PfDropdown',

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
    disabled: Boolean,
    open: Boolean,
    plain: Boolean,
    grouped: Boolean,
    splitButton: Boolean,
    active: Boolean,
    primary: Boolean,
    autoFocus: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      openedOnEnter: false,
    };
  },

  provide() {
    return {
      dropdown: this,
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
    const items = this.$slots.default ? this.$slots.default() : [];
    const ariaHasPopup = items.length > 0;

    const toggleProps = {
      id,
      ref: 'toggle',
      disabled: this.disabled,
      open: this.open,
      plain: this.plain,
      'aria-haspopup': ariaHasPopup,
      onEnter: () => this.openedOnEnter = true,
      'onUpdate:open': v => this.$emit('update:open', v),
    }

    if (this.$slots.toggle) {
      const toggles = this.$slots.toggle();
      for (const t of toggles) {
        t.props = mergeProps(t.props, toggleProps);
      }
      children.push(...toggles);
    } else {
      const toggle = h(PfDropdownToggle, mergeProps({
        splitButton: this.splitButton,
        active: this.active,
        primary: this.primary,
      }, toggleProps), {
        default: () => this.text,
      });
      children.push(toggle);
    }

    if (this.menuAppendTo === 'inline' && this.open) {
      const menu = h(PfDropdownMenu, {
        ref: 'menu',
        position: this.position,
        grouped: this.grouped,
        autoFocus: this.openedOnEnter && this.autoFocus,
      }, {
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
