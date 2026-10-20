<template>
  <doc-page title="Treemap chart">
    <template #description
      >A <b>treemap</b> shows hierarchical data as nested rectangles, each sized by its value.</template
    >

    <template #apidocs>
      <component-info name="PfChartTreemap" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-chart-treemap
        aria-label="Treemap chart example"
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
        :height="300"
        name="Teams"
      />
    </story-canvas>

    <story-canvas title="Multi-color (ordered)">
      <pf-chart-treemap
        aria-label="Treemap chart example"
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
        :height="300"
        name="Teams"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <story-canvas title="Drill down">
      <pf-chart-treemap
        aria-label="Treemap chart example"
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

      react-charts has no treemap chart: this is an ECharts only chart.

      Each top level node gets the next color of the theme, which its descendants inherit, and labels contrast with it.
      With `drill-down`, clicking a node zooms into it and the breadcrumb, starting from the series `name`, goes back.
    </pre>
  </doc-page>
</template>
