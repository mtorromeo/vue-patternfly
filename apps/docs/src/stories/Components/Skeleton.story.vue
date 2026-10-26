<template>
  <doc-page title="Skeleton">
    <template #description
      >A <b>skeleton</b> is a type of loading state that allows you to expose content incrementally. For content that
      may take a long time to load, use a progress bar in place of a skeleton.</template
    >

    <template #apidocs>
      <component-info name="PfSkeleton" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Default">
      <pf-skeleton screenreader-text="Loading default content" />
    </story-canvas>

    <story-canvas title="Percentage widths">
      <pf-skeleton width="25%" screenreader-text="Loading percentage width content" />
      <br />
      <pf-skeleton width="33%" />
      <br />
      <pf-skeleton width="50%" />
      <br />
      <pf-skeleton width="66%" />
      <br />
      <pf-skeleton width="75%" />
      <br />
      <pf-skeleton />
    </story-canvas>

    <story-canvas title="Percentage heights">
      <div style="height: 400px; display: flex; align-items: flex-end; justify-content: space-between">
        <pf-skeleton height="25%" width="15%" screenreader-text="Loading percentage height content" />
        <pf-skeleton height="33%" width="15%" />
        <pf-skeleton height="50%" width="15%" />
        <pf-skeleton height="66%" width="15%" />
        <pf-skeleton height="75%" width="15%" />
        <pf-skeleton height="100%" width="15%" />
      </div>
    </story-canvas>

    <story-canvas title="Text modifiers">
      <template v-for="(size, i) in fontSizes" :key="size">
        <br v-if="i > 0" />
        --pf-t--global--font--size--{{ size }}
        <pf-skeleton :font-size="size" :screenreader-text="i === 0 ? 'Loading text content' : undefined" />
      </template>
    </story-canvas>

    <story-canvas title="Shapes">
      Small circle
      <pf-skeleton shape="circle" width="15%" screenreader-text="Loading circle content" />
      <br />
      Medium circle
      <pf-skeleton shape="circle" width="30%" />
      <br />
      Large circle
      <pf-skeleton shape="circle" width="50%" />
      <br />
      Small square
      <pf-skeleton shape="square" width="15%" screenreader-text="Loading square content" />
      <br />
      Medium square
      <pf-skeleton shape="square" width="30%" />
      <br />
      Large square
      <pf-skeleton shape="square" width="50%" />
      <br />
      Small rectangle
      <div style="height: 200px">
        <pf-skeleton height="50%" width="50%" screenreader-text="Loading rectangle content" />
      </div>
      <br />
      Medium rectangle
      <div style="height: 200px">
        <pf-skeleton height="75%" width="75%" />
      </div>
      <br />
      Large rectangle
      <div style="height: 200px">
        <pf-skeleton height="100%" />
      </div>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
const fontSizes = ['4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm'] as const;
</script>
