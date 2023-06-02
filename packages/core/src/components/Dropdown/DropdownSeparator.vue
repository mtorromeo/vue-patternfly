<template>
  <pf-dropdown-item role="separator" :component="PfDivider" />
</template>

<script lang="ts" setup>
import { provide } from 'vue';
import { default as PfDropdownItem, type Props as DropdownItemProps } from './DropdownItem.vue';
import PfDivider from '../Divider.vue';
import { DividerComponentKey } from './Dropdown.vue';

defineOptions({
  name: 'PfDropdownSeparator',
});

export interface Props extends /* @vue-ignore */ DropdownItemProps {}

defineProps<Props>();

provide(DividerComponentKey, 'div');
</script>
