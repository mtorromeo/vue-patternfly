<template>
  <doc-page title="Sankey chart">
    <template #description
      >A <b>sankey chart</b> shows flows between nodes, each link being as wide as its value.</template
    >

    <template #apidocs>
      <component-info name="PfChartSankey" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-chart-sankey
        aria-label="Sankey chart example"
        destination-label="Destination"
        :height="400"
        :links="[
          { source: 'a', target: 'a1', value: 5 },
          { source: 'a', target: 'a2', value: 3 },
          { source: 'b', target: 'b1', value: 8 },
          { source: 'a', target: 'b1', value: 3 },
          { source: 'b1', target: 'a1', value: 1 },
          { source: 'b1', target: 'c', value: 2 },
        ]"
        :nodes="[{ name: 'a' }, { name: 'b' }, { name: 'a1' }, { name: 'a2' }, { name: 'b1' }, { name: 'c' }]"
        source-label="Source"
      />
    </story-canvas>

    <story-canvas title="Theme">
      <pf-chart-sankey
        aria-label="Sankey chart example"
        destination-label="Destination"
        :height="400"
        :links="[
          { source: 'a', target: 'a1', value: 5 },
          { source: 'a', target: 'a2', value: 3 },
          { source: 'b', target: 'b1', value: 8 },
          { source: 'a', target: 'b1', value: 3 },
          { source: 'b1', target: 'a1', value: 1 },
          { source: 'b1', target: 'c', value: 2 },
        ]"
        :nodes="[{ name: 'a' }, { name: 'b' }, { name: 'a1' }, { name: 'a2' }, { name: 'b1' }, { name: 'c' }]"
        source-label="Source"
        theme-color="multi-unordered"
      />
    </story-canvas>

    <story-canvas title="Toolbox and value formatter">
      <pf-chart-sankey
        aria-label="Sankey chart example"
        destination-label="Destination"
        :height="400"
        :links="[
          { source: 'a', target: 'a1', value: 5 },
          { source: 'a', target: 'a2', value: 3 },
          { source: 'b', target: 'b1', value: 8 },
          { source: 'a', target: 'b1', value: 3 },
          { source: 'b1', target: 'a1', value: 1 },
          { source: 'b1', target: 'c', value: 2 },
        ]"
        :nodes="[{ name: 'a' }, { name: 'b' }, { name: 'a1' }, { name: 'a2' }, { name: 'b1' }, { name: 'c' }]"
        :option="{
          toolbox: { feature: { restore: {}, saveAsImage: {} }, orient: 'vertical', top: 'center' },
          tooltip: { valueFormatter: (value: any) => `${value} GiB` },
        }"
        source-label="Source"
      />
    </story-canvas>

    <story-canvas title="Skeleton">
      <pf-chart-sankey
        aria-label="Sankey chart example"
        :height="400"
        :links="[
          { source: 'a', target: 'a1', value: 5 },
          { source: 'a', target: 'a2', value: 3 },
          { source: 'b', target: 'b1', value: 8 },
          { source: 'a', target: 'b1', value: 3 },
          { source: 'b1', target: 'a1', value: 1 },
          { source: 'b1', target: 'c', value: 2 },
        ]"
        :nodes="[{ name: 'a' }, { name: 'b' }, { name: 'a1' }, { name: 'a2' }, { name: 'b1' }, { name: 'c' }]"
        theme-color="skeleton"
      />
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      patternfly-react only offers the sankey through the generic `Charts` component, with the same option `PfCharts` takes. A toolbox, set through `option`, needs `ToolboxComponent` registered with `echarts.use()`, as in this page.
    </pre>
  </doc-page>
</template>

<script lang="ts" setup>
import { use } from 'echarts/core';
import { ToolboxComponent } from 'echarts/components';

use([ToolboxComponent]);
</script>
