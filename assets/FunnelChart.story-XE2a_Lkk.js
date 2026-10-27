import{F as e,G as t,c as n,h as r,j as i,l as a,m as o}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{n as s}from"./index-Cl3hMFDe.js";var c={};function l(s,c){let l=e(`component-info`),u=e(`pf-chart-funnel`),d=e(`story-canvas`),f=e(`doc-page`);return i(),a(f,{name:`Charts/FunnelChart.story.vue`,title:`Funnel chart`},{description:t(()=>[...c[0]||=[o(`A `,-1),n(`b`,null,`funnel chart`,-1),o(` shows how a quantity decreases through the stages of a process, like visitors becoming customers.`,-1)]]),apidocs:t(()=>[r(l,{name:`PfChartFunnel`,doc:{name:`PfChartFunnel`,exportName:`default`,displayName:`ChartFunnel`,description:``,tags:{},props:[{name:`option`,description:`ECharts option deep merged over the generated option, as an escape hatch for anything the props don't cover`,required:!1,type:{name:`ChartsOption`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it -- see https://echarts.apache.org/en/option.html#toolbox`,required:!1,type:{name:`boolean`}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors -- see https://echarts.apache.org/en/option.html#aria.decal`,required:!1,type:{name:`boolean`}},{name:`legendData`,description:`Legend entries; defaults to the series (or data) names`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`legendOrientation`,description:`Orientation of the legend; defaults to vertical for a right aligned legend and horizontal otherwise`,required:!1,type:{name:`union`,elements:[{name:`"horizontal"`},{name:`"vertical"`}]}},{name:`legendPosition`,description:"Position of the legend, `none` hiding it. Defaults to `right`, except for donut and bullet charts, which only\nshow a legend (on the right) when `legendData` is set.",required:!1,type:{name:`ChartLegendPosition`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`data`,description:"The stages: `y` is the value and `x` (or `name`) the label",required:!1,type:{name:`Array`,elements:[{name:`ChartDatum`}]}},{name:`sort`,description:"Order of the stages; `none` keeps the order of the data",required:!1,type:{name:`union`,elements:[{name:`"descending"`},{name:`"ascending"`},{name:`"none"`}]}},{name:`orient`,description:`Draws the funnel top to bottom (default) or left to right`,required:!1,type:{name:`union`,elements:[{name:`"vertical"`},{name:`"horizontal"`}]}},{name:`gap`,description:`Space between the stages, in pixels`,required:!1,type:{name:`number`}},{name:`labels`,description:`Shows the name and value of each stage inside it`,required:!1,type:{name:`boolean`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartFunnel.vue`]}})]),default:t(()=>[c[1]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[o(`Note: charts live in their own package at `),n(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),o(`!`)]),n(`p`,null,[o(`patternfly-react has no funnel chart: `),n(`code`,null,`PfChartFunnel`),o(` is based on the ECharts `),n(`a`,{href:`https://echarts.apache.org/en/option.html#series-funnel`},`funnel series`),o(`. Like pie charts, stages are told apart by their color, so the legend is shown on the right by default.`)]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),r(d,{title:`Basic with right aligned legend`,source:`<pf-chart-funnel
aria-label="Funnel chart example"
:data="[
  { x: 'Visits', y: 1000 },
  { x: 'Sign ups', y: 600 },
  { x: 'Trials', y: 300 },
  { x: 'Purchases', y: 120 },
  { x: 'Renewals', y: 80 },
]"
:height="300" />`},{default:t(()=>[r(u,{"aria-label":`Funnel chart example`,data:[{x:`Visits`,y:1e3},{x:`Sign ups`,y:600},{x:`Trials`,y:300},{x:`Purchases`,y:120},{x:`Renewals`,y:80}],height:300})]),_:1}),r(d,{title:`Multi-color (ordered) with labels and bottom aligned legend`,source:`<pf-chart-funnel
aria-label="Funnel chart with labels example"
:data="[
  { x: 'Visits', y: 1000 },
  { x: 'Sign ups', y: 600 },
  { x: 'Trials', y: 300 },
  { x: 'Purchases', y: 120 },
  { x: 'Renewals', y: 80 },
]"
:height="350"
labels
legend-position="bottom"
theme-color="multi-ordered" />`},{default:t(()=>[r(u,{"aria-label":`Funnel chart with labels example`,data:[{x:`Visits`,y:1e3},{x:`Sign ups`,y:600},{x:`Trials`,y:300},{x:`Purchases`,y:120},{x:`Renewals`,y:80}],height:350,labels:``,"legend-position":`bottom`,"theme-color":`multi-ordered`})]),_:1}),r(d,{title:`Horizontal in data order`,source:`<pf-chart-funnel
aria-label="Horizontal funnel chart example"
:data="[
  { x: 'Queued', y: 50 },
  { x: 'Building', y: 40 },
  { x: 'Testing', y: 32 },
  { x: 'Deployed', y: 25 },
]"
:gap="4"
:height="250"
labels
legend-position="none"
orient="horizontal"
sort="none"
theme-color="teal" />`},{default:t(()=>[r(u,{"aria-label":`Horizontal funnel chart example`,data:[{x:`Queued`,y:50},{x:`Building`,y:40},{x:`Testing`,y:32},{x:`Deployed`,y:25}],gap:4,height:250,labels:``,"legend-position":`none`,orient:`horizontal`,sort:`none`,"theme-color":`teal`})]),_:1}),r(d,{title:`Skeleton`,source:`<pf-chart-funnel
aria-label="Funnel chart skeleton example"
:data="[
  { x: 'Visits', y: 1000 },
  { x: 'Sign ups', y: 600 },
  { x: 'Trials', y: 300 },
  { x: 'Purchases', y: 120 },
  { x: 'Renewals', y: 80 },
]"
:height="300"
theme-color="skeleton" />`},{default:t(()=>[r(u,{"aria-label":`Funnel chart skeleton example`,data:[{x:`Visits`,y:1e3},{x:`Sign ups`,y:600},{x:`Trials`,y:300},{x:`Purchases`,y:120},{x:`Renewals`,y:80}],height:300,"theme-color":`skeleton`})]),_:1})]),_:1})}var u=s(c,[[`render`,l]]);export{u as default};