<template>
  <doc-page title="Switch">
    <template #description>A <b>switch</b> toggles the state of a setting (between on and off). Switches and checkboxes can often be used interchangeably, but the switch provides a more explicit, visible representation on a setting.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Switch.vue" />
    </template>

    <story-canvas title="Basic">
      <pf-switch v-model:checked="checked" label="Message when ON" label-off="Message when OFF" />
    </story-canvas>

    <story-canvas title="Reversed layout">
      <pf-switch reversed label="Message when ON" label-off="Message when OFF" />
    </story-canvas>

    <story-canvas title="Without label">
      <pf-switch />
    </story-canvas>

    <story-canvas title="Checked with label">
      <pf-switch
        check-icon
        label="Message when on"
        label-off="Message when off"
        aria-label="Message when on" />
    </story-canvas>

    <story-canvas title="Disabled">
      <pf-switch disabled label="Message when ON" label-off="Message when OFF" />
      <br>
      <pf-switch disabled />
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const checked = ref(false);
</script>
