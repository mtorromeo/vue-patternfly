import{F as e,K as t,c as n,g as r,h as i,j as a,l as o,m as s}from"./runtime-core.esm-bundler-DngnZCKR.js";import{t as c}from"./extension-CYexglMW.js";import{s as l}from"./index-CTvJCgo8.js";var u=r({__name:`SankeyChart.story`,setup(r){return c([l]),(r,c)=>{let l=e(`component-info`),u=e(`pf-chart-sankey`),d=e(`story-canvas`),f=e(`doc-page`);return a(),o(f,{name:`Charts/SankeyChart.story.vue`,title:`Sankey chart`},{description:t(()=>[...c[0]||=[s(`A `,-1),n(`b`,null,`sankey chart`,-1),s(` shows flows between nodes, each link being as wide as its value.`,-1)]]),apidocs:t(()=>[i(l,{name:`PfChartSankey`,doc:{name:`PfChartSankey`,exportName:`default`,displayName:`ChartSankey`,description:``,tags:{},props:[{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`nodes`,description:`The nodes`,required:!1,type:{name:`Array`,elements:[{name:`ChartSankeyNode`}]}},{name:`links`,description:`The flows between nodes`,required:!1,type:{name:`Array`,elements:[{name:`ChartSankeyLink`}]}},{name:`sourceLabel`,description:`Label of the source node in the tooltip`,required:!1,type:{name:`string`}},{name:`destinationLabel`,description:`Label of the destination node in the tooltip`,required:!1,type:{name:`string`}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors`,required:!1,type:{name:`boolean`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it`,required:!1,type:{name:`boolean`}},{name:`option`,description:`ECharts option deep merged over the generated option`,required:!1,type:{name:`ChartsOption`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartSankey.vue`]}})]),default:t(()=>[c[1]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[s(`Note: charts live in their own package at `),n(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),s(`!`)]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),i(d,{title:`Basic`,source:`<pf-chart-sankey
aria-label="Sankey chart example"
destination-label="Destination"
:height="400"
:links="[
  { source: 'a', target: 'a1', value: 5 },
  { source: 'a', target: 'a2', value: 3 },
  { source: 'b', target: 'b1', value: 8 },
  { source: 'a', target: 'b1', value: 3 },
  { source: 'b1', target: 'a1', value: 1 },
  { source: 'b1', target: 'c', value: 2 },
]"
:nodes="[{ name: 'a' }, { name: 'b' }, { name: 'a1' }, { name: 'a2' }, { name: 'b1' }, { name: 'c' }]"
source-label="Source" />`},{default:t(()=>[i(u,{"aria-label":`Sankey chart example`,"destination-label":`Destination`,height:400,links:[{source:`a`,target:`a1`,value:5},{source:`a`,target:`a2`,value:3},{source:`b`,target:`b1`,value:8},{source:`a`,target:`b1`,value:3},{source:`b1`,target:`a1`,value:1},{source:`b1`,target:`c`,value:2}],nodes:[{name:`a`},{name:`b`},{name:`a1`},{name:`a2`},{name:`b1`},{name:`c`}],"source-label":`Source`})]),_:1}),i(d,{title:`Theme`,source:`<pf-chart-sankey
aria-label="Sankey chart example"
destination-label="Destination"
:height="400"
:links="[
  { source: 'a', target: 'a1', value: 5 },
  { source: 'a', target: 'a2', value: 3 },
  { source: 'b', target: 'b1', value: 8 },
  { source: 'a', target: 'b1', value: 3 },
  { source: 'b1', target: 'a1', value: 1 },
  { source: 'b1', target: 'c', value: 2 },
]"
:nodes="[{ name: 'a' }, { name: 'b' }, { name: 'a1' }, { name: 'a2' }, { name: 'b1' }, { name: 'c' }]"
source-label="Source"
theme-color="multi-unordered" />`},{default:t(()=>[i(u,{"aria-label":`Sankey chart example`,"destination-label":`Destination`,height:400,links:[{source:`a`,target:`a1`,value:5},{source:`a`,target:`a2`,value:3},{source:`b`,target:`b1`,value:8},{source:`a`,target:`b1`,value:3},{source:`b1`,target:`a1`,value:1},{source:`b1`,target:`c`,value:2}],nodes:[{name:`a`},{name:`b`},{name:`a1`},{name:`a2`},{name:`b1`},{name:`c`}],"source-label":`Source`,"theme-color":`multi-unordered`})]),_:1}),i(d,{title:`Toolbox and value formatter`,source:`<pf-chart-sankey
  aria-label="Sankey chart example"
  destination-label="Destination"
  :height="400"
  :links="[
    { source: 'a', target: 'a1', value: 5 },
    { source: 'a', target: 'a2', value: 3 },
    { source: 'b', target: 'b1', value: 8 },
    { source: 'a', target: 'b1', value: 3 },
    { source: 'b1', target: 'a1', value: 1 },
    { source: 'b1', target: 'c', value: 2 },
  ]"
  :nodes="[{ name: 'a' }, { name: 'b' }, { name: 'a1' }, { name: 'a2' }, { name: 'b1' }, { name: 'c' }]"
  :option="{
    toolbox: { feature: { restore: {}, saveAsImage: {} }, orient: 'vertical', top: 'center' },
    tooltip: { valueFormatter: (value: any) => \`\${value} GiB\` },
  }"
  source-label="Source"
></pf-chart-sankey>`},{default:t(()=>[i(u,{"aria-label":`Sankey chart example`,"destination-label":`Destination`,height:400,links:[{source:`a`,target:`a1`,value:5},{source:`a`,target:`a2`,value:3},{source:`b`,target:`b1`,value:8},{source:`a`,target:`b1`,value:3},{source:`b1`,target:`a1`,value:1},{source:`b1`,target:`c`,value:2}],nodes:[{name:`a`},{name:`b`},{name:`a1`},{name:`a2`},{name:`b1`},{name:`c`}],option:{toolbox:{feature:{restore:{},saveAsImage:{}},orient:`vertical`,top:`center`},tooltip:{valueFormatter:e=>`${e} GiB`}},"source-label":`Source`},null,8,[`option`])]),_:1}),i(d,{title:`Skeleton`,source:`<pf-chart-sankey
aria-label="Sankey chart example"
:height="400"
:links="[
  { source: 'a', target: 'a1', value: 5 },
  { source: 'a', target: 'a2', value: 3 },
  { source: 'b', target: 'b1', value: 8 },
  { source: 'a', target: 'b1', value: 3 },
  { source: 'b1', target: 'a1', value: 1 },
  { source: 'b1', target: 'c', value: 2 },
]"
:nodes="[{ name: 'a' }, { name: 'b' }, { name: 'a1' }, { name: 'a2' }, { name: 'b1' }, { name: 'c' }]"
theme-color="skeleton" />`},{default:t(()=>[i(u,{"aria-label":`Sankey chart example`,height:400,links:[{source:`a`,target:`a1`,value:5},{source:`a`,target:`a2`,value:3},{source:`b`,target:`b1`,value:8},{source:`a`,target:`b1`,value:3},{source:`b1`,target:`a1`,value:1},{source:`b1`,target:`c`,value:2}],nodes:[{name:`a`},{name:`b`},{name:`a1`},{name:`a2`},{name:`b1`},{name:`c`}],"theme-color":`skeleton`})]),_:1}),c[2]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`p`,null,[s(`patternfly-react only offers the sankey through the generic `),n(`code`,null,`Charts`),s(` component, with the same option `),n(`code`,null,`PfCharts`),s(` takes. A toolbox, set through `),n(`code`,null,`option`),s(`, needs `),n(`code`,null,`ToolboxComponent`),s(` registered with `),n(`code`,null,`echarts.use()`),s(`, as in this page.`)])],-1)]),_:1})}}});export{u as default};