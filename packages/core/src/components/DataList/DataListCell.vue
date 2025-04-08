<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.dataListCell, {
        [styles.modifiers.noFill]: noFill,
        [styles.modifiers[wrapModifier ?? 'nowrap']]: wrapModifier,
        [styles.modifiers.alignRight]: alignRight,
        [styles.modifiers.icon]: icon,
        [styles.modifiers[`flex_${width}` as 'flex_2' | 'flex_3' | 'flex_4' | 'flex_5']]: (width ?? 0) > 1,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import type { DataListWrapModifier } from './DataList.vue';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDataListCell',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  noFill?: boolean;
  width?: 1 | 2 | 3 | 4 | 5;
  alignRight?: boolean;
  icon?: boolean;
  wrapModifier?: DataListWrapModifier;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
