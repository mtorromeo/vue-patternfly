<template>
  <ul ref="el" role="menu" :class="styles.menuList">
    <slot />
  </ul>
</template>

<script lang="ts">
export type MenuListProvide = {
  parentMenu: MenuListProvide | undefined;
  el: Ref<HTMLUListElement | undefined>;
};

export const MenuListInjectionKey = Symbol('MenuListInjectionKey') as InjectionKey<MenuListProvide>;
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { inject, provide, ref, type InjectionKey, type Ref } from 'vue';

const el: Ref<HTMLUListElement | undefined> = ref();
const parentMenu = inject(MenuListInjectionKey, undefined);

provide(MenuListInjectionKey, {
  parentMenu,
  el,
});
</script>
