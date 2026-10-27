import{F as e,K as t,c as n,h as r,j as i,l as a,m as o}from"./runtime-core.esm-bundler-DO1530YC.js";import{n as s}from"./index-CUsetNQE.js";var c={},l={style:{width:`400px`}},u={style:{width:`400px`}};function d(s,c){let d=e(`component-info`),f=e(`pf-chart-sparkline`),p=e(`story-canvas`),m=e(`doc-page`);return i(),a(m,{name:`Charts/SparklineChart.story.vue`,title:`Sparkline chart`},{description:t(()=>[...c[0]||=[o(`A `,-1),n(`b`,null,`sparkline`,-1),o(` is a small area chart, without axes, that shows a trend at a glance.`,-1)]]),apidocs:t(()=>[r(d,{name:`PfChartSparkline`,doc:{name:`PfChartSparkline`,exportName:`default`,displayName:`ChartSparkline`,description:``,tags:{},props:[{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`series`,description:`The series to draw`,required:!1,type:{name:`Array`,elements:[{name:`ChartSeries`}]}},{name:`option`,description:`ECharts option deep merged over the generated option`,required:!1,type:{name:`ChartsOption`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartSparkline.vue`]}})]),default:t(()=>[c[3]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[o(`Note: charts live in their own package at `),n(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),o(`!`)]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),r(p,{title:`Basic`,source:`<div style="width: 400px">
  <pf-chart-sparkline
    aria-label="Sparkline chart example"
    :height="100"
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
    ]" />
</div>
<p>CPU utilization</p>`},{default:t(()=>[n(`div`,l,[r(f,{"aria-label":`Sparkline chart example`,height:100,series:[{name:`Cats`,data:[{x:`2015`,y:3},{x:`2016`,y:4},{x:`2017`,y:8},{x:`2018`,y:6}]}]})]),c[1]||=n(`p`,null,`CPU utilization`,-1)]),_:1}),r(p,{title:`Green`,source:`<div style="width: 400px">
  <pf-chart-sparkline
    aria-label="Sparkline chart example"
    :height="100"
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
    ]"
    theme-color="green" />
</div>
<p>CPU utilization</p>`},{default:t(()=>[n(`div`,u,[r(f,{"aria-label":`Sparkline chart example`,height:100,series:[{name:`Cats`,data:[{x:`2015`,y:3},{x:`2016`,y:4},{x:`2017`,y:8},{x:`2018`,y:6}]}],"theme-color":`green`})]),c[2]||=n(`p`,null,`CPU utilization`,-1)]),_:1}),c[4]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`p`,null,[o(`patternfly-react has no sparkline component: its examples compose `),n(`code`,null,`ChartGroup`),o(` and `),n(`code`,null,`ChartArea`),o(` without axes.`)])],-1)]),_:1})}var f=s(c,[[`render`,d]]);export{f as default};