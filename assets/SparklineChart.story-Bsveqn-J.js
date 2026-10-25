import{N as e,U as t,c as n,k as r,m as i,p as a,s as o}from"./runtime-core.esm-bundler-C7C7Sr-n.js";import{n as s}from"./index-DoPLe3sE.js";var c={},l={style:{width:`400px`}},u={style:{width:`400px`}};function d(s,c){let d=e(`component-info`),f=e(`pf-chart-sparkline`),p=e(`story-canvas`),m=e(`doc-page`);return r(),n(m,{name:`Charts/SparklineChart.story.vue`,title:`Sparkline chart`},{description:t(()=>[...c[0]||=[a(`A `,-1),o(`b`,null,`sparkline`,-1),a(` is a small area chart, without axes, that shows a trend at a glance.`,-1)]]),apidocs:t(()=>[i(d,{name:`PfChartSparkline`,doc:{name:`PfChartSparkline`,exportName:`default`,displayName:`ChartSparkline`,description:``,tags:{},props:[{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`series`,description:`The series to draw`,required:!1,type:{name:`Array`,elements:[{name:`ChartSeries`}]}},{name:`option`,description:`ECharts option deep merged over the generated option`,required:!1,type:{name:`ChartsOption`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartSparkline.vue`]}})]),default:t(()=>[c[3]||=o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[a(`Note: charts live in their own package at `),o(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),a(`!`)]),o(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),i(p,{title:`Basic`,source:`<div style="width: 400px">
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
<p>CPU utilization</p>`},{default:t(()=>[o(`div`,l,[i(f,{"aria-label":`Sparkline chart example`,height:100,series:[{name:`Cats`,data:[{x:`2015`,y:3},{x:`2016`,y:4},{x:`2017`,y:8},{x:`2018`,y:6}]}]})]),c[1]||=o(`p`,null,`CPU utilization`,-1)]),_:1}),i(p,{title:`Green`,source:`<div style="width: 400px">
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
<p>CPU utilization</p>`},{default:t(()=>[o(`div`,u,[i(f,{"aria-label":`Sparkline chart example`,height:100,series:[{name:`Cats`,data:[{x:`2015`,y:3},{x:`2016`,y:4},{x:`2017`,y:8},{x:`2018`,y:6}]}],"theme-color":`green`})]),c[2]||=o(`p`,null,`CPU utilization`,-1)]),_:1}),c[4]||=o(`div`,{class:`markdown pf-v6-c-content`},[o(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),o(`p`,null,[a(`patternfly-react has no sparkline component: its examples compose `),o(`code`,null,`ChartGroup`),a(` and `),o(`code`,null,`ChartArea`),a(` without axes.`)])],-1)]),_:1})}var f=s(c,[[`render`,d]]);export{f as default};