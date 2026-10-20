import type { App } from 'vue';

import PfCharts from './Charts.vue';
import PfChartArea from './ChartArea.vue';
import PfChartBar from './ChartBar.vue';
import PfChartBoxPlot from './ChartBoxPlot.vue';
import PfChartBullet from './ChartBullet.vue';
import PfChartCalendar from './ChartCalendar.vue';
import PfChartCandlestick from './ChartCandlestick.vue';
import PfChartChord from './ChartChord.vue';
import PfChartDonut from './ChartDonut.vue';
import PfChartDonutThreshold from './ChartDonutThreshold.vue';
import PfChartDonutUtilization from './ChartDonutUtilization.vue';
import PfChartFunnel from './ChartFunnel.vue';
import PfChartGauge from './ChartGauge.vue';
import PfChartGraph from './ChartGraph.vue';
import PfChartHeatmap from './ChartHeatmap.vue';
import PfChartLine from './ChartLine.vue';
import PfChartLines from './ChartLines.vue';
import PfChartMap from './ChartMap.vue';
import PfChartParallel from './ChartParallel.vue';
import PfChartPie from './ChartPie.vue';
import PfChartRadar from './ChartRadar.vue';
import PfChartSankey from './ChartSankey.vue';
import PfChartScatter from './ChartScatter.vue';
import PfChartSparkline from './ChartSparkline.vue';
import PfChartSunburst from './ChartSunburst.vue';
import PfChartThemeRiver from './ChartThemeRiver.vue';
import PfChartTree from './ChartTree.vue';
import PfChartTreemap from './ChartTreemap.vue';

export {
  PfCharts,
  PfChartArea,
  PfChartBar,
  PfChartBoxPlot,
  PfChartBullet,
  PfChartCalendar,
  PfChartCandlestick,
  PfChartChord,
  PfChartDonut,
  PfChartDonutThreshold,
  PfChartDonutUtilization,
  PfChartFunnel,
  PfChartGauge,
  PfChartGraph,
  PfChartHeatmap,
  PfChartLine,
  PfChartLines,
  PfChartMap,
  PfChartParallel,
  PfChartPie,
  PfChartRadar,
  PfChartSankey,
  PfChartScatter,
  PfChartSparkline,
  PfChartSunburst,
  PfChartThemeRiver,
  PfChartTree,
  PfChartTreemap,
};

export * from './builders';
export type * from './common';
export {
  getBarSeries,
  getBoxPlotSeries,
  getCandlestickSeries,
  getLineSeries,
  getPieSeries,
  getSankeySeries,
} from './series';
export type { ThemeDefinition } from './themes/Theme';
export { ThemeColor, type ThemeColorName } from './themes/ThemeColor';
export { getComputedStyleBoolean, getComputedStyleNumber, getComputedStyleValue } from './utils/styles';
export { getCustomTheme, getTheme } from './utils/theme';

export function install(app: App) {
  app.component('PfCharts', PfCharts);
  app.component('PfChartArea', PfChartArea);
  app.component('PfChartBar', PfChartBar);
  app.component('PfChartBoxPlot', PfChartBoxPlot);
  app.component('PfChartBullet', PfChartBullet);
  app.component('PfChartCalendar', PfChartCalendar);
  app.component('PfChartCandlestick', PfChartCandlestick);
  app.component('PfChartChord', PfChartChord);
  app.component('PfChartDonut', PfChartDonut);
  app.component('PfChartDonutThreshold', PfChartDonutThreshold);
  app.component('PfChartDonutUtilization', PfChartDonutUtilization);
  app.component('PfChartFunnel', PfChartFunnel);
  app.component('PfChartGauge', PfChartGauge);
  app.component('PfChartGraph', PfChartGraph);
  app.component('PfChartHeatmap', PfChartHeatmap);
  app.component('PfChartLine', PfChartLine);
  app.component('PfChartLines', PfChartLines);
  app.component('PfChartMap', PfChartMap);
  app.component('PfChartParallel', PfChartParallel);
  app.component('PfChartPie', PfChartPie);
  app.component('PfChartRadar', PfChartRadar);
  app.component('PfChartSankey', PfChartSankey);
  app.component('PfChartScatter', PfChartScatter);
  app.component('PfChartSparkline', PfChartSparkline);
  app.component('PfChartSunburst', PfChartSunburst);
  app.component('PfChartThemeRiver', PfChartThemeRiver);
  app.component('PfChartTree', PfChartTree);
  app.component('PfChartTreemap', PfChartTreemap);
}

const plugin = {
  install,
};

declare module 'vue' {
  export interface GlobalComponents {
    PfCharts: typeof PfCharts;
    PfChartArea: typeof PfChartArea;
    PfChartBar: typeof PfChartBar;
    PfChartBoxPlot: typeof PfChartBoxPlot;
    PfChartBullet: typeof PfChartBullet;
    PfChartCalendar: typeof PfChartCalendar;
    PfChartCandlestick: typeof PfChartCandlestick;
    PfChartChord: typeof PfChartChord;
    PfChartDonut: typeof PfChartDonut;
    PfChartDonutThreshold: typeof PfChartDonutThreshold;
    PfChartDonutUtilization: typeof PfChartDonutUtilization;
    PfChartFunnel: typeof PfChartFunnel;
    PfChartGauge: typeof PfChartGauge;
    PfChartGraph: typeof PfChartGraph;
    PfChartHeatmap: typeof PfChartHeatmap;
    PfChartLine: typeof PfChartLine;
    PfChartLines: typeof PfChartLines;
    PfChartMap: typeof PfChartMap;
    PfChartParallel: typeof PfChartParallel;
    PfChartPie: typeof PfChartPie;
    PfChartRadar: typeof PfChartRadar;
    PfChartSankey: typeof PfChartSankey;
    PfChartScatter: typeof PfChartScatter;
    PfChartSparkline: typeof PfChartSparkline;
    PfChartSunburst: typeof PfChartSunburst;
    PfChartThemeRiver: typeof PfChartThemeRiver;
    PfChartTree: typeof PfChartTree;
    PfChartTreemap: typeof PfChartTreemap;
  }
}

export default plugin;
