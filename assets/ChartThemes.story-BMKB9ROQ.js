import{N as e,Ot as t,U as n,c as r,et as i,h as a,k as o,m as s,p as c,s as l,st as u}from"./runtime-core.esm-bundler-C7C7Sr-n.js";import{h as d}from"./index-DoPLe3sE.js";var f={style:{width:`350px`}},p={style:{width:`230px`}},m=a({__name:`ChartThemes.story`,setup(a){let m=i();return(i,a)=>{let h=e(`pf-chart-bar`),g=e(`story-canvas`),_=e(`pf-chart-line`),v=e(`pf-chart-donut`),y=e(`pf-chart-area`),b=e(`pf-chart-donut-utilization`),x=e(`pf-chart-bullet`),S=e(`pf-chart-pie`),C=e(`doc-page`);return o(),r(C,{name:`Charts/ChartThemes.story.vue`,title:`Chart themes`},{description:n(()=>[...a[1]||=[c(`Every chart takes a `,-1),l(`b`,null,`theme color`,-1),c(`, or a custom ECharts theme. Patterns, skeletons and interactive legends work the same way for all of them.`,-1)]]),default:n(()=>[a[2]||=l(`div`,{class:`markdown pf-v6-c-content`},[l(`p`,null,[c(`Note: charts live in their own package at `),l(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),c(`!`)]),l(`p`,null,[c(`Theme colors are read from the PatternFly chart CSS variables, defined in `),l(`code`,null,`@patternfly/patternfly/patternfly-charts.css`),c(`: import it next to `),l(`code`,null,`patternfly.css`),c(`, or the charts always use the light theme defaults. Charts follow theme changes on the `),l(`code`,null,`html`),c(` and `),l(`code`,null,`body`),c(` elements (e.g. toggling the dark theme) without any setup. The variables are read where the chart is placed, so `),l(`code`,null,`--pf-v6-chart-*`),c(` variables overridden on a part of the page apply to its charts.`)]),l(`h2`,{class:`pf-v6-c-title`},`Theme colors`)],-1),s(g,{title:`Green`,source:`<pf-chart-bar
:height="200"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2015', y: 1 },
      { x: '2016', y: 2 },
      { x: '2017', y: 5 },
      { x: '2018', y: 3 },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: '2015', y: 2 },
      { x: '2016', y: 1 },
      { x: '2017', y: 7 },
      { x: '2018', y: 4 },
    ],
  },
  {
    name: 'Birds',
    data: [
      { x: '2015', y: 4 },
      { x: '2016', y: 4 },
      { x: '2017', y: 9 },
      { x: '2018', y: 7 },
    ],
  },
]"
theme-color="green" />`},{default:n(()=>[s(h,{height:200,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]}],"theme-color":`green`})]),_:1}),s(g,{title:`Multi-color (ordered)`,source:`<pf-chart-bar
:height="200"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2015', y: 1 },
      { x: '2016', y: 2 },
      { x: '2017', y: 5 },
      { x: '2018', y: 3 },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: '2015', y: 2 },
      { x: '2016', y: 1 },
      { x: '2017', y: 7 },
      { x: '2018', y: 4 },
    ],
  },
  {
    name: 'Birds',
    data: [
      { x: '2015', y: 4 },
      { x: '2016', y: 4 },
      { x: '2017', y: 9 },
      { x: '2018', y: 7 },
    ],
  },
]"
theme-color="multi-ordered" />`},{default:n(()=>[s(h,{height:200,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]}],"theme-color":`multi-ordered`})]),_:1}),s(g,{title:`Multi-color (unordered)`,source:`<pf-chart-line
:height="200"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2015', y: 1 },
      { x: '2016', y: 2 },
      { x: '2017', y: 5 },
      { x: '2018', y: 3 },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: '2015', y: 2 },
      { x: '2016', y: 1 },
      { x: '2017', y: 7 },
      { x: '2018', y: 4 },
    ],
  },
  {
    name: 'Birds',
    data: [
      { x: '2015', y: 4 },
      { x: '2016', y: 4 },
      { x: '2017', y: 9 },
      { x: '2018', y: 7 },
    ],
  },
]"
theme-color="multi-unordered" />`},{default:n(()=>[s(_,{height:200,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]}],"theme-color":`multi-unordered`})]),_:1}),s(g,{title:`Custom theme`,source:`<pf-chart-bar
:height="200"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2015', y: 1 },
      { x: '2016', y: 2 },
      { x: '2017', y: 5 },
      { x: '2018', y: 3 },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: '2015', y: 2 },
      { x: '2016', y: 1 },
      { x: '2017', y: 7 },
      { x: '2018', y: 4 },
    ],
  },
  {
    name: 'Birds',
    data: [
      { x: '2015', y: 4 },
      { x: '2016', y: 4 },
      { x: '2017', y: 9 },
      { x: '2018', y: 7 },
    ],
  },
]"
:theme="getCustomTheme('blue', { color: ['#5e40be', '#f4784a', '#37a3a3'] })" />`},{default:n(()=>[s(h,{height:200,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]}],theme:u(d)(`blue`,{color:[`#5e40be`,`#f4784a`,`#37a3a3`]})},null,8,[`theme`])]),_:1}),a[3]||=l(`div`,{class:`markdown pf-v6-c-content`},[l(`p`,null,[l(`code`,null,`getCustomTheme(themeColor, theme)`),c(` merges a partial `),l(`a`,{href:`https://echarts.apache.org/handbook/en/concepts/style/#theme`},`ECharts theme`),c(` over a PatternFly one.`)]),l(`h2`,{class:`pf-v6-c-title`},`Patterns`)],-1),s(g,{title:`Bar chart`,source:`<pf-chart-bar
:height="200"
patterns
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2015', y: 1 },
      { x: '2016', y: 2 },
      { x: '2017', y: 5 },
      { x: '2018', y: 3 },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: '2015', y: 2 },
      { x: '2016', y: 1 },
      { x: '2017', y: 7 },
      { x: '2018', y: 4 },
    ],
  },
  {
    name: 'Birds',
    data: [
      { x: '2015', y: 4 },
      { x: '2016', y: 4 },
      { x: '2017', y: 9 },
      { x: '2018', y: 7 },
    ],
  },
]"
theme-color="multi-ordered" />`},{default:n(()=>[s(h,{height:200,patterns:``,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]}],"theme-color":`multi-ordered`})]),_:1}),s(g,{title:`Donut chart`,source:`<div style="width: 350px">
  <pf-chart-donut
    :data="[
      { x: 'Cats', y: 35 },
      { x: 'Dogs', y: 55 },
      { x: 'Birds', y: 10 },
    ]"
    :height="230"
    legend-position="right"
    patterns
    sub-title="Pets"
    title="100" />
</div>`},{default:n(()=>[l(`div`,f,[s(v,{data:[{x:`Cats`,y:35},{x:`Dogs`,y:55},{x:`Birds`,y:10}],height:230,"legend-position":`right`,patterns:``,"sub-title":`Pets`,title:`100`})])]),_:1}),a[4]||=l(`div`,{class:`markdown pf-v6-c-content`},[l(`h2`,{class:`pf-v6-c-title`},`Skeletons`)],-1),s(g,{title:`Area chart`,source:`<pf-chart-area
:height="200"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2015', y: 1 },
      { x: '2016', y: 2 },
      { x: '2017', y: 5 },
      { x: '2018', y: 3 },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: '2015', y: 2 },
      { x: '2016', y: 1 },
      { x: '2017', y: 7 },
      { x: '2018', y: 4 },
    ],
  },
  {
    name: 'Birds',
    data: [
      { x: '2015', y: 4 },
      { x: '2016', y: 4 },
      { x: '2017', y: 9 },
      { x: '2018', y: 7 },
    ],
  },
]"
theme-color="skeleton" />`},{default:n(()=>[s(y,{height:200,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]}],"theme-color":`skeleton`})]),_:1}),s(g,{title:`Donut utilization chart`,source:`<div style="width: 230px">
  <pf-chart-donut-utilization
    :data="{ x: 'Storage capacity', y: 45 }"
    :height="230"
    sub-title="of 100 GBps"
    theme-color="skeleton"
    title="45%" />
</div>`},{default:n(()=>[l(`div`,p,[s(b,{data:{x:`Storage capacity`,y:45},height:230,"sub-title":`of 100 GBps`,"theme-color":`skeleton`,title:`45%`})])]),_:1}),s(g,{title:`Bullet chart`,source:`<pf-chart-bullet
:comparative-warning-measure-data="[{ name: 'Warning', y: 88 }]"
:height="150"
:max-domain="100"
:primary-segmented-measure-data="[{ name: 'Measure', y: 60 }]"
:qualitative-range-data="[
  { name: 'Range', y: 50 },
  { name: 'Range', y: 75 },
]"
theme-color="skeleton" />`},{default:n(()=>[s(x,{"comparative-warning-measure-data":[{name:`Warning`,y:88}],height:150,"max-domain":100,"primary-segmented-measure-data":[{name:`Measure`,y:60}],"qualitative-range-data":[{name:`Range`,y:50},{name:`Range`,y:75}],"theme-color":`skeleton`})]),_:1}),a[5]||=l(`div`,{class:`markdown pf-v6-c-content`},[l(`h2`,{class:`pf-v6-c-title`},`Legends`),l(`p`,null,[c(`The legend is on the right by default (`),l(`code`,null,`legend-position`),c(` can also be `),l(`code`,null,`bottom`),c(`, `),l(`code`,null,`bottom-left`),c(` or `),l(`code`,null,`none`),c(`). Donut and bullet charts, whose title carries the information, only show a legend when `),l(`code`,null,`legend-data`),c(` is set or a position is given. Clicking a legend item toggles its series, without extra code.`)])],-1),s(g,{title:`Legend events`,source:`<pf-chart-pie
  :data="[
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 55 },
    { x: 'Birds', y: 10 },
  ]"
  :height="230"
  @legendselectchanged="lastToggled = $event.name" />
<p>Last toggled: {{ lastToggled ?? 'none' }}</p>`},{default:n(()=>[s(S,{data:[{x:`Cats`,y:35},{x:`Dogs`,y:55},{x:`Birds`,y:10}],height:230,onLegendselectchanged:a[0]||=e=>m.value=e.name}),l(`p`,null,`Last toggled: `+t(m.value??`none`),1)]),_:1}),a[6]||=l(`div`,{class:`markdown pf-v6-c-content`},[l(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),l(`ul`,null,[l(`li`,null,[c(`Patterns are ECharts `),l(`a`,{href:`https://echarts.apache.org/en/option.html#aria.decal`},`decals`),c(`: they look different from PatternFly's SVG patterns, and custom pattern definitions are decal objects set through `),l(`code`,null,`option`),c(`.`)]),l(`li`,null,[c(`ECharts legend items can't be links. To make them act as links, handle `),l(`code`,null,`legendselectchanged`),c(` (e.g. navigating with the router), as in the legend events example.`)]),l(`li`,null,[c(`Legend tooltips are limited to text, through `),l(`code`,null,`legend.tooltip`),c(`.`)]),l(`li`,null,[c(`Victory themes (`),l(`code`,null,`ChartThemeDefinition`),c(`) don't apply to ECharts themes.`)]),l(`li`,null,[c(`There is no `),l(`code`,null,`nodeSelector`),c(` prop: charts always follow theme changes on `),l(`code`,null,`html`),c(` and `),l(`code`,null,`body`),c(`. PatternFly declares the chart variables on the root element, so, as in patternfly-react, a theme class applied to an inner element doesn't change chart colors.`)])])],-1)]),_:1})}}});export{m as default};