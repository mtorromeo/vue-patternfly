import{F as e,K as t,c as n,h as r,j as i,l as a,m as o}from"./runtime-core.esm-bundler-DO1530YC.js";import{n as s}from"./index-CUsetNQE.js";var c={};function l(s,c){let l=e(`component-info`),u=e(`pf-chart-line`),d=e(`story-canvas`),f=e(`doc-page`);return i(),a(f,{name:`Charts/LineChart.story.vue`,title:`Line chart`},{description:t(()=>[...c[0]||=[o(`A `,-1),n(`b`,null,`line chart`,-1),o(` shows how values change over time.`,-1)]]),apidocs:t(()=>[r(l,{name:`PfChartLine`,doc:{name:`PfChartLine`,exportName:`default`,displayName:`ChartLine`,description:``,tags:{},props:[{name:`brush`,description:"Lets the user select a range of the independent axis (areas, for scatter charts) with buttons next to the\ntoolbox, fading the data outside of it and emitting `brushselected` -- see https://echarts.apache.org/en/option.html#brush",required:!1,type:{name:`boolean`}},{name:`timelineAutoplay`,description:`Plays the timeline, unless the user prefers reduced motion`,required:!1,type:{name:`boolean`}},{name:`timeline`,description:"Frames of the chart, shown one at a time with a timeline to switch between them; they replace `series`\n-- see https://echarts.apache.org/en/option.html#timeline",required:!1,type:{name:`Array`,elements:[{name:`ChartTimelineFrame`}]}},{name:`polar`,description:`Draws the series on polar coordinates: the categories around the circle and the values from its center or, when
horizontal, the categories as rings and the values around them. Axis labels don't apply.`,required:!1,type:{name:`boolean`}},{name:`zoomable`,description:`Lets the user zoom into the independent axis, with a slider and with the mouse wheel while holding Ctrl (or by
pinching), so the wheel still scrolls the page -- see https://echarts.apache.org/en/option.html#dataZoom`,required:!1,type:{name:`boolean`}},{name:`yAxisLabel`,description:`Label of the dependent (value) axis`,required:!1,type:{name:`string`}},{name:`xAxisLabel`,description:`Label of the independent (category) axis`,required:!1,type:{name:`string`}},{name:`horizontal`,description:`Swaps the axes, drawing the series horizontally`,required:!1,type:{name:`boolean`}},{name:`thresholds`,description:`Threshold lines drawn over the series as dashed lines, like patternfly-react's ChartThreshold`,required:!1,type:{name:`Array`,elements:[{name:`ChartSeries`}]}},{name:`series`,description:`The series to draw`,required:!1,type:{name:`Array`,elements:[{name:`ChartSeries`}]}},{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`legendPosition`,description:"Position of the legend, `none` hiding it. Defaults to `right`, except for donut and bullet charts, which only\nshow a legend (on the right) when `legendData` is set.",required:!1,type:{name:`ChartLegendPosition`}},{name:`legendOrientation`,description:`Orientation of the legend; defaults to vertical for a right aligned legend and horizontal otherwise`,required:!1,type:{name:`union`,elements:[{name:`"horizontal"`},{name:`"vertical"`}]}},{name:`legendData`,description:`Legend entries; defaults to the series (or data) names`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors -- see https://echarts.apache.org/en/option.html#aria.decal`,required:!1,type:{name:`boolean`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it -- see https://echarts.apache.org/en/option.html#toolbox`,required:!1,type:{name:`boolean`}},{name:`option`,description:`ECharts option deep merged over the generated option, as an escape hatch for anything the props don't cover`,required:!1,type:{name:`ChartsOption`}},{name:`showSymbol`,description:`Draws a point for each data point`,required:!1,type:{name:`boolean`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`},{name:`brushselected`,type:{names:[`ChartBrushSelectedEvent`]},description:`Emitted when the brushed areas change -- see https://echarts.apache.org/en/api.html#events.brushselected`}],sourceFiles:[`packages/charts/src/ChartLine.vue`]}})]),default:t(()=>[c[1]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[o(`Note: charts live in their own package at `),n(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),o(`!`)]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),r(d,{title:`Basic with right aligned legend`,source:`<pf-chart-line
aria-label="Line chart example"
:height="250"
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
    lineStyle: { type: 'dashed' },
  },
  {
    name: 'Birds',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 4 },
      { x: '2017', y: 9 },
      { x: '2018', y: 5 },
    ],
  },
  {
    name: 'Mice',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 3 },
      { x: '2017', y: 8 },
      { x: '2018', y: 7 },
    ],
  },
]" />`},{default:t(()=>[r(u,{"aria-label":`Line chart example`,height:250,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}],lineStyle:{type:`dashed`}},{name:`Birds`,data:[{x:`2015`,y:3},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:5}]},{name:`Mice`,data:[{x:`2015`,y:3},{x:`2016`,y:3},{x:`2017`,y:8},{x:`2018`,y:7}]}]})]),_:1}),r(d,{title:`Green with bottom aligned legend`,source:`<pf-chart-line
aria-label="Line chart example"
:height="275"
legend-position="bottom"
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
    lineStyle: { type: 'dashed' },
  },
  {
    name: 'Birds',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 4 },
      { x: '2017', y: 9 },
      { x: '2018', y: 5 },
    ],
  },
  {
    name: 'Mice',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 3 },
      { x: '2017', y: 8 },
      { x: '2018', y: 7 },
    ],
  },
]"
theme-color="green"
x-axis-label="Years"
y-axis-label="Pets" />`},{default:t(()=>[r(u,{"aria-label":`Line chart example`,height:275,"legend-position":`bottom`,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}],lineStyle:{type:`dashed`}},{name:`Birds`,data:[{x:`2015`,y:3},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:5}]},{name:`Mice`,data:[{x:`2015`,y:3},{x:`2016`,y:3},{x:`2017`,y:8},{x:`2018`,y:7}]}],"theme-color":`green`,"x-axis-label":`Years`,"y-axis-label":`Pets`})]),_:1}),r(d,{title:`Without legend`,source:`<pf-chart-line
aria-label="Line chart example"
:height="250"
legend-position="none"
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
    lineStyle: { type: 'dashed' },
  },
  {
    name: 'Birds',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 4 },
      { x: '2017', y: 9 },
      { x: '2018', y: 5 },
    ],
  },
  {
    name: 'Mice',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 3 },
      { x: '2017', y: 8 },
      { x: '2018', y: 7 },
    ],
  },
]" />`},{default:t(()=>[r(u,{"aria-label":`Line chart example`,height:250,"legend-position":`none`,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}],lineStyle:{type:`dashed`}},{name:`Birds`,data:[{x:`2015`,y:3},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:5}]},{name:`Mice`,data:[{x:`2015`,y:3},{x:`2016`,y:3},{x:`2017`,y:8},{x:`2018`,y:7}]}]})]),_:1}),r(d,{title:`Multi-color (unordered) with points`,source:`<pf-chart-line
aria-label="Line chart example"
:height="275"
legend-position="bottom-left"
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
    lineStyle: { type: 'dashed' },
  },
  {
    name: 'Birds',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 4 },
      { x: '2017', y: 9 },
      { x: '2018', y: 5 },
    ],
  },
  {
    name: 'Mice',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 3 },
      { x: '2017', y: 8 },
      { x: '2018', y: 7 },
    ],
  },
]"
show-symbol
theme-color="multi-unordered" />`},{default:t(()=>[r(u,{"aria-label":`Line chart example`,height:275,"legend-position":`bottom-left`,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}],lineStyle:{type:`dashed`}},{name:`Birds`,data:[{x:`2015`,y:3},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:5}]},{name:`Mice`,data:[{x:`2015`,y:3},{x:`2016`,y:3},{x:`2017`,y:8},{x:`2018`,y:7}]}],"show-symbol":``,"theme-color":`multi-unordered`})]),_:1}),r(d,{title:`Zoomable, with toolbox`,source:`<pf-chart-line
  aria-label="Zoomable line chart example"
  :height="325"
  legend-position="bottom"
  :series="[
    {
      name: 'Requests',
      data: Array.from({ length: 365 }, (_, day) => ({
        x: new Date(2026, 0, day + 1),
        y: Math.round(500 + 300 * Math.sin(day / 10) + 100 * Math.cos(day / 3)),
      })),
    },
  ]"
  toolbox
  zoomable
></pf-chart-line>`},{default:t(()=>[r(u,{"aria-label":`Zoomable line chart example`,height:325,"legend-position":`bottom`,series:[{name:`Requests`,data:Array.from({length:365},(e,t)=>({x:new Date(2026,0,t+1),y:Math.round(500+300*Math.sin(t/10)+100*Math.cos(t/3))}))}],toolbox:``,zoomable:``},null,8,[`series`])]),_:1}),r(d,{title:`Polar`,source:`<pf-chart-line
aria-label="Polar line chart example"
:height="350"
polar
:series="[
  {
    name: 'Cats',
    data: [
      { x: 'Mon', y: 3 },
      { x: 'Tue', y: 5 },
      { x: 'Wed', y: 4 },
      { x: 'Thu', y: 7 },
      { x: 'Fri', y: 6 },
      { x: 'Sat', y: 9 },
      { x: 'Sun', y: 8 },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: 'Mon', y: 6 },
      { x: 'Tue', y: 4 },
      { x: 'Wed', y: 7 },
      { x: 'Thu', y: 3 },
      { x: 'Fri', y: 5 },
      { x: 'Sat', y: 4 },
      { x: 'Sun', y: 6 },
    ],
  },
]"
show-symbol
theme-color="multi-ordered" />`},{default:t(()=>[r(u,{"aria-label":`Polar line chart example`,height:350,polar:``,series:[{name:`Cats`,data:[{x:`Mon`,y:3},{x:`Tue`,y:5},{x:`Wed`,y:4},{x:`Thu`,y:7},{x:`Fri`,y:6},{x:`Sat`,y:9},{x:`Sun`,y:8}]},{name:`Dogs`,data:[{x:`Mon`,y:6},{x:`Tue`,y:4},{x:`Wed`,y:7},{x:`Thu`,y:3},{x:`Fri`,y:5},{x:`Sat`,y:4},{x:`Sun`,y:6}]}],"show-symbol":``,"theme-color":`multi-ordered`})]),_:1}),c[2]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`ul`,null,[n(`li`,null,[o(`Zooming (`),n(`code`,null,`zoomable`),o(`) uses the ECharts `),n(`a`,{href:`https://echarts.apache.org/en/option.html#dataZoom`},`data zoom`),o(`, where Victory uses a zoom container: the slider zooms into the independent axis, as does the mouse wheel while holding Ctrl (or a pinch), so the wheel alone still scrolls the page.`)]),n(`li`,null,[n(`code`,null,`toolbox`),o(` adds buttons to save the chart as an image (SVG with the default SVG renderer) and to restore it.`)]),n(`li`,null,[n(`code`,null,`polar`),o(` draws the series on polar coordinates, which react-charts can't.`)])])],-1)]),_:1})}var u=s(c,[[`render`,l]]);export{u as default};