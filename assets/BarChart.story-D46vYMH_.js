import{F as e,K as t,Pt as n,c as r,g as i,h as a,it as o,j as s,l as c,m as l}from"./runtime-core.esm-bundler-DngnZCKR.js";import{$o as u,As as d,D as f,Hn as p,Jn as m,Jo as h,Ki as g,Lr as _,P as v,Sr as y,Ss as b,W as x,Xo as S,Zo as C,_s as ee,as as w,hs as T,i as te,ks as ne,ls as E,ms as D,ns as O,os as k,ot as re,q as A,r as ie,t as ae,ts as j,ua as M,ui as oe,us as se,wi as N,xs as ce,yr as le,z as P}from"./extension-CYexglMW.js";import{r as F}from"./labelHelper-BXGz4vlv.js";import{l as ue,m as de,p as fe}from"./index-CTvJCgo8.js";function I(e,t){if(!e)return!1;for(var n=k(e)?e:[e],r=0;r<n.length;r++)if(n[r]&&n[r][t])return!0;return!1}function L(e){oe(e,`label`,[`show`])}var R=N(),z=function(e){d(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=t.type,n.createdBySelf=!1,n.preventAutoZ=!0,n}return t.prototype.init=function(e,t,n){this.mergeDefaultAndTheme(e,n),this._mergeOption(e,n,!1,!0)},t.prototype.isAnimationEnabled=function(){if(ne.node)return!1;var e=this.__hostSeries;return this.getShallow(`animation`)&&e&&e.isAnimationEnabled()},t.prototype.mergeOption=function(e,t){this._mergeOption(e,t,!1,!1)},t.prototype._mergeOption=function(e,t,n,r){var i=this.mainType;n||t.eachSeries(function(e){var n=e.get(this.mainType,!0),a=R(e)[i];!n||!n.data?R(e)[i]=null:(a?a._mergeOption(n,t,!0):(r&&L(n),u(n.data,function(e){e instanceof Array?(L(e[0]),L(e[1])):L(e)}),a=this.createMarkerModelFromSeries(n,this,t),j(a,{mainType:this.mainType,seriesIndex:e.seriesIndex,name:e.name,createdBySelf:!0}),a.__hostSeries=e),R(e)[i]=a)},this)},t.prototype.formatTooltip=function(e,t,n){var r=this.getData(),i=this.getRawValue(e),a=r.getName(e);return P(`section`,{header:this.name,blocks:[P(`nameValue`,{name:a,value:i,noName:!a,noValue:i==null})]})},t.prototype.getData=function(){return this._data},t.prototype.setData=function(e){this._data=e},t.prototype.getDataParams=function(e,t){var n=A.prototype.getDataParams.call(this,e,t),r=this.__hostSeries;return r&&(n.seriesId=r.id,n.seriesName=r.name,n.seriesType=r.subType),n},t.getMarkerModelFromSeries=function(e,t){return R(e)[t]},t.type=`marker`,t.dependencies=[`series`,`grid`,`polar`,`geo`],t}(re);ee(z,A.prototype);var pe=function(e){d(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=t.type,n}return t.prototype.createMarkerModelFromSeries=function(e,n,r){return new t(e,n,r)},t.type=`markPoint`,t.defaultOption={z:5,symbol:`pin`,symbolSize:50,tooltip:{trigger:`item`},label:{show:!0,position:`inside`},itemStyle:{borderWidth:2},emphasis:{label:{show:!0}}},t}(z);function me(e){return!(isNaN(parseFloat(e.x))&&isNaN(parseFloat(e.y)))}function he(e){return!isNaN(parseFloat(e.x))&&!isNaN(parseFloat(e.y))}function B(e,t,n,r,i,a,o){var s=[],c=te(t,i)?t.getCalculationInfo(`stackResultDimension`):i,l=K(t,c,e),u=t.hostModel.indicesOfNearest(n,c,l)[0];s[a]=t.get(r,u),s[o]=t.get(c,u);var d=t.get(i,u),f=g(t.get(i,u));return f=Math.min(f,20),f>=0&&(s[o]=+s[o].toFixed(f)),[s,d]}var V={min:C(B,`min`),max:C(B,`max`),average:C(B,`average`),median:C(B,`median`)};function H(e,t){if(t){var n=e.getData(),r=e.coordinateSystem,i=r&&r.dimensions;if(!he(t)&&!k(t.coord)&&k(i)){var a=U(t,n,r,e);if(t=h(t),t.type&&V[t.type]&&a.baseAxis&&a.valueAxis){var o=w(i,a.baseAxis.dim),s=w(i,a.valueAxis.dim),c=V[t.type](n,a.valueAxis.dim,a.baseDataDim,a.valueDataDim,o,s);t.coord=c[0],t.value=c[1]}else t.coord=[t.xAxis==null?t.radiusAxis:t.xAxis,t.yAxis==null?t.angleAxis:t.yAxis]}if(t.coord==null||!k(i)){t.coord=[];var l=e.getBaseAxis();if(l&&t.type&&V[t.type]){var u=r.getOtherAxis(l);u&&(t.value=K(n,n.mapDimension(u.dim),t.type))}}else for(var d=t.coord,f=0;f<2;f++)V[d[f]]&&(d[f]=K(n,n.mapDimension(i[f]),d[f]));return t}}function U(e,t,n,r){var i={};return e.valueIndex!=null||e.valueDim!=null?(i.valueDataDim=e.valueIndex==null?e.valueDim:t.getDimension(e.valueIndex),i.valueAxis=n.getAxis(ge(r,i.valueDataDim)),i.baseAxis=n.getOtherAxis(i.valueAxis),i.baseDataDim=t.mapDimension(i.baseAxis.dim)):(i.baseAxis=r.getBaseAxis(),i.valueAxis=n.getOtherAxis(i.baseAxis),i.baseDataDim=t.mapDimension(i.baseAxis.dim),i.valueDataDim=t.mapDimension(i.valueAxis.dim)),i}function ge(e,t){var n=e.getData().getDimensionInfo(t);return n&&n.coordDim}function W(e,t){return e&&e.containData&&t.coord&&!me(t)?e.containData(t.coord):!0}function G(e,t){return e?function(e,n,r,i){var a=i<2?e.coord&&e.coord[i]:e.value;return x(a,t[i])}:function(e,n,r,i){return x(e.value,t[i])}}function K(e,t,n){if(n===`average`){var r=0,i=0;return e.each(t,function(e,t){isNaN(e)||(r+=e,i++)}),r/i}return n===`median`?e.getMedian(t):e.getDataExtent(t)[+(n===`max`)]}var q=N(),J=function(e){d(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=t.type,n}return t.prototype.init=function(){this.markerGroupMap=S()},t.prototype.render=function(e,t,n){var r=this,i=this.markerGroupMap;i.each(function(e){q(e).keep=!1}),t.eachSeries(function(e){var i=z.getMarkerModelFromSeries(e,r.type);i&&r.renderSeries(e,i,t,n)}),i.each(function(e){!q(e).keep&&r.group.remove(e.group)}),_e(t,i,this.type)},t.prototype.markKeep=function(e){q(e).keep=!0},t.prototype.toggleBlurSeries=function(e,t){var n=this;u(e,function(e){var r=z.getMarkerModelFromSeries(e,n.type);r&&r.getData().eachItemGraphicEl(function(e){e&&(t?le(e):y(e))})})},t.type=`marker`,t}(v);function _e(e,t,n){e.eachSeries(function(e){var r=z.getMarkerModelFromSeries(e,n),i=t.get(e.id);if(r&&i&&i.group){var a=p(r),o=a.z,s=a.zlevel;m(i.group,o,s)}})}function Y(e,t,n){var r=t.coordinateSystem,i=n.getWidth(),a=n.getHeight(),o=r&&r.getArea&&r.getArea();e.each(function(n){var s=e.getItemModel(n),c=s.get(`relativeTo`)===`coordinate`,l=c?o?o.width:0:i,u=c?o?o.height:0:a,d=c&&o?o.x:0,f=c&&o?o.y:0,p,m=M(s.get(`x`),l)+d,h=M(s.get(`y`),u)+f;if(!isNaN(m)&&!isNaN(h))p=[m,h];else if(t.getMarkerPosition)p=t.getMarkerPosition(e.getValues(e.dimensions,n));else if(r){var g=e.get(r.dimensions[0],n),_=e.get(r.dimensions[1],n);p=r.dataToPoint([g,_])}isNaN(m)||(p[0]=m),isNaN(h)||(p[1]=h),e.setItemLayout(n,p)})}var ve=function(e){d(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=t.type,n}return t.prototype.updateTransform=function(e,t,n){t.eachSeries(function(e){var t=z.getMarkerModelFromSeries(e,`markPoint`);t&&(Y(t.getData(),e,n),this.markerGroupMap.get(e.id).updateLayout())},this)},t.prototype.renderSeries=function(e,t,n,r){var i=e.coordinateSystem,a=e.id,o=e.getData(),s=this.markerGroupMap,c=s.get(a)||s.set(a,new de),l=ye(i,e,t);t.setData(l),Y(t.getData(),e,r),l.each(function(e){var n=l.getItemModel(e),r=n.getShallow(`symbol`),i=n.getShallow(`symbolSize`),a=n.getShallow(`symbolRotate`),s=n.getShallow(`symbolOffset`),c=n.getShallow(`symbolKeepAspect`);if(E(r)||E(i)||E(a)||E(s)){var u=t.getRawValue(e),d=t.getDataParams(e);E(r)&&(r=r(u,d)),E(i)&&(i=i(u,d)),E(a)&&(a=a(u,d)),E(s)&&(s=s(u,d))}var p=n.getModel(`itemStyle`).getItemStyle(),m=n.get(`z2`),h=f(o,`color`);p.fill||=h,l.setItemVisual(e,{z2:b(m,0),symbol:r,symbolSize:i,symbolRotate:a,symbolOffset:s,symbolKeepAspect:c,style:p})}),c.updateData(l),this.group.add(c.group),l.eachItemGraphicEl(function(e){e.traverse(function(e){_(e).dataModel=t})}),this.markKeep(c),c.group.silent=t.get(`silent`)||e.get(`silent`)},t.type=`markPoint`,t}(J);function ye(e,t,n){var r=e?D(e&&e.dimensions,function(e){var n=t.getData(),r=n.getDimensionInfo(n.mapDimension(e))||{};return j(j({},r),{name:e,ordinalMeta:null})}):[{name:`value`,type:`float`}],i=new F(r,n),a=D(n.get(`data`),C(H,t));e&&(a=O(a,C(W,e)));var o=G(!!e,r);return i.initData(a,null,o),i}function be(e){e.registerComponentModel(pe),e.registerComponentView(ve),e.registerPreprocessor(function(e){I(e.series,`markPoint`)&&(e.markPoint=e.markPoint||{})})}var xe=function(e){d(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=t.type,n}return t.prototype.createMarkerModelFromSeries=function(e,n,r){return new t(e,n,r)},t.type=`markLine`,t.defaultOption={z:5,symbol:[`circle`,`arrow`],symbolSize:[8,16],symbolOffset:0,precision:2,tooltip:{trigger:`item`},label:{show:!0,position:`end`,distance:5},lineStyle:{type:`dashed`},emphasis:{label:{show:!0},lineStyle:{width:3}},animationEasing:`linear`},t}(z),X=N(),Se=function(e,t,n,r){var i=e.getData(),a;if(k(r))a=r;else{var o=r.type;if(o===`min`||o===`max`||o===`average`||o===`median`||r.xAxis!=null||r.yAxis!=null){var s=void 0,c=void 0;if(r.yAxis!=null||r.xAxis!=null)s=t.getAxis(r.yAxis==null?`x`:`y`),c=ce(r.yAxis,r.xAxis);else{var l=U(r,i,t,e);s=l.valueAxis,c=K(i,ie(i,l.valueDataDim),o)}var u=s.dim===`x`?0:1,d=1-u,f=h(r),p={coord:[]};f.type=null,f.coord=[],f.coord[d]=-1/0,p.coord[d]=1/0;var m=n.get(`precision`);m>=0&&se(c)&&(c=+c.toFixed(Math.min(m,20))),f.coord[u]=p.coord[u]=c,a=[f,p,{type:o,valueIndex:r.valueIndex,value:c}]}else a=[]}var g=[H(e,a[0]),H(e,a[1]),j({},a[2])];return g[2].type=g[2].type||null,T(g[2],g[0]),T(g[2],g[1]),g};function Z(e){return!isNaN(e)&&!isFinite(e)}function Q(e,t,n,r){var i=1-e,a=r.dimensions[e];return Z(t[i])&&Z(n[i])&&t[e]===n[e]&&r.getAxis(a).containData(t[e])}function Ce(e,t){if(e.type===`cartesian2d`){var n=t[0].coord,r=t[1].coord;if(n&&r&&(Q(1,n,r,e)||Q(0,n,r,e)))return!0}return W(e,t[0])&&W(e,t[1])}function $(e,t,n,r,i){var a=r.coordinateSystem,o=e.getItemModel(t),s,c=M(o.get(`x`),i.getWidth()),l=M(o.get(`y`),i.getHeight());if(!isNaN(c)&&!isNaN(l))s=[c,l];else{if(r.getMarkerPosition)s=r.getMarkerPosition(e.getValues(e.dimensions,t));else{var u=a.dimensions,d=e.get(u[0],t),f=e.get(u[1],t);s=a.dataToPoint([d,f])}if(fe(a,`cartesian2d`)){var p=a.getAxis(`x`),m=a.getAxis(`y`),u=a.dimensions;Z(e.get(u[0],t))?s[0]=p.toGlobalCoord(p.getExtent()[+!n]):Z(e.get(u[1],t))&&(s[1]=m.toGlobalCoord(m.getExtent()[+!n]))}isNaN(c)||(s[0]=c),isNaN(l)||(s[1]=l)}e.setItemLayout(t,s)}var we=function(e){d(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=t.type,n}return t.prototype.updateTransform=function(e,t,n){t.eachSeries(function(e){var t=z.getMarkerModelFromSeries(e,`markLine`);if(t){var r=t.getData(),i=X(t).from,a=X(t).to;i.each(function(t){$(i,t,!0,e,n),$(a,t,!1,e,n)}),r.each(function(e){r.setItemLayout(e,[i.getItemLayout(e),a.getItemLayout(e)])}),this.markerGroupMap.get(e.id).updateLayout()}},this)},t.prototype.renderSeries=function(e,t,n,r){var i=e.coordinateSystem,a=e.id,o=e.getData(),s=this.markerGroupMap,c=s.get(a)||s.set(a,new ue);this.group.add(c.group);var l=Te(i,e,t),u=l.from,d=l.to,p=l.line;X(t).from=u,X(t).to=d,t.setData(p);var m=t.get(`symbol`),h=t.get(`symbolSize`),g=t.get(`symbolRotate`),v=t.get(`symbolOffset`);k(m)||(m=[m,m]),k(h)||(h=[h,h]),k(g)||(g=[g,g]),k(v)||(v=[v,v]),l.from.each(function(e){y(u,e,!0),y(d,e,!1)}),p.each(function(e){var t=p.getItemModel(e),n=t.getModel(`lineStyle`).getLineStyle();p.setItemLayout(e,[u.getItemLayout(e),d.getItemLayout(e)]);var r=t.get(`z2`);n.stroke??=u.getItemVisual(e,`style`).fill,p.setItemVisual(e,{z2:b(r,0),fromSymbolKeepAspect:u.getItemVisual(e,`symbolKeepAspect`),fromSymbolOffset:u.getItemVisual(e,`symbolOffset`),fromSymbolRotate:u.getItemVisual(e,`symbolRotate`),fromSymbolSize:u.getItemVisual(e,`symbolSize`),fromSymbol:u.getItemVisual(e,`symbol`),toSymbolKeepAspect:d.getItemVisual(e,`symbolKeepAspect`),toSymbolOffset:d.getItemVisual(e,`symbolOffset`),toSymbolRotate:d.getItemVisual(e,`symbolRotate`),toSymbolSize:d.getItemVisual(e,`symbolSize`),toSymbol:d.getItemVisual(e,`symbol`),style:n})}),c.updateData(p),l.line.eachItemGraphicEl(function(e){_(e).dataModel=t,e.traverse(function(e){_(e).dataModel=t})});function y(t,n,i){var a=t.getItemModel(n);$(t,n,i,e,r);var s=a.getModel(`itemStyle`).getItemStyle();s.fill??=f(o,`color`),t.setItemVisual(n,{symbolKeepAspect:a.get(`symbolKeepAspect`),symbolOffset:b(a.get(`symbolOffset`,!0),v[+!i]),symbolRotate:b(a.get(`symbolRotate`,!0),g[+!i]),symbolSize:b(a.get(`symbolSize`),h[+!i]),symbol:b(a.get(`symbol`,!0),m[+!i]),style:s})}this.markKeep(c),c.group.silent=t.get(`silent`)||e.get(`silent`)},t.type=`markLine`,t}(J);function Te(e,t,n){var r=e?D(e&&e.dimensions,function(e){var n=t.getData(),r=n.getDimensionInfo(n.mapDimension(e))||{};return j(j({},r),{name:e,ordinalMeta:null})}):[{name:`value`,type:`float`}],i=new F(r,n),a=new F(r,n),o=new F([],n),s=D(n.get(`data`),C(Se,t,e,n));e&&(s=O(s,C(Ce,e)));var c=G(!!e,r);return i.initData(D(s,function(e){return e[0]}),null,c),a.initData(D(s,function(e){return e[1]}),null,c),o.initData(D(s,function(e){return e[2]})),o.hasItemOption=!0,{from:i,to:a,line:o}}function Ee(e){e.registerComponentModel(xe),e.registerComponentView(we),e.registerPreprocessor(function(e){I(e.series,`markLine`)&&(e.markLine=e.markLine||{})})}var De=i({__name:`BarChart.story`,setup(i){ae([Ee,be]);let u=o(0);return(i,o)=>{let d=e(`component-info`),f=e(`pf-chart-bar`),p=e(`story-canvas`),m=e(`doc-page`);return s(),c(m,{name:`Charts/BarChart.story.vue`,title:`Bar chart`},{description:t(()=>[...o[1]||=[l(`A `,-1),r(`b`,null,`bar chart`,-1),l(` compares values across categories, optionally stacking them.`,-1)]]),apidocs:t(()=>[a(d,{name:`PfChartBar`,doc:{name:`PfChartBar`,exportName:`default`,displayName:`ChartBar`,description:``,tags:{},props:[{name:`brush`,description:"Lets the user select a range of the independent axis (areas, for scatter charts) with buttons next to the\ntoolbox, fading the data outside of it and emitting `brushselected` -- see https://echarts.apache.org/en/option.html#brush",required:!1,type:{name:`boolean`}},{name:`timelineAutoplay`,description:`Plays the timeline, unless the user prefers reduced motion`,required:!1,type:{name:`boolean`}},{name:`timeline`,description:"Frames of the chart, shown one at a time with a timeline to switch between them; they replace `series`\n-- see https://echarts.apache.org/en/option.html#timeline",required:!1,type:{name:`Array`,elements:[{name:`ChartTimelineFrame`}]}},{name:`polar`,description:`Draws the series on polar coordinates: the categories around the circle and the values from its center or, when
horizontal, the categories as rings and the values around them. Axis labels don't apply.`,required:!1,type:{name:`boolean`}},{name:`zoomable`,description:`Lets the user zoom into the independent axis, with a slider and with the mouse wheel while holding Ctrl (or by
pinching), so the wheel still scrolls the page -- see https://echarts.apache.org/en/option.html#dataZoom`,required:!1,type:{name:`boolean`}},{name:`yAxisLabel`,description:`Label of the dependent (value) axis`,required:!1,type:{name:`string`}},{name:`xAxisLabel`,description:`Label of the independent (category) axis`,required:!1,type:{name:`string`}},{name:`horizontal`,description:`Swaps the axes, drawing the series horizontally`,required:!1,type:{name:`boolean`}},{name:`thresholds`,description:`Threshold lines drawn over the series as dashed lines, like patternfly-react's ChartThreshold`,required:!1,type:{name:`Array`,elements:[{name:`ChartSeries`}]}},{name:`series`,description:`The series to draw`,required:!1,type:{name:`Array`,elements:[{name:`ChartSeries`}]}},{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`legendPosition`,description:"Position of the legend, `none` hiding it. Defaults to `right`, except for donut and bullet charts, which only\nshow a legend (on the right) when `legendData` is set.",required:!1,type:{name:`ChartLegendPosition`}},{name:`legendOrientation`,description:`Orientation of the legend; defaults to vertical for a right aligned legend and horizontal otherwise`,required:!1,type:{name:`union`,elements:[{name:`"horizontal"`},{name:`"vertical"`}]}},{name:`legendData`,description:`Legend entries; defaults to the series (or data) names`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors -- see https://echarts.apache.org/en/option.html#aria.decal`,required:!1,type:{name:`boolean`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it -- see https://echarts.apache.org/en/option.html#toolbox`,required:!1,type:{name:`boolean`}},{name:`option`,description:`ECharts option deep merged over the generated option, as an escape hatch for anything the props don't cover`,required:!1,type:{name:`ChartsOption`}},{name:`stacked`,description:`Stacks the bars on top of each other, like patternfly-react's ChartStack; pictorial bars are not stacked`,required:!1,type:{name:`boolean`}},{name:`barWidth`,description:`Width of the bars, in pixels or as a percentage of the category width`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`string`}]}},{name:`pictorial`,description:"Draws the bars with this symbol: an ECharts symbol (`circle`, `rect`, `roundRect`, `triangle`, `diamond`, `pin`,\n`arrow`), `image://` followed by an image URL or `path://` followed by an SVG path",required:!1,type:{name:`string`}},{name:`pictorialRepeat`,description:`Repeats the pictorial symbol along the bar, cutting the last one at the value, instead of stretching it over the bar`,required:!1,type:{name:`boolean`}},{name:`pictorialSize`,description:"Size of the pictorial symbol in pixels, as `[width, height]` or one value for both; defaults to the width of the bar",required:!1,type:{name:`union`,elements:[{name:`number`},{name:`tuple`,elements:[{name:`number`},{name:`number`}]}]}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`},{name:`brushselected`,type:{names:[`ChartBrushSelectedEvent`]},description:`Emitted when the brushed areas change -- see https://echarts.apache.org/en/api.html#events.brushselected`}],sourceFiles:[`packages/charts/src/ChartBar.vue`]}})]),default:t(()=>[o[2]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`p`,null,[l(`Note: charts live in their own package at `),r(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),l(`!`)]),r(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),a(p,{title:`Basic with right aligned legend`,source:`<pf-chart-bar
aria-label="Bar chart example"
:height="250"
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
  {
    name: 'Mice',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 3 },
      { x: '2017', y: 8 },
      { x: '2018', y: 5 },
    ],
  },
]" />`},{default:t(()=>[a(f,{"aria-label":`Bar chart example`,height:250,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]},{name:`Mice`,data:[{x:`2015`,y:3},{x:`2016`,y:3},{x:`2017`,y:8},{x:`2018`,y:5}]}]})]),_:1}),a(p,{title:`Purple with bottom aligned legend`,source:`<pf-chart-bar
aria-label="Bar chart example"
:height="275"
legend-position="bottom"
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
  {
    name: 'Mice',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 3 },
      { x: '2017', y: 8 },
      { x: '2018', y: 5 },
    ],
  },
]"
theme-color="purple" />`},{default:t(()=>[a(f,{"aria-label":`Bar chart example`,height:275,"legend-position":`bottom`,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]},{name:`Mice`,data:[{x:`2015`,y:3},{x:`2016`,y:3},{x:`2017`,y:8},{x:`2018`,y:5}]}],"theme-color":`purple`})]),_:1}),a(p,{title:`Multi-color (ordered) with bottom-left aligned legend`,source:`<pf-chart-bar
aria-label="Bar chart example"
:height="275"
legend-position="bottom-left"
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
  {
    name: 'Mice',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 3 },
      { x: '2017', y: 8 },
      { x: '2018', y: 5 },
    ],
  },
]"
theme-color="multi-ordered" />`},{default:t(()=>[a(f,{"aria-label":`Bar chart example`,height:275,"legend-position":`bottom-left`,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]},{name:`Mice`,data:[{x:`2015`,y:3},{x:`2016`,y:3},{x:`2017`,y:8},{x:`2018`,y:5}]}],"theme-color":`multi-ordered`})]),_:1}),a(p,{title:`Single with right aligned legend`,source:`<pf-chart-bar
aria-label="Bar chart example"
:height="250"
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
]" />`},{default:t(()=>[a(f,{"aria-label":`Bar chart example`,height:250,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]}]})]),_:1}),a(p,{title:`Without fading the other bars on hover`,source:`<pf-chart-bar
aria-label="Bar chart example"
:height="250"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2015', y: 1 },
      { x: '2016', y: 2 },
      { x: '2017', y: 5 },
      { x: '2018', y: 3 },
    ],
    emphasis: { focus: 'none' },
  },
  {
    name: 'Dogs',
    data: [
      { x: '2015', y: 2 },
      { x: '2016', y: 1 },
      { x: '2017', y: 7 },
      { x: '2018', y: 4 },
    ],
    emphasis: { focus: 'none' },
  },
  {
    name: 'Birds',
    data: [
      { x: '2015', y: 4 },
      { x: '2016', y: 4 },
      { x: '2017', y: 9 },
      { x: '2018', y: 7 },
    ],
    emphasis: { focus: 'none' },
  },
  {
    name: 'Mice',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 3 },
      { x: '2017', y: 8 },
      { x: '2018', y: 5 },
    ],
    emphasis: { focus: 'none' },
  },
]" />`},{default:t(()=>[a(f,{"aria-label":`Bar chart example`,height:250,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}],emphasis:{focus:`none`}},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}],emphasis:{focus:`none`}},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}],emphasis:{focus:`none`}},{name:`Mice`,data:[{x:`2015`,y:3},{x:`2016`,y:3},{x:`2017`,y:8},{x:`2018`,y:5}],emphasis:{focus:`none`}}]})]),_:1}),a(p,{title:`Stacked`,source:`<pf-chart-bar
aria-label="Stack chart example"
:bar-width="30"
:height="250"
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
  {
    name: 'Mice',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 3 },
      { x: '2017', y: 8 },
      { x: '2018', y: 5 },
    ],
  },
]"
stacked />`},{default:t(()=>[a(f,{"aria-label":`Stack chart example`,"bar-width":30,height:250,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]},{name:`Mice`,data:[{x:`2015`,y:3},{x:`2016`,y:3},{x:`2017`,y:8},{x:`2018`,y:5}]}],stacked:``})]),_:1}),a(p,{title:`Horizontal stacked with bottom aligned legend`,source:`<pf-chart-bar
aria-label="Stack chart example"
:height="275"
horizontal
legend-position="bottom"
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
  {
    name: 'Mice',
    data: [
      { x: '2015', y: 3 },
      { x: '2016', y: 3 },
      { x: '2017', y: 8 },
      { x: '2018', y: 5 },
    ],
  },
]"
stacked
theme-color="multi-ordered" />`},{default:t(()=>[a(f,{"aria-label":`Stack chart example`,height:275,horizontal:``,"legend-position":`bottom`,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]},{name:`Mice`,data:[{x:`2015`,y:3},{x:`2016`,y:3},{x:`2017`,y:8},{x:`2018`,y:5}]}],stacked:``,"theme-color":`multi-ordered`})]),_:1}),a(p,{title:`With max and min points and average lines`,source:`<pf-chart-bar
aria-label="Bar chart with marks example"
:height="300"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2015', y: 1 },
      { x: '2016', y: 2 },
      { x: '2017', y: 5 },
      { x: '2018', y: 3 },
    ],
    markPoint: {
      data: [
        { type: 'max', name: 'Max' },
        { type: 'min', name: 'Min' },
      ],
    },
    markLine: { data: [{ type: 'average', name: 'Average' }] },
  },
  {
    name: 'Dogs',
    data: [
      { x: '2015', y: 2 },
      { x: '2016', y: 1 },
      { x: '2017', y: 7 },
      { x: '2018', y: 4 },
    ],
    markPoint: {
      data: [
        { type: 'max', name: 'Max' },
        { type: 'min', name: 'Min' },
      ],
    },
    markLine: { data: [{ type: 'average', name: 'Average' }] },
  },
]"
theme-color="multi-ordered" />`},{default:t(()=>[a(f,{"aria-label":`Bar chart with marks example`,height:300,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}],markPoint:{data:[{type:`max`,name:`Max`},{type:`min`,name:`Min`}]},markLine:{data:[{type:`average`,name:`Average`}]}},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}],markPoint:{data:[{type:`max`,name:`Max`},{type:`min`,name:`Min`}]},markLine:{data:[{type:`average`,name:`Average`}]}}],"theme-color":`multi-ordered`})]),_:1}),a(p,{title:`With a target line`,source:`<pf-chart-bar
aria-label="Bar chart with a target example"
:height="275"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2015', y: 1 },
      { x: '2016', y: 2 },
      { x: '2017', y: 5 },
      { x: '2018', y: 3 },
    ],
    markLine: {
      data: [{ name: 'Target', yAxis: 4 }],
      label: { formatter: 'Target: {c}', position: 'insideEndTop' },
      lineStyle: { type: 'solid' },
      symbol: 'none',
    },
  },
]" />`},{default:t(()=>[a(f,{"aria-label":`Bar chart with a target example`,height:275,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}],markLine:{data:[{name:`Target`,yAxis:4}],label:{formatter:`Target: {c}`,position:`insideEndTop`},lineStyle:{type:`solid`},symbol:`none`}}]})]),_:1}),a(p,{title:`With an annotation and a trend line`,source:`<pf-chart-bar
aria-label="Bar chart with annotations example"
:height="300"
:series="[
  {
    name: 'Dogs',
    data: [
      { x: '2015', y: 2 },
      { x: '2016', y: 1 },
      { x: '2017', y: 7 },
      { x: '2018', y: 4 },
    ],
    markPoint: {
      data: [{ name: 'Adoption campaign', coord: ['2017', 7] }],
      label: { formatter: '{b}', position: 'top' },
      symbol: 'circle',
      symbolSize: 8,
    },
    markLine: {
      data: [[{ name: 'Trend', coord: ['2015', 2] }, { coord: ['2018', 4] }]],
      label: { formatter: '{b}', position: 'middle' },
    },
  },
]"
theme-color="green" />`},{default:t(()=>[a(f,{"aria-label":`Bar chart with annotations example`,height:300,series:[{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}],markPoint:{data:[{name:`Adoption campaign`,coord:[`2017`,7]}],label:{formatter:`{b}`,position:`top`},symbol:`circle`,symbolSize:8},markLine:{data:[[{name:`Trend`,coord:[`2015`,2]},{coord:[`2018`,4]}]],label:{formatter:`{b}`,position:`middle`}}}],"theme-color":`green`})]),_:1}),a(p,{title:`Horizontal with an average line and bottom aligned legend`,source:`<pf-chart-bar
aria-label="Horizontal bar chart with marks example"
:height="300"
horizontal
legend-position="bottom"
:series="[
  {
    name: 'Cats',
    data: [
      { x: '2015', y: 1 },
      { x: '2016', y: 2 },
      { x: '2017', y: 5 },
      { x: '2018', y: 3 },
    ],
    markLine: { data: [{ type: 'average', name: 'Average' }] },
  },
  {
    name: 'Dogs',
    data: [
      { x: '2015', y: 2 },
      { x: '2016', y: 1 },
      { x: '2017', y: 7 },
      { x: '2018', y: 4 },
    ],
    markLine: { data: [{ type: 'average', name: 'Average' }] },
  },
]"
theme-color="multi-ordered" />`},{default:t(()=>[a(f,{"aria-label":`Horizontal bar chart with marks example`,height:300,horizontal:``,"legend-position":`bottom`,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}],markLine:{data:[{type:`average`,name:`Average`}]}},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}],markLine:{data:[{type:`average`,name:`Average`}]}}],"theme-color":`multi-ordered`})]),_:1}),a(p,{title:`Polar, stacked`,source:`<pf-chart-bar
aria-label="Polar bar chart example"
:height="350"
polar
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
]"
stacked
theme-color="multi-ordered" />`},{default:t(()=>[a(f,{"aria-label":`Polar bar chart example`,height:350,polar:``,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]}],stacked:``,"theme-color":`multi-ordered`})]),_:1}),a(p,{title:`Radial (horizontal on polar coordinates)`,source:`<pf-chart-bar
aria-label="Radial bar chart example"
:height="350"
horizontal
polar
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
]"
theme-color="multi-ordered" />`},{default:t(()=>[a(f,{"aria-label":`Radial bar chart example`,height:350,horizontal:``,polar:``,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]}],"theme-color":`multi-ordered`})]),_:1}),a(p,{title:`Timeline`,source:`<pf-chart-bar
aria-label="Bar chart timeline example"
:height="350"
theme-color="multi-ordered"
:timeline="[
  {
    name: 'Q1',
    series: [
      {
        name: 'Cats',
        data: [
          { x: 'Jan', y: 1 },
          { x: 'Feb', y: 2 },
          { x: 'Mar', y: 5 },
        ],
      },
      {
        name: 'Dogs',
        data: [
          { x: 'Jan', y: 2 },
          { x: 'Feb', y: 1 },
          { x: 'Mar', y: 7 },
        ],
      },
    ],
  },
  {
    name: 'Q2',
    series: [
      {
        name: 'Cats',
        data: [
          { x: 'Jan', y: 3 },
          { x: 'Feb', y: 4 },
          { x: 'Mar', y: 2 },
        ],
      },
      {
        name: 'Dogs',
        data: [
          { x: 'Jan', y: 5 },
          { x: 'Feb', y: 3 },
          { x: 'Mar', y: 4 },
        ],
      },
    ],
  },
  {
    name: 'Q3',
    series: [
      {
        name: 'Cats',
        data: [
          { x: 'Jan', y: 6 },
          { x: 'Feb', y: 5 },
          { x: 'Mar', y: 7 },
        ],
      },
      {
        name: 'Dogs',
        data: [
          { x: 'Jan', y: 4 },
          { x: 'Feb', y: 6 },
          { x: 'Mar', y: 3 },
        ],
      },
    ],
  },
]"
timeline-autoplay />`},{default:t(()=>[a(f,{"aria-label":`Bar chart timeline example`,height:350,"theme-color":`multi-ordered`,timeline:[{name:`Q1`,series:[{name:`Cats`,data:[{x:`Jan`,y:1},{x:`Feb`,y:2},{x:`Mar`,y:5}]},{name:`Dogs`,data:[{x:`Jan`,y:2},{x:`Feb`,y:1},{x:`Mar`,y:7}]}]},{name:`Q2`,series:[{name:`Cats`,data:[{x:`Jan`,y:3},{x:`Feb`,y:4},{x:`Mar`,y:2}]},{name:`Dogs`,data:[{x:`Jan`,y:5},{x:`Feb`,y:3},{x:`Mar`,y:4}]}]},{name:`Q3`,series:[{name:`Cats`,data:[{x:`Jan`,y:6},{x:`Feb`,y:5},{x:`Mar`,y:7}]},{name:`Dogs`,data:[{x:`Jan`,y:4},{x:`Feb`,y:6},{x:`Mar`,y:3}]}]}],"timeline-autoplay":``})]),_:1}),a(p,{title:`Brushable, with toolbox`,source:`<pf-chart-bar
  aria-label="Brushable bar chart example"
  brush
  :height="300"
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
  ]"
  theme-color="multi-ordered"
  toolbox
  @brushselected="
    (event: ChartBrushSelectedEvent) =>
      (brushed = event.batch[0]?.selected.reduce((count, { dataIndex }) => count + dataIndex.length, 0) ?? 0)
  "
></pf-chart-bar>
<p>Selected bars: {{ brushed || 'none' }}</p>`},{default:t(()=>[a(f,{"aria-label":`Brushable bar chart example`,brush:``,height:300,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]}],"theme-color":`multi-ordered`,toolbox:``,onBrushselected:o[0]||=e=>u.value=e.batch[0]?.selected.reduce((e,{dataIndex:t})=>e+t.length,0)??0}),r(`p`,null,`Selected bars: `+n(u.value||`none`),1)]),_:1}),a(p,{title:`Pictorial`,source:`<pf-chart-bar
aria-label="Pictorial bar chart example"
:height="275"
pictorial="triangle"
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
]"
theme-color="multi-ordered" />`},{default:t(()=>[a(f,{"aria-label":`Pictorial bar chart example`,height:275,pictorial:`triangle`,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]}],"theme-color":`multi-ordered`})]),_:1}),a(p,{title:`Horizontal pictorial with repeated symbols`,source:`<pf-chart-bar
aria-label="Pictorial bar chart example"
:height="275"
horizontal
legend-position="bottom"
pictorial="circle"
pictorial-repeat
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
]"
theme-color="multi-ordered" />`},{default:t(()=>[a(f,{"aria-label":`Pictorial bar chart example`,height:275,horizontal:``,"legend-position":`bottom`,pictorial:`circle`,"pictorial-repeat":``,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]}],"theme-color":`multi-ordered`})]),_:1}),a(p,{title:`Pictorial with an SVG path`,source:`<pf-chart-bar
aria-label="Pictorial bar chart example"
:height="275"
pictorial="path://M12 2a4 4 0 1 1 0 8a4 4 0 1 1 0-8zM4 22v-4a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v4z"
pictorial-repeat
:pictorial-size="16"
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
]"
theme-color="multi-ordered" />`},{default:t(()=>[a(f,{"aria-label":`Pictorial bar chart example`,height:275,pictorial:`path://M12 2a4 4 0 1 1 0 8a4 4 0 1 1 0-8zM4 22v-4a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v4z`,"pictorial-repeat":``,"pictorial-size":16,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]}],"theme-color":`multi-ordered`})]),_:1}),o[3]||=r(`div`,{class:`markdown pf-v6-c-content`},[r(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),r(`ul`,null,[r(`li`,null,[r(`code`,null,`ChartStack`),l(` and `),r(`code`,null,`ChartGroup`),l(` are not separate components: pass several `),r(`code`,null,`series`),l(` and set `),r(`code`,null,`stacked`),l(` to stack them.`)]),r(`li`,null,[r(`code`,null,`pictorial`),l(` draws the bars with a symbol (`),r(`a`,{href:`https://echarts.apache.org/en/option.html#series-pictorialBar`},`ECharts pictorial bars`),l(`), stretched over each bar or, with `),r(`code`,null,`pictorial-repeat`),l(`, repeated along it; react-charts has no pictorial bars, and ECharts can't stack them.`)]),r(`li`,null,[r(`code`,null,`polar`),l(` draws the bars on polar coordinates, around the circle or, with `),r(`code`,null,`horizontal`),l(`, as rings (radial bars).`)]),r(`li`,null,[r(`code`,null,`timeline`),l(` shows one frame of series at a time, with a `),r(`a`,{href:`https://echarts.apache.org/en/option.html#timeline`},`timeline`),l(` to switch between them; `),r(`code`,null,`timeline-autoplay`),l(` plays it, unless the user prefers reduced motion.`)]),r(`li`,null,[r(`code`,null,`brush`),l(` lets the user select a range of bars with the toolbox buttons (`),r(`a`,{href:`https://echarts.apache.org/en/option.html#brush`},`ECharts brush`),l(`), fading the others and emitting `),r(`code`,null,`brushselected`),l(`.`)]),r(`li`,null,[r(`code`,null,`toolbox`),l(` adds buttons to save the chart as an image and to restore it; `),r(`code`,null,`zoomable`),l(` zooms into the categories, like in the line charts.`)]),r(`li`,null,[l(`Series take any other ECharts series option, like `),r(`a`,{href:`https://echarts.apache.org/en/option.html#series-bar.markPoint`},[r(`code`,null,`markPoint`)]),l(` and `),r(`a`,{href:`https://echarts.apache.org/en/option.html#series-bar.markLine`},[r(`code`,null,`markLine`)]),l(` to annotate the bars: the wrapper doesn't register their components, register `),r(`code`,null,`MarkPointComponent`),l(` and `),r(`code`,null,`MarkLineComponent`),l(` with `),r(`code`,null,`echarts.use()`),l(`. For dashed threshold lines spanning several bars, `),r(`code`,null,`thresholds`),l(` is simpler.`)]),r(`li`,null,[l(`Hovering a series fades the others (`),r(`a`,{href:`https://echarts.apache.org/en/option.html#series-bar.emphasis.focus`},`ECharts emphasis`),l(`); set `),r(`code`,null,`emphasis: { focus: 'none' }`),l(` on the series to disable it.`)]),r(`li`,null,[l(`The "Alerts timeline" example relies on Victory's custom `),r(`code`,null,`dataComponent`),l(` and has no direct equivalent; it can be built with a `),r(`a`,{href:`https://echarts.apache.org/en/option.html#series-custom`},`custom series`),l(` through `),r(`code`,null,`PfCharts`),l(`.`)])])],-1)]),_:1})}}});export{De as default};