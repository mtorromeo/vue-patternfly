import{N as e,U as t,c as n,k as r,m as i,p as a,s as o}from"./runtime-core.esm-bundler-C7C7Sr-n.js";import{n as s}from"./index-DoPLe3sE.js";var c={};function l(s,c){let l=e(`component-info`),u=e(`pf-chart-graph`),d=e(`story-canvas`),f=e(`doc-page`);return r(),n(f,{name:`Charts/GraphChart.story.vue`,title:`Graph chart`},{description:t(()=>[...c[0]||=[a(`A `,-1),o(`b`,null,`graph`,-1),a(` shows nodes and the links between them, such as the topology of a network or the dependencies of services.`,-1)]]),apidocs:t(()=>[i(l,{name:`PfChartGraph`,doc:{name:`PfChartGraph`,exportName:`default`,displayName:`ChartGraph`,description:``,tags:{},props:[{name:`option`,description:`ECharts option deep merged over the generated option, as an escape hatch for anything the props don't cover`,required:!1,type:{name:`ChartsOption`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it -- see https://echarts.apache.org/en/option.html#toolbox`,required:!1,type:{name:`boolean`}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors -- see https://echarts.apache.org/en/option.html#aria.decal`,required:!1,type:{name:`boolean`}},{name:`legendData`,description:`Legend entries; defaults to the series (or data) names`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`legendOrientation`,description:`Orientation of the legend; defaults to vertical for a right aligned legend and horizontal otherwise`,required:!1,type:{name:`union`,elements:[{name:`"horizontal"`},{name:`"vertical"`}]}},{name:`legendPosition`,description:"Position of the legend, `none` hiding it. Defaults to `right`, except for donut and bullet charts, which only\nshow a legend (on the right) when `legendData` is set.",required:!1,type:{name:`ChartLegendPosition`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`nodes`,description:`The nodes`,required:!1,type:{name:`Array`,elements:[{name:`ChartGraphNode`}]}},{name:`links`,description:`The links between nodes`,required:!1,type:{name:`Array`,elements:[{name:`ChartGraphLink`}]}},{name:`layout`,description:"Placement of the nodes: `force` simulates links pulling nodes together while nodes push each other away, `circular`\nputs them on a circle and `none` places them at their `x` and `y`",required:!1,type:{name:`union`,elements:[{name:`"force"`},{name:`"circular"`},{name:`"none"`}]},defaultValue:{func:!1,value:`'force'`}},{name:`directed`,description:`Draws an arrow at the target end of each link`,required:!1,type:{name:`boolean`}},{name:`labels`,description:`Shows the name of each node next to it`,required:!1,type:{name:`boolean`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartGraph.vue`]}})]),default:t(()=>[c[1]||=o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[a(`Note: charts live in their own package at `),o(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),a(`!`)]),o(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),i(d,{title:`Force layout`,source:`<pf-chart-graph
aria-label="Graph chart example"
:height="350"
:links="[
  { source: 'Gateway', target: 'Load balancer' },
  { source: 'Load balancer', target: 'Web 1' },
  { source: 'Load balancer', target: 'Web 2' },
  { source: 'Web 1', target: 'API' },
  { source: 'Web 2', target: 'API' },
  { source: 'API', target: 'Auth' },
  { source: 'API', target: 'Database' },
  { source: 'API', target: 'Cache' },
  { source: 'API', target: 'Queue' },
]"
:nodes="[
  { name: 'Gateway', category: 'Network' },
  { name: 'Load balancer', category: 'Network' },
  { name: 'Web 1', category: 'Service' },
  { name: 'Web 2', category: 'Service' },
  { name: 'API', category: 'Service' },
  { name: 'Auth', category: 'Service' },
  { name: 'Queue', category: 'Storage' },
  { name: 'Database', category: 'Storage' },
  { name: 'Cache', category: 'Storage' },
]"
directed
labels />`},{default:t(()=>[i(u,{"aria-label":`Graph chart example`,height:350,links:[{source:`Gateway`,target:`Load balancer`},{source:`Load balancer`,target:`Web 1`},{source:`Load balancer`,target:`Web 2`},{source:`Web 1`,target:`API`},{source:`Web 2`,target:`API`},{source:`API`,target:`Auth`},{source:`API`,target:`Database`},{source:`API`,target:`Cache`},{source:`API`,target:`Queue`}],nodes:[{name:`Gateway`,category:`Network`},{name:`Load balancer`,category:`Network`},{name:`Web 1`,category:`Service`},{name:`Web 2`,category:`Service`},{name:`API`,category:`Service`},{name:`Auth`,category:`Service`},{name:`Queue`,category:`Storage`},{name:`Database`,category:`Storage`},{name:`Cache`,category:`Storage`}],directed:``,labels:``})]),_:1}),i(d,{title:`Circular layout`,source:`<pf-chart-graph
aria-label="Graph chart example"
:height="350"
:links="[
  { source: 'Gateway', target: 'Load balancer' },
  { source: 'Load balancer', target: 'Web 1' },
  { source: 'Load balancer', target: 'Web 2' },
  { source: 'Web 1', target: 'API' },
  { source: 'Web 2', target: 'API' },
  { source: 'API', target: 'Auth' },
  { source: 'API', target: 'Database' },
  { source: 'API', target: 'Cache' },
  { source: 'API', target: 'Queue' },
]"
:nodes="[
  { name: 'Gateway', category: 'Network' },
  { name: 'Load balancer', category: 'Network' },
  { name: 'Web 1', category: 'Service' },
  { name: 'Web 2', category: 'Service' },
  { name: 'API', category: 'Service' },
  { name: 'Auth', category: 'Service' },
  { name: 'Queue', category: 'Storage' },
  { name: 'Database', category: 'Storage' },
  { name: 'Cache', category: 'Storage' },
]"
labels
layout="circular"
legend-position="bottom" />`},{default:t(()=>[i(u,{"aria-label":`Graph chart example`,height:350,links:[{source:`Gateway`,target:`Load balancer`},{source:`Load balancer`,target:`Web 1`},{source:`Load balancer`,target:`Web 2`},{source:`Web 1`,target:`API`},{source:`Web 2`,target:`API`},{source:`API`,target:`Auth`},{source:`API`,target:`Database`},{source:`API`,target:`Cache`},{source:`API`,target:`Queue`}],nodes:[{name:`Gateway`,category:`Network`},{name:`Load balancer`,category:`Network`},{name:`Web 1`,category:`Service`},{name:`Web 2`,category:`Service`},{name:`API`,category:`Service`},{name:`Auth`,category:`Service`},{name:`Queue`,category:`Storage`},{name:`Database`,category:`Storage`},{name:`Cache`,category:`Storage`}],labels:``,layout:`circular`,"legend-position":`bottom`})]),_:1}),i(d,{title:`Fixed positions`,source:`<pf-chart-graph
aria-label="Graph chart example"
:height="350"
:links="[
  { source: 'Gateway', target: 'Web' },
  { source: 'Gateway', target: 'API' },
  { source: 'Web', target: 'Database' },
  { source: 'API', target: 'Database' },
]"
:nodes="[
  { name: 'Gateway', x: 0, y: 1 },
  { name: 'Web', x: 1, y: 0 },
  { name: 'API', x: 1, y: 2 },
  { name: 'Database', x: 2, y: 1 },
]"
directed
labels
layout="none" />`},{default:t(()=>[i(u,{"aria-label":`Graph chart example`,height:350,links:[{source:`Gateway`,target:`Web`},{source:`Gateway`,target:`API`},{source:`Web`,target:`Database`},{source:`API`,target:`Database`}],nodes:[{name:`Gateway`,x:0,y:1},{name:`Web`,x:1,y:0},{name:`API`,x:1,y:2},{name:`Database`,x:2,y:1}],directed:``,labels:``,layout:`none`})]),_:1}),c[2]||=o(`div`,{class:`markdown pf-v6-c-content`},[o(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),o(`p`,null,`react-charts has no graph chart: this is an ECharts only chart.`),o(`p`,null,[a(`Nodes are grouped by their `),o(`code`,null,`category`),a(`: each category gets the next color of the theme and an entry in the legend, which toggles its nodes. Hovering a node highlights its neighbors and links, which take the color of their source.`)]),o(`p`,null,[a(`The `),o(`code`,null,`force`),a(` layout (default) lets nodes be dragged, `),o(`code`,null,`circular`),a(` puts them on a circle and `),o(`code`,null,`none`),a(` scales their `),o(`code`,null,`x`),a(` and `),o(`code`,null,`y`),a(` to fill the chart. Panning and zooming are off, as they would capture the page scroll: enable them with `),o(`code`,null,`:option="{ series: [{ roam: true }] }"`),a(`.`)])],-1)]),_:1})}var u=s(c,[[`render`,l]]);export{u as default};