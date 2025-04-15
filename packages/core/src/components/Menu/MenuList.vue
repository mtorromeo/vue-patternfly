<template>
  <ul v-bind="ouiaProps" ref="el" role="menu" :class="styles.menuList">
    <slot />
  </ul>
</template>

<script lang="ts">
export type MenuListProvide = {
  parentMenu: MenuListProvide | undefined;
  el: Readonly<Ref<HTMLUListElement | null>>;
};

export const MenuListInjectionKey = Symbol('MenuListInjectionKey') as InjectionKey<MenuListProvide>;

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'role'> {
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { inject, provide, type InjectionKey, type Ref, type HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { useTemplateRef } from 'vue';

defineOptions({
  name: 'PfMenuList',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();

const el = useTemplateRef('el');
const parentMenu = inject(MenuListInjectionKey, undefined);

provide(MenuListInjectionKey, {
  parentMenu,
  el,
});
</script>
