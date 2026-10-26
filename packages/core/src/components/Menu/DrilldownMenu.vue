<template>
  <pf-menu :id="effectiveId" :menu-drilled-in="menuDrilledIn">
    <pf-menu-content @height="onHeight">
      <pf-menu-list>
        <slot />
      </pf-menu-list>
    </pf-menu-content>
  </pf-menu>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** ID of the drilldown sub-menu. Generated when not set. */
  id?: string;
  /** Flag indicating whether the menu is drilled in */
  menuDrilledIn?: boolean;
  /** Optional callback to get the height of the sub menu */
  onHeight?: (height: string) => void;
}
</script>

<script lang="ts" setup>
import { computed, inject, onBeforeUnmount, provide, useId, watch, type HTMLAttributes } from 'vue';
import PfMenu, { DrilldownSubmenuKey } from './Menu.vue';
import PfMenuContent from './MenuContent.vue';
import PfMenuList from './MenuList.vue';
import { MenuItemInjectionKey } from './common';

/** Submenu of a drilldown menu, passed in the `drilldown-menu` slot of a pf-menu-item. */
defineOptions({
  name: 'PfDrilldownMenu',
});

const props = defineProps<Props>();

defineSlots<{
  /** Items of the submenu */
  default?: (props?: Record<never, never>) => any;
}>();

const generatedId = useId();
const effectiveId = computed(() => props.id ?? `pf-drilldown-menu-${generatedId}`);

provide(DrilldownSubmenuKey, true);

// the item opening this submenu drills into it
const item = inject(MenuItemInjectionKey, undefined);
watch(effectiveId, id => item?.setDrilldownMenuId(id), { immediate: true });
onBeforeUnmount(() => item?.setDrilldownMenuId(undefined));
</script>
