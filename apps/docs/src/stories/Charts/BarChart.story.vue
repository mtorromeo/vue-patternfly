<template>
  <doc-page title="Bar chart">
    <template #description>A <b>bar chart</b> compares values across categories, optionally stacking them.</template>

    <template #apidocs>
      <component-info name="PfChartBar" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ## Examples
    </pre>

    <story-canvas title="Basic with right aligned legend">
      <pf-chart-bar
        aria-label="Bar chart example"
        :height="250"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
          },
          {
            name: 'Birds',
            data: [
              { x: '2015', y: 4 },
              { x: '2016', y: 4 },
              { x: '2017', y: 9 },
              { x: '2018', y: 7 },
            ],
          },
          {
            name: 'Mice',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 3 },
              { x: '2017', y: 8 },
              { x: '2018', y: 5 },
            ],
          },
        ]"
      />
    </story-canvas>

    <story-canvas title="Purple with bottom aligned legend">
      <pf-chart-bar
        aria-label="Bar chart example"
        :height="275"
        legend-position="bottom"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
          },
          {
            name: 'Birds',
            data: [
              { x: '2015', y: 4 },
              { x: '2016', y: 4 },
              { x: '2017', y: 9 },
              { x: '2018', y: 7 },
            ],
          },
          {
            name: 'Mice',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 3 },
              { x: '2017', y: 8 },
              { x: '2018', y: 5 },
            ],
          },
        ]"
        theme-color="purple"
      />
    </story-canvas>

    <story-canvas title="Multi-color (ordered) with bottom-left aligned legend">
      <pf-chart-bar
        aria-label="Bar chart example"
        :height="275"
        legend-position="bottom-left"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
          },
          {
            name: 'Birds',
            data: [
              { x: '2015', y: 4 },
              { x: '2016', y: 4 },
              { x: '2017', y: 9 },
              { x: '2018', y: 7 },
            ],
          },
          {
            name: 'Mice',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 3 },
              { x: '2017', y: 8 },
              { x: '2018', y: 5 },
            ],
          },
        ]"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <story-canvas title="Single with right aligned legend">
      <pf-chart-bar
        aria-label="Bar chart example"
        :height="250"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
          },
        ]"
      />
    </story-canvas>

    <story-canvas title="Without fading the other bars on hover">
      <pf-chart-bar
        aria-label="Bar chart example"
        :height="250"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
            emphasis: { focus: 'none' },
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
            emphasis: { focus: 'none' },
          },
          {
            name: 'Birds',
            data: [
              { x: '2015', y: 4 },
              { x: '2016', y: 4 },
              { x: '2017', y: 9 },
              { x: '2018', y: 7 },
            ],
            emphasis: { focus: 'none' },
          },
          {
            name: 'Mice',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 3 },
              { x: '2017', y: 8 },
              { x: '2018', y: 5 },
            ],
            emphasis: { focus: 'none' },
          },
        ]"
      />
    </story-canvas>

    <story-canvas title="Stacked">
      <pf-chart-bar
        aria-label="Stack chart example"
        :bar-width="30"
        :height="250"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
          },
          {
            name: 'Birds',
            data: [
              { x: '2015', y: 4 },
              { x: '2016', y: 4 },
              { x: '2017', y: 9 },
              { x: '2018', y: 7 },
            ],
          },
          {
            name: 'Mice',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 3 },
              { x: '2017', y: 8 },
              { x: '2018', y: 5 },
            ],
          },
        ]"
        stacked
      />
    </story-canvas>

    <story-canvas title="Horizontal stacked with bottom aligned legend">
      <pf-chart-bar
        aria-label="Stack chart example"
        :height="275"
        horizontal
        legend-position="bottom"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
          },
          {
            name: 'Birds',
            data: [
              { x: '2015', y: 4 },
              { x: '2016', y: 4 },
              { x: '2017', y: 9 },
              { x: '2018', y: 7 },
            ],
          },
          {
            name: 'Mice',
            data: [
              { x: '2015', y: 3 },
              { x: '2016', y: 3 },
              { x: '2017', y: 8 },
              { x: '2018', y: 5 },
            ],
          },
        ]"
        stacked
        theme-color="multi-ordered"
      />
    </story-canvas>

    <story-canvas title="With max and min points and average lines">
      <pf-chart-bar
        aria-label="Bar chart with marks example"
        :height="300"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' },
              ],
            },
            markLine: { data: [{ type: 'average', name: 'Average' }] },
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' },
              ],
            },
            markLine: { data: [{ type: 'average', name: 'Average' }] },
          },
        ]"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <story-canvas title="With a target line">
      <pf-chart-bar
        aria-label="Bar chart with a target example"
        :height="275"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
            markLine: {
              data: [{ name: 'Target', yAxis: 4 }],
              label: { formatter: 'Target: {c}', position: 'insideEndTop' },
              lineStyle: { type: 'solid' },
              symbol: 'none',
            },
          },
        ]"
      />
    </story-canvas>

    <story-canvas title="With an annotation and a trend line">
      <pf-chart-bar
        aria-label="Bar chart with annotations example"
        :height="300"
        :series="[
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
            markPoint: {
              data: [{ name: 'Adoption campaign', coord: ['2017', 7] }],
              label: { formatter: '{b}', position: 'top' },
              symbol: 'circle',
              symbolSize: 8,
            },
            markLine: {
              data: [[{ name: 'Trend', coord: ['2015', 2] }, { coord: ['2018', 4] }]],
              label: { formatter: '{b}', position: 'middle' },
            },
          },
        ]"
        theme-color="green"
      />
    </story-canvas>

    <story-canvas title="Horizontal with an average line and bottom aligned legend">
      <pf-chart-bar
        aria-label="Horizontal bar chart with marks example"
        :height="300"
        horizontal
        legend-position="bottom"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
            markLine: { data: [{ type: 'average', name: 'Average' }] },
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
            markLine: { data: [{ type: 'average', name: 'Average' }] },
          },
        ]"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <story-canvas title="Polar, stacked">
      <pf-chart-bar
        aria-label="Polar bar chart example"
        :height="350"
        polar
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
          },
        ]"
        stacked
        theme-color="multi-ordered"
      />
    </story-canvas>

    <story-canvas title="Radial (horizontal on polar coordinates)">
      <pf-chart-bar
        aria-label="Radial bar chart example"
        :height="350"
        horizontal
        polar
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
          },
        ]"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <story-canvas title="Timeline">
      <pf-chart-bar
        aria-label="Bar chart timeline example"
        :height="350"
        theme-color="multi-ordered"
        :timeline="[
          {
            name: 'Q1',
            series: [
              {
                name: 'Cats',
                data: [
                  { x: 'Jan', y: 1 },
                  { x: 'Feb', y: 2 },
                  { x: 'Mar', y: 5 },
                ],
              },
              {
                name: 'Dogs',
                data: [
                  { x: 'Jan', y: 2 },
                  { x: 'Feb', y: 1 },
                  { x: 'Mar', y: 7 },
                ],
              },
            ],
          },
          {
            name: 'Q2',
            series: [
              {
                name: 'Cats',
                data: [
                  { x: 'Jan', y: 3 },
                  { x: 'Feb', y: 4 },
                  { x: 'Mar', y: 2 },
                ],
              },
              {
                name: 'Dogs',
                data: [
                  { x: 'Jan', y: 5 },
                  { x: 'Feb', y: 3 },
                  { x: 'Mar', y: 4 },
                ],
              },
            ],
          },
          {
            name: 'Q3',
            series: [
              {
                name: 'Cats',
                data: [
                  { x: 'Jan', y: 6 },
                  { x: 'Feb', y: 5 },
                  { x: 'Mar', y: 7 },
                ],
              },
              {
                name: 'Dogs',
                data: [
                  { x: 'Jan', y: 4 },
                  { x: 'Feb', y: 6 },
                  { x: 'Mar', y: 3 },
                ],
              },
            ],
          },
        ]"
        timeline-autoplay
      />
    </story-canvas>

    <story-canvas title="Brushable, with toolbox">
      <pf-chart-bar
        aria-label="Brushable bar chart example"
        brush
        :height="300"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
          },
        ]"
        theme-color="multi-ordered"
        toolbox
        @brushselected="
          (event: ChartBrushSelectedEvent) =>
            (brushed = event.batch[0]?.selected.reduce((count, { dataIndex }) => count + dataIndex.length, 0) ?? 0)
        "
      />
      <p>Selected bars: {{ brushed || 'none' }}</p>
    </story-canvas>

    <story-canvas title="Pictorial">
      <pf-chart-bar
        aria-label="Pictorial bar chart example"
        :height="275"
        pictorial="triangle"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
          },
        ]"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <story-canvas title="Horizontal pictorial with repeated symbols">
      <pf-chart-bar
        aria-label="Pictorial bar chart example"
        :height="275"
        horizontal
        legend-position="bottom"
        pictorial="circle"
        pictorial-repeat
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
          },
        ]"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <story-canvas title="Pictorial with an SVG path">
      <pf-chart-bar
        aria-label="Pictorial bar chart example"
        :height="275"
        pictorial="path://M12 2a4 4 0 1 1 0 8a4 4 0 1 1 0-8zM4 22v-4a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v4z"
        pictorial-repeat
        :pictorial-size="16"
        :series="[
          {
            name: 'Cats',
            data: [
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 5 },
              { x: '2018', y: 3 },
            ],
          },
          {
            name: 'Dogs',
            data: [
              { x: '2015', y: 2 },
              { x: '2016', y: 1 },
              { x: '2017', y: 7 },
              { x: '2018', y: 4 },
            ],
          },
        ]"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      - `ChartStack` and `ChartGroup` are not separate components: pass several `series` and set `stacked` to stack them.
      - `pictorial` draws the bars with a symbol ([ECharts pictorial bars](https://echarts.apache.org/en/option.html#series-pictorialBar)), stretched over each bar or, with `pictorial-repeat`, repeated along it; react-charts has no pictorial bars, and ECharts can't stack them.
      - `polar` draws the bars on polar coordinates, around the circle or, with `horizontal`, as rings (radial bars).
      - `timeline` shows one frame of series at a time, with a [timeline](https://echarts.apache.org/en/option.html#timeline) to switch between them; `timeline-autoplay` plays it, unless the user prefers reduced motion.
      - `brush` lets the user select a range of bars with the toolbox buttons ([ECharts brush](https://echarts.apache.org/en/option.html#brush)), fading the others and emitting `brushselected`.
      - `toolbox` adds buttons to save the chart as an image and to restore it; `zoomable` zooms into the categories, like in the line charts.
      - Series take any other ECharts series option, like [`markPoint`](https://echarts.apache.org/en/option.html#series-bar.markPoint) and [`markLine`](https://echarts.apache.org/en/option.html#series-bar.markLine) to annotate the bars: the wrapper doesn't register their components, register `MarkPointComponent` and `MarkLineComponent` with `echarts.use()`. For dashed threshold lines spanning several bars, `thresholds` is simpler.
      - Hovering a series fades the others ([ECharts emphasis](https://echarts.apache.org/en/option.html#series-bar.emphasis.focus)); set `emphasis: { focus: 'none' }` on the series to disable it.
      - The "Alerts timeline" example relies on Victory's custom `dataComponent` and has no direct equivalent; it can be built with a [custom series](https://echarts.apache.org/en/option.html#series-custom) through `PfCharts`.
    </pre>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { use } from 'echarts/core';
import { MarkLineComponent, MarkPointComponent } from 'echarts/components';
import type { ChartBrushSelectedEvent } from '@vue-patternfly/charts';

// The wrapper doesn't register the marks: the examples using them do
use([MarkLineComponent, MarkPointComponent]);

// Number of bars selected by the brush
const brushed = ref(0);
</script>
