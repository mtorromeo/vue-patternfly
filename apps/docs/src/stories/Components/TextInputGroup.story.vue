<template>
  <doc-page title="Text input group">
    <template #description>A <b>text input group</b> is a more flexible composable version of a [text input](#/stories/components/text-input). It enables consumers of PatternFly to build custom inputs for filtering and similar use cases by placing elements like icons, chips groups and buttons within a text input.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/TextInputGroup/TextInputGroup.vue" />
      <component-info src="packages/core/src/components/TextInputGroup/TextInputGroupMain.vue" />
      <component-info src="packages/core/src/components/TextInputGroup/TextInputGroupUtilities.vue" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-text-input-group>
        <pf-text-input-group-main />
      </pf-text-input-group>
    </story-canvas>

    <story-canvas title="Disabled">
      <pf-text-input-group disabled>
        <pf-text-input-group-main model-value="Disabled" aria-label="Disabled text input group example input" />
      </pf-text-input-group>
    </story-canvas>

    <story-canvas title="Utilities and icon">
      <pf-text-input-group>
        <pf-text-input-group-main v-model="inputValue">
          <template #icon>
            <magnifying-glass-icon />
          </template>
        </pf-text-input-group-main>
        <pf-text-input-group-utilities v-if="!!inputValue">
          <pf-button variant="plain" aria-label="Clear button and input" @click="inputValue = ''">
            <template #icon>
              <xmark-icon />
            </template>
          </pf-button>
        </pf-text-input-group-utilities>
      </pf-text-input-group>
    </story-canvas>

    <story-canvas title="Filters">
      <pf-text-input-group>
        <pf-text-input-group-main v-model="inputValue2">
          <template v-if="!chips.length" #icon>
            <magnifying-glass-icon />
          </template>
          <pf-chip-group>
            <pf-chip v-for="(chip, index) in chips" :key="index" @click="chips.splice(index, 1)">{{ chip }}</pf-chip>
          </pf-chip-group>
        </pf-text-input-group-main>
        <pf-text-input-group-utilities v-if="!!inputValue2">
          <pf-button variant="plain" aria-label="Clear button and input" @click="inputValue2 = ''">
            <template #icon>
              <xmark-icon />
            </template>
          </pf-button>
        </pf-text-input-group-utilities>
      </pf-text-input-group>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import MagnifyingGlassIcon from '@vue-patternfly/icons/magnifying-glass-icon';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';

const inputValue = ref('');

const inputValue2 = ref('');
const chips = reactive([
  'chip one',
  'chip two',
  'chip three',
  'chip four',
  'chip five',
  'chip six',
  'chip seven',
  'chip eight',
  'chip nine',
  'chip ten',
  'chip eleven',
  'chip twelve',
  'chip thirteen',
  'chip fourteen',
]);
</script>
