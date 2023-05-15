<template>
  <doc-page class="page__layouts" title="Layouts">
    <p>
      <em>Dashed lines are for illustration purposes only.</em>
    </p>

    <story-canvas title="Bullseye">
      <pf-bullseye>Bullseye ◎ layout</pf-bullseye>
    </story-canvas>

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

    <story-canvas title="Gallery">
      <pf-gallery gutter>
        <pf-gallery-item>Gallery Item</pf-gallery-item>
        <pf-gallery-item>Gallery Item</pf-gallery-item>
        <pf-gallery-item>Gallery Item</pf-gallery-item>
        <pf-gallery-item>Gallery Item</pf-gallery-item>
        <pf-gallery-item>Gallery Item</pf-gallery-item>
        <pf-gallery-item>Gallery Item</pf-gallery-item>
      </pf-gallery>
    </story-canvas>

    <story-canvas title="Grid">
      <pf-grid gutter>
        <pf-grid-item span="8">span = 8</pf-grid-item>
        <pf-grid-item span="4" row-span="2">span = 4, rowSpan = 2</pf-grid-item>
        <pf-grid-item span="2" row-span="3">span = 2, rowSpan = 3</pf-grid-item>
        <pf-grid-item span="2">span = 2</pf-grid-item>
        <pf-grid-item span="4">span = 4</pf-grid-item>
        <pf-grid-item span="2">span = 2</pf-grid-item>
        <pf-grid-item span="2">span = 2</pf-grid-item>
        <pf-grid-item span="2">span = 2</pf-grid-item>
        <pf-grid-item span="4">span = 4</pf-grid-item>
        <pf-grid-item span="2">span = 2</pf-grid-item>
        <pf-grid-item span="4">span = 4</pf-grid-item>
        <pf-grid-item span="4">span = 4</pf-grid-item>
      </pf-grid>
    </story-canvas>

    <story-canvas title="Level">
      <pf-level gutter>
        <pf-level-item>Level Item</pf-level-item>
        <pf-level-item>Level Item</pf-level-item>
        <pf-level-item>Level Item</pf-level-item>
      </pf-level>
    </story-canvas>

    <story-canvas title="Split">
      <pf-split gutter>
        <pf-split-item>content</pf-split-item>
        <pf-split-item filled>pf-m-fill</pf-split-item>
        <pf-split-item>content</pf-split-item>
      </pf-split>
    </story-canvas>

    <story-canvas title="Stack">
      <pf-stack gutter>
        <pf-stack-item>content</pf-stack-item>
        <pf-stack-item filled>pf-m-fill</pf-stack-item>
        <pf-stack-item>content</pf-stack-item>
      </pf-stack>
    </story-canvas>
  </doc-page>
</template>

<style lang="scss">
.page__layouts {
  .pf-c-divider {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .pf-l-bullseye,
  .pf-l-flex,
  .pf-l-flex > div,
  .pf-l-gallery,
  .pf-l-gallery > div,
  .pf-l-grid,
  .pf-l-grid > div,
  .pf-l-level,
  .pf-l-level > div,
  .pf-l-split,
  .pf-l-split > div,
  .pf-l-stack,
  .pf-l-stack > div {
    border-style: dashed !important;
    border-width: 2px !important;
    padding: 1rem !important;
  }

  .pf-l-bullseye,
  .pf-l-flex,
  .pf-l-gallery,
  .pf-l-grid,
  .pf-l-level,
  .pf-l-split,
  .pf-l-stack {
    margin: 1rem 0 !important;
  }
}
</style>

<script lang="ts" setup>
import { ref } from "vue";
const grow = ref(false);
</script>
