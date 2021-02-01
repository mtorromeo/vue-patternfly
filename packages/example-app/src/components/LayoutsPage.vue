<template>
  <pf-page-section>
    <h2 class="pf-c-title pf-m-4xl">
      Bullseye Layout
    </h2>
    <pf-bullseye>
      Bullseye ◎ layout
    </pf-bullseye>

    <h2 class="pf-c-title pf-m-4xl">
      Flex Layout
    </h2>
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

    <h2 class="pf-c-title pf-m-4xl">
      Gallery Layout
    </h2>
    <pf-gallery gutter>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
      <pf-gallery-item>Gallery Item</pf-gallery-item>
    </pf-gallery>

    <h2 class="pf-c-title pf-m-4xl">
      Grid Layout
    </h2>
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

    <h2 class="pf-c-title pf-m-4xl">
      Level Layout
    </h2>
    <pf-level gutter>
      <pf-level-item>Level Item</pf-level-item>
      <pf-level-item>Level Item</pf-level-item>
      <pf-level-item>Level Item</pf-level-item>
    </pf-level>

    <h2 class="pf-c-title pf-m-4xl">
      Split Layout
    </h2>
    <Split gutter>
      <SplitItem>content</SplitItem>
      <SplitItem filled>
        pf-m-fill
      </SplitItem>
      <SplitItem>content</SplitItem>
    </Split>

    <h2 class="pf-c-title pf-m-4xl">
      Stack Layout
    </h2>
    <Stack gutter>
      <StackItem>content</StackItem>
      <StackItem filled>
        pf-m-fill
      </StackItem>
      <StackItem>content</StackItem>
    </Stack>
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
