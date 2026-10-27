import{F as e,G as t,c as n,h as r,j as i,l as a,m as o}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{n as s}from"./index-Cl3hMFDe.js";var c={};function l(s,c){let l=e(`component-info`),u=e(`pf-chart-theme-river`),d=e(`story-canvas`),f=e(`doc-page`);return i(),a(f,{name:`Charts/ThemeRiverChart.story.vue`,title:`Theme river chart`},{description:t(()=>[...c[0]||=[o(`A `,-1),n(`b`,null,`theme river`,-1),o(` shows how several values change over time as streams flowing along a time axis, each as wide as its value.`,-1)]]),apidocs:t(()=>[r(l,{name:`PfChartThemeRiver`,doc:{name:`PfChartThemeRiver`,exportName:`default`,displayName:`ChartThemeRiver`,description:``,tags:{},props:[{name:`option`,description:`ECharts option deep merged over the generated option, as an escape hatch for anything the props don't cover`,required:!1,type:{name:`ChartsOption`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it -- see https://echarts.apache.org/en/option.html#toolbox`,required:!1,type:{name:`boolean`}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors -- see https://echarts.apache.org/en/option.html#aria.decal`,required:!1,type:{name:`boolean`}},{name:`legendData`,description:`Legend entries; defaults to the series (or data) names`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`legendOrientation`,description:`Orientation of the legend; defaults to vertical for a right aligned legend and horizontal otherwise`,required:!1,type:{name:`union`,elements:[{name:`"horizontal"`},{name:`"vertical"`}]}},{name:`legendPosition`,description:"Position of the legend, `none` hiding it. Defaults to `right`, except for donut and bullet charts, which only\nshow a legend (on the right) when `legendData` is set.",required:!1,type:{name:`ChartLegendPosition`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`series`,description:"The streams, each with its values over time: `x` is a date (or a number) and `y` the value. ECharts draws them as\na single series, so other series properties don't apply.",required:!1,type:{name:`Array`,elements:[{name:`ChartSeries`}]}},{name:`labels`,description:`Shows the name of each stream before its start`,required:!1,type:{name:`boolean`}},{name:`xAxisLabel`,description:`Label of the time axis`,required:!1,type:{name:`string`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartThemeRiver.vue`]}})]),default:t(()=>[c[1]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[o(`Note: charts live in their own package at `),n(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),o(`!`)]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),r(d,{title:`Basic with right aligned legend`,source:`<pf-chart-theme-river
aria-label="Theme river chart example"
:height="300"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2026-01-01', y: 6 },
      { x: '2026-02-01', y: 8 },
      { x: '2026-03-01', y: 10 },
      { x: '2026-04-01', y: 11 },
      { x: '2026-05-01', y: 11 },
      { x: '2026-06-01', y: 9 },
      { x: '2026-07-01', y: 7 },
      { x: '2026-08-01', y: 4 },
      { x: '2026-09-01', y: 2 },
      { x: '2026-10-01', y: 1 },
      { x: '2026-11-01', y: 1 },
      { x: '2026-12-01', y: 2 },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: '2026-01-01', y: 12 },
      { x: '2026-02-01', y: 13 },
      { x: '2026-03-01', y: 13 },
      { x: '2026-04-01', y: 11 },
      { x: '2026-05-01', y: 9 },
      { x: '2026-06-01', y: 6 },
      { x: '2026-07-01', y: 4 },
      { x: '2026-08-01', y: 3 },
      { x: '2026-09-01', y: 3 },
      { x: '2026-10-01', y: 4 },
      { x: '2026-11-01', y: 7 },
      { x: '2026-12-01', y: 9 },
    ],
  },
  {
    name: 'Birds',
    data: [
      { x: '2026-01-01', y: 15 },
      { x: '2026-02-01', y: 13 },
      { x: '2026-03-01', y: 11 },
      { x: '2026-04-01', y: 8 },
      { x: '2026-05-01', y: 6 },
      { x: '2026-06-01', y: 5 },
      { x: '2026-07-01', y: 5 },
      { x: '2026-08-01', y: 6 },
      { x: '2026-09-01', y: 9 },
      { x: '2026-10-01', y: 11 },
      { x: '2026-11-01', y: 13 },
      { x: '2026-12-01', y: 15 },
    ],
  },
  {
    name: 'Mice',
    data: [
      { x: '2026-01-01', y: 13 },
      { x: '2026-02-01', y: 10 },
      { x: '2026-03-01', y: 8 },
      { x: '2026-04-01', y: 7 },
      { x: '2026-05-01', y: 7 },
      { x: '2026-06-01', y: 8 },
      { x: '2026-07-01', y: 11 },
      { x: '2026-08-01', y: 13 },
      { x: '2026-09-01', y: 15 },
      { x: '2026-10-01', y: 17 },
      { x: '2026-11-01', y: 17 },
      { x: '2026-12-01', y: 16 },
    ],
  },
]" />`},{default:t(()=>[r(u,{"aria-label":`Theme river chart example`,height:300,series:[{name:`Cats`,data:[{x:`2026-01-01`,y:6},{x:`2026-02-01`,y:8},{x:`2026-03-01`,y:10},{x:`2026-04-01`,y:11},{x:`2026-05-01`,y:11},{x:`2026-06-01`,y:9},{x:`2026-07-01`,y:7},{x:`2026-08-01`,y:4},{x:`2026-09-01`,y:2},{x:`2026-10-01`,y:1},{x:`2026-11-01`,y:1},{x:`2026-12-01`,y:2}]},{name:`Dogs`,data:[{x:`2026-01-01`,y:12},{x:`2026-02-01`,y:13},{x:`2026-03-01`,y:13},{x:`2026-04-01`,y:11},{x:`2026-05-01`,y:9},{x:`2026-06-01`,y:6},{x:`2026-07-01`,y:4},{x:`2026-08-01`,y:3},{x:`2026-09-01`,y:3},{x:`2026-10-01`,y:4},{x:`2026-11-01`,y:7},{x:`2026-12-01`,y:9}]},{name:`Birds`,data:[{x:`2026-01-01`,y:15},{x:`2026-02-01`,y:13},{x:`2026-03-01`,y:11},{x:`2026-04-01`,y:8},{x:`2026-05-01`,y:6},{x:`2026-06-01`,y:5},{x:`2026-07-01`,y:5},{x:`2026-08-01`,y:6},{x:`2026-09-01`,y:9},{x:`2026-10-01`,y:11},{x:`2026-11-01`,y:13},{x:`2026-12-01`,y:15}]},{name:`Mice`,data:[{x:`2026-01-01`,y:13},{x:`2026-02-01`,y:10},{x:`2026-03-01`,y:8},{x:`2026-04-01`,y:7},{x:`2026-05-01`,y:7},{x:`2026-06-01`,y:8},{x:`2026-07-01`,y:11},{x:`2026-08-01`,y:13},{x:`2026-09-01`,y:15},{x:`2026-10-01`,y:17},{x:`2026-11-01`,y:17},{x:`2026-12-01`,y:16}]}]})]),_:1}),r(d,{title:`Multi-color (ordered) with labels and bottom aligned legend`,source:`<pf-chart-theme-river
aria-label="Theme river chart example"
:height="300"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2026-01-01', y: 6 },
      { x: '2026-02-01', y: 8 },
      { x: '2026-03-01', y: 10 },
      { x: '2026-04-01', y: 11 },
      { x: '2026-05-01', y: 11 },
      { x: '2026-06-01', y: 9 },
      { x: '2026-07-01', y: 7 },
      { x: '2026-08-01', y: 4 },
      { x: '2026-09-01', y: 2 },
      { x: '2026-10-01', y: 1 },
      { x: '2026-11-01', y: 1 },
      { x: '2026-12-01', y: 2 },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: '2026-01-01', y: 12 },
      { x: '2026-02-01', y: 13 },
      { x: '2026-03-01', y: 13 },
      { x: '2026-04-01', y: 11 },
      { x: '2026-05-01', y: 9 },
      { x: '2026-06-01', y: 6 },
      { x: '2026-07-01', y: 4 },
      { x: '2026-08-01', y: 3 },
      { x: '2026-09-01', y: 3 },
      { x: '2026-10-01', y: 4 },
      { x: '2026-11-01', y: 7 },
      { x: '2026-12-01', y: 9 },
    ],
  },
  {
    name: 'Birds',
    data: [
      { x: '2026-01-01', y: 15 },
      { x: '2026-02-01', y: 13 },
      { x: '2026-03-01', y: 11 },
      { x: '2026-04-01', y: 8 },
      { x: '2026-05-01', y: 6 },
      { x: '2026-06-01', y: 5 },
      { x: '2026-07-01', y: 5 },
      { x: '2026-08-01', y: 6 },
      { x: '2026-09-01', y: 9 },
      { x: '2026-10-01', y: 11 },
      { x: '2026-11-01', y: 13 },
      { x: '2026-12-01', y: 15 },
    ],
  },
  {
    name: 'Mice',
    data: [
      { x: '2026-01-01', y: 13 },
      { x: '2026-02-01', y: 10 },
      { x: '2026-03-01', y: 8 },
      { x: '2026-04-01', y: 7 },
      { x: '2026-05-01', y: 7 },
      { x: '2026-06-01', y: 8 },
      { x: '2026-07-01', y: 11 },
      { x: '2026-08-01', y: 13 },
      { x: '2026-09-01', y: 15 },
      { x: '2026-10-01', y: 17 },
      { x: '2026-11-01', y: 17 },
      { x: '2026-12-01', y: 16 },
    ],
  },
]"
labels
legend-position="bottom"
theme-color="multi-ordered" />`},{default:t(()=>[r(u,{"aria-label":`Theme river chart example`,height:300,series:[{name:`Cats`,data:[{x:`2026-01-01`,y:6},{x:`2026-02-01`,y:8},{x:`2026-03-01`,y:10},{x:`2026-04-01`,y:11},{x:`2026-05-01`,y:11},{x:`2026-06-01`,y:9},{x:`2026-07-01`,y:7},{x:`2026-08-01`,y:4},{x:`2026-09-01`,y:2},{x:`2026-10-01`,y:1},{x:`2026-11-01`,y:1},{x:`2026-12-01`,y:2}]},{name:`Dogs`,data:[{x:`2026-01-01`,y:12},{x:`2026-02-01`,y:13},{x:`2026-03-01`,y:13},{x:`2026-04-01`,y:11},{x:`2026-05-01`,y:9},{x:`2026-06-01`,y:6},{x:`2026-07-01`,y:4},{x:`2026-08-01`,y:3},{x:`2026-09-01`,y:3},{x:`2026-10-01`,y:4},{x:`2026-11-01`,y:7},{x:`2026-12-01`,y:9}]},{name:`Birds`,data:[{x:`2026-01-01`,y:15},{x:`2026-02-01`,y:13},{x:`2026-03-01`,y:11},{x:`2026-04-01`,y:8},{x:`2026-05-01`,y:6},{x:`2026-06-01`,y:5},{x:`2026-07-01`,y:5},{x:`2026-08-01`,y:6},{x:`2026-09-01`,y:9},{x:`2026-10-01`,y:11},{x:`2026-11-01`,y:13},{x:`2026-12-01`,y:15}]},{name:`Mice`,data:[{x:`2026-01-01`,y:13},{x:`2026-02-01`,y:10},{x:`2026-03-01`,y:8},{x:`2026-04-01`,y:7},{x:`2026-05-01`,y:7},{x:`2026-06-01`,y:8},{x:`2026-07-01`,y:11},{x:`2026-08-01`,y:13},{x:`2026-09-01`,y:15},{x:`2026-10-01`,y:17},{x:`2026-11-01`,y:17},{x:`2026-12-01`,y:16}]}],labels:``,"legend-position":`bottom`,"theme-color":`multi-ordered`})]),_:1}),r(d,{title:`Numeric x values with axis label`,source:`<pf-chart-theme-river
aria-label="Theme river chart example"
:height="300"
:series="[
  {
    name: 'Cats',
    data: [
      { x: 2015, y: 6 },
      { x: 2016, y: 8 },
      { x: 2017, y: 10 },
      { x: 2018, y: 11 },
      { x: 2019, y: 11 },
      { x: 2020, y: 9 },
      { x: 2021, y: 7 },
      { x: 2022, y: 4 },
      { x: 2023, y: 2 },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: 2015, y: 12 },
      { x: 2016, y: 13 },
      { x: 2017, y: 13 },
      { x: 2018, y: 11 },
      { x: 2019, y: 9 },
      { x: 2020, y: 6 },
      { x: 2021, y: 4 },
      { x: 2022, y: 3 },
      { x: 2023, y: 3 },
    ],
  },
  {
    name: 'Birds',
    data: [
      { x: 2015, y: 15 },
      { x: 2016, y: 13 },
      { x: 2017, y: 11 },
      { x: 2018, y: 8 },
      { x: 2019, y: 6 },
      { x: 2020, y: 5 },
      { x: 2021, y: 5 },
      { x: 2022, y: 6 },
      { x: 2023, y: 9 },
    ],
  },
  {
    name: 'Mice',
    data: [
      { x: 2015, y: 13 },
      { x: 2016, y: 10 },
      { x: 2017, y: 8 },
      { x: 2018, y: 7 },
      { x: 2019, y: 7 },
      { x: 2020, y: 8 },
      { x: 2021, y: 11 },
      { x: 2022, y: 13 },
      { x: 2023, y: 15 },
    ],
  },
]"
legend-position="bottom"
theme-color="multi-unordered"
x-axis-label="Year" />`},{default:t(()=>[r(u,{"aria-label":`Theme river chart example`,height:300,series:[{name:`Cats`,data:[{x:2015,y:6},{x:2016,y:8},{x:2017,y:10},{x:2018,y:11},{x:2019,y:11},{x:2020,y:9},{x:2021,y:7},{x:2022,y:4},{x:2023,y:2}]},{name:`Dogs`,data:[{x:2015,y:12},{x:2016,y:13},{x:2017,y:13},{x:2018,y:11},{x:2019,y:9},{x:2020,y:6},{x:2021,y:4},{x:2022,y:3},{x:2023,y:3}]},{name:`Birds`,data:[{x:2015,y:15},{x:2016,y:13},{x:2017,y:11},{x:2018,y:8},{x:2019,y:6},{x:2020,y:5},{x:2021,y:5},{x:2022,y:6},{x:2023,y:9}]},{name:`Mice`,data:[{x:2015,y:13},{x:2016,y:10},{x:2017,y:8},{x:2018,y:7},{x:2019,y:7},{x:2020,y:8},{x:2021,y:11},{x:2022,y:13},{x:2023,y:15}]}],"legend-position":`bottom`,"theme-color":`multi-unordered`,"x-axis-label":`Year`})]),_:1}),c[2]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`p`,null,[o(`react-charts has no theme river chart: this is an ECharts only chart, drawn on a `),n(`a`,{href:`https://echarts.apache.org/en/option.html#singleAxis`},`single axis`),o(`.`)]),n(`p`,null,[o(`Streams are given as `),n(`code`,null,`series`),o(`, like the area and line charts: `),n(`code`,null,`x`),o(` is a date (or a number) and `),n(`code`,null,`y`),o(` the value. A stream missing a value at a date is drawn with a zero width there. Hovering a stream fades the others and shows its name; the tooltip lists every stream at the hovered date.`)])],-1)]),_:1})}var u=s(c,[[`render`,l]]);export{u as default};