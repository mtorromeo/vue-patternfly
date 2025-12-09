<template>
  <div v-bind="ouiaProps" :class="[styles.actionList, { [styles.modifiers.icons]: iconList }]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ActionList/action-list';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfActionList',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Flag indicating the action list contains multiple icons and item padding should be removed */
  iconList?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
