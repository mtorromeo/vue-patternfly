<template>
  <option v-bind="(ouiaProps as any)">
    <slot />
  </option>
</template>

<script lang="ts" setup>
import type { OptionHTMLAttributes } from 'vue';
import { useChildrenTracker } from '../../use';
import { FormSelectOptionsKey } from './FormSelect.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfFormSelectOption',
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<OptionHTMLAttributes, 'placeholder'> {
  placeholder?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

useChildrenTracker(FormSelectOptionsKey);
</script>
