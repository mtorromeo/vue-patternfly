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

export interface Props extends /* @vue-ignore */ HTMLAttributes {
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { inject, provide, ref, type InjectionKey, type Ref, type HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfMenuList',
});

defineProps<Props>();

const el: Ref<HTMLUListElement | undefined> = ref();
const parentMenu = inject(MenuListInjectionKey, undefined);

provide(MenuListInjectionKey, {
  parentMenu,
  el,
});
</script>
