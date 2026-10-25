import{N as e,U as t,c as n,k as r,m as i,p as a,s as o}from"./runtime-core.esm-bundler-C7C7Sr-n.js";import{n as s}from"./index-DoPLe3sE.js";var c={};function l(s,c){let l=e(`component-info`),u=e(`pf-chart-area`),d=e(`story-canvas`),f=e(`doc-page`);return r(),n(f,{name:`Charts/AreaChart.story.vue`,title:`Area chart`},{description:t(()=>[...c[0]||=[a(`An `,-1),o(`b`,null,`area chart`,-1),a(` shows a quantity over time, filling the area below each line.`,-1)]]),apidocs:t(()=>[i(l,{name:`PfChartArea`,doc:{name:`PfChartArea`,exportName:`default`,displayName:`ChartArea`,description:``,tags:{},props:[{name:`brush`,description:"Lets the user select a range of the independent axis (areas, for scatter charts) with buttons next to the\ntoolbox, fading the data outside of it and emitting `brushselected` -- see https://echarts.apache.org/en/option.html#brush",required:!1,type:{name:`boolean`}},{name:`timelineAutoplay`,description:`Plays the timeline, unless the user prefers reduced motion`,required:!1,type:{name:`boolean`}},{name:`timeline`,description:"Frames of the chart, shown one at a time with a timeline to switch between them; they replace `series`\n-- see https://echarts.apache.org/en/option.html#timeline",required:!1,type:{name:`Array`,elements:[{name:`ChartTimelineFrame`}]}},{name:`polar`,description:`Draws the series on polar coordinates: the categories around the circle and the values from its center or, when
horizontal, the categories as rings and the values around them. Axis labels don't apply.`,required:!1,type:{name:`boolean`}},{name:`zoomable`,description:`Lets the user zoom into the independent axis, with a slider and with the mouse wheel while holding Ctrl (or by
pinching), so the wheel still scrolls the page -- see https://echarts.apache.org/en/option.html#dataZoom`,required:!1,type:{name:`boolean`}},{name:`yAxisLabel`,description:`Label of the dependent (value) axis`,required:!1,type:{name:`string`}},{name:`xAxisLabel`,description:`Label of the independent (category) axis`,required:!1,type:{name:`string`}},{name:`horizontal`,description:`Swaps the axes, drawing the series horizontally`,required:!1,type:{name:`boolean`}},{name:`thresholds`,description:`Threshold lines drawn over the series as dashed lines, like patternfly-react's ChartThreshold`,required:!1,type:{name:`Array`,elements:[{name:`ChartSeries`}]}},{name:`series`,description:`The series to draw`,required:!1,type:{name:`Array`,elements:[{name:`ChartSeries`}]}},{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`legendPosition`,description:"Position of the legend, `none` hiding it. Defaults to `right`, except for donut and bullet charts, which only\nshow a legend (on the right) when `legendData` is set.",required:!1,type:{name:`ChartLegendPosition`}},{name:`legendOrientation`,description:`Orientation of the legend; defaults to vertical for a right aligned legend and horizontal otherwise`,required:!1,type:{name:`union`,elements:[{name:`"horizontal"`},{name:`"vertical"`}]}},{name:`legendData`,description:`Legend entries; defaults to the series (or data) names`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors -- see https://echarts.apache.org/en/option.html#aria.decal`,required:!1,type:{name:`boolean`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it -- see https://echarts.apache.org/en/option.html#toolbox`,required:!1,type:{name:`boolean`}},{name:`option`,description:`ECharts option deep merged over the generated option, as an escape hatch for anything the props don't cover`,required:!1,type:{name:`ChartsOption`}},{name:`stacked`,description:`Stacks the areas on top of each other, like patternfly-react's ChartStack`,required:!1,type:{name:`boolean`}},{name:`showSymbol`,description:`Draws a point for each data point`,required:!1,type:{name:`boolean`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`},{name:`brushselected`,type:{names:[`ChartBrushSelectedEvent`]},description:`Emitted when the brushed areas change -- see https://echarts.apache.org/en/api.html#events.brushselected`}],sourceFiles:[`packages/charts/src/ChartArea.vue`]}})]),default:t(()=>[c[1]||=o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[a(`Note: charts live in their own package at `),o(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),a(`!`)]),o(`p`,null,[a(`The charts are based on `),o(`a`,{href:`https://echarts.apache.org/`},`Apache ECharts`),a(`, with PatternFly theming. Every chart wrapper registers the ECharts modules it needs: the only setup is importing `),o(`code`,null,`@patternfly/patternfly/patternfly-charts.css`),a(`, which defines the chart colors.`)]),o(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),i(d,{title:`Basic with right aligned legend`,source:`<pf-chart-area
aria-label="Area chart example"
:height="200"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 4 },
      { x: '2017', y: 8 },
      { x: '2018', y: 6 },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: '2015', y: 2 },
      { x: '2016', y: 3 },
      { x: '2017', y: 4 },
      { x: '2018', y: 5 },
      { x: '2019', y: 6 },
    ],
  },
  {
    name: 'Birds',
    data: [
      { x: '2015', y: 1 },
      { x: '2016', y: 2 },
      { x: '2017', y: 3 },
      { x: '2018', y: 2 },
      { x: '2019', y: 4 },
    ],
  },
]" />`},{default:t(()=>[i(u,{"aria-label":`Area chart example`,height:200,series:[{name:`Cats`,data:[{x:`2015`,y:3},{x:`2016`,y:4},{x:`2017`,y:8},{x:`2018`,y:6}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:3},{x:`2017`,y:4},{x:`2018`,y:5},{x:`2019`,y:6}]},{name:`Birds`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:3},{x:`2018`,y:2},{x:`2019`,y:4}]}]})]),_:1}),i(d,{title:`Teal with bottom aligned legend and axis label`,source:`<pf-chart-area
aria-label="Area chart example"
:height="250"
legend-position="bottom"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 4 },
      { x: '2017', y: 8 },
      { x: '2018', y: 6 },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: '2015', y: 2 },
      { x: '2016', y: 3 },
      { x: '2017', y: 4 },
      { x: '2018', y: 5 },
      { x: '2019', y: 6 },
    ],
  },
  {
    name: 'Birds',
    data: [
      { x: '2015', y: 1 },
      { x: '2016', y: 2 },
      { x: '2017', y: 3 },
      { x: '2018', y: 2 },
      { x: '2019', y: 4 },
    ],
  },
]"
theme-color="teal"
x-axis-label="Years" />`},{default:t(()=>[i(u,{"aria-label":`Area chart example`,height:250,"legend-position":`bottom`,series:[{name:`Cats`,data:[{x:`2015`,y:3},{x:`2016`,y:4},{x:`2017`,y:8},{x:`2018`,y:6}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:3},{x:`2017`,y:4},{x:`2018`,y:5},{x:`2019`,y:6}]},{name:`Birds`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:3},{x:`2018`,y:2},{x:`2019`,y:4}]}],"theme-color":`teal`,"x-axis-label":`Years`})]),_:1}),i(d,{title:`Multi-color (unordered) bottom-left aligned legend, stacked`,source:`<pf-chart-area
aria-label="Area chart example"
:height="250"
legend-position="bottom-left"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 4 },
      { x: '2017', y: 8 },
      { x: '2018', y: 6 },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: '2015', y: 2 },
      { x: '2016', y: 3 },
      { x: '2017', y: 4 },
      { x: '2018', y: 5 },
      { x: '2019', y: 6 },
    ],
  },
  {
    name: 'Birds',
    data: [
      { x: '2015', y: 1 },
      { x: '2016', y: 2 },
      { x: '2017', y: 3 },
      { x: '2018', y: 2 },
      { x: '2019', y: 4 },
    ],
  },
]"
stacked
theme-color="multi-unordered" />`},{default:t(()=>[i(u,{"aria-label":`Area chart example`,height:250,"legend-position":`bottom-left`,series:[{name:`Cats`,data:[{x:`2015`,y:3},{x:`2016`,y:4},{x:`2017`,y:8},{x:`2018`,y:6}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:3},{x:`2017`,y:4},{x:`2018`,y:5},{x:`2019`,y:6}]},{name:`Birds`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:3},{x:`2018`,y:2},{x:`2019`,y:4}]}],stacked:``,"theme-color":`multi-unordered`})]),_:1}),i(d,{title:`With threshold`,source:`<pf-chart-area
aria-label="Area chart with threshold example"
:height="250"
legend-position="bottom"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 4 },
      { x: '2017', y: 8 },
      { x: '2018', y: 6 },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: '2015', y: 2 },
      { x: '2016', y: 3 },
      { x: '2017', y: 4 },
      { x: '2018', y: 5 },
      { x: '2019', y: 6 },
    ],
  },
  {
    name: 'Birds',
    data: [
      { x: '2015', y: 1 },
      { x: '2016', y: 2 },
      { x: '2017', y: 3 },
      { x: '2018', y: 2 },
      { x: '2019', y: 4 },
    ],
  },
]"
:thresholds="[
  {
    name: 'Cats threshold',
    data: [
      { x: '2015', y: 5 },
      { x: '2016', y: 5 },
      { x: '2017', y: 6 },
      { x: '2018', y: 6 },
      { x: '2019', y: 6 },
    ],
  },
]"
theme-color="multi-unordered" />`},{default:t(()=>[i(u,{"aria-label":`Area chart with threshold example`,height:250,"legend-position":`bottom`,series:[{name:`Cats`,data:[{x:`2015`,y:3},{x:`2016`,y:4},{x:`2017`,y:8},{x:`2018`,y:6}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:3},{x:`2017`,y:4},{x:`2018`,y:5},{x:`2019`,y:6}]},{name:`Birds`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:3},{x:`2018`,y:2},{x:`2019`,y:4}]}],thresholds:[{name:`Cats threshold`,data:[{x:`2015`,y:5},{x:`2016`,y:5},{x:`2017`,y:6},{x:`2018`,y:6},{x:`2019`,y:6}]}],"theme-color":`multi-unordered`})]),_:1}),c[2]||=o(`div`,{class:`markdown pf-v6-c-content`},[o(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),o(`ul`,null,[o(`li`,null,[o(`code`,null,`ChartStack`),a(` and `),o(`code`,null,`ChartGroup`),a(` are not separate components: pass several `),o(`code`,null,`series`),a(` and set `),o(`code`,null,`stacked`),a(` to stack them.`)]),o(`li`,null,[o(`code`,null,`ChartThreshold`),a(` is the `),o(`code`,null,`thresholds`),a(` prop, drawing dashed lines over the series.`)]),o(`li`,null,[a(`Victory's `),o(`code`,null,`padding`),a(`, `),o(`code`,null,`domain`),a(` and custom `),o(`code`,null,`*Component`),a(` props have no equivalent: anything the props don't cover can be set through `),o(`code`,null,`option`),a(`, which is deep merged over the generated `),o(`a`,{href:`https://echarts.apache.org/en/option.html`},`ECharts option`),a(`.`)])])],-1)]),_:1})}var u=s(c,[[`render`,l]]);export{u as default};