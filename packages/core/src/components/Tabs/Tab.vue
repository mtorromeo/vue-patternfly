<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import { defineComponent, h, inject, unref } from 'vue';
import { TabsActiveKeyKey, TabsClickHandlerKey, TabsIdSuffixKey } from './Tabs.vue';
import PfTabTitleText from './TabTitleText.vue';

export default defineComponent({
  name: 'PfTab',

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

  setup() {
    return {
      activeKey: inject(TabsActiveKeyKey),
      idSuffix: inject(TabsIdSuffixKey),
      handleTabClick: inject(TabsClickHandlerKey),
    };
  },

  render() {
    const key = this.$.vnode.key;
    return h(
      'li',
      {
        key: key ?? undefined,
        class: [styles.tabsItem, {
          [styles.modifiers.current]: key === unref(this.activeKey),
        }],
      },
      h(
        'button',
        {
          id: `pf-tab-${String(key)}-${String(this.idSuffix)}`,
          type: 'button',
          class: [styles.tabsLink, {
            [styles.modifiers.disabled]: this.disabled && this.href,
            [styles.modifiers.ariaDisabled]: this.ariaDisabled,
          }],
          disabled: this.disabled && !this.href,
          'aria-disabled': this.disabled || this.ariaDisabled,
          'aria-controls': `pf-tab-section-${String(key)}-${String(this.idSuffix)}`,
          tabindex: this.disabled || this.ariaDisabled ? (this.href ? -1 : null) : undefined,
          onClick: (e: Event) => this.handleTabClick?.(key),
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
});
</script>
