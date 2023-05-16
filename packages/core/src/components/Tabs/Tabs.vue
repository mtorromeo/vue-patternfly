<template>
  <component
    :is="component"
    :id="id"
    :aria-label="ariaLabel"
    :class="[styles.tabs, breakpointClasses, {
      [styles.modifiers.fill]: filled,
      [styles.modifiers.secondary]: secondary,
      [styles.modifiers.vertical]: vertical,
      [styles.modifiers.box]: box,
      [styles.modifiers.scrollable]: !vertical && showScrollButtons,
      [styles.modifiers.pageInsets]: pageInsets,
      [styles.modifiers.colorSchemeLight_300]: variant === 'light300',
    }]"
  >
    <button
      type="button"
      :class="[styles.tabsScrollButton, {
        [buttonStyles.modifiers.secondary]: secondary,
      }]"
      :disabled="disableLeftScrollButton"
      :aria-label="leftScrollAriaLabel"
      :aria-hidden="disableLeftScrollButton"
      @click="scrollLeft"
    >
      <angle-left-icon />
    </button>

    <ul
      ref="tabListRef"
      role="tablist"
      :class="styles.tabsList"
      @scroll="handleScrollButtons"
    />

    <button
      type="button"
      :class="[styles.tabsScrollButton, {
        [buttonStyles.modifiers.secondary]: secondary,
      }]"
      :disabled="disableRightScrollButton"
      :aria-label="rightScrollAriaLabel"
      :aria-hidden="disableRightScrollButton"
      @click="scrollRight"
    >
      <angle-right-icon />
    </button>
  </component>

  <slot />
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { breakpointProp, classesFromBreakpointProps } from '../../breakpoints';
import { isElementInView, getUniqueId } from '../../util';
import { useManagedProp } from '../../use';
import { provide, computed, reactive, defineComponent, type PropType, type InjectionKey, type ComputedRef, type Ref, ref, markRaw, type WritableComputedRef } from 'vue';

import PfTabContent from './TabContent.vue';
import AngleLeftIcon from '@vue-patternfly/icons/dist/esm/icons/angle-left-icon';
import AngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';
import { useEventListener } from '@vueuse/core';

export type TabsProvide = {
  variant: 'default' | 'light300';
  activeKey: WritableComputedRef<string | number | symbol>;
  idSuffix: ComputedRef<string>;
  handleTabClick: (key: string | number | symbol) => void;
  tabListRef: Ref<HTMLUListElement | undefined>;
}

export const TabsProvideKey = Symbol('TabsProvide') as InjectionKey<TabsProvide>;

export default defineComponent({
  name: 'PfTabs',

  components: {
    PfTabContent,
    AngleLeftIcon,
    AngleRightIcon,
  },

  props: {
    id: {
      type: String,
      default: null,
    },

    /** Tabs background color variant */
    variant: {
      type: String as PropType<'default' | 'light300'>,
      default: 'default',
      validate: (v: any) => ['default', 'light300'].includes(v),
    },

    /** The index of the active tab */
    activeKey: {
      type: [Number, String],
      default: null,
    },

    /** The index of the default active tab. Set this for uncontrolled Tabs */
    defaultActiveKey: {
      type: [Number, String, Symbol],
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
      type: String as PropType<'div' | 'nav'>,
      default: 'div',
      validate: (v: any) => ['div', 'nav'].includes(v),
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
    const localActiveKey = useManagedProp('activeKey', props.defaultActiveKey);
    const idSuffix = computed(() => props.id || getUniqueId(''));
    const shownKeys: (string | number | symbol)[] = reactive([]);
    const tabListRef: Ref<HTMLUListElement | undefined> = ref();

    provide(TabsProvideKey, {
      variant: props.variant,
      activeKey: localActiveKey,
      idSuffix,
      handleTabClick: (key: string | number | symbol) => {
        localActiveKey.value = key;

        if (props.mountOnEnter) {
          shownKeys.push(key);
        }
      },
      tabListRef,
    });

    return {
      styles: markRaw(styles) as typeof styles,
      buttonStyles: markRaw(buttonStyles) as typeof buttonStyles,
      localActiveKey,
      idSuffix,
      shownKeys,
      tabListRef,
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

    if (!this.vertical) {
      useEventListener('resize', this.handleScrollButtons, false);
    }
  },

  mounted() {
    this.$nextTick(this.handleScrollButtons);
  },

  methods: {
    handleScrollButtons() {
      if (!this.tabListRef || this.vertical) {
        return;
      }

      // get first element and check if it is in view
      const overflowOnLeft = !isElementInView(this.tabListRef, this.tabListRef.firstElementChild, false);

      // get last element and check if it is in view
      const overflowOnRight = !isElementInView(this.tabListRef, this.tabListRef.lastElementChild, false);

      this.showScrollButtons = overflowOnLeft || overflowOnRight;
      this.disableLeftScrollButton = !overflowOnLeft;
      this.disableRightScrollButton = !overflowOnRight;
    },

    scrollLeft() {
      // find first Element that is fully in view on the left, then scroll to the element before it
      if (!this.tabListRef) {
        return;
      }

      const childrenArr = Array.from(this.tabListRef.children);
      let firstElementInView;
      let lastElementOutOfView;
      let i;
      for (i = 0; i < childrenArr.length && !firstElementInView; i++) {
        if (isElementInView(this.tabListRef, childrenArr[i], false)) {
          firstElementInView = childrenArr[i];
          lastElementOutOfView = childrenArr[i - 1];
          break;
        }
      }
      if (lastElementOutOfView) {
        this.tabListRef.scrollLeft -= lastElementOutOfView.scrollWidth;
      }
    },

    scrollRight() {
      // find last Element that is fully in view on the right, then scroll to the element after it
      if (!this.tabListRef) {
        return;
      }

      const childrenArr = Array.from(this.tabListRef.children);
      let lastElementInView;
      let firstElementOutOfView;
      for (let i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
        if (isElementInView(this.tabListRef, childrenArr[i], false)) {
          lastElementInView = childrenArr[i];
          firstElementOutOfView = childrenArr[i + 1];
          break;
        }
      }
      if (firstElementOutOfView) {
        this.tabListRef.scrollLeft += firstElementOutOfView.scrollWidth;
      }
    },
  },
});
</script>
