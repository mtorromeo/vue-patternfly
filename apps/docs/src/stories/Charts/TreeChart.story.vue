<template>
  <doc-page title="Tree chart">
    <template #description
      >A <b>tree</b> shows hierarchical data as nodes linked to their parent, such as an organization chart or a file
      system.</template
    >

    <template #apidocs>
      <component-info name="PfChartTree" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-chart-tree
        aria-label="Tree chart example"
        :data="[
          {
            name: 'Frontend',
            children: [
              { name: 'Web' },
              {
                name: 'Mobile',
                children: [{ name: 'iOS' }, { name: 'Android' }],
              },
            ],
          },
          {
            name: 'Backend',
            children: [
              {
                name: 'API',
                children: [{ name: 'REST' }, { name: 'GraphQL' }],
              },
              { name: 'Workers' },
              { name: 'Database' },
            ],
          },
          {
            name: 'Infrastructure',
            children: [{ name: 'Kubernetes' }, { name: 'Monitoring' }],
          },
        ]"
        :height="350"
        name="Teams"
      />
    </story-canvas>

    <story-canvas title="Top to bottom">
      <pf-chart-tree
        aria-label="Tree chart example"
        :data="[
          {
            name: 'Frontend',
            children: [
              { name: 'Web' },
              {
                name: 'Mobile',
                children: [{ name: 'iOS' }, { name: 'Android' }],
              },
            ],
          },
          {
            name: 'Backend',
            children: [
              {
                name: 'API',
                children: [{ name: 'REST' }, { name: 'GraphQL' }],
              },
              { name: 'Workers' },
              { name: 'Database' },
            ],
          },
          {
            name: 'Infrastructure',
            children: [{ name: 'Kubernetes' }, { name: 'Monitoring' }],
          },
        ]"
        :height="400"
        name="Teams"
        orient="TB"
      />
    </story-canvas>

    <story-canvas title="Collapsible">
      <pf-chart-tree
        aria-label="Tree chart example"
        :data="[
          {
            name: 'Frontend',
            children: [
              { name: 'Web' },
              {
                name: 'Mobile',
                children: [{ name: 'iOS' }, { name: 'Android' }],
              },
            ],
          },
          {
            name: 'Backend',
            children: [
              {
                name: 'API',
                children: [{ name: 'REST' }, { name: 'GraphQL' }],
              },
              { name: 'Workers' },
              { name: 'Database' },
            ],
          },
          {
            name: 'Infrastructure',
            children: [{ name: 'Kubernetes' }, { name: 'Monitoring' }],
          },
        ]"
        :height="350"
        name="Teams"
        collapsible
        :depth="2"
      />
    </story-canvas>

    <story-canvas title="Radial">
      <pf-chart-tree
        aria-label="Tree chart example"
        :data="[
          {
            name: 'Frontend',
            children: [
              { name: 'Web' },
              {
                name: 'Mobile',
                children: [{ name: 'iOS' }, { name: 'Android' }],
              },
            ],
          },
          {
            name: 'Backend',
            children: [
              {
                name: 'API',
                children: [{ name: 'REST' }, { name: 'GraphQL' }],
              },
              { name: 'Workers' },
              { name: 'Database' },
            ],
          },
          {
            name: 'Infrastructure',
            children: [{ name: 'Kubernetes' }, { name: 'Monitoring' }],
          },
        ]"
        :height="450"
        name="Teams"
        radial
      />
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      react-charts has no tree chart: this is an ECharts only chart.

      ECharts draws a single root: several top level nodes are joined under a root named after `name`. The tree is fully
      expanded and static by default; with `collapsible`, clicking a node expands or collapses it, collapsed nodes are
      filled and `depth` sets how many levels are expanded at first.
    </pre>
  </doc-page>
</template>
