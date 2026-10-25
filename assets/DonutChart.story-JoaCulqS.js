import{N as e,U as t,c as n,k as r,m as i,p as a,s as o}from"./runtime-core.esm-bundler-C7C7Sr-n.js";import{n as s}from"./index-DoPLe3sE.js";var c={},l={style:{width:`230px`}},u={style:{width:`350px`}},d={style:{width:`350px`}},f={style:{width:`300px`}},p={style:{width:`150px`}},m={style:{width:`250px`}};function h(s,c){let h=e(`component-info`),g=e(`pf-chart-donut`),_=e(`story-canvas`),v=e(`doc-page`);return r(),n(v,{name:`Charts/DonutChart.story.vue`,title:`Donut chart`},{description:t(()=>[...c[0]||=[a(`A `,-1),o(`b`,null,`donut chart`,-1),a(` is a pie chart with a hole in the middle, where a title summarizes the data.`,-1)]]),apidocs:t(()=>[i(h,{name:`PfChartDonut`,doc:{name:`PfChartDonut`,exportName:`default`,displayName:`ChartDonut`,description:``,tags:{},props:[{name:`option`,description:`ECharts option deep merged over the generated option, as an escape hatch for anything the props don't cover`,required:!1,type:{name:`ChartsOption`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it -- see https://echarts.apache.org/en/option.html#toolbox`,required:!1,type:{name:`boolean`}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors -- see https://echarts.apache.org/en/option.html#aria.decal`,required:!1,type:{name:`boolean`}},{name:`legendData`,description:`Legend entries; defaults to the series (or data) names`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`legendOrientation`,description:`Orientation of the legend; defaults to vertical for a right aligned legend and horizontal otherwise`,required:!1,type:{name:`union`,elements:[{name:`"horizontal"`},{name:`"vertical"`}]}},{name:`legendPosition`,description:"Position of the legend, `none` hiding it. Defaults to `right`, except for donut and bullet charts, which only\nshow a legend (on the right) when `legendData` is set.",required:!1,type:{name:`ChartLegendPosition`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`data`,description:"Slices of the donut: `y` is the value and `x` (or `name`) the label",required:!1,type:{name:`Array`,elements:[{name:`ChartDatum`}]}},{name:`padAngle`,description:`Angle between slices, in degrees`,required:!1,type:{name:`number`}},{name:`title`,description:`Title shown in the center of the donut`,required:!1,type:{name:`string`}},{name:`subTitle`,description:`Subtitle shown below the title, or next to the donut`,required:!1,type:{name:`string`}},{name:`subTitlePosition`,description:`Position of the subtitle`,required:!1,type:{name:`union`,elements:[{name:`"center"`},{name:`"bottom"`},{name:`"right"`}]}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartDonut.vue`]}})]),default:t(()=>[c[1]||=o(`div`,{class:`markdown pf-v6-c-content`},[o(`p`,null,[a(`Note: charts live in their own package at `),o(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),a(`!`)]),o(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),i(_,{title:`Basic`,source:`<div style="width: 230px">
  <pf-chart-donut
    aria-label="Donut chart example"
    :data="[
      { x: 'Cats', y: 35 },
      { x: 'Dogs', y: 55 },
      { x: 'Birds', y: 10 },
    ]"
    :height="230"
    sub-title="Pets"
    title="100" />
</div>`},{default:t(()=>[o(`div`,l,[i(g,{"aria-label":`Donut chart example`,data:[{x:`Cats`,y:35},{x:`Dogs`,y:55},{x:`Birds`,y:10}],height:230,"sub-title":`Pets`,title:`100`})])]),_:1}),i(_,{title:`Right aligned legend`,source:`<div style="width: 350px">
  <pf-chart-donut
    aria-label="Donut chart example"
    :data="[
      { x: 'Cats', y: 35 },
      { x: 'Dogs', y: 55 },
      { x: 'Birds', y: 10 },
    ]"
    :height="230"
    legend-position="right"
    sub-title="Pets"
    title="100" />
</div>`},{default:t(()=>[o(`div`,u,[i(g,{"aria-label":`Donut chart example`,data:[{x:`Cats`,y:35},{x:`Dogs`,y:55},{x:`Birds`,y:10}],height:230,"legend-position":`right`,"sub-title":`Pets`,title:`100`})])]),_:1}),i(_,{title:`Multi-color (ordered) with right aligned legend`,source:`<div style="width: 350px">
  <pf-chart-donut
    aria-label="Donut chart example"
    :data="[
      { x: 'Cats', y: 35 },
      { x: 'Dogs', y: 55 },
      { x: 'Birds', y: 10 },
    ]"
    :height="230"
    legend-position="right"
    sub-title="Pets"
    theme-color="multi-ordered"
    title="100" />
</div>`},{default:t(()=>[o(`div`,d,[i(g,{"aria-label":`Donut chart example`,data:[{x:`Cats`,y:35},{x:`Dogs`,y:55},{x:`Birds`,y:10}],height:230,"legend-position":`right`,"sub-title":`Pets`,"theme-color":`multi-ordered`,title:`100`})])]),_:1}),i(_,{title:`Bottom aligned legend`,source:`<div style="width: 300px">
  <pf-chart-donut
    aria-label="Donut chart example"
    :data="[
      { x: 'Cats', y: 35 },
      { x: 'Dogs', y: 55 },
      { x: 'Birds', y: 10 },
    ]"
    :height="275"
    legend-position="bottom"
    sub-title="Pets"
    title="100" />
</div>`},{default:t(()=>[o(`div`,f,[i(g,{"aria-label":`Donut chart example`,data:[{x:`Cats`,y:35},{x:`Dogs`,y:55},{x:`Birds`,y:10}],height:275,"legend-position":`bottom`,"sub-title":`Pets`,title:`100`})])]),_:1}),i(_,{title:`Small with bottom aligned subtitle`,source:`<div style="width: 150px">
  <pf-chart-donut
    aria-label="Donut chart example"
    :data="[
      { x: 'Cats', y: 35 },
      { x: 'Dogs', y: 55 },
      { x: 'Birds', y: 10 },
    ]"
    :height="180"
    sub-title="Pets"
    sub-title-position="bottom"
    title="100" />
</div>`},{default:t(()=>[o(`div`,p,[i(g,{"aria-label":`Donut chart example`,data:[{x:`Cats`,y:35},{x:`Dogs`,y:55},{x:`Birds`,y:10}],height:180,"sub-title":`Pets`,"sub-title-position":`bottom`,title:`100`})])]),_:1}),i(_,{title:`Small with right aligned subtitle`,source:`<div style="width: 250px">
  <pf-chart-donut
    aria-label="Donut chart example"
    :data="[
      { x: 'Cats', y: 35 },
      { x: 'Dogs', y: 55 },
      { x: 'Birds', y: 10 },
    ]"
    :height="150"
    sub-title="Pets"
    sub-title-position="right"
    title="100" />
</div>`},{default:t(()=>[o(`div`,m,[i(g,{"aria-label":`Donut chart example`,data:[{x:`Cats`,y:35},{x:`Dogs`,y:55},{x:`Birds`,y:10}],height:150,"sub-title":`Pets`,"sub-title-position":`right`,title:`100`})])]),_:1}),c[2]||=o(`div`,{class:`markdown pf-v6-c-content`},[o(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),o(`p`,null,`The title is drawn as the label of a transparent pie in the middle of the donut, so it stays centered whatever the legend layout. Subtitles aligned to the bottom or right are drawn with the ECharts title component, relative to the whole chart.`)],-1)]),_:1})}var g=s(c,[[`render`,h]]);export{g as default};