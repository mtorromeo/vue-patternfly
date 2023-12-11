<template>
  <component
    :is="component"
    ref="el"
    :class="[styles.navItem, itemClass, {
      [(styles.modifiers.flyout || 'pf-m-flyout')]: $slots.flyout,
    }]"
    v-bind="itemAttrs"
    @keydown="handleFlyout"
    @mouseover="flyoutVisible = !!$slots.flyout"
  >
    <component
      :is="linkTag"
      :class="[styles.navLink, {
        [styles.modifiers.current]: active,
        [styles.modifiers.hover]: isHovered,
      }]"
      :aria-current="active ? 'page' : null"
      :to="to"
      :active-class="to ? styles.modifiers.current : null"
      :tabindex="tabindex || sidebarOpen ? null : '-1'"
      v-bind="$attrs"
      @click="select"
    >
      <slot />
      <span v-if="$slots.flyout" :class="styles.navToggle">
        <span :class="styles.navToggleIcon">
          <pf-angle-right-icon aria-hidden />
        </span>
      </span>
    </component>

    <floating-ui v-if="flyoutVisible" :reference="el" placement="right-start">
      <div ref="floatingRef">
        <slot name="flyout" />
      </div>
    </floating-ui>
  </component>
</template>

<script lang="ts" setup>
import { watchEffect, inject, type Ref, ref, computed, onMounted, onBeforeUnmount, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
import { isDefined, useElementHover } from '@vueuse/core';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import PfAngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { NavFlyoutRefKey, NavOnSelectKey } from './Nav.vue';
import { SidebarOpenKey } from '../Page/PageSidebar.vue';
import FloatingUi from '../../helpers/FloatingUi.vue';

defineOptions({
  name: 'PfNavItem',
  inheritAttrs: false,
});

export interface Props extends /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'type' | 'onSelect' | 'onClick' | 'aria-current'>, /* @vue-ignore */ Omit<AnchorHTMLAttributes, 'onSelect' |'onClick' | 'aria-current'> {
  component?: string;
  linkComponent?: string;
  groupId?: string;
  itemId?: string;
  active?: boolean;
  preventDefault?: boolean;
  itemClass?: string | any[] | Record<string, boolean>;
  itemAttrs?: Record<string, any>;
  to?: RouteLocationRaw;
  tabindex?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'li',
});

const emit = defineEmits<{
  (name: 'showflyout'): void;
  (name: 'select', e: Event, groupId: string | undefined, itemId: string | undefined): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
  flyout?: (props?: Record<never, never>) => any;
}>();

const el: Ref<HTMLElement | undefined> = ref();
const floatingRef: Ref<HTMLDivElement | undefined> = ref();
const onSelect = inject(NavOnSelectKey, undefined);
const flyoutRef = inject(NavFlyoutRefKey, undefined);
const sidebarOpen = inject(SidebarOpenKey, false);
const flyoutTarget: Ref<HTMLElement | null> = ref(null);
const isHovered = useElementHover(floatingRef);

const linkTag = computed(() => {
  if (props.linkComponent) {
    return props.linkComponent;
  }
  return props.linkComponent ?? (slots.flyout ? 'button' : (props.to === undefined ? 'a' : 'router-link'));
});

const flyoutVisible = computed({
  get() {
    return isDefined(el.value) && el.value === flyoutRef?.value;
  },
  set(visible: boolean) {
    if (flyoutRef) {
      flyoutRef.value = visible ? el.value : undefined;
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
    const flyoutMenu = flyoutTarget.value.nextElementSibling;
    const flyoutItems = flyoutMenu ? Array.from(flyoutMenu.getElementsByTagName('UL')[0].children).filter(
      el => !(el.classList.contains('pf-m-disabled') || el.classList.contains(styles.divider)),
    ) : [];
    const child = flyoutItems.length ? flyoutItems[0].firstElementChild : null;
    if (child instanceof HTMLElement) {
      child.focus();
    }
  } else {
    flyoutTarget.value.focus();
  }
});

onMounted(() => {
  window.addEventListener('click', flyoutClick);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', flyoutClick);
});

function select(e: Event) {
  if (e && props.preventDefault) {
    e.preventDefault();
  }
  emit('select', e, props.groupId, props.itemId);
  onSelect?.(e, props.groupId, props.itemId);
}

function handleFlyout(e: KeyboardEvent) {
  if (!slots.flyout || !(e.target instanceof HTMLElement)) {
    return;
  }

  if (e.key === ' ' || e.key === 'ArrowRight') {
    e.stopPropagation();
    e.preventDefault();
    if (!flyoutVisible.value) {
      flyoutVisible.value = true;
      flyoutTarget.value = e.target as any;
    }
  }

  if (e.key === 'Escape' || e.key === 'ArrowLeft') {
    if (flyoutVisible.value) {
      e.stopPropagation();
      e.preventDefault();
      let closestFlyout = e.target.closest(`.${styles.navItem}.pf-m-flyout`);
      if (e.target.parentElement === closestFlyout) {
        closestFlyout = closestFlyout?.parentElement?.closest(`.${styles.navItem}.pf-m-flyout`) ?? null;
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

function flyoutClick(e: Event) {
  if (!(e.target instanceof HTMLElement)) {
    return;
  }
  const closestItem = e.target.closest('.pf-m-flyout');
  if (!closestItem) {
    flyoutVisible.value = !!slots.flyout;
  }
}
</script>
