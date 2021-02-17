<template>
  <pf-page-section>
    <pf-title size="4xl">
      Layouts
    </pf-title>

    <pf-title h="2">
      Bullseye
    </pf-title>
    <pf-bullseye>
      Bullseye ◎ layout
    </pf-bullseye>

    <pf-divider />

    <pf-title h="2">
      Flex
    </pf-title>
    <pf-flex justify-content="space-between">
      <pf-flex-item align-self-sm="flex-start">
        Flex 1
      </pf-flex-item>
      <pf-flex-item align-self-sm="flex-start" :grow-md="grow">
        Flex 2
      </pf-flex-item>
    </pf-flex>

    <label><input v-model="grow" type="checkbox"> grow flex 2</label>

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

    <pf-divider />

    <pf-title h="2">
      Gallery
    </pf-title>
    <pf-gallery gutter>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
    </pf-gallery>

    <pf-divider />

    <pf-title h="2">
      Grid
    </pf-title>
    <pf-grid gutter>
      <pf-grid-item span="8">
        span = 8
      </pf-grid-item>
      <pf-grid-item span="4" row-span="2">
        span = 4, rowSpan = 2
      </pf-grid-item>
      <pf-grid-item span="2" row-span="3">
        span = 2, rowSpan = 3
      </pf-grid-item>
      <pf-grid-item span="2">
        span = 2
      </pf-grid-item>
      <pf-grid-item span="4">
        span = 4
      </pf-grid-item>
      <pf-grid-item span="2">
        span = 2
      </pf-grid-item>
      <pf-grid-item span="2">
        span = 2
      </pf-grid-item>
      <pf-grid-item span="2">
        span = 2
      </pf-grid-item>
      <pf-grid-item span="4">
        span = 4
      </pf-grid-item>
      <pf-grid-item span="2">
        span = 2
      </pf-grid-item>
      <pf-grid-item span="4">
        span = 4
      </pf-grid-item>
      <pf-grid-item span="4">
        span = 4
      </pf-grid-item>
    </pf-grid>

    <pf-divider />

    <pf-title h="2">
      Level
    </pf-title>
    <pf-level gutter>
      <pf-level-item>Level Item</pf-level-item>
      <pf-level-item>Level Item</pf-level-item>
      <pf-level-item>Level Item</pf-level-item>
    </pf-level>

    <pf-divider />

    <pf-title h="2">
      Split
    </pf-title>
    <pf-split gutter>
      <pf-split-item>content</pf-split-item>
      <pf-split-item filled>
        pf-m-fill
      </pf-split-item>
      <pf-split-item>content</pf-split-item>
    </pf-split>

    <pf-divider />

    <pf-title h="2">
      Stack
    </pf-title>
    <pf-stack gutter>
      <pf-stack-item>content</pf-stack-item>
      <pf-stack-item filled>
        pf-m-fill
      </pf-stack-item>
      <pf-stack-item>content</pf-stack-item>
    </pf-stack>
  </pf-page-section>
</template>

<script>
export default {
  name: 'LayoutsPage',

  data() {
    return {
      grow: false,
    };
  },
};
</script>

<style scoped>
.pf-c-divider {
  margin-bottom: 1rem;
}
</style>
