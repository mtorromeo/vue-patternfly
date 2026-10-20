<template>
  <doc-page title="Pie chart">
    <template #description>A <b>pie chart</b> shows the parts of a whole as slices of a circle.</template>

    <template #apidocs>
      <component-info name="PfChartPie" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ## Examples
    </pre>

    <story-canvas title="Basic with right aligned legend">
      <div style="width: 350px">
        <pf-chart-pie
          aria-label="Pie chart example"
          :data="[
            { x: 'Cats', y: 35 },
            { x: 'Dogs', y: 55 },
            { x: 'Birds', y: 10 },
          ]"
          :height="230"
        />
      </div>
    </story-canvas>

    <story-canvas title="Multi-color (ordered) with bottom aligned legend">
      <div style="width: 300px">
        <pf-chart-pie
          aria-label="Pie chart example"
          :data="[
            { x: 'Cats', y: 35 },
            { x: 'Dogs', y: 55 },
            { x: 'Birds', y: 10 },
          ]"
          :height="275"
          legend-position="bottom"
          theme-color="multi-ordered"
        />
      </div>
    </story-canvas>

    <story-canvas title="Custom color scale">
      <div style="width: 350px">
        <pf-chart-pie
          aria-label="Pie chart example"
          :data="[
            { x: 'Cats', y: 35 },
            { x: 'Dogs', y: 55 },
            { x: 'Birds', y: 10 },
          ]"
          :height="230"
          :option="{ color: ['#4cb140', '#f0ab00', '#c9190b'] }"
        />
      </div>
    </story-canvas>

    <story-canvas title="Nightingale chart">
      <pf-chart-pie
        aria-label="Nightingale chart example"
        :data="[
          { x: 'rose 1', y: 40 },
          { x: 'rose 2', y: 38 },
          { x: 'rose 3', y: 32 },
          { x: 'rose 4', y: 30 },
          { x: 'rose 5', y: 28 },
          { x: 'rose 6', y: 26 },
          { x: 'rose 7', y: 22 },
          { x: 'rose 8', y: 18 },
        ]"
        :height="500"
        legend-position="bottom"
        :option="{
          series: [
            { name: 'Nightingale Chart', radius: ['15%', '100%'], roseType: 'area', itemStyle: { borderRadius: 8 } },
          ],
        }"
        theme-color="multi-ordered"
        toolbox
      />
    </story-canvas>

    <story-canvas title="Label line adjust">
      <pf-charts
        aria-label="Pies with adjusted label lines example"
        :height="600"
        :option="{
          title: {
            text: 'Reading time per book',
            left: 'center',
            textStyle: { color: getComputedStyleValue(t_global_text_color_subtle), fontSize: 14, fontWeight: 'normal' },
          },
          series: [
            {
              type: 'pie',
              name: 'Shelf 1',
              top: '0.0%',
              height: '33.33%',
              left: 'center',
              width: 600,
              radius: [20, 60],
              itemStyle: {
                borderColor: getComputedStyleValue(t_global_background_color_primary_default),
                borderWidth: 1,
              },
              label: {
                show: true,
                alignTo: 'edge',
                // Rich text: a line for the name, another for the time
                formatter: '{name|{b}}\n{time|{c} hours}',
                minMargin: 5,
                edgeDistance: 10,
                lineHeight: 15,
                rich: { time: { color: getComputedStyleValue(t_global_text_color_subtle), fontSize: 10 } },
              },
              labelLine: { show: true, length: 15, length2: 0, maxSurfaceAngle: 80 },
              // The line ends at the side of the label facing the pie
              labelLayout: (params: LabelLayoutOptionCallbackParams) => {
                const points = params.labelLinePoints as number[][];
                const isLeft = points[1][0] < points[0][0];
                points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width;
                return { labelLinePoints: points };
              },
              data: [
                { name: 'The Gambler', value: 5.6 },
                { name: 'Complete works of Dostoevsky', value: 1 },
                { name: 'Records of the Grand Historian', value: 0.8 },
                { name: 'Gardner\'s Art Through the Ages', value: 0.5 },
                { name: 'Surfaces and Essences', value: 0.5 },
                { name: 'Others', value: 3.8 },
              ],
            },
            {
              type: 'pie',
              name: 'Shelf 2',
              top: '33.33%',
              height: '33.33%',
              left: 'center',
              width: 600,
              radius: [20, 60],
              itemStyle: {
                borderColor: getComputedStyleValue(t_global_background_color_primary_default),
                borderWidth: 1,
              },
              label: {
                show: true,
                alignTo: 'edge',
                // Rich text: a line for the name, another for the time
                formatter: '{name|{b}}\n{time|{c} hours}',
                minMargin: 5,
                edgeDistance: 10,
                lineHeight: 15,
                rich: { time: { color: getComputedStyleValue(t_global_text_color_subtle), fontSize: 10 } },
              },
              labelLine: { show: true, length: 15, length2: 0, maxSurfaceAngle: 80 },
              // The line ends at the side of the label facing the pie
              labelLayout: (params: LabelLayoutOptionCallbackParams) => {
                const points = params.labelLinePoints as number[][];
                const isLeft = points[1][0] < points[0][0];
                points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width;
                return { labelLinePoints: points };
              },
              data: [
                { name: 'Foundation and Earth', value: 3.8 },
                { name: 'Product methodology', value: 2.3 },
                { name: 'The flight of art', value: 2.2 },
                { name: 'The World Crisis', value: 1.3 },
                { name: 'Essential Scrum', value: 1.2 },
                { name: 'Others', value: 5.7 },
              ],
            },
            {
              type: 'pie',
              name: 'Shelf 3',
              top: '66.66%',
              height: '33.33%',
              left: 'center',
              width: 600,
              radius: [20, 60],
              itemStyle: {
                borderColor: getComputedStyleValue(t_global_background_color_primary_default),
                borderWidth: 1,
              },
              label: {
                show: true,
                alignTo: 'edge',
                // Rich text: a line for the name, another for the time
                formatter: '{name|{b}}\n{time|{c} hours}',
                minMargin: 5,
                edgeDistance: 10,
                lineHeight: 15,
                rich: { time: { color: getComputedStyleValue(t_global_text_color_subtle), fontSize: 10 } },
              },
              labelLine: { show: true, length: 15, length2: 0, maxSurfaceAngle: 80 },
              // The line ends at the side of the label facing the pie
              labelLayout: (params: LabelLayoutOptionCallbackParams) => {
                const points = params.labelLinePoints as number[][];
                const isLeft = points[1][0] < points[0][0];
                points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width;
                return { labelLinePoints: points };
              },
              data: [
                { name: 'Klein Bottle', value: 3.5 },
                { name: 'The Most Important Thing', value: 2.8 },
                { name: 'A Brief History of China', value: 1.7 },
                { name: 'Educated', value: 1.4 },
                { name: 'Surfaces and Essences', value: 0.5 },
                { name: 'Others', value: 3.8 },
              ],
            },
          ],
        }"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <story-canvas title="Nested pies">
      <pf-charts
        aria-label="Nested pies example"
        :height="550"
        :option="{
          tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
          legend: {
            top: 0,
            data: [
              'Direct',
              'Marketing',
              'Search Engine',
              'Email',
              'Union Ads',
              'Video Ads',
              'Baidu',
              'Google',
              'Bing',
              'Others',
            ],
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              selectedMode: 'single',
              center: ['50%', '55%'],
              radius: [0, '30%'],
              label: {
                show: true,
                position: 'inner',
                fontSize: 14,
                color: getComputedStyleValue(t_global_text_color_inverse),
              },
              labelLine: { show: false },
              data: [
                { value: 1548, name: 'Search Engine' },
                { value: 775, name: 'Direct' },
                { value: 679, name: 'Marketing', selected: true },
              ],
            },
            {
              name: 'Access From',
              type: 'pie',
              center: ['50%', '55%'],
              radius: ['45%', '60%'],
              labelLine: { show: true, length: 30 },
              label: {
                show: true,
                // Rich text: the series name, a rule, then the name, value and percentage of the slice
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}: }{c}  {per|{d}%}  ',
                backgroundColor: getComputedStyleValue(t_global_background_color_secondary_default),
                borderColor: getComputedStyleValue(chart_echarts_global_axis_axis_line_item_style_Color),
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                  a: { color: getComputedStyleValue(t_global_text_color_subtle), lineHeight: 22, align: 'center' },
                  hr: {
                    borderColor: getComputedStyleValue(chart_echarts_global_axis_axis_line_item_style_Color),
                    width: '100%',
                    borderWidth: 1,
                    height: 0,
                  },
                  b: {
                    color: getComputedStyleValue(t_global_text_color_regular),
                    fontSize: 14,
                    fontWeight: 'bold',
                    lineHeight: 33,
                  },
                  per: {
                    color: getComputedStyleValue(t_global_text_color_inverse),
                    backgroundColor: getComputedStyleValue(t_global_background_color_inverse_default),
                    padding: [3, 4],
                    borderRadius: 4,
                  },
                },
              },
              data: [
                { value: 1048, name: 'Baidu' },
                { value: 335, name: 'Direct' },
                { value: 310, name: 'Email' },
                { value: 251, name: 'Google' },
                { value: 234, name: 'Union Ads' },
                { value: 147, name: 'Bing' },
                { value: 135, name: 'Video Ads' },
                { value: 102, name: 'Others' },
              ],
            },
          ],
        }"
        theme-color="multi-ordered"
      />
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      Victory's `colorScale` is ECharts' [`color`](https://echarts.apache.org/en/option.html#color) option, set through `option`.

      The Nightingale chart reproduces the ECharts [example](https://echarts.apache.org/examples/en/editor.html?c=pie-roseType-simple),
      which react-charts can't draw: with [`roseType: 'area'`](https://echarts.apache.org/en/option.html#series-pie.roseType)
      the slices keep the same angle and their radius shows the value (`'radius'` changes the angles too). Like the
      other pie charts, it shows the values in the legend and tooltip instead of slice labels.

      The [label line adjust](https://echarts.apache.org/examples/en/editor.html?c=pie-labelLine-adjust) and
      [nested pies](https://echarts.apache.org/examples/en/editor.html?c=pie-nest) examples draw several pie
      series, which `PfChartPie` doesn't: they use `PfCharts` with an ECharts option, registering the pie chart and the
      components they need with `echarts.use()`. Their labels are shown explicitly, as the PatternFly pie defaults hide
      them, and their colors come from the PatternFly tokens.
    </pre>
  </doc-page>
</template>

<script lang="ts" setup>
import { use } from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import type { LabelLayoutOptionCallbackParams } from 'echarts';
import { getComputedStyleValue } from '@vue-patternfly/charts';

// PfCharts registers no ECharts module: the examples drawing several pies through it do
use([PieChart, LegendComponent, TitleComponent, TooltipComponent]);

// PatternFly tokens, as exported by @patternfly/react-tokens
const token = (name: string, value: string) => ({ name, value, var: `var(${name})` });
const chart_echarts_global_axis_axis_line_item_style_Color = token(
  '--pf-v6-chart-echarts-global--axis--axis-line--item-style--Color',
  '#c7c7c7',
);
const t_global_background_color_inverse_default = token(
  '--pf-t--global--background--color--inverse--default',
  '#292929',
);
const t_global_background_color_primary_default = token(
  '--pf-t--global--background--color--primary--default',
  '#ffffff',
);
const t_global_background_color_secondary_default = token(
  '--pf-t--global--background--color--secondary--default',
  '#f2f2f2',
);
const t_global_text_color_inverse = token('--pf-t--global--text--color--inverse', '#ffffff');
const t_global_text_color_regular = token('--pf-t--global--text--color--regular', '#151515');
const t_global_text_color_subtle = token('--pf-t--global--text--color--subtle', '#383838');
</script>
