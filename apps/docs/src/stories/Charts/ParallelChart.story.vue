<template>
  <doc-page title="Parallel chart">
    <template #description
      >A <b>parallel coordinates</b> chart compares items across several dimensions: each dimension is an axis, and each
      item a line crossing every axis at its value.</template
    >

    <template #apidocs>
      <component-info name="PfChartParallel" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-chart-parallel
        aria-label="Parallel chart example"
        :dimensions="[
          'CPU (%)',
          'Memory (GB)',
          'Disk (GB)',
          { name: 'Tier', categories: ['Bronze', 'Silver', 'Gold'] },
          'Uptime (days)',
        ]"
        :height="350"
        :series="[
          {
            name: 'Cluster A',
            data: [
              [60, 12, 200, 'Gold', 40],
              [75, 16, 250, 'Gold', 12],
              [40, 8, 120, 'Silver', 90],
            ],
          },
          {
            name: 'Cluster B',
            data: [
              [20, 4, 80, 'Bronze', 200],
              [35, 6, 100, 'Silver', 150],
              [50, 10, 160, 'Silver', 60],
            ],
          },
          {
            name: 'Cluster C',
            data: [
              [90, 32, 500, 'Gold', 5],
              [85, 24, 400, 'Gold', 20],
            ],
          },
        ]"
      />
    </story-canvas>

    <story-canvas title="Multi-color (unordered) with smooth lines">
      <pf-chart-parallel
        aria-label="Parallel chart example"
        :dimensions="[
          'CPU (%)',
          'Memory (GB)',
          'Disk (GB)',
          { name: 'Tier', categories: ['Bronze', 'Silver', 'Gold'] },
          'Uptime (days)',
        ]"
        :height="350"
        :series="[
          {
            name: 'Cluster A',
            data: [
              [60, 12, 200, 'Gold', 40],
              [75, 16, 250, 'Gold', 12],
              [40, 8, 120, 'Silver', 90],
            ],
          },
          {
            name: 'Cluster B',
            data: [
              [20, 4, 80, 'Bronze', 200],
              [35, 6, 100, 'Silver', 150],
              [50, 10, 160, 'Silver', 60],
            ],
          },
          {
            name: 'Cluster C',
            data: [
              [90, 32, 500, 'Gold', 5],
              [85, 24, 400, 'Gold', 20],
            ],
          },
        ]"
        smooth
        theme-color="multi-unordered"
      />
    </story-canvas>

    <story-canvas title="Horizontal with bottom legend">
      <pf-chart-parallel
        aria-label="Parallel chart example"
        :dimensions="[
          'CPU (%)',
          'Memory (GB)',
          'Disk (GB)',
          { name: 'Tier', categories: ['Bronze', 'Silver', 'Gold'] },
          'Uptime (days)',
        ]"
        :height="400"
        :series="[
          {
            name: 'Cluster A',
            data: [
              [60, 12, 200, 'Gold', 40],
              [75, 16, 250, 'Gold', 12],
              [40, 8, 120, 'Silver', 90],
            ],
          },
          {
            name: 'Cluster B',
            data: [
              [20, 4, 80, 'Bronze', 200],
              [35, 6, 100, 'Silver', 150],
              [50, 10, 160, 'Silver', 60],
            ],
          },
          {
            name: 'Cluster C',
            data: [
              [90, 32, 500, 'Gold', 5],
              [85, 24, 400, 'Gold', 20],
            ],
          },
        ]"
        horizontal
        legend-position="bottom"
        theme-color="multi-unordered"
      />
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      react-charts has no parallel coordinates chart: this is an ECharts only chart.

      Dimensions with `categories` get a category axis, the others a value axis fitting the data unless given a `min`
      and `max`. Dragging along an axis selects a range of it: lines outside every selected range fade out. A `null`
      value leaves a gap in its line.
    </pre>
  </doc-page>
</template>
