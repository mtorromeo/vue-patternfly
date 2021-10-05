<script>
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { breakpointProp, classesFromBreakpointProps, findChildrenVNodes, isElementInView, getUniqueId } from '../../util.ts';
import { useManagedProp } from '../../use.ts';
import { h, provide, computed, reactive } from 'vue';

import PfTabContent from './TabContent.vue';
import PfAngleLeftIcon from '@vue-patternfly/icons/dist/esm/icons/angle-left-icon';
import PfAngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';

export default {
  name: 'PfTabs',

  props: {
    id: {
      type: String,
      default: null,
    },

    /** Tabs background color variant */
    variant: {
      type: String,
      default: 'default',
      validate: v => ['default', 'light300'].includes(v),
    },

    /** The index of the active tab */
    activeKey: {
      type: [Number, String],
      default: null,
    },

    /** The index of the default active tab. Set this for uncontrolled Tabs */
    defaultActiveKey: {
      type: [Number, String],
      default: null,
    },

    /** Enables the filled tab list layout */
    filled: Boolean,

    /** Enables secondary tab styling */
    secondary: Boolean,

    /** Enables box styling to the tab component */
    box: Boolean,

    /** Enables vertical tab styling */
    vertical: Boolean,

    /** Aria-label for the left scroll button */
    leftScrollAriaLabel: {
      type: String,
      default: null,
    },

    /** Aria-label for the right scroll button */
    rightScrollAriaLabel: {
      type: String,
      default: null,
    },

    /** Determines what tag is used around the tabs. Use "nav" to define the tabs inside a navigation region */
    component: {
      type: String,
      default: 'div',
      validate: v => ['div', 'nav'].includes(v),
    },

    /** Provides an accessible label for the tabs. Labels should be unique for each set of tabs that are present on a page. When component is set to nav, this prop should be defined to differentiate the tabs from other navigation regions on the page. */
    ariaLabel: {
      type: String,
      default: null,
    },

    /** Waits until the first "enter" transition to mount tab children (add them to the DOM) */
    mountOnEnter: Boolean,

    /** Unmounts tab children (removes them from the DOM) when they are no longer visible */
    unmountOnExit: Boolean,

    /** Flag indicates that the tabs should use page insets. */
    pageInsets: Boolean,

    ...breakpointProp('inset', String, ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
  },

  setup(props) {
    provide('variant', props.variant);

    const localActiveKey = useManagedProp('activeKey', props.defaultActiveKey);
    provide('activeKey', localActiveKey);

    const idSuffix = computed(() => props.id || getUniqueId(''));
    provide('idSuffix', idSuffix);

    const shownKeys = reactive([]);

    provide('handleTabClick', key => {
      localActiveKey.value = key;

      if (props.mountOnEnter) {
        shownKeys.push(key);
      }
    });

    return {
      localActiveKey,
      idSuffix,
      shownKeys,
    };
  },

  data() {
    return {
      showScrollButtons: false,
      disableLeftScrollButton: false,
      disableRightScrollButton: false,
    };
  },

  computed: {
    breakpointClasses() {
      return classesFromBreakpointProps(this.$props, ['inset'], styles);
    },
  },

  watch: {
    activeKey() {
      if (!this.activeKey) {
        return;
      }
      this.shownKeys.push(this.activeKey);
    },
  },

  created() {
    this.shownKeys.push(this.defaultActiveKey || this.localActiveKey);
  },

  mounted() {
    if (!this.vertical) {
      window.addEventListener('resize', this.handleScrollButtons, false);
      this.handleScrollButtons();
    }
  },

  beforeUnmount() {
    if (!this.vertical) {
      window.removeEventListener('resize', this.handleScrollButtons, false);
    }
  },

  methods: {
    handleScrollButtons() {
      if (this.$refs.tablist && !this.vertical) {
        const container = this.$refs.tablist;
        // get first element and check if it is in view
        const overflowOnLeft = !isElementInView(container, container.firstChild, false);

        // get last element and check if it is in view
        const overflowOnRight = !isElementInView(container, container.lastChild, false);

        this.showScrollButtons = overflowOnLeft || overflowOnRight;
        this.disableLeftScrollButton = !overflowOnLeft;
        this.disableRightScrollButton = !overflowOnRight;
      }
    },

    scrollLeft() {
      // find first Element that is fully in view on the left, then scroll to the element before it
      if (this.$refs.tablist) {
        const container = this.$refs.tablist;
        const childrenArr = Array.from(container.children);
        let firstElementInView;
        let lastElementOutOfView;
        let i;
        for (i = 0; i < childrenArr.length && !firstElementInView; i++) {
          if (isElementInView(container, childrenArr[i], false)) {
            firstElementInView = childrenArr[i];
            lastElementOutOfView = childrenArr[i - 1];
            break;
          }
        }
        if (lastElementOutOfView) {
          container.scrollLeft -= lastElementOutOfView.scrollWidth;
        }
      }
    },

    scrollRight() {
      // find last Element that is fully in view on the right, then scroll to the element after it
      if (this.$refs.tablist) {
        const container = this.$refs.tablist;
        const childrenArr = Array.from(container.children);
        let lastElementInView;
        let firstElementOutOfView;
        for (let i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
          if (isElementInView(container, childrenArr[i], false)) {
            lastElementInView = childrenArr[i];
            firstElementOutOfView = childrenArr[i + 1];
            break;
          }
        }
        if (firstElementOutOfView) {
          container.scrollLeft += firstElementOutOfView.scrollWidth;
        }
      }
    },
  },

  render() {
    const buttonProps = {
      type: 'button',
      class: [styles.tabsScrollButton, {
        [buttonStyles.modifiers.secondary]: this.secondary,
      }],
      disabled: this.disableLeftScrollButton,
      'aria-label': this.leftScrollAriaLabel,
      'aria-hidden': this.disableLeftScrollButton,
      onClick: this.scrollLeft,
    };

    const leftButton = h('button', buttonProps, h(PfAngleLeftIcon));
    const rightButton = h('button', {
      ...buttonProps,
      disabled: this.disableRightScrollButton,
      'aria-label': this.rightScrollAriaLabel,
      'aria-hidden': this.disableRightScrollButton,
      onClick: this.scrollRight,
    }, h(PfAngleRightIcon));

    const tabs = findChildrenVNodes(this.$slots.default())
      .filter(tab => !tab.props || !(tab.props.hidden === '' || tab.props.hidden))
      .map((tab, index) => {
        if (!tab.key) {
          tab.key = index.toString();
        }
        return tab;
      });

    const tabList =
      h('ul',
        {
          ref: 'tablist',
          role: 'tablist',
          class: styles.tabsList,
          onScroll: this.handleScrollButtons,
        },
        tabs.map((tab, index) => {
          if (tab.props && tab.props['content-ref'] && tab.props['content-ref'].$el) {
            tab.props['content-ref'].$el.hidden = tab.key !== this.localActiveKey;
          }
          return {
            ...tab,
            children: {
              // the title is in the title slot of pf-tab
              default: () => tab.children && tab.children.title ? tab.children.title() : [],
            },
          };
        }),
      );

    return [
      h(
        this.component, {
          id: this.id,
          'aria-label': this.ariaLabel,
          class: [styles.tabs, this.breakpointClasses, {
            [styles.modifiers.fill]: this.filled,
            [styles.modifiers.secondary]: this.secondary,
            [styles.modifiers.vertical]: this.vertical,
            [styles.modifiers.box]: this.box,
            [styles.modifiers.scrollable]: !this.vertical && this.showScrollButtons,
            [styles.modifiers.pageInsets]: this.pageInsets,
            [styles.modifiers.colorSchemeLight_300]: this.variant === 'light300',
          }],
        }, [
          leftButton,
          tabList,
          rightButton,
        ],
      ),
      ...tabs
        .filter(tab =>
          !(this.unmountOnExit && tab.key !== this.localActiveKey) &&
          !(this.mountOnEnter && !this.shownKeys.includes(tab.key)),
        )
        .map(tab =>
          h(PfTabContent, {
            id: `pf-tab-section-${tab.key}-${this.idSuffix}`,
            key: tab.key,
            eventKey: tab.key,
            activeKey: this.localActiveKey,
          }, {
            // the content is in the default slot of pf-tab
            default: () => tab.children && tab.children.default ? tab.children.default() : [],
          }),
        ),
    ];
  },
};
</script>
