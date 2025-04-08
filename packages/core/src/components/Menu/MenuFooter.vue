<template>
  <div v-bind="ouiaProps" :class="styles.menuFooter">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfMenuFooter',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();
</script>
