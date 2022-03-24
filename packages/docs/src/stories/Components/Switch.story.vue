<template>
  <doc-page title="Switch">
    <component-title name="pf-switch" />

    <story-canvas title="Basic">
      <pf-switch v-model:checked="checked" label="Message when ON" label-off="Message when OFF" />
    </story-canvas>

    <story-canvas title="Without label">
      <pf-switch />
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
