<template>
  <div
    v-bind="ouiaProps"
    ref="elRef"
    :class="styles.menuContent"
    :style="{
      [cssHeight.name]: menuHeight,
      [cssMaxHeight.name]: maxMenuHeight,
    }"
  >
    <auto-wrap :component="PfMenuList" :include="PfMenuItem">
      <slot />
    </auto-wrap>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import cssHeight from '@patternfly/react-tokens/dist/esm/c_menu__content_Height';
import cssMaxHeight from '@patternfly/react-tokens/dist/esm/c_menu__content_MaxHeight';
import { computed, inject, watch, type HTMLAttributes, useTemplateRef } from 'vue';
import { MenuListInjectionKey, type MenuListProvide } from './MenuList.vue';
import AutoWrap from '../../helpers/AutoWrap.vue';
import PfMenuList from './MenuList.vue';
import PfMenuItem from './MenuItem.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfMenuContent',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Height of the menu content */
  menuHeight?: string;
  /** Maximum height of menu content */
  maxMenuHeight?: string;
  /** Callback to return the height of the menu content */
  onHeight?: (height: string) => void;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();

const el = useTemplateRef('elRef');
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
