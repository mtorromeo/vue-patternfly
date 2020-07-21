import _styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

// commonjs bug
let styles = _styles.default;

import {h, mergeProps} from 'vue';

export default {
  name: 'DropdownItem',

  inheritAttrs: false,

  props: {
    hovered: Boolean,
    component: {
      type: [String, Object, Function],
      default: 'a',
    },
    role: {
      type: String,
      default: 'none',
    },
    disabled: Boolean,
    plainText: Boolean,
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

  mounted() {
    if (this.autoFocus) {
      this.$nextTick(() => this.$el.focus());
    }
  },

  render() {
    let classes = [];
    if (this.$slots.icon) {
      classes.push(styles.modifiers.icon);
    }

    if (this.role !== 'separator') {
      classes.push(
        styles.dropdownMenuItem,
        {
          [styles.modifiers.disabled]: this.disabled,
          [styles.modifiers.text]: this.plainText,
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
        componentContent.push(h('div', {class: styles.dropdownMenuItemMain}, children));
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
      onKeyDown: this.onKeyDown,
      onClick: e => {
        if (!this.disabled) {
          this.$emit('click', e);
          this.$emit('select', e);
        }
      },
    }, [
      renderDefaultComponent(),
      this.$slots.additional && this.$slots.additional(),
    ]);
  },

  methods: {
    onKeyDown() {
      // Detected key press on this item, notify the menu parent so that the appropriate item can be focused
      // const innerIndex = event.target === this.ref.current ? 0 : 1;
      // if (!this.props.customChild) {
      //   event.preventDefault();
      // }
      // if (event.key === 'ArrowUp') {
      //   this.props.context.keyHandler(this.props.index, innerIndex, KEYHANDLER_DIRECTION.UP);
      // } else if (event.key === 'ArrowDown') {
      //   this.props.context.keyHandler(this.props.index, innerIndex, KEYHANDLER_DIRECTION.DOWN);
      // } else if (event.key === 'ArrowRight') {
      //   this.props.context.keyHandler(this.props.index, innerIndex, KEYHANDLER_DIRECTION.RIGHT);
      // } else if (event.key === 'ArrowLeft') {
      //   this.props.context.keyHandler(this.props.index, innerIndex, KEYHANDLER_DIRECTION.LEFT);
      // } else if (event.key === 'Enter' || event.key === ' ') {
      //   event.target.click();
      //   this.props.enterTriggersArrowDown &&
      //     this.props.context.keyHandler(this.props.index, innerIndex, KEYHANDLER_DIRECTION.DOWN);
      // }
    },
  },
};
