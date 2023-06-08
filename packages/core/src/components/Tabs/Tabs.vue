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
export type TabsProvide = {
  variant: 'default' | 'light300';
  activeKey: WritableComputedRef<TabKey | undefined>;
  idSuffix: ComputedRef<string>;
  tabListRef: Ref<HTMLUListElement | undefined>;
}

export const TabsKey = Symbol("TabsKey") as ChildrenTrackerInjectionKey<ComputedRef<TabKey>>;

export const TabsProvideKey = Symbol('TabsProvide') as InjectionKey<TabsProvide>;

export type TabKey = number | string | symbol;

export interface Props extends InsetBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  id?: string;

  /** Tabs background color variant */
  variant?: 'default' | 'light300';

  /** The index of the active tab */
  activeKey?: TabKey;

  /** The index of the default active tab. Set this for uncontrolled Tabs */
  defaultActiveKey?: TabKey;

  /** Enables the filled tab list layout */
  filled?: boolean;

  /** Enables secondary tab styling */
  secondary?: boolean;

  /** Enables box styling to the tab component */
  box?: boolean;

  /** Enables vertical tab styling */
  vertical?: boolean;

  /** Aria-label for the left scroll button */
  leftScrollAriaLabel?: string;

  /** Aria-label for the right scroll button */
  rightScrollAriaLabel?: string;

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
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { classesFromBreakpointProps, type InsetBreakpointProps } from '../../breakpoints';
import { isElementInView, getUniqueId } from '../../util';
import { useManagedProp } from '../../use';
import { nextTick, onMounted, provide, computed, type InjectionKey, type ComputedRef, type Ref, ref, type WritableComputedRef, type HTMLAttributes } from 'vue';

import AngleLeftIcon from '@vue-patternfly/icons/angle-left-icon';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { useEventListener } from '@vueuse/core';
import { watchEffect } from 'vue';
import { provideChildrenTracker, type ChildrenTrackerInjectionKey } from '../../use';

defineOptions({
  name: 'PfTabs',
});

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  component: 'div',
});

defineEmits<{
  (name: 'update:activeKey', value: TabKey): void;
}>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const localActiveKey = useManagedProp('activeKey', props.defaultActiveKey);
const idSuffix = computed(() => props.id || getUniqueId(''));
const tabListRef: Ref<HTMLUListElement | undefined> = ref();
const tabKeys = provideChildrenTracker(TabsKey);

provide(TabsProvideKey, {
  variant: props.variant,
  activeKey: localActiveKey,
  idSuffix,
  tabListRef,
});

const showScrollButtons = ref(false);
const disableLeftScrollButton = ref(false);
const disableRightScrollButton = ref(false);

const breakpointClasses = computed(() => classesFromBreakpointProps(props, ['inset'], styles));

if (!props.vertical) {
  useEventListener('resize', handleScrollButtons, false);
}

watchEffect(() => {
  if ((!localActiveKey.value || !tabKeys.find(k => k.value === localActiveKey.value)) && tabKeys.length) {
    localActiveKey.value = tabKeys[0].value;
  }
});

onMounted(() => {
  nextTick(handleScrollButtons);
});

function handleScrollButtons() {
  if (!tabListRef.value || props.vertical) {
    return;
  }

  // get first element and check if it is in view
  const overflowOnLeft = !isElementInView(tabListRef.value, tabListRef.value.firstElementChild, false);

  // get last element and check if it is in view
  const overflowOnRight = !isElementInView(tabListRef.value, tabListRef.value.lastElementChild, false);

  showScrollButtons.value = overflowOnLeft || overflowOnRight;
  disableLeftScrollButton.value = !overflowOnLeft;
  disableRightScrollButton.value = !overflowOnRight;
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
