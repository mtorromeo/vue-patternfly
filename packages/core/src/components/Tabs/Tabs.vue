<template>
  <component
    v-bind="ouiaProps"
    :is="component ?? (nav ? 'nav' : 'div')"
    ref="root"
    :id="id"
    :aria-label="ariaLabel"
    :class="[
      styles.tabs,
      styles.modifiers.animateCurrent,
      classesFromBreakpointProps(props, ['inset'], styles),
      vertical && hasExpandable && classesFromBreakpointProps(props, ['expandable'], styles, { short: true }),
      {
        [styles.modifiers.fill]: filled,
        [styles.modifiers.subtab]: subtab,
        [styles.modifiers.nav]: nav,
        [styles.modifiers.vertical]: vertical,
        [styles.modifiers.expanded]: vertical && hasExpandable && expanded,
        [styles.modifiers.box]: box,
        [styles.modifiers.scrollable]: showScrollButtons,
        [styles.modifiers.pageInsets]: pageInsets,
        [styles.modifiers.noBorderBottom]: noBorderBottom,
        [styles.modifiers.secondary]: secondary,
        [styles.modifiers.overflow]: hasOverflowTab,
        [styles.modifiers.initializingAccent]: initializingAccent,
      },
    ]"
    :style="{ [linkAccentLength.name]: accentLength, [linkAccentStart.name]: accentStart }"
  >
    <div v-if="vertical && hasExpandable" :class="styles.tabsToggle">
      <div class="pf-v6-c-tabs__toggle-button">
        <pf-button
          :id="`${toggleId}-button`"
          variant="plain"
          :aria-label="toggleAriaLabel"
          :aria-expanded="expanded"
          :aria-labelledby="`${toggleId}-text ${toggleId}-button`"
          @click="expanded = !expanded"
        >
          <template #icon>
            <span :class="styles.tabsToggleIcon"><angle-down-icon /></span>
          </template>
          <span v-if="toggleText" :id="`${toggleId}-text`">{{ toggleText }}</span>
        </pf-button>
      </div>
    </div>

    <div v-if="showScrollButtons" :class="styles.tabsScrollButton">
      <pf-button
        variant="plain"
        :disabled="disableBackScrollButton"
        :aria-label="backScrollAriaLabel"
        :aria-hidden="disableBackScrollButton"
        @click="scrollBack"
      >
        <template #icon><angle-left-icon /></template>
      </pf-button>
    </div>

    <ul
      ref="tabList"
      role="tablist"
      :class="styles.tabsList"
      :aria-label="tabListAriaLabel"
      :aria-labelledby="tabListAriaLabelledby"
      @scroll.passive="handleScrollButtons"
    >
      <slot />

      <li
        v-if="hasOverflowTab"
        ref="overflowItem"
        :class="[styles.tabsItem, styles.modifiers.overflow, { [styles.modifiers.current]: selectedOverflowTab }]"
        role="presentation"
      >
        <button
          ref="overflowToggle"
          type="button"
          :class="[styles.tabsLink, { [styles.modifiers.expanded]: overflowOpen }]"
          :aria-label="overflowToggleAriaLabel"
          aria-haspopup="menu"
          :aria-expanded="overflowOpen"
          role="tab"
          @click="toggleOverflowMenu"
        >
          <pf-tab-title-text>
            {{ overflowTitle }}{{ overflowShowTabCount && !selectedOverflowTab ? ` (${overflowingTabCount})` : '' }}
          </pf-tab-title-text>
          <span :class="styles.tabsLinkToggleIcon"><angle-down-icon /></span>
        </button>

        <floating-ui
          :hidden="!overflowOpen"
          :teleport-to="overflowItemRef"
          :reference="overflowToggleRef"
          :z-index="9999"
          min-width="revert"
        >
          <pf-menu
            ref="overflowMenu"
            :selected="typeof localActiveKey === 'symbol' ? undefined : localActiveKey"
            @select="onOverflowSelect"
          >
            <pf-menu-content>
              <pf-menu-list>
                <pf-menu-item
                  v-for="tab in overflowingTabs"
                  :key="tab.key"
                  :value="typeof tab.key === 'symbol' ? undefined : tab.key"
                  :selected="tab.key === localActiveKey"
                >
                  <component :is="() => tab.renderTitle()" />
                </pf-menu-item>
              </pf-menu-list>
            </pf-menu-content>
          </pf-menu>
        </floating-ui>
      </li>
    </ul>

    <div v-if="showScrollButtons" :class="styles.tabsScrollButton">
      <pf-button
        variant="plain"
        :disabled="disableForwardScrollButton"
        :aria-label="forwardScrollAriaLabel"
        :aria-hidden="disableForwardScrollButton"
        @click="scrollForward"
      >
        <template #icon><angle-right-icon /></template>
      </pf-button>
    </div>

    <span v-if="onAdd" :class="styles.tabsAdd">
      <pf-button variant="plain" :aria-label="addButtonAriaLabel" :disabled="addButtonDisabled" @click="onAdd">
        <template #icon><plus-icon /></template>
      </pf-button>
    </span>
  </component>

  <div ref="contentTarget" />
</template>

<script lang="ts">
interface Props extends OUIAProps, InsetBreakpointProps, ExpandableBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  /** Uniquely identifies the tabs */
  id?: string;
  /** The key of the default active tab, when activeKey is not bound */
  defaultActiveKey?: TabKey;
  /** Enables the filled tab list layout */
  filled?: boolean;
  /** Enables subtab tab styling */
  subtab?: boolean;
  /** @beta Enables horizontal nav tab styling. The tabs are rendered in a nav element unless component is set. */
  nav?: boolean;
  /** Enables the secondary background color variant */
  secondary?: boolean;
  /** Enables box styling to the tab component */
  box?: boolean;
  /** Enables vertical tab styling */
  vertical?: boolean;
  /** Disables border bottom tab styling on tabs. Defaults to false. To remove the bottom border, set this prop to true. */
  noBorderBottom?: boolean;
  /** Aria-label for the back scroll button */
  backScrollAriaLabel?: string;
  /** Aria-label for the forward scroll button */
  forwardScrollAriaLabel?: string;
  /** Determines what tag is used around the tabs. Use "nav" to define the tabs inside a navigation region */
  component?: 'div' | 'nav';
  /** Provides an accessible label for the tabs. Labels should be unique for each set of tabs that are present on a page. When component is set to nav, this prop should be defined to differentiate the tabs from other navigation regions on the page. */
  ariaLabel?: string;
  /** A readable string to create an accessible name for the tablist element. This can be used to differentiate multiple tablists on a page, and should be used for subtabs. */
  tabListAriaLabel?: string;
  /** Id of an element that provides an accessible name for the tablist. Use this when a visible label already exists on the page. */
  tabListAriaLabelledby?: string;
  /** Waits until the first "enter" transition to mount tab children (add them to the DOM). A tab can override it. */
  mountOnEnter?: boolean;
  /** Unmounts tab children (removes them from the DOM) when they are no longer visible. A tab can override it. */
  unmountOnExit?: boolean;
  /** Flag indicates that the tabs should use page insets. */
  pageInsets?: boolean;
  /** Flag indicating the default expanded state of expandable vertical tabs, when expanded is not bound */
  defaultExpanded?: boolean;
  /** Text that appears in the expandable toggle */
  toggleText?: string;
  /** Aria-label for the expandable toggle */
  toggleAriaLabel?: string;
  /** Flag which places overflowing tabs into a menu triggered by the last tab. */
  overflowHorizontal?: boolean;
  /** Flag which shows the count of overflowing tabs in the overflow tab */
  overflowShowTabCount?: boolean;
  /** The text which displays in the overflow tab when an overflowing tab isn't selected */
  overflowTitleText?: string;
  /** The aria label applied to the button which toggles the tab overflow menu */
  overflowToggleAriaLabel?: string;
  /** Aria-label for the add button */
  addButtonAriaLabel?: string;
  /** Flag indicating that the add button is disabled */
  addButtonDisabled?: boolean;
  /** Callback to handle tab closing. When set, a close button is added to all tabs. */
  onClose?: (event: Event, key: TabKey) => void;
  /** Callback for the add button. When set, the add button is rendered. */
  onAdd?: (event: Event) => void;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import { devError } from '../../helpers/dev';
import linkAccentLength from '@patternfly/react-tokens/dist/esm/c_tabs_link_accent_length';
import linkAccentStart from '@patternfly/react-tokens/dist/esm/c_tabs_link_accent_start';
import {
  classesFromBreakpointProps,
  type ExpandableBreakpointProps,
  type InsetBreakpointProps,
} from '../../breakpoints';
import { isElementInView } from '../../util';
import {
  watch,
  watchEffect,
  nextTick,
  onMounted,
  onBeforeUnmount,
  provide,
  computed,
  ref,
  type HTMLAttributes,
  type VNode,
  useTemplateRef,
  useId,
  toValue,
} from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { isDefined, useEventListener, useResizeObserver } from '@vueuse/core';
import { provideChildrenTracker } from '../../use';
import { TabsKey, TabsProvideKey, type TabKey } from './common';
import AngleLeftIcon from '@vue-patternfly/icons/angle-left-icon';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import AngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import PlusIcon from '@vue-patternfly/icons/plus-icon';
import PfButton from '../Button.vue';
import PfTabTitleText from './TabTitleText.vue';
import FloatingUi from '../../helpers/FloatingUi.vue';
import PfMenu, { type MenuItemId } from '../Menu/Menu.vue';
import PfMenuContent from '../Menu/MenuContent.vue';
import PfMenuList from '../Menu/MenuList.vue';
import PfMenuItem from '../Menu/MenuItem.vue';

defineOptions({
  name: 'PfTabs',
});

const props = withDefaults(defineProps<Props>(), {
  id: () => useId(),
  backScrollAriaLabel: 'Scroll back',
  forwardScrollAriaLabel: 'Scroll forward',
  addButtonAriaLabel: 'Add tab',
  overflowTitleText: 'More',
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

/** The key of the active tab */
const activeKey = defineModel<TabKey>('activeKey');
// Nav tabs linked to the current location hash are initially active, until a tab is selected
const hashActiveKey = ref<TabKey>();
const localActiveKey = computed({
  get: () => hashActiveKey.value ?? activeKey.value ?? props.defaultActiveKey,
  set: value => {
    hashActiveKey.value = undefined;
    activeKey.value = value;
  },
});
watch(activeKey, () => {
  hashActiveKey.value = undefined;
});

/** Flag to indicate if the expandable vertical tabs are expanded */
const expandedModel = defineModel<boolean | undefined>('expanded', { default: undefined });
const localExpanded = ref(props.defaultExpanded ?? false);
const expanded = computed({
  get: () => expandedModel.value ?? localExpanded.value,
  set: value => {
    localExpanded.value = value;
    expandedModel.value = value;
  },
});

const emit = defineEmits<{
  /** Emitted when a tab is selected, with its key */
  (name: 'select', event: Event, key: TabKey): void;
}>();

defineSlots<{
  /** The pf-tab components */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const hasExpandable = computed(
  () =>
    !!(
      props.expandable ||
      props.expandableSm ||
      props.expandableMd ||
      props.expandableLg ||
      props.expandableXl ||
      props.expandable2xl
    ),
);

if (props.vertical && hasExpandable.value && !props.toggleAriaLabel && !props.toggleText) {
  devError('Tabs:', 'toggleAriaLabel or the toggleText prop is required to make the toggle button accessible');
}

const toggleId = useId();
const rootRef = useTemplateRef<HTMLElement>('root');
const tabListRef = useTemplateRef('tabList');
const overflowItemRef = useTemplateRef('overflowItem');
const overflowToggleRef = useTemplateRef('overflowToggle');
const overflowMenuRef = useTemplateRef('overflowMenu');
const contentTargetRef = useTemplateRef<HTMLElement>('contentTarget');
const tabs = provideChildrenTracker(TabsKey);

function select(event: Event, key: TabKey) {
  localActiveKey.value = key;
  emit('select', event, key);
}

provide(TabsProvideKey, {
  secondary: () => props.secondary,
  nav: () => props.component === 'nav' || props.nav,
  activeKey: localActiveKey,
  idSuffix: () => props.id,
  mountOnEnter: () => props.mountOnEnter,
  unmountOnExit: () => props.unmountOnExit,
  closable: () => !!props.onClose,
  contentTargetRef,
  select,
  close: (event, key) => props.onClose?.(event, key),
  setAccentStyles,
});

const showScrollButtons = ref(false);
const disableBackScrollButton = ref(true);
const disableForwardScrollButton = ref(true);

const overflowingTabs = computed(() => tabs.filter(tab => tab.overflowing));
const overflowingTabCount = computed(() => overflowingTabs.value.length);
const hasOverflowTab = computed(() => props.overflowHorizontal && overflowingTabCount.value > 0);
const selectedOverflowTab = computed(() => tabs.find(tab => tab.overflowing && tab.key === localActiveKey.value));
const overflowTitle = computed(() => toValue(selectedOverflowTab.value?.title) ?? props.overflowTitleText);
const overflowOpen = ref(false);

// --- current tab accent ---

const accentLength = ref<string>(linkAccentLength.value);
const accentStart = ref<string>(linkAccentStart.value);
const initializingAccent = ref(true);

function setAccentStyles(initialize = false) {
  nextTick(() => {
    const list = tabListRef.value;
    const current = list?.querySelector<HTMLElement>(`li.${styles.modifiers.current}`);
    if (!list || !current) {
      return;
    }
    const length = props.vertical ? current.offsetHeight : current.offsetWidth;
    let start = current.offsetTop;
    if (!props.vertical) {
      start =
        getComputedStyle(current).direction === 'rtl'
          ? list.offsetWidth - current.offsetLeft - current.offsetWidth
          : current.offsetLeft;
    }
    accentLength.value = `${length}px`;
    accentStart.value = `${start}px`;
    if (initialize) {
      initializingAccent.value = true;
    }
    setTimeout(() => (initializingAccent.value = false), 0);
  });
}

watch(localActiveKey, () => setAccentStyles());
watch(expanded, () => setAccentStyles(true));
watch(
  () => !!props.onClose,
  () => setAccentStyles(true),
);

// --- active tab ---

let hashPending = (props.component === 'nav' || props.nav) && !!window.location.hash;
watchEffect(() => {
  if (!hashPending || !tabs.length) {
    return;
  }
  hashPending = false;
  const tab = tabs.find(tab => !toValue(tab.disabled) && getHashFromHref(toValue(tab.href)) === window.location.hash);
  if (tab) {
    hashActiveKey.value = tab.key;
  }
});

// activate the first tab when the active key matches none, checked when the tabs change rather than when the key
// changes, so that a key set together with a new tab is kept until the tab registers itself on mount
watch(
  () => tabs.map(tab => tab.key),
  keys => {
    if (keys.length && (!isDefined(localActiveKey.value) || !keys.includes(localActiveKey.value))) {
      localActiveKey.value = keys[0];
    }
  },
);

// --- scroll buttons and overflow ---

let scrollTimeout: ReturnType<typeof setTimeout> | undefined;

if (!props.vertical) {
  useEventListener('resize', handleResize, false);
  // the tabs can also change width with their container, and the tab titles with the web fonts loading
  useResizeObserver(rootRef, handleResize);
}

watch(
  () => tabs.length,
  () => {
    handleScrollButtons();
    setAccentStyles(true);
  },
);

onMounted(() => {
  handleScrollButtons();
  setAccentStyles(true);
  document.fonts?.ready.then(handleScrollButtons);
});

onBeforeUnmount(() => clearTimeout(scrollTimeout));

function getHashFromHref(href?: string) {
  const hashIndex = href?.indexOf('#') ?? -1;
  return href && hashIndex >= 0 ? href.slice(hashIndex) : undefined;
}

let lastWidth = 0;

function handleResize() {
  // the tab list itself changes width with the overflow tab, so the outer width is compared
  const width = rootRef.value?.clientWidth ?? 0;
  if (props.overflowHorizontal && width !== lastWidth) {
    // recount the overflowing tabs from scratch when the width changes
    for (const tab of tabs) {
      tab.overflowing = false;
    }
  }
  lastWidth = width;
  handleScrollButtons();
  setAccentStyles();
}

function countOverflowingElements() {
  const list = tabListRef.value;
  if (!list) {
    return;
  }

  let changed = false;
  for (const tab of tabs) {
    if (!tab.overflowing && tab.el && !isElementInView(list, tab.el, false)) {
      tab.overflowing = true;
      changed = true;
    }
  }
  if (!changed) {
    return;
  }

  // move one more tab into the menu while the overflow tab does not fit
  nextTick(() => {
    if (list && overflowItemRef.value && !isElementInView(list, overflowItemRef.value, false)) {
      for (let i = tabs.length - 1; i >= 0; i--) {
        const tab = tabs[i];
        if (tab && !tab.overflowing) {
          tab.overflowing = true;
          return;
        }
      }
    }
  });
}

function handleScrollButtons() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const list = tabListRef.value;
    if (!list || props.vertical) {
      return;
    }

    if (props.overflowHorizontal) {
      showScrollButtons.value = false;
      countOverflowingElements();
      return;
    }

    // check if the first and the last elements are in view
    const overflowOnLeft = !isElementInView(list, list.firstElementChild, false);
    const overflowOnRight = !isElementInView(list, list.lastElementChild, false);
    showScrollButtons.value = overflowOnLeft || overflowOnRight;
    disableBackScrollButton.value = !overflowOnLeft;
    disableForwardScrollButton.value = !overflowOnRight;
  }, 100);
}

function isRtl() {
  return !!tabListRef.value && getComputedStyle(tabListRef.value).direction === 'rtl';
}

function scrollBack() {
  // find first Element that is fully in view on the left, then scroll to the element before it
  const list = tabListRef.value;
  if (!list) {
    return;
  }
  const children = Array.from(list.children);
  const firstInView = children.findIndex(child => isElementInView(list, child, false));
  const lastOutOfView = children[firstInView - 1];
  if (firstInView > 0 && lastOutOfView) {
    list.scrollLeft += isRtl() ? lastOutOfView.scrollWidth : -lastOutOfView.scrollWidth;
  }
}

function scrollForward() {
  // find last Element that is fully in view on the right, then scroll to the element after it
  const list = tabListRef.value;
  if (!list) {
    return;
  }
  const children = Array.from(list.children);
  let lastInView = children.length - 1;
  while (lastInView >= 0 && !isElementInView(list, children[lastInView]!, false)) {
    lastInView--;
  }
  const firstOutOfView = children[lastInView + 1];
  if (lastInView >= 0 && firstOutOfView) {
    list.scrollLeft += isRtl() ? -firstOutOfView.scrollWidth : firstOutOfView.scrollWidth;
  }
}

// --- overflow menu ---

function closeOverflowMenu() {
  overflowOpen.value = false;
  overflowToggleRef.value?.focus();
}

function toggleOverflowMenu() {
  overflowOpen.value = !overflowOpen.value;
  if (overflowOpen.value) {
    setTimeout(() => {
      overflowMenuRef.value?.el?.querySelector<HTMLElement>('li > button,input:not(:disabled)')?.focus();
    });
  }
}

function onOverflowSelect(event: Event, itemId: MenuItemId | null | undefined) {
  closeOverflowMenu();
  const tab = tabs.find(tab => tab.key === itemId);
  if (tab) {
    select(event, tab.key);
  }
}

useEventListener('click', (event: MouseEvent) => {
  const target = event.target as Node;
  if (
    overflowOpen.value &&
    !overflowMenuRef.value?.el?.contains(target) &&
    !overflowToggleRef.value?.contains(target)
  ) {
    closeOverflowMenu();
  }
});

useEventListener('keydown', (event: KeyboardEvent) => {
  if (overflowOpen.value && event.key === 'Escape' && overflowMenuRef.value?.el?.contains(event.target as Node)) {
    closeOverflowMenu();
  }
});

defineExpose({
  tabList: tabListRef,
});
</script>
