<template>
  <doc-page title="Simple List">
    <template #description>A <b>simple list</b> provides a list of selectable items that can be shown within a page. Each item is described by a text label. The list may be divided into logical sections by introducing group headers.</template>

    <template #apidocs>
      <component-info name="PfSimpleList" />
      <component-info name="PfSimpleListGroup" />
      <component-info name="PfSimpleListItem" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The list can be used as a form element by specifying a `name`.
      - A `modelValue` prop has been added so that the component can be used with `v-model`.
      - `PfSimpleListItem` has a `value` prop that replaces `itemId` and in conjunction with `PfSimpleList`'s `modelValue` prop, can be used like the native `select` and `option` elements.
      - The `active` prop of `PfSimpleListItem` has been removed. Use `modelValue`/`value` instead to control the selected item.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Simple">
      <pf-simple-list>
        <pf-simple-list-item value="1">List item 1</pf-simple-list-item>
        <pf-simple-list-item value="2" component="a" href="#" @click.prevent>List item 2</pf-simple-list-item>
        <pf-simple-list-item value="3">List item 3</pf-simple-list-item>
      </pf-simple-list>
    </story-canvas>

    <story-canvas title="List as form element">
      <pf-simple-list v-model="sample_selection" name="selection">
        <pf-simple-list-item value="1">List item 1</pf-simple-list-item>
        <pf-simple-list-item value="2" component="a" href="#" @click.prevent>List item 2</pf-simple-list-item>
        <pf-simple-list-item value="3">List item 3</pf-simple-list-item>
      </pf-simple-list>
    </story-canvas>

    <story-canvas title="Grouped">
      <pf-simple-list>
        <pf-simple-list-group title="Group 1">
          <pf-simple-list-item>List item 1</pf-simple-list-item>
          <pf-simple-list-item component="a" href="#" @click.prevent>List item 2</pf-simple-list-item>
          <pf-simple-list-item>List item 3</pf-simple-list-item>
        </pf-simple-list-group>
        <pf-simple-list-group title="Group 2">
          <pf-simple-list-item>List item 4</pf-simple-list-item>
          <pf-simple-list-item component="a" href="#" @click.prevent>List item 5</pf-simple-list-item>
          <pf-simple-list-item>List item 6</pf-simple-list-item>
        </pf-simple-list-group>
      </pf-simple-list>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const sample_selection = ref('3');
</script>
