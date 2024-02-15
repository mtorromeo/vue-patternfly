<template>
  <div v-bind="(ouiaProps as any)" :class="styles.inputGroup">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { type VNode, type HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfInputGroup',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
