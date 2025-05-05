<template>
  <teleport-copy v-slot="{ copy }" :disabled="!menu?.favoriteList.value?.$el || !favorited" :to="menu?.favoriteList.value?.$el">
    <li
      ref="elRef"
      v-bind="{...ouiaProps, ...$attrs}"
      :class="[styles.menuListItem, {
        [styles.modifiers.disabled]: disabled,
        [styles.modifiers.currentPath]: effectiveOnPath,
        [styles.modifiers.load]: loadButton,
        [styles.modifiers.loading]: loading,
        [styles.modifiers.focus]: isFocused,
        [styles.modifiers.danger]: danger,
      }]"
      :role="check ? 'menuitem' : 'none'"
      @mouseover="onMouseOver"
    >
      <input v-if="!copy && name" type="hidden" :name="name" :value="value">

      <component
        :is="component"
        ref="menuItemRef"
        v-bind="componentAttrs"
        tabindex="-1"
        :class="[styles.menuItem, {[styles.modifiers.selected]: effectiveSelected && !check}]"
        :aria-current="ariaCurrent"
        :disabled="(disabled && !check && component !== 'a') || undefined"
        :role="(!$slots['flyout-menu'] && !check) ? 'menuitem' : undefined"
        :for="copy || check ? undefined : randomId"
        :href="component === 'a' ? to : undefined"
        :aria-disabled="component === 'a' && disabled ? disabled : undefined"
        :aria-expanded="onPath || flyoutVisible || undefined"
        :type="component === 'button' ? 'button' : undefined"
        :target="component === 'a' ? target : undefined"
        :referrerpolicy="component === 'a' ? referrerpolicy : undefined"
        :download="component === 'a' ? download : undefined"
        @click="!check && onClick($event)"
      >
        <span :class="styles.menuItemMain">
          <span v-if="direction === 'up'" :class="styles.menuItemToggleIcon">
            <angle-left-icon aria-hidden />
          </span>
          <span v-if="$slots.icon" :class="styles.menuItemIcon">
            <slot name="icon" />
          </span>
          <span v-if="check" :class="styles.menuItemCheck">
            <pf-checkbox
              :id="copy ? undefined : randomId"
              :name="copy ? undefined : checkName"
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
          <span v-if="$slots['flyout-menu'] && direction === 'down'" :class="styles.menuItemToggleIcon">
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
      <slot v-if="flyoutVisible" name="flyout-menu" />
      <!-- <slot name="drilldown-menu" /> -->
      <slot name="actions" />
      <pf-menu-item-action
        v-if="isDefined(favorited)"
        icon="favorites"
        :favorited="favorited"
        :aria-label="favorited ? 'starred' : 'not starred'"
        tabindex="-1"
        action-id="fav"
        @click="favorited = !favorited"
      />
    </li>
  </teleport-copy>
</template>

<script lang="ts">
export type MenuItemProvide = {
  disabled: boolean;
  itemId: ComputedRef<MenuItemId | null | undefined>;
};

export const MenuItemInjectionKey = Symbol('MenuItemInjectionKey') as InjectionKey<MenuItemProvide>;

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<LiHTMLAttributes, 'role' | 'onMouseover' | 'onClick'> {
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
  /** Flag indicating if the item causes a load */
  loadButton?: boolean;
  /** Flag indicating a loading state */
  loading?: boolean;
  /** Component used to render the menu item */
  component?: string;
  /** Additional attrs added to the link component */
  componentAttrs?: Omit<ButtonHTMLAttributes, 'href' | 'aria-current' | 'disabled' | 'role' | 'for' | 'aria-disabled' | 'aria-expanded' | 'type' | 'download' | 'onClick'> | Omit<AnchorHTMLAttributes, 'href' | 'aria-current' | 'disabled' | 'role' | 'for' | 'aria-disabled' | 'aria-expanded' | 'type' | 'download' | 'onClick' | 'target' | 'referrerpolicy'>;
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
  /** Navigation link download. Only set when the to property is present. */
  download?: string;
  /** Navigation link target. */
  target?: string;
  /** Navigation link referrerpolicy. */
  referrerpolicy?: AnchorHTMLAttributes['referrerpolicy'];
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { computed, getCurrentInstance, inject, provide, ref, type ComputedRef, type InjectionKey, type Ref, type LiHTMLAttributes, type ButtonHTMLAttributes, type AnchorHTMLAttributes, useId, useTemplateRef, onMounted, nextTick, watch } from 'vue';
import { MenuInjectionKey, MenuItemsKey, type MenuItemId } from './Menu.vue';
import PfCheckbox from '../Checkbox.vue';
import PfMenuItemAction from './MenuItemAction.vue';
import AngleLeftIcon from '@vue-patternfly/icons/angle-left-icon';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import UpRightFromSquareIcon from '@vue-patternfly/icons/up-right-from-square-icon';
import CheckIcon from '@vue-patternfly/icons/check-icon';
import { isDefined } from '@vueuse/shared';
import { useChildrenTracker } from '../../use';
import TeleportCopy from '../../helpers/TeleportCopy.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfMenuItem',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  component: 'button',
  selected: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

/** Flag indicating if the item is favorited */
const favorited = defineModel<boolean | undefined>('favorited', { default: undefined });

const emit = defineEmits<{
  /** Callback for item click */
  (name: 'click', event: Event): void;
  /** @beta Callback function when mouse leaves trigger */
  (name: 'show-flyout', event?: Event): void;
}>();

const $slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
  description?: (props?: Record<never, never>) => any;
  'flyout-menu'?: (props?: Record<never, never>) => any;
  actions?: (props?: Record<never, never>) => any;
}>();

const instance = getCurrentInstance();

const itemId = computed(() => props.value === undefined ? instance?.vnode.key : props.value);
const el = useTemplateRef('elRef');
const menuItem = useTemplateRef<HTMLElement>('menuItemRef');
const isFocused = ref(props.focused);

const menu = inject(MenuInjectionKey);
useChildrenTracker(MenuItemsKey, {
  element: el,
  disabled: computed(() => props.disabled),
  focused: isFocused,
  favorited,
  focus,
});

watch(() => props.focused, (value) => {
  isFocused.value = value;
});

provide(MenuItemInjectionKey, {
  disabled: props.disabled,
  itemId,
});

onMounted(() => {
  if (!menu) {
    throw new Error('MenuItems can only be used inside Menu components');
  }
  if (isFocused.value) {
    nextTick(focus);
  }
});

const component = computed(() => {
  if (props.to) {
    return 'a';
  }
  if (props.check) {
    return 'label';
  }
  return props.component;
});

const effectiveOnPath = computed(() => props.onPath/*  || (itemId.value && menu?.drilldownItemPath?.includes(itemId.value)) */);

const effectiveSelected = computed(() => {
  if (isDefined(props.selected)) {
    return props.selected;
  }
  return menu?.selected?.value && Array.isArray(menu.selected.value) ? menu.selected.value.includes(props.value as any) : menu?.selected?.value === props.value;
});

const ariaCurrent = computed(() => {
  if (isDefined(props.active)) {
    if (props.active) {
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
  if ($slots['flyout-menu']) {
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
  emit('show-flyout');
}

const randomId = useId();

function onClick(event: PointerEvent) {
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

  if ($slots['flyout-menu']) {
    handleFlyout(event);
  }
}

function onItemSelect(event: Event) {
  menu?.onSelect?.(event, itemId.value);
  emit('click', event);
}

function handleFlyout(event: PointerEvent | KeyboardEvent) {
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

function focus() {
  if (!menuItem.value) {
    return;
  }
  menuItem.value.focus();
  menuItem.value.scrollIntoView({
    behavior: 'auto',
    block: 'nearest',
  });
}

defineExpose({
  focus,
  focused: isFocused,
});
</script>
