<template>
  <pf-toolbar-item v-if="!hideToolbarItem">
    <slot />
  </pf-toolbar-item>
  <teleport
    v-if="mounted && teleportTarget"
    :to="teleportTarget"
  >
    <pf-toolbar-item
      v-if="chips.length"
      variant="chip-group"
    >
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
        >
          {{ chipLabel(chip) }}
        </pf-chip>
      </pf-chip-group>
    </pf-toolbar-item>
  </teleport>
</template>

<script>
import PfChipGroup from '../ChipGroup/ChipGroup';
import PfChip from '../ChipGroup/Chip';
import PfToolbarItem from './ToolbarItem.vue';

export default {
  name: 'PfToolbarFilter',

  components: {
    PfChipGroup,
    PfChip,
    PfToolbarItem,
  },

  inject: ['expanded', 'chipContainerRef', 'chipGroupContentRef', 'updateNumberFilters'],

  props: {
    chips: {
      type: Array,
      default: () => [],
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

  computed: {
    teleportTarget() {
      return this.expanded.value ? this.chipContainerRef.value : this.chipGroupContentRef.value;
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
    chipKey(chip) {
      return typeof chip === 'string' ? chip : chip.key;
    },

    chipLabel(chip) {
      return typeof chip === 'string' ? chip : chip.label;
    },
  },
};
</script>
