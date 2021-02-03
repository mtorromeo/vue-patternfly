import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

import {h} from 'vue';

export default {
  name: 'PfToggle',

  inject: ['dropdown', 'toggleClass'],

  props: {
    type: {
      type: String,
      default: 'button',
      validator: v => ['button', 'submit', 'reset'].includes(v),
    },
    open: Boolean,
    splitButton: Boolean,
    active: Boolean,
    plain: Boolean,
    primary: Boolean,
    bubbleEvent: Boolean,
  },

  mounted() {
    document.addEventListener('mousedown', this.onDocClick);
    document.addEventListener('touchstart', this.onDocClick);
    document.addEventListener('keydown', this.onEscPress);
  },

  beforeUmount() {
    document.removeEventListener('mousedown', this.onDocClick);
    document.removeEventListener('touchstart', this.onDocClick);
    document.removeEventListener('keydown', this.onEscPress);
  },

  render() {
    let toggleClass = this.toggleClass;
    if (!toggleClass) {
      toggleClass = this.splitButton ? styles.dropdownToggleButton : styles.dropdownToggle;
    }
    return h('button', {
      class: [
        toggleClass,
        {
          [styles.modifiers.active]: this.active,
          [styles.modifiers.plain]: this.plain,
          [styles.modifiers.primary]: this.primary,
        },
      ],
      type: this.type,
      'aria-expanded': this.open,
      onClick: this.toggle,
      onKeyDown: this.onKeyDown,
    }, this.$slots.default ? this.$slots.default() : []);
  },

  methods: {
    toggle() {
      this.$emit('update:open', !this.open);
    },

    onDocClick(event) {
      if (!this.open) {
        return;
      }

      const clickedOnToggle = () => this.$parent && this.$parent.$el && this.$parent.$el.contains(event.target);

      const clickedWithinMenu = () => {
        const menu = this.dropdown.$refs.menu.$el;
        return menu && menu.contains && menu.contains(event.target);
      };

      if (!clickedOnToggle() && !clickedWithinMenu()) {
        this.toggle();
        this.$el.focus();
      }
    },

    onEscPress(event) {
      const keyCode = event.keyCode || event.which;

      if (!this.open || !(keyCode === 27 /* ESC */ || event.key === 'Tab')) {
        return;
      }

      const escFromToggle = () => this.$parent && this.$parent.$el && this.$parent.$el.contains(event.target);

      const escFromWithinMenu = () => {
        const menu = this.dropdown.$refs.menu.$el;
        return menu && menu.contains && menu.contains(event.target);
      };

      if (escFromToggle() || escFromWithinMenu()) {
        this.toggle();
        this.$el.focus();
      }
    },

    onKeyDown(event) {
      if (event.key === 'Tab' && !this.open) {
        return;
      }

      if (!this.bubbleEvent) {
        event.stopPropagation();
        this.onEscPress(event);
      }
      event.preventDefault();

      if ((event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') && this.open) {
        this.toggle();
      } else if ((event.key === 'Enter' || event.key === ' ') && !this.open) {
        this.toggle();
        this.$emit('enter');
      }
    },
  },
};
