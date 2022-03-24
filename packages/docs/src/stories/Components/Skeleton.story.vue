<template>
  <doc-page title="Skeleton">
    <component-title name="pf-skeleton" />

    <md>
      A **skeleton** is a type of loading state that allows you to expose content incrementally. For content that may take a long time to load, use a progress bar in place of a skeleton.
      See full [Design guidelines](https://www.patternfly.org/v4/components/skeleton/design-guidelines) on the official patternfly documentation.
      ## Examples
    </md>

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

    <story-canvas title="Percentage widths" style="height: 400px; display: flex; align-items: flex-end; justify-content: space-between">
      <pf-skeleton width="15%" height="33%" />
      <pf-skeleton width="15%" height="50%" />
      <pf-skeleton width="15%" height="60%" />
      <pf-skeleton width="15%" height="75%" />
      <pf-skeleton width="15%" height="100%" />
    </story-canvas>
  </doc-page>
</template>
