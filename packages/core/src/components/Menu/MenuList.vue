<template>
  <ul
    v-bind="ouiaProps"
    ref="elRef"
    :role="role"
    :aria-multiselectable="role === 'listbox' ? ariaMultiselectable : undefined"
    :class="styles.menuList"
  >
    <slot />
  </ul>
</template>

<script lang="ts">
export type MenuListProvide = {
  parentMenu: MenuListProvide | undefined;
  el: Readonly<Ref<HTMLUListElement | null>>;
};

export const MenuListInjectionKey = Symbol('MenuListInjectionKey') as InjectionKey<MenuListProvide>;

interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'role'> {
  /** Indicates to assistive technologies whether more than one item can be selected
   * for a non-checkbox menu. Only applies when the menu's role is "listbox".
   */
  ariaMultiselectable?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { computed, inject, provide, type InjectionKey, type Ref, type HTMLAttributes } from 'vue';
import { MenuInjectionKey } from './common';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { useTemplateRef } from 'vue';

defineOptions({
  name: 'PfMenuList',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();

const el = useTemplateRef('elRef');
const menu = inject(MenuInjectionKey, undefined);
const role = computed(() => menu?.role.value ?? 'menu');
const parentMenu = inject(MenuListInjectionKey, undefined);

provide(MenuListInjectionKey, {
  parentMenu,
  el,
});

defineExpose({
  el,
});
</script>
