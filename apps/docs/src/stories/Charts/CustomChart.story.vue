<template>
  <doc-page title="Custom chart">
    <template #description
      ><b>PfCharts</b> renders any
      <a href="https://echarts.apache.org/en/option.html" target="_blank">ECharts option</a> with the PatternFly theme.
      The chart wrappers are built on it.</template
    >

    <template #apidocs>
      <component-info name="PfCharts" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      Charts read their colors from the PatternFly chart CSS variables: import `@patternfly/patternfly/patternfly-charts.css` next to `patternfly.css`.

      Like patternfly-react's `Charts` component, `PfCharts` applies the PatternFly theme and per series defaults (line, bar, box plot, candlestick, chord, graph, lines, parallel, pie, sankey, sunburst, theme river, tree and treemap), and a legend tooltip for line and bar series. Unlike the chart wrappers, it registers no ECharts module: register the charts and components the option uses with `echarts.use()`.

      ```ts
      import * as echarts from 'echarts/core';
      import { LineChart } from 'echarts/charts';
      import { GridComponent, TitleComponent, TooltipComponent } from 'echarts/components';
      import { SVGRenderer } from 'echarts/renderers';

      echarts.use([GridComponent, LineChart, SVGRenderer, TitleComponent, TooltipComponent]);
      ```

      The ECharts instance is exposed as `chart`, e.g. to dispatch actions, and the `click`, `legendselectchanged` and `datazoom` events are emitted. Without `width` and `height` the chart fills its container, following its size.

      ## Examples
    </pre>

    <story-canvas title="Line chart">
      <pf-charts
        :height="400"
        :option="{
          grid: { right: 100 },
          legend: { left: 'right', orient: 'vertical', top: 'middle' },
          xAxis: { type: 'category', data: ['2015', '2016', '2017', '2018'] },
          yAxis: {
            axisLabel: { formatter: (value: number) => (value !== 0 ? `${value}` : '') },
            splitNumber: 3,
            type: 'value',
          },
          series: [
            { data: [1, 2, 5, 3], name: 'Cats', type: 'line' },
            { data: [2, 1, 7, 4], name: 'Dogs', lineStyle: { type: 'dashed' }, type: 'line' },
            { data: [3, 4, 9, 5], name: 'Birds', type: 'line' },
            { data: [3, 3, 8, 7], name: 'Mice', type: 'line' },
          ],
          title: { left: 'center', text: 'This is a Line chart' },
        }"
      />
    </story-canvas>

    <story-canvas title="Data zoom">
      <pf-charts
        :height="400"
        :option="{
          dataZoom: [{ type: 'inside' }, { type: 'slider' }],
          xAxis: { type: 'category', data: Array.from({ length: 50 }, (_, i) => `${i + 1}`) },
          yAxis: { type: 'value' },
          series: [
            {
              data: Array.from({ length: 50 }, (_, i) => Math.round(50 + 30 * Math.sin(i / 4))),
              name: 'Requests',
              type: 'bar',
            },
          ],
        }"
        @datazoom="zoomEvents++"
      />
      <p>Zoom events: {{ zoomEvents }}</p>
    </story-canvas>

    <story-canvas title="Flame graph (a custom series)" src="./FlameGraph.vue">
      <template #intro>
        <p>Click a frame to zoom into it, and its bottom frame to zoom out.</p>
      </template>
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      - `isLegendTooltip` and `isSvgRenderer` are `legend-tooltip` and `svg-renderer`, both enabled by default.
      - The chart is resized whenever its container changes size, not only when `width` and `height` change.
      - There is no `nodeSelector` prop: the chart is recreated when theme changes on `html` or `body` (e.g. the dark theme) change its colors.
    </pre>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { use } from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import {
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';

use([
  BarChart,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  SVGRenderer,
  TitleComponent,
  TooltipComponent,
]);

const zoomEvents = ref(0);
</script>
