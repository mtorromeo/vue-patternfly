import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { h, mergeProps, resolveDynamicComponent } from 'vue';
import PfDropdownToggle from './DropdownToggle';
import PfDropdownMenu from './DropdownMenu';
import { breakpointProp, classesFromBreakpointProps } from '../../util.ts';
import { useManagedProp } from '../../use.ts';

let currentId = 0;

export default {
  name: 'PfDropdown',

  inject: {
    baseClass: {
      default: '',
    },
  },

  props: {
    id: {
      type: String,
      default: null,
    },
    baseComponent: {
      type: String,
      default: 'div',
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
    dropUp: Boolean,
    disabled: Boolean,
    open: {
      type: Boolean,
      default: null,
    },
    plain: Boolean,
    grouped: Boolean,
    splitButton: Boolean,
    active: Boolean,
    primary: Boolean,
    autoFocus: {
      type: Boolean,
      default: true,
    },
    ...breakpointProp('align', String, ['', 'left', 'right']),
  },

  emits: ['update:open'],

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

  setup() {
    return {
      managedOpen: useManagedProp('open', false),
    };
  },

  watch: {
    managedOpen: {
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
      open: this.managedOpen,
      plain: this.plain,
      'aria-haspopup': ariaHasPopup,
      onEnter: () => (this.openedOnEnter = true),
      'onUpdate:open': v => (this.managedOpen = v),
    };

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

    if (this.menuAppendTo === 'inline' && this.managedOpen) {
      const menu = h(PfDropdownMenu, {
        ref: 'menu',
        class: classesFromBreakpointProps(this.$props, ['align'], styles),
        position: this.position,
        grouped: this.grouped,
        autoFocus: this.openedOnEnter && this.autoFocus,
      }, {
        default: () => items,
      });
      children.push(menu);
    }

    return h(resolveDynamicComponent(this.baseComponent), {
      class: [
        this.baseClass || styles.dropdown,
        classesFromBreakpointProps(this.$props, ['align'], styles),
        {
          [styles.modifiers.top]: this.dropUp,
          [styles.modifiers.alignRight]: this.position === 'right',
          [styles.modifiers.expanded]: this.open,
        },
      ],
      open: this.managedOpen,
      position: this.position,
      'aria-labelledby': `${id}-toggle`,
    }, children);
  },
};
