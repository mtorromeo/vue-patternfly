<template>
  <doc-page title="Chart themes">
    <template #description
      >Every chart takes a <b>theme color</b>, or a custom ECharts theme. Patterns, skeletons and interactive legends
      work the same way for all of them.</template
    >

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      Theme colors are read from the PatternFly chart CSS variables, defined in `@patternfly/patternfly/patternfly-charts.css`: import it next to `patternfly.css`, or the charts always use the light theme defaults. Charts follow theme changes on the `html` and `body` elements (e.g. toggling the dark theme) without any setup. The variables are read where the chart is placed, so `--pf-v6-chart-*` variables overridden on a part of the page apply to its charts.

      ## Theme colors
    </pre>

    <story-canvas title="Green">
      <pf-chart-bar
        :height="200"
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
        ]"
        theme-color="green"
      />
    </story-canvas>

    <story-canvas title="Multi-color (ordered)">
      <pf-chart-bar
        :height="200"
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
        ]"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <story-canvas title="Multi-color (unordered)">
      <pf-chart-line
        :height="200"
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
        ]"
        theme-color="multi-unordered"
      />
    </story-canvas>

    <story-canvas title="Custom theme">
      <pf-chart-bar
        :height="200"
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
        ]"
        :theme="getCustomTheme('blue', { color: ['#5e40be', '#f4784a', '#37a3a3'] })"
      />
    </story-canvas>

    <pre v-md>
      `getCustomTheme(themeColor, theme)` merges a partial [ECharts theme](https://echarts.apache.org/handbook/en/concepts/style/#theme) over a PatternFly one.

      ## Patterns
    </pre>

    <story-canvas title="Bar chart">
      <pf-chart-bar
        :height="200"
        patterns
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
        ]"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <story-canvas title="Donut chart">
      <div style="width: 350px">
        <pf-chart-donut
          :data="[
            { x: 'Cats', y: 35 },
            { x: 'Dogs', y: 55 },
            { x: 'Birds', y: 10 },
          ]"
          :height="230"
          legend-position="right"
          patterns
          sub-title="Pets"
          title="100"
        />
      </div>
    </story-canvas>

    <pre v-md>
      ## Skeletons
    </pre>

    <story-canvas title="Area chart">
      <pf-chart-area
        :height="200"
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
        ]"
        theme-color="skeleton"
      />
    </story-canvas>

    <story-canvas title="Donut utilization chart">
      <div style="width: 230px">
        <pf-chart-donut-utilization
          :data="{ x: 'Storage capacity', y: 45 }"
          :height="230"
          sub-title="of 100 GBps"
          theme-color="skeleton"
          title="45%"
        />
      </div>
    </story-canvas>

    <story-canvas title="Bullet chart">
      <pf-chart-bullet
        :comparative-warning-measure-data="[{ name: 'Warning', y: 88 }]"
        :height="150"
        :max-domain="100"
        :primary-segmented-measure-data="[{ name: 'Measure', y: 60 }]"
        :qualitative-range-data="[
          { name: 'Range', y: 50 },
          { name: 'Range', y: 75 },
        ]"
        theme-color="skeleton"
      />
    </story-canvas>

    <pre v-md>
      ## Legends

      The legend is on the right by default (`legend-position` can also be `bottom`, `bottom-left` or `none`). Donut and bullet charts, whose title carries the information, only show a legend when `legend-data` is set or a position is given. Clicking a legend item toggles its series, without extra code.
    </pre>

    <story-canvas title="Legend events">
      <pf-chart-pie
        :data="[
          { x: 'Cats', y: 35 },
          { x: 'Dogs', y: 55 },
          { x: 'Birds', y: 10 },
        ]"
        :height="230"
        @legendselectchanged="lastToggled = $event.name"
      />
      <p>Last toggled: {{ lastToggled ?? 'none' }}</p>
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      - Patterns are ECharts [decals](https://echarts.apache.org/en/option.html#aria.decal): they look different from PatternFly's SVG patterns, and custom pattern definitions are decal objects set through `option`.
      - ECharts legend items can't be links. To make them act as links, handle `legendselectchanged` (e.g. navigating with the router), as in the legend events example.
      - Legend tooltips are limited to text, through `legend.tooltip`.
      - Victory themes (`ChartThemeDefinition`) don't apply to ECharts themes.
      - There is no `nodeSelector` prop: charts always follow theme changes on `html` and `body`. PatternFly declares the chart variables on the root element, so, as in patternfly-react, a theme class applied to an inner element doesn't change chart colors.
    </pre>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getCustomTheme } from '@vue-patternfly/charts';

const lastToggled = ref<string>();
</script>
