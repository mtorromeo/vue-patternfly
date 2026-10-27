import{F as e,G as t,c as n,h as r,j as i,l as a,m as o}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{n as s}from"./index-Cl3hMFDe.js";var c={},l={style:{width:`200px`}};function u(s,c){let u=e(`component-info`),d=e(`pf-chart-bullet`),f=e(`story-canvas`),p=e(`doc-page`);return i(),a(p,{name:`Charts/BulletChart.story.vue`,title:`Bullet chart`},{description:t(()=>[...c[0]||=[o(`A `,-1),n(`b`,null,`bullet chart`,-1),o(` compares a measure against qualitative ranges and comparative targets.`,-1)]]),apidocs:t(()=>[r(u,{name:`PfChartBullet`,doc:{name:`PfChartBullet`,exportName:`default`,displayName:`ChartBullet`,description:``,tags:{},props:[{name:`option`,description:`ECharts option deep merged over the generated option, as an escape hatch for anything the props don't cover`,required:!1,type:{name:`ChartsOption`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it -- see https://echarts.apache.org/en/option.html#toolbox`,required:!1,type:{name:`boolean`}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors -- see https://echarts.apache.org/en/option.html#aria.decal`,required:!1,type:{name:`boolean`}},{name:`legendData`,description:`Legend entries; defaults to the series (or data) names`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`legendOrientation`,description:`Orientation of the legend; defaults to vertical for a right aligned legend and horizontal otherwise`,required:!1,type:{name:`union`,elements:[{name:`"horizontal"`},{name:`"vertical"`}]}},{name:`legendPosition`,description:"Position of the legend, `none` hiding it. Defaults to `right`, except for donut and bullet charts, which only\nshow a legend (on the right) when `legendData` is set.",required:!1,type:{name:`ChartLegendPosition`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`comparativeMeasureData`,description:`Comparative measures drawn as markers, e.g. a target`,required:!1,type:{name:`Array`,elements:[{name:`ChartDatum`}]}},{name:`comparativeErrorMeasureData`,description:`Comparative error measures, drawn as markers in the danger color`,required:!1,type:{name:`Array`,elements:[{name:`ChartDatum`}]}},{name:`comparativeWarningMeasureData`,description:`Comparative warning measures, drawn as markers in the warning color`,required:!1,type:{name:`Array`,elements:[{name:`ChartDatum`}]}},{name:`primaryDotMeasureData`,description:`Primary measures drawn as dots`,required:!1,type:{name:`Array`,elements:[{name:`ChartDatum`}]}},{name:`primarySegmentedMeasureData`,description:`Primary measures drawn as overlapping bars`,required:!1,type:{name:`Array`,elements:[{name:`ChartDatum`}]}},{name:`qualitativeRangeData`,description:`Qualitative ranges drawn as overlapping bars behind the measures`,required:!1,type:{name:`Array`,elements:[{name:`ChartDatum`}]}},{name:`horizontal`,description:`Draws the bullet horizontally (default) or vertically`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`invert`,description:`Reverses the direction of the value axis`,required:!1,type:{name:`boolean`}},{name:`minDomain`,description:`The minimum value of the value axis; defaults to 0, or the lowest negative value`,required:!1,type:{name:`number`}},{name:`maxDomain`,description:`The maximum value of the value axis; defaults to the highest value`,required:!1,type:{name:`number`}},{name:`title`,description:`Title of the bullet`,required:!1,type:{name:`string`}},{name:`subTitle`,description:`Subtitle of the bullet`,required:!1,type:{name:`string`}},{name:`titlePosition`,description:`Position of the title`,required:!1,type:{name:`union`,elements:[{name:`"left"`},{name:`"top-left"`}]}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartBullet.vue`]}})]),default:t(()=>[c[1]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[o(`Note: charts live in their own package at `),n(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),o(`!`)]),n(`p`,null,`ECharts has no bullet chart: it is drawn with overlapping bars for the qualitative ranges and the primary measures, and markers for the dot and comparative measures. Since they are read together, hovering them only shows the tooltip, without the highlight of the other charts.`),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),r(f,{title:`Basic`,source:`<pf-chart-bullet
aria-label="Bullet chart example"
:comparative-warning-measure-data="[{ name: 'Warning', y: 88 }]"
:height="150"
:max-domain="100"
:primary-segmented-measure-data="[{ name: 'Measure', y: 60 }]"
:qualitative-range-data="[
  { name: 'Range', y: 50 },
  { name: 'Range', y: 75 },
]" />`},{default:t(()=>[r(d,{"aria-label":`Bullet chart example`,"comparative-warning-measure-data":[{name:`Warning`,y:88}],height:150,"max-domain":100,"primary-segmented-measure-data":[{name:`Measure`,y:60}],"qualitative-range-data":[{name:`Range`,y:50},{name:`Range`,y:75}]})]),_:1}),r(f,{title:`Segmented primary measure`,source:`<pf-chart-bullet
aria-label="Bullet chart example"
:comparative-warning-measure-data="[{ name: 'Warning', y: 88 }]"
:height="150"
:max-domain="100"
:primary-segmented-measure-data="[
  { name: 'Measure', y: 25 },
  { name: 'Measure', y: 60 },
]"
:qualitative-range-data="[
  { name: 'Range', y: 50 },
  { name: 'Range', y: 75 },
]"
sub-title="Measure details"
title="Text label" />`},{default:t(()=>[r(d,{"aria-label":`Bullet chart example`,"comparative-warning-measure-data":[{name:`Warning`,y:88}],height:150,"max-domain":100,"primary-segmented-measure-data":[{name:`Measure`,y:25},{name:`Measure`,y:60}],"qualitative-range-data":[{name:`Range`,y:50},{name:`Range`,y:75}],"sub-title":`Measure details`,title:`Text label`})]),_:1}),r(f,{title:`Primary measure dot with bottom aligned legend`,source:`<pf-chart-bullet
aria-label="Bullet chart example"
:comparative-warning-measure-data="[{ name: 'Warning', y: 88 }]"
:height="200"
legend-position="bottom"
:max-domain="100"
:primary-dot-measure-data="[
  { name: 'Measure', y: 25 },
  { name: 'Measure', y: 60 },
]"
:qualitative-range-data="[
  { name: 'Range', y: 50 },
  { name: 'Range', y: 75 },
]"
sub-title="Measure details"
title="Text label" />`},{default:t(()=>[r(d,{"aria-label":`Bullet chart example`,"comparative-warning-measure-data":[{name:`Warning`,y:88}],height:200,"legend-position":`bottom`,"max-domain":100,"primary-dot-measure-data":[{name:`Measure`,y:25},{name:`Measure`,y:60}],"qualitative-range-data":[{name:`Range`,y:50},{name:`Range`,y:75}],"sub-title":`Measure details`,title:`Text label`})]),_:1}),r(f,{title:`Error measure`,source:`<pf-chart-bullet
aria-label="Bullet chart example"
:comparative-error-measure-data="[{ name: 'Error', y: 120 }]"
:comparative-warning-measure-data="[{ name: 'Warning', y: 80 }]"
:height="150"
:max-domain="125"
:primary-segmented-measure-data="[
  { name: 'Measure', y: 25 },
  { name: 'Measure', y: 75 },
]"
:qualitative-range-data="[
  { name: 'Range', y: 65 },
  { name: 'Range', y: 100 },
]"
title="Text label" />`},{default:t(()=>[r(d,{"aria-label":`Bullet chart example`,"comparative-error-measure-data":[{name:`Error`,y:120}],"comparative-warning-measure-data":[{name:`Warning`,y:80}],height:150,"max-domain":125,"primary-segmented-measure-data":[{name:`Measure`,y:25},{name:`Measure`,y:75}],"qualitative-range-data":[{name:`Range`,y:65},{name:`Range`,y:100}],title:`Text label`})]),_:1}),r(f,{title:`Negative and positive primary measures`,source:`<pf-chart-bullet
aria-label="Bullet chart example"
:comparative-warning-measure-data="[{ name: 'Warning', y: 60 }]"
:height="150"
:max-domain="75"
:min-domain="-25"
:primary-segmented-measure-data="[
  { name: 'Measure', y: -15 },
  { name: 'Measure', y: -10 },
  { name: 'Measure', y: 25 },
  { name: 'Measure', y: 50 },
]"
:qualitative-range-data="[
  { name: 'Range', y: 25 },
  { name: 'Range', y: 50 },
]"
title="Text label" />`},{default:t(()=>[r(d,{"aria-label":`Bullet chart example`,"comparative-warning-measure-data":[{name:`Warning`,y:60}],height:150,"max-domain":75,"min-domain":-25,"primary-segmented-measure-data":[{name:`Measure`,y:-15},{name:`Measure`,y:-10},{name:`Measure`,y:25},{name:`Measure`,y:50}],"qualitative-range-data":[{name:`Range`,y:25},{name:`Range`,y:50}],title:`Text label`})]),_:1}),r(f,{title:`Reversed with right aligned legend`,source:`<pf-chart-bullet
aria-label="Bullet chart example"
:comparative-warning-measure-data="[{ name: 'Warning', y: 88 }]"
:height="150"
invert
legend-position="right"
:max-domain="100"
:primary-segmented-measure-data="[
  { name: 'Measure', y: 25 },
  { name: 'Measure', y: 60 },
]"
:qualitative-range-data="[
  { name: 'Range', y: 50 },
  { name: 'Range', y: 75 },
]"
title="Text label" />`},{default:t(()=>[r(d,{"aria-label":`Bullet chart example`,"comparative-warning-measure-data":[{name:`Warning`,y:88}],height:150,invert:``,"legend-position":`right`,"max-domain":100,"primary-segmented-measure-data":[{name:`Measure`,y:25},{name:`Measure`,y:60}],"qualitative-range-data":[{name:`Range`,y:50},{name:`Range`,y:75}],title:`Text label`})]),_:1}),r(f,{title:`Vertical with segmented primary measure`,source:`<div style="width: 200px">
  <pf-chart-bullet
    aria-label="Bullet chart example"
    :comparative-warning-measure-data="[{ name: 'Warning', y: 88 }]"
    :height="500"
    :horizontal="false"
    :max-domain="100"
    :primary-segmented-measure-data="[
      { name: 'Measure', y: 25 },
      { name: 'Measure', y: 60 },
    ]"
    :qualitative-range-data="[
      { name: 'Range', y: 50 },
      { name: 'Range', y: 75 },
    ]"
    title="Text label" />
</div>`},{default:t(()=>[n(`div`,l,[r(d,{"aria-label":`Bullet chart example`,"comparative-warning-measure-data":[{name:`Warning`,y:88}],height:500,horizontal:!1,"max-domain":100,"primary-segmented-measure-data":[{name:`Measure`,y:25},{name:`Measure`,y:60}],"qualitative-range-data":[{name:`Range`,y:50},{name:`Range`,y:75}],title:`Text label`})])]),_:1}),c[2]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`ul`,null,[n(`li`,null,[o(`Bullet groups (several bullets sharing a group title) are not supported yet: render several `),n(`code`,null,`PfChartBullet`),o(`.`)]),n(`li`,null,[o(`Domains are numbers (`),n(`code`,null,`max-domain="100"`),o(`) rather than `),n(`code`,null,`{ y: 100 }`),o(` objects.`)]),n(`li`,null,[n(`code`,null,`comparativeMeasureData`),o(` adds plain comparative markers, which patternfly-react only exposes as `),n(`code`,null,`comparativeZeroMeasureComponent`),o(`.`)])])],-1)]),_:1})}var d=s(c,[[`render`,u]]);export{d as default};