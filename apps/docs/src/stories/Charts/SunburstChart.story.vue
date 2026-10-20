<template>
  <doc-page title="Sunburst chart">
    <template #description
      >A <b>sunburst</b> shows hierarchical data as concentric rings, each node sized by its value and drawn around its
      parent.</template
    >

    <template #apidocs>
      <component-info name="PfChartSunburst" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-chart-sunburst
        aria-label="Sunburst chart example"
        :data="[
          {
            name: 'Frontend',
            children: [
              { name: 'Web', value: 40 },
              { name: 'Mobile', value: 20 },
            ],
          },
          {
            name: 'Backend',
            children: [
              {
                name: 'API',
                children: [
                  { name: 'REST', value: 25 },
                  { name: 'GraphQL', value: 10 },
                ],
              },
              { name: 'Workers', value: 15 },
              { name: 'Database', value: 25 },
            ],
          },
          { name: 'Infrastructure', value: 30 },
        ]"
        :height="350"
        name="Teams"
      />
    </story-canvas>

    <story-canvas title="Multi-color (ordered)">
      <pf-chart-sunburst
        aria-label="Sunburst chart example"
        :data="[
          {
            name: 'Frontend',
            children: [
              { name: 'Web', value: 40 },
              { name: 'Mobile', value: 20 },
            ],
          },
          {
            name: 'Backend',
            children: [
              {
                name: 'API',
                children: [
                  { name: 'REST', value: 25 },
                  { name: 'GraphQL', value: 10 },
                ],
              },
              { name: 'Workers', value: 15 },
              { name: 'Database', value: 25 },
            ],
          },
          { name: 'Infrastructure', value: 30 },
        ]"
        :height="350"
        name="Teams"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <story-canvas title="Drill down">
      <pf-chart-sunburst
        aria-label="Sunburst chart example"
        :data="[
          {
            name: 'Frontend',
            children: [
              { name: 'Web', value: 40 },
              { name: 'Mobile', value: 20 },
            ],
          },
          {
            name: 'Backend',
            children: [
              {
                name: 'API',
                children: [
                  { name: 'REST', value: 25 },
                  { name: 'GraphQL', value: 10 },
                ],
              },
              { name: 'Workers', value: 15 },
              { name: 'Database', value: 25 },
            ],
          },
          { name: 'Infrastructure', value: 30 },
        ]"
        drill-down
        :height="350"
        name="Teams"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      react-charts has no sunburst chart: this is an ECharts only chart.

      Like the treemap, each top level node gets the next color of the theme, which its descendants inherit, and labels
      contrast with it. Hovering a node highlights the path to it. With `drill-down`, clicking a node makes it the
      center of the chart, and clicking the center goes back to its parent.
    </pre>
  </doc-page>
</template>
