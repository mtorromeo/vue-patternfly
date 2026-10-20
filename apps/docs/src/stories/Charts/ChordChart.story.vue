<template>
  <doc-page title="Chord chart">
    <template #description
      >A <b>chord</b> chart shows the flows between nodes: each node is an arc of a circle, as long as its flows, and
      ribbons across the circle link the nodes, as wide as their flow.</template
    >

    <template #apidocs>
      <component-info name="PfChartChord" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      Chord charts need ECharts 6: with ECharts 5 the chart stays empty and a warning is logged.

      ## Examples
    </pre>

    <story-canvas title="Basic with right aligned legend">
      <pf-chart-chord
        aria-label="Chord chart example"
        :height="350"
        :links="[
          { source: 'Frontend', target: 'API', value: 40 },
          { source: 'Frontend', target: 'Auth', value: 15 },
          { source: 'API', target: 'Database', value: 25 },
          { source: 'API', target: 'Cache', value: 30 },
          { source: 'API', target: 'Queue', value: 12 },
          { source: 'Auth', target: 'Database', value: 10 },
          { source: 'Queue', target: 'Database', value: 8 },
          { source: 'Cache', target: 'Frontend', value: 6 },
        ]"
        :nodes="[
          { name: 'Frontend' },
          { name: 'API' },
          { name: 'Auth' },
          { name: 'Database' },
          { name: 'Cache' },
          { name: 'Queue' },
        ]"
      />
    </story-canvas>

    <story-canvas title="Multi-color (ordered) with labels, without legend">
      <pf-chart-chord
        aria-label="Chord chart example"
        :height="400"
        :links="[
          { source: 'Frontend', target: 'API', value: 40 },
          { source: 'Frontend', target: 'Auth', value: 15 },
          { source: 'API', target: 'Database', value: 25 },
          { source: 'API', target: 'Cache', value: 30 },
          { source: 'API', target: 'Queue', value: 12 },
          { source: 'Auth', target: 'Database', value: 10 },
          { source: 'Queue', target: 'Database', value: 8 },
          { source: 'Cache', target: 'Frontend', value: 6 },
        ]"
        :nodes="[
          { name: 'Frontend' },
          { name: 'API' },
          { name: 'Auth' },
          { name: 'Database' },
          { name: 'Cache' },
          { name: 'Queue' },
        ]"
        labels
        legend-position="none"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      react-charts has no chord chart: this is an ECharts only chart, a [chord series](https://echarts.apache.org/en/option.html#series-chord).

      Nodes are as long as the sum of their links, unless given a `value`. Ribbons take the color of their source node,
      and hovering a node or a ribbon highlights its connections.
    </pre>
  </doc-page>
</template>
