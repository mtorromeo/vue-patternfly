import{N as e,U as t,c as n,h as r,k as i,m as a,p as o,s,st as c}from"./runtime-core.esm-bundler-C7C7Sr-n.js";import{t as l}from"./world.geo-B_Lw-ykb.js";var u=r({__name:`LinesChart.story`,setup(r){let u=l;return(r,l)=>{let d=e(`component-info`),f=e(`pf-chart-lines`),p=e(`story-canvas`),m=e(`doc-page`);return i(),n(m,{name:`Charts/LinesChart.story.vue`,title:`Lines chart`},{description:t(()=>[...l[0]||=[o(`A `,-1),s(`b`,null,`lines`,-1),o(` chart draws lines between the points of a map, such as routes, connections or flows between places.`,-1)]]),apidocs:t(()=>[a(d,{name:`PfChartLines`,doc:{name:`PfChartLines`,exportName:`default`,displayName:`ChartLines`,description:``,tags:{},props:[{name:`option`,description:`ECharts option deep merged over the generated option, as an escape hatch for anything the props don't cover`,required:!1,type:{name:`ChartsOption`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it -- see https://echarts.apache.org/en/option.html#toolbox`,required:!1,type:{name:`boolean`}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors -- see https://echarts.apache.org/en/option.html#aria.decal`,required:!1,type:{name:`boolean`}},{name:`legendData`,description:`Legend entries; defaults to the series (or data) names`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`legendOrientation`,description:`Orientation of the legend; defaults to vertical for a right aligned legend and horizontal otherwise`,required:!1,type:{name:`union`,elements:[{name:`"horizontal"`},{name:`"vertical"`}]}},{name:`legendPosition`,description:"Position of the legend, `none` hiding it. Defaults to `right`, except for donut and bullet charts, which only\nshow a legend (on the right) when `legendData` is set.",required:!1,type:{name:`ChartLegendPosition`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`map`,description:"Name of the map drawn under the lines: a map registered with `echarts.registerMap`, or the name `geoJson` is registered with",required:!0,type:{name:`string`}},{name:`geoJson`,description:"GeoJSON of the map, registered with ECharts under the `map` name -- see https://echarts.apache.org/en/api.html#echarts.registerMap",required:!1,type:{name:`ChartMapGeoJson`}},{name:`series`,description:`The series to draw, each as a group of lines between points of the map`,required:!1,type:{name:`Array`,elements:[{name:`ChartLinesSeries`}]}},{name:`curved`,description:`Bends the lines with only a start and an end`,required:!1,type:{name:`boolean`}},{name:`directed`,description:`Draws an arrow at the end of each line with only a start and an end`,required:!1,type:{name:`boolean`}},{name:`points`,description:`Draws a point at the start and end of each line`,required:!1,type:{name:`boolean`}},{name:`effect`,description:`Moves a symbol along the lines, with a trail behind it with the canvas renderer, unless the user prefers reduced motion`,required:!1,type:{name:`boolean`}},{name:`roam`,description:`Lets the user zoom and pan the map, capturing the page scroll over it`,required:!1,type:{name:`boolean`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartLines.vue`]}})]),default:t(()=>[l[1]||=s(`div`,{class:`markdown pf-v6-c-content`},[s(`p`,null,[o(`Note: charts live in their own package at `),s(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),o(`!`)]),s(`p`,null,[o(`The map under the lines works like in `),s(`code`,null,`PfChartMap`),o(`: give its GeoJSON with `),s(`code`,null,`geo-json`),o(`, or register it once with `),s(`a`,{href:`https://echarts.apache.org/en/api.html#echarts.registerMap`},[s(`code`,null,`echarts.registerMap`)]),o(` and pass its name as `),s(`code`,null,`map`),o(`. The examples use the countries of `),s(`a`,{href:`https://www.naturalearthdata.com/`},`Natural Earth`),o(` (public domain), simplified.`)]),s(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),a(p,{title:`Basic with right aligned legend`,source:`<pf-chart-lines
aria-label="Lines chart example"
:geo-json="world"
:height="400"
map="world"
:series="[
  {
    name: 'Replication',
    data: [
      {
        name: 'Raleigh → London',
        coords: [
          [-78.6, 35.8],
          [-0.1, 51.5],
        ],
        value: 80,
      },
      {
        name: 'Raleigh → Tokyo',
        coords: [
          [-78.6, 35.8],
          [139.7, 35.7],
        ],
        value: 160,
      },
      {
        name: 'Raleigh → São Paulo',
        coords: [
          [-78.6, 35.8],
          [-46.6, -23.6],
        ],
        value: 120,
      },
      {
        name: 'London → Brno',
        coords: [
          [-0.1, 51.5],
          [16.6, 49.2],
        ],
        value: 25,
      },
      {
        name: 'London → Bangalore',
        coords: [
          [-0.1, 51.5],
          [77.6, 13.0],
        ],
        value: 140,
      },
      {
        name: 'Tokyo → Sydney',
        coords: [
          [139.7, 35.7],
          [151.2, -33.9],
        ],
        value: 110,
      },
      {
        name: 'Tokyo → Singapore',
        coords: [
          [139.7, 35.7],
          [103.8, 1.4],
        ],
        value: 70,
      },
    ],
  },
  {
    name: 'Backups',
    data: [
      {
        name: 'Boston → Raleigh',
        coords: [
          [-71.1, 42.4],
          [-78.6, 35.8],
        ],
        value: 15,
      },
      {
        name: 'Brno → London',
        coords: [
          [16.6, 49.2],
          [-0.1, 51.5],
        ],
        value: 25,
      },
      {
        name: 'Singapore → Bangalore',
        coords: [
          [103.8, 1.4],
          [77.6, 13.0],
        ],
        value: 40,
      },
      {
        name: 'Sydney → Singapore',
        coords: [
          [151.2, -33.9],
          [103.8, 1.4],
        ],
        value: 95,
      },
    ],
  },
]" />`},{default:t(()=>[a(f,{"aria-label":`Lines chart example`,"geo-json":c(u),height:400,map:`world`,series:[{name:`Replication`,data:[{name:`Raleigh → London`,coords:[[-78.6,35.8],[-.1,51.5]],value:80},{name:`Raleigh → Tokyo`,coords:[[-78.6,35.8],[139.7,35.7]],value:160},{name:`Raleigh → São Paulo`,coords:[[-78.6,35.8],[-46.6,-23.6]],value:120},{name:`London → Brno`,coords:[[-.1,51.5],[16.6,49.2]],value:25},{name:`London → Bangalore`,coords:[[-.1,51.5],[77.6,13]],value:140},{name:`Tokyo → Sydney`,coords:[[139.7,35.7],[151.2,-33.9]],value:110},{name:`Tokyo → Singapore`,coords:[[139.7,35.7],[103.8,1.4]],value:70}]},{name:`Backups`,data:[{name:`Boston → Raleigh`,coords:[[-71.1,42.4],[-78.6,35.8]],value:15},{name:`Brno → London`,coords:[[16.6,49.2],[-.1,51.5]],value:25},{name:`Singapore → Bangalore`,coords:[[103.8,1.4],[77.6,13]],value:40},{name:`Sydney → Singapore`,coords:[[151.2,-33.9],[103.8,1.4]],value:95}]}]},null,8,[`geo-json`])]),_:1}),a(p,{title:`Curved, directed, with points, trails and bottom aligned legend`,source:`<pf-chart-lines
aria-label="Lines chart example"
curved
directed
effect
:geo-json="world"
:height="450"
legend-position="bottom"
map="world"
points
:series="[
  {
    name: 'Replication',
    data: [
      {
        name: 'Raleigh → London',
        coords: [
          [-78.6, 35.8],
          [-0.1, 51.5],
        ],
        value: 80,
      },
      {
        name: 'Raleigh → Tokyo',
        coords: [
          [-78.6, 35.8],
          [139.7, 35.7],
        ],
        value: 160,
      },
      {
        name: 'Raleigh → São Paulo',
        coords: [
          [-78.6, 35.8],
          [-46.6, -23.6],
        ],
        value: 120,
      },
      {
        name: 'London → Brno',
        coords: [
          [-0.1, 51.5],
          [16.6, 49.2],
        ],
        value: 25,
      },
      {
        name: 'London → Bangalore',
        coords: [
          [-0.1, 51.5],
          [77.6, 13.0],
        ],
        value: 140,
      },
      {
        name: 'Tokyo → Sydney',
        coords: [
          [139.7, 35.7],
          [151.2, -33.9],
        ],
        value: 110,
      },
      {
        name: 'Tokyo → Singapore',
        coords: [
          [139.7, 35.7],
          [103.8, 1.4],
        ],
        value: 70,
      },
    ],
  },
  {
    name: 'Backups',
    data: [
      {
        name: 'Boston → Raleigh',
        coords: [
          [-71.1, 42.4],
          [-78.6, 35.8],
        ],
        value: 15,
      },
      {
        name: 'Brno → London',
        coords: [
          [16.6, 49.2],
          [-0.1, 51.5],
        ],
        value: 25,
      },
      {
        name: 'Singapore → Bangalore',
        coords: [
          [103.8, 1.4],
          [77.6, 13.0],
        ],
        value: 40,
      },
      {
        name: 'Sydney → Singapore',
        coords: [
          [151.2, -33.9],
          [103.8, 1.4],
        ],
        value: 95,
      },
    ],
  },
]"
theme-color="multi-unordered" />`},{default:t(()=>[a(f,{"aria-label":`Lines chart example`,curved:``,directed:``,effect:``,"geo-json":c(u),height:450,"legend-position":`bottom`,map:`world`,points:``,series:[{name:`Replication`,data:[{name:`Raleigh → London`,coords:[[-78.6,35.8],[-.1,51.5]],value:80},{name:`Raleigh → Tokyo`,coords:[[-78.6,35.8],[139.7,35.7]],value:160},{name:`Raleigh → São Paulo`,coords:[[-78.6,35.8],[-46.6,-23.6]],value:120},{name:`London → Brno`,coords:[[-.1,51.5],[16.6,49.2]],value:25},{name:`London → Bangalore`,coords:[[-.1,51.5],[77.6,13]],value:140},{name:`Tokyo → Sydney`,coords:[[139.7,35.7],[151.2,-33.9]],value:110},{name:`Tokyo → Singapore`,coords:[[139.7,35.7],[103.8,1.4]],value:70}]},{name:`Backups`,data:[{name:`Boston → Raleigh`,coords:[[-71.1,42.4],[-78.6,35.8]],value:15},{name:`Brno → London`,coords:[[16.6,49.2],[-.1,51.5]],value:25},{name:`Singapore → Bangalore`,coords:[[103.8,1.4],[77.6,13]],value:40},{name:`Sydney → Singapore`,coords:[[151.2,-33.9],[103.8,1.4]],value:95}]}],"theme-color":`multi-unordered`},null,8,[`geo-json`])]),_:1}),a(p,{title:`Paths on a custom map`,source:`<pf-chart-lines
aria-label="Data center cabling example"
directed
:geo-json="{
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: 'Room A' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [0, 0],
            [4, 0],
            [4, 3],
            [0, 3],
            [0, 0],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Room B' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [4, 0],
            [8, 0],
            [8, 3],
            [4, 3],
            [4, 0],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Room C' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [0, 3],
            [3, 3],
            [3, 6],
            [0, 6],
            [0, 3],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Room D' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [3, 3],
            [8, 3],
            [8, 6],
            [3, 6],
            [3, 3],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Office' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [8, 0],
            [10, 0],
            [10, 6],
            [8, 6],
            [8, 0],
          ],
        ],
      },
    },
  ],
}"
:height="300"
legend-position="bottom"
map="data-center"
:option="{ geo: { aspectScale: 1 } }"
points
:series="[
  {
    name: 'Fiber',
    data: [
      {
        name: 'Office → Room B',
        coords: [
          [9, 1],
          [6, 1.5],
        ],
      },
      {
        name: 'Office → Room D',
        coords: [
          [9, 5],
          [5.5, 4.5],
        ],
      },
    ],
  },
  {
    name: 'Copper',
    data: [
      {
        name: 'Room B → Room A',
        coords: [
          [6, 1.5],
          [6, 0.5],
          [2, 0.5],
          [2, 1.5],
        ],
      },
      {
        name: 'Room D → Room C',
        coords: [
          [5.5, 4.5],
          [5.5, 5.5],
          [1.5, 5.5],
          [1.5, 4.5],
        ],
      },
    ],
  },
]"
theme-color="multi-ordered" />`},{default:t(()=>[a(f,{"aria-label":`Data center cabling example`,directed:``,"geo-json":{type:`FeatureCollection`,features:[{type:`Feature`,properties:{name:`Room A`},geometry:{type:`Polygon`,coordinates:[[[0,0],[4,0],[4,3],[0,3],[0,0]]]}},{type:`Feature`,properties:{name:`Room B`},geometry:{type:`Polygon`,coordinates:[[[4,0],[8,0],[8,3],[4,3],[4,0]]]}},{type:`Feature`,properties:{name:`Room C`},geometry:{type:`Polygon`,coordinates:[[[0,3],[3,3],[3,6],[0,6],[0,3]]]}},{type:`Feature`,properties:{name:`Room D`},geometry:{type:`Polygon`,coordinates:[[[3,3],[8,3],[8,6],[3,6],[3,3]]]}},{type:`Feature`,properties:{name:`Office`},geometry:{type:`Polygon`,coordinates:[[[8,0],[10,0],[10,6],[8,6],[8,0]]]}}]},height:300,"legend-position":`bottom`,map:`data-center`,option:{geo:{aspectScale:1}},points:``,series:[{name:`Fiber`,data:[{name:`Office → Room B`,coords:[[9,1],[6,1.5]]},{name:`Office → Room D`,coords:[[9,5],[5.5,4.5]]}]},{name:`Copper`,data:[{name:`Room B → Room A`,coords:[[6,1.5],[6,.5],[2,.5],[2,1.5]]},{name:`Room D → Room C`,coords:[[5.5,4.5],[5.5,5.5],[1.5,5.5],[1.5,4.5]]}]}],"theme-color":`multi-ordered`})]),_:1}),l[2]||=s(`div`,{class:`markdown pf-v6-c-content`},[s(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),s(`p`,null,[o(`react-charts has no lines chart: this is an ECharts only chart, a `),s(`a`,{href:`https://echarts.apache.org/en/option.html#series-lines`},`lines series`),o(` on a `),s(`a`,{href:`https://echarts.apache.org/en/option.html#geo`},`geo`),o(` component.`)]),s(`p`,null,[o(`Each line goes through its `),s(`code`,null,`coords`),o(`, as `),s(`code`,null,`[longitude, latitude]`),o(` (or `),s(`code`,null,`[x, y]`),o(` on maps that are not geographic): lines with more than two points are drawn as paths, which `),s(`code`,null,`curved`),o(` doesn't bend and `),s(`code`,null,`directed`),o(` doesn't end with an arrow. The map is a neutral background, without interactions. Trails (`),s(`code`,null,`effect`),o(`) are not drawn when the user prefers reduced motion. Zooming and panning with `),s(`code`,null,`roam`),o(` is off by default, as it captures the page scroll over the map.`)])],-1)]),_:1})}}});export{u as default};