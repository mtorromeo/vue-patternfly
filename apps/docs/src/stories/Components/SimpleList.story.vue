<template>
  <doc-page title="Simple list">
    <template #description
      >A <b>simple list</b> provides a list of selectable items that can be shown within a page. Each item is described
      by a text label. The list may be divided into logical sections by introducing group headers.</template
    >

    <template #apidocs>
      <component-info name="PfSimpleList" />
      <component-info name="PfSimpleListGroup" />
      <component-info name="PfSimpleListItem" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The current item is bound with `v-model` on `pf-simple-list`, matching the `value` of a `pf-simple-list-item` (`itemId`). This replaces `isActive` and `isControlled`: a `model-value` without `v-model` sets the initially current item, which then follows the clicks.
      - `select` is emitted with the click event and the value of the item (`onSelect`, which receives the item ref and props).
      - The list can be used as a form element by specifying a `name`.
      - The title of `pf-simple-list-group` can also be the `title` slot, and its `id` is generated when not set, so the title always labels its list.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Simple list">
      <pf-simple-list aria-label="Simple List Example" model-value="item1">
        <pf-simple-list-item value="item1">List item 1</pf-simple-list-item>
        <pf-simple-list-item value="item2">List item 2</pf-simple-list-item>
        <pf-simple-list-item value="item3">List item 3</pf-simple-list-item>
      </pf-simple-list>
    </story-canvas>

    <story-canvas title="Simple list with links">
      <pf-simple-list aria-label="Simple List Links Example" model-value="item1">
        <pf-simple-list-item value="item1" component="a" href="#" @click.prevent>List item 1</pf-simple-list-item>
        <pf-simple-list-item value="item2" component="a" href="#" @click.prevent>List item 2</pf-simple-list-item>
        <pf-simple-list-item value="item3" component="a" href="#" @click.prevent>List item 3</pf-simple-list-item>
      </pf-simple-list>
    </story-canvas>

    <story-canvas title="Grouped list">
      <pf-simple-list aria-label="Grouped simple list example" model-value="item1">
        <pf-simple-list-group id="group-1" title="Group 1">
          <pf-simple-list-item value="item1">List item 1</pf-simple-list-item>
          <pf-simple-list-item value="item2">List item 2</pf-simple-list-item>
          <pf-simple-list-item value="item3">List item 3</pf-simple-list-item>
          <pf-simple-list-item value="item4">List item 4</pf-simple-list-item>
        </pf-simple-list-group>
        <pf-simple-list-group id="group-2" title="Group 2">
          <pf-simple-list-item value="item5">List item 1</pf-simple-list-item>
          <pf-simple-list-item value="item6" component="a" href="#" @click.prevent>List item 2</pf-simple-list-item>
          <pf-simple-list-item value="item7" component="a" href="#" @click.prevent>List item 3</pf-simple-list-item>
          <pf-simple-list-item value="item8">List item 4</pf-simple-list-item>
        </pf-simple-list-group>
      </pf-simple-list>
    </story-canvas>

    <story-canvas title="Uncontrolled simple list">
      <template #intro>
        <pre v-md>
          Bind the current item with `v-model` to read or change it from outside the list.
        </pre>
      </template>

      <pf-simple-list v-model="activeItem" aria-label="Uncontrolled Simple List Example">
        <pf-simple-list-item :value="0">List item 1</pf-simple-list-item>
        <pf-simple-list-item :value="1">List item 2</pf-simple-list-item>
        <pf-simple-list-item :value="2">List item 3</pf-simple-list-item>
      </pf-simple-list>
    </story-canvas>

    <story-canvas title="List as form element">
      <template #intro>
        <pre v-md>
          With a `name`, the value of the current item is submitted with the form.
        </pre>
      </template>

      <pf-simple-list v-model="formSelection" name="selection" aria-label="Simple list as form element">
        <pf-simple-list-item value="1">List item 1</pf-simple-list-item>
        <pf-simple-list-item value="2">List item 2</pf-simple-list-item>
        <pf-simple-list-item value="3">List item 3</pf-simple-list-item>
      </pf-simple-list>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeItem = ref(0);
const formSelection = ref('3');
</script>
