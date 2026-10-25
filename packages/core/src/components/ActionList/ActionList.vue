<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.actionList,
      {
        [styles.modifiers.icons]: iconList,
        [styles.modifiers.vertical]: vertical,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Flag indicating the action list contains multiple icons and item padding should be removed */
  iconList?: boolean;
  /** @beta Flag to lay the children out vertically instead of horizontally */
  vertical?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ActionList/action-list';
import type { HTMLAttributes, VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfActionList',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
