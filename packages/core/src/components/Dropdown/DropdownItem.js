import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

import {h, mergeProps} from 'vue';
import {useChildrenTracker} from '../../use';

export default {
  name: 'PfDropdownItem',

  inheritAttrs: false,

  inject: {
    keyDown: 'keyDown',
    dropdown: {
      default: null,
    },
    itemClass: {
      default: styles.dropdownMenuItem,
    },
    disabledClass: {
      default: styles.modifiers.disabled,
    },
  },

  props: {
    hovered: Boolean,
    component: {
      type: [String, Object, Function],
      default: 'a',
    },
    role: {
      type: String,
      default: 'menuitem',
    },
    disabled: Boolean,
    plain: Boolean,
    tooltipProps: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
      default: -1,
    },
    tabindex: {
      type: [Number, String],
      default: -1,
    },
    enterTriggersArrowDown: Boolean,
    styleChildren: Boolean,
    description: {
      type: String,
      default: null,
    },
    autoFocus: Boolean,
  },

  setup() {
    return {
      menuTracker: useChildrenTracker(),
    };
  },

  mounted() {
    this.menuTracker.register(this);
    if (this.autoFocus) {
      this.$nextTick(() => this.focus());
    }
  },

  beforeUnmount() {
    this.menuTracker.unregister(this);
  },

  render() {
    let classes = [];
    if (this.$slots.icon) {
      classes.push(styles.modifiers.icon);
    }

    if (this.role !== 'separator') {
      classes.push(
        this.itemClass,
        {
          [this.disabledClass]: this.disabled,
          [styles.modifiers.text]: this.plain,
          [styles.modifiers.description]: this.description,
        },
      );
    }

    let children = this.$slots.default ? this.$slots.default() : [];

    // const renderWithTooltip = childNode =>
    //   tooltip ? (
    //     <Tooltip content={tooltip} {...tooltipProps}>
    //       {childNode}
    //     </Tooltip>
    //   ) : (
    //     childNode
    //   );

    // const renderClonedComponent = element =>
    //   React.cloneElement(element, {
    //     ...(styleChildren && {
    //       class: styles.modifiers.icon,
    //     })
    //   });

    const renderDefaultComponent = () => {
      const componentContent = [];

      if (this.$slots.icon) {
        children = [
          h('span', {class: styles.dropdownMenuItemIcon}, this.$slots.icon()),
          children,
        ];
      }

      if (this.description) {
        componentContent.push(h('div', {
          class: styles.dropdownMenuItemMain,
        }, children));

        componentContent.push(h('div', {
          class: styles.dropdownMenuItemDescription,
        }, this.description));
      } else {
        componentContent.push(children);
      }

      return h(this.component, mergeProps({
        class: classes,
        'aria-disabled': this.component === 'a' ? this.disabled : null,
        tabindex: this.component === 'a' ? (this.disabled ? -1 : this.tabindex) : null,
        disabled: this.component === 'button' ? this.disabled : null,
      }, this.$attrs), {
        default: () => componentContent,
      });
    };

    return h('li', {
      role: this.role,
      onKeyDown: this.keyDown.bind(this),
      onClick: e => {
        if (this.disabled) {
          if (this.dropdown && this.dropdown.$refs.toggle && this.dropdown.$refs.toggle.$el) {
            this.dropdown.$refs.toggle.$el.focus();
          }
          return;
        }
        this.$emit('click', e);
        this.$emit('select', e);
      },
    }, [
      renderDefaultComponent(),
      this.$slots.additional && this.$slots.additional(),
    ]);
  },

  methods: {
    focus() {
      const el = this.focusElement();
      el && el.focus();
    },

    focusElement() {
      return this.$el && this.$el.querySelector('[tabindex], a, button');
    },

    focused() {
      const el = this.focusElement();
      return el && el.ownerDocument.activeElement === el;
    },
  },
};
