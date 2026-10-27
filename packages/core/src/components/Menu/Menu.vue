<template>
  <div
    v-bind="ouiaProps"
    :id="effectiveId"
    ref="elRef"
    :class="[
      styles.menu,
      {
        [styles.modifiers.plain]: plain,
        [styles.modifiers.scrollable]: scrollable,
        [styles.modifiers.flyout]: containsFlyout,
        'pf-m-nav': navFlyout,
        [styles.modifiers.drilldown]: containsDrilldown,
        [styles.modifiers.drilledIn]: effectiveMenuDrilledIn,
      },
    ]"
    @keydown="!submenu && handleKeyboard($event)"
  >
    <template v-if="favoriteCount">
      <pf-menu-group :label="favoritesLabel ?? messages.menuFavorites">
        <pf-menu-list ref="favoriteListRef" />
      </pf-menu-group>
      <pf-divider />
    </template>

    <auto-wrap
      :options="[
        { component: PfMenuInput, include: [PfTextInput, PfTextInputGroup, PfSearchInput] },
        { component: PfMenuContent, include: [PfMenuGroup, PfMenuList, PfMenuItem] },
      ]"
    >
      <slot />
    </auto-wrap>
  </div>
</template>

<script lang="ts">
import type { MenuItemId } from './common';

export {
  MenuInjectionKey,
  MenuItemsKey,
  type MenuItemId,
  type MenuItemTrack,
  type MenuProvide,
  type MenuState,
} from './common';

/** Provided by pf-drilldown-menu to mark its menu as a drilldown submenu */
export const DrilldownSubmenuKey = Symbol('DrilldownSubmenuKey') as InjectionKey<boolean>;

interface Props<T> extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'onSelect'> {
  /** ID of the menu. Generated when not set, it identifies the menus of a drilldown. */
  id?: string;
  /** Single itemId for single select menus, or array of itemIds for multi select. You can also specify isSelected on the MenuItem. */
  selected?: T | null;
  /** @beta Indicates if menu contains a flyout menu */
  containsFlyout?: boolean;
  /** @beta Indicating that the menu should have nav flyout styling */
  navFlyout?: boolean;
  /** Indicates if menu contains a drilldown menu */
  containsDrilldown?: boolean;
  /** Indicates if a menu is drilled into */
  menuDrilledIn?: boolean;
  /** @beta itemId of the currently active item. You can also specify isActive on the MenuItem. */
  activeItemId?: MenuItemId;
  /** Indicates if the menu should be without the outer box-shadow */
  plain?: boolean;
  /** Indicates if the menu should be scrollable */
  scrollable?: boolean;
  /** Determines the accessible role of the menu. For a non-checkbox menu that can have one or more items selected, pass in "listbox". */
  role?: string;
  /** Callback called when an MenuItems's action button is clicked. You can also specify it within a MenuItemAction. */
  onActionClick?: (event: Event, itemId?: MenuItemId, actionId?: unknown) => void;

  /** Label of the group of favorite items. Defaults to the `menuFavorites` message. */
  favoritesLabel?: string;
}
</script>

<script lang="ts" setup generic="T extends MenuItemId | MenuItemId[] = MenuItemId | MenuItemId[]">
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { usePfMessages } from '../../messages';
import breadcrumbStyles from '@patternfly/react-styles/css/components/Breadcrumb/breadcrumb';
import dividerStyles from '@patternfly/react-styles/css/components/Divider/divider';
import {
  inject,
  provide,
  reactive,
  shallowRef,
  computed,
  getCurrentInstance,
  onMounted,
  onUpdated,
  useId,
  type ComponentInternalInstance,
  type InjectionKey,
  type Ref,
  type HTMLAttributes,
  useModel,
  useTemplateRef,
} from 'vue';
import { useEventListener } from '@vueuse/core';
import { provideChildrenTracker } from '../../use';
import { MenuInjectionKey, MenuItemsKey, type MenuProvide, type MenuState } from './common';
import { isDefined } from '@vueuse/shared';
import AutoWrap from '../../helpers/AutoWrap.vue';
import PfDivider from '../Divider.vue';
import PfMenuContent from './MenuContent.vue';
import PfMenuGroup from './MenuGroup.vue';
import PfMenuList from './MenuList.vue';
import PfMenuItem from './MenuItem.vue';
import PfMenuInput from './MenuInput.vue';
import PfTextInput from '../TextInput.vue';
import PfTextInputGroup from '../TextInputGroup/TextInputGroup.vue';
import PfSearchInput from '../SearchInput/SearchInput.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { ComponentExposed } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfMenu',
});

const props = withDefaults(defineProps<Props<T>>(), {
  selected: null,
  role: 'menu',
  ouiaSafe: true,
});
const messages = usePfMessages();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const emit = defineEmits<{
  /** A callback for when the input value changes. */
  (name: 'searchInputChange', event: Event, value: string): void;
  /** Callback for updating when item selection changes. You can also specify onClick on the MenuItem. */
  (name: 'select', event: Event, itemId: MenuItemId | null | undefined): void;
  // Deselecting the selected item of a single select menu emits null
  (name: 'update:selected', value: T extends unknown[] ? T : T | null): void;
  /** Drilling into a submenu, from the menu fromMenuId to toMenuId through the item itemId */
  (name: 'drillIn', event: Event, fromMenuId: string, toMenuId: string, itemId: MenuItemId | null | undefined): void;
  /** Drilling out of a submenu, to the menu toMenuId through the item itemId */
  (name: 'drillOut', event: Event, toMenuId: string, itemId: MenuItemId | null | undefined): void;
  /** Height of the content of a menu of the drilldown */
  (name: 'getMenuHeight', menuId: string, height: number): void;
}>();

const selected = useModel(props, 'selected') as Ref<MenuItemId | MenuItemId[] | null>;

const instance = getCurrentInstance();
/** Like upstream, items are selected only when the parent passes `selected` (or binds it with v-model) */
function tracksSelection() {
  const vnodeProps = instance?.vnode.props;
  return !!vnodeProps && ('selected' in vnodeProps || 'onUpdate:selected' in vnodeProps);
}

/** Ids of the drilled in menus of a drilldown */
const drilledInMenus = defineModel<string[]>('drilledInMenus', { default: () => [] });
/** Path of the drilled in item ids of a drilldown */
const drilldownItemPath = defineModel<MenuItemId[]>('drilldownItemPath', { default: () => [] });
/** ID of the currently active menu of a drilldown, defaults to the root menu */
const activeMenu = defineModel<string | undefined>('activeMenu', { default: undefined });

const generatedId = useId();
const effectiveId = computed(() => props.id ?? `pf-menu-${generatedId}`);

const el = useTemplateRef('elRef');

const favoriteList = useTemplateRef<ComponentExposed<typeof PfMenuList>>('favoriteListRef');
const items = provideChildrenTracker(MenuItemsKey);
const favoriteCount = computed(() => items.reduce((c, i) => c + (i.favorited ? 1 : 0), 0));

const state: MenuState = reactive({
  transitionMoveTarget: null,
  disableHover: false,
});

const flyout: Ref<ComponentInternalInstance | null> = shallowRef(null);

const parentMenu = inject(MenuInjectionKey, undefined);
/** A drilldown submenu delegates selection and drilldown state to the menu it belongs to */
const submenu = inject(DrilldownSubmenuKey, false);
provide(DrilldownSubmenuKey, false);
const root = submenu ? parentMenu : undefined;

const heights = reactive<Record<string, number>>({});
const effectiveActiveMenu = computed(() => activeMenu.value ?? effectiveId.value);

const effectiveMenuDrilledIn = computed(
  () => props.menuDrilledIn || (root ?? context).drilledInMenus.value.includes(effectiveId.value),
);

function onSelect(event: Event, itemId: MenuItemId | null | undefined) {
  emit('select', event, itemId);
  if (!isDefined(itemId)) {
    return;
  }
  const current = tracksSelection() ? selected.value : null;
  let value: MenuItemId | MenuItemId[] | null;
  if (Array.isArray(current)) {
    value = current.includes(itemId) ? current.filter(id => id !== itemId) : [...current, itemId];
  } else {
    value = current === itemId ? null : itemId;
  }
  if (tracksSelection()) {
    selected.value = value;
  } else {
    // an unbound menu keeps no selection, but still reports it
    emit('update:selected', value as T extends unknown[] ? T : T | null);
  }
}

/** First enabled item of the menu with the given id, focused after drilling into it */
function firstItemOf(menuId: string) {
  const menu = el.value?.querySelector(`#${CSS.escape(menuId)}`) ?? el.value;
  return navigableElementsOf(menu ?? null)
    .map(getFocusableElement)
    .find((e): e is HTMLElement => e instanceof HTMLElement);
}

let transitionTimeout: ReturnType<typeof setTimeout> | undefined;

function setTransitionMoveTarget(target: HTMLElement | null | undefined) {
  state.transitionMoveTarget = target ?? null;
  clearTimeout(transitionTimeout);
  // fallback when no transition runs
  transitionTimeout = setTimeout(focusTransitionMoveTarget, 500);
}

function focusTransitionMoveTarget() {
  clearTimeout(transitionTimeout);
  const target = state.transitionMoveTarget;
  if (target) {
    state.transitionMoveTarget = null;
    target.tabIndex = 0;
    target.focus();
  }
}

function onDrillIn(event: Event, fromMenuId: string, toMenuId: string, itemId: MenuItemId | null | undefined) {
  emit('drillIn', event, fromMenuId, toMenuId, itemId);
  drilledInMenus.value = [...drilledInMenus.value, fromMenuId];
  if (isDefined(itemId)) {
    drilldownItemPath.value = [...drilldownItemPath.value, itemId];
  }
  activeMenu.value = toMenuId;
  setTransitionMoveTarget(firstItemOf(toMenuId));
}

function onDrillOut(event: Event, toMenuId: string, itemId: MenuItemId | null | undefined) {
  emit('drillOut', event, toMenuId, itemId);
  // the item that opened the left submenu gets the focus back
  const leftMenu = event.target instanceof Element ? event.target.closest(`.${styles.menu}`) : null;
  const opener = leftMenu?.parentElement?.querySelector<HTMLElement>(`:scope > .${styles.menuItem}`);
  drilledInMenus.value = drilledInMenus.value.slice(0, -1);
  drilldownItemPath.value = drilldownItemPath.value.slice(0, -1);
  activeMenu.value = toMenuId;
  setTransitionMoveTarget(opener);
}

function onGetMenuHeight(menuId: string, height: number) {
  emit('getMenuHeight', menuId, height);
  if (heights[menuId] === undefined || (menuId !== effectiveId.value && heights[menuId] !== height)) {
    heights[menuId] = height;
  }
}

const context: MenuProvide = {
  parentMenu,
  menuId: effectiveId,
  parentMenuId: computed(() => (root ? root.menuId.value : effectiveId.value)),
  favoriteList,
  selected: root?.selected ?? (tracksSelection() ? selected : undefined),
  role: root?.role ?? computed(() => props.role),
  activeItemId: root?.activeItemId ?? (() => props.activeItemId),
  state,
  flyout,
  onActionClick: root?.onActionClick ?? props.onActionClick,
  onSelect: root?.onSelect ?? onSelect,
  drilldownItemPath: root?.drilldownItemPath ?? computed(() => drilldownItemPath.value),
  drilledInMenus: root?.drilledInMenus ?? computed(() => drilledInMenus.value),
  onDrillIn: root?.onDrillIn ?? onDrillIn,
  onDrillOut: root?.onDrillOut ?? onDrillOut,
  onGetMenuHeight: root?.onGetMenuHeight ?? onGetMenuHeight,
  drilldownMenuHeight:
    root?.drilldownMenuHeight ??
    computed(() =>
      props.containsDrilldown && heights[effectiveActiveMenu.value] !== undefined
        ? `${heights[effectiveActiveMenu.value]}px`
        : undefined,
    ),
};
provide(MenuInjectionKey, context);

if (!submenu) {
  useEventListener(window, 'transitionend', (event: TransitionEvent) => {
    const current = el.value;
    const target = event.target instanceof Element ? event.target.closest(`.${styles.menu}`) : null;
    if (!props.containsDrilldown || !current || !target || !current.contains(target)) {
      return;
    }
    focusTransitionMoveTarget();
  });
}

/** Allows tabbing to the first menu item */
function allowTabFirstItem() {
  const first = el.value?.querySelector<HTMLElement>('ul button:not(:disabled), ul a:not(:disabled)');
  if (first && !el.value?.querySelector('ul [tabindex="0"]')) {
    first.tabIndex = 0;
  }
}

onMounted(allowTabFirstItem);
onUpdated(allowTabFirstItem);

function isNavigable(element: Element) {
  return !element.classList.contains(styles.modifiers.disabled) && !element.classList.contains(dividerStyles.divider);
}

function navigableElementsOf(menu: Element | null) {
  return Array.from(menu?.getElementsByTagName('UL')[0]?.children ?? []).filter(isNavigable);
}

/** Items the vertical arrow keys move between: those of the active drilldown menu, or all of them */
function createNavigableElements(active: Element | null) {
  if (props.containsDrilldown) {
    const target = active?.closest(`.${styles.menu}`) ?? null;
    const activeMenuEl = el.value?.contains(target)
      ? target
      : el.value?.querySelector(`#${CSS.escape(effectiveActiveMenu.value)}`);
    return navigableElementsOf(activeMenuEl ?? el.value);
  }
  return Array.from(el.value?.getElementsByTagName('LI') ?? []).filter(isNavigable);
}

function isActiveElement(element: Element, active: Element | null) {
  return (
    !!active &&
    (active.closest('li') === element ||
      active.parentElement === element ||
      active.closest(`.${styles.menuSearch}`) === element ||
      active.closest('ol')?.firstChild === element)
  );
}

function getFocusableElement(element: Element) {
  if (element.tagName === 'DIV') {
    return element.querySelector('input');
  }
  const item = element.querySelector(`.${styles.menuItem}`);
  if (item?.tagName === 'LABEL') {
    return item.querySelector('input');
  }
  return item ?? element.querySelector('a, button, input');
}

function moveFocus(from: Element | null, to: Element | null | undefined) {
  if (!(to instanceof HTMLElement)) {
    return;
  }
  if (from instanceof HTMLElement) {
    from.tabIndex = -1;
  }
  to.tabIndex = 0;
  to.focus();
}

function handleKeyboard(event: KeyboardEvent) {
  const target = event.target instanceof HTMLElement ? event.target : null;
  // the element the keys apply to: the focused element inside the menu, or the event target
  const focused = document.activeElement;
  const active =
    focused && el.value?.contains(focused) ? focused : target && el.value?.contains(target) ? target : focused;
  const key = event.key;

  if (key === 'ArrowUp' || key === 'ArrowDown') {
    const elements = createNavigableElements(active);
    if (!elements.length) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();

    const index = elements.findIndex(e => isActiveElement(e, active));
    if (index < 0) {
      // from outside the menu, like its toggle: focus the first or the last item
      const candidates = key === 'ArrowDown' ? elements : [...elements].reverse();
      moveFocus(
        null,
        candidates.map(getFocusableElement).find(e => e instanceof HTMLElement),
      );
      return;
    }
    for (let increment = 1; increment < elements.length; increment++) {
      const next =
        elements[(index + (key === 'ArrowDown' ? increment : -increment) + elements.length) % elements.length];
      const focusable = getFocusableElement(next);
      if (focusable) {
        moveFocus(active, focusable);
        return;
      }
    }
    return;
  }

  const fromBreadcrumbOrInput =
    !!active && (active.classList.contains(breadcrumbStyles.breadcrumbLink) || active.tagName === 'INPUT');

  if ((key === 'ArrowLeft' || key === 'ArrowRight') && !fromBreadcrumbOrInput) {
    const li = active?.closest('li');
    if (!li || !el.value?.contains(li)) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    // move between the item and its actions
    const row = Array.from(li.querySelectorAll<HTMLElement>('a, button, input')).filter(e => e.closest('li') === li);
    const index = row.findIndex(e => e === active || e.contains(active));
    const next = row[index + (key === 'ArrowLeft' ? -1 : 1)];
    if (next) {
      moveFocus(active, next);
    }
    return;
  }

  if ((key === ' ' || key === 'Enter') && target?.tagName !== 'INPUT' && active instanceof HTMLElement) {
    if (!el.value?.contains(active)) {
      return;
    }
    event.preventDefault();
    active.click();
  }
}

defineExpose({
  el,
  items,
  handleKeyboard,
});
</script>
