<template>
  <div
    v-bind="ouiaProps"
    ref="elRef"
    :class="styles.menuContent"
    :style="{
      [cssHeight.name]: menuHeight ?? (isRootContent ? menu?.drilldownMenuHeight.value : undefined),
      [cssMaxHeight.name]: maxMenuHeight,
    }"
  >
    <auto-wrap :component="PfMenuList" :include="PfMenuItem">
      <slot />
    </auto-wrap>
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Height of the menu content. In a drilldown menu it defaults to the height of the active menu. */
  menuHeight?: string;
  /** Maximum height of menu content */
  maxMenuHeight?: string;
  /** Callback to return the height of the menu content */
  onHeight?: (height: string) => void;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import cssHeight from '@patternfly/react-tokens/dist/esm/c_menu__content_Height';
import cssMaxHeight from '@patternfly/react-tokens/dist/esm/c_menu__content_MaxHeight';
import { computed, inject, onMounted, onUpdated, type HTMLAttributes, useTemplateRef } from 'vue';
import { useResizeObserver } from '@vueuse/core';
import AutoWrap from '../../helpers/AutoWrap.vue';
import PfMenuList from './MenuList.vue';
import PfMenuItem from './MenuItem.vue';
import { MenuInjectionKey } from './common';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfMenuContent',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();

const el = useTemplateRef('elRef');
const menu = inject(MenuInjectionKey, undefined);
/** The content of the root menu of a drilldown follows the height of the active menu */
const isRootContent = computed(() => !!menu && menu.parentMenuId.value === menu.menuId.value);

let lastHeight: number | undefined;

function reportHeight() {
  if (!el.value) {
    return;
  }
  let clientHeight = el.value.clientHeight;

  // a submenu accounts for the padding of the root menu list and the border of the root menu content
  let rootMenuList: Element | null = null;
  let parentEl = el.value.closest(`.${styles.menuList}`);
  while (parentEl !== null) {
    if (parentEl.classList.contains(styles.menuList)) {
      rootMenuList = parentEl;
    }
    parentEl = parentEl.parentElement;
  }
  if (rootMenuList) {
    const rootMenuListStyles = getComputedStyle(rootMenuList);
    clientHeight +=
      (parseFloat(rootMenuListStyles.paddingTop) || 0) +
      (parseFloat(rootMenuListStyles.paddingBottom) || 0) +
      (rootMenuList.parentElement
        ? parseFloat(getComputedStyle(rootMenuList.parentElement).borderBottomWidth) || 0
        : 0);
  }

  if (clientHeight === lastHeight) {
    return;
  }
  lastHeight = clientHeight;
  if (menu) {
    menu.onGetMenuHeight(menu.menuId.value, clientHeight);
  }
  props.onHeight?.(String(clientHeight));
}

onMounted(reportHeight);
onUpdated(reportHeight);
useResizeObserver(el, reportHeight);
</script>
