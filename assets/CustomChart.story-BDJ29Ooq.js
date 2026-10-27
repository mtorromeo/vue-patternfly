import{t as e}from"./extension-CYexglMW.js";import{F as t,K as n,Pt as r,c as i,g as a,h as o,it as s,j as c,l,m as u}from"./runtime-core.esm-bundler-DO1530YC.js";import{n as d,r as f,t as p}from"./installSVGRenderer-YAm_cTFr.js";import{a as m,d as h,f as g,i as _,o as v}from"./index-CUsetNQE.js";var y=a({__name:`CustomChart.story`,setup(a){e([h,_,f,m,g,p,v,d]);let y=s(0);return(e,a)=>{let s=t(`component-info`),d=t(`pf-charts`),f=t(`story-canvas`),p=t(`doc-page`);return c(),l(p,{name:`Charts/CustomChart.story.vue`,title:`Custom chart`},{description:n(()=>[...a[1]||=[i(`b`,null,`PfCharts`,-1),u(` renders any `,-1),i(`a`,{href:`https://echarts.apache.org/en/option.html`,target:`_blank`},`ECharts option`,-1),u(` with the PatternFly theme. The chart wrappers are built on it.`,-1)]]),apidocs:n(()=>[o(s,{name:`PfCharts`,doc:{name:`PfCharts`,exportName:`default`,displayName:`Charts`,description:``,tags:{},expose:[{name:`chart`,description:`The ECharts instance -- see https://echarts.apache.org/en/api.html#echartsInstance`}],props:[{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`option`,description:`ECharts uses this object to configure its properties; for example, series, title, and tooltip.
The PatternFly defaults for each series type are applied to the given series.

See https://echarts.apache.org/en/option.html`,required:!1,type:{name:`ChartsOption`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`},{name:`brushselected`,type:{names:[`ChartBrushSelectedEvent`]},description:`Emitted when the brushed areas change -- see https://echarts.apache.org/en/api.html#events.brushselected`}],sourceFiles:[`packages/charts/src/Charts.vue`]}})]),default:n(()=>[a[3]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`p`,null,[u(`Note: charts live in their own package at `),i(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),u(`!`)]),i(`p`,null,[u(`Charts read their colors from the PatternFly chart CSS variables: import `),i(`code`,null,`@patternfly/patternfly/patternfly-charts.css`),u(` next to `),i(`code`,null,`patternfly.css`),u(`.`)]),i(`p`,null,[u(`Like patternfly-react's `),i(`code`,null,`Charts`),u(` component, `),i(`code`,null,`PfCharts`),u(` applies the PatternFly theme and per series defaults (line, bar, box plot, candlestick, chord, graph, lines, parallel, pie, sankey, sunburst, theme river, tree and treemap), and a legend tooltip for line and bar series. Unlike the chart wrappers, it registers no ECharts module: register the charts and components the option uses with `),i(`code`,null,`echarts.use()`),u(`.`)]),i(`pre`,{class:`shiki nord`,style:{"background-color":`#2e3440ff`,color:`#d8dee9ff`},tabindex:`0`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`import`),i(`span`,{style:{color:`#81A1C1`}},` *`),i(`span`,{style:{color:`#81A1C1`}},` as`),i(`span`,{style:{color:`#D8DEE9`}},` echarts`),i(`span`,{style:{color:`#81A1C1`}},` from`),i(`span`,{style:{color:`#ECEFF4`}},` '`),i(`span`,{style:{color:`#A3BE8C`}},`echarts/core`),i(`span`,{style:{color:`#ECEFF4`}},`'`),i(`span`,{style:{color:`#81A1C1`}},`;`)]),u(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`import`),i(`span`,{style:{color:`#ECEFF4`}},` {`),i(`span`,{style:{color:`#D8DEE9`}},` LineChart`),i(`span`,{style:{color:`#ECEFF4`}},` }`),i(`span`,{style:{color:`#81A1C1`}},` from`),i(`span`,{style:{color:`#ECEFF4`}},` '`),i(`span`,{style:{color:`#A3BE8C`}},`echarts/charts`),i(`span`,{style:{color:`#ECEFF4`}},`'`),i(`span`,{style:{color:`#81A1C1`}},`;`)]),u(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`import`),i(`span`,{style:{color:`#ECEFF4`}},` {`),i(`span`,{style:{color:`#D8DEE9`}},` GridComponent`),i(`span`,{style:{color:`#ECEFF4`}},`,`),i(`span`,{style:{color:`#D8DEE9`}},` TitleComponent`),i(`span`,{style:{color:`#ECEFF4`}},`,`),i(`span`,{style:{color:`#D8DEE9`}},` TooltipComponent`),i(`span`,{style:{color:`#ECEFF4`}},` }`),i(`span`,{style:{color:`#81A1C1`}},` from`),i(`span`,{style:{color:`#ECEFF4`}},` '`),i(`span`,{style:{color:`#A3BE8C`}},`echarts/components`),i(`span`,{style:{color:`#ECEFF4`}},`'`),i(`span`,{style:{color:`#81A1C1`}},`;`)]),u(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#81A1C1`}},`import`),i(`span`,{style:{color:`#ECEFF4`}},` {`),i(`span`,{style:{color:`#D8DEE9`}},` SVGRenderer`),i(`span`,{style:{color:`#ECEFF4`}},` }`),i(`span`,{style:{color:`#81A1C1`}},` from`),i(`span`,{style:{color:`#ECEFF4`}},` '`),i(`span`,{style:{color:`#A3BE8C`}},`echarts/renderers`),i(`span`,{style:{color:`#ECEFF4`}},`'`),i(`span`,{style:{color:`#81A1C1`}},`;`)]),u(`
`),i(`span`,{class:`line`}),u(`
`),i(`span`,{class:`line`},[i(`span`,{style:{color:`#D8DEE9`}},`echarts`),i(`span`,{style:{color:`#ECEFF4`}},`.`),i(`span`,{style:{color:`#88C0D0`}},`use`),i(`span`,{style:{color:`#D8DEE9FF`}},`([`),i(`span`,{style:{color:`#D8DEE9`}},`GridComponent`),i(`span`,{style:{color:`#ECEFF4`}},`,`),i(`span`,{style:{color:`#D8DEE9`}},` LineChart`),i(`span`,{style:{color:`#ECEFF4`}},`,`),i(`span`,{style:{color:`#D8DEE9`}},` SVGRenderer`),i(`span`,{style:{color:`#ECEFF4`}},`,`),i(`span`,{style:{color:`#D8DEE9`}},` TitleComponent`),i(`span`,{style:{color:`#ECEFF4`}},`,`),i(`span`,{style:{color:`#D8DEE9`}},` TooltipComponent`),i(`span`,{style:{color:`#D8DEE9FF`}},`])`),i(`span`,{style:{color:`#81A1C1`}},`;`)]),u(`
`),i(`span`,{class:`line`})])]),i(`p`,null,[u(`The ECharts instance is exposed as `),i(`code`,null,`chart`),u(`, e.g. to dispatch actions, and the `),i(`code`,null,`click`),u(`, `),i(`code`,null,`legendselectchanged`),u(` and `),i(`code`,null,`datazoom`),u(` events are emitted. Without `),i(`code`,null,`width`),u(` and `),i(`code`,null,`height`),u(` the chart fills its container, following its size.`)]),i(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),o(f,{title:`Line chart`,source:`<pf-charts
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
></pf-charts>`},{default:n(()=>[o(d,{height:400,option:{grid:{right:100},legend:{left:`right`,orient:`vertical`,top:`middle`},xAxis:{type:`category`,data:[`2015`,`2016`,`2017`,`2018`]},yAxis:{axisLabel:{formatter:e=>e===0?``:`${e}`},splitNumber:3,type:`value`},series:[{data:[1,2,5,3],name:`Cats`,type:`line`},{data:[2,1,7,4],name:`Dogs`,lineStyle:{type:`dashed`},type:`line`},{data:[3,4,9,5],name:`Birds`,type:`line`},{data:[3,3,8,7],name:`Mice`,type:`line`}],title:{left:`center`,text:`This is a Line chart`}}},null,8,[`option`])]),_:1}),o(f,{title:`Data zoom`,source:`<pf-charts
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
<p>Zoom events: {{ zoomEvents }}</p>`},{default:n(()=>[o(d,{height:400,option:{dataZoom:[{type:`inside`},{type:`slider`}],xAxis:{type:`category`,data:Array.from({length:50},(e,t)=>`${t+1}`)},yAxis:{type:`value`},series:[{data:Array.from({length:50},(e,t)=>Math.round(50+30*Math.sin(t/4))),name:`Requests`,type:`bar`}]},onDatazoom:a[0]||=e=>y.value++},null,8,[`option`]),i(`p`,null,`Zoom events: `+r(y.value),1)]),_:1}),o(f,{title:`Flame graph (a custom series)`,src:`stories/Charts/FlameGraph.vue`,source:`<template>
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
<\/script>`},{intro:n(()=>[...a[2]||=[i(`p`,null,`Click a frame to zoom into it, and its bottom frame to zoom out.`,-1)]]),_:1}),a[4]||=i(`div`,{class:`markdown pf-v6-c-content`},[i(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),i(`ul`,null,[i(`li`,null,[i(`code`,null,`isLegendTooltip`),u(` and `),i(`code`,null,`isSvgRenderer`),u(` are `),i(`code`,null,`legend-tooltip`),u(` and `),i(`code`,null,`svg-renderer`),u(`, both enabled by default.`)]),i(`li`,null,[u(`The chart is resized whenever its container changes size, not only when `),i(`code`,null,`width`),u(` and `),i(`code`,null,`height`),u(` change.`)]),i(`li`,null,[u(`There is no `),i(`code`,null,`nodeSelector`),u(` prop: the chart is recreated when theme changes on `),i(`code`,null,`html`),u(` or `),i(`code`,null,`body`),u(` (e.g. the dark theme) change its colors.`)])])],-1)]),_:1})}}});export{y as default};