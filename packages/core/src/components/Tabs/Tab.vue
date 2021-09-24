<script>
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import { h, unref } from 'vue';
import PfTabTitleText from './TabTitleText.vue';

export default {
  name: 'PfTab',

  inject: {
    activeKey: {
      default: null,
    },

    idSuffix: {
      default: '',
    },

    handleTabClick: {
      default: () => null,
    },
  },

  props: {
    /** Content rendered in the tab title. */
    title: {
      type: String,
      default: null,
    },

    /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs component="nav"> should have an href. */
    href: {
      type: String,
      default: null,
    },

    hidden: Boolean,
    /** Adds disabled styling and disables the button using the disabled html attribute */
    disabled: Boolean,
    /** Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute */
    ariaDisabled: Boolean,

    contentRef: {
      type: Object,
      default: null,
    },
  },

  render() {
    const key = this.$.vnode.key;
    return h(
      'li',
      {
        key,
        class: [styles.tabsItem, {
          [styles.modifiers.current]: key === unref(this.activeKey),
        }],
      },
      h(
        'button',
        {
          id: `pf-tab-${key}-${unref(this.idSuffix)}`,
          type: 'button',
          class: [styles.tabsLink, {
            [styles.modifiers.disabled]: this.disabled && this.href,
            [styles.modifiers.ariaDisabled]: this.ariaDisabled,
          }],
          disabled: this.disabled && !this.href,
          'aria-disabled': this.disabled || this.ariaDisabled,
          'aria-controls': `pf-tab-section-${key}-${unref(this.idSuffix)}`,
          tabindex: this.disabled || this.ariaDisabled ? (this.href ? -1 : null) : undefined,
          onClick: e => this.handleTabClick(key),
        },
        {
          default: () => {
            if (this.title) {
              return [h(PfTabTitleText, {}, { default: () => this.title })];
            }
            if (this.$slots.default) {
              return this.$slots.default();
            }
            return [];
          },
        },
      ),
    );
  },
};
</script>
