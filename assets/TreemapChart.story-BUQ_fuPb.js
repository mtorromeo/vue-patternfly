import{N as e,U as t,c as n,k as r,m as i,p as a,s as o}from"./runtime-core.esm-bundler-C7C7Sr-n.js";import{n as s}from"./index-DoPLe3sE.js";var c={};function l(s,c){let l=e(`component-info`),u=e(`pf-chart-treemap`),d=e(`story-canvas`),f=e(`doc-page`);return r(),n(f,{name:`Charts/TreemapChart.story.vue`,title:`Treemap chart`},{description:t(()=>[...c[0]||=[a(`A `,-1),o(`b`,null,`treemap`,-1),a(` shows hierarchical data as nested rectangles, each sized by its value.`,-1)]]),apidocs:t(()=>[i(l,{name:`PfChartTreemap`,doc:{name:`PfChartTreemap`,exportName:`default`,displayName:`ChartTreemap`,description:``,tags:{},props:[{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`data`,description:"The nodes to draw, nested through their `children`",required:!1,type:{name:`Array`,elements:[{name:`ChartHierarchicalDatum`}]}},{name:`name`,description:`Series name, shown in the tooltip and as the root of the breadcrumb, which is empty without it`,required:!1,type:{name:`string`}},{name:`drillDown`,description:`Zooms into a node when it is clicked, showing a breadcrumb to go back`,required:!1,type:{name:`boolean`}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors`,required:!1,type:{name:`boolean`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it`,required:!1,type:{name:`boolean`}},{name:`option`,description:`ECharts option deep merged over the generated option`,required:!1,type:{name:`ChartsOption`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartTreemap.vue`]}})]),default:t(()=>[c[1]||=o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[a(`Note: charts live in their own package at `),o(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),a(`!`)]),o(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),i(d,{title:`Basic`,source:`<pf-chart-treemap
aria-label="Treemap chart example"
:data="[
  {
    name: 'Frontend',
    children: [
      { name: 'Web', value: 40 },
      { name: 'Mobile', value: 20 },
    ],
  },
  {
    name: 'Backend',
    children: [
      {
        name: 'API',
        children: [
          { name: 'REST', value: 25 },
          { name: 'GraphQL', value: 10 },
        ],
      },
      { name: 'Workers', value: 15 },
      { name: 'Database', value: 25 },
    ],
  },
  { name: 'Infrastructure', value: 30 },
]"
:height="300"
name="Teams" />`},{default:t(()=>[i(u,{"aria-label":`Treemap chart example`,data:[{name:`Frontend`,children:[{name:`Web`,value:40},{name:`Mobile`,value:20}]},{name:`Backend`,children:[{name:`API`,children:[{name:`REST`,value:25},{name:`GraphQL`,value:10}]},{name:`Workers`,value:15},{name:`Database`,value:25}]},{name:`Infrastructure`,value:30}],height:300,name:`Teams`})]),_:1}),i(d,{title:`Multi-color (ordered)`,source:`<pf-chart-treemap
aria-label="Treemap chart example"
:data="[
  {
    name: 'Frontend',
    children: [
      { name: 'Web', value: 40 },
      { name: 'Mobile', value: 20 },
    ],
  },
  {
    name: 'Backend',
    children: [
      {
        name: 'API',
        children: [
          { name: 'REST', value: 25 },
          { name: 'GraphQL', value: 10 },
        ],
      },
      { name: 'Workers', value: 15 },
      { name: 'Database', value: 25 },
    ],
  },
  { name: 'Infrastructure', value: 30 },
]"
:height="300"
name="Teams"
theme-color="multi-ordered" />`},{default:t(()=>[i(u,{"aria-label":`Treemap chart example`,data:[{name:`Frontend`,children:[{name:`Web`,value:40},{name:`Mobile`,value:20}]},{name:`Backend`,children:[{name:`API`,children:[{name:`REST`,value:25},{name:`GraphQL`,value:10}]},{name:`Workers`,value:15},{name:`Database`,value:25}]},{name:`Infrastructure`,value:30}],height:300,name:`Teams`,"theme-color":`multi-ordered`})]),_:1}),i(d,{title:`Drill down`,source:`<pf-chart-treemap
aria-label="Treemap chart example"
:data="[
  {
    name: 'Frontend',
    children: [
      { name: 'Web', value: 40 },
      { name: 'Mobile', value: 20 },
    ],
  },
  {
    name: 'Backend',
    children: [
      {
        name: 'API',
        children: [
          { name: 'REST', value: 25 },
          { name: 'GraphQL', value: 10 },
        ],
      },
      { name: 'Workers', value: 15 },
      { name: 'Database', value: 25 },
    ],
  },
  { name: 'Infrastructure', value: 30 },
]"
drill-down
:height="350"
name="Teams"
theme-color="multi-ordered" />`},{default:t(()=>[i(u,{"aria-label":`Treemap chart example`,data:[{name:`Frontend`,children:[{name:`Web`,value:40},{name:`Mobile`,value:20}]},{name:`Backend`,children:[{name:`API`,children:[{name:`REST`,value:25},{name:`GraphQL`,value:10}]},{name:`Workers`,value:15},{name:`Database`,value:25}]},{name:`Infrastructure`,value:30}],"drill-down":``,height:350,name:`Teams`,"theme-color":`multi-ordered`})]),_:1}),c[2]||=o(`div`,{class:`markdown pf-v6-c-content`},[o(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),o(`p`,null,`react-charts has no treemap chart: this is an ECharts only chart.`),o(`p`,null,[a(`Each top level node gets the next color of the theme, which its descendants inherit, and labels contrast with it. With `),o(`code`,null,`drill-down`),a(`, clicking a node zooms into it and the breadcrumb, starting from the series `),o(`code`,null,`name`),a(`, goes back.`)])],-1)]),_:1})}var u=s(c,[[`render`,l]]);export{u as default};