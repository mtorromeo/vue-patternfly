<template>
  <doc-page class="page__layouts" title="Flex" doc-section="layouts">
    <template #description>
      <pre v-md>
        The **flex** layout supports a completely custom layout by utilizing the PatternFly spacer and breakpoint systems. Flex layouts are infinitely nestable and allow you to adjust spacing, direction, alignment, justification, wrapping, and width to fit your needs.
      </pre>
    </template>

    <template #apidocs>
      <component-info src="packages/core/src/layouts/Flex/Flex.vue" />
      <component-info src="packages/core/src/layouts/Flex/FlexItem.vue" />
    </template>

    <story-canvas title="Basic">
      <template #intro>
        <input v-model="grow" type="checkbox"> grow flex 2
      </template>

      <pf-flex justify-content="space-evenly">
        <pf-flex-item align-self-sm="flex-start">Flex 1</pf-flex-item>
        <pf-flex-item align-self-sm="flex-start" :grow-md="grow">Flex 2</pf-flex-item>
      </pf-flex>
    </story-canvas>

    <story-canvas title="Nested">
      <pf-flex>
        <pf-flex flex="1">
          <pf-flex-item>Flex item</pf-flex-item>
        </pf-flex>
        <pf-flex flex="1">
          <pf-flex-item>Flex item</pf-flex-item>
          <pf-flex-item grow>Flex item</pf-flex-item>
        </pf-flex>
        <pf-flex flex="1">
          <pf-flex-item>Flex item</pf-flex-item>
          <pf-flex-item>Flex item</pf-flex-item>
          <pf-flex-item>Flex item</pf-flex-item>
        </pf-flex>
      </pf-flex>
    </story-canvas>

    <story-canvas title="Column">
      <pf-flex direction="column" flex-wrap="nowrap" space-items="none" style="height: 250px">
        <pf-flex-item align-self-sm="flex-start">Flex 1</pf-flex-item>
        <pf-flex-item align-self-sm="flex-end" grow>Flex 2</pf-flex-item>
      </pf-flex>
    </story-canvas>

    <story-canvas title="Inline">
      <pf-flex display="inline-flex">
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
      </pf-flex>
    </story-canvas>

    <story-canvas title="Row gap">
      <pf-flex gap="2xl">
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
      </pf-flex>
    </story-canvas>

    <story-canvas title="Column gap">
      <pf-flex column-gap="2xl">
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
        <pf-flex-item>Flex item</pf-flex-item>
      </pf-flex>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const grow = ref(false);
</script>
