<template>
  <div
    ref="el"
    :class="styles.menuContent"
    :style="{
      '--pf-c-menu__content--Height': menuHeight,
      '--pf-c-menu__content--MaxHeight': maxMenuHeight,
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { computed, inject, ref, watch, type Ref } from 'vue';
import { MenuListInjectionKey, type MenuListProvide } from './MenuList.vue';

const props = defineProps<{
  /** Height of the menu content */
  menuHeight?: string;
  /** Maximum height of menu content */
  maxMenuHeight?: string;
  /** Callback to return the height of the menu content */
  onHeight?: (height: string) => void;
}>();

const el: Ref<HTMLDivElement | undefined> = ref();
const menuList = inject(MenuListInjectionKey, undefined);

const rootMenuList = computed(() => {
  let cur = menuList;
  let rootMenu: MenuListProvide | undefined = undefined;
  while (cur !== undefined) {
    rootMenu = cur;
    cur = cur.parentMenu;
  }
  return rootMenu;
});

const height = computed(() => {
  if (!el.value) {
    return;
  }

  let clientHeight = el.value.clientHeight;
  if (rootMenuList.value?.el.value) {
    const rootMenuListStyles = getComputedStyle(rootMenuList.value.el.value);
    const rootMenuListPaddingOffset =
      parseFloat(rootMenuListStyles.getPropertyValue('padding-top').replace(/px/g, '')) +
      parseFloat(rootMenuListStyles.getPropertyValue('padding-bottom').replace(/px/g, '')) +
      (rootMenuList.value.parentMenu?.el.value
        ? parseFloat(
          getComputedStyle(rootMenuList.value.parentMenu?.el.value)
            .getPropertyValue('border-bottom-width')
            .replace(/px/g, ''),
        )
        : 0)
      ;
    clientHeight = clientHeight + rootMenuListPaddingOffset;
  }

  return clientHeight;
});

watch(height, () => {
  props.onHeight?.(String(height.value));
});
</script>