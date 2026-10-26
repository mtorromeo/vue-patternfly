<template>
  <teleport-copy
    v-slot="{ copy }"
    :disabled="!menu?.favoriteList.value?.$el || !favorited"
    :to="menu?.favoriteList.value?.$el"
  >
    <li
      ref="elRef"
      v-bind="{ ...ouiaProps, ...$attrs }"
      :class="[
        styles.menuListItem,
        {
          [styles.modifiers.disabled]: disabled,
          [styles.modifiers.ariaDisabled]: ariaDisabled,
          [styles.modifiers.currentPath]: effectiveOnPath,
          [styles.modifiers.load]: loadButton,
          [styles.modifiers.loading]: loading,
          [styles.modifiers.focus]: isFocused,
          [styles.modifiers.danger]: danger,
        },
      ]"
      :role="check ? 'menuitem' : 'none'"
      @mouseover="!ariaDisabled && onMouseOver()"
      @keydown="$slots['flyout-menu'] && !ariaDisabled ? handleFlyout($event) : undefined"
    >
      <input v-if="!copy && name" type="hidden" :name="name" :value="value" />

      <component
        :is="tooltip || $slots.tooltip ? PfTooltip : PassThrough"
        v-bind="tooltip || $slots.tooltip ? { ...tooltipAttrs, content: tooltip } : {}"
      >
        <template v-if="$slots.tooltip" #content>
          <slot name="tooltip" />
        </template>
        <component
          :is="component"
          ref="menuItemRef"
          v-bind="componentAttrs"
          tabindex="-1"
          :class="[styles.menuItem, { [styles.modifiers.selected]: effectiveSelected && !check }]"
          :aria-current="ariaCurrent"
          :disabled="(disabled && !check && component !== 'a') || undefined"
          :role="!$slots['flyout-menu'] && !check ? (selectMenu ? 'option' : 'menuitem') : undefined"
          :aria-selected="!$slots['flyout-menu'] && !check && selectMenu ? !!effectiveSelected : undefined"
          :aria-haspopup="$slots['flyout-menu'] && !effectiveOnPath ? 'menu' : undefined"
          :for="copy || check ? undefined : randomId"
          :href="component === 'a' ? to : undefined"
          :aria-disabled="(component === 'a' && disabled) || ariaDisabled || undefined"
          :aria-expanded="effectiveOnPath ? true : $slots['flyout-menu'] ? !!flyoutVisible : undefined"
          :type="component === 'button' ? 'button' : undefined"
          :target="component === 'a' ? (externalLink ? '_blank' : target) : undefined"
          :referrerpolicy="component === 'a' ? referrerpolicy : undefined"
          :download="component === 'a' ? download : undefined"
          @click="!check && onClick($event)"
        >
          <span :class="styles.menuItemMain">
            <span v-if="direction === 'up'" :class="styles.menuItemToggleIcon">
              <angle-left-icon aria-hidden="true" />
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
              <up-right-from-square-icon aria-hidden="true" />
            </span>
            <span v-if="$slots['flyout-menu'] || direction === 'down'" :class="styles.menuItemToggleIcon">
              <angle-right-icon aria-hidden="true" />
            </span>
            <span v-if="effectiveSelected" :class="styles.menuItemSelectIcon">
              <check-icon aria-hidden="true" />
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
      </component>
      <slot v-if="flyoutVisible" name="flyout-menu" />
      <slot name="drilldown-menu" />
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
export { MenuItemInjectionKey, type MenuItemProvide } from './common';

interface Props extends OUIAProps, /* @vue-ignore */ Omit<LiHTMLAttributes, 'role' | 'onMouseover' | 'onClick'> {
  /** Name of a hidden input submitting the item value with a form */
  name?: string;
  /** Identifies the item in the menu select event */
  value?: string | number;

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
  componentAttrs?:
    | Omit<
        ButtonHTMLAttributes,
        | 'href'
        | 'aria-current'
        | 'disabled'
        | 'role'
        | 'for'
        | 'aria-disabled'
        | 'aria-expanded'
        | 'type'
        | 'download'
        | 'onClick'
      >
    | Omit<
        AnchorHTMLAttributes,
        | 'href'
        | 'aria-current'
        | 'disabled'
        | 'role'
        | 'for'
        | 'aria-disabled'
        | 'aria-expanded'
        | 'type'
        | 'download'
        | 'onClick'
        | 'target'
        | 'referrerpolicy'
      >;
  /** Render item as disabled option */
  disabled?: boolean;
  /** Render item as aria-disabled option: it stays focusable but cannot be selected */
  ariaDisabled?: boolean;
  /** Content of a tooltip shown on the item. The `tooltip` slot can be used for rich content. */
  tooltip?: string;
  /** Additional attrs passed to the tooltip, such as its `position` */
  tooltipAttrs?: Omit<ComponentProps<typeof PfTooltip>, 'content'>;
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
import {
  computed,
  getCurrentInstance,
  inject,
  provide,
  ref,
  type Ref,
  type LiHTMLAttributes,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  useId,
  useTemplateRef,
  onMounted,
  nextTick,
  watch,
} from 'vue';
import { FlyoutDirectionKey, MenuInjectionKey, MenuItemInjectionKey, MenuItemsKey } from './common';
import topOffset from '@patternfly/react-tokens/dist/esm/c_menu_m_flyout__menu_top_offset';
import rightOffset from '@patternfly/react-tokens/dist/esm/c_menu_m_flyout__menu_m_left_right_offset';
import leftOffset from '@patternfly/react-tokens/dist/esm/c_menu_m_flyout__menu_left_offset';
import PfCheckbox from '../Checkbox.vue';
import PfMenuItemAction from './MenuItemAction.vue';
import AngleLeftIcon from '@vue-patternfly/icons/angle-left-icon';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import UpRightFromSquareIcon from '@vue-patternfly/icons/up-right-from-square-icon';
import CheckIcon from '@vue-patternfly/icons/check-icon';
import { isDefined } from '@vueuse/shared';
import { useChildrenTracker } from '../../use';
import TeleportCopy from '../../helpers/TeleportCopy.vue';
import PassThrough from '../../helpers/PassThrough.vue';
import PfTooltip from '../Tooltip/Tooltip.vue';
import type { ComponentProps } from 'vue-component-type-helpers';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfMenuItem',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  component: 'button',
  active: undefined,
  selected: undefined,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

/** Flag indicating if the item is favorited */
const favorited = defineModel<boolean | undefined>('favorited', { default: undefined });

const emit = defineEmits<{
  /** Callback for item click */
  (name: 'click', event: Event): void;
  /** @beta Callback function when mouse leaves trigger */
  (name: 'showFlyout', event?: Event): void;
  (name: 'update:favorited', value: boolean): void;
}>();

const $slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
  description?: (props?: Record<never, never>) => any;
  /** Flyout menu, shown on hover or with the keyboard */
  'flyout-menu'?: (props?: Record<never, never>) => any;
  /** Drilldown menu of the item, a pf-drilldown-menu entered when an item with direction "down" is clicked */
  'drilldown-menu'?: (props?: Record<never, never>) => any;
  /** Content of a tooltip shown on the item */
  tooltip?: (props?: Record<never, never>) => any;
  actions?: (props?: Record<never, never>) => any;
}>();

const instance = getCurrentInstance();

const itemId = computed(() => (props.value === undefined ? instance?.vnode.key : props.value));
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

watch(
  () => props.focused,
  value => {
    isFocused.value = value;
  },
);

const drilldownMenuId = ref<string>();

provide(MenuItemInjectionKey, {
  disabled: props.disabled,
  itemId,
  setDrilldownMenuId: id => (drilldownMenuId.value = id),
});

const selectMenu = computed(() => menu?.role.value === 'listbox');

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

const effectiveOnPath = computed(
  () => props.onPath || (isDefined(itemId.value) && !!menu?.drilldownItemPath.value.includes(itemId.value)),
);

const effectiveSelected = computed(() => {
  if (isDefined(props.selected)) {
    return props.selected;
  }
  const selected = menu?.selected?.value;
  if (!isDefined(itemId.value) || !isDefined(selected)) {
    return false;
  }
  return Array.isArray(selected) ? selected.includes(itemId.value) : selected === itemId.value;
});

const ariaCurrent = computed(() => {
  if (isDefined(props.active)) {
    if (props.active) {
      return 'page';
    }
    return null;
  } else if (isDefined(itemId.value) && isDefined(menu?.activeItemId())) {
    return itemId.value === menu?.activeItemId() || null;
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
  emit('showFlyout');
}

const randomId = useId();

function onClick(event: PointerEvent) {
  if (props.ariaDisabled) {
    event.preventDefault();
    return;
  }
  onItemSelect(event);

  if (menu && props.direction === 'down' && drilldownMenuId.value) {
    menu.onDrillIn(event, menu.menuId.value, drilldownMenuId.value, itemId.value);
  } else if (menu && props.direction === 'up') {
    menu.onDrillOut(event, menu.parentMenuId.value, itemId.value);
  }

  if ($slots['flyout-menu']) {
    handleFlyout(event);
  }
}

function onItemSelect(event: Event) {
  if (props.ariaDisabled) {
    return;
  }
  menu?.onSelect?.(event, itemId.value);
  emit('click', event);
}

function handleFlyout(event: PointerEvent | KeyboardEvent) {
  const key = (event as KeyboardEvent).key;
  const target = event.target;
  const type = event.type;

  if (key === ' ' || key === 'Enter' || key === 'ArrowRight' || type === 'click') {
    event.stopPropagation();
    event.preventDefault();
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

// moves the focus into the flyout when it opens with the keyboard, and back when it closes
watch(flyoutVisible, visible => {
  const target = flyoutTarget.value;
  if (!target) {
    return;
  }
  nextTick(() => {
    if (visible) {
      const flyoutMenu = target.nextElementSibling;
      const firstItem = Array.from(flyoutMenu?.getElementsByTagName('UL')[0]?.children ?? []).find(
        e => !e.classList.contains(styles.modifiers.disabled) && !e.classList.contains('pf-v6-c-divider'),
      );
      const first = firstItem?.querySelector(`.${styles.menuItem}`);
      if (first instanceof HTMLElement) {
        first.focus();
      }
    } else {
      target.focus();
      flyoutTarget.value = null;
    }
  });
});

const parentFlyoutDirection = inject(FlyoutDirectionKey, ref<'left' | 'right'>('right'));
const flyoutXDirection = ref<'left' | 'right'>(parentFlyoutDirection.value);
watch(parentFlyoutDirection, d => (flyoutXDirection.value = d));
provide(FlyoutDirectionKey, flyoutXDirection);

// opens the flyout towards the side with enough space, shifting it when it overflows the viewport
watch(flyoutVisible, visible => {
  if (!visible) {
    return;
  }
  nextTick(() => {
    const flyoutMenu = el.value?.lastElementChild;
    if (!el.value || !(flyoutMenu instanceof HTMLElement) || !flyoutMenu.classList.contains(styles.menu)) {
      return;
    }
    const origin = el.value.getClientRects()[0];
    const rect = flyoutMenu.getClientRects()[0];
    if (!origin || !rect) {
      return;
    }
    const spaceLeftLeft = origin.x - rect.width;
    const spaceLeftRight = window.innerWidth - origin.x - origin.width - rect.width;
    let xDir = flyoutXDirection.value;
    if (spaceLeftRight < 0 && xDir !== 'left') {
      xDir = flyoutXDirection.value = 'left';
    } else if (spaceLeftLeft < 0 && xDir !== 'right') {
      xDir = flyoutXDirection.value = 'right';
    }
    let xOffset = 0;
    if (spaceLeftLeft < 0 && spaceLeftRight < 0) {
      xOffset = xDir === 'right' ? -spaceLeftRight : -spaceLeftLeft;
    }
    if (xDir === 'left') {
      flyoutMenu.classList.add(styles.modifiers.left);
      flyoutMenu.style.setProperty(rightOffset.name, `-${xOffset}px`);
    } else {
      flyoutMenu.style.setProperty(leftOffset.name, `-${xOffset}px`);
    }

    const spaceLeftBot = window.innerHeight - origin.y - rect.height;
    const spaceLeftTop = window.innerHeight - rect.height;
    if (spaceLeftTop >= 0 && spaceLeftBot < 0) {
      flyoutMenu.style.setProperty(topOffset.name, `${spaceLeftBot}px`);
    }
  });
});

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
