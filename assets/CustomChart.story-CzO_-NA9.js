import{F as e,K as t,Pt as n,c as r,g as i,h as a,it as o,j as s,l as c,m as l}from"./runtime-core.esm-bundler-DngnZCKR.js";import{t as u}from"./extension-CYexglMW.js";import{a as d,d as f,f as p,i as m,o as h}from"./index-CTvJCgo8.js";import{n as g,r as _,t as v}from"./installSVGRenderer-YAm_cTFr.js";var y=i({__name:`CustomChart.story`,setup(i){u([f,m,_,d,p,v,h,g]);let y=o(0);return(i,o)=>{let u=e(`component-info`),d=e(`pf-charts`),f=e(`story-canvas`),p=e(`doc-page`);return s(),c(p,{name:`Charts/CustomChart.story.vue`,title:`Custom chart`},{description:t(()=>[...o[1]||=[r(`b`,null,`PfCharts`,-1),l(` renders any `,-1),r(`a`,{href:`https://echarts.apache.org/en/option.html`,target:`_blank`},`ECharts option`,-1),l(` with the PatternFly theme. The chart wrappers are built on it.`,-1)]]),apidocs:t(()=>[a(u,{name:`PfCharts`,doc:{name:`PfCharts`,exportName:`default`,displayName:`Charts`,description:``,tags:{},expose:[{name:`chart`,description:`The ECharts instance -- see https://echarts.apache.org/en/api.html#echartsInstance`}],props:[{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`option`,description:`ECharts uses this object to configure its properties; for example, series, title, and tooltip.
The PatternFly defaults for each series type are applied to the given series.

See https://echarts.apache.org/en/option.html`,required:!1,type:{name:`ChartsOption`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`},{name:`brushselected`,type:{names:[`ChartBrushSelectedEvent`]},description:`Emitted when the brushed areas change -- see https://echarts.apache.org/en/api.html#events.brushselected`}],sourceFiles:[`packages/charts/src/Charts.vue`]}})]),default:t(()=>[o[3]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`Note: charts live in their own package at `),r(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),l(`!`)]),r(`p`,null,[l(`Charts read their colors from the PatternFly chart CSS variables: import `),r(`code`,null,`@patternfly/patternfly/patternfly-charts.css`),l(` next to `),r(`code`,null,`patternfly.css`),l(`.`)]),r(`p`,null,[l(`Like patternfly-react's `),r(`code`,null,`Charts`),l(` component, `),r(`code`,null,`PfCharts`),l(` applies the PatternFly theme and per series defaults (line, bar, box plot, candlestick, chord, graph, lines, parallel, pie, sankey, sunburst, theme river, tree and treemap), and a legend tooltip for line and bar series. Unlike the chart wrappers, it registers no ECharts module: register the charts and components the option uses with `),r(`code`,null,`echarts.use()`),l(`.`)]),r(`pre`,{class:`shiki nord`,style:{"background-color":`#2e3440ff`,color:`#d8dee9ff`},tabindex:`0`},[r(`code`,null,[r(`span`,{class:`line`},[r(`span`,{style:{color:`#81A1C1`}},`import`),r(`span`,{style:{color:`#81A1C1`}},` *`),r(`span`,{style:{color:`#81A1C1`}},` as`),r(`span`,{style:{color:`#D8DEE9`}},` echarts`),r(`span`,{style:{color:`#81A1C1`}},` from`),r(`span`,{style:{color:`#ECEFF4`}},` '`),r(`span`,{style:{color:`#A3BE8C`}},`echarts/core`),r(`span`,{style:{color:`#ECEFF4`}},`'`),r(`span`,{style:{color:`#81A1C1`}},`;`)]),l(`
`),r(`span`,{class:`line`},[r(`span`,{style:{color:`#81A1C1`}},`import`),r(`span`,{style:{color:`#ECEFF4`}},` {`),r(`span`,{style:{color:`#D8DEE9`}},` LineChart`),r(`span`,{style:{color:`#ECEFF4`}},` }`),r(`span`,{style:{color:`#81A1C1`}},` from`),r(`span`,{style:{color:`#ECEFF4`}},` '`),r(`span`,{style:{color:`#A3BE8C`}},`echarts/charts`),r(`span`,{style:{color:`#ECEFF4`}},`'`),r(`span`,{style:{color:`#81A1C1`}},`;`)]),l(`
`),r(`span`,{class:`line`},[r(`span`,{style:{color:`#81A1C1`}},`import`),r(`span`,{style:{color:`#ECEFF4`}},` {`),r(`span`,{style:{color:`#D8DEE9`}},` GridComponent`),r(`span`,{style:{color:`#ECEFF4`}},`,`),r(`span`,{style:{color:`#D8DEE9`}},` TitleComponent`),r(`span`,{style:{color:`#ECEFF4`}},`,`),r(`span`,{style:{color:`#D8DEE9`}},` TooltipComponent`),r(`span`,{style:{color:`#ECEFF4`}},` }`),r(`span`,{style:{color:`#81A1C1`}},` from`),r(`span`,{style:{color:`#ECEFF4`}},` '`),r(`span`,{style:{color:`#A3BE8C`}},`echarts/components`),r(`span`,{style:{color:`#ECEFF4`}},`'`),r(`span`,{style:{color:`#81A1C1`}},`;`)]),l(`
`),r(`span`,{class:`line`},[r(`span`,{style:{color:`#81A1C1`}},`import`),r(`span`,{style:{color:`#ECEFF4`}},` {`),r(`span`,{style:{color:`#D8DEE9`}},` SVGRenderer`),r(`span`,{style:{color:`#ECEFF4`}},` }`),r(`span`,{style:{color:`#81A1C1`}},` from`),r(`span`,{style:{color:`#ECEFF4`}},` '`),r(`span`,{style:{color:`#A3BE8C`}},`echarts/renderers`),r(`span`,{style:{color:`#ECEFF4`}},`'`),r(`span`,{style:{color:`#81A1C1`}},`;`)]),l(`
`),r(`span`,{class:`line`}),l(`
`),r(`span`,{class:`line`},[r(`span`,{style:{color:`#D8DEE9`}},`echarts`),r(`span`,{style:{color:`#ECEFF4`}},`.`),r(`span`,{style:{color:`#88C0D0`}},`use`),r(`span`,{style:{color:`#D8DEE9FF`}},`([`),r(`span`,{style:{color:`#D8DEE9`}},`GridComponent`),r(`span`,{style:{color:`#ECEFF4`}},`,`),r(`span`,{style:{color:`#D8DEE9`}},` LineChart`),r(`span`,{style:{color:`#ECEFF4`}},`,`),r(`span`,{style:{color:`#D8DEE9`}},` SVGRenderer`),r(`span`,{style:{color:`#ECEFF4`}},`,`),r(`span`,{style:{color:`#D8DEE9`}},` TitleComponent`),r(`span`,{style:{color:`#ECEFF4`}},`,`),r(`span`,{style:{color:`#D8DEE9`}},` TooltipComponent`),r(`span`,{style:{color:`#D8DEE9FF`}},`])`),r(`span`,{style:{color:`#81A1C1`}},`;`)]),l(`
`),r(`span`,{class:`line`})])]),r(`p`,null,[l(`The ECharts instance is exposed as `),r(`code`,null,`chart`),l(`, e.g. to dispatch actions, and the `),r(`code`,null,`click`),l(`, `),r(`code`,null,`legendselectchanged`),l(` and `),r(`code`,null,`datazoom`),l(` events are emitted. Without `),r(`code`,null,`width`),l(` and `),r(`code`,null,`height`),l(` the chart fills its container, following its size.`)]),r(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),a(f,{title:`Line chart`,source:`<pf-charts
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
></pf-charts>`},{default:t(()=>[a(d,{height:400,option:{grid:{right:100},legend:{left:`right`,orient:`vertical`,top:`middle`},xAxis:{type:`category`,data:[`2015`,`2016`,`2017`,`2018`]},yAxis:{axisLabel:{formatter:e=>e===0?``:`${e}`},splitNumber:3,type:`value`},series:[{data:[1,2,5,3],name:`Cats`,type:`line`},{data:[2,1,7,4],name:`Dogs`,lineStyle:{type:`dashed`},type:`line`},{data:[3,4,9,5],name:`Birds`,type:`line`},{data:[3,3,8,7],name:`Mice`,type:`line`}],title:{left:`center`,text:`This is a Line chart`}}},null,8,[`option`])]),_:1}),a(f,{title:`Data zoom`,source:`<pf-charts
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
<p>Zoom events: {{ zoomEvents }}</p>`},{default:t(()=>[a(d,{height:400,option:{dataZoom:[{type:`inside`},{type:`slider`}],xAxis:{type:`category`,data:Array.from({length:50},(e,t)=>`${t+1}`)},yAxis:{type:`value`},series:[{data:Array.from({length:50},(e,t)=>Math.round(50+30*Math.sin(t/4))),name:`Requests`,type:`bar`}]},onDatazoom:o[0]||=e=>y.value++},null,8,[`option`]),r(`p`,null,`Zoom events: `+n(y.value),1)]),_:1}),a(f,{title:`Flame graph (a custom series)`,src:`stories/Charts/FlameGraph.vue`,source:`<template>
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
<\/script>`},{intro:t(()=>[...o[2]||=[r(`p`,null,`Click a frame to zoom into it, and its bottom frame to zoom out.`,-1)]]),_:1}),o[4]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),r(`ul`,null,[r(`li`,null,[r(`code`,null,`isLegendTooltip`),l(` and `),r(`code`,null,`isSvgRenderer`),l(` are `),r(`code`,null,`legend-tooltip`),l(` and `),r(`code`,null,`svg-renderer`),l(`, both enabled by default.`)]),r(`li`,null,[l(`The chart is resized whenever its container changes size, not only when `),r(`code`,null,`width`),l(` and `),r(`code`,null,`height`),l(` change.`)]),r(`li`,null,[l(`There is no `),r(`code`,null,`nodeSelector`),l(` prop: the chart is recreated when theme changes on `),r(`code`,null,`html`),l(` or `),r(`code`,null,`body`),l(` (e.g. the dark theme) change its colors.`)])])],-1)]),_:1})}}});export{y as default};