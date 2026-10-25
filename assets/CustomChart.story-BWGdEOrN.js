import{t as e}from"./extension-CYexglMW.js";import{N as t,Ot as n,U as r,c as i,et as a,h as o,k as s,m as c,p as l,s as u}from"./runtime-core.esm-bundler-C7C7Sr-n.js";import{n as d,r as f,t as p}from"./installSVGRenderer-YAm_cTFr.js";import{a as m,d as h,i as g,r as _,u as v}from"./index-DoPLe3sE.js";var y=o({__name:`CustomChart.story`,setup(o){e([v,_,f,g,h,p,m,d]);let y=a(0);return(e,a)=>{let o=t(`component-info`),d=t(`pf-charts`),f=t(`story-canvas`),p=t(`doc-page`);return s(),i(p,{name:`Charts/CustomChart.story.vue`,title:`Custom chart`},{description:r(()=>[...a[1]||=[u(`b`,null,`PfCharts`,-1),l(` renders any `,-1),u(`a`,{href:`https://echarts.apache.org/en/option.html`,target:`_blank`},`ECharts option`,-1),l(` with the PatternFly theme. The chart wrappers are built on it.`,-1)]]),apidocs:r(()=>[c(o,{name:`PfCharts`,doc:{name:`PfCharts`,exportName:`default`,displayName:`Charts`,description:``,tags:{},expose:[{name:`chart`,description:`The ECharts instance -- see https://echarts.apache.org/en/api.html#echartsInstance`}],props:[{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`option`,description:`ECharts uses this object to configure its properties; for example, series, title, and tooltip.
The PatternFly defaults for each series type are applied to the given series.

See https://echarts.apache.org/en/option.html`,required:!1,type:{name:`ChartsOption`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`},{name:`brushselected`,type:{names:[`ChartBrushSelectedEvent`]},description:`Emitted when the brushed areas change -- see https://echarts.apache.org/en/api.html#events.brushselected`}],sourceFiles:[`packages/charts/src/Charts.vue`]}})]),default:r(()=>[a[3]||=u(`div`,{class:`markdown pf-v6-c-content`},[u(`p`,null,[l(`Note: charts live in their own package at `),u(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),l(`!`)]),u(`p`,null,[l(`Charts read their colors from the PatternFly chart CSS variables: import `),u(`code`,null,`@patternfly/patternfly/patternfly-charts.css`),l(` next to `),u(`code`,null,`patternfly.css`),l(`.`)]),u(`p`,null,[l(`Like patternfly-react's `),u(`code`,null,`Charts`),l(` component, `),u(`code`,null,`PfCharts`),l(` applies the PatternFly theme and per series defaults (line, bar, box plot, candlestick, chord, graph, lines, parallel, pie, sankey, sunburst, theme river, tree and treemap), and a legend tooltip for line and bar series. Unlike the chart wrappers, it registers no ECharts module: register the charts and components the option uses with `),u(`code`,null,`echarts.use()`),l(`.`)]),u(`pre`,{class:`shiki nord`,style:{"background-color":`#2e3440ff`,color:`#d8dee9ff`},tabindex:`0`},[u(`code`,null,[u(`span`,{class:`line`},[u(`span`,{style:{color:`#81A1C1`}},`import`),u(`span`,{style:{color:`#81A1C1`}},` *`),u(`span`,{style:{color:`#81A1C1`}},` as`),u(`span`,{style:{color:`#D8DEE9`}},` echarts`),u(`span`,{style:{color:`#81A1C1`}},` from`),u(`span`,{style:{color:`#ECEFF4`}},` '`),u(`span`,{style:{color:`#A3BE8C`}},`echarts/core`),u(`span`,{style:{color:`#ECEFF4`}},`'`),u(`span`,{style:{color:`#81A1C1`}},`;`)]),l(`
`),u(`span`,{class:`line`},[u(`span`,{style:{color:`#81A1C1`}},`import`),u(`span`,{style:{color:`#ECEFF4`}},` {`),u(`span`,{style:{color:`#D8DEE9`}},` LineChart`),u(`span`,{style:{color:`#ECEFF4`}},` }`),u(`span`,{style:{color:`#81A1C1`}},` from`),u(`span`,{style:{color:`#ECEFF4`}},` '`),u(`span`,{style:{color:`#A3BE8C`}},`echarts/charts`),u(`span`,{style:{color:`#ECEFF4`}},`'`),u(`span`,{style:{color:`#81A1C1`}},`;`)]),l(`
`),u(`span`,{class:`line`},[u(`span`,{style:{color:`#81A1C1`}},`import`),u(`span`,{style:{color:`#ECEFF4`}},` {`),u(`span`,{style:{color:`#D8DEE9`}},` GridComponent`),u(`span`,{style:{color:`#ECEFF4`}},`,`),u(`span`,{style:{color:`#D8DEE9`}},` TitleComponent`),u(`span`,{style:{color:`#ECEFF4`}},`,`),u(`span`,{style:{color:`#D8DEE9`}},` TooltipComponent`),u(`span`,{style:{color:`#ECEFF4`}},` }`),u(`span`,{style:{color:`#81A1C1`}},` from`),u(`span`,{style:{color:`#ECEFF4`}},` '`),u(`span`,{style:{color:`#A3BE8C`}},`echarts/components`),u(`span`,{style:{color:`#ECEFF4`}},`'`),u(`span`,{style:{color:`#81A1C1`}},`;`)]),l(`
`),u(`span`,{class:`line`},[u(`span`,{style:{color:`#81A1C1`}},`import`),u(`span`,{style:{color:`#ECEFF4`}},` {`),u(`span`,{style:{color:`#D8DEE9`}},` SVGRenderer`),u(`span`,{style:{color:`#ECEFF4`}},` }`),u(`span`,{style:{color:`#81A1C1`}},` from`),u(`span`,{style:{color:`#ECEFF4`}},` '`),u(`span`,{style:{color:`#A3BE8C`}},`echarts/renderers`),u(`span`,{style:{color:`#ECEFF4`}},`'`),u(`span`,{style:{color:`#81A1C1`}},`;`)]),l(`
`),u(`span`,{class:`line`}),l(`
`),u(`span`,{class:`line`},[u(`span`,{style:{color:`#D8DEE9`}},`echarts`),u(`span`,{style:{color:`#ECEFF4`}},`.`),u(`span`,{style:{color:`#88C0D0`}},`use`),u(`span`,{style:{color:`#D8DEE9FF`}},`([`),u(`span`,{style:{color:`#D8DEE9`}},`GridComponent`),u(`span`,{style:{color:`#ECEFF4`}},`,`),u(`span`,{style:{color:`#D8DEE9`}},` LineChart`),u(`span`,{style:{color:`#ECEFF4`}},`,`),u(`span`,{style:{color:`#D8DEE9`}},` SVGRenderer`),u(`span`,{style:{color:`#ECEFF4`}},`,`),u(`span`,{style:{color:`#D8DEE9`}},` TitleComponent`),u(`span`,{style:{color:`#ECEFF4`}},`,`),u(`span`,{style:{color:`#D8DEE9`}},` TooltipComponent`),u(`span`,{style:{color:`#D8DEE9FF`}},`])`),u(`span`,{style:{color:`#81A1C1`}},`;`)]),l(`
`),u(`span`,{class:`line`})])]),u(`p`,null,[l(`The ECharts instance is exposed as `),u(`code`,null,`chart`),l(`, e.g. to dispatch actions, and the `),u(`code`,null,`click`),l(`, `),u(`code`,null,`legendselectchanged`),l(` and `),u(`code`,null,`datazoom`),l(` events are emitted. Without `),u(`code`,null,`width`),l(` and `),u(`code`,null,`height`),l(` the chart fills its container, following its size.`)]),u(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),c(f,{title:`Line chart`,source:`<pf-charts
  :height="400"
  :option="{
    grid: { right: 100 },
    legend: { left: 'right', orient: 'vertical', top: 'middle' },
    xAxis: { type: 'category', data: ['2015', '2016', '2017', '2018'] },
    yAxis: {
      axisLabel: { formatter: (value: number) => (value !== 0 ? \`\${value}\` : '') },
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
></pf-charts>`},{default:r(()=>[c(d,{height:400,option:{grid:{right:100},legend:{left:`right`,orient:`vertical`,top:`middle`},xAxis:{type:`category`,data:[`2015`,`2016`,`2017`,`2018`]},yAxis:{axisLabel:{formatter:e=>e===0?``:`${e}`},splitNumber:3,type:`value`},series:[{data:[1,2,5,3],name:`Cats`,type:`line`},{data:[2,1,7,4],name:`Dogs`,lineStyle:{type:`dashed`},type:`line`},{data:[3,4,9,5],name:`Birds`,type:`line`},{data:[3,3,8,7],name:`Mice`,type:`line`}],title:{left:`center`,text:`This is a Line chart`}}},null,8,[`option`])]),_:1}),c(f,{title:`Data zoom`,source:`<pf-charts
  :height="400"
  :option="{
    dataZoom: [{ type: 'inside' }, { type: 'slider' }],
    xAxis: { type: 'category', data: Array.from({ length: 50 }, (_, i) => \`\${i + 1}\`) },
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
></pf-charts>
<p>Zoom events: {{ zoomEvents }}</p>`},{default:r(()=>[c(d,{height:400,option:{dataZoom:[{type:`inside`},{type:`slider`}],xAxis:{type:`category`,data:Array.from({length:50},(e,t)=>`${t+1}`)},yAxis:{type:`value`},series:[{data:Array.from({length:50},(e,t)=>Math.round(50+30*Math.sin(t/4))),name:`Requests`,type:`bar`}]},onDatazoom:a[0]||=e=>y.value++},null,8,[`option`]),u(`p`,null,`Zoom events: `+n(y.value),1)]),_:1}),c(f,{title:`Flame graph (a custom series)`,src:`stories/Charts/FlameGraph.vue`,source:`<template>
  <pf-charts :height="350" :option="flameGraphOption" @click="zoomFrame" />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import type { CustomSeriesRenderItem, TooltipComponentFormatterCallbackParams } from 'echarts';
import { use } from 'echarts/core';
import { CustomChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';

use([CustomChart, GridComponent, SVGRenderer, TooltipComponent]);

// A flame graph, as in the ECharts examples: each frame of the sampled call stacks spans its number of samples, and
// the frames it calls are stacked above it
interface Frame {
  name: string;
  value: number;
  children?: Frame[];
}

const profile: Frame = {
  name: 'main',
  value: 100,
  children: [
    {
      name: 'loadConfig',
      value: 12,
      children: [
        { name: 'readFile', value: 7 },
        { name: 'parseYaml', value: 4 },
      ],
    },
    {
      name: 'handleRequests',
      value: 70,
      children: [
        {
          name: 'parseRequest',
          value: 14,
          children: [{ name: 'JSON.parse', value: 10 }],
        },
        {
          name: 'queryDatabase',
          value: 38,
          children: [
            { name: 'connect', value: 6 },
            {
              name: 'execute',
              value: 28,
              children: [
                { name: 'serialize', value: 9 },
                { name: 'socket.write', value: 15 },
              ],
            },
          ],
        },
        {
          name: 'renderResponse',
          value: 16,
          children: [
            { name: 'template', value: 11, children: [{ name: 'escapeHtml', value: 5 }] },
            { name: 'gzip', value: 4 },
          ],
        },
      ],
    },
    { name: 'gc', value: 9 },
  ],
};

// The classic warm flame graph colors, from the red-orange, orange and yellow PatternFly chart colors
const warmColors = ['red-orange', 'orange', 'yellow'].flatMap(family =>
  [100, 200, 300].map(shade =>
    getComputedStyle(document.body).getPropertyValue(\`--pf-v6-chart-color-\${family}-\${shade}\`).trim(),
  ),
);

// Like in the original flame graphs, the color only depends on the function name
function warmColorOf(name: string) {
  let hash = 0;
  for (const char of name) {
    hash = (hash * 31 + char.charCodeAt(0)) | 0;
  }
  return warmColors[Math.abs(hash) % warmColors.length];
}

// Each frame becomes [level, start, end, name], identified by its path from the root
type FrameDatum = { name: string; value: [number, number, number, string]; itemStyle: { color: string } };

function flattenFrames(frame: Frame, id = frame.name, level = 0, start = 0): FrameDatum[] {
  let childStart = start;
  return [
    { name: id, value: [level, start, start + frame.value, frame.name], itemStyle: { color: warmColorOf(frame.name) } },
    ...(frame.children ?? []).flatMap(child => {
      const data = flattenFrames(child, \`\${id}/\${child.name}\`, level + 1, childStart);
      childStart += child.value;
      return data;
    }),
  ];
}

const frames = flattenFrames(profile);
const depth = Math.max(...frames.map(frame => frame.value[0])) + 1;

const renderFrame: CustomSeriesRenderItem = (_params, api) => {
  const level = Number(api.value(0));
  const start = api.coord([api.value(1), level]);
  const end = api.coord([api.value(2), level]);
  const height = (api.size?.([0, 1]) as number[] | undefined)?.[1] ?? 20;
  const width = end[0] - start[0];
  return {
    type: 'rect',
    transition: ['shape'],
    shape: { x: start[0], y: start[1] - height / 2, width, height: height - 2, r: 2 },
    style: { fill: api.visual('color') },
    // Without a fill, the label color contrasts with the frame
    textConfig: { position: 'insideLeft' },
    textContent: {
      type: 'text',
      style: { text: String(api.value(3)), width: width - 10, overflow: 'truncate', ellipsis: '…', truncateMinChar: 1 },
    },
  };
};

// Zooming changes the range of the axes, so every frame keeps its color
const zoomedFrame = ref(frames[0]);

const flameGraphOption = computed(() => {
  const [level, start, end] = zoomedFrame.value.value;
  return {
    tooltip: {
      formatter: (params: TooltipComponentFormatterCallbackParams) => {
        const { marker, value } = Array.isArray(params) ? params[0] : params;
        const [, from, to, name] = value as FrameDatum['value'];
        const share = ((to - from) / profile.value) * 100;
        return \`\${marker} \${name}: \${to - from} samples, \${+share.toFixed(2)}%\`;
      },
    },
    grid: { bottom: 10, left: 10, right: 10, top: 10 },
    xAxis: { show: false, min: start, max: end },
    // The frames below the zoomed one are hidden
    yAxis: { show: false, min: level - 0.5, max: depth - 0.5 },
    series: [
      {
        type: 'custom' as const,
        clip: true,
        renderItem: renderFrame,
        encode: { x: [1, 2], y: 0 },
        data: frames,
      },
    ],
  };
});

// Zooms into the clicked frame, or back out to its caller when the bottom frame is clicked
function zoomFrame(params: { data?: unknown }) {
  const frame = params.data as FrameDatum | undefined;
  if (!frame) {
    return;
  }
  const target = frame.name === zoomedFrame.value.name ? frame.name.split('/').slice(0, -1).join('/') : frame.name;
  zoomedFrame.value = frames.find(other => other.name === target) ?? frames[0];
}
<\/script>`},{intro:r(()=>[...a[2]||=[u(`p`,null,`Click a frame to zoom into it, and its bottom frame to zoom out.`,-1)]]),_:1}),a[4]||=u(`div`,{class:`markdown pf-v6-c-content`},[u(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),u(`ul`,null,[u(`li`,null,[u(`code`,null,`isLegendTooltip`),l(` and `),u(`code`,null,`isSvgRenderer`),l(` are `),u(`code`,null,`legend-tooltip`),l(` and `),u(`code`,null,`svg-renderer`),l(`, both enabled by default.`)]),u(`li`,null,[l(`The chart is resized whenever its container changes size, not only when `),u(`code`,null,`width`),l(` and `),u(`code`,null,`height`),l(` change.`)]),u(`li`,null,[l(`There is no `),u(`code`,null,`nodeSelector`),l(` prop: the chart is recreated when theme changes on `),u(`code`,null,`html`),l(` or `),u(`code`,null,`body`),l(` (e.g. the dark theme) change its colors.`)])])],-1)]),_:1})}}});export{y as default};