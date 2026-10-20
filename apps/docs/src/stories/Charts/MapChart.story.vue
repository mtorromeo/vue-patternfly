<template>
  <doc-page title="Map chart">
    <template #description
      >A <b>map</b> (choropleth) colors each region of a map by its value, such as the users of a service in each
      country.</template
    >

    <template #apidocs>
      <component-info name="PfChartMap" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ECharts ships no maps: give the GeoJSON of the map with `geo-json`, or register it once with
      [`echarts.registerMap`](https://echarts.apache.org/en/api.html#echarts.registerMap) and pass its name as `map`.
      The examples use the countries of [Natural Earth](https://www.naturalearthdata.com/) (public domain), simplified.

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-chart-map
        aria-label="Map chart example"
        :data="[
          { name: 'United States of America', value: 820 },
          { name: 'Canada', value: 210 },
          { name: 'Mexico', value: 160 },
          { name: 'Brazil', value: 340 },
          { name: 'Argentina', value: 120 },
          { name: 'United Kingdom', value: 380 },
          { name: 'France', value: 300 },
          { name: 'Germany', value: 450 },
          { name: 'Italy', value: 260 },
          { name: 'Spain', value: 220 },
          { name: 'Poland', value: 140 },
          { name: 'Sweden', value: 90 },
          { name: 'India', value: 610 },
          { name: 'China', value: 530 },
          { name: 'Japan', value: 410 },
          { name: 'South Korea', value: 190 },
          { name: 'Australia', value: 230 },
          { name: 'South Africa', value: 80 },
          { name: 'Nigeria', value: 70 },
          { name: 'Egypt', value: 60 },
          { name: 'Turkey', value: 110 },
          { name: 'Indonesia', value: 150 },
        ]"
        :geo-json="world"
        :height="400"
        map="world"
      />
    </story-canvas>

    <story-canvas title="Purple, zoomable, with bottom aligned legend">
      <pf-chart-map
        aria-label="Map chart example"
        :data="[
          { name: 'United States of America', value: 820 },
          { name: 'Canada', value: 210 },
          { name: 'Mexico', value: 160 },
          { name: 'Brazil', value: 340 },
          { name: 'Argentina', value: 120 },
          { name: 'United Kingdom', value: 380 },
          { name: 'France', value: 300 },
          { name: 'Germany', value: 450 },
          { name: 'Italy', value: 260 },
          { name: 'Spain', value: 220 },
          { name: 'Poland', value: 140 },
          { name: 'Sweden', value: 90 },
          { name: 'India', value: 610 },
          { name: 'China', value: 530 },
          { name: 'Japan', value: 410 },
          { name: 'South Korea', value: 190 },
          { name: 'Australia', value: 230 },
          { name: 'South Africa', value: 80 },
          { name: 'Nigeria', value: 70 },
          { name: 'Egypt', value: 60 },
          { name: 'Turkey', value: 110 },
          { name: 'Indonesia', value: 150 },
        ]"
        :geo-json="world"
        :height="450"
        legend-position="bottom"
        map="world"
        roam
        theme-color="purple"
      />
    </story-canvas>

    <story-canvas title="Custom map with labels">
      <pf-chart-map
        aria-label="Data center temperature example"
        :data="[
          { name: 'Room A', value: 18 },
          { name: 'Room B', value: 24 },
          { name: 'Room C', value: 31 },
          { name: 'Room D', value: 27 },
        ]"
        :geo-json="{
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: { name: 'Room A' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [0, 0],
                    [4, 0],
                    [4, 3],
                    [0, 3],
                    [0, 0],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              properties: { name: 'Room B' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [4, 0],
                    [8, 0],
                    [8, 3],
                    [4, 3],
                    [4, 0],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              properties: { name: 'Room C' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [0, 3],
                    [3, 3],
                    [3, 6],
                    [0, 6],
                    [0, 3],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              properties: { name: 'Room D' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [3, 3],
                    [8, 3],
                    [8, 6],
                    [3, 6],
                    [3, 3],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              properties: { name: 'Office' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [8, 0],
                    [10, 0],
                    [10, 6],
                    [8, 6],
                    [8, 0],
                  ],
                ],
              },
            },
          ],
        }"
        :height="300"
        labels
        map="data-center"
        :option="{ series: [{ aspectScale: 1 }] }"
        theme-color="orange"
      />
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      react-charts has no map chart: this is an ECharts only chart, a [map series](https://echarts.apache.org/en/option.html#series-map).

      Like `PfChartHeatmap`, values are mapped to a sequential scale of the theme color, shown as the legend. Regions
      without a value are drawn in the secondary background color, to tell them apart from the lowest values. Regions
      are matched by name: the `name` property of the GeoJSON features. Maps are not limited to geography: any GeoJSON
      works, like the floor plan of the last example, where `aspectScale: 1` keeps its proportions (ECharts squeezes
      maps vertically by default, for geographic coordinates). Zooming and panning with `roam` is off by default, as it
      captures the page scroll over the map.
    </pre>
  </doc-page>
</template>

<script lang="ts" setup>
import type { ChartMapGeoJson } from '@vue-patternfly/charts';
// Natural Earth 1:110m countries, without Antarctica: only the names and coordinates rounded to 0.1°
import worldJson from './world.geo.json';

// JSON imports type the GeoJSON `type` fields as any string
const world = worldJson as ChartMapGeoJson;
</script>
