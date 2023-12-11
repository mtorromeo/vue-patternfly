<template>
  <pf-menu v-bind="ouiaProps" :root-menu="false">
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
import { useOUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDrilldownMenu',
});

export interface Props extends /* @vue-ignore */ Omit<ComponentProps<typeof PfMenu>, 'rootMenu'> {
  /** Optional callback to get the height of the sub menu */
  onHeight?: (height: string) => void;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();
</script>
