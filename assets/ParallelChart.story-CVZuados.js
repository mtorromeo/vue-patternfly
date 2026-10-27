import{F as e,K as t,c as n,h as r,j as i,l as a,m as o}from"./runtime-core.esm-bundler-DO1530YC.js";import{n as s}from"./index-CUsetNQE.js";var c={};function l(s,c){let l=e(`component-info`),u=e(`pf-chart-parallel`),d=e(`story-canvas`),f=e(`doc-page`);return i(),a(f,{name:`Charts/ParallelChart.story.vue`,title:`Parallel chart`},{description:t(()=>[...c[0]||=[o(`A `,-1),n(`b`,null,`parallel coordinates`,-1),o(` chart compares items across several dimensions: each dimension is an axis, and each item a line crossing every axis at its value.`,-1)]]),apidocs:t(()=>[r(l,{name:`PfChartParallel`,doc:{name:`PfChartParallel`,exportName:`default`,displayName:`ChartParallel`,description:``,tags:{},props:[{name:`option`,description:`ECharts option deep merged over the generated option, as an escape hatch for anything the props don't cover`,required:!1,type:{name:`ChartsOption`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it -- see https://echarts.apache.org/en/option.html#toolbox`,required:!1,type:{name:`boolean`}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors -- see https://echarts.apache.org/en/option.html#aria.decal`,required:!1,type:{name:`boolean`}},{name:`legendData`,description:`Legend entries; defaults to the series (or data) names`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`legendOrientation`,description:`Orientation of the legend; defaults to vertical for a right aligned legend and horizontal otherwise`,required:!1,type:{name:`union`,elements:[{name:`"horizontal"`},{name:`"vertical"`}]}},{name:`legendPosition`,description:"Position of the legend, `none` hiding it. Defaults to `right`, except for donut and bullet charts, which only\nshow a legend (on the right) when `legendData` is set.",required:!1,type:{name:`ChartLegendPosition`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`dimensions`,description:`The axes, as names or with their range or categories`,required:!1,type:{name:`Array`,elements:[{name:`TSParenthesizedType`}]}},{name:`series`,description:`The series to draw, each as a group of lines with one value per dimension`,required:!1,type:{name:`Array`,elements:[{name:`ChartParallelSeries`}]}},{name:`horizontal`,description:`Draws the axes as rows, from top to bottom, instead of columns`,required:!1,type:{name:`boolean`}},{name:`smooth`,description:`Draws the lines as curves`,required:!1,type:{name:`boolean`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartParallel.vue`]}})]),default:t(()=>[c[1]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[o(`Note: charts live in their own package at `),n(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),o(`!`)]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),r(d,{title:`Basic`,source:`<pf-chart-parallel
aria-label="Parallel chart example"
:dimensions="[
  'CPU (%)',
  'Memory (GB)',
  'Disk (GB)',
  { name: 'Tier', categories: ['Bronze', 'Silver', 'Gold'] },
  'Uptime (days)',
]"
:height="350"
:series="[
  {
    name: 'Cluster A',
    data: [
      [60, 12, 200, 'Gold', 40],
      [75, 16, 250, 'Gold', 12],
      [40, 8, 120, 'Silver', 90],
    ],
  },
  {
    name: 'Cluster B',
    data: [
      [20, 4, 80, 'Bronze', 200],
      [35, 6, 100, 'Silver', 150],
      [50, 10, 160, 'Silver', 60],
    ],
  },
  {
    name: 'Cluster C',
    data: [
      [90, 32, 500, 'Gold', 5],
      [85, 24, 400, 'Gold', 20],
    ],
  },
]" />`},{default:t(()=>[r(u,{"aria-label":`Parallel chart example`,dimensions:[`CPU (%)`,`Memory (GB)`,`Disk (GB)`,{name:`Tier`,categories:[`Bronze`,`Silver`,`Gold`]},`Uptime (days)`],height:350,series:[{name:`Cluster A`,data:[[60,12,200,`Gold`,40],[75,16,250,`Gold`,12],[40,8,120,`Silver`,90]]},{name:`Cluster B`,data:[[20,4,80,`Bronze`,200],[35,6,100,`Silver`,150],[50,10,160,`Silver`,60]]},{name:`Cluster C`,data:[[90,32,500,`Gold`,5],[85,24,400,`Gold`,20]]}]})]),_:1}),r(d,{title:`Multi-color (unordered) with smooth lines`,source:`<pf-chart-parallel
aria-label="Parallel chart example"
:dimensions="[
  'CPU (%)',
  'Memory (GB)',
  'Disk (GB)',
  { name: 'Tier', categories: ['Bronze', 'Silver', 'Gold'] },
  'Uptime (days)',
]"
:height="350"
:series="[
  {
    name: 'Cluster A',
    data: [
      [60, 12, 200, 'Gold', 40],
      [75, 16, 250, 'Gold', 12],
      [40, 8, 120, 'Silver', 90],
    ],
  },
  {
    name: 'Cluster B',
    data: [
      [20, 4, 80, 'Bronze', 200],
      [35, 6, 100, 'Silver', 150],
      [50, 10, 160, 'Silver', 60],
    ],
  },
  {
    name: 'Cluster C',
    data: [
      [90, 32, 500, 'Gold', 5],
      [85, 24, 400, 'Gold', 20],
    ],
  },
]"
smooth
theme-color="multi-unordered" />`},{default:t(()=>[r(u,{"aria-label":`Parallel chart example`,dimensions:[`CPU (%)`,`Memory (GB)`,`Disk (GB)`,{name:`Tier`,categories:[`Bronze`,`Silver`,`Gold`]},`Uptime (days)`],height:350,series:[{name:`Cluster A`,data:[[60,12,200,`Gold`,40],[75,16,250,`Gold`,12],[40,8,120,`Silver`,90]]},{name:`Cluster B`,data:[[20,4,80,`Bronze`,200],[35,6,100,`Silver`,150],[50,10,160,`Silver`,60]]},{name:`Cluster C`,data:[[90,32,500,`Gold`,5],[85,24,400,`Gold`,20]]}],smooth:``,"theme-color":`multi-unordered`})]),_:1}),r(d,{title:`Horizontal with bottom legend`,source:`<pf-chart-parallel
aria-label="Parallel chart example"
:dimensions="[
  'CPU (%)',
  'Memory (GB)',
  'Disk (GB)',
  { name: 'Tier', categories: ['Bronze', 'Silver', 'Gold'] },
  'Uptime (days)',
]"
:height="400"
:series="[
  {
    name: 'Cluster A',
    data: [
      [60, 12, 200, 'Gold', 40],
      [75, 16, 250, 'Gold', 12],
      [40, 8, 120, 'Silver', 90],
    ],
  },
  {
    name: 'Cluster B',
    data: [
      [20, 4, 80, 'Bronze', 200],
      [35, 6, 100, 'Silver', 150],
      [50, 10, 160, 'Silver', 60],
    ],
  },
  {
    name: 'Cluster C',
    data: [
      [90, 32, 500, 'Gold', 5],
      [85, 24, 400, 'Gold', 20],
    ],
  },
]"
horizontal
legend-position="bottom"
theme-color="multi-unordered" />`},{default:t(()=>[r(u,{"aria-label":`Parallel chart example`,dimensions:[`CPU (%)`,`Memory (GB)`,`Disk (GB)`,{name:`Tier`,categories:[`Bronze`,`Silver`,`Gold`]},`Uptime (days)`],height:400,series:[{name:`Cluster A`,data:[[60,12,200,`Gold`,40],[75,16,250,`Gold`,12],[40,8,120,`Silver`,90]]},{name:`Cluster B`,data:[[20,4,80,`Bronze`,200],[35,6,100,`Silver`,150],[50,10,160,`Silver`,60]]},{name:`Cluster C`,data:[[90,32,500,`Gold`,5],[85,24,400,`Gold`,20]]}],horizontal:``,"legend-position":`bottom`,"theme-color":`multi-unordered`})]),_:1}),c[2]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`p`,null,`react-charts has no parallel coordinates chart: this is an ECharts only chart.`),n(`p`,null,[o(`Dimensions with `),n(`code`,null,`categories`),o(` get a category axis, the others a value axis fitting the data unless given a `),n(`code`,null,`min`),o(` and `),n(`code`,null,`max`),o(`. Dragging along an axis selects a range of it: lines outside every selected range fade out. A `),n(`code`,null,`null`),o(` value leaves a gap in its line.`)])],-1)]),_:1})}var u=s(c,[[`render`,l]]);export{u as default};