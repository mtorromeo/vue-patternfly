<template>
  <component
    :is="component"
    ref="elRef"
    :class="[
      styles.navItem,
      itemClass,
      {
        [styles.modifiers.flyout]: $slots.flyout,
      },
    ]"
    v-bind="{ ...ouiaProps, ...itemAttrs }"
    @keydown="handleFlyout"
    @mouseover="flyoutVisible = !!$slots.flyout"
  >
    <component
      :is="linkTag"
      :class="[
        styles.navLink,
        {
          [styles.modifiers.current]: active,
          [styles.modifiers.hover]: isHovered,
        },
      ]"
      :aria-current="active ? 'page' : null"
      :aria-haspopup="$slots.flyout ? 'menu' : undefined"
      :aria-expanded="$slots.flyout ? flyoutVisible : undefined"
      :to="to"
      :active-class="to ? styles.modifiers.current : null"
      :tabindex="tabindex ?? (sidebarOpen ? null : '-1')"
      v-bind="$attrs"
      @click="select"
    >
      <span v-if="$slots.icon" :class="styles.navLinkIcon">
        <slot name="icon" />
      </span>
      <span :class="styles.navLinkText">
        <slot />
      </span>
      <span v-if="$slots.flyout" :class="styles.navToggle">
        <span :class="styles.navToggleIcon">
          <pf-angle-right-icon aria-hidden="true" />
        </span>
      </span>
    </component>

    <floating-ui
      v-if="$slots.flyout"
      :hidden="!flyoutVisible"
      :reference="el"
      :teleport-to="navEl"
      :z-index="zIndex"
      placement="right-start"
    >
      <div ref="floatingRef">
        <slot name="flyout" />
      </div>
    </floating-ui>
  </component>
</template>

<script lang="ts">
interface Props
  extends
    OUIAProps,
    /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'type' | 'onSelect' | 'onClick' | 'aria-current'>,
    /* @vue-ignore */ Omit<AnchorHTMLAttributes, 'onSelect' | 'onClick' | 'aria-current'> {
  /** Element rendering the nav item */
  component?: string;
  /** Element or component rendering the link. Defaults to a router-link with `to`, an anchor otherwise, or a button with a flyout */
  linkComponent?: string;
  /** Group identifier, emitted with the select event of the item and of the nav */
  groupId?: NavId;
  /** Item identifier, emitted with the select event of the item and of the nav */
  itemId?: NavId;
  /** Flag indicating whether the item is active */
  active?: boolean;
  /** Prevents the default link action on click, to handle the navigation yourself */
  preventDefault?: boolean;
  /** Additional classes added to the nav item */
  itemClass?: HTMLAttributes['class'];
  /** Additional attributes added to the nav item */
  itemAttrs?: HTMLAttributes;
  /** Router location of the link. Should not be used with a flyout. */
  to?: RouteLocationRaw;
  /** Tab index of the link. Removed from the tab order while the page sidebar is collapsed when not set. */
  tabindex?: string | number;
  /** z-index of the flyout */
  zIndex?: number;
}
</script>

<script lang="ts" setup>
import {
  watchEffect,
  inject,
  type Ref,
  ref,
  computed,
  useSlots,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
  type VNode,
  useTemplateRef,
} from 'vue';
import type { RouteLocationRaw } from 'vue-router';
import { isDefined, useElementHover, useEventListener } from '@vueuse/core';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import dividerStyles from '@patternfly/react-styles/css/components/Divider/divider';
import PfAngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { NavElementKey, NavFlyoutRefKey, NavOnSelectKey, type NavId } from './common';
import { SidebarOpenKey } from '../Page/PageSidebar.vue';
import FloatingUi from '../../helpers/FloatingUi.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfNavItem',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  component: 'li',
  zIndex: 9999,
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  /** The flyout was shown */
  (name: 'showflyout'): void;
  /** The item was clicked */
  (name: 'select', event: Event, groupId: NavId | undefined, itemId: NavId | undefined): void;
}>();

defineSlots<{
  /** Content of the link */
  default?: (props?: Record<never, never>) => VNode[];
  /** Icon added before the content */
  icon?: (props?: Record<never, never>) => VNode[];
  /** Flyout of the item, usually a pf-menu with nav-flyout. The item renders a button rather than a link. */
  flyout?: (props?: Record<never, never>) => VNode[];
}>();

const slots = useSlots();
const el = useTemplateRef<HTMLElement>('elRef');
const floating = useTemplateRef('floatingRef');
const onSelect = inject(NavOnSelectKey, undefined);
const flyoutRef = inject(NavFlyoutRefKey, null);
const navEl = inject(NavElementKey, undefined);
const sidebarOpen = inject(SidebarOpenKey, true);
const flyoutTarget: Ref<HTMLElement | null> = ref(null);
const isHovered = useElementHover(floating);

if (props.to && slots.flyout) {
  console.error('NavItem cannot have both "to" and "flyout" props.');
}

const linkTag = computed(() => {
  if (props.linkComponent) {
    return props.linkComponent;
  }
  return slots.flyout ? 'button' : props.to === undefined ? 'a' : 'router-link';
});

const flyoutVisible = computed({
  get() {
    return isDefined(el.value) && el.value === flyoutRef?.value;
  },
  set(visible: boolean) {
    if (flyoutRef) {
      flyoutRef.value = visible ? el.value : null;
    }
    if (visible) {
      emit('showflyout');
    }
  },
});

watchEffect(() => {
  if (!flyoutTarget.value) {
    return;
  }
  if (flyoutVisible.value) {
    const ul = floating.value?.getElementsByTagName('UL')[0];
    const flyoutItems = ul
      ? Array.from(ul.children).filter(
          el => !(el.classList.contains('pf-m-disabled') || el.classList.contains(dividerStyles.divider)),
        )
      : [];
    const child = flyoutItems.length ? flyoutItems[0]?.firstElementChild : null;
    if (child instanceof HTMLElement) {
      child.focus();
    }
  } else {
    flyoutTarget.value.focus();
  }
});

// a click outside of any flyout closes the open one
useEventListener(window, 'click', (e: Event) => {
  if (!slots.flyout || !(e.target instanceof HTMLElement)) {
    return;
  }
  if (!e.target.closest(`.${styles.modifiers.flyout}`)) {
    flyoutVisible.value = false;
  }
});

function select(e: Event) {
  if (e && props.preventDefault) {
    e.preventDefault();
  }
  emit('select', e, props.groupId, props.itemId);
  onSelect?.(e, props.groupId, props.itemId, props.to);
}

function handleFlyout(e: KeyboardEvent) {
  if (!slots.flyout || !(e.target instanceof HTMLElement)) {
    return;
  }

  if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') {
    e.stopPropagation();
    e.preventDefault();
    if (!flyoutVisible.value) {
      flyoutVisible.value = true;
      flyoutTarget.value = e.target;
    }
  }

  if (e.key === 'Escape' || e.key === 'ArrowLeft') {
    if (flyoutVisible.value) {
      e.stopPropagation();
      e.preventDefault();
      let closestFlyout = e.target.closest(`.${styles.navItem}.${styles.modifiers.flyout}`);
      if (e.target.parentElement === closestFlyout) {
        closestFlyout = closestFlyout?.parentElement?.closest(`.${styles.navItem}.${styles.modifiers.flyout}`) ?? null;
      }

      if (closestFlyout) {
        const child = closestFlyout.firstElementChild;
        if (child instanceof HTMLElement) {
          child.focus();
        }
      }

      flyoutVisible.value = false;
    }
  }
}

defineExpose({
  /** The nav item element */
  el,
});
</script>
