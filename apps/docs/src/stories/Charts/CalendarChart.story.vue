<template>
  <doc-page title="Calendar chart">
    <template #description
      >A <b>calendar</b> heatmap shows a value per day, laid out as the weeks of a calendar, such as daily activity over
      a year.</template
    >

    <template #apidocs>
      <component-info name="PfChartCalendar" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-chart-calendar
        aria-label="Calendar chart example"
        :data="
          Array.from({ length: 365 }, (_, day) => ({
            date: new Date(2026, 0, day + 1),
            value: day % 9 === 4 ? null : Math.round(10 + 10 * Math.sin(day / 6) * Math.cos(day / 17)),
          }))
        "
        :height="220"
        locale="en-US"
        :range="2026"
      />
    </story-canvas>

    <story-canvas title="Green, starting from Monday, in Italian">
      <pf-chart-calendar
        aria-label="Calendar chart example"
        :data="
          Array.from({ length: 365 }, (_, day) => ({
            date: new Date(2026, 0, day + 1),
            value: day % 9 === 4 ? null : Math.round(10 + 10 * Math.sin(day / 6) * Math.cos(day / 17)),
          }))
        "
        :first-day="1"
        :height="220"
        locale="it-IT"
        :range="2026"
        theme-color="green"
      />
    </story-canvas>

    <story-canvas title="Vertical quarter with bottom aligned legend">
      <pf-chart-calendar
        aria-label="Calendar chart example"
        :data="
          Array.from({ length: 365 }, (_, day) => ({
            date: new Date(2026, 0, day + 1),
            value: day % 9 === 4 ? null : Math.round(10 + 10 * Math.sin(day / 6) * Math.cos(day / 17)),
          }))
        "
        :height="450"
        legend-position="bottom"
        locale="en-US"
        :range="['2026-01-01', '2026-03-31']"
        vertical
        :width="350"
      />
    </story-canvas>

    <story-canvas title="Calendar graph">
      <pf-chart-calendar
        aria-label="Calendar graph example"
        :data="
          Array.from({ length: 365 }, (_, day) => ({
            date: new Date(2026, 0, day + 1),
            value: day % 9 === 4 ? null : Math.round(10 + 10 * Math.sin(day / 6) * Math.cos(day / 17)),
          }))
        "
        :first-day="1"
        :height="500"
        legend-position="bottom"
        locale="en-US"
        :option="{
          series: [
            // The heatmap of the wrapper, unchanged
            {},
            {
              type: 'graph',
              coordinateSystem: 'calendar',
              name: 'Milestones',
              // The nodes are days: the milestones of a project
              data: [
                { name: 'Kickoff', value: ['2026-02-02', 4] },
                { name: 'Design review', value: ['2026-02-11', 9] },
                { name: 'Beta', value: ['2026-02-24', 15] },
                { name: 'Release candidate', value: ['2026-03-10', 18] },
                { name: 'Release', value: ['2026-03-19', 20] },
                { name: 'Retrospective', value: ['2026-03-26', 6] },
              ],
              // Each milestone is linked to the next one
              links: [
                { source: 0, target: 1 },
                { source: 1, target: 2 },
                { source: 2, target: 3 },
                { source: 3, target: 4 },
                { source: 4, target: 5 },
              ],
              edgeSymbol: ['none', 'arrow'],
              edgeSymbolSize: 8,
              // A color standing out from the heatmap, read at each render so it follows the theme
              itemStyle: { color: () => getComputedStyleValue(chart_color_orange_300) },
              symbolSize: 14,
              tooltip: {
                formatter: (params: TooltipComponentFormatterCallbackParams) => {
                  const { data, dataType } = [params].flat()[0];
                  const node = data as { name: string; value: [string, number] };
                  return dataType === 'node' ? `${node.name}: ${node.value[0]}` : '';
                },
              },
              // Above the cells of the calendar
              z: 10,
            },
          ],
        }"
        :range="['2026-02-01', '2026-03-31']"
        theme-color="multi-ordered"
        vertical
        :width="400"
      />
    </story-canvas>

    <story-canvas title="Custom calendar icons">
      <pf-chart-calendar
        aria-label="Calendar with event icons example"
        :first-day="1"
        :height="480"
        legend-position="none"
        locale="en-US"
        :option="{
          series: [
            // The heatmap of the wrapper, empty
            {},
            {
              type: 'custom',
              coordinateSystem: 'calendar',
              name: 'Events',
              dimensions: ['date', { name: 'events', type: 'ordinal' }],
              // The events of each day
              data: [
                ['2026-03-01', ''],
                ['2026-03-02', 'Release|Meeting'],
                ['2026-03-03', 'Release|Incident|Release|Release'],
                ['2026-03-04', 'Meeting'],
                ['2026-03-05', 'Meeting|Release|Incident'],
                ['2026-03-06', 'Release|Meeting|Meeting|Incident'],
                ['2026-03-07', 'Incident|Release'],
                ['2026-03-08', 'Release'],
                ['2026-03-09', 'Meeting|Meeting|Incident'],
                ['2026-03-10', 'Meeting|Release|Travel'],
                ['2026-03-11', 'Meeting|Incident'],
                ['2026-03-12', 'Release|Travel|Meeting|Incident'],
                ['2026-03-13', 'Travel|Release|Meeting|Travel'],
                ['2026-03-14', 'Incident|Travel|Travel|Release'],
                ['2026-03-15', 'Incident'],
                ['2026-03-16', ''],
                ['2026-03-17', 'Travel|Release|Travel|Meeting'],
                ['2026-03-18', 'Travel|Incident|Incident'],
                ['2026-03-19', 'Travel|Release'],
                ['2026-03-20', 'Travel|Release|Travel|Incident'],
                ['2026-03-21', 'Meeting'],
                ['2026-03-22', ''],
                ['2026-03-23', 'Meeting|Release|Incident|Release'],
                ['2026-03-24', 'Meeting|Release'],
                ['2026-03-25', ''],
                ['2026-03-26', 'Incident|Travel'],
                ['2026-03-27', ''],
                ['2026-03-28', 'Travel|Travel|Incident|Release'],
                ['2026-03-29', 'Incident|Incident|Release|Incident'],
                ['2026-03-30', 'Travel'],
                ['2026-03-31', 'Travel|Meeting'],
              ],
              renderItem: (params: CustomSeriesRenderItemParams, api: CustomSeriesRenderItemAPI) => {
                const icons = {
                  Meeting: UsersIconConfig,
                  Release: RocketIconConfig,
                  Incident: BugIconConfig,
                  Travel: PlaneIconConfig,
                };
                const colors = getTheme('multi-ordered').color ?? [];
                // Position of the icons in the cell, from its center, for 1 to 4 events
                const layouts = [
                  [[0, 0]],
                  [
                    [-0.22, 0],
                    [0.22, 0],
                  ],
                  [
                    [0, -0.18],
                    [-0.22, 0.18],
                    [0.22, 0.18],
                  ],
                  [
                    [-0.22, -0.18],
                    [0.22, -0.18],
                    [-0.22, 0.18],
                    [0.22, 0.18],
                  ],
                ];
                const [x, y] = api.coord(api.value(0));
                const { cellWidth, cellHeight } = params.coordSys as unknown as {
                  cellWidth: number;
                  cellHeight: number;
                };
                const events = String(api.value(1)).split('|').filter(Boolean) as (keyof typeof icons)[];
                const size = Math.min(cellWidth, cellHeight) / 4;
                return {
                  type: 'group',
                  children: [
                    {
                      type: 'text',
                      style: {
                        fill: getComputedStyleValue(chart_global_label_Fill),
                        font: api.font({ fontSize: 12 }),
                        // Calendar dates are given to the custom series as timestamps
                        text: String(new Date(api.value(0)).getDate()),
                        x: x - cellWidth / 2 + 6,
                        y: y - cellHeight / 2 + 4,
                      },
                    },
                    ...(layouts[events.length - 1] ?? []).map(([dx, dy], index) => ({
                      type: 'path' as const,
                      shape: {
                        height: size,
                        pathData: icons[events[index]].svgPathData as string,
                        width: size,
                        x: x + dx * cellWidth - size / 2,
                        y: y + 6 + dy * cellHeight - size / 2,
                      },
                      style: { fill: colors[Object.keys(icons).indexOf(events[index]) % colors.length] },
                    })),
                  ],
                };
              },
              tooltip: {
                formatter: (params: TooltipComponentFormatterCallbackParams) => {
                  const [date, events] = [params].flat()[0].value as [string, string];
                  return `${date}: ${events ? events.split('|').join(', ') : 'no events'}`;
                },
              },
              // Above the cells of the calendar, which would hide the icons
              z: 10,
            },
          ],
        }"
        range="2026-03"
        vertical
        :width="560"
      />
    </story-canvas>

    <pre v-md>
      ## Calendars with other series

      The calendar is an ECharts coordinate system: other series can be drawn on it by adding them to `option`, after the
      heatmap, with a `z` above the cells of the calendar (e.g. `z: 10`), which would hide them otherwise. The color
      scale only applies to the heatmap, and each series keeps its own tooltip. Register the ECharts modules they need
      with `echarts.use()`.

      - **Calendar graph**: a `graph` series whose nodes are days, linked in order (like the ECharts [calendar graph](https://echarts.apache.org/examples/en/editor.html?c=calendar-graph) example).
      - **Custom calendar icons**: without `data`, the heatmap draws nothing and a `custom` series draws the day number and an icon per event in each cell (like the ECharts [custom calendar icon](https://echarts.apache.org/examples/en/editor.html?c=custom-calendar-icon) example). The icons are the SVG paths of `@vue-patternfly/icons`.

      ## Differences from patternfly-react

      react-charts has no calendar chart: this is an ECharts only chart, a heatmap on an [ECharts calendar](https://echarts.apache.org/en/option.html#calendar).

      Like `PfChartHeatmap`, values are mapped to a sequential scale of the theme color, shown as the legend. Days
      without a value are drawn in the secondary background color, to tell them apart from the lowest values. Day and
      month names, and the dates in the tooltip, follow `locale`.
    </pre>
  </doc-page>
</template>

<script lang="ts" setup>
import { use } from 'echarts/core';
import { CustomChart, GraphChart } from 'echarts/charts';
import type {
  CustomSeriesRenderItemAPI,
  CustomSeriesRenderItemParams,
  TooltipComponentFormatterCallbackParams,
} from 'echarts';
import { getComputedStyleValue, getTheme } from '@vue-patternfly/charts';
import { BugIconConfig } from '@vue-patternfly/icons/bug-icon';
import { PlaneIconConfig } from '@vue-patternfly/icons/plane-icon';
import { RocketIconConfig } from '@vue-patternfly/icons/rocket-icon';
import { UsersIconConfig } from '@vue-patternfly/icons/users-icon';

// The wrapper only registers the heatmap: the examples drawing other series on the calendar do
use([CustomChart, GraphChart]);

// PatternFly tokens, as exported by @patternfly/react-tokens
const chart_color_orange_300 = {
  name: '--pf-v6-chart-color-orange-300',
  value: '#ca6c0f',
  var: 'var(--pf-v6-chart-color-orange-300)',
};
const chart_global_label_Fill = {
  name: '--pf-v6-chart-global--label--Fill',
  value: '#1f1f1f',
  var: 'var(--pf-v6-chart-global--label--Fill)',
};
</script>
