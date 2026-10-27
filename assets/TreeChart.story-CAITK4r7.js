import{F as e,G as t,c as n,h as r,j as i,l as a,m as o}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{n as s}from"./index-Cl3hMFDe.js";var c={};function l(s,c){let l=e(`component-info`),u=e(`pf-chart-tree`),d=e(`story-canvas`),f=e(`doc-page`);return i(),a(f,{name:`Charts/TreeChart.story.vue`,title:`Tree chart`},{description:t(()=>[...c[0]||=[o(`A `,-1),n(`b`,null,`tree`,-1),o(` shows hierarchical data as nodes linked to their parent, such as an organization chart or a file system.`,-1)]]),apidocs:t(()=>[r(l,{name:`PfChartTree`,doc:{name:`PfChartTree`,exportName:`default`,displayName:`ChartTree`,description:``,tags:{},props:[{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`data`,description:"The tree, nested through `children`: several top level nodes are joined under a root named after `name`",required:!1,type:{name:`Array`,elements:[{name:`ChartHierarchicalDatum`}]}},{name:`name`,description:`Series name, shown in the tooltip, and name of the root joining several top level nodes`,required:!1,type:{name:`string`}},{name:`orient`,description:`Direction from the root to the leaves: left to right, right to left, top to bottom or bottom to top`,required:!1,type:{name:`union`,elements:[{name:`"LR"`},{name:`"RL"`},{name:`"TB"`},{name:`"BT"`}]}},{name:`radial`,description:"Puts the root at the center, with its descendants around it; `orient` doesn't apply",required:!1,type:{name:`boolean`}},{name:`collapsible`,description:`Expands or collapses a node when it is clicked; collapsed nodes are filled`,required:!1,type:{name:`boolean`}},{name:`depth`,description:"Number of levels expanded at first when `collapsible`; all of them by default",required:!1,type:{name:`number`}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors`,required:!1,type:{name:`boolean`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it`,required:!1,type:{name:`boolean`}},{name:`option`,description:`ECharts option deep merged over the generated option`,required:!1,type:{name:`ChartsOption`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartTree.vue`]}})]),default:t(()=>[c[1]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[o(`Note: charts live in their own package at `),n(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),o(`!`)]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),r(d,{title:`Basic`,source:`<pf-chart-tree
aria-label="Tree chart example"
:data="[
  {
    name: 'Frontend',
    children: [
      { name: 'Web' },
      {
        name: 'Mobile',
        children: [{ name: 'iOS' }, { name: 'Android' }],
      },
    ],
  },
  {
    name: 'Backend',
    children: [
      {
        name: 'API',
        children: [{ name: 'REST' }, { name: 'GraphQL' }],
      },
      { name: 'Workers' },
      { name: 'Database' },
    ],
  },
  {
    name: 'Infrastructure',
    children: [{ name: 'Kubernetes' }, { name: 'Monitoring' }],
  },
]"
:height="350"
name="Teams" />`},{default:t(()=>[r(u,{"aria-label":`Tree chart example`,data:[{name:`Frontend`,children:[{name:`Web`},{name:`Mobile`,children:[{name:`iOS`},{name:`Android`}]}]},{name:`Backend`,children:[{name:`API`,children:[{name:`REST`},{name:`GraphQL`}]},{name:`Workers`},{name:`Database`}]},{name:`Infrastructure`,children:[{name:`Kubernetes`},{name:`Monitoring`}]}],height:350,name:`Teams`})]),_:1}),r(d,{title:`Top to bottom`,source:`<pf-chart-tree
aria-label="Tree chart example"
:data="[
  {
    name: 'Frontend',
    children: [
      { name: 'Web' },
      {
        name: 'Mobile',
        children: [{ name: 'iOS' }, { name: 'Android' }],
      },
    ],
  },
  {
    name: 'Backend',
    children: [
      {
        name: 'API',
        children: [{ name: 'REST' }, { name: 'GraphQL' }],
      },
      { name: 'Workers' },
      { name: 'Database' },
    ],
  },
  {
    name: 'Infrastructure',
    children: [{ name: 'Kubernetes' }, { name: 'Monitoring' }],
  },
]"
:height="400"
name="Teams"
orient="TB" />`},{default:t(()=>[r(u,{"aria-label":`Tree chart example`,data:[{name:`Frontend`,children:[{name:`Web`},{name:`Mobile`,children:[{name:`iOS`},{name:`Android`}]}]},{name:`Backend`,children:[{name:`API`,children:[{name:`REST`},{name:`GraphQL`}]},{name:`Workers`},{name:`Database`}]},{name:`Infrastructure`,children:[{name:`Kubernetes`},{name:`Monitoring`}]}],height:400,name:`Teams`,orient:`TB`})]),_:1}),r(d,{title:`Collapsible`,source:`<pf-chart-tree
aria-label="Tree chart example"
:data="[
  {
    name: 'Frontend',
    children: [
      { name: 'Web' },
      {
        name: 'Mobile',
        children: [{ name: 'iOS' }, { name: 'Android' }],
      },
    ],
  },
  {
    name: 'Backend',
    children: [
      {
        name: 'API',
        children: [{ name: 'REST' }, { name: 'GraphQL' }],
      },
      { name: 'Workers' },
      { name: 'Database' },
    ],
  },
  {
    name: 'Infrastructure',
    children: [{ name: 'Kubernetes' }, { name: 'Monitoring' }],
  },
]"
:height="350"
name="Teams"
collapsible
:depth="2" />`},{default:t(()=>[r(u,{"aria-label":`Tree chart example`,data:[{name:`Frontend`,children:[{name:`Web`},{name:`Mobile`,children:[{name:`iOS`},{name:`Android`}]}]},{name:`Backend`,children:[{name:`API`,children:[{name:`REST`},{name:`GraphQL`}]},{name:`Workers`},{name:`Database`}]},{name:`Infrastructure`,children:[{name:`Kubernetes`},{name:`Monitoring`}]}],height:350,name:`Teams`,collapsible:``,depth:2})]),_:1}),r(d,{title:`Radial`,source:`<pf-chart-tree
aria-label="Tree chart example"
:data="[
  {
    name: 'Frontend',
    children: [
      { name: 'Web' },
      {
        name: 'Mobile',
        children: [{ name: 'iOS' }, { name: 'Android' }],
      },
    ],
  },
  {
    name: 'Backend',
    children: [
      {
        name: 'API',
        children: [{ name: 'REST' }, { name: 'GraphQL' }],
      },
      { name: 'Workers' },
      { name: 'Database' },
    ],
  },
  {
    name: 'Infrastructure',
    children: [{ name: 'Kubernetes' }, { name: 'Monitoring' }],
  },
]"
:height="450"
name="Teams"
radial />`},{default:t(()=>[r(u,{"aria-label":`Tree chart example`,data:[{name:`Frontend`,children:[{name:`Web`},{name:`Mobile`,children:[{name:`iOS`},{name:`Android`}]}]},{name:`Backend`,children:[{name:`API`,children:[{name:`REST`},{name:`GraphQL`}]},{name:`Workers`},{name:`Database`}]},{name:`Infrastructure`,children:[{name:`Kubernetes`},{name:`Monitoring`}]}],height:450,name:`Teams`,radial:``})]),_:1}),c[2]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`p`,null,`react-charts has no tree chart: this is an ECharts only chart.`),n(`p`,null,[o(`ECharts draws a single root: several top level nodes are joined under a root named after `),n(`code`,null,`name`),o(`. The tree is fully expanded and static by default; with `),n(`code`,null,`collapsible`),o(`, clicking a node expands or collapses it, collapsed nodes are filled and `),n(`code`,null,`depth`),o(` sets how many levels are expanded at first.`)])],-1)]),_:1})}var u=s(c,[[`render`,l]]);export{u as default};