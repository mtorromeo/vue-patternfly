import{F as e,G as t,c as n,ft as r,g as i,h as a,j as o,l as s,m as c}from"./runtime-core.esm-bundler-DKmYt4j6.js";import{t as l}from"./world.geo-B_Lw-ykb.js";var u=i({__name:`MapChart.story`,setup(i){let u=l;return(i,l)=>{let d=e(`component-info`),f=e(`pf-chart-map`),p=e(`story-canvas`),m=e(`doc-page`);return o(),s(m,{name:`Charts/MapChart.story.vue`,title:`Map chart`},{description:t(()=>[...l[0]||=[c(`A `,-1),n(`b`,null,`map`,-1),c(` (choropleth) colors each region of a map by its value, such as the users of a service in each country.`,-1)]]),apidocs:t(()=>[a(d,{name:`PfChartMap`,doc:{name:`PfChartMap`,exportName:`default`,displayName:`ChartMap`,description:``,tags:{},props:[{name:`map`,description:"Name of the map: a map registered with `echarts.registerMap`, or the name `geoJson` is registered with",required:!0,type:{name:`string`}},{name:`geoJson`,description:"GeoJSON of the map, registered with ECharts under the `map` name -- see https://echarts.apache.org/en/api.html#echarts.registerMap",required:!1,type:{name:`ChartMapGeoJson`}},{name:`data`,description:`The regions with a value, matched by name with the regions of the map and mapped to a color of the scale`,required:!1,type:{name:`Array`,elements:[{name:`ChartMapDatum`}]}},{name:`min`,description:`The value mapped to the lightest color; defaults to the lowest value`,required:!1,type:{name:`number`}},{name:`max`,description:`The value mapped to the darkest color; defaults to the highest value`,required:!1,type:{name:`number`}},{name:`labels`,description:`Shows the name of each region`,required:!1,type:{name:`boolean`}},{name:`roam`,description:`Lets the user zoom and pan the map, capturing the page scroll over it`,required:!1,type:{name:`boolean`}},{name:`legendTooltip`,defaultValue:{func:!1,value:`true`}},{name:`svgRenderer`,defaultValue:{func:!1,value:`true`}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`}],sourceFiles:[`packages/charts/src/ChartMap.vue`]}})]),default:t(()=>[l[1]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`p`,null,[c(`Note: charts live in their own package at `),n(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),c(`!`)]),n(`p`,null,[c(`ECharts ships no maps: give the GeoJSON of the map with `),n(`code`,null,`geo-json`),c(`, or register it once with `),n(`a`,{href:`https://echarts.apache.org/en/api.html#echarts.registerMap`},[n(`code`,null,`echarts.registerMap`)]),c(` and pass its name as `),n(`code`,null,`map`),c(`. The examples use the countries of `),n(`a`,{href:`https://www.naturalearthdata.com/`},`Natural Earth`),c(` (public domain), simplified.`)]),n(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),a(p,{title:`Basic`,source:`<pf-chart-map
aria-label="Map chart example"
:data="[
  { name: 'United States of America', value: 820 },
  { name: 'Canada', value: 210 },
  { name: 'Mexico', value: 160 },
  { name: 'Brazil', value: 340 },
  { name: 'Argentina', value: 120 },
  { name: 'United Kingdom', value: 380 },
  { name: 'France', value: 300 },
  { name: 'Germany', value: 450 },
  { name: 'Italy', value: 260 },
  { name: 'Spain', value: 220 },
  { name: 'Poland', value: 140 },
  { name: 'Sweden', value: 90 },
  { name: 'India', value: 610 },
  { name: 'China', value: 530 },
  { name: 'Japan', value: 410 },
  { name: 'South Korea', value: 190 },
  { name: 'Australia', value: 230 },
  { name: 'South Africa', value: 80 },
  { name: 'Nigeria', value: 70 },
  { name: 'Egypt', value: 60 },
  { name: 'Turkey', value: 110 },
  { name: 'Indonesia', value: 150 },
]"
:geo-json="world"
:height="400"
map="world" />`},{default:t(()=>[a(f,{"aria-label":`Map chart example`,data:[{name:`United States of America`,value:820},{name:`Canada`,value:210},{name:`Mexico`,value:160},{name:`Brazil`,value:340},{name:`Argentina`,value:120},{name:`United Kingdom`,value:380},{name:`France`,value:300},{name:`Germany`,value:450},{name:`Italy`,value:260},{name:`Spain`,value:220},{name:`Poland`,value:140},{name:`Sweden`,value:90},{name:`India`,value:610},{name:`China`,value:530},{name:`Japan`,value:410},{name:`South Korea`,value:190},{name:`Australia`,value:230},{name:`South Africa`,value:80},{name:`Nigeria`,value:70},{name:`Egypt`,value:60},{name:`Turkey`,value:110},{name:`Indonesia`,value:150}],"geo-json":r(u),height:400,map:`world`},null,8,[`geo-json`])]),_:1}),a(p,{title:`Purple, zoomable, with bottom aligned legend`,source:`<pf-chart-map
aria-label="Map chart example"
:data="[
  { name: 'United States of America', value: 820 },
  { name: 'Canada', value: 210 },
  { name: 'Mexico', value: 160 },
  { name: 'Brazil', value: 340 },
  { name: 'Argentina', value: 120 },
  { name: 'United Kingdom', value: 380 },
  { name: 'France', value: 300 },
  { name: 'Germany', value: 450 },
  { name: 'Italy', value: 260 },
  { name: 'Spain', value: 220 },
  { name: 'Poland', value: 140 },
  { name: 'Sweden', value: 90 },
  { name: 'India', value: 610 },
  { name: 'China', value: 530 },
  { name: 'Japan', value: 410 },
  { name: 'South Korea', value: 190 },
  { name: 'Australia', value: 230 },
  { name: 'South Africa', value: 80 },
  { name: 'Nigeria', value: 70 },
  { name: 'Egypt', value: 60 },
  { name: 'Turkey', value: 110 },
  { name: 'Indonesia', value: 150 },
]"
:geo-json="world"
:height="450"
legend-position="bottom"
map="world"
roam
theme-color="purple" />`},{default:t(()=>[a(f,{"aria-label":`Map chart example`,data:[{name:`United States of America`,value:820},{name:`Canada`,value:210},{name:`Mexico`,value:160},{name:`Brazil`,value:340},{name:`Argentina`,value:120},{name:`United Kingdom`,value:380},{name:`France`,value:300},{name:`Germany`,value:450},{name:`Italy`,value:260},{name:`Spain`,value:220},{name:`Poland`,value:140},{name:`Sweden`,value:90},{name:`India`,value:610},{name:`China`,value:530},{name:`Japan`,value:410},{name:`South Korea`,value:190},{name:`Australia`,value:230},{name:`South Africa`,value:80},{name:`Nigeria`,value:70},{name:`Egypt`,value:60},{name:`Turkey`,value:110},{name:`Indonesia`,value:150}],"geo-json":r(u),height:450,"legend-position":`bottom`,map:`world`,roam:``,"theme-color":`purple`},null,8,[`geo-json`])]),_:1}),a(p,{title:`Custom map with labels`,source:`<pf-chart-map
aria-label="Data center temperature example"
:data="[
  { name: 'Room A', value: 18 },
  { name: 'Room B', value: 24 },
  { name: 'Room C', value: 31 },
  { name: 'Room D', value: 27 },
]"
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
labels
map="data-center"
:option="{ series: [{ aspectScale: 1 }] }"
theme-color="orange" />`},{default:t(()=>[a(f,{"aria-label":`Data center temperature example`,data:[{name:`Room A`,value:18},{name:`Room B`,value:24},{name:`Room C`,value:31},{name:`Room D`,value:27}],"geo-json":{type:`FeatureCollection`,features:[{type:`Feature`,properties:{name:`Room A`},geometry:{type:`Polygon`,coordinates:[[[0,0],[4,0],[4,3],[0,3],[0,0]]]}},{type:`Feature`,properties:{name:`Room B`},geometry:{type:`Polygon`,coordinates:[[[4,0],[8,0],[8,3],[4,3],[4,0]]]}},{type:`Feature`,properties:{name:`Room C`},geometry:{type:`Polygon`,coordinates:[[[0,3],[3,3],[3,6],[0,6],[0,3]]]}},{type:`Feature`,properties:{name:`Room D`},geometry:{type:`Polygon`,coordinates:[[[3,3],[8,3],[8,6],[3,6],[3,3]]]}},{type:`Feature`,properties:{name:`Office`},geometry:{type:`Polygon`,coordinates:[[[8,0],[10,0],[10,6],[8,6],[8,0]]]}}]},height:300,labels:``,map:`data-center`,option:{series:[{aspectScale:1}]},"theme-color":`orange`})]),_:1}),l[2]||=n(`div`,{class:`markdown pf-v6-c-content`},[n(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),n(`p`,null,[c(`react-charts has no map chart: this is an ECharts only chart, a `),n(`a`,{href:`https://echarts.apache.org/en/option.html#series-map`},`map series`),c(`.`)]),n(`p`,null,[c(`Like `),n(`code`,null,`PfChartHeatmap`),c(`, values are mapped to a sequential scale of the theme color, shown as the legend. Regions without a value are drawn in the secondary background color, to tell them apart from the lowest values. Regions are matched by name: the `),n(`code`,null,`name`),c(` property of the GeoJSON features. Maps are not limited to geography: any GeoJSON works, like the floor plan of the last example, where `),n(`code`,null,`aspectScale: 1`),c(` keeps its proportions (ECharts squeezes maps vertically by default, for geographic coordinates). Zooming and panning with `),n(`code`,null,`roam`),c(` is off by default, as it captures the page scroll over the map.`)])],-1)]),_:1})}}});export{u as default};