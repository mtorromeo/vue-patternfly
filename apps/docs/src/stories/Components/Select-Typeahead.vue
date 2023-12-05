<template>
  <pf-select variant="typeahead" full-width>
    <template #label>
      <pf-text-input-group plain>
        <pf-text-input-group-main v-model="input" autocomplete="off" placeholder="Select a state" role="combobox" />
        <pf-text-input-group-utilities>
          <pf-button v-if="input" variant="plain" @click="(filter = '') && (input = '')">
            <xmark-icon aria-hidden />
          </pf-button>
        </pf-text-input-group-utilities>
      </pf-text-input-group>
    </template>

    <pf-select-option check value="Debug" />
    <pf-select-option check value="Info" />
    <pf-select-option check value="Warn" />
    <pf-select-option check value="Error" disabled />
  </pf-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';

const filter = ref('');
const input = ref('');
</script>
