<template>
  <pf-toolbar-item v-if="!hideToolbarItem" v-bind="$attrs">
    <slot />
  </pf-toolbar-item>
  <teleport v-if="mounted && teleportTarget" :to="teleportTarget">
    <pf-toolbar-item v-if="chips.length" variant="chip-group">
      <pf-chip-group
        :key="category"
        :category="category"
        closable
        @click="emit('delete-chip-group', category)"
      >
        <pf-chip
          v-for="chip of chips"
          :key="chipKey(chip)"
          @click="emit('delete-chip', category, chipKey(chip))"
        >{{ chipLabel(chip) }}</pf-chip>
      </pf-chip-group>
    </pf-toolbar-item>
  </teleport>
</template>

<script lang="ts" setup>
import PfChipGroup from '../ChipGroup/ChipGroup.vue';
import PfChip from '../ChipGroup/Chip.vue';
import PfToolbarItem, { type Props as ToolbarItemProps } from './ToolbarItem.vue';
import { ToolbarChipGroupContentRefKey, ToolbarExpandedKey, ToolbarUpdateNumberFiltersKey } from './Toolbar.vue';
import { ToolbarContentChipContainerRefKey } from './ToolbarContent.vue';
import { inject, ref, onMounted, onUpdated, computed } from 'vue';

export type FilterChip = {
  key: string;
  label: string;
} | string;

defineOptions({
  name: 'PfToolbarFilter',
  inheritAttrs: false,
});

export interface Props extends /* @vue-ignore */ ToolbarItemProps {
  chips?: FilterChip[];
  category?: string;
  hideToolbarItem?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  chips: (): FilterChip[] => [],
});

const emit = defineEmits<{
  (name: 'delete-chip', category: string | undefined, chipKey: string): void;
  (name: 'delete-chip-group', category?: string): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const expanded = inject(ToolbarExpandedKey);
const updateNumberFilters = inject(ToolbarUpdateNumberFiltersKey);
const chipContainerRef = inject(ToolbarContentChipContainerRefKey);
const chipGroupContentRef = inject(ToolbarChipGroupContentRefKey);
const mounted = ref(false);

const teleportTarget = computed(() => expanded?.value ? chipContainerRef?.value : chipGroupContentRef?.value);

onMounted(() => {
  if (props.category) {
    updateNumberFilters?.(props.category, props.chips.length);
  }
  mounted.value = true;
});

onUpdated(() => {
  if (props.category) {
    updateNumberFilters?.(props.category, props.chips.length);
  }
});

function chipKey(chip: FilterChip) {
  return typeof chip === 'string' ? chip : chip.key;
}

function chipLabel(chip: FilterChip) {
  return typeof chip === 'string' ? chip : chip.label;
}
</script>
