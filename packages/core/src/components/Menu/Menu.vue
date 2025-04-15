<template>
  <div
    v-bind="ouiaProps"
    ref="el"
    :class="[styles.menu, {
      [styles.modifiers.plain]: plain,
      [styles.modifiers.scrollable]: scrollable,
      [styles.modifiers.flyout]: containsFlyout,
      [styles.modifiers.nav]: navFlyout,
    // [styles.modifiers.drilldown]: containsDrilldown,
    // [styles.modifiers.drilledIn]: effectiveMenuDrilledIn,
    }]"
  >
    <template v-if="favoriteCount">
      <pf-menu-group :label="favoritesLabel">
        <pf-menu-list ref="favoriteList" />
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
export type MenuProvide = {
  parentMenu: MenuProvide | undefined;
  favoriteList: Ref<InstanceType<typeof PfMenuList> | null>;
  selected?: WritableComputedRef<MenuItemId | MenuItemId[] | null>;
  // drilldownItemPath: MenuItemId[];
  activeItemId?: MenuItemId;
  state: MenuState;
  flyout: Ref<ComponentInternalInstance | null>;
  onActionClick?: (event: Event, itemId?: MenuItemId, actionId?: any) => void;
  onSelect?: (event: Event, itemId: MenuItemId | null | undefined) => void;
  // onDrillIn?: (fromItemId: MenuItemId, toItemId: MenuItemId, itemId: MenuItemId) => void;
  // onDrillOut?: (toItemId: MenuItemId, itemId: MenuItemId) => void;
};

export const MenuItemsKey = Symbol("MenuItemsKey") as ChildrenTrackerInjectionKey<InstanceType<typeof PfMenuItem>>;
export const MenuInjectionKey = Symbol('MenuInjectionKey') as InjectionKey<MenuProvide>;

export interface MenuState {
  // ouiaStateId: string;
  transitionMoveTarget: HTMLElement | null;
  // flyoutRef: React.Ref<HTMLLIElement> | null;
  disableHover: boolean;
}

export type MenuItemId = string | number | symbol;

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'onSelect'> {
  /** Single itemId for single select menus, or array of itemIds for multi select. You can also specify isSelected on the MenuItem. */
  selected?: MenuItemId | MenuItemId[] | null;
  /** @beta Indicates if menu contains a flyout menu */
  containsFlyout?: boolean;
  /** @beta Indicating that the menu should have nav flyout styling */
  navFlyout?: boolean;
  // /** @beta Indicates if menu contains a drilldown menu */
  // containsDrilldown?: boolean;
  /** @beta Indicates if a menu is drilled into */
  menuDrilledIn?: boolean;
  // /** @beta Indicates the path of drilled in menu itemIds */
  // drilldownItemPath?: MenuItemId[];
  // /** @beta Array of menus that are drilled in */
  // drilledInMenus?: MenuItemId[];
  /** @beta itemId of the currently active item. You can also specify isActive on the MenuItem. */
  activeItemId?: MenuItemId;
  /** Internal flag indicating if the Menu is the root of a menu tree */
  rootMenu?: boolean;
  /** Indicates if the menu should be without the outer box-shadow */
  plain?: boolean;
  /** Indicates if the menu should be scrollable */
  scrollable?: boolean;
  /** Callback called when an MenuItems's action button is clicked. You can also specify it within a MenuItemAction. */
  onActionClick?: (event: Event, itemId?: MenuItemId, actionId?: any) => void;
  // /** @beta Callback for drilling into a submenu */
  // onDrillIn?: (fromItemId: MenuItemId, toItemId: MenuItemId, itemId: MenuItemId) => void;
  // /** @beta Callback for drilling out of a submenu */
  // onDrillOut?: (toItemId: MenuItemId, itemId: MenuItemId) => void;

  favoritesLabel?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { inject, provide, reactive, ref, computed, type ComponentInternalInstance, type InjectionKey, type Ref, type WritableComputedRef, type HTMLAttributes, useTemplateRef } from 'vue';
import { provideChildrenTracker, useManagedProp, type ChildrenTrackerInjectionKey } from '../../use';
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

defineOptions({
  name: 'PfMenu',
});

const props = withDefaults(defineProps<Props>(), {
  // drilldownItemPath: () => [],
  favoritesLabel: 'Favorites',
});

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();

const emit = defineEmits<{
  /** A callback for when the input value changes. */
  (name: 'search-input-change', event: Event, value: string): void;
  /** Callback for updating when item selection changes. You can also specify onClick on the MenuItem. */
  (name: 'select', event: Event, itemId: MenuItemId | null | undefined): void;
  (name: 'update:selected', value: MenuItemId | MenuItemId[] | null): void;
}>();

const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

// const instance = getCurrentInstance();

const el = useTemplateRef('el');
const managedSelected = useManagedProp<MenuItemId | MenuItemId[] | null>('selected', null);

const favoriteList = useTemplateRef<InstanceType<typeof PfMenuList>>('favoriteList');
const items = provideChildrenTracker(MenuItemsKey);
const favoriteCount = computed(() => items.reduce((c, i) => c + (i.favorited ? 1 : 0), 0));

const state: MenuState = reactive({
  // ouiaStateId: getDefaultOUIAId(Menu.displayName),
  transitionMoveTarget: null,
  disableHover: false,
});

const flyout: Ref<ComponentInternalInstance | null> = ref(null);

// const effectiveMenuDrilledIn = computed(() => $props.menuDrilledIn || (instance?.vnode.key && $props.drilledInMenus?.includes(instance?.vnode.key)));

const parentMenu = inject(MenuInjectionKey, undefined);

provide(MenuInjectionKey, {
  parentMenu,
  favoriteList,
  selected: managedSelected,
  // drilldownItemPath: $props.drilldownItemPath,
  activeItemId: props.activeItemId,
  state,
  flyout,
  onActionClick: props.onActionClick,
  onSelect(event: Event, itemId: MenuItemId | null | undefined) {
    emit('select', event, itemId);
    if (!isDefined(itemId)) {
      return;
    }
    if (Array.isArray(managedSelected.value)) {
      const i = managedSelected.value.indexOf(itemId);
      if (i >= 0) {
        const value = [...managedSelected.value];
        value.splice(i, 1);
        emit('update:selected', value);
      } else {
        emit('update:selected', [...managedSelected.value, itemId]);
      }
    } else {
      if (managedSelected.value === itemId) {
        emit('update:selected', null);
      } else {
        emit('update:selected', itemId);
      }
    }
  },
  // onDrillIn: $props.onDrillIn,
  // onDrillOut: $props.onDrillOut,
});

defineExpose({
  el,
});
</script>
