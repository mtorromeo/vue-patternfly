<template>
  <pf-toolbar-item v-if="!hideToolbarItem">
    <slot />
  </pf-toolbar-item>
  <teleport v-if="mounted && teleportTarget" :to="teleportTarget">
    <pf-toolbar-item v-if="chips.length" variant="chip-group">
      <pf-chip-group
        :key="category"
        :category="category"
        closable
        @click="$emit('delete-chip-group', category)"
      >
        <pf-chip
          v-for="chip of chips"
          :key="chipKey(chip)"
          @click="$emit('delete-chip', category, chipKey(chip))"
        >{{ chipLabel(chip) }}</pf-chip>
      </pf-chip-group>
    </pf-toolbar-item>
  </teleport>
</template>

<script lang="ts">
import PfChipGroup from '../ChipGroup/ChipGroup.vue';
import PfChip from '../ChipGroup/Chip.vue';
import PfToolbarItem from './ToolbarItem.vue';
import { defineComponent, inject, type PropType } from 'vue';
import { ToolbarChipGroupContentRefKey, ToolbarExpandedKey, ToolbarUpdateNumberFiltersKey } from './Toolbar.vue';
import { ToolbarContentChipContainerRefKey } from './ToolbarContent.vue';

export type FilterChip = {
  key: string;
  label: string;
} | string;

export default defineComponent({
  name: 'PfToolbarFilter',

  components: {
    PfChipGroup,
    PfChip,
    PfToolbarItem,
  },

  props: {
    chips: {
      type: Array as PropType<FilterChip[]>,
      default: (): FilterChip[] => [],
    },
    category: {
      type: String,
      default: '',
    },
    hideToolbarItem: Boolean,
  },

  emits: ['delete-chip', 'delete-chip-group'],

  data() {
    return {
      mounted: false,
    };
  },

  setup() {
    return {
      expanded: inject(ToolbarExpandedKey),
      updateNumberFilters: inject(ToolbarUpdateNumberFiltersKey),
      chipContainerRef: inject(ToolbarContentChipContainerRefKey),
      chipGroupContentRef: inject(ToolbarChipGroupContentRefKey),
    };
  },

  computed: {
    teleportTarget() {
      return this.expanded ? this.chipContainerRef : this.chipGroupContentRef;
    },
  },

  mounted() {
    this.updateNumberFilters(this.category, this.chips.length);
    this.mounted = true;
  },

  updated() {
    this.updateNumberFilters(this.category, this.chips.length);
  },

  methods: {
    chipKey(chip: FilterChip) {
      return typeof chip === 'string' ? chip : chip.key;
    },

    chipLabel(chip: FilterChip) {
      return typeof chip === 'string' ? chip : chip.label;
    },
  },
});
</script>
