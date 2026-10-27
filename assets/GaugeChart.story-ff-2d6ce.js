import{E as e,F as t,K as n,c as r,g as i,h as a,it as o,j as s,l as c,m as l}from"./runtime-core.esm-bundler-DO1530YC.js";var u={style:{width:`230px`}},d={style:{width:`230px`}},f={style:{width:`230px`}},p={style:{width:`300px`}},m={style:{width:`300px`}},h={style:{width:`230px`}},g=i({__name:`GaugeChart.story`,setup(i){let g=o(0),_=o(100),v=setInterval(()=>{g.value=(g.value+10)%110,_.value=_.value>0?_.value-10:100},1e3);return e(()=>clearInterval(v)),(e,i)=>{let o=t(`component-info`),v=t(`pf-chart-gauge`),y=t(`story-canvas`),b=t(`doc-page`);return s(),c(b,{name:`Charts/GaugeChart.story.vue`,title:`Gauge chart`},{description:n(()=>[...i[0]||=[l(`A `,-1),r(`b`,null,`gauge chart`,-1),l(` shows a single value within a range, like a utilization or a speed.`,-1)]]),apidocs:n(()=>[a(o,{name:`PfChartGauge`,doc:{name:`PfChartGauge`,exportName:`default`,displayName:`ChartGauge`,description:``,tags:{},props:[{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`value`,description:`The value shown by the gauge`,required:!1,type:{name:`number`}},{name:`min`,description:`The value at the start of the gauge`,required:!1,type:{name:`number`}},{name:`max`,description:`The value at the end of the gauge`,required:!1,type:{name:`number`}},{name:`thresholds`,description:`Changes the color of the value once it reaches each threshold, in the same unit as the value`,required:!1,type:{name:`Array`,elements:[{name:`DonutThreshold`}]}},{name:`invert`,description:`Thresholds apply when the value drops below them, instead of above`,required:!1,type:{name:`boolean`}},{name:`title`,description:`Title shown in the center of the gauge; defaults to the value`,required:!1,type:{name:`string`}},{name:`subTitle`,description:`Subtitle shown below the title`,required:!1,type:{name:`string`}},{name:`startAngle`,description:`Angle where the gauge starts, in degrees (0 is the right, counter-clockwise)`,required:!1,type:{name:`number`}},{name:`endAngle`,description:`Angle where the gauge ends, in degrees`,required:!1,type:{name:`number`}},{name:`ticks`,description:`Shows the scale: split lines, ticks and labels`,required:!1,type:{name:`boolean`}},{name:`pointer`,description:`Shows a needle pointing at the value`,required:!1,type:{name:`boolean`}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors`,required:!1,type:{name:`boolean`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it`,required:!1,type:{name:`boolean`}},{name:`option`,description:`ECharts option deep merged over the generated option`,required:!1,type:{name:`ChartsOption`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartGauge.vue`]}})]),default:n(()=>[i[1]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`Note: charts live in their own package at `),r(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),l(`!`)]),r(`p`,null,[l(`patternfly-react has no gauge chart: `),r(`code`,null,`PfChartGauge`),l(` is based on the ECharts `),r(`a`,{href:`https://echarts.apache.org/en/option.html#series-gauge`},`gauge series`),l(`, styled like the donut utilization chart.`)]),r(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),a(y,{title:`Basic`,source:`<div style="width: 230px">
  <pf-chart-gauge
    aria-label="Gauge chart example"
    :height="230"
    sub-title="of 100 GBps"
    title="75%"
    :value="75" />
</div>`},{default:n(()=>[r(`div`,u,[a(v,{"aria-label":`Gauge chart example`,height:230,"sub-title":`of 100 GBps`,title:`75%`,value:75})])]),_:1}),a(y,{title:`Thresholds`,source:`<div style="width: 230px">
  <pf-chart-gauge
    aria-label="Gauge chart with thresholds example"
    :height="230"
    sub-title="of 100 GBps"
    :thresholds="[{ value: 60 }, { value: 90 }]"
    :title="\`\${used}%\`"
    :value="used" />
</div>`},{default:n(()=>[r(`div`,d,[a(v,{"aria-label":`Gauge chart with thresholds example`,height:230,"sub-title":`of 100 GBps`,thresholds:[{value:60},{value:90}],title:`${g.value}%`,value:g.value},null,8,[`title`,`value`])])]),_:1}),a(y,{title:`Inverted thresholds`,source:`<div style="width: 230px">
  <pf-chart-gauge
    aria-label="Gauge chart with inverted thresholds example"
    :height="230"
    invert
    sub-title="remaining"
    :thresholds="[{ value: 60 }, { value: 20 }]"
    :title="\`\${remaining}%\`"
    :value="remaining" />
</div>`},{default:n(()=>[r(`div`,f,[a(v,{"aria-label":`Gauge chart with inverted thresholds example`,height:230,invert:``,"sub-title":`remaining`,thresholds:[{value:60},{value:20}],title:`${_.value}%`,value:_.value},null,8,[`title`,`value`])])]),_:1}),a(y,{title:`Scale and pointer`,source:`<div style="width: 300px">
  <pf-chart-gauge
    aria-label="Gauge chart with scale and pointer example"
    :height="300"
    :max="200"
    pointer
    sub-title="requests/s"
    theme-color="green"
    ticks
    :value="120" />
</div>`},{default:n(()=>[r(`div`,p,[a(v,{"aria-label":`Gauge chart with scale and pointer example`,height:300,max:200,pointer:``,"sub-title":`requests/s`,"theme-color":`green`,ticks:``,value:120})])]),_:1}),a(y,{title:`Half circle`,source:`<div style="width: 300px">
  <pf-chart-gauge
    aria-label="Half circle gauge chart example"
    :end-angle="0"
    :height="200"
    :start-angle="180"
    sub-title="CPU"
    title="45%"
    :value="45" />
</div>`},{default:n(()=>[r(`div`,m,[a(v,{"aria-label":`Half circle gauge chart example`,"end-angle":0,height:200,"start-angle":180,"sub-title":`CPU`,title:`45%`,value:45})])]),_:1}),a(y,{title:`Skeleton`,source:`<div style="width: 230px">
  <pf-chart-gauge
    aria-label="Gauge chart skeleton example"
    :height="230"
    sub-title="of 100 GBps"
    theme-color="skeleton"
    title="75%"
    :value="75" />
</div>`},{default:n(()=>[r(`div`,h,[a(v,{"aria-label":`Gauge chart skeleton example`,height:230,"sub-title":`of 100 GBps`,"theme-color":`skeleton`,title:`75%`,value:75})])]),_:1})]),_:1})}}});export{g as default};