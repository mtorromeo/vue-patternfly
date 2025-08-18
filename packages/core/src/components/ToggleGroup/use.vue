<template>
  <!-- DO NOT USE -->
  <div />
</template>

<script lang="ts">
import PfToggleGroup from './ToggleGroup.vue';
import PfToggleGroupItem from './ToggleGroupItem.vue';

export function useSingleToggleGroup<T extends string | number>(): [typeof PfToggleGroup<T[]>, typeof PfToggleGroupItem<T>] {
  return [PfToggleGroup, PfToggleGroupItem];
}

export function useMultiToggleGroup<T extends string | number>(): [typeof PfToggleGroup<T[]>, typeof PfToggleGroupItem<T>] {
  return [PfToggleGroup, PfToggleGroupItem];
}
</script>

<script lang="ts" setup>
defineOptions({
  name: 'DoNotUse',
});
</script>
