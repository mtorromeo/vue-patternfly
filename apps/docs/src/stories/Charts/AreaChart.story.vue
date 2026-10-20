<template>
  <doc-page title="Area chart">
    <template #description>An <b>area chart</b> shows a quantity over time, filling the area below each line.</template>

    <template #apidocs>
      <component-info name="PfChartArea" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      The charts are based on [Apache ECharts](https://echarts.apache.org/), with PatternFly theming. Every chart wrapper registers the ECharts modules it needs: the only setup is importing `@patternfly/patternfly/patternfly-charts.css`, which defines the chart colors.

      ## Examples
    </pre>

    <story-canvas title="Basic with right aligned legend">
      <pf-chart-area
        aria-label="Area chart example"
        :height="200"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 4 },
              { x: '2017', y: 8 },
              { x: '2018', y: 6 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 3 },
              { x: '2017', y: 4 },
              { x: '2018', y: 5 },
              { x: '2019', y: 6 },
            ],
          },
          {
            name: 'Birds',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 3 },
              { x: '2018', y: 2 },
              { x: '2019', y: 4 },
            ],
          },
        ]"
      />
    </story-canvas>

    <story-canvas title="Teal with bottom aligned legend and axis label">
      <pf-chart-area
        aria-label="Area chart example"
        :height="250"
        legend-position="bottom"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 4 },
              { x: '2017', y: 8 },
              { x: '2018', y: 6 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 3 },
              { x: '2017', y: 4 },
              { x: '2018', y: 5 },
              { x: '2019', y: 6 },
            ],
          },
          {
            name: 'Birds',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 3 },
              { x: '2018', y: 2 },
              { x: '2019', y: 4 },
            ],
          },
        ]"
        theme-color="teal"
        x-axis-label="Years"
      />
    </story-canvas>

    <story-canvas title="Multi-color (unordered) bottom-left aligned legend, stacked">
      <pf-chart-area
        aria-label="Area chart example"
        :height="250"
        legend-position="bottom-left"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 4 },
              { x: '2017', y: 8 },
              { x: '2018', y: 6 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 3 },
              { x: '2017', y: 4 },
              { x: '2018', y: 5 },
              { x: '2019', y: 6 },
            ],
          },
          {
            name: 'Birds',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 3 },
              { x: '2018', y: 2 },
              { x: '2019', y: 4 },
            ],
          },
        ]"
        stacked
        theme-color="multi-unordered"
      />
    </story-canvas>

    <story-canvas title="With threshold">
      <pf-chart-area
        aria-label="Area chart with threshold example"
        :height="250"
        legend-position="bottom"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 4 },
              { x: '2017', y: 8 },
              { x: '2018', y: 6 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 3 },
              { x: '2017', y: 4 },
              { x: '2018', y: 5 },
              { x: '2019', y: 6 },
            ],
          },
          {
            name: 'Birds',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 3 },
              { x: '2018', y: 2 },
              { x: '2019', y: 4 },
            ],
          },
        ]"
        :thresholds="[
          {
            name: 'Cats threshold',
            data: [
              { x: '2015', y: 5 },
              { x: '2016', y: 5 },
              { x: '2017', y: 6 },
              { x: '2018', y: 6 },
              { x: '2019', y: 6 },
            ],
          },
        ]"
        theme-color="multi-unordered"
      />
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      - `ChartStack` and `ChartGroup` are not separate components: pass several `series` and set `stacked` to stack them.
      - `ChartThreshold` is the `thresholds` prop, drawing dashed lines over the series.
      - Victory's `padding`, `domain` and custom `*Component` props have no equivalent: anything the props don't cover can be set through `option`, which is deep merged over the generated [ECharts option](https://echarts.apache.org/en/option.html).
    </pre>
  </doc-page>
</template>
