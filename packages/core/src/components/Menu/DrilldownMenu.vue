<template>
  <pf-menu :root-menu="false">
    <pf-menu-content @height="onHeight">
      <pf-menu-list>
        <slot />
      </pf-menu-list>
    </pf-menu-content>
  </pf-menu>
</template>

<script lang="ts" setup>
import PfMenu from './Menu.vue';
import PfMenuContent from './MenuContent.vue';
import PfMenuList from './MenuList.vue';
import type { ComponentProps } from '../../util';

defineOptions({
  name: 'PfDrilldownMenu',
});

export interface Props extends /* @vue-ignore */ Omit<ComponentProps<typeof PfMenu>, 'rootMenu'> {
  /** Optional callback to get the height of the sub menu */
  onHeight?: (height: string) => void;
}

defineProps<Props>();

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();
</script>
