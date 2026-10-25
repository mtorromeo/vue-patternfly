import{N as e,U as t,c as n,k as r,m as i,p as a,s as o}from"./runtime-core.esm-bundler-C7C7Sr-n.js";import{n as s}from"./index-DoPLe3sE.js";var c={};function l(s,c){let l=e(`component-info`),u=e(`pf-chart-radar`),d=e(`story-canvas`),f=e(`doc-page`);return r(),n(f,{name:`Charts/RadarChart.story.vue`,title:`Radar chart`},{description:t(()=>[...c[0]||=[a(`A `,-1),o(`b`,null,`radar chart`,-1),a(` compares several series over multiple dimensions, each drawn as a polygon on axes radiating from the center.`,-1)]]),apidocs:t(()=>[i(l,{name:`PfChartRadar`,doc:{name:`PfChartRadar`,exportName:`default`,displayName:`ChartRadar`,description:``,tags:{},props:[{name:`option`,description:`ECharts option deep merged over the generated option, as an escape hatch for anything the props don't cover`,required:!1,type:{name:`ChartsOption`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it -- see https://echarts.apache.org/en/option.html#toolbox`,required:!1,type:{name:`boolean`}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors -- see https://echarts.apache.org/en/option.html#aria.decal`,required:!1,type:{name:`boolean`}},{name:`legendData`,description:`Legend entries; defaults to the series (or data) names`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`legendOrientation`,description:`Orientation of the legend; defaults to vertical for a right aligned legend and horizontal otherwise`,required:!1,type:{name:`union`,elements:[{name:`"horizontal"`},{name:`"vertical"`}]}},{name:`legendPosition`,description:"Position of the legend, `none` hiding it. Defaults to `right`, except for donut and bullet charts, which only\nshow a legend (on the right) when `legendData` is set.",required:!1,type:{name:`ChartLegendPosition`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`indicators`,description:`The axes, as names or with their range`,required:!1,type:{name:`Array`,elements:[{name:`TSParenthesizedType`}]}},{name:`series`,description:`The series to draw, each as a polygon with one value per indicator`,required:!1,type:{name:`Array`,elements:[{name:`ChartRadarSeries`}]}},{name:`shape`,description:`Shape of the grid`,required:!1,type:{name:`union`,elements:[{name:`"polygon"`},{name:`"circle"`}]}},{name:`filled`,description:`Fills the area of each series`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`levels`,description:`Number of grid levels`,required:!1,type:{name:`number`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartRadar.vue`]}})]),default:t(()=>[c[1]||=o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[a(`Note: charts live in their own package at `),o(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),a(`!`)]),o(`p`,null,[a(`patternfly-react has no radar chart: `),o(`code`,null,`PfChartRadar`),a(` is based on the ECharts `),o(`a`,{href:`https://echarts.apache.org/en/option.html#series-radar`},`radar series`),a(`. Each series has one value per indicator, in the same order.`)]),o(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),i(d,{title:`Basic with right aligned legend`,source:`<pf-chart-radar
aria-label="Radar chart example"
:height="300"
:indicators="[
  { name: 'CPU', max: 100 },
  { name: 'Memory', max: 100 },
  { name: 'Disk', max: 100 },
  { name: 'Network', max: 100 },
  { name: 'GPU', max: 100 },
]"
:series="[
  { name: 'Node 1', data: [60, 70, 30, 80, 20] },
  { name: 'Node 2', data: [40, 30, 90, 50, 60] },
]" />`},{default:t(()=>[i(u,{"aria-label":`Radar chart example`,height:300,indicators:[{name:`CPU`,max:100},{name:`Memory`,max:100},{name:`Disk`,max:100},{name:`Network`,max:100},{name:`GPU`,max:100}],series:[{name:`Node 1`,data:[60,70,30,80,20]},{name:`Node 2`,data:[40,30,90,50,60]}]})]),_:1}),i(d,{title:`Multi-color (ordered) with bottom aligned legend`,source:`<pf-chart-radar
aria-label="Radar chart example"
:height="350"
:indicators="[
  { name: 'CPU', max: 100 },
  { name: 'Memory', max: 100 },
  { name: 'Disk', max: 100 },
  { name: 'Network', max: 100 },
  { name: 'GPU', max: 100 },
]"
legend-position="bottom"
:series="[
  { name: 'Node 1', data: [60, 70, 30, 80, 20] },
  { name: 'Node 2', data: [40, 30, 90, 50, 60] },
  { name: 'Node 3', data: [80, 50, 60, 30, 70] },
]"
theme-color="multi-ordered" />`},{default:t(()=>[i(u,{"aria-label":`Radar chart example`,height:350,indicators:[{name:`CPU`,max:100},{name:`Memory`,max:100},{name:`Disk`,max:100},{name:`Network`,max:100},{name:`GPU`,max:100}],"legend-position":`bottom`,series:[{name:`Node 1`,data:[60,70,30,80,20]},{name:`Node 2`,data:[40,30,90,50,60]},{name:`Node 3`,data:[80,50,60,30,70]}],"theme-color":`multi-ordered`})]),_:1}),i(d,{title:`Circle without fill`,source:`<pf-chart-radar
aria-label="Radar chart example"
:filled="false"
:height="300"
:indicators="[
  { name: 'CPU', max: 100 },
  { name: 'Memory', max: 100 },
  { name: 'Disk', max: 100 },
  { name: 'Network', max: 100 },
  { name: 'GPU', max: 100 },
]"
:levels="4"
:series="[
  { name: 'Node 1', data: [60, 70, 30, 80, 20] },
  { name: 'Node 2', data: [40, 30, 90, 50, 60] },
]"
shape="circle"
theme-color="purple" />`},{default:t(()=>[i(u,{"aria-label":`Radar chart example`,filled:!1,height:300,indicators:[{name:`CPU`,max:100},{name:`Memory`,max:100},{name:`Disk`,max:100},{name:`Network`,max:100},{name:`GPU`,max:100}],levels:4,series:[{name:`Node 1`,data:[60,70,30,80,20]},{name:`Node 2`,data:[40,30,90,50,60]}],shape:`circle`,"theme-color":`purple`})]),_:1}),i(d,{title:`Skeleton`,source:`<pf-chart-radar
aria-label="Radar chart skeleton example"
:height="300"
:indicators="[
  { name: 'CPU', max: 100 },
  { name: 'Memory', max: 100 },
  { name: 'Disk', max: 100 },
  { name: 'Network', max: 100 },
  { name: 'GPU', max: 100 },
]"
:series="[
  { name: 'Node 1', data: [60, 70, 30, 80, 20] },
  { name: 'Node 2', data: [40, 30, 90, 50, 60] },
]"
theme-color="skeleton" />`},{default:t(()=>[i(u,{"aria-label":`Radar chart skeleton example`,height:300,indicators:[{name:`CPU`,max:100},{name:`Memory`,max:100},{name:`Disk`,max:100},{name:`Network`,max:100},{name:`GPU`,max:100}],series:[{name:`Node 1`,data:[60,70,30,80,20]},{name:`Node 2`,data:[40,30,90,50,60]}],"theme-color":`skeleton`})]),_:1})]),_:1})}var u=s(c,[[`render`,l]]);export{u as default};