<template>
  <doc-page title="Chip">
    <template #description>A <b>chip</b> is used to communicate a value or a set of attribute-value pairs within workflows that involve filtering a set of objects.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/ChipGroup/Chip.vue" />
      <component-info src="packages/core/src/components/ChipGroup/ChipGroup.vue" />
    </template>

    <story-canvas title="Simple">
      <pf-chip>Chip</pf-chip>
    </story-canvas>

    <story-canvas title="Long">
      <pf-chip>Really long chip that goes on and on</pf-chip>
    </story-canvas>

    <story-canvas title="With badge">
      <pf-chip>
        Chip
        <pf-badge read>00</pf-badge>
      </pf-chip>
    </story-canvas>

    <story-canvas title="Chip groups">
      <pf-chip-group>
        <pf-chip v-if="showChipA1" @click="showChipA1 = false">Chip one</pf-chip>
        <pf-chip v-if="showChipA2" @click="showChipA2 = false">Really long chip that goes on and on</pf-chip>
        <pf-chip v-if="showChipA3" @click="showChipA3 = false">Chip three</pf-chip>
        <pf-chip v-if="showChipA4" @click="showChipA4 = false">Chip four</pf-chip>
        <pf-chip v-if="showChipA5" @click="showChipA5 = false">Chip five</pf-chip>
      </pf-chip-group>
    </story-canvas>

    <story-canvas title="Chip groups with categories">
      <pf-chip-group category="Category One">
        <pf-chip v-if="showChipB1" @click="showChipB1 = false">Chip one</pf-chip>
        <pf-chip v-if="showChipB2" @click="showChipB2 = false">Really long chip that goes on and on</pf-chip>
        <pf-chip v-if="showChipB3" @click="showChipB3 = false">Chip three</pf-chip>
        <pf-chip v-if="showChipB4" @click="showChipB4 = false">Chip four</pf-chip>
        <pf-chip v-if="showChipB5" @click="showChipB5 = false">Chip five</pf-chip>
      </pf-chip-group>
    </story-canvas>

    <story-canvas title="Chip groups with removable categories">
      <pf-chip-group v-if="showGroup" category="Category has a very long name" closable @click="showGroup = false">
        <pf-chip v-if="showChipC1" @click="showChipC1 = false">Chip one</pf-chip>
        <pf-chip v-if="showChipC2" @click="showChipC2 = false">Really long chip that goes on and on</pf-chip>
        <pf-chip v-if="showChipC3" @click="showChipC3 = false">Chip three</pf-chip>
        <pf-chip v-if="showChipC4" @click="showChipC4 = false">Chip four</pf-chip>
        <pf-chip v-if="showChipC5" @click="showChipC5 = false">Chip five</pf-chip>
      </pf-chip-group>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const showChipA1 = ref(true);
const showChipA2 = ref(true);
const showChipA3 = ref(true);
const showChipA4 = ref(true);
const showChipA5 = ref(true);

const showChipB1 = ref(true);
const showChipB2 = ref(true);
const showChipB3 = ref(true);
const showChipB4 = ref(true);
const showChipB5 = ref(true);

const showChipC1 = ref(true);
const showChipC2 = ref(true);
const showChipC3 = ref(true);
const showChipC4 = ref(true);
const showChipC5 = ref(true);

const showGroup = ref(true);
</script>
