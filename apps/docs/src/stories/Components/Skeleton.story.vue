<template>
  <doc-page title="Skeleton">
    <template #description>A <b>skeleton</b> is a type of loading state that allows you to expose content incrementally. For content that may take a long time to load, use a progress bar in place of a skeleton.</template>

    <template #apidocs>
      <component-info name="PfSkeleton" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-skeleton />
    </story-canvas>

    <story-canvas title="Percentage widths">
      <pf-skeleton width="50%" />
      <br>
      <pf-skeleton width="60%" />
      <br>
      <pf-skeleton width="75%" />
      <br>
      <pf-skeleton width="100%" />
    </story-canvas>

    <story-canvas title="Percentage heights" height="450px" style="display: flex; align-items: flex-end; justify-content: space-between">
      <pf-skeleton width="15%" height="33%" />
      <pf-skeleton width="15%" height="50%" />
      <pf-skeleton width="15%" height="60%" />
      <pf-skeleton width="15%" height="75%" />
      <pf-skeleton width="15%" height="100%" />
    </story-canvas>
  </doc-page>
</template>
