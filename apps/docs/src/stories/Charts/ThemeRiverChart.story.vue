<template>
  <doc-page title="Theme river chart">
    <template #description
      >A <b>theme river</b> shows how several values change over time as streams flowing along a time axis, each as wide
      as its value.</template
    >

    <template #apidocs>
      <component-info name="PfChartThemeRiver" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ## Examples
    </pre>

    <story-canvas title="Basic with right aligned legend">
      <pf-chart-theme-river
        aria-label="Theme river chart example"
        :height="300"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2026-01-01', y: 6 },
              { x: '2026-02-01', y: 8 },
              { x: '2026-03-01', y: 10 },
              { x: '2026-04-01', y: 11 },
              { x: '2026-05-01', y: 11 },
              { x: '2026-06-01', y: 9 },
              { x: '2026-07-01', y: 7 },
              { x: '2026-08-01', y: 4 },
              { x: '2026-09-01', y: 2 },
              { x: '2026-10-01', y: 1 },
              { x: '2026-11-01', y: 1 },
              { x: '2026-12-01', y: 2 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2026-01-01', y: 12 },
              { x: '2026-02-01', y: 13 },
              { x: '2026-03-01', y: 13 },
              { x: '2026-04-01', y: 11 },
              { x: '2026-05-01', y: 9 },
              { x: '2026-06-01', y: 6 },
              { x: '2026-07-01', y: 4 },
              { x: '2026-08-01', y: 3 },
              { x: '2026-09-01', y: 3 },
              { x: '2026-10-01', y: 4 },
              { x: '2026-11-01', y: 7 },
              { x: '2026-12-01', y: 9 },
            ],
          },
          {
            name: 'Birds',
            data: [
              { x: '2026-01-01', y: 15 },
              { x: '2026-02-01', y: 13 },
              { x: '2026-03-01', y: 11 },
              { x: '2026-04-01', y: 8 },
              { x: '2026-05-01', y: 6 },
              { x: '2026-06-01', y: 5 },
              { x: '2026-07-01', y: 5 },
              { x: '2026-08-01', y: 6 },
              { x: '2026-09-01', y: 9 },
              { x: '2026-10-01', y: 11 },
              { x: '2026-11-01', y: 13 },
              { x: '2026-12-01', y: 15 },
            ],
          },
          {
            name: 'Mice',
            data: [
              { x: '2026-01-01', y: 13 },
              { x: '2026-02-01', y: 10 },
              { x: '2026-03-01', y: 8 },
              { x: '2026-04-01', y: 7 },
              { x: '2026-05-01', y: 7 },
              { x: '2026-06-01', y: 8 },
              { x: '2026-07-01', y: 11 },
              { x: '2026-08-01', y: 13 },
              { x: '2026-09-01', y: 15 },
              { x: '2026-10-01', y: 17 },
              { x: '2026-11-01', y: 17 },
              { x: '2026-12-01', y: 16 },
            ],
          },
        ]"
      />
    </story-canvas>

    <story-canvas title="Multi-color (ordered) with labels and bottom aligned legend">
      <pf-chart-theme-river
        aria-label="Theme river chart example"
        :height="300"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2026-01-01', y: 6 },
              { x: '2026-02-01', y: 8 },
              { x: '2026-03-01', y: 10 },
              { x: '2026-04-01', y: 11 },
              { x: '2026-05-01', y: 11 },
              { x: '2026-06-01', y: 9 },
              { x: '2026-07-01', y: 7 },
              { x: '2026-08-01', y: 4 },
              { x: '2026-09-01', y: 2 },
              { x: '2026-10-01', y: 1 },
              { x: '2026-11-01', y: 1 },
              { x: '2026-12-01', y: 2 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2026-01-01', y: 12 },
              { x: '2026-02-01', y: 13 },
              { x: '2026-03-01', y: 13 },
              { x: '2026-04-01', y: 11 },
              { x: '2026-05-01', y: 9 },
              { x: '2026-06-01', y: 6 },
              { x: '2026-07-01', y: 4 },
              { x: '2026-08-01', y: 3 },
              { x: '2026-09-01', y: 3 },
              { x: '2026-10-01', y: 4 },
              { x: '2026-11-01', y: 7 },
              { x: '2026-12-01', y: 9 },
            ],
          },
          {
            name: 'Birds',
            data: [
              { x: '2026-01-01', y: 15 },
              { x: '2026-02-01', y: 13 },
              { x: '2026-03-01', y: 11 },
              { x: '2026-04-01', y: 8 },
              { x: '2026-05-01', y: 6 },
              { x: '2026-06-01', y: 5 },
              { x: '2026-07-01', y: 5 },
              { x: '2026-08-01', y: 6 },
              { x: '2026-09-01', y: 9 },
              { x: '2026-10-01', y: 11 },
              { x: '2026-11-01', y: 13 },
              { x: '2026-12-01', y: 15 },
            ],
          },
          {
            name: 'Mice',
            data: [
              { x: '2026-01-01', y: 13 },
              { x: '2026-02-01', y: 10 },
              { x: '2026-03-01', y: 8 },
              { x: '2026-04-01', y: 7 },
              { x: '2026-05-01', y: 7 },
              { x: '2026-06-01', y: 8 },
              { x: '2026-07-01', y: 11 },
              { x: '2026-08-01', y: 13 },
              { x: '2026-09-01', y: 15 },
              { x: '2026-10-01', y: 17 },
              { x: '2026-11-01', y: 17 },
              { x: '2026-12-01', y: 16 },
            ],
          },
        ]"
        labels
        legend-position="bottom"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <story-canvas title="Numeric x values with axis label">
      <pf-chart-theme-river
        aria-label="Theme river chart example"
        :height="300"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: 2015, y: 6 },
              { x: 2016, y: 8 },
              { x: 2017, y: 10 },
              { x: 2018, y: 11 },
              { x: 2019, y: 11 },
              { x: 2020, y: 9 },
              { x: 2021, y: 7 },
              { x: 2022, y: 4 },
              { x: 2023, y: 2 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: 2015, y: 12 },
              { x: 2016, y: 13 },
              { x: 2017, y: 13 },
              { x: 2018, y: 11 },
              { x: 2019, y: 9 },
              { x: 2020, y: 6 },
              { x: 2021, y: 4 },
              { x: 2022, y: 3 },
              { x: 2023, y: 3 },
            ],
          },
          {
            name: 'Birds',
            data: [
              { x: 2015, y: 15 },
              { x: 2016, y: 13 },
              { x: 2017, y: 11 },
              { x: 2018, y: 8 },
              { x: 2019, y: 6 },
              { x: 2020, y: 5 },
              { x: 2021, y: 5 },
              { x: 2022, y: 6 },
              { x: 2023, y: 9 },
            ],
          },
          {
            name: 'Mice',
            data: [
              { x: 2015, y: 13 },
              { x: 2016, y: 10 },
              { x: 2017, y: 8 },
              { x: 2018, y: 7 },
              { x: 2019, y: 7 },
              { x: 2020, y: 8 },
              { x: 2021, y: 11 },
              { x: 2022, y: 13 },
              { x: 2023, y: 15 },
            ],
          },
        ]"
        legend-position="bottom"
        theme-color="multi-unordered"
        x-axis-label="Year"
      />
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      react-charts has no theme river chart: this is an ECharts only chart, drawn on a
      [single axis](https://echarts.apache.org/en/option.html#singleAxis).

      Streams are given as `series`, like the area and line charts: `x` is a date (or a number) and `y` the value. A
      stream missing a value at a date is drawn with a zero width there. Hovering a stream fades the others and shows
      its name; the tooltip lists every stream at the hovered date.
    </pre>
  </doc-page>
</template>
