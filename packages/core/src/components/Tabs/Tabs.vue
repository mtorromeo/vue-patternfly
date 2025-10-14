<template>
  <component
    v-bind="ouiaProps"
    :is="component"
    :id="id"
    :aria-label="ariaLabel"
    :class="[
      styles.tabs,
      classesFromBreakpointProps(props, ['inset'], styles),
      vertical && expandable && classesFromBreakpointProps(props, ['expandable'], styles, { short: true }),
      {
        [styles.modifiers.fill]: filled,
        [styles.modifiers.subtab]: subtab,
        [styles.modifiers.vertical]: vertical,
        [styles.modifiers.expanded]: vertical && expandable && (expanded ?? defaultExpanded),
        [styles.modifiers.box]: box,
        [styles.modifiers.scrollable]: showScrollButtons,
        [styles.modifiers.pageInsets]: pageInsets,
        [styles.modifiers.noBorderBottom]: noBorderBottom,
        [styles.modifiers.secondary]: secondary,
        [styles.modifiers.overflow]: overflowHorizontal && overflowingTabCount > 0,
      }
    ]"
  >
    <div :class="styles.tabsScrollButton">
      <pf-button
        variant="plain"
        :disabled="disableLeftScrollButton"
        :aria-label="backScrollAriaLabel"
        :aria-hidden="disableLeftScrollButton"
        @click="scrollLeft"
      >
        <angle-left-icon />
      </pf-button>
    </div>

    <ul
      ref="tabList"
      role="tablist"
      :class="styles.tabsList"
      @scroll.passive="handleScrollButtons"
    >
      <slot />

      <li
        v-if="overflowHorizontal && overflowingTabCount > 0"
        ref="tabMore"
        :class="[styles.tabsItem, styles.modifiers.overflow]"
        role="presentation"
      >
        <button
          ref="overflowTabRef"
          type="button"
          :class="[styles.tabsLink, {[styles.modifiers.expanded]: (expanded ?? defaultExpanded)}]"
          aria-haspopup="menu"
          :aria-expanded="expanded ?? defaultExpanded"
          role="tab"
          @click="expanded = !expanded"
        >
          <pf-tab-title-text>
            More ({{ overflowingTabCount }})
          </pf-tab-title-text>
          <span :class="styles.tabsLinkToggleIcon">
            <angle-right-icon />
          </span>
        </button>

        <floating-ui :hidden="!(expanded ?? defaultExpanded)" :teleport-to="tabMoreRef" :reference="overflowTabRef">
          <pf-menu v-bind="$attrs">
            <pf-menu-content>
              <pf-menu-list ref="tabOverflow" />
            </pf-menu-content>
          </pf-menu>
        </floating-ui>
      </li>
    </ul>

    <div :class="styles.tabsScrollButton">
      <pf-button
        variant="plain"
        :disabled="disableRightScrollButton"
        :aria-label="forwardScrollAriaLabel"
        :aria-hidden="disableRightScrollButton"
        @click="scrollRight"
      >
        <angle-right-icon />
      </pf-button>
    </div>
  </component>

  <div ref="contentTargetRef" />
</template>

<script lang="ts">
interface Props extends OUIAProps, InsetBreakpointProps, ExpandableBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  id?: string;
  /** The index of the default active tab. Set this for uncontrolled Tabs */
  defaultActiveKey?: TabKey;
  /** Enables the filled tab list layout */
  filled?: boolean;
  /** Enables subtab tab styling */
  subtab?: boolean;
  /** Enables secondary tab styling */
  secondary?: boolean;
  /** Enables box styling to the tab component */
  box?: boolean;
  /** Enables vertical tab styling */
  vertical?: boolean;
  /** Disables border bottom tab styling on tabs. Defaults to false. To remove the bottom border, set this prop to true. */
  noBorderBottom?: boolean;
  /** Aria-label for the left scroll button */
  backScrollAriaLabel?: string;
  /** Aria-label for the right scroll button */
  forwardScrollAriaLabel?: string;
  /** Determines what tag is used around the tabs. Use "nav" to define the tabs inside a navigation region */
  component?: 'div' | 'nav';
  /** Provides an accessible label for the tabs. Labels should be unique for each set of tabs that are present on a page. When component is set to nav, this prop should be defined to differentiate the tabs from other navigation regions on the page. */
  ariaLabel?: string;
  /** Waits until the first "enter" transition to mount tab children (add them to the DOM) */
  mountOnEnter?: boolean;
  /** Unmounts tab children (removes them from the DOM) when they are no longer visible */
  unmountOnExit?: boolean;
  /** Flag indicates that the tabs should use page insets. */
  pageInsets?: boolean;
  /** Flag indicating the default expanded state for uncontrolled expand/collapse of */
  defaultExpanded?: boolean;
  /** Flag which places overflowing tabs into a menu triggered by the last tab. Additionally an object can be passed with custom settings for the overflow tab. */
  overflowHorizontal?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import { classesFromBreakpointProps, type ExpandableBreakpointProps, type InsetBreakpointProps } from '../../breakpoints';
import { isElementInView } from '../../util';
import { watch, watchEffect, nextTick, onMounted, provide, computed, type Ref, ref, type HTMLAttributes, useTemplateRef, useId } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { isDefined, useEventListener } from '@vueuse/core';
import { provideChildrenTracker } from '../../use';
import { TabsKey, TabsProvideKey, type TabKey } from './common';
import AngleLeftIcon from '@vue-patternfly/icons/angle-left-icon';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import PfButton from '../Button.vue';
import PfTabTitleText from './TabTitleText.vue';
import FloatingUi from '../../helpers/FloatingUi.vue';
import PfMenu from '../Menu/Menu.vue';
import PfMenuContent from '../Menu/MenuContent.vue';
import PfMenuList from '../Menu/MenuList.vue';
import type { ComponentExposed } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfTabs',
});

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  component: 'div',
  id: () => useId(),
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

/** The index of the active tab */
const activeKey = defineModel<TabKey>('activeKey');
const localActiveKey = computed({
  get: () => activeKey.value ?? props.defaultActiveKey,
  set: (value) => {
    activeKey.value = value;
  },
});

/** Flag to indicate if the vertical tabs are expanded */
const expanded = defineModel<boolean | undefined>('expanded', { default: undefined });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const tabListRef = useTemplateRef('tabList');
const tabMoreRef = useTemplateRef('tabMore');
const tabOverflowRef: Ref<ComponentExposed<typeof PfMenuList> | undefined> = ref();
const contentTargetRef: Ref<HTMLElement | undefined> = ref();
const overflowTabRef: Ref<HTMLButtonElement | undefined> = ref();
const tabs = provideChildrenTracker(TabsKey);

provide(TabsProvideKey, {
  secondary: props.secondary,
  activeKey: localActiveKey,
  idSuffix: () => props.id,
  tabOverflowRef,
  contentTargetRef,
});

const showScrollButtons = ref(false);
const disableLeftScrollButton = ref(false);
const disableRightScrollButton = ref(false);

const overflowingTabCount = computed(() => {
  return tabs.reduce((acc, tab) => acc + (tab.overflowing ? 1 : 0), 0);
});

if (!props.vertical) {
  useEventListener('resize', handleScrollButtons, false);
}

watchEffect(() => {
  if ((!isDefined(localActiveKey.value) || !tabs.find(tab => (tab.key) === localActiveKey.value)) && tabs.length) {
    localActiveKey.value = tabs[0].key;
  }
});

watch(tabs, handleScrollButtons, { immediate: true });

onMounted(() => {
  nextTick(handleScrollButtons);
});

function countOverflowingElements() {
  if (!tabListRef.value || !tabs[0]?.el) {
    return;
  }

  if (!isElementInView(tabListRef.value, tabs[0].el, false)) {
    return;
  }

  let changed = false;
  for (const tab of tabs) {
    if (!tab.overflowing && tab.el && !isElementInView(tabListRef.value, tab.el, false)) {
      tab.overflowing = true;
      changed = true;
    }
  }

  if (!changed) {
    return;
  }

  nextTick(() => {
    if (tabListRef.value && tabMoreRef.value && tabs.length > 0 && !isElementInView(tabListRef.value, tabMoreRef.value, false)) {
      for (let i = tabs.length - 1; i >= 0; i--) {
        const tab = tabs[i];
        if (!tab.overflowing) {
          tab.overflowing = true;
          return;
        }
      }
    }
  });
}

function handleScrollButtons() {
  if (!tabListRef.value || props.vertical) {
    return;
  }

  if (props.overflowHorizontal) {
    countOverflowingElements();
    return;
  }

  // get first element and check if it is in view
  const overflowOnLeft = !isElementInView(tabListRef.value, tabListRef.value.firstElementChild, false);
  disableLeftScrollButton.value = !overflowOnLeft;

  // get last element and check if it is in view
  const overflowOnRight = !isElementInView(tabListRef.value, tabListRef.value.lastElementChild, false);
  disableRightScrollButton.value = !overflowOnRight;

  showScrollButtons.value = overflowOnLeft || overflowOnRight;
}

function scrollLeft() {
  // find first Element that is fully in view on the left, then scroll to the element before it
  if (!tabListRef.value) {
    return;
  }

  const childrenArr = Array.from(tabListRef.value.children);
  let firstElementInView;
  let lastElementOutOfView;
  let i;
  for (i = 0; i < childrenArr.length && !firstElementInView; i++) {
    if (isElementInView(tabListRef.value, childrenArr[i], false)) {
      firstElementInView = childrenArr[i];
      lastElementOutOfView = childrenArr[i - 1];
      break;
    }
  }
  if (lastElementOutOfView) {
    tabListRef.value.scrollLeft -= lastElementOutOfView.scrollWidth;
  }
}

function scrollRight() {
  // find last Element that is fully in view on the right, then scroll to the element after it
  if (!tabListRef.value) {
    return;
  }

  const childrenArr = Array.from(tabListRef.value.children);
  let lastElementInView;
  let firstElementOutOfView;
  for (let i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
    if (isElementInView(tabListRef.value, childrenArr[i], false)) {
      lastElementInView = childrenArr[i];
      firstElementOutOfView = childrenArr[i + 1];
      break;
    }
  }
  if (firstElementOutOfView) {
    tabListRef.value.scrollLeft += firstElementOutOfView.scrollWidth;
  }
}
</script>
