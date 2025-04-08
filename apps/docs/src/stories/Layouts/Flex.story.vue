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

    <story-canvas title="Flex">
      <template #intro>
        <input v-model="grow" type="checkbox"> grow flex 2
      </template>

      <pf-flex justify-content="space-between">
        <pf-flex-item align-self-sm="flex-start">Flex 1</pf-flex-item>
        <pf-flex-item align-self-sm="flex-start" :grow-md="grow">Flex 2</pf-flex-item>
      </pf-flex>

      <pf-flex>
        <pf-flex flex="1">
          <pf-flex-item>Flex item</pf-flex-item>
        </pf-flex>
        <pf-flex flex="1">
          <pf-flex-item>Flex item</pf-flex-item>
          <pf-flex-item>Flex item</pf-flex-item>
        </pf-flex>
        <pf-flex flex="1">
          <pf-flex-item>Flex item</pf-flex-item>
          <pf-flex-item>Flex item</pf-flex-item>
          <pf-flex-item>Flex item</pf-flex-item>
        </pf-flex>
      </pf-flex>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const grow = ref(false);
</script>
