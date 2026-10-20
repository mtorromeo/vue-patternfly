<template>
  <doc-page title="Sparkline chart">
    <template #description
      >A <b>sparkline</b> is a small area chart, without axes, that shows a trend at a glance.</template
    >

    <template #apidocs>
      <component-info name="PfChartSparkline" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <div style="width: 400px">
        <pf-chart-sparkline
          aria-label="Sparkline chart example"
          :height="100"
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
          ]"
        />
      </div>
      <p>CPU utilization</p>
    </story-canvas>

    <story-canvas title="Green">
      <div style="width: 400px">
        <pf-chart-sparkline
          aria-label="Sparkline chart example"
          :height="100"
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
          ]"
          theme-color="green"
        />
      </div>
      <p>CPU utilization</p>
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      patternfly-react has no sparkline component: its examples compose `ChartGroup` and `ChartArea` without axes.
    </pre>
  </doc-page>
</template>
