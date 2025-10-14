<template>
  <pf-divider v-bind="ouiaProps" component="li" />
</template>

<script lang="ts" setup>
import PfDivider from '../Divider.vue';
import type { ComponentProps } from 'vue-component-type-helpers';
import { useOUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfNavItemSeparator',
});

interface Props extends /* @vue-ignore */ Omit<ComponentProps<typeof PfDivider>, 'component'> {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
</script>
