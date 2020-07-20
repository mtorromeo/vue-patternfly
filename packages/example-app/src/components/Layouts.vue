<template>
  <PageSection>
    <h2 class="pf-c-title pf-m-4xl">Bullseye Layout</h2>
    <Bullseye>
      Bullseye ◎ layout
    </Bullseye>

    <h2 class="pf-c-title pf-m-4xl">Flex Layout</h2>
    <Flex justify-content="space-between">
      <FlexItem align-self-sm="flex-start">Flex 1</FlexItem>
      <FlexItem align-self-sm="flex-start" :grow-md="grow">Flex 2</FlexItem>
    </Flex>

    <label><input type="checkbox" v-model="grow"> grow flex 2</label>

    <Flex>
      <Flex flex="1">
        <FlexItem>Flex item</FlexItem>
      </Flex>
      <Flex flex="1">
        <FlexItem>Flex item</FlexItem>
        <FlexItem>Flex item</FlexItem>
      </Flex>
      <Flex flex="1">
        <FlexItem>Flex item</FlexItem>
        <FlexItem>Flex item</FlexItem>
        <FlexItem>Flex item</FlexItem>
      </Flex>
    </Flex>

    <h2 class="pf-c-title pf-m-4xl">Gallery Layout</h2>
    <Gallery gutter>
      <GalleryItem>Gallery Item</GalleryItem>
      <GalleryItem>Gallery Item</GalleryItem>
      <GalleryItem>Gallery Item</GalleryItem>
      <GalleryItem>Gallery Item</GalleryItem>
      <GalleryItem>Gallery Item</GalleryItem>
      <GalleryItem>Gallery Item</GalleryItem>
    </Gallery>

    <h2 class="pf-c-title pf-m-4xl">Grid Layout</h2>
    <Grid gutter>
      <GridItem span="8">span = 8</GridItem>
      <GridItem span="4" row-span="2">
        span = 4, rowSpan = 2
      </GridItem>
      <GridItem span="2" row-span="3">
        span = 2, rowSpan = 3
      </GridItem>
      <GridItem span="2">span = 2</GridItem>
      <GridItem span="4">span = 4</GridItem>
      <GridItem span="2">span = 2</GridItem>
      <GridItem span="2">span = 2</GridItem>
      <GridItem span="2">span = 2</GridItem>
      <GridItem span="4">span = 4</GridItem>
      <GridItem span="2">span = 2</GridItem>
      <GridItem span="4">span = 4</GridItem>
      <GridItem span="4">span = 4</GridItem>
    </Grid>

    <h2 class="pf-c-title pf-m-4xl">Level Layout</h2>
    <Level gutter>
      <LevelItem>Level Item</LevelItem>
      <LevelItem>Level Item</LevelItem>
      <LevelItem>Level Item</LevelItem>
    </Level>

    <h2 class="pf-c-title pf-m-4xl">Split Layout</h2>
    <Split gutter>
      <SplitItem>content</SplitItem>
      <SplitItem filled>pf-m-fill</SplitItem>
      <SplitItem>content</SplitItem>
    </Split>

    <h2 class="pf-c-title pf-m-4xl">Stack Layout</h2>
    <Stack gutter>
      <StackItem>content</StackItem>
      <StackItem filled>pf-m-fill</StackItem>
      <StackItem>content</StackItem>
    </Stack>
  </PageSection>
</template>

<script>
export default {
  name: 'Layouts',

  data() {
    return {
      grow: false,
    };
  },
};
</script>
