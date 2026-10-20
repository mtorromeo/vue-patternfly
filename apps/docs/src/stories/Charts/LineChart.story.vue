<template>
  <doc-page title="Line chart">
    <template #description>A <b>line chart</b> shows how values change over time.</template>

    <template #apidocs>
      <component-info name="PfChartLine" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ## Examples
    </pre>

    <story-canvas title="Basic with right aligned legend">
      <pf-chart-line
        aria-label="Line chart example"
        :height="250"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
            lineStyle: { type: 'dashed' },
          },
          {
            name: 'Birds',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 4 },
              { x: '2017', y: 9 },
              { x: '2018', y: 5 },
            ],
          },
          {
            name: 'Mice',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 3 },
              { x: '2017', y: 8 },
              { x: '2018', y: 7 },
            ],
          },
        ]"
      />
    </story-canvas>

    <story-canvas title="Green with bottom aligned legend">
      <pf-chart-line
        aria-label="Line chart example"
        :height="275"
        legend-position="bottom"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
            lineStyle: { type: 'dashed' },
          },
          {
            name: 'Birds',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 4 },
              { x: '2017', y: 9 },
              { x: '2018', y: 5 },
            ],
          },
          {
            name: 'Mice',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 3 },
              { x: '2017', y: 8 },
              { x: '2018', y: 7 },
            ],
          },
        ]"
        theme-color="green"
        x-axis-label="Years"
        y-axis-label="Pets"
      />
    </story-canvas>

    <story-canvas title="Without legend">
      <pf-chart-line
        aria-label="Line chart example"
        :height="250"
        legend-position="none"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
            lineStyle: { type: 'dashed' },
          },
          {
            name: 'Birds',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 4 },
              { x: '2017', y: 9 },
              { x: '2018', y: 5 },
            ],
          },
          {
            name: 'Mice',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 3 },
              { x: '2017', y: 8 },
              { x: '2018', y: 7 },
            ],
          },
        ]"
      />
    </story-canvas>

    <story-canvas title="Multi-color (unordered) with points">
      <pf-chart-line
        aria-label="Line chart example"
        :height="275"
        legend-position="bottom-left"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
            lineStyle: { type: 'dashed' },
          },
          {
            name: 'Birds',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 4 },
              { x: '2017', y: 9 },
              { x: '2018', y: 5 },
            ],
          },
          {
            name: 'Mice',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 3 },
              { x: '2017', y: 8 },
              { x: '2018', y: 7 },
            ],
          },
        ]"
        show-symbol
        theme-color="multi-unordered"
      />
    </story-canvas>
    <story-canvas title="Zoomable, with toolbox">
      <pf-chart-line
        aria-label="Zoomable line chart example"
        :height="325"
        legend-position="bottom"
        :series="[
          {
            name: 'Requests',
            data: Array.from({ length: 365 }, (_, day) => ({
              x: new Date(2026, 0, day + 1),
              y: Math.round(500 + 300 * Math.sin(day / 10) + 100 * Math.cos(day / 3)),
            })),
          },
        ]"
        toolbox
        zoomable
      />
    </story-canvas>

    <story-canvas title="Polar">
      <pf-chart-line
        aria-label="Polar line chart example"
        :height="350"
        polar
        :series="[
          {
            name: 'Cats',
            data: [
              { x: 'Mon', y: 3 },
              { x: 'Tue', y: 5 },
              { x: 'Wed', y: 4 },
              { x: 'Thu', y: 7 },
              { x: 'Fri', y: 6 },
              { x: 'Sat', y: 9 },
              { x: 'Sun', y: 8 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: 'Mon', y: 6 },
              { x: 'Tue', y: 4 },
              { x: 'Wed', y: 7 },
              { x: 'Thu', y: 3 },
              { x: 'Fri', y: 5 },
              { x: 'Sat', y: 4 },
              { x: 'Sun', y: 6 },
            ],
          },
        ]"
        show-symbol
        theme-color="multi-ordered"
      />
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      - Zooming (`zoomable`) uses the ECharts [data zoom](https://echarts.apache.org/en/option.html#dataZoom), where
        Victory uses a zoom container: the slider zooms into the independent axis, as does the mouse wheel while holding
        Ctrl (or a pinch), so the wheel alone still scrolls the page.
      - `toolbox` adds buttons to save the chart as an image (SVG with the default SVG renderer) and to restore it.
      - `polar` draws the series on polar coordinates, which react-charts can't.
    </pre>
  </doc-page>
</template>
