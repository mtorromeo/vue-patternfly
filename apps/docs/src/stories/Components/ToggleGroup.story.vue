<template>
  <doc-page title="Toggle group">
    <template #description>A <b>toggle group</b> is a group of controls that can be used to quickly switch between actions or states.</template>

    <template #apidocs>
      <component-info name="PfToggleGroup" />
      <component-info name="PfToggleGroupItem" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Default with multiple selectable">
      <template #intro>
        <pre v-md>
          The `pf-toggle-group` behaves like a multi-selection when no `v-model` prop is passed or when its value is a javascript `Array`.
        </pre>
      </template>

      <div style="margin-bottom: 1em">
        <pf-switch v-model:checked="disabledAll" label="Disable all" />
      </div>

      <pf-toggle-group v-model="selectionSet" :disabled="disabledAll" aria-label="Default with multiple selectable">
        <pf-toggle-group-item text="Option 1" />
        <pf-toggle-group-item text="Option 2" value="Value of Option 2" />
        <pf-toggle-group-item text="Option 3" disabled />
      </pf-toggle-group>

      <pre>const selection = ref({{ JSON.stringify(selectionSet) }})</pre>
    </story-canvas>

    <story-canvas title="Default with single selectable">
      <pf-toggle-group v-model="singleSelection" aria-label="Default with multiple selectable">
        <pf-toggle-group-item text="Option 1" />
        <pf-toggle-group-item text="Option 2" value="Value of Option 2" />
        <pf-toggle-group-item text="Option 3" />
      </pf-toggle-group>

      <pre>const singleSelection = ref({{ JSON.stringify(singleSelection) }})</pre>
    </story-canvas>

    <story-canvas title="Unmanaged single selectable">
      <pf-toggle-group aria-label="Default with multiple selectable">
        <pf-toggle-group-item v-model:selected="selected1" text="Option 1" />
        <pf-toggle-group-item v-model:selected="selected2" text="Option 2" />
        <pf-toggle-group-item v-model:selected="selected3" text="Option 3" />
      </pf-toggle-group>

      <pre>
        const selected1 = ref({{ JSON.stringify(selected1) }})
        const selected2 = ref({{ JSON.stringify(selected2) }})
        const selected3 = ref({{ JSON.stringify(selected3) }})
      </pre>
    </story-canvas>
  </doc-page>
</template>

<style scoped>
:deep(.inner-canvas) > pre {
  margin-top: 1em;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

const disabledAll = ref(false);
const selectionSet = ref([] as string[]);
const singleSelection = ref(undefined as string | undefined);

const selected1 = ref(false);
const selected2 = ref(false);
const selected3 = ref(false);
</script>
