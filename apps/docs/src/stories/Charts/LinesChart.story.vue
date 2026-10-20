<template>
  <doc-page title="Lines chart">
    <template #description
      >A <b>lines</b> chart draws lines between the points of a map, such as routes, connections or flows between
      places.</template
    >

    <template #apidocs>
      <component-info name="PfChartLines" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      The map under the lines works like in `PfChartMap`: give its GeoJSON with `geo-json`, or register it once with
      [`echarts.registerMap`](https://echarts.apache.org/en/api.html#echarts.registerMap) and pass its name as `map`.
      The examples use the countries of [Natural Earth](https://www.naturalearthdata.com/) (public domain), simplified.

      ## Examples
    </pre>

    <story-canvas title="Basic with right aligned legend">
      <pf-chart-lines
        aria-label="Lines chart example"
        :geo-json="world"
        :height="400"
        map="world"
        :series="[
          {
            name: 'Replication',
            data: [
              {
                name: 'Raleigh → London',
                coords: [
                  [-78.6, 35.8],
                  [-0.1, 51.5],
                ],
                value: 80,
              },
              {
                name: 'Raleigh → Tokyo',
                coords: [
                  [-78.6, 35.8],
                  [139.7, 35.7],
                ],
                value: 160,
              },
              {
                name: 'Raleigh → São Paulo',
                coords: [
                  [-78.6, 35.8],
                  [-46.6, -23.6],
                ],
                value: 120,
              },
              {
                name: 'London → Brno',
                coords: [
                  [-0.1, 51.5],
                  [16.6, 49.2],
                ],
                value: 25,
              },
              {
                name: 'London → Bangalore',
                coords: [
                  [-0.1, 51.5],
                  [77.6, 13.0],
                ],
                value: 140,
              },
              {
                name: 'Tokyo → Sydney',
                coords: [
                  [139.7, 35.7],
                  [151.2, -33.9],
                ],
                value: 110,
              },
              {
                name: 'Tokyo → Singapore',
                coords: [
                  [139.7, 35.7],
                  [103.8, 1.4],
                ],
                value: 70,
              },
            ],
          },
          {
            name: 'Backups',
            data: [
              {
                name: 'Boston → Raleigh',
                coords: [
                  [-71.1, 42.4],
                  [-78.6, 35.8],
                ],
                value: 15,
              },
              {
                name: 'Brno → London',
                coords: [
                  [16.6, 49.2],
                  [-0.1, 51.5],
                ],
                value: 25,
              },
              {
                name: 'Singapore → Bangalore',
                coords: [
                  [103.8, 1.4],
                  [77.6, 13.0],
                ],
                value: 40,
              },
              {
                name: 'Sydney → Singapore',
                coords: [
                  [151.2, -33.9],
                  [103.8, 1.4],
                ],
                value: 95,
              },
            ],
          },
        ]"
      />
    </story-canvas>

    <story-canvas title="Curved, directed, with points, trails and bottom aligned legend">
      <pf-chart-lines
        aria-label="Lines chart example"
        curved
        directed
        effect
        :geo-json="world"
        :height="450"
        legend-position="bottom"
        map="world"
        points
        :series="[
          {
            name: 'Replication',
            data: [
              {
                name: 'Raleigh → London',
                coords: [
                  [-78.6, 35.8],
                  [-0.1, 51.5],
                ],
                value: 80,
              },
              {
                name: 'Raleigh → Tokyo',
                coords: [
                  [-78.6, 35.8],
                  [139.7, 35.7],
                ],
                value: 160,
              },
              {
                name: 'Raleigh → São Paulo',
                coords: [
                  [-78.6, 35.8],
                  [-46.6, -23.6],
                ],
                value: 120,
              },
              {
                name: 'London → Brno',
                coords: [
                  [-0.1, 51.5],
                  [16.6, 49.2],
                ],
                value: 25,
              },
              {
                name: 'London → Bangalore',
                coords: [
                  [-0.1, 51.5],
                  [77.6, 13.0],
                ],
                value: 140,
              },
              {
                name: 'Tokyo → Sydney',
                coords: [
                  [139.7, 35.7],
                  [151.2, -33.9],
                ],
                value: 110,
              },
              {
                name: 'Tokyo → Singapore',
                coords: [
                  [139.7, 35.7],
                  [103.8, 1.4],
                ],
                value: 70,
              },
            ],
          },
          {
            name: 'Backups',
            data: [
              {
                name: 'Boston → Raleigh',
                coords: [
                  [-71.1, 42.4],
                  [-78.6, 35.8],
                ],
                value: 15,
              },
              {
                name: 'Brno → London',
                coords: [
                  [16.6, 49.2],
                  [-0.1, 51.5],
                ],
                value: 25,
              },
              {
                name: 'Singapore → Bangalore',
                coords: [
                  [103.8, 1.4],
                  [77.6, 13.0],
                ],
                value: 40,
              },
              {
                name: 'Sydney → Singapore',
                coords: [
                  [151.2, -33.9],
                  [103.8, 1.4],
                ],
                value: 95,
              },
            ],
          },
        ]"
        theme-color="multi-unordered"
      />
    </story-canvas>

    <story-canvas title="Paths on a custom map">
      <pf-chart-lines
        aria-label="Data center cabling example"
        directed
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
        legend-position="bottom"
        map="data-center"
        :option="{ geo: { aspectScale: 1 } }"
        points
        :series="[
          {
            name: 'Fiber',
            data: [
              {
                name: 'Office → Room B',
                coords: [
                  [9, 1],
                  [6, 1.5],
                ],
              },
              {
                name: 'Office → Room D',
                coords: [
                  [9, 5],
                  [5.5, 4.5],
                ],
              },
            ],
          },
          {
            name: 'Copper',
            data: [
              {
                name: 'Room B → Room A',
                coords: [
                  [6, 1.5],
                  [6, 0.5],
                  [2, 0.5],
                  [2, 1.5],
                ],
              },
              {
                name: 'Room D → Room C',
                coords: [
                  [5.5, 4.5],
                  [5.5, 5.5],
                  [1.5, 5.5],
                  [1.5, 4.5],
                ],
              },
            ],
          },
        ]"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      react-charts has no lines chart: this is an ECharts only chart, a [lines series](https://echarts.apache.org/en/option.html#series-lines) on a [geo](https://echarts.apache.org/en/option.html#geo) component.

      Each line goes through its `coords`, as `[longitude, latitude]` (or `[x, y]` on maps that are not geographic):
      lines with more than two points are drawn as paths, which `curved` doesn't bend and `directed` doesn't end with
      an arrow. The map is a neutral background,
      without interactions. Trails (`effect`) are not drawn when the user prefers reduced motion. Zooming and panning
      with `roam` is off by default, as it captures the page scroll over the map.
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
