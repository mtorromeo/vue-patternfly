import{t as e}from"./extension-CYexglMW.js";import{N as t,U as n,c as r,h as i,k as a,m as o,p as s,s as c,st as l}from"./runtime-core.esm-bundler-C7C7Sr-n.js";import{n as u}from"./installSVGRenderer-YAm_cTFr.js";import{a as d,g as f,i as p,l as m}from"./index-DoPLe3sE.js";var h={style:{width:`350px`}},g={style:{width:`300px`}},_={style:{width:`350px`}},v=i({__name:`PieChart.story`,setup(i){e([m,p,d,u]);let v=(e,t)=>({name:e,value:t,var:`var(${e})`}),y=v(`--pf-v6-chart-echarts-global--axis--axis-line--item-style--Color`,`#c7c7c7`),b=v(`--pf-t--global--background--color--inverse--default`,`#292929`),x=v(`--pf-t--global--background--color--primary--default`,`#ffffff`),S=v(`--pf-t--global--background--color--secondary--default`,`#f2f2f2`),C=v(`--pf-t--global--text--color--inverse`,`#ffffff`),w=v(`--pf-t--global--text--color--regular`,`#151515`),T=v(`--pf-t--global--text--color--subtle`,`#383838`);return(e,i)=>{let u=t(`component-info`),d=t(`pf-chart-pie`),p=t(`story-canvas`),m=t(`pf-charts`),v=t(`doc-page`);return a(),r(v,{name:`Charts/PieChart.story.vue`,title:`Pie chart`},{description:n(()=>[...i[0]||=[s(`A `,-1),c(`b`,null,`pie chart`,-1),s(` shows the parts of a whole as slices of a circle.`,-1)]]),apidocs:n(()=>[o(u,{name:`PfChartPie`,doc:{name:`PfChartPie`,exportName:`default`,displayName:`ChartPie`,description:``,tags:{},props:[{name:`option`,description:`ECharts option deep merged over the generated option, as an escape hatch for anything the props don't cover`,required:!1,type:{name:`ChartsOption`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it -- see https://echarts.apache.org/en/option.html#toolbox`,required:!1,type:{name:`boolean`}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors -- see https://echarts.apache.org/en/option.html#aria.decal`,required:!1,type:{name:`boolean`}},{name:`legendData`,description:`Legend entries; defaults to the series (or data) names`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`legendOrientation`,description:`Orientation of the legend; defaults to vertical for a right aligned legend and horizontal otherwise`,required:!1,type:{name:`union`,elements:[{name:`"horizontal"`},{name:`"vertical"`}]}},{name:`legendPosition`,description:"Position of the legend, `none` hiding it. Defaults to `right`, except for donut and bullet charts, which only\nshow a legend (on the right) when `legendData` is set.",required:!1,type:{name:`ChartLegendPosition`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`data`,description:"Slices of the pie: `y` is the value and `x` (or `name`) the label",required:!1,type:{name:`Array`,elements:[{name:`ChartDatum`}]}},{name:`padAngle`,description:`Angle between slices, in degrees`,required:!1,type:{name:`number`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartPie.vue`]}})]),default:n(()=>[i[1]||=c(`div`,{class:`markdown pf-v6-c-content`},[c(`p`,null,[s(`Note: charts live in their own package at `),c(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),s(`!`)]),c(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),o(p,{title:`Basic with right aligned legend`,source:`<div style="width: 350px">
  <pf-chart-pie
    aria-label="Pie chart example"
    :data="[
      { x: 'Cats', y: 35 },
      { x: 'Dogs', y: 55 },
      { x: 'Birds', y: 10 },
    ]"
    :height="230" />
</div>`},{default:n(()=>[c(`div`,h,[o(d,{"aria-label":`Pie chart example`,data:[{x:`Cats`,y:35},{x:`Dogs`,y:55},{x:`Birds`,y:10}],height:230})])]),_:1}),o(p,{title:`Multi-color (ordered) with bottom aligned legend`,source:`<div style="width: 300px">
  <pf-chart-pie
    aria-label="Pie chart example"
    :data="[
      { x: 'Cats', y: 35 },
      { x: 'Dogs', y: 55 },
      { x: 'Birds', y: 10 },
    ]"
    :height="275"
    legend-position="bottom"
    theme-color="multi-ordered" />
</div>`},{default:n(()=>[c(`div`,g,[o(d,{"aria-label":`Pie chart example`,data:[{x:`Cats`,y:35},{x:`Dogs`,y:55},{x:`Birds`,y:10}],height:275,"legend-position":`bottom`,"theme-color":`multi-ordered`})])]),_:1}),o(p,{title:`Custom color scale`,source:`<div style="width: 350px">
  <pf-chart-pie
    aria-label="Pie chart example"
    :data="[
      { x: 'Cats', y: 35 },
      { x: 'Dogs', y: 55 },
      { x: 'Birds', y: 10 },
    ]"
    :height="230"
    :option="{ color: ['#4cb140', '#f0ab00', '#c9190b'] }" />
</div>`},{default:n(()=>[c(`div`,_,[o(d,{"aria-label":`Pie chart example`,data:[{x:`Cats`,y:35},{x:`Dogs`,y:55},{x:`Birds`,y:10}],height:230,option:{color:[`#4cb140`,`#f0ab00`,`#c9190b`]}})])]),_:1}),o(p,{title:`Nightingale chart`,source:`<pf-chart-pie
aria-label="Nightingale chart example"
:data="[
  { x: 'rose 1', y: 40 },
  { x: 'rose 2', y: 38 },
  { x: 'rose 3', y: 32 },
  { x: 'rose 4', y: 30 },
  { x: 'rose 5', y: 28 },
  { x: 'rose 6', y: 26 },
  { x: 'rose 7', y: 22 },
  { x: 'rose 8', y: 18 },
]"
:height="500"
legend-position="bottom"
:option="{
  series: [
    { name: 'Nightingale Chart', radius: ['15%', '100%'], roseType: 'area', itemStyle: { borderRadius: 8 } },
  ],
}"
theme-color="multi-ordered"
toolbox />`},{default:n(()=>[o(d,{"aria-label":`Nightingale chart example`,data:[{x:`rose 1`,y:40},{x:`rose 2`,y:38},{x:`rose 3`,y:32},{x:`rose 4`,y:30},{x:`rose 5`,y:28},{x:`rose 6`,y:26},{x:`rose 7`,y:22},{x:`rose 8`,y:18}],height:500,"legend-position":`bottom`,option:{series:[{name:`Nightingale Chart`,radius:[`15%`,`100%`],roseType:`area`,itemStyle:{borderRadius:8}}]},"theme-color":`multi-ordered`,toolbox:``})]),_:1}),o(p,{title:`Label line adjust`,source:`<pf-charts
  aria-label="Pies with adjusted label lines example"
  :height="600"
  :option="{
    title: {
      text: 'Reading time per book',
      left: 'center',
      textStyle: { color: getComputedStyleValue(t_global_text_color_subtle), fontSize: 14, fontWeight: 'normal' },
    },
    series: [
      {
        type: 'pie',
        name: 'Shelf 1',
        top: '0.0%',
        height: '33.33%',
        left: 'center',
        width: 600,
        radius: [20, 60],
        itemStyle: {
          borderColor: getComputedStyleValue(t_global_background_color_primary_default),
          borderWidth: 1,
        },
        label: {
          show: true,
          alignTo: 'edge',
          // Rich text: a line for the name, another for the time
          formatter: '{name|{b}}\\n{time|{c} hours}',
          minMargin: 5,
          edgeDistance: 10,
          lineHeight: 15,
          rich: { time: { color: getComputedStyleValue(t_global_text_color_subtle), fontSize: 10 } },
        },
        labelLine: { show: true, length: 15, length2: 0, maxSurfaceAngle: 80 },
        // The line ends at the side of the label facing the pie
        labelLayout: (params: LabelLayoutOptionCallbackParams) => {
          const points = params.labelLinePoints as number[][];
          const isLeft = points[1][0] < points[0][0];
          points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width;
          return { labelLinePoints: points };
        },
        data: [
          { name: 'The Gambler', value: 5.6 },
          { name: 'Complete works of Dostoevsky', value: 1 },
          { name: 'Records of the Grand Historian', value: 0.8 },
          { name: 'Gardner\\'s Art Through the Ages', value: 0.5 },
          { name: 'Surfaces and Essences', value: 0.5 },
          { name: 'Others', value: 3.8 },
        ],
      },
      {
        type: 'pie',
        name: 'Shelf 2',
        top: '33.33%',
        height: '33.33%',
        left: 'center',
        width: 600,
        radius: [20, 60],
        itemStyle: {
          borderColor: getComputedStyleValue(t_global_background_color_primary_default),
          borderWidth: 1,
        },
        label: {
          show: true,
          alignTo: 'edge',
          // Rich text: a line for the name, another for the time
          formatter: '{name|{b}}\\n{time|{c} hours}',
          minMargin: 5,
          edgeDistance: 10,
          lineHeight: 15,
          rich: { time: { color: getComputedStyleValue(t_global_text_color_subtle), fontSize: 10 } },
        },
        labelLine: { show: true, length: 15, length2: 0, maxSurfaceAngle: 80 },
        // The line ends at the side of the label facing the pie
        labelLayout: (params: LabelLayoutOptionCallbackParams) => {
          const points = params.labelLinePoints as number[][];
          const isLeft = points[1][0] < points[0][0];
          points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width;
          return { labelLinePoints: points };
        },
        data: [
          { name: 'Foundation and Earth', value: 3.8 },
          { name: 'Product methodology', value: 2.3 },
          { name: 'The flight of art', value: 2.2 },
          { name: 'The World Crisis', value: 1.3 },
          { name: 'Essential Scrum', value: 1.2 },
          { name: 'Others', value: 5.7 },
        ],
      },
      {
        type: 'pie',
        name: 'Shelf 3',
        top: '66.66%',
        height: '33.33%',
        left: 'center',
        width: 600,
        radius: [20, 60],
        itemStyle: {
          borderColor: getComputedStyleValue(t_global_background_color_primary_default),
          borderWidth: 1,
        },
        label: {
          show: true,
          alignTo: 'edge',
          // Rich text: a line for the name, another for the time
          formatter: '{name|{b}}\\n{time|{c} hours}',
          minMargin: 5,
          edgeDistance: 10,
          lineHeight: 15,
          rich: { time: { color: getComputedStyleValue(t_global_text_color_subtle), fontSize: 10 } },
        },
        labelLine: { show: true, length: 15, length2: 0, maxSurfaceAngle: 80 },
        // The line ends at the side of the label facing the pie
        labelLayout: (params: LabelLayoutOptionCallbackParams) => {
          const points = params.labelLinePoints as number[][];
          const isLeft = points[1][0] < points[0][0];
          points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width;
          return { labelLinePoints: points };
        },
        data: [
          { name: 'Klein Bottle', value: 3.5 },
          { name: 'The Most Important Thing', value: 2.8 },
          { name: 'A Brief History of China', value: 1.7 },
          { name: 'Educated', value: 1.4 },
          { name: 'Surfaces and Essences', value: 0.5 },
          { name: 'Others', value: 3.8 },
        ],
      },
    ],
  }"
  theme-color="multi-ordered"
></pf-charts>`},{default:n(()=>[o(m,{"aria-label":`Pies with adjusted label lines example`,height:600,option:{title:{text:`Reading time per book`,left:`center`,textStyle:{color:l(f)(l(T)),fontSize:14,fontWeight:`normal`}},series:[{type:`pie`,name:`Shelf 1`,top:`0.0%`,height:`33.33%`,left:`center`,width:600,radius:[20,60],itemStyle:{borderColor:l(f)(l(x)),borderWidth:1},label:{show:!0,alignTo:`edge`,formatter:`{name|{b}}
{time|{c} hours}`,minMargin:5,edgeDistance:10,lineHeight:15,rich:{time:{color:l(f)(l(T)),fontSize:10}}},labelLine:{show:!0,length:15,length2:0,maxSurfaceAngle:80},labelLayout:e=>{let t=e.labelLinePoints,n=t[1][0]<t[0][0];return t[2][0]=n?e.labelRect.x:e.labelRect.x+e.labelRect.width,{labelLinePoints:t}},data:[{name:`The Gambler`,value:5.6},{name:`Complete works of Dostoevsky`,value:1},{name:`Records of the Grand Historian`,value:.8},{name:`Gardner's Art Through the Ages`,value:.5},{name:`Surfaces and Essences`,value:.5},{name:`Others`,value:3.8}]},{type:`pie`,name:`Shelf 2`,top:`33.33%`,height:`33.33%`,left:`center`,width:600,radius:[20,60],itemStyle:{borderColor:l(f)(l(x)),borderWidth:1},label:{show:!0,alignTo:`edge`,formatter:`{name|{b}}
{time|{c} hours}`,minMargin:5,edgeDistance:10,lineHeight:15,rich:{time:{color:l(f)(l(T)),fontSize:10}}},labelLine:{show:!0,length:15,length2:0,maxSurfaceAngle:80},labelLayout:e=>{let t=e.labelLinePoints,n=t[1][0]<t[0][0];return t[2][0]=n?e.labelRect.x:e.labelRect.x+e.labelRect.width,{labelLinePoints:t}},data:[{name:`Foundation and Earth`,value:3.8},{name:`Product methodology`,value:2.3},{name:`The flight of art`,value:2.2},{name:`The World Crisis`,value:1.3},{name:`Essential Scrum`,value:1.2},{name:`Others`,value:5.7}]},{type:`pie`,name:`Shelf 3`,top:`66.66%`,height:`33.33%`,left:`center`,width:600,radius:[20,60],itemStyle:{borderColor:l(f)(l(x)),borderWidth:1},label:{show:!0,alignTo:`edge`,formatter:`{name|{b}}
{time|{c} hours}`,minMargin:5,edgeDistance:10,lineHeight:15,rich:{time:{color:l(f)(l(T)),fontSize:10}}},labelLine:{show:!0,length:15,length2:0,maxSurfaceAngle:80},labelLayout:e=>{let t=e.labelLinePoints,n=t[1][0]<t[0][0];return t[2][0]=n?e.labelRect.x:e.labelRect.x+e.labelRect.width,{labelLinePoints:t}},data:[{name:`Klein Bottle`,value:3.5},{name:`The Most Important Thing`,value:2.8},{name:`A Brief History of China`,value:1.7},{name:`Educated`,value:1.4},{name:`Surfaces and Essences`,value:.5},{name:`Others`,value:3.8}]}]},"theme-color":`multi-ordered`},null,8,[`option`])]),_:1}),o(p,{title:`Nested pies`,source:`<pf-charts
  aria-label="Nested pies example"
  :height="550"
  :option="{
    tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
    legend: {
      top: 0,
      data: [
        'Direct',
        'Marketing',
        'Search Engine',
        'Email',
        'Union Ads',
        'Video Ads',
        'Baidu',
        'Google',
        'Bing',
        'Others',
      ],
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        selectedMode: 'single',
        center: ['50%', '55%'],
        radius: [0, '30%'],
        label: {
          show: true,
          position: 'inner',
          fontSize: 14,
          color: getComputedStyleValue(t_global_text_color_inverse),
        },
        labelLine: { show: false },
        data: [
          { value: 1548, name: 'Search Engine' },
          { value: 775, name: 'Direct' },
          { value: 679, name: 'Marketing', selected: true },
        ],
      },
      {
        name: 'Access From',
        type: 'pie',
        center: ['50%', '55%'],
        radius: ['45%', '60%'],
        labelLine: { show: true, length: 30 },
        label: {
          show: true,
          // Rich text: the series name, a rule, then the name, value and percentage of the slice
          formatter: '{a|{a}}{abg|}\\n{hr|}\\n  {b|{b}: }{c}  {per|{d}%}  ',
          backgroundColor: getComputedStyleValue(t_global_background_color_secondary_default),
          borderColor: getComputedStyleValue(chart_echarts_global_axis_axis_line_item_style_Color),
          borderWidth: 1,
          borderRadius: 4,
          rich: {
            a: { color: getComputedStyleValue(t_global_text_color_subtle), lineHeight: 22, align: 'center' },
            hr: {
              borderColor: getComputedStyleValue(chart_echarts_global_axis_axis_line_item_style_Color),
              width: '100%',
              borderWidth: 1,
              height: 0,
            },
            b: {
              color: getComputedStyleValue(t_global_text_color_regular),
              fontSize: 14,
              fontWeight: 'bold',
              lineHeight: 33,
            },
            per: {
              color: getComputedStyleValue(t_global_text_color_inverse),
              backgroundColor: getComputedStyleValue(t_global_background_color_inverse_default),
              padding: [3, 4],
              borderRadius: 4,
            },
          },
        },
        data: [
          { value: 1048, name: 'Baidu' },
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Email' },
          { value: 251, name: 'Google' },
          { value: 234, name: 'Union Ads' },
          { value: 147, name: 'Bing' },
          { value: 135, name: 'Video Ads' },
          { value: 102, name: 'Others' },
        ],
      },
    ],
  }"
  theme-color="multi-ordered"
></pf-charts>`},{default:n(()=>[o(m,{"aria-label":`Nested pies example`,height:550,option:{tooltip:{trigger:`item`,formatter:`{a} <br/>{b}: {c} ({d}%)`},legend:{top:0,data:[`Direct`,`Marketing`,`Search Engine`,`Email`,`Union Ads`,`Video Ads`,`Baidu`,`Google`,`Bing`,`Others`]},series:[{name:`Access From`,type:`pie`,selectedMode:`single`,center:[`50%`,`55%`],radius:[0,`30%`],label:{show:!0,position:`inner`,fontSize:14,color:l(f)(l(C))},labelLine:{show:!1},data:[{value:1548,name:`Search Engine`},{value:775,name:`Direct`},{value:679,name:`Marketing`,selected:!0}]},{name:`Access From`,type:`pie`,center:[`50%`,`55%`],radius:[`45%`,`60%`],labelLine:{show:!0,length:30},label:{show:!0,formatter:`{a|{a}}{abg|}
{hr|}
  {b|{b}: }{c}  {per|{d}%}  `,backgroundColor:l(f)(l(S)),borderColor:l(f)(l(y)),borderWidth:1,borderRadius:4,rich:{a:{color:l(f)(l(T)),lineHeight:22,align:`center`},hr:{borderColor:l(f)(l(y)),width:`100%`,borderWidth:1,height:0},b:{color:l(f)(l(w)),fontSize:14,fontWeight:`bold`,lineHeight:33},per:{color:l(f)(l(C)),backgroundColor:l(f)(l(b)),padding:[3,4],borderRadius:4}}},data:[{value:1048,name:`Baidu`},{value:335,name:`Direct`},{value:310,name:`Email`},{value:251,name:`Google`},{value:234,name:`Union Ads`},{value:147,name:`Bing`},{value:135,name:`Video Ads`},{value:102,name:`Others`}]}]},"theme-color":`multi-ordered`},null,8,[`option`])]),_:1}),i[2]||=c(`div`,{class:`markdown pf-v6-c-content`},[c(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),c(`p`,null,[s(`Victory's `),c(`code`,null,`colorScale`),s(` is ECharts' `),c(`a`,{href:`https://echarts.apache.org/en/option.html#color`},[c(`code`,null,`color`)]),s(` option, set through `),c(`code`,null,`option`),s(`.`)]),c(`p`,null,[s(`The Nightingale chart reproduces the ECharts `),c(`a`,{href:`https://echarts.apache.org/examples/en/editor.html?c=pie-roseType-simple`},`example`),s(`, which react-charts can't draw: with `),c(`a`,{href:`https://echarts.apache.org/en/option.html#series-pie.roseType`},[c(`code`,null,`roseType: 'area'`)]),s(` the slices keep the same angle and their radius shows the value (`),c(`code`,null,`'radius'`),s(` changes the angles too). Like the other pie charts, it shows the values in the legend and tooltip instead of slice labels.`)]),c(`p`,null,[s(`The `),c(`a`,{href:`https://echarts.apache.org/examples/en/editor.html?c=pie-labelLine-adjust`},`label line adjust`),s(` and `),c(`a`,{href:`https://echarts.apache.org/examples/en/editor.html?c=pie-nest`},`nested pies`),s(` examples draw several pie series, which `),c(`code`,null,`PfChartPie`),s(` doesn't: they use `),c(`code`,null,`PfCharts`),s(` with an ECharts option, registering the pie chart and the components they need with `),c(`code`,null,`echarts.use()`),s(`. Their labels are shown explicitly, as the PatternFly pie defaults hide them, and their colors come from the PatternFly tokens.`)])],-1)]),_:1})}}});export{v as default};