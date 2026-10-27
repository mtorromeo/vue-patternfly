import{F as e,G as t,c as n,h as r,j as i,l as a,m as o}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{n as s}from"./index-Cl3hMFDe.js";var c={};function l(s,c){let l=e(`component-info`),u=e(`pf-chart-scatter`),d=e(`story-canvas`),f=e(`pf-chart-line`),p=e(`pf-chart-area`),m=e(`doc-page`);return i(),a(m,{name:`Charts/ScatterChart.story.vue`,title:`Scatter chart`},{description:t(()=>[...c[0]||=[o(`A `,-1),n(`b`,null,`scatter chart`,-1),o(` plots individual data points, showing the relationship between two values.`,-1)]]),apidocs:t(()=>[r(l,{name:`PfChartScatter`,doc:{name:`PfChartScatter`,exportName:`default`,displayName:`ChartScatter`,description:``,tags:{},props:[{name:`brush`,description:"Lets the user select a range of the independent axis (areas, for scatter charts) with buttons next to the\ntoolbox, fading the data outside of it and emitting `brushselected` -- see https://echarts.apache.org/en/option.html#brush",required:!1,type:{name:`boolean`}},{name:`timelineAutoplay`,description:`Plays the timeline, unless the user prefers reduced motion`,required:!1,type:{name:`boolean`}},{name:`timeline`,description:"Frames of the chart, shown one at a time with a timeline to switch between them; they replace `series`\n-- see https://echarts.apache.org/en/option.html#timeline",required:!1,type:{name:`Array`,elements:[{name:`ChartTimelineFrame`}]}},{name:`polar`,description:`Draws the series on polar coordinates: the categories around the circle and the values from its center or, when
horizontal, the categories as rings and the values around them. Axis labels don't apply.`,required:!1,type:{name:`boolean`}},{name:`zoomable`,description:`Lets the user zoom into the independent axis, with a slider and with the mouse wheel while holding Ctrl (or by
pinching), so the wheel still scrolls the page -- see https://echarts.apache.org/en/option.html#dataZoom`,required:!1,type:{name:`boolean`}},{name:`yAxisLabel`,description:`Label of the dependent (value) axis`,required:!1,type:{name:`string`}},{name:`xAxisLabel`,description:`Label of the independent (category) axis`,required:!1,type:{name:`string`}},{name:`horizontal`,description:`Swaps the axes, drawing the series horizontally`,required:!1,type:{name:`boolean`}},{name:`thresholds`,description:`Threshold lines drawn over the series as dashed lines, like patternfly-react's ChartThreshold`,required:!1,type:{name:`Array`,elements:[{name:`ChartSeries`}]}},{name:`series`,description:`The series to draw`,required:!1,type:{name:`Array`,elements:[{name:`ChartSeries`}]}},{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`legendPosition`,description:"Position of the legend, `none` hiding it. Defaults to `right`, except for donut and bullet charts, which only\nshow a legend (on the right) when `legendData` is set.",required:!1,type:{name:`ChartLegendPosition`}},{name:`legendOrientation`,description:`Orientation of the legend; defaults to vertical for a right aligned legend and horizontal otherwise`,required:!1,type:{name:`union`,elements:[{name:`"horizontal"`},{name:`"vertical"`}]}},{name:`legendData`,description:`Legend entries; defaults to the series (or data) names`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors -- see https://echarts.apache.org/en/option.html#aria.decal`,required:!1,type:{name:`boolean`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it -- see https://echarts.apache.org/en/option.html#toolbox`,required:!1,type:{name:`boolean`}},{name:`option`,description:`ECharts option deep merged over the generated option, as an escape hatch for anything the props don't cover`,required:!1,type:{name:`ChartsOption`}},{name:`effect`,description:`Draws ripples around the points, unless the user prefers reduced motion`,required:!1,type:{name:`boolean`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`},{name:`brushselected`,type:{names:[`ChartBrushSelectedEvent`]},description:`Emitted when the brushed areas change -- see https://echarts.apache.org/en/api.html#events.brushselected`}],sourceFiles:[`packages/charts/src/ChartScatter.vue`]}})]),default:t(()=>[c[1]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[o(`Note: charts live in their own package at `),n(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),o(`!`)]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),r(d,{title:`Basic`,source:`<pf-chart-scatter
aria-label="Scatter chart example"
:height="275"
:series="[
  {
    name: 'Cats',
    data: [
      { x: 2015, y: 1 },
      { x: 2016, y: 2 },
      { x: 2017, y: 5 },
      { x: 2018, y: 3 },
      { x: 2019, y: 4 },
    ],
  },
]" />`},{default:t(()=>[r(u,{"aria-label":`Scatter chart example`,height:275,series:[{name:`Cats`,data:[{x:2015,y:1},{x:2016,y:2},{x:2017,y:5},{x:2018,y:3},{x:2019,y:4}]}]})]),_:1}),r(d,{title:`With ripples`,source:`<pf-chart-scatter
aria-label="Scatter chart example"
effect
:height="275"
:series="[
  {
    name: 'Cats',
    data: [
      { x: 2015, y: 1 },
      { x: 2016, y: 2 },
      { x: 2017, y: 5 },
      { x: 2018, y: 3 },
      { x: 2019, y: 4 },
    ],
  },
]" />`},{default:t(()=>[r(u,{"aria-label":`Scatter chart example`,effect:``,height:275,series:[{name:`Cats`,data:[{x:2015,y:1},{x:2016,y:2},{x:2017,y:5},{x:2018,y:3},{x:2019,y:4}]}]})]),_:1}),r(d,{title:`Brushable, with toolbox`,source:`<pf-chart-scatter
  aria-label="Brushable scatter chart example"
  brush
  :height="300"
  :series="[
    {
      name: 'Cats',
      data: Array.from({ length: 60 }, (_, index) => ({
        x: Math.round(((index * 37) % 100) * 10) / 10,
        y: Math.round(((index * 53) % 80) * 10) / 10 + 10,
      })),
    },
  ]"
  toolbox
></pf-chart-scatter>`},{default:t(()=>[r(u,{"aria-label":`Brushable scatter chart example`,brush:``,height:300,series:[{name:`Cats`,data:Array.from({length:60},(e,t)=>({x:Math.round(t*37%100*10)/10,y:Math.round(t*53%80*10)/10+10}))}],toolbox:``},null,8,[`series`])]),_:1}),r(d,{title:`Line chart with points`,source:`<pf-chart-line
aria-label="Line chart example"
:height="275"
legend-position="bottom"
:series="[
  {
    name: 'Cats',
    data: [
      { x: 2015, y: 1 },
      { x: 2016, y: 2 },
      { x: 2017, y: 5 },
      { x: 2018, y: 3 },
      { x: 2019, y: 4 },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: 2015, y: 2 },
      { x: 2016, y: 1 },
      { x: 2017, y: 7 },
      { x: 2018, y: 4 },
      { x: 2019, y: 3 },
    ],
  },
]"
show-symbol />`},{default:t(()=>[r(f,{"aria-label":`Line chart example`,height:275,"legend-position":`bottom`,series:[{name:`Cats`,data:[{x:2015,y:1},{x:2016,y:2},{x:2017,y:5},{x:2018,y:3},{x:2019,y:4}]},{name:`Dogs`,data:[{x:2015,y:2},{x:2016,y:1},{x:2017,y:7},{x:2018,y:4},{x:2019,y:3}]}],"show-symbol":``})]),_:1}),r(d,{title:`Area chart with points`,source:`<pf-chart-area
aria-label="Area chart example"
:height="275"
legend-position="bottom"
:series="[
  {
    name: 'Cats',
    data: [
      { x: 2015, y: 1 },
      { x: 2016, y: 2 },
      { x: 2017, y: 5 },
      { x: 2018, y: 3 },
      { x: 2019, y: 4 },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: 2015, y: 2 },
      { x: 2016, y: 1 },
      { x: 2017, y: 7 },
      { x: 2018, y: 4 },
      { x: 2019, y: 3 },
    ],
  },
]"
show-symbol
theme-color="multi-unordered" />`},{default:t(()=>[r(p,{"aria-label":`Area chart example`,height:275,"legend-position":`bottom`,series:[{name:`Cats`,data:[{x:2015,y:1},{x:2016,y:2},{x:2017,y:5},{x:2018,y:3},{x:2019,y:4}]},{name:`Dogs`,data:[{x:2015,y:2},{x:2016,y:1},{x:2017,y:7},{x:2018,y:4},{x:2019,y:3}]}],"show-symbol":``,"theme-color":`multi-unordered`})]),_:1}),c[2]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`p`,null,[o(`Victory overlays a `),n(`code`,null,`ChartScatter`),o(` on lines and areas to draw their points; with ECharts it is the `),n(`code`,null,`show-symbol`),o(` prop of `),n(`code`,null,`PfChartLine`),o(` and `),n(`code`,null,`PfChartArea`),o(`.`)]),n(`p`,null,[n(`code`,null,`brush`),o(` lets the user select points with a rectangle or a polygon, from the toolbox buttons, fading the others and emitting `),n(`code`,null,`brushselected`),o(`.`)]),n(`p`,null,[n(`code`,null,`effect`),o(` draws ripples around the points (`),n(`a`,{href:`https://echarts.apache.org/en/option.html#series-effectScatter`},`ECharts effect scatter`),o(`), which react-charts can't. They are not drawn when the user prefers reduced motion. To draw them for a single series, give it `),n(`code`,null,`type: 'effectScatter'`),o(` instead.`)])],-1)]),_:1})}var u=s(c,[[`render`,l]]);export{u as default};