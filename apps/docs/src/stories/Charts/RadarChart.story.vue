<template>
  <doc-page title="Radar chart">
    <template #description
      >A <b>radar chart</b> compares several series over multiple dimensions, each drawn as a polygon on axes radiating
      from the center.</template
    >

    <template #apidocs>
      <component-info name="PfChartRadar" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      patternfly-react has no radar chart: `PfChartRadar` is based on the ECharts [radar series](https://echarts.apache.org/en/option.html#series-radar). Each series has one value per indicator, in the same order.

      ## Examples
    </pre>

    <story-canvas title="Basic with right aligned legend">
      <pf-chart-radar
        aria-label="Radar chart example"
        :height="300"
        :indicators="[
          { name: 'CPU', max: 100 },
          { name: 'Memory', max: 100 },
          { name: 'Disk', max: 100 },
          { name: 'Network', max: 100 },
          { name: 'GPU', max: 100 },
        ]"
        :series="[
          { name: 'Node 1', data: [60, 70, 30, 80, 20] },
          { name: 'Node 2', data: [40, 30, 90, 50, 60] },
        ]"
      />
    </story-canvas>

    <story-canvas title="Multi-color (ordered) with bottom aligned legend">
      <pf-chart-radar
        aria-label="Radar chart example"
        :height="350"
        :indicators="[
          { name: 'CPU', max: 100 },
          { name: 'Memory', max: 100 },
          { name: 'Disk', max: 100 },
          { name: 'Network', max: 100 },
          { name: 'GPU', max: 100 },
        ]"
        legend-position="bottom"
        :series="[
          { name: 'Node 1', data: [60, 70, 30, 80, 20] },
          { name: 'Node 2', data: [40, 30, 90, 50, 60] },
          { name: 'Node 3', data: [80, 50, 60, 30, 70] },
        ]"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <story-canvas title="Circle without fill">
      <pf-chart-radar
        aria-label="Radar chart example"
        :filled="false"
        :height="300"
        :indicators="[
          { name: 'CPU', max: 100 },
          { name: 'Memory', max: 100 },
          { name: 'Disk', max: 100 },
          { name: 'Network', max: 100 },
          { name: 'GPU', max: 100 },
        ]"
        :levels="4"
        :series="[
          { name: 'Node 1', data: [60, 70, 30, 80, 20] },
          { name: 'Node 2', data: [40, 30, 90, 50, 60] },
        ]"
        shape="circle"
        theme-color="purple"
      />
    </story-canvas>

    <story-canvas title="Skeleton">
      <pf-chart-radar
        aria-label="Radar chart skeleton example"
        :height="300"
        :indicators="[
          { name: 'CPU', max: 100 },
          { name: 'Memory', max: 100 },
          { name: 'Disk', max: 100 },
          { name: 'Network', max: 100 },
          { name: 'GPU', max: 100 },
        ]"
        :series="[
          { name: 'Node 1', data: [60, 70, 30, 80, 20] },
          { name: 'Node 2', data: [40, 30, 90, 50, 60] },
        ]"
        theme-color="skeleton"
      />
    </story-canvas>
  </doc-page>
</template>
