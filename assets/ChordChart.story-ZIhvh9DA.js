import{F as e,K as t,c as n,h as r,j as i,l as a,m as o}from"./runtime-core.esm-bundler-DO1530YC.js";import{n as s}from"./index-CUsetNQE.js";var c={};function l(s,c){let l=e(`component-info`),u=e(`pf-chart-chord`),d=e(`story-canvas`),f=e(`doc-page`);return i(),a(f,{name:`Charts/ChordChart.story.vue`,title:`Chord chart`},{description:t(()=>[...c[0]||=[o(`A `,-1),n(`b`,null,`chord`,-1),o(` chart shows the flows between nodes: each node is an arc of a circle, as long as its flows, and ribbons across the circle link the nodes, as wide as their flow.`,-1)]]),apidocs:t(()=>[r(l,{name:`PfChartChord`,doc:{name:`PfChartChord`,exportName:`default`,displayName:`ChartChord`,description:``,tags:{},props:[{name:`option`,description:`ECharts option deep merged over the generated option, as an escape hatch for anything the props don't cover`,required:!1,type:{name:`ChartsOption`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it -- see https://echarts.apache.org/en/option.html#toolbox`,required:!1,type:{name:`boolean`}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors -- see https://echarts.apache.org/en/option.html#aria.decal`,required:!1,type:{name:`boolean`}},{name:`legendData`,description:`Legend entries; defaults to the series (or data) names`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`legendOrientation`,description:`Orientation of the legend; defaults to vertical for a right aligned legend and horizontal otherwise`,required:!1,type:{name:`union`,elements:[{name:`"horizontal"`},{name:`"vertical"`}]}},{name:`legendPosition`,description:"Position of the legend, `none` hiding it. Defaults to `right`, except for donut and bullet charts, which only\nshow a legend (on the right) when `legendData` is set.",required:!1,type:{name:`ChartLegendPosition`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`nodes`,description:`The nodes, drawn as arcs of a circle`,required:!1,type:{name:`Array`,elements:[{name:`ChartChordNode`}]}},{name:`links`,description:`The flows between nodes, drawn as ribbons across the circle`,required:!1,type:{name:`Array`,elements:[{name:`ChartChordLink`}]}},{name:`labels`,description:`Shows the name of each node outside the circle`,required:!1,type:{name:`boolean`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartChord.vue`]}})]),default:t(()=>[c[1]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[o(`Note: charts live in their own package at `),n(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),o(`!`)]),n(`p`,null,`Chord charts need ECharts 6: with ECharts 5 the chart stays empty and a warning is logged.`),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),r(d,{title:`Basic with right aligned legend`,source:`<pf-chart-chord
aria-label="Chord chart example"
:height="350"
:links="[
  { source: 'Frontend', target: 'API', value: 40 },
  { source: 'Frontend', target: 'Auth', value: 15 },
  { source: 'API', target: 'Database', value: 25 },
  { source: 'API', target: 'Cache', value: 30 },
  { source: 'API', target: 'Queue', value: 12 },
  { source: 'Auth', target: 'Database', value: 10 },
  { source: 'Queue', target: 'Database', value: 8 },
  { source: 'Cache', target: 'Frontend', value: 6 },
]"
:nodes="[
  { name: 'Frontend' },
  { name: 'API' },
  { name: 'Auth' },
  { name: 'Database' },
  { name: 'Cache' },
  { name: 'Queue' },
]" />`},{default:t(()=>[r(u,{"aria-label":`Chord chart example`,height:350,links:[{source:`Frontend`,target:`API`,value:40},{source:`Frontend`,target:`Auth`,value:15},{source:`API`,target:`Database`,value:25},{source:`API`,target:`Cache`,value:30},{source:`API`,target:`Queue`,value:12},{source:`Auth`,target:`Database`,value:10},{source:`Queue`,target:`Database`,value:8},{source:`Cache`,target:`Frontend`,value:6}],nodes:[{name:`Frontend`},{name:`API`},{name:`Auth`},{name:`Database`},{name:`Cache`},{name:`Queue`}]})]),_:1}),r(d,{title:`Multi-color (ordered) with labels, without legend`,source:`<pf-chart-chord
aria-label="Chord chart example"
:height="400"
:links="[
  { source: 'Frontend', target: 'API', value: 40 },
  { source: 'Frontend', target: 'Auth', value: 15 },
  { source: 'API', target: 'Database', value: 25 },
  { source: 'API', target: 'Cache', value: 30 },
  { source: 'API', target: 'Queue', value: 12 },
  { source: 'Auth', target: 'Database', value: 10 },
  { source: 'Queue', target: 'Database', value: 8 },
  { source: 'Cache', target: 'Frontend', value: 6 },
]"
:nodes="[
  { name: 'Frontend' },
  { name: 'API' },
  { name: 'Auth' },
  { name: 'Database' },
  { name: 'Cache' },
  { name: 'Queue' },
]"
labels
legend-position="none"
theme-color="multi-ordered" />`},{default:t(()=>[r(u,{"aria-label":`Chord chart example`,height:400,links:[{source:`Frontend`,target:`API`,value:40},{source:`Frontend`,target:`Auth`,value:15},{source:`API`,target:`Database`,value:25},{source:`API`,target:`Cache`,value:30},{source:`API`,target:`Queue`,value:12},{source:`Auth`,target:`Database`,value:10},{source:`Queue`,target:`Database`,value:8},{source:`Cache`,target:`Frontend`,value:6}],nodes:[{name:`Frontend`},{name:`API`},{name:`Auth`},{name:`Database`},{name:`Cache`},{name:`Queue`}],labels:``,"legend-position":`none`,"theme-color":`multi-ordered`})]),_:1}),c[2]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`p`,null,[o(`react-charts has no chord chart: this is an ECharts only chart, a `),n(`a`,{href:`https://echarts.apache.org/en/option.html#series-chord`},`chord series`),o(`.`)]),n(`p`,null,[o(`Nodes are as long as the sum of their links, unless given a `),n(`code`,null,`value`),o(`. Ribbons take the color of their source node, and hovering a node or a ribbon highlights its connections.`)])],-1)]),_:1})}var u=s(c,[[`render`,l]]);export{u as default};