<template>
  <doc-page title="Scatter chart">
    <template #description
      >A <b>scatter chart</b> plots individual data points, showing the relationship between two values.</template
    >

    <template #apidocs>
      <component-info name="PfChartScatter" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-chart-scatter
        aria-label="Scatter chart example"
        :height="275"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: 2015, y: 1 },
              { x: 2016, y: 2 },
              { x: 2017, y: 5 },
              { x: 2018, y: 3 },
              { x: 2019, y: 4 },
            ],
          },
        ]"
      />
    </story-canvas>

    <story-canvas title="With ripples">
      <pf-chart-scatter
        aria-label="Scatter chart example"
        effect
        :height="275"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: 2015, y: 1 },
              { x: 2016, y: 2 },
              { x: 2017, y: 5 },
              { x: 2018, y: 3 },
              { x: 2019, y: 4 },
            ],
          },
        ]"
      />
    </story-canvas>

    <story-canvas title="Brushable, with toolbox">
      <pf-chart-scatter
        aria-label="Brushable scatter chart example"
        brush
        :height="300"
        :series="[
          {
            name: 'Cats',
            data: Array.from({ length: 60 }, (_, index) => ({
              x: Math.round(((index * 37) % 100) * 10) / 10,
              y: Math.round(((index * 53) % 80) * 10) / 10 + 10,
            })),
          },
        ]"
        toolbox
      />
    </story-canvas>

    <story-canvas title="Line chart with points">
      <pf-chart-line
        aria-label="Line chart example"
        :height="275"
        legend-position="bottom"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: 2015, y: 1 },
              { x: 2016, y: 2 },
              { x: 2017, y: 5 },
              { x: 2018, y: 3 },
              { x: 2019, y: 4 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: 2015, y: 2 },
              { x: 2016, y: 1 },
              { x: 2017, y: 7 },
              { x: 2018, y: 4 },
              { x: 2019, y: 3 },
            ],
          },
        ]"
        show-symbol
      />
    </story-canvas>

    <story-canvas title="Area chart with points">
      <pf-chart-area
        aria-label="Area chart example"
        :height="275"
        legend-position="bottom"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: 2015, y: 1 },
              { x: 2016, y: 2 },
              { x: 2017, y: 5 },
              { x: 2018, y: 3 },
              { x: 2019, y: 4 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: 2015, y: 2 },
              { x: 2016, y: 1 },
              { x: 2017, y: 7 },
              { x: 2018, y: 4 },
              { x: 2019, y: 3 },
            ],
          },
        ]"
        show-symbol
        theme-color="multi-unordered"
      />
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      Victory overlays a `ChartScatter` on lines and areas to draw their points; with ECharts it is the `show-symbol` prop of `PfChartLine` and `PfChartArea`.

      `brush` lets the user select points with a rectangle or a polygon, from the toolbox buttons, fading the others and
      emitting `brushselected`.

      `effect` draws ripples around the points ([ECharts effect scatter](https://echarts.apache.org/en/option.html#series-effectScatter)), which react-charts can't. They are not drawn when the user prefers reduced motion. To draw them for a single series, give it `type: 'effectScatter'` instead.
    </pre>
  </doc-page>
</template>
