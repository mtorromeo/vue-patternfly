<template>
  <doc-page title="Box plot chart">
    <template #description
      >A <b>box plot</b> summarizes the distribution of samples through their minimum, quartiles and maximum.</template
    >

    <template #apidocs>
      <component-info name="PfChartBoxPlot" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ## Examples
    </pre>

    <story-canvas title="Basic with right aligned legend">
      <pf-chart-box-plot
        aria-label="Box plot chart example"
        :height="300"
        :option="{ yAxis: { min: 0, max: 12 } }"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: [1, 2, 3, 5] },
              { x: '2016', y: [3, 2, 8, 10] },
              { x: '2017', y: [2, 8, 6, 5] },
              { x: '2018', y: [1, 3, 2, 9] },
            ],
          },
        ]"
      />
    </story-canvas>

    <story-canvas title="Yellow with bottom aligned legend">
      <pf-chart-box-plot
        aria-label="Box plot chart example"
        :height="300"
        legend-position="bottom"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: [1, 2, 3, 5] },
              { x: '2016', y: [3, 2, 8, 10] },
              { x: '2017', y: [2, 8, 6, 5] },
              { x: '2018', y: [1, 3, 2, 9] },
            ],
          },
        ]"
        theme-color="yellow"
      />
    </story-canvas>

    <story-canvas title="Multi-color (ordered) horizontal with bottom aligned legend">
      <pf-chart-box-plot
        aria-label="Box plot chart example"
        :height="350"
        horizontal
        legend-position="bottom"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: [1, 2, 3, 5] },
              { x: '2016', y: [3, 2, 8, 10] },
              { x: '2017', y: [2, 8, 6, 5] },
              { x: '2018', y: [1, 3, 2, 9] },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: [2, 3, 4, 6] },
              { x: '2016', y: [1, 4, 5, 7] },
              { x: '2017', y: [3, 5, 8, 9] },
              { x: '2018', y: [2, 4, 6, 8] },
            ],
          },
        ]"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      - Victory's `labels` (minimum, quartiles, median and maximum drawn next to each box) are shown in the tooltip instead.
      - The quartiles are computed from the samples with linear interpolation, like Victory.
    </pre>
  </doc-page>
</template>
