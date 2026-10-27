import{F as e,K as t,c as n,h as r,j as i,l as a,m as o}from"./runtime-core.esm-bundler-DO1530YC.js";import{n as s}from"./index-CUsetNQE.js";var c={};function l(s,c){let l=e(`component-info`),u=e(`pf-chart-box-plot`),d=e(`story-canvas`),f=e(`doc-page`);return i(),a(f,{name:`Charts/BoxPlotChart.story.vue`,title:`Box plot chart`},{description:t(()=>[...c[0]||=[o(`A `,-1),n(`b`,null,`box plot`,-1),o(` summarizes the distribution of samples through their minimum, quartiles and maximum.`,-1)]]),apidocs:t(()=>[r(l,{name:`PfChartBoxPlot`,doc:{name:`PfChartBoxPlot`,exportName:`default`,displayName:`ChartBoxPlot`,description:``,tags:{},props:[{name:`option`,description:`ECharts option deep merged over the generated option, as an escape hatch for anything the props don't cover`,required:!1,type:{name:`ChartsOption`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it -- see https://echarts.apache.org/en/option.html#toolbox`,required:!1,type:{name:`boolean`}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors -- see https://echarts.apache.org/en/option.html#aria.decal`,required:!1,type:{name:`boolean`}},{name:`legendData`,description:`Legend entries; defaults to the series (or data) names`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`legendOrientation`,description:`Orientation of the legend; defaults to vertical for a right aligned legend and horizontal otherwise`,required:!1,type:{name:`union`,elements:[{name:`"horizontal"`},{name:`"vertical"`}]}},{name:`legendPosition`,description:"Position of the legend, `none` hiding it. Defaults to `right`, except for donut and bullet charts, which only\nshow a legend (on the right) when `legendData` is set.",required:!1,type:{name:`ChartLegendPosition`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`series`,description:"The series to draw, each box summarizing the samples in `y`",required:!1,type:{name:`Array`,elements:[{name:`ChartBoxPlotSeries`}]}},{name:`horizontal`,description:`Draws the boxes horizontally`,required:!1,type:{name:`boolean`}},{name:`xAxisLabel`,description:`Label of the independent (category) axis`,required:!1,type:{name:`string`}},{name:`yAxisLabel`,description:`Label of the dependent (value) axis`,required:!1,type:{name:`string`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartBoxPlot.vue`]}})]),default:t(()=>[c[1]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[o(`Note: charts live in their own package at `),n(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),o(`!`)]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),r(d,{title:`Basic with right aligned legend`,source:`<pf-chart-box-plot
aria-label="Box plot chart example"
:height="300"
:option="{ yAxis: { min: 0, max: 12 } }"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2015', y: [1, 2, 3, 5] },
      { x: '2016', y: [3, 2, 8, 10] },
      { x: '2017', y: [2, 8, 6, 5] },
      { x: '2018', y: [1, 3, 2, 9] },
    ],
  },
]" />`},{default:t(()=>[r(u,{"aria-label":`Box plot chart example`,height:300,option:{yAxis:{min:0,max:12}},series:[{name:`Cats`,data:[{x:`2015`,y:[1,2,3,5]},{x:`2016`,y:[3,2,8,10]},{x:`2017`,y:[2,8,6,5]},{x:`2018`,y:[1,3,2,9]}]}]})]),_:1}),r(d,{title:`Yellow with bottom aligned legend`,source:`<pf-chart-box-plot
aria-label="Box plot chart example"
:height="300"
legend-position="bottom"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2015', y: [1, 2, 3, 5] },
      { x: '2016', y: [3, 2, 8, 10] },
      { x: '2017', y: [2, 8, 6, 5] },
      { x: '2018', y: [1, 3, 2, 9] },
    ],
  },
]"
theme-color="yellow" />`},{default:t(()=>[r(u,{"aria-label":`Box plot chart example`,height:300,"legend-position":`bottom`,series:[{name:`Cats`,data:[{x:`2015`,y:[1,2,3,5]},{x:`2016`,y:[3,2,8,10]},{x:`2017`,y:[2,8,6,5]},{x:`2018`,y:[1,3,2,9]}]}],"theme-color":`yellow`})]),_:1}),r(d,{title:`Multi-color (ordered) horizontal with bottom aligned legend`,source:`<pf-chart-box-plot
aria-label="Box plot chart example"
:height="350"
horizontal
legend-position="bottom"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2015', y: [1, 2, 3, 5] },
      { x: '2016', y: [3, 2, 8, 10] },
      { x: '2017', y: [2, 8, 6, 5] },
      { x: '2018', y: [1, 3, 2, 9] },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: '2015', y: [2, 3, 4, 6] },
      { x: '2016', y: [1, 4, 5, 7] },
      { x: '2017', y: [3, 5, 8, 9] },
      { x: '2018', y: [2, 4, 6, 8] },
    ],
  },
]"
theme-color="multi-ordered" />`},{default:t(()=>[r(u,{"aria-label":`Box plot chart example`,height:350,horizontal:``,"legend-position":`bottom`,series:[{name:`Cats`,data:[{x:`2015`,y:[1,2,3,5]},{x:`2016`,y:[3,2,8,10]},{x:`2017`,y:[2,8,6,5]},{x:`2018`,y:[1,3,2,9]}]},{name:`Dogs`,data:[{x:`2015`,y:[2,3,4,6]},{x:`2016`,y:[1,4,5,7]},{x:`2017`,y:[3,5,8,9]},{x:`2018`,y:[2,4,6,8]}]}],"theme-color":`multi-ordered`})]),_:1}),c[2]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`ul`,null,[n(`li`,null,[o(`Victory's `),n(`code`,null,`labels`),o(` (minimum, quartiles, median and maximum drawn next to each box) are shown in the tooltip instead.`)]),n(`li`,null,`The quartiles are computed from the samples with linear interpolation, like Victory.`)])],-1)]),_:1})}var u=s(c,[[`render`,l]]);export{u as default};