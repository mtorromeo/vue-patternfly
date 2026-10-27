import{t as e}from"./extension-CYexglMW.js";import{F as t,G as n,c as r,ft as i,g as a,h as o,j as s,l as c,m as l}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{t as u}from"./install-6CsB5vv-.js";import{W as d,_ as f,c as p,h as m}from"./index-Cl3hMFDe.js";import{n as h}from"./users-icon-BrDe7FA0.js";var g={name:`BugIcon`,height:512,width:576,svgPathData:`M192 96c0-53 43-96 96-96s96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6zm345.6 12.8c10.6 14.1 7.7 34.2-6.4 44.8l-97.8 73.3c5.3 8.9 9.3 18.7 11.8 29.1l98.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0 0 32c0 2.6-.1 5.3-.2 7.9l83.4 62.5c14.1 10.6 17 30.7 6.4 44.8s-30.7 17-44.8 6.4l-63.1-47.3c-23.2 44.2-66.5 76.2-117.7 83.9L312 280c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 230.2c-51.2-7.7-94.5-39.7-117.7-83.9L83.2 473.6c-14.1 10.6-34.2 7.7-44.8-6.4s-7.7-34.2 6.4-44.8l83.4-62.5c-.1-2.6-.2-5.2-.2-7.9l0-32-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l98.8 0c2.5-10.4 6.5-20.2 11.8-29.1L44.8 153.6c-14.1-10.6-17-30.7-6.4-44.8s30.7-17 44.8-6.4L192 184c12.3-5.1 25.8-8 40-8l112 0c14.2 0 27.7 2.8 40 8l108.8-81.6c14.1-10.6 34.2-7.7 44.8 6.4z`,yOffset:0,xOffset:0};d(g);var _={name:`PlaneIcon`,height:512,width:576,svgPathData:`M520 200c30.9 0 56 25.1 56 56s-25.1 56-56 56l-127.3 0-159.2 173.6c-6.1 6.6-14.6 10.4-23.6 10.4l-43.7 0c-10.9 0-18.6-10.7-15.2-21.1l54.3-162.9-99.7 0-52.8 66c-3 3.8-7.6 6-12.5 6l-19.8 0c-10.4 0-18-9.8-15.5-19.9L32 256 5 147.9C2.4 137.8 10.1 128 20.5 128l19.8 0c4.9 0 9.5 2.2 12.5 6l52.8 66 99.7 0-54.3-162.9C147.6 26.7 155.3 16 166.2 16l43.7 0c9 0 17.5 3.8 23.6 10.4L392.7 200 520 200z`,yOffset:0,xOffset:0};d(_);var v={name:`RocketIcon`,height:512,width:512,svgPathData:`M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z`,yOffset:0,xOffset:0};d(v);var y=a({__name:`CalendarChart.story`,setup(a){e([u,p]);let d={name:`--pf-v6-chart-color-orange-300`,value:`#ca6c0f`,var:`var(--pf-v6-chart-color-orange-300)`},y={name:`--pf-v6-chart-global--label--Fill`,value:`#1f1f1f`,var:`var(--pf-v6-chart-global--label--Fill)`};return(e,a)=>{let u=t(`component-info`),p=t(`pf-chart-calendar`),b=t(`story-canvas`),x=t(`doc-page`);return s(),c(x,{name:`Charts/CalendarChart.story.vue`,title:`Calendar chart`},{description:n(()=>[...a[0]||=[l(`A `,-1),r(`b`,null,`calendar`,-1),l(` heatmap shows a value per day, laid out as the weeks of a calendar, such as daily activity over a year.`,-1)]]),apidocs:n(()=>[o(u,{name:`PfChartCalendar`,doc:{name:`PfChartCalendar`,exportName:`default`,displayName:`ChartCalendar`,description:``,tags:{},props:[{name:`data`,description:`The days with a value, mapped to a color of the scale`,required:!1,type:{name:`Array`,elements:[{name:`ChartCalendarDatum`}]}},{name:`range`,description:"The days shown: a year (`2026`), a month (`'2026-03'`) or the first and last day; defaults to the days of the data",required:!1,type:{name:`union`,elements:[{name:`number`},{name:`string`},{name:`tuple`,elements:[{name:`ChartCalendarDate`},{name:`ChartCalendarDate`}]}]}},{name:`min`,description:`The value mapped to the lightest color; defaults to the lowest value`,required:!1,type:{name:`number`}},{name:`max`,description:`The value mapped to the darkest color; defaults to the highest value`,required:!1,type:{name:`number`}},{name:`vertical`,description:`Lays out the weeks from top to bottom instead of left to right`,required:!1,type:{name:`boolean`}},{name:`firstDay`,description:`First day of the week, from 0 (Sunday) to 6 (Saturday)`,required:!1,type:{name:`number`}},{name:`locale`,description:`Locale of the day and month names and of the dates in the tooltip; defaults to the browser locale`,required:!1,type:{name:`string`}},{name:`legendTooltip`,defaultValue:{func:!1,value:`true`}},{name:`svgRenderer`,defaultValue:{func:!1,value:`true`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartCalendar.vue`]}})]),default:n(()=>[a[1]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`Note: charts live in their own package at `),r(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),l(`!`)]),r(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),o(b,{title:`Basic`,source:`<pf-chart-calendar
  aria-label="Calendar chart example"
  :data="
    Array.from({ length: 365 }, (_, day) => ({
      date: new Date(2026, 0, day + 1),
      value: day % 9 === 4 ? null : Math.round(10 + 10 * Math.sin(day / 6) * Math.cos(day / 17)),
    }))
  "
  :height="220"
  locale="en-US"
  :range="2026"
></pf-chart-calendar>`},{default:n(()=>[o(p,{"aria-label":`Calendar chart example`,data:Array.from({length:365},(e,t)=>({date:new Date(2026,0,t+1),value:t%9==4?null:Math.round(10+10*Math.sin(t/6)*Math.cos(t/17))})),height:220,locale:`en-US`,range:2026},null,8,[`data`])]),_:1}),o(b,{title:`Green, starting from Monday, in Italian`,source:`<pf-chart-calendar
  aria-label="Calendar chart example"
  :data="
    Array.from({ length: 365 }, (_, day) => ({
      date: new Date(2026, 0, day + 1),
      value: day % 9 === 4 ? null : Math.round(10 + 10 * Math.sin(day / 6) * Math.cos(day / 17)),
    }))
  "
  :first-day="1"
  :height="220"
  locale="it-IT"
  :range="2026"
  theme-color="green"
></pf-chart-calendar>`},{default:n(()=>[o(p,{"aria-label":`Calendar chart example`,data:Array.from({length:365},(e,t)=>({date:new Date(2026,0,t+1),value:t%9==4?null:Math.round(10+10*Math.sin(t/6)*Math.cos(t/17))})),"first-day":1,height:220,locale:`it-IT`,range:2026,"theme-color":`green`},null,8,[`data`])]),_:1}),o(b,{title:`Vertical quarter with bottom aligned legend`,source:`<pf-chart-calendar
  aria-label="Calendar chart example"
  :data="
    Array.from({ length: 365 }, (_, day) => ({
      date: new Date(2026, 0, day + 1),
      value: day % 9 === 4 ? null : Math.round(10 + 10 * Math.sin(day / 6) * Math.cos(day / 17)),
    }))
  "
  :height="450"
  legend-position="bottom"
  locale="en-US"
  :range="['2026-01-01', '2026-03-31']"
  vertical
  :width="350"
></pf-chart-calendar>`},{default:n(()=>[o(p,{"aria-label":`Calendar chart example`,data:Array.from({length:365},(e,t)=>({date:new Date(2026,0,t+1),value:t%9==4?null:Math.round(10+10*Math.sin(t/6)*Math.cos(t/17))})),height:450,"legend-position":`bottom`,locale:`en-US`,range:[`2026-01-01`,`2026-03-31`],vertical:``,width:350},null,8,[`data`])]),_:1}),o(b,{title:`Calendar graph`,source:`<pf-chart-calendar
  aria-label="Calendar graph example"
  :data="
    Array.from({ length: 365 }, (_, day) => ({
      date: new Date(2026, 0, day + 1),
      value: day % 9 === 4 ? null : Math.round(10 + 10 * Math.sin(day / 6) * Math.cos(day / 17)),
    }))
  "
  :first-day="1"
  :height="500"
  legend-position="bottom"
  locale="en-US"
  :option="{
    series: [
      // The heatmap of the wrapper, unchanged
      {},
      {
        type: 'graph',
        coordinateSystem: 'calendar',
        name: 'Milestones',
        // The nodes are days: the milestones of a project
        data: [
          { name: 'Kickoff', value: ['2026-02-02', 4] },
          { name: 'Design review', value: ['2026-02-11', 9] },
          { name: 'Beta', value: ['2026-02-24', 15] },
          { name: 'Release candidate', value: ['2026-03-10', 18] },
          { name: 'Release', value: ['2026-03-19', 20] },
          { name: 'Retrospective', value: ['2026-03-26', 6] },
        ],
        // Each milestone is linked to the next one
        links: [
          { source: 0, target: 1 },
          { source: 1, target: 2 },
          { source: 2, target: 3 },
          { source: 3, target: 4 },
          { source: 4, target: 5 },
        ],
        edgeSymbol: ['none', 'arrow'],
        edgeSymbolSize: 8,
        // A color standing out from the heatmap, read at each render so it follows the theme
        itemStyle: { color: () => getComputedStyleValue(chart_color_orange_300) },
        symbolSize: 14,
        tooltip: {
          formatter: (params: TooltipComponentFormatterCallbackParams) => {
            const { data, dataType } = [params].flat()[0];
            const node = data as { name: string; value: [string, number] };
            return dataType === 'node' ? \`\${node.name}: \${node.value[0]}\` : '';
          },
        },
        // Above the cells of the calendar
        z: 10,
      },
    ],
  }"
  :range="['2026-02-01', '2026-03-31']"
  theme-color="multi-ordered"
  vertical
  :width="400"
></pf-chart-calendar>`},{default:n(()=>[o(p,{"aria-label":`Calendar graph example`,data:Array.from({length:365},(e,t)=>({date:new Date(2026,0,t+1),value:t%9==4?null:Math.round(10+10*Math.sin(t/6)*Math.cos(t/17))})),"first-day":1,height:500,"legend-position":`bottom`,locale:`en-US`,option:{series:[{},{type:`graph`,coordinateSystem:`calendar`,name:`Milestones`,data:[{name:`Kickoff`,value:[`2026-02-02`,4]},{name:`Design review`,value:[`2026-02-11`,9]},{name:`Beta`,value:[`2026-02-24`,15]},{name:`Release candidate`,value:[`2026-03-10`,18]},{name:`Release`,value:[`2026-03-19`,20]},{name:`Retrospective`,value:[`2026-03-26`,6]}],links:[{source:0,target:1},{source:1,target:2},{source:2,target:3},{source:3,target:4},{source:4,target:5}],edgeSymbol:[`none`,`arrow`],edgeSymbolSize:8,itemStyle:{color:()=>i(f)(d)},symbolSize:14,tooltip:{formatter:e=>{let{data:t,dataType:n}=[e].flat()[0],r=t;return n===`node`?`${r.name}: ${r.value[0]}`:``}},z:10}]},range:[`2026-02-01`,`2026-03-31`],"theme-color":`multi-ordered`,vertical:``,width:400},null,8,[`data`,`option`])]),_:1}),o(b,{title:`Custom calendar icons`,source:`<pf-chart-calendar
  aria-label="Calendar with event icons example"
  :first-day="1"
  :height="480"
  legend-position="none"
  locale="en-US"
  :option="{
    series: [
      // The heatmap of the wrapper, empty
      {},
      {
        type: 'custom',
        coordinateSystem: 'calendar',
        name: 'Events',
        dimensions: ['date', { name: 'events', type: 'ordinal' }],
        // The events of each day
        data: [
          ['2026-03-01', ''],
          ['2026-03-02', 'Release|Meeting'],
          ['2026-03-03', 'Release|Incident|Release|Release'],
          ['2026-03-04', 'Meeting'],
          ['2026-03-05', 'Meeting|Release|Incident'],
          ['2026-03-06', 'Release|Meeting|Meeting|Incident'],
          ['2026-03-07', 'Incident|Release'],
          ['2026-03-08', 'Release'],
          ['2026-03-09', 'Meeting|Meeting|Incident'],
          ['2026-03-10', 'Meeting|Release|Travel'],
          ['2026-03-11', 'Meeting|Incident'],
          ['2026-03-12', 'Release|Travel|Meeting|Incident'],
          ['2026-03-13', 'Travel|Release|Meeting|Travel'],
          ['2026-03-14', 'Incident|Travel|Travel|Release'],
          ['2026-03-15', 'Incident'],
          ['2026-03-16', ''],
          ['2026-03-17', 'Travel|Release|Travel|Meeting'],
          ['2026-03-18', 'Travel|Incident|Incident'],
          ['2026-03-19', 'Travel|Release'],
          ['2026-03-20', 'Travel|Release|Travel|Incident'],
          ['2026-03-21', 'Meeting'],
          ['2026-03-22', ''],
          ['2026-03-23', 'Meeting|Release|Incident|Release'],
          ['2026-03-24', 'Meeting|Release'],
          ['2026-03-25', ''],
          ['2026-03-26', 'Incident|Travel'],
          ['2026-03-27', ''],
          ['2026-03-28', 'Travel|Travel|Incident|Release'],
          ['2026-03-29', 'Incident|Incident|Release|Incident'],
          ['2026-03-30', 'Travel'],
          ['2026-03-31', 'Travel|Meeting'],
        ],
        renderItem: (params: CustomSeriesRenderItemParams, api: CustomSeriesRenderItemAPI) => {
          const icons = {
            Meeting: UsersIconConfig,
            Release: RocketIconConfig,
            Incident: BugIconConfig,
            Travel: PlaneIconConfig,
          };
          const colors = getTheme('multi-ordered').color ?? [];
          // Position of the icons in the cell, from its center, for 1 to 4 events
          const layouts = [
            [[0, 0]],
            [
              [-0.22, 0],
              [0.22, 0],
            ],
            [
              [0, -0.18],
              [-0.22, 0.18],
              [0.22, 0.18],
            ],
            [
              [-0.22, -0.18],
              [0.22, -0.18],
              [-0.22, 0.18],
              [0.22, 0.18],
            ],
          ];
          const [x, y] = api.coord(api.value(0));
          const { cellWidth, cellHeight } = params.coordSys as unknown as {
            cellWidth: number;
            cellHeight: number;
          };
          const events = String(api.value(1)).split('|').filter(Boolean) as (keyof typeof icons)[];
          const size = Math.min(cellWidth, cellHeight) / 4;
          return {
            type: 'group',
            children: [
              {
                type: 'text',
                style: {
                  fill: getComputedStyleValue(chart_global_label_Fill),
                  font: api.font({ fontSize: 12 }),
                  // Calendar dates are given to the custom series as timestamps
                  text: String(new Date(api.value(0)).getDate()),
                  x: x - cellWidth / 2 + 6,
                  y: y - cellHeight / 2 + 4,
                },
              },
              ...(layouts[events.length - 1] ?? []).map(([dx, dy], index) => ({
                type: 'path' as const,
                shape: {
                  height: size,
                  pathData: icons[events[index]].svgPathData as string,
                  width: size,
                  x: x + dx * cellWidth - size / 2,
                  y: y + 6 + dy * cellHeight - size / 2,
                },
                style: { fill: colors[Object.keys(icons).indexOf(events[index]) % colors.length] },
              })),
            ],
          };
        },
        tooltip: {
          formatter: (params: TooltipComponentFormatterCallbackParams) => {
            const [date, events] = [params].flat()[0].value as [string, string];
            return \`\${date}: \${events ? events.split('|').join(', ') : 'no events'}\`;
          },
        },
        // Above the cells of the calendar, which would hide the icons
        z: 10,
      },
    ],
  }"
  range="2026-03"
  vertical
  :width="560"
></pf-chart-calendar>`},{default:n(()=>[o(p,{"aria-label":`Calendar with event icons example`,"first-day":1,height:480,"legend-position":`none`,locale:`en-US`,option:{series:[{},{type:`custom`,coordinateSystem:`calendar`,name:`Events`,dimensions:[`date`,{name:`events`,type:`ordinal`}],data:[[`2026-03-01`,``],[`2026-03-02`,`Release|Meeting`],[`2026-03-03`,`Release|Incident|Release|Release`],[`2026-03-04`,`Meeting`],[`2026-03-05`,`Meeting|Release|Incident`],[`2026-03-06`,`Release|Meeting|Meeting|Incident`],[`2026-03-07`,`Incident|Release`],[`2026-03-08`,`Release`],[`2026-03-09`,`Meeting|Meeting|Incident`],[`2026-03-10`,`Meeting|Release|Travel`],[`2026-03-11`,`Meeting|Incident`],[`2026-03-12`,`Release|Travel|Meeting|Incident`],[`2026-03-13`,`Travel|Release|Meeting|Travel`],[`2026-03-14`,`Incident|Travel|Travel|Release`],[`2026-03-15`,`Incident`],[`2026-03-16`,``],[`2026-03-17`,`Travel|Release|Travel|Meeting`],[`2026-03-18`,`Travel|Incident|Incident`],[`2026-03-19`,`Travel|Release`],[`2026-03-20`,`Travel|Release|Travel|Incident`],[`2026-03-21`,`Meeting`],[`2026-03-22`,``],[`2026-03-23`,`Meeting|Release|Incident|Release`],[`2026-03-24`,`Meeting|Release`],[`2026-03-25`,``],[`2026-03-26`,`Incident|Travel`],[`2026-03-27`,``],[`2026-03-28`,`Travel|Travel|Incident|Release`],[`2026-03-29`,`Incident|Incident|Release|Incident`],[`2026-03-30`,`Travel`],[`2026-03-31`,`Travel|Meeting`]],renderItem:(e,t)=>{let n={Meeting:i(h),Release:i(v),Incident:i(g),Travel:i(_)},r=i(m)(`multi-ordered`).color??[],a=[[[0,0]],[[-.22,0],[.22,0]],[[0,-.18],[-.22,.18],[.22,.18]],[[-.22,-.18],[.22,-.18],[-.22,.18],[.22,.18]]],[o,s]=t.coord(t.value(0)),{cellWidth:c,cellHeight:l}=e.coordSys,u=String(t.value(1)).split(`|`).filter(Boolean),d=Math.min(c,l)/4;return{type:`group`,children:[{type:`text`,style:{fill:i(f)(y),font:t.font({fontSize:12}),text:String(new Date(t.value(0)).getDate()),x:o-c/2+6,y:s-l/2+4}},...(a[u.length-1]??[]).map(([e,t],i)=>({type:`path`,shape:{height:d,pathData:n[u[i]].svgPathData,width:d,x:o+e*c-d/2,y:s+6+t*l-d/2},style:{fill:r[Object.keys(n).indexOf(u[i])%r.length]}}))]}},tooltip:{formatter:e=>{let[t,n]=[e].flat()[0].value;return`${t}: ${n?n.split(`|`).join(`, `):`no events`}`}},z:10}]},range:`2026-03`,vertical:``,width:560},null,8,[`option`])]),_:1}),a[2]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`h2`,{class:`pf-v6-c-title`},`Calendars with other series`),r(`p`,null,[l(`The calendar is an ECharts coordinate system: other series can be drawn on it by adding them to `),r(`code`,null,`option`),l(`, after the heatmap, with a `),r(`code`,null,`z`),l(` above the cells of the calendar (e.g. `),r(`code`,null,`z: 10`),l(`), which would hide them otherwise. The color scale only applies to the heatmap, and each series keeps its own tooltip. Register the ECharts modules they need with `),r(`code`,null,`echarts.use()`),l(`.`)]),r(`ul`,null,[r(`li`,null,[r(`strong`,null,`Calendar graph`),l(`: a `),r(`code`,null,`graph`),l(` series whose nodes are days, linked in order (like the ECharts `),r(`a`,{href:`https://echarts.apache.org/examples/en/editor.html?c=calendar-graph`},`calendar graph`),l(` example).`)]),r(`li`,null,[r(`strong`,null,`Custom calendar icons`),l(`: without `),r(`code`,null,`data`),l(`, the heatmap draws nothing and a `),r(`code`,null,`custom`),l(` series draws the day number and an icon per event in each cell (like the ECharts `),r(`a`,{href:`https://echarts.apache.org/examples/en/editor.html?c=custom-calendar-icon`},`custom calendar icon`),l(` example). The icons are the SVG paths of `),r(`code`,null,`@vue-patternfly/icons`),l(`.`)])]),r(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),r(`p`,null,[l(`react-charts has no calendar chart: this is an ECharts only chart, a heatmap on an `),r(`a`,{href:`https://echarts.apache.org/en/option.html#calendar`},`ECharts calendar`),l(`.`)]),r(`p`,null,[l(`Like `),r(`code`,null,`PfChartHeatmap`),l(`, values are mapped to a sequential scale of the theme color, shown as the legend. Days without a value are drawn in the secondary background color, to tell them apart from the lowest values. Day and month names, and the dates in the tooltip, follow `),r(`code`,null,`locale`),l(`.`)])],-1)]),_:1})}}});export{y as default};