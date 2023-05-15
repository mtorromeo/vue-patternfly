<template>
  <li
    :class="[styles.menuListItem, {
      [styles.modifiers.disabled]: disabled,
      [styles.modifiers.currentPath]: effectiveOnPath,
      [styles.modifiers.load]: loadButton,
      [styles.modifiers.loading]: loading,
      [styles.modifiers.focus]: focused,
      [styles.modifiers.danger]: danger,
    }]"
    :role="check ? 'menuitem' : 'none'"
    @mouseover="onMouseOver"
  >
    <input v-if="name" type="hidden" :name="name" :value="value">

    <component
      :is="component"
      tabindex="-1"
      :class="[styles.menuItem, {[styles.modifiers.selected]: effectiveSelected && !check}]"
      :aria-current="ariaCurrent"
      :disabled="(disabled && !check && component !== 'a') || undefined"
      :role="(!$slots.flyoutMenu && !check) ? 'menuitem' : undefined"
      :for="check ? undefined : randomId"
      :href="component === 'a' ? to : undefined"
      :aria-disabled="component === 'a' && disabled ? disabled : undefined"
      :aria-expanded="onPath || flyoutVisible || undefined"
      :type="component === 'button' ? 'button' : undefined"
      @click="!check && onClick($event)"
    >
      <span :class="styles.menuItemMain">
        <span v-if="direction === 'up'" :class="styles.menuItemToggleIcon">
          <angle-left-icon aria-hidden />
        </span>
        <span v-if="$slots.icon" :class="styles.menuItemIcon">
          <slot name="icon" />
        </span>
        <span v-if="check" class="pf-c-menu__item-check">
          <pf-checkbox
            :id="randomId"
            :name="checkName"
            component="span"
            :model-value="effectiveSelected"
            :disabled="disabled"
            @change="onItemSelect($event)"
          />
        </span>
        <span :class="styles.menuItemText">
          <slot>
            {{ value }}
          </slot>
        </span>
        <span v-if="externalLink" :class="styles.menuItemExternalIcon">
          <up-right-from-square-icon aria-hidden />
        </span>
        <span v-if="$slots.flyoutMenu && direction === 'down'" :class="styles.menuItemToggleIcon">
          <angle-right-icon aria-hidden />
        </span>
        <span v-if="effectiveSelected" :class="styles.menuItemSelectIcon">
          <check-icon aria-hidden />
        </span>
      </span>
      <span v-if="($slots.description || description) && direction !== 'up'" :class="styles.menuItemDescription">
        <span>
          <slot name="description">
            {{ description }}
          </slot>
        </span>
      </span>
    </component>
    <slot v-if="flyoutVisible" name="flyoutMenu" />
    <!-- <slot name="drilldownMenu" /> -->
    <slot name="actions" />
    <pf-menu-item-action
      v-if="isDefined(favorited)"
      icon="favorites"
      :favorited="favorited"
      :aria-label="favorited ? 'starred' : 'not starred'"
      tabindex="-1"
      action-id="fav"
      @click="menu?.onActionClick?.($event)"
    />
  </li>
</template>

<script lang="ts">
export type MenuItemProvide = {
  disabled: boolean;
  itemId: ComputedRef<MenuItemId | null | undefined>;
};

export const MenuItemInjectionKey = Symbol('MenuItemInjectionKey') as InjectionKey<MenuItemProvide>;
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { computed, getCurrentInstance, inject, provide, ref, useSlots, type ComputedRef, type InjectionKey, type Ref } from 'vue';
import { getUniqueId } from '../../util';
import { MenuInjectionKey, type MenuItemId } from './Menu.vue';
import { isDefined } from '../../use';
import PfCheckbox from '../Checkbox.vue';
import PfMenuItemAction from './MenuItemAction.vue';
import AngleLeftIcon from '@vue-patternfly/icons/dist/esm/icons/angle-left-icon';
import AngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';
import UpRightFromSquareIcon from '@vue-patternfly/icons/dist/esm/icons/up-right-from-square-icon';
import CheckIcon from '@vue-patternfly/icons/dist/esm/icons/check-icon';

const $props = withDefaults(defineProps<{
  name?: string;
  value?: string;

  /** Target navigation link */
  to?: string;
  /** @beta Flag indicating the item has a checkbox */
  check?: boolean;
  /** @beta Name of the checkbox */
  checkName?: string;
  /** Flag indicating whether the item is active */
  active?: boolean;
  /** Flag indicating if the item is favorited */
  favorited?: boolean;
  /** Flag indicating if the item causes a load */
  loadButton?: boolean;
  /** Flag indicating a loading state */
  loading?: boolean;
  /** Component used to render the menu item */
  component?: string;
  /** Render item as disabled option */
  disabled?: boolean;
  /** Description of the menu item */
  description?: string;
  /** Render external link icon */
  externalLink?: boolean;
  /** Flag indicating if the option is selected */
  selected?: boolean;
  /** Flag indicating the item is focused */
  focused?: boolean;
  /** Flag indicating the item is in danger state */
  danger?: boolean;
  /** @beta Sub menu direction */
  direction?: 'down' | 'up';
  /** @beta True if item is on current selection path */
  onPath?: boolean;
}>(), {
  component: 'button',
  selected: undefined,
  favorited: undefined,
});

const emit = defineEmits<{
  /** Callback for item click */
  (name: 'click', event: Event): void;
  /** @beta Callback function when mouse leaves trigger */
  (name: 'showFlyout', event?: Event): void;
}>();

const $slots = useSlots();

const instance = getCurrentInstance();

const menu = inject(MenuInjectionKey);

const itemId = computed(() => $props.value === undefined ? instance?.vnode.key : $props.value);

provide(MenuItemInjectionKey, {
  disabled: $props.disabled,
  itemId,
});

// if (!menu) {
//   throw new Error('MenuItems can only be used inside Menu components');
// }

const component = computed(() => {
  if ($props.to) {
    return 'a';
  }
  if ($props.check) {
    return 'label';
  }
  return $props.component;
});

const effectiveOnPath = computed(() => $props.onPath/*  || (itemId.value && menu?.drilldownItemPath?.includes(itemId.value)) */);

const effectiveSelected = computed(() => {
  if (isDefined($props.selected)) {
    return $props.selected;
  }
  return menu?.selected?.value && Array.isArray(menu.selected.value) ? menu.selected.value.includes($props.value as any) : menu?.selected?.value === $props.value;
});

const ariaCurrent = computed(() => {
  if (isDefined($props.active)) {
    if ($props.active) {
      return 'page';
    } else {
      return null;
    }
  } else if (isDefined(itemId.value) && isDefined(menu?.activeItemId)) {
    return itemId.value === menu?.activeItemId;
  }
  return null;
});

const flyoutTarget: Ref<HTMLElement | null> = ref(null);
const flyoutVisible = computed(() => instance && instance === menu?.flyout.value);

function onMouseOver() {
  if (!menu || menu.state.disableHover) {
    return;
  }
  if ($slots.flyoutMenu) {
    showFlyout(true);
  } else {
    menu.flyout.value = null;
  }
}

function showFlyout(show: boolean) {
  if (!menu) {
    return;
  }
  if (!flyoutVisible.value && show) {
    menu.flyout.value = instance;
  } else if (flyoutVisible.value && !show) {
    menu.flyout.value = null;
  }
  emit('showFlyout');
}

const randomId = getUniqueId();

function onClick(event: MouseEvent) {
  onItemSelect(event);

  // if (itemId.value) {
  //   if (props.direction === 'down') {
  //     menu?.onDrillIn?.(
  //       menuId,
  //       typeof drilldownMenu === 'function'
  //         ? (drilldownMenu() as any).props.id
  //         : drilldownMenu.props.id,
  //         itemId.value
  //     );
  //   } else if (props.direction) {
  //     menu?.onDrillOut?.(parentMenu, itemId.value);
  //   }
  // }

  if ($slots.flyoutMenu) {
    handleFlyout(event);
  }
}

function onItemSelect(event: Event) {
  menu?.onSelect?.(event, itemId.value);
  emit('click', event);
}

function handleFlyout(event: KeyboardEvent | MouseEvent) {
  const key = (event as KeyboardEvent).key;
  const target = event.target;
  const type = event.type;

  if (key === ' ' || key === 'Enter' || key === 'ArrowRight' || type === 'click') {
    event.stopPropagation();
    if (!flyoutVisible.value && target instanceof HTMLElement) {
      showFlyout(true);
      flyoutTarget.value = target;
    }
  }

  if (key === 'Escape' || key === 'ArrowLeft') {
    if (flyoutVisible.value) {
      event.stopPropagation();
      showFlyout(false);
    }
  }
}
</script>
