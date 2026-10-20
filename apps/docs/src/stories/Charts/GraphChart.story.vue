<template>
  <doc-page title="Graph chart">
    <template #description
      >A <b>graph</b> shows nodes and the links between them, such as the topology of a network or the dependencies of
      services.</template
    >

    <template #apidocs>
      <component-info name="PfChartGraph" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ## Examples
    </pre>

    <story-canvas title="Force layout">
      <pf-chart-graph
        aria-label="Graph chart example"
        :height="350"
        :links="[
          { source: 'Gateway', target: 'Load balancer' },
          { source: 'Load balancer', target: 'Web 1' },
          { source: 'Load balancer', target: 'Web 2' },
          { source: 'Web 1', target: 'API' },
          { source: 'Web 2', target: 'API' },
          { source: 'API', target: 'Auth' },
          { source: 'API', target: 'Database' },
          { source: 'API', target: 'Cache' },
          { source: 'API', target: 'Queue' },
        ]"
        :nodes="[
          { name: 'Gateway', category: 'Network' },
          { name: 'Load balancer', category: 'Network' },
          { name: 'Web 1', category: 'Service' },
          { name: 'Web 2', category: 'Service' },
          { name: 'API', category: 'Service' },
          { name: 'Auth', category: 'Service' },
          { name: 'Queue', category: 'Storage' },
          { name: 'Database', category: 'Storage' },
          { name: 'Cache', category: 'Storage' },
        ]"
        directed
        labels
      />
    </story-canvas>

    <story-canvas title="Circular layout">
      <pf-chart-graph
        aria-label="Graph chart example"
        :height="350"
        :links="[
          { source: 'Gateway', target: 'Load balancer' },
          { source: 'Load balancer', target: 'Web 1' },
          { source: 'Load balancer', target: 'Web 2' },
          { source: 'Web 1', target: 'API' },
          { source: 'Web 2', target: 'API' },
          { source: 'API', target: 'Auth' },
          { source: 'API', target: 'Database' },
          { source: 'API', target: 'Cache' },
          { source: 'API', target: 'Queue' },
        ]"
        :nodes="[
          { name: 'Gateway', category: 'Network' },
          { name: 'Load balancer', category: 'Network' },
          { name: 'Web 1', category: 'Service' },
          { name: 'Web 2', category: 'Service' },
          { name: 'API', category: 'Service' },
          { name: 'Auth', category: 'Service' },
          { name: 'Queue', category: 'Storage' },
          { name: 'Database', category: 'Storage' },
          { name: 'Cache', category: 'Storage' },
        ]"
        labels
        layout="circular"
        legend-position="bottom"
      />
    </story-canvas>

    <story-canvas title="Fixed positions">
      <pf-chart-graph
        aria-label="Graph chart example"
        :height="350"
        :links="[
          { source: 'Gateway', target: 'Web' },
          { source: 'Gateway', target: 'API' },
          { source: 'Web', target: 'Database' },
          { source: 'API', target: 'Database' },
        ]"
        :nodes="[
          { name: 'Gateway', x: 0, y: 1 },
          { name: 'Web', x: 1, y: 0 },
          { name: 'API', x: 1, y: 2 },
          { name: 'Database', x: 2, y: 1 },
        ]"
        directed
        labels
        layout="none"
      />
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      react-charts has no graph chart: this is an ECharts only chart.

      Nodes are grouped by their `category`: each category gets the next color of the theme and an entry in the legend,
      which toggles its nodes. Hovering a node highlights its neighbors and links, which take the color of their source.

      The `force` layout (default) lets nodes be dragged, `circular` puts them on a circle and `none` scales their `x` and
      `y` to fill the chart. Panning and zooming are off, as they would capture the page scroll: enable them with
      `:option="{ series: [{ roam: true }] }"`.
    </pre>
  </doc-page>
</template>
