import{$o as e,As as t,D as n,Hn as r,Jn as i,Jo as a,Ki as o,Lr as s,P as c,Sr as l,Ss as u,W as d,Xo as f,Zo as p,_s as m,as as h,hs as g,i as _,ks as v,ls as y,ms as b,ns as x,os as S,ot as ee,q as C,r as te,t as ne,ts as w,ua as T,ui as re,us as E,wi as D,xs as ie,yr as ae,z as O}from"./extension-CYexglMW.js";import{F as k,K as A,Pt as oe,c as j,g as se,h as M,it as ce,j as le,l as ue,m as N}from"./runtime-core.esm-bundler-DO1530YC.js";import{r as P}from"./labelHelper-BXGz4vlv.js";import{l as de,m as fe,p as pe}from"./index-CUsetNQE.js";function F(e,t){if(!e)return!1;for(var n=S(e)?e:[e],r=0;r<n.length;r++)if(n[r]&&n[r][t])return!0;return!1}function I(e){re(e,`label`,[`show`])}var L=D(),R=function(n){t(r,n);function r(){var e=n!==null&&n.apply(this,arguments)||this;return e.type=r.type,e.createdBySelf=!1,e.preventAutoZ=!0,e}return r.prototype.init=function(e,t,n){this.mergeDefaultAndTheme(e,n),this._mergeOption(e,n,!1,!0)},r.prototype.isAnimationEnabled=function(){if(v.node)return!1;var e=this.__hostSeries;return this.getShallow(`animation`)&&e&&e.isAnimationEnabled()},r.prototype.mergeOption=function(e,t){this._mergeOption(e,t,!1,!1)},r.prototype._mergeOption=function(t,n,r,i){var a=this.mainType;r||n.eachSeries(function(t){var r=t.get(this.mainType,!0),o=L(t)[a];!r||!r.data?L(t)[a]=null:(o?o._mergeOption(r,n,!0):(i&&I(r),e(r.data,function(e){e instanceof Array?(I(e[0]),I(e[1])):I(e)}),o=this.createMarkerModelFromSeries(r,this,n),w(o,{mainType:this.mainType,seriesIndex:t.seriesIndex,name:t.name,createdBySelf:!0}),o.__hostSeries=t),L(t)[a]=o)},this)},r.prototype.formatTooltip=function(e,t,n){var r=this.getData(),i=this.getRawValue(e),a=r.getName(e);return O(`section`,{header:this.name,blocks:[O(`nameValue`,{name:a,value:i,noName:!a,noValue:i==null})]})},r.prototype.getData=function(){return this._data},r.prototype.setData=function(e){this._data=e},r.prototype.getDataParams=function(e,t){var n=C.prototype.getDataParams.call(this,e,t),r=this.__hostSeries;return r&&(n.seriesId=r.id,n.seriesName=r.name,n.seriesType=r.subType),n},r.getMarkerModelFromSeries=function(e,t){return L(e)[t]},r.type=`marker`,r.dependencies=[`series`,`grid`,`polar`,`geo`],r}(ee);m(R,C.prototype);var z=function(e){t(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.type=n.type,t}return n.prototype.createMarkerModelFromSeries=function(e,t,r){return new n(e,t,r)},n.type=`markPoint`,n.defaultOption={z:5,symbol:`pin`,symbolSize:50,tooltip:{trigger:`item`},label:{show:!0,position:`inside`},itemStyle:{borderWidth:2},emphasis:{label:{show:!0}}},n}(R);function me(e){return!(isNaN(parseFloat(e.x))&&isNaN(parseFloat(e.y)))}function he(e){return!isNaN(parseFloat(e.x))&&!isNaN(parseFloat(e.y))}function B(e,t,n,r,i,a,s){var c=[],l=_(t,i)?t.getCalculationInfo(`stackResultDimension`):i,u=K(t,l,e),d=t.hostModel.indicesOfNearest(n,l,u)[0];c[a]=t.get(r,d),c[s]=t.get(l,d);var f=t.get(i,d),p=o(t.get(i,d));return p=Math.min(p,20),p>=0&&(c[s]=+c[s].toFixed(p)),[c,f]}var V={min:p(B,`min`),max:p(B,`max`),average:p(B,`average`),median:p(B,`median`)};function H(e,t){if(t){var n=e.getData(),r=e.coordinateSystem,i=r&&r.dimensions;if(!he(t)&&!S(t.coord)&&S(i)){var o=U(t,n,r,e);if(t=a(t),t.type&&V[t.type]&&o.baseAxis&&o.valueAxis){var s=h(i,o.baseAxis.dim),c=h(i,o.valueAxis.dim),l=V[t.type](n,o.valueAxis.dim,o.baseDataDim,o.valueDataDim,s,c);t.coord=l[0],t.value=l[1]}else t.coord=[t.xAxis==null?t.radiusAxis:t.xAxis,t.yAxis==null?t.angleAxis:t.yAxis]}if(t.coord==null||!S(i)){t.coord=[];var u=e.getBaseAxis();if(u&&t.type&&V[t.type]){var d=r.getOtherAxis(u);d&&(t.value=K(n,n.mapDimension(d.dim),t.type))}}else for(var f=t.coord,p=0;p<2;p++)V[f[p]]&&(f[p]=K(n,n.mapDimension(i[p]),f[p]));return t}}function U(e,t,n,r){var i={};return e.valueIndex!=null||e.valueDim!=null?(i.valueDataDim=e.valueIndex==null?e.valueDim:t.getDimension(e.valueIndex),i.valueAxis=n.getAxis(ge(r,i.valueDataDim)),i.baseAxis=n.getOtherAxis(i.valueAxis),i.baseDataDim=t.mapDimension(i.baseAxis.dim)):(i.baseAxis=r.getBaseAxis(),i.valueAxis=n.getOtherAxis(i.baseAxis),i.baseDataDim=t.mapDimension(i.baseAxis.dim),i.valueDataDim=t.mapDimension(i.valueAxis.dim)),i}function ge(e,t){var n=e.getData().getDimensionInfo(t);return n&&n.coordDim}function W(e,t){return e&&e.containData&&t.coord&&!me(t)?e.containData(t.coord):!0}function G(e,t){return e?function(e,n,r,i){var a=i<2?e.coord&&e.coord[i]:e.value;return d(a,t[i])}:function(e,n,r,i){return d(e.value,t[i])}}function K(e,t,n){if(n===`average`){var r=0,i=0;return e.each(t,function(e,t){isNaN(e)||(r+=e,i++)}),r/i}return n===`median`?e.getMedian(t):e.getDataExtent(t)[+(n===`max`)]}var q=D(),J=function(n){t(r,n);function r(){var e=n!==null&&n.apply(this,arguments)||this;return e.type=r.type,e}return r.prototype.init=function(){this.markerGroupMap=f()},r.prototype.render=function(e,t,n){var r=this,i=this.markerGroupMap;i.each(function(e){q(e).keep=!1}),t.eachSeries(function(e){var i=R.getMarkerModelFromSeries(e,r.type);i&&r.renderSeries(e,i,t,n)}),i.each(function(e){!q(e).keep&&r.group.remove(e.group)}),_e(t,i,this.type)},r.prototype.markKeep=function(e){q(e).keep=!0},r.prototype.toggleBlurSeries=function(t,n){var r=this;e(t,function(e){var t=R.getMarkerModelFromSeries(e,r.type);t&&t.getData().eachItemGraphicEl(function(e){e&&(n?ae(e):l(e))})})},r.type=`marker`,r}(c);function _e(e,t,n){e.eachSeries(function(e){var a=R.getMarkerModelFromSeries(e,n),o=t.get(e.id);if(a&&o&&o.group){var s=r(a),c=s.z,l=s.zlevel;i(o.group,c,l)}})}function Y(e,t,n){var r=t.coordinateSystem,i=n.getWidth(),a=n.getHeight(),o=r&&r.getArea&&r.getArea();e.each(function(n){var s=e.getItemModel(n),c=s.get(`relativeTo`)===`coordinate`,l=c?o?o.width:0:i,u=c?o?o.height:0:a,d=c&&o?o.x:0,f=c&&o?o.y:0,p,m=T(s.get(`x`),l)+d,h=T(s.get(`y`),u)+f;if(!isNaN(m)&&!isNaN(h))p=[m,h];else if(t.getMarkerPosition)p=t.getMarkerPosition(e.getValues(e.dimensions,n));else if(r){var g=e.get(r.dimensions[0],n),_=e.get(r.dimensions[1],n);p=r.dataToPoint([g,_])}isNaN(m)||(p[0]=m),isNaN(h)||(p[1]=h),e.setItemLayout(n,p)})}var ve=function(e){t(r,e);function r(){var t=e!==null&&e.apply(this,arguments)||this;return t.type=r.type,t}return r.prototype.updateTransform=function(e,t,n){t.eachSeries(function(e){var t=R.getMarkerModelFromSeries(e,`markPoint`);t&&(Y(t.getData(),e,n),this.markerGroupMap.get(e.id).updateLayout())},this)},r.prototype.renderSeries=function(e,t,r,i){var a=e.coordinateSystem,o=e.id,c=e.getData(),l=this.markerGroupMap,d=l.get(o)||l.set(o,new fe),f=ye(a,e,t);t.setData(f),Y(t.getData(),e,i),f.each(function(e){var r=f.getItemModel(e),i=r.getShallow(`symbol`),a=r.getShallow(`symbolSize`),o=r.getShallow(`symbolRotate`),s=r.getShallow(`symbolOffset`),l=r.getShallow(`symbolKeepAspect`);if(y(i)||y(a)||y(o)||y(s)){var d=t.getRawValue(e),p=t.getDataParams(e);y(i)&&(i=i(d,p)),y(a)&&(a=a(d,p)),y(o)&&(o=o(d,p)),y(s)&&(s=s(d,p))}var m=r.getModel(`itemStyle`).getItemStyle(),h=r.get(`z2`),g=n(c,`color`);m.fill||=g,f.setItemVisual(e,{z2:u(h,0),symbol:i,symbolSize:a,symbolRotate:o,symbolOffset:s,symbolKeepAspect:l,style:m})}),d.updateData(f),this.group.add(d.group),f.eachItemGraphicEl(function(e){e.traverse(function(e){s(e).dataModel=t})}),this.markKeep(d),d.group.silent=t.get(`silent`)||e.get(`silent`)},r.type=`markPoint`,r}(J);function ye(e,t,n){var r=e?b(e&&e.dimensions,function(e){var n=t.getData(),r=n.getDimensionInfo(n.mapDimension(e))||{};return w(w({},r),{name:e,ordinalMeta:null})}):[{name:`value`,type:`float`}],i=new P(r,n),a=b(n.get(`data`),p(H,t));e&&(a=x(a,p(W,e)));var o=G(!!e,r);return i.initData(a,null,o),i}function be(e){e.registerComponentModel(z),e.registerComponentView(ve),e.registerPreprocessor(function(e){F(e.series,`markPoint`)&&(e.markPoint=e.markPoint||{})})}var xe=function(e){t(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.type=n.type,t}return n.prototype.createMarkerModelFromSeries=function(e,t,r){return new n(e,t,r)},n.type=`markLine`,n.defaultOption={z:5,symbol:[`circle`,`arrow`],symbolSize:[8,16],symbolOffset:0,precision:2,tooltip:{trigger:`item`},label:{show:!0,position:`end`,distance:5},lineStyle:{type:`dashed`},emphasis:{label:{show:!0},lineStyle:{width:3}},animationEasing:`linear`},n}(R),X=D(),Se=function(e,t,n,r){var i=e.getData(),o;if(S(r))o=r;else{var s=r.type;if(s===`min`||s===`max`||s===`average`||s===`median`||r.xAxis!=null||r.yAxis!=null){var c=void 0,l=void 0;if(r.yAxis!=null||r.xAxis!=null)c=t.getAxis(r.yAxis==null?`x`:`y`),l=ie(r.yAxis,r.xAxis);else{var u=U(r,i,t,e);c=u.valueAxis,l=K(i,te(i,u.valueDataDim),s)}var d=c.dim===`x`?0:1,f=1-d,p=a(r),m={coord:[]};p.type=null,p.coord=[],p.coord[f]=-1/0,m.coord[f]=1/0;var h=n.get(`precision`);h>=0&&E(l)&&(l=+l.toFixed(Math.min(h,20))),p.coord[d]=m.coord[d]=l,o=[p,m,{type:s,valueIndex:r.valueIndex,value:l}]}else o=[]}var _=[H(e,o[0]),H(e,o[1]),w({},o[2])];return _[2].type=_[2].type||null,g(_[2],_[0]),g(_[2],_[1]),_};function Z(e){return!isNaN(e)&&!isFinite(e)}function Q(e,t,n,r){var i=1-e,a=r.dimensions[e];return Z(t[i])&&Z(n[i])&&t[e]===n[e]&&r.getAxis(a).containData(t[e])}function Ce(e,t){if(e.type===`cartesian2d`){var n=t[0].coord,r=t[1].coord;if(n&&r&&(Q(1,n,r,e)||Q(0,n,r,e)))return!0}return W(e,t[0])&&W(e,t[1])}function $(e,t,n,r,i){var a=r.coordinateSystem,o=e.getItemModel(t),s,c=T(o.get(`x`),i.getWidth()),l=T(o.get(`y`),i.getHeight());if(!isNaN(c)&&!isNaN(l))s=[c,l];else{if(r.getMarkerPosition)s=r.getMarkerPosition(e.getValues(e.dimensions,t));else{var u=a.dimensions,d=e.get(u[0],t),f=e.get(u[1],t);s=a.dataToPoint([d,f])}if(pe(a,`cartesian2d`)){var p=a.getAxis(`x`),m=a.getAxis(`y`),u=a.dimensions;Z(e.get(u[0],t))?s[0]=p.toGlobalCoord(p.getExtent()[+!n]):Z(e.get(u[1],t))&&(s[1]=m.toGlobalCoord(m.getExtent()[+!n]))}isNaN(c)||(s[0]=c),isNaN(l)||(s[1]=l)}e.setItemLayout(t,s)}var we=function(e){t(r,e);function r(){var t=e!==null&&e.apply(this,arguments)||this;return t.type=r.type,t}return r.prototype.updateTransform=function(e,t,n){t.eachSeries(function(e){var t=R.getMarkerModelFromSeries(e,`markLine`);if(t){var r=t.getData(),i=X(t).from,a=X(t).to;i.each(function(t){$(i,t,!0,e,n),$(a,t,!1,e,n)}),r.each(function(e){r.setItemLayout(e,[i.getItemLayout(e),a.getItemLayout(e)])}),this.markerGroupMap.get(e.id).updateLayout()}},this)},r.prototype.renderSeries=function(e,t,r,i){var a=e.coordinateSystem,o=e.id,c=e.getData(),l=this.markerGroupMap,d=l.get(o)||l.set(o,new de);this.group.add(d.group);var f=Te(a,e,t),p=f.from,m=f.to,h=f.line;X(t).from=p,X(t).to=m,t.setData(h);var g=t.get(`symbol`),_=t.get(`symbolSize`),v=t.get(`symbolRotate`),y=t.get(`symbolOffset`);S(g)||(g=[g,g]),S(_)||(_=[_,_]),S(v)||(v=[v,v]),S(y)||(y=[y,y]),f.from.each(function(e){b(p,e,!0),b(m,e,!1)}),h.each(function(e){var t=h.getItemModel(e),n=t.getModel(`lineStyle`).getLineStyle();h.setItemLayout(e,[p.getItemLayout(e),m.getItemLayout(e)]);var r=t.get(`z2`);n.stroke??=p.getItemVisual(e,`style`).fill,h.setItemVisual(e,{z2:u(r,0),fromSymbolKeepAspect:p.getItemVisual(e,`symbolKeepAspect`),fromSymbolOffset:p.getItemVisual(e,`symbolOffset`),fromSymbolRotate:p.getItemVisual(e,`symbolRotate`),fromSymbolSize:p.getItemVisual(e,`symbolSize`),fromSymbol:p.getItemVisual(e,`symbol`),toSymbolKeepAspect:m.getItemVisual(e,`symbolKeepAspect`),toSymbolOffset:m.getItemVisual(e,`symbolOffset`),toSymbolRotate:m.getItemVisual(e,`symbolRotate`),toSymbolSize:m.getItemVisual(e,`symbolSize`),toSymbol:m.getItemVisual(e,`symbol`),style:n})}),d.updateData(h),f.line.eachItemGraphicEl(function(e){s(e).dataModel=t,e.traverse(function(e){s(e).dataModel=t})});function b(t,r,a){var o=t.getItemModel(r);$(t,r,a,e,i);var s=o.getModel(`itemStyle`).getItemStyle();s.fill??=n(c,`color`),t.setItemVisual(r,{symbolKeepAspect:o.get(`symbolKeepAspect`),symbolOffset:u(o.get(`symbolOffset`,!0),y[+!a]),symbolRotate:u(o.get(`symbolRotate`,!0),v[+!a]),symbolSize:u(o.get(`symbolSize`),_[+!a]),symbol:u(o.get(`symbol`,!0),g[+!a]),style:s})}this.markKeep(d),d.group.silent=t.get(`silent`)||e.get(`silent`)},r.type=`markLine`,r}(J);function Te(e,t,n){var r=e?b(e&&e.dimensions,function(e){var n=t.getData(),r=n.getDimensionInfo(n.mapDimension(e))||{};return w(w({},r),{name:e,ordinalMeta:null})}):[{name:`value`,type:`float`}],i=new P(r,n),a=new P(r,n),o=new P([],n),s=b(n.get(`data`),p(Se,t,e,n));e&&(s=x(s,p(Ce,e)));var c=G(!!e,r);return i.initData(b(s,function(e){return e[0]}),null,c),a.initData(b(s,function(e){return e[1]}),null,c),o.initData(b(s,function(e){return e[2]})),o.hasItemOption=!0,{from:i,to:a,line:o}}function Ee(e){e.registerComponentModel(xe),e.registerComponentView(we),e.registerPreprocessor(function(e){F(e.series,`markLine`)&&(e.markLine=e.markLine||{})})}var De=se({__name:`BarChart.story`,setup(e){ne([Ee,be]);let t=ce(0);return(e,n)=>{let r=k(`component-info`),i=k(`pf-chart-bar`),a=k(`story-canvas`),o=k(`doc-page`);return le(),ue(o,{name:`Charts/BarChart.story.vue`,title:`Bar chart`},{description:A(()=>[...n[1]||=[N(`A `,-1),j(`b`,null,`bar chart`,-1),N(` compares values across categories, optionally stacking them.`,-1)]]),apidocs:A(()=>[M(r,{name:`PfChartBar`,doc:{name:`PfChartBar`,exportName:`default`,displayName:`ChartBar`,description:``,tags:{},props:[{name:`brush`,description:"Lets the user select a range of the independent axis (areas, for scatter charts) with buttons next to the\ntoolbox, fading the data outside of it and emitting `brushselected` -- see https://echarts.apache.org/en/option.html#brush",required:!1,type:{name:`boolean`}},{name:`timelineAutoplay`,description:`Plays the timeline, unless the user prefers reduced motion`,required:!1,type:{name:`boolean`}},{name:`timeline`,description:"Frames of the chart, shown one at a time with a timeline to switch between them; they replace `series`\n-- see https://echarts.apache.org/en/option.html#timeline",required:!1,type:{name:`Array`,elements:[{name:`ChartTimelineFrame`}]}},{name:`polar`,description:`Draws the series on polar coordinates: the categories around the circle and the values from its center or, when
horizontal, the categories as rings and the values around them. Axis labels don't apply.`,required:!1,type:{name:`boolean`}},{name:`zoomable`,description:`Lets the user zoom into the independent axis, with a slider and with the mouse wheel while holding Ctrl (or by
pinching), so the wheel still scrolls the page -- see https://echarts.apache.org/en/option.html#dataZoom`,required:!1,type:{name:`boolean`}},{name:`yAxisLabel`,description:`Label of the dependent (value) axis`,required:!1,type:{name:`string`}},{name:`xAxisLabel`,description:`Label of the independent (category) axis`,required:!1,type:{name:`string`}},{name:`horizontal`,description:`Swaps the axes, drawing the series horizontally`,required:!1,type:{name:`boolean`}},{name:`thresholds`,description:`Threshold lines drawn over the series as dashed lines, like patternfly-react's ChartThreshold`,required:!1,type:{name:`Array`,elements:[{name:`ChartSeries`}]}},{name:`series`,description:`The series to draw`,required:!1,type:{name:`Array`,elements:[{name:`ChartSeries`}]}},{name:`themeColor`,description:"Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`.",required:!1,type:{name:`ThemeColorName`}},{name:`theme`,description:`The theme to use for determining styles and layout properties. Any styles defined in the theme may be
overwritten by the option. Not compatible with \`themeColor\`.

See https://echarts.apache.org/handbook/en/concepts/style/#theme`,required:!1,type:{name:`ThemeDefinition`}},{name:`opts`,description:`Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init`,required:!1,type:{name:`EChartsInitOpts`}},{name:`svgRenderer`,description:"Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`legendTooltip`,description:"Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`width`,description:`Specify width explicitly, in pixels. Without it the chart takes the width of its container.`,required:!1,type:{name:`number`}},{name:`height`,description:`Specify height explicitly, in pixels. Without it the chart takes the height of its container.`,required:!1,type:{name:`number`}},{name:`legendPosition`,description:"Position of the legend, `none` hiding it. Defaults to `right`, except for donut and bullet charts, which only\nshow a legend (on the right) when `legendData` is set.",required:!1,type:{name:`ChartLegendPosition`}},{name:`legendOrientation`,description:`Orientation of the legend; defaults to vertical for a right aligned legend and horizontal otherwise`,required:!1,type:{name:`union`,elements:[{name:`"horizontal"`},{name:`"vertical"`}]}},{name:`legendData`,description:`Legend entries; defaults to the series (or data) names`,required:!1,type:{name:`Array`,elements:[{name:`string`}]}},{name:`patterns`,description:`Applies decal patterns to the data, in addition to colors -- see https://echarts.apache.org/en/option.html#aria.decal`,required:!1,type:{name:`boolean`}},{name:`toolbox`,description:`Shows buttons to save the chart as an image and to restore it -- see https://echarts.apache.org/en/option.html#toolbox`,required:!1,type:{name:`boolean`}},{name:`option`,description:`ECharts option deep merged over the generated option, as an escape hatch for anything the props don't cover`,required:!1,type:{name:`ChartsOption`}},{name:`stacked`,description:`Stacks the bars on top of each other, like patternfly-react's ChartStack; pictorial bars are not stacked`,required:!1,type:{name:`boolean`}},{name:`barWidth`,description:`Width of the bars, in pixels or as a percentage of the category width`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`string`}]}},{name:`pictorial`,description:"Draws the bars with this symbol: an ECharts symbol (`circle`, `rect`, `roundRect`, `triangle`, `diamond`, `pin`,\n`arrow`), `image://` followed by an image URL or `path://` followed by an SVG path",required:!1,type:{name:`string`}},{name:`pictorialRepeat`,description:`Repeats the pictorial symbol along the bar, cutting the last one at the value, instead of stretching it over the bar`,required:!1,type:{name:`boolean`}},{name:`pictorialSize`,description:"Size of the pictorial symbol in pixels, as `[width, height]` or one value for both; defaults to the width of the bar",required:!1,type:{name:`union`,elements:[{name:`number`},{name:`tuple`,elements:[{name:`number`},{name:`number`}]}]}}],events:[{name:`click`,type:{names:[`ChartClickEvent`]},description:`Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events`},{name:`legendselectchanged`,type:{names:[`ChartLegendSelectChangedEvent`]},description:`Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged`},{name:`datazoom`,type:{names:[`ChartDataZoomEvent`]},description:`Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom`},{name:`brushselected`,type:{names:[`ChartBrushSelectedEvent`]},description:`Emitted when the brushed areas change -- see https://echarts.apache.org/en/api.html#events.brushselected`}],sourceFiles:[`packages/charts/src/ChartBar.vue`]}})]),default:A(()=>[n[2]||=j(`div`,{class:`markdown pf-v6-c-content`},[j(`p`,null,[N(`Note: charts live in their own package at `),j(`a`,{href:`https://www.npmjs.com/package/@vue-patternfly/charts`},`@vue-patternfly/charts`),N(`!`)]),j(`h2`,{class:`pf-v6-c-title`},`Examples`)],-1),M(a,{title:`Basic with right aligned legend`,source:`<pf-chart-bar
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
]" />`},{default:A(()=>[M(i,{"aria-label":`Bar chart example`,height:250,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]},{name:`Mice`,data:[{x:`2015`,y:3},{x:`2016`,y:3},{x:`2017`,y:8},{x:`2018`,y:5}]}]})]),_:1}),M(a,{title:`Purple with bottom aligned legend`,source:`<pf-chart-bar
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
theme-color="purple" />`},{default:A(()=>[M(i,{"aria-label":`Bar chart example`,height:275,"legend-position":`bottom`,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]},{name:`Mice`,data:[{x:`2015`,y:3},{x:`2016`,y:3},{x:`2017`,y:8},{x:`2018`,y:5}]}],"theme-color":`purple`})]),_:1}),M(a,{title:`Multi-color (ordered) with bottom-left aligned legend`,source:`<pf-chart-bar
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
theme-color="multi-ordered" />`},{default:A(()=>[M(i,{"aria-label":`Bar chart example`,height:275,"legend-position":`bottom-left`,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]},{name:`Mice`,data:[{x:`2015`,y:3},{x:`2016`,y:3},{x:`2017`,y:8},{x:`2018`,y:5}]}],"theme-color":`multi-ordered`})]),_:1}),M(a,{title:`Single with right aligned legend`,source:`<pf-chart-bar
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
]" />`},{default:A(()=>[M(i,{"aria-label":`Bar chart example`,height:250,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]}]})]),_:1}),M(a,{title:`Without fading the other bars on hover`,source:`<pf-chart-bar
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
]" />`},{default:A(()=>[M(i,{"aria-label":`Bar chart example`,height:250,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}],emphasis:{focus:`none`}},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}],emphasis:{focus:`none`}},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}],emphasis:{focus:`none`}},{name:`Mice`,data:[{x:`2015`,y:3},{x:`2016`,y:3},{x:`2017`,y:8},{x:`2018`,y:5}],emphasis:{focus:`none`}}]})]),_:1}),M(a,{title:`Stacked`,source:`<pf-chart-bar
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
stacked />`},{default:A(()=>[M(i,{"aria-label":`Stack chart example`,"bar-width":30,height:250,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]},{name:`Mice`,data:[{x:`2015`,y:3},{x:`2016`,y:3},{x:`2017`,y:8},{x:`2018`,y:5}]}],stacked:``})]),_:1}),M(a,{title:`Horizontal stacked with bottom aligned legend`,source:`<pf-chart-bar
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
theme-color="multi-ordered" />`},{default:A(()=>[M(i,{"aria-label":`Stack chart example`,height:275,horizontal:``,"legend-position":`bottom`,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]},{name:`Birds`,data:[{x:`2015`,y:4},{x:`2016`,y:4},{x:`2017`,y:9},{x:`2018`,y:7}]},{name:`Mice`,data:[{x:`2015`,y:3},{x:`2016`,y:3},{x:`2017`,y:8},{x:`2018`,y:5}]}],stacked:``,"theme-color":`multi-ordered`})]),_:1}),M(a,{title:`With max and min points and average lines`,source:`<pf-chart-bar
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
theme-color="multi-ordered" />`},{default:A(()=>[M(i,{"aria-label":`Bar chart with marks example`,height:300,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}],markPoint:{data:[{type:`max`,name:`Max`},{type:`min`,name:`Min`}]},markLine:{data:[{type:`average`,name:`Average`}]}},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}],markPoint:{data:[{type:`max`,name:`Max`},{type:`min`,name:`Min`}]},markLine:{data:[{type:`average`,name:`Average`}]}}],"theme-color":`multi-ordered`})]),_:1}),M(a,{title:`With a target line`,source:`<pf-chart-bar
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
]" />`},{default:A(()=>[M(i,{"aria-label":`Bar chart with a target example`,height:275,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}],markLine:{data:[{name:`Target`,yAxis:4}],label:{formatter:`Target: {c}`,position:`insideEndTop`},lineStyle:{type:`solid`},symbol:`none`}}]})]),_:1}),M(a,{title:`With an annotation and a trend line`,source:`<pf-chart-bar
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
theme-color="green" />`},{default:A(()=>[M(i,{"aria-label":`Bar chart with annotations example`,height:300,series:[{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}],markPoint:{data:[{name:`Adoption campaign`,coord:[`2017`,7]}],label:{formatter:`{b}`,position:`top`},symbol:`circle`,symbolSize:8},markLine:{data:[[{name:`Trend`,coord:[`2015`,2]},{coord:[`2018`,4]}]],label:{formatter:`{b}`,position:`middle`}}}],"theme-color":`green`})]),_:1}),M(a,{title:`Horizontal with an average line and bottom aligned legend`,source:`<pf-chart-bar
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
theme-color="multi-ordered" />`},{default:A(()=>[M(i,{"aria-label":`Horizontal bar chart with marks example`,height:300,horizontal:``,"legend-position":`bottom`,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}],markLine:{data:[{type:`average`,name:`Average`}]}},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}],markLine:{data:[{type:`average`,name:`Average`}]}}],"theme-color":`multi-ordered`})]),_:1}),M(a,{title:`Polar, stacked`,source:`<pf-chart-bar
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
theme-color="multi-ordered" />`},{default:A(()=>[M(i,{"aria-label":`Polar bar chart example`,height:350,polar:``,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]}],stacked:``,"theme-color":`multi-ordered`})]),_:1}),M(a,{title:`Radial (horizontal on polar coordinates)`,source:`<pf-chart-bar
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
theme-color="multi-ordered" />`},{default:A(()=>[M(i,{"aria-label":`Radial bar chart example`,height:350,horizontal:``,polar:``,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]}],"theme-color":`multi-ordered`})]),_:1}),M(a,{title:`Timeline`,source:`<pf-chart-bar
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
timeline-autoplay />`},{default:A(()=>[M(i,{"aria-label":`Bar chart timeline example`,height:350,"theme-color":`multi-ordered`,timeline:[{name:`Q1`,series:[{name:`Cats`,data:[{x:`Jan`,y:1},{x:`Feb`,y:2},{x:`Mar`,y:5}]},{name:`Dogs`,data:[{x:`Jan`,y:2},{x:`Feb`,y:1},{x:`Mar`,y:7}]}]},{name:`Q2`,series:[{name:`Cats`,data:[{x:`Jan`,y:3},{x:`Feb`,y:4},{x:`Mar`,y:2}]},{name:`Dogs`,data:[{x:`Jan`,y:5},{x:`Feb`,y:3},{x:`Mar`,y:4}]}]},{name:`Q3`,series:[{name:`Cats`,data:[{x:`Jan`,y:6},{x:`Feb`,y:5},{x:`Mar`,y:7}]},{name:`Dogs`,data:[{x:`Jan`,y:4},{x:`Feb`,y:6},{x:`Mar`,y:3}]}]}],"timeline-autoplay":``})]),_:1}),M(a,{title:`Brushable, with toolbox`,source:`<pf-chart-bar
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
<p>Selected bars: {{ brushed || 'none' }}</p>`},{default:A(()=>[M(i,{"aria-label":`Brushable bar chart example`,brush:``,height:300,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]}],"theme-color":`multi-ordered`,toolbox:``,onBrushselected:n[0]||=e=>t.value=e.batch[0]?.selected.reduce((e,{dataIndex:t})=>e+t.length,0)??0}),j(`p`,null,`Selected bars: `+oe(t.value||`none`),1)]),_:1}),M(a,{title:`Pictorial`,source:`<pf-chart-bar
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
theme-color="multi-ordered" />`},{default:A(()=>[M(i,{"aria-label":`Pictorial bar chart example`,height:275,pictorial:`triangle`,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]}],"theme-color":`multi-ordered`})]),_:1}),M(a,{title:`Horizontal pictorial with repeated symbols`,source:`<pf-chart-bar
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
theme-color="multi-ordered" />`},{default:A(()=>[M(i,{"aria-label":`Pictorial bar chart example`,height:275,horizontal:``,"legend-position":`bottom`,pictorial:`circle`,"pictorial-repeat":``,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]}],"theme-color":`multi-ordered`})]),_:1}),M(a,{title:`Pictorial with an SVG path`,source:`<pf-chart-bar
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
theme-color="multi-ordered" />`},{default:A(()=>[M(i,{"aria-label":`Pictorial bar chart example`,height:275,pictorial:`path://M12 2a4 4 0 1 1 0 8a4 4 0 1 1 0-8zM4 22v-4a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v4z`,"pictorial-repeat":``,"pictorial-size":16,series:[{name:`Cats`,data:[{x:`2015`,y:1},{x:`2016`,y:2},{x:`2017`,y:5},{x:`2018`,y:3}]},{name:`Dogs`,data:[{x:`2015`,y:2},{x:`2016`,y:1},{x:`2017`,y:7},{x:`2018`,y:4}]}],"theme-color":`multi-ordered`})]),_:1}),n[3]||=j(`div`,{class:`markdown pf-v6-c-content`},[j(`h2`,{class:`pf-v6-c-title`},`Differences from patternfly-react`),j(`ul`,null,[j(`li`,null,[j(`code`,null,`ChartStack`),N(` and `),j(`code`,null,`ChartGroup`),N(` are not separate components: pass several `),j(`code`,null,`series`),N(` and set `),j(`code`,null,`stacked`),N(` to stack them.`)]),j(`li`,null,[j(`code`,null,`pictorial`),N(` draws the bars with a symbol (`),j(`a`,{href:`https://echarts.apache.org/en/option.html#series-pictorialBar`},`ECharts pictorial bars`),N(`), stretched over each bar or, with `),j(`code`,null,`pictorial-repeat`),N(`, repeated along it; react-charts has no pictorial bars, and ECharts can't stack them.`)]),j(`li`,null,[j(`code`,null,`polar`),N(` draws the bars on polar coordinates, around the circle or, with `),j(`code`,null,`horizontal`),N(`, as rings (radial bars).`)]),j(`li`,null,[j(`code`,null,`timeline`),N(` shows one frame of series at a time, with a `),j(`a`,{href:`https://echarts.apache.org/en/option.html#timeline`},`timeline`),N(` to switch between them; `),j(`code`,null,`timeline-autoplay`),N(` plays it, unless the user prefers reduced motion.`)]),j(`li`,null,[j(`code`,null,`brush`),N(` lets the user select a range of bars with the toolbox buttons (`),j(`a`,{href:`https://echarts.apache.org/en/option.html#brush`},`ECharts brush`),N(`), fading the others and emitting `),j(`code`,null,`brushselected`),N(`.`)]),j(`li`,null,[j(`code`,null,`toolbox`),N(` adds buttons to save the chart as an image and to restore it; `),j(`code`,null,`zoomable`),N(` zooms into the categories, like in the line charts.`)]),j(`li`,null,[N(`Series take any other ECharts series option, like `),j(`a`,{href:`https://echarts.apache.org/en/option.html#series-bar.markPoint`},[j(`code`,null,`markPoint`)]),N(` and `),j(`a`,{href:`https://echarts.apache.org/en/option.html#series-bar.markLine`},[j(`code`,null,`markLine`)]),N(` to annotate the bars: the wrapper doesn't register their components, register `),j(`code`,null,`MarkPointComponent`),N(` and `),j(`code`,null,`MarkLineComponent`),N(` with `),j(`code`,null,`echarts.use()`),N(`. For dashed threshold lines spanning several bars, `),j(`code`,null,`thresholds`),N(` is simpler.`)]),j(`li`,null,[N(`Hovering a series fades the others (`),j(`a`,{href:`https://echarts.apache.org/en/option.html#series-bar.emphasis.focus`},`ECharts emphasis`),N(`); set `),j(`code`,null,`emphasis: { focus: 'none' }`),N(` on the series to disable it.`)]),j(`li`,null,[N(`The "Alerts timeline" example relies on Victory's custom `),j(`code`,null,`dataComponent`),N(` and has no direct equivalent; it can be built with a `),j(`a`,{href:`https://echarts.apache.org/en/option.html#series-custom`},`custom series`),N(` through `),j(`code`,null,`PfCharts`),N(`.`)])])],-1)]),_:1})}}});export{De as default};