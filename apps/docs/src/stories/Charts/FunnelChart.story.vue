<template>
  <doc-page title="Funnel chart">
    <template #description
      >A <b>funnel chart</b> shows how a quantity decreases through the stages of a process, like visitors becoming
      customers.</template
    >

    <template #apidocs>
      <component-info name="PfChartFunnel" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      patternfly-react has no funnel chart: `PfChartFunnel` is based on the ECharts [funnel series](https://echarts.apache.org/en/option.html#series-funnel). Like pie charts, stages are told apart by their color, so the legend is shown on the right by default.

      ## Examples
    </pre>

    <story-canvas title="Basic with right aligned legend">
      <pf-chart-funnel
        aria-label="Funnel chart example"
        :data="[
          { x: 'Visits', y: 1000 },
          { x: 'Sign ups', y: 600 },
          { x: 'Trials', y: 300 },
          { x: 'Purchases', y: 120 },
          { x: 'Renewals', y: 80 },
        ]"
        :height="300"
      />
    </story-canvas>

    <story-canvas title="Multi-color (ordered) with labels and bottom aligned legend">
      <pf-chart-funnel
        aria-label="Funnel chart with labels example"
        :data="[
          { x: 'Visits', y: 1000 },
          { x: 'Sign ups', y: 600 },
          { x: 'Trials', y: 300 },
          { x: 'Purchases', y: 120 },
          { x: 'Renewals', y: 80 },
        ]"
        :height="350"
        labels
        legend-position="bottom"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <story-canvas title="Horizontal in data order">
      <pf-chart-funnel
        aria-label="Horizontal funnel chart example"
        :data="[
          { x: 'Queued', y: 50 },
          { x: 'Building', y: 40 },
          { x: 'Testing', y: 32 },
          { x: 'Deployed', y: 25 },
        ]"
        :gap="4"
        :height="250"
        labels
        legend-position="none"
        orient="horizontal"
        sort="none"
        theme-color="teal"
      />
    </story-canvas>

    <story-canvas title="Skeleton">
      <pf-chart-funnel
        aria-label="Funnel chart skeleton example"
        :data="[
          { x: 'Visits', y: 1000 },
          { x: 'Sign ups', y: 600 },
          { x: 'Trials', y: 300 },
          { x: 'Purchases', y: 120 },
          { x: 'Renewals', y: 80 },
        ]"
        :height="300"
        theme-color="skeleton"
      />
    </story-canvas>
  </doc-page>
</template>
