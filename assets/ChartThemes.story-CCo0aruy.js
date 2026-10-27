import{F as e,G as t,Nt as n,c as r,ft as i,g as a,h as o,j as s,l as c,m as l,rt as u}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{g as d}from"./index-Cl3hMFDe.js";var f={style:{width:`350px`}},p={style:{width:`230px`}},m=a({__name:`ChartThemes.story`,setup(a){let m=u();return(a,u)=>{let h=e(`pf-chart-bar`),g=e(`story-canvas`),_=e(`pf-chart-line`),v=e(`pf-chart-donut`),y=e(`pf-chart-area`),b=e(`pf-chart-donut-utilization`),x=e(`pf-chart-bullet`),S=e(`pf-chart-pie`),C=e(`doc-page`);return s(),c(C,{name:`Charts/ChartThemes.story.vue`,title:`Chart themes`},{description:t(()=>[...u[1]||=[l(`Every chart takes a `,-1),r(`b`,null,`theme color`,-1),l(`, or a custom ECharts theme. Patterns, skeletons and interactive legends work the same way for all of them.`,-1)]]),default:t(()=>[u[2]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`Note: charts live in their own package at `),r(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),l(`!`)]),r(`p`,null,[l(`Theme colors are read from the PatternFly chart CSS variables, defined in `),r(`code`,null,`@patternfly/patternfly/patternfly-charts.css`),l(`: import it next to `),r(`code`,null,`patternfly.css`),l(`, or the charts always use the light theme defaults. Charts follow theme changes on the `),r(`code`,null,`html`),l(` and `),r(`code`,null,`body`),l(` elements (e.g. toggling the dark theme) without any setup. The variables are read where the chart is placed, so `),r(`code`,null,`--pf-v6-chart-*`),l(` variables overridden on a part of the page apply to its charts.`)]),r(`h2`,{class:`pf-v6-c-title`},`Theme colors`)],-1),o(g,{title:`Green`,source:`<pf-chart-bar
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
theme-color="green" />`},{default:t(()=>[o(h,{height:200,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]}],"theme-color":`green`})]),_:1}),o(g,{title:`Multi-color (ordered)`,source:`<pf-chart-bar
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
theme-color="multi-ordered" />`},{default:t(()=>[o(h,{height:200,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]}],"theme-color":`multi-ordered`})]),_:1}),o(g,{title:`Multi-color (unordered)`,source:`<pf-chart-line
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
theme-color="multi-unordered" />`},{default:t(()=>[o(_,{height:200,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]}],"theme-color":`multi-unordered`})]),_:1}),o(g,{title:`Custom theme`,source:`<pf-chart-bar
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
:theme="getCustomTheme('blue', { color: ['#5e40be', '#f4784a', '#37a3a3'] })" />`},{default:t(()=>[o(h,{height:200,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]}],theme:i(d)(`blue`,{color:[`#5e40be`,`#f4784a`,`#37a3a3`]})},null,8,[`theme`])]),_:1}),u[3]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[r(`code`,null,`getCustomTheme(themeColor, theme)`),l(` merges a partial `),r(`a`,{href:`https://echarts.apache.org/handbook/en/concepts/style/#theme`},`ECharts theme`),l(` over a PatternFly one.`)]),r(`h2`,{class:`pf-v6-c-title`},`Patterns`)],-1),o(g,{title:`Bar chart`,source:`<pf-chart-bar
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
theme-color="multi-ordered" />`},{default:t(()=>[o(h,{height:200,patterns:``,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]}],"theme-color":`multi-ordered`})]),_:1}),o(g,{title:`Donut chart`,source:`<div style="width: 350px">
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
</div>`},{default:t(()=>[r(`div`,f,[o(v,{data:[{x:`Cats`,y:35},{x:`Dogs`,y:55},{x:`Birds`,y:10}],height:230,"legend-position":`right`,patterns:``,"sub-title":`Pets`,title:`100`})])]),_:1}),u[4]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`h2`,{class:`pf-v6-c-title`},`Skeletons`)],-1),o(g,{title:`Area chart`,source:`<pf-chart-area
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
theme-color="skeleton" />`},{default:t(()=>[o(y,{height:200,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]}],"theme-color":`skeleton`})]),_:1}),o(g,{title:`Donut utilization chart`,source:`<div style="width: 230px">
  <pf-chart-donut-utilization
    :data="{ x: 'Storage capacity', y: 45 }"
    :height="230"
    sub-title="of 100 GBps"
    theme-color="skeleton"
    title="45%" />
</div>`},{default:t(()=>[r(`div`,p,[o(b,{data:{x:`Storage capacity`,y:45},height:230,"sub-title":`of 100 GBps`,"theme-color":`skeleton`,title:`45%`})])]),_:1}),o(g,{title:`Bullet chart`,source:`<pf-chart-bullet
:comparative-warning-measure-data="[{ name: 'Warning', y: 88 }]"
:height="150"
:max-domain="100"
:primary-segmented-measure-data="[{ name: 'Measure', y: 60 }]"
:qualitative-range-data="[
  { name: 'Range', y: 50 },
  { name: 'Range', y: 75 },
]"
theme-color="skeleton" />`},{default:t(()=>[o(x,{"comparative-warning-measure-data":[{name:`Warning`,y:88}],height:150,"max-domain":100,"primary-segmented-measure-data":[{name:`Measure`,y:60}],"qualitative-range-data":[{name:`Range`,y:50},{name:`Range`,y:75}],"theme-color":`skeleton`})]),_:1}),u[5]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`h2`,{class:`pf-v6-c-title`},`Legends`),r(`p`,null,[l(`The legend is on the right by default (`),r(`code`,null,`legend-position`),l(` can also be `),r(`code`,null,`bottom`),l(`, `),r(`code`,null,`bottom-left`),l(` or `),r(`code`,null,`none`),l(`). Donut and bullet charts, whose title carries the information, only show a legend when `),r(`code`,null,`legend-data`),l(` is set or a position is given. Clicking a legend item toggles its series, without extra code.`)])],-1),o(g,{title:`Legend events`,source:`<pf-chart-pie
  :data="[
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 55 },
    { x: 'Birds', y: 10 },
  ]"
  :height="230"
  @legendselectchanged="lastToggled = $event.name" />
<p>Last toggled: {{ lastToggled ?? 'none' }}</p>`},{default:t(()=>[o(S,{data:[{x:`Cats`,y:35},{x:`Dogs`,y:55},{x:`Birds`,y:10}],height:230,onLegendselectchanged:u[0]||=e=>m.value=e.name}),r(`p`,null,`Last toggled: `+n(m.value??`none`),1)]),_:1}),u[6]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),r(`ul`,null,[r(`li`,null,[l(`Patterns are ECharts `),r(`a`,{href:`https://echarts.apache.org/en/option.html#aria.decal`},`decals`),l(`: they look different from PatternFly's SVG patterns, and custom pattern definitions are decal objects set through `),r(`code`,null,`option`),l(`.`)]),r(`li`,null,[l(`ECharts legend items can't be links. To make them act as links, handle `),r(`code`,null,`legendselectchanged`),l(` (e.g. navigating with the router), as in the legend events example.`)]),r(`li`,null,[l(`Legend tooltips are limited to text, through `),r(`code`,null,`legend.tooltip`),l(`.`)]),r(`li`,null,[l(`Victory themes (`),r(`code`,null,`ChartThemeDefinition`),l(`) don't apply to ECharts themes.`)]),r(`li`,null,[l(`There is no `),r(`code`,null,`nodeSelector`),l(` prop: charts always follow theme changes on `),r(`code`,null,`html`),l(` and `),r(`code`,null,`body`),l(`. PatternFly declares the chart variables on the root element, so, as in patternfly-react, a theme class applied to an inner element doesn't change chart colors.`)])])],-1)]),_:1})}}});export{m as default};