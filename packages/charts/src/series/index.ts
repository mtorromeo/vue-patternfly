import type { SeriesOption } from 'echarts';
import type { ThemeDefinition } from '../themes/Theme';
import { defaultsDeep, merge } from '../utils/merge';
import { getBarSeries } from './bar';
import { getBoxPlotLegend, getBoxPlotSeries } from './boxplot';
import { getCandlestickSeries } from './candlestick';
import { getChordSeries } from './chord';
import { getGraphSeries } from './graph';
import { getLineSeries } from './line';
import { getLinesSeries } from './lines';
import { getParallelSeries } from './parallel';
import { getPieSeries } from './pie';
import { getSankeySeries } from './sankey';
import { getSunburstSeries } from './sunburst';
import { getThemeRiverSeries } from './themeriver';
import { getTreeSeries } from './tree';
import { getTreemapSeries } from './treemap';

export {
  getBarSeries,
  getBoxPlotLegend,
  getBoxPlotSeries,
  getCandlestickSeries,
  getChordSeries,
  getGraphSeries,
  getLineSeries,
  getLinesSeries,
  getParallelSeries,
  getPieSeries,
  getSankeySeries,
  getSunburstSeries,
  getThemeRiverSeries,
  getTreeSeries,
  getTreemapSeries,
};

/**
 * Returns the given series with the PatternFly defaults for its type applied. Series without specific
 * defaults are only made non interactive for the skeleton theme.
 *
 * @param index The index of the series in the option, used to pick its color where needed
 */
export const getSeries = (
  serie: SeriesOption,
  theme: ThemeDefinition,
  isSkeleton: boolean,
  index = 0,
): SeriesOption => {
  switch (serie.type) {
    case 'bar':
    case 'pictorialBar':
      return getBarSeries(serie, theme, isSkeleton, index);
    case 'boxplot':
      return getBoxPlotSeries(serie, theme, isSkeleton, index);
    case 'candlestick':
      return getCandlestickSeries(serie, isSkeleton);
    case 'chord':
      return getChordSeries(serie, isSkeleton);
    case 'effectScatter':
      // The skeleton has no ripples
      return isSkeleton ? merge(serie, { emphasis: { disabled: true }, showEffectOn: 'emphasis' }) : serie;
    case 'graph':
      return getGraphSeries(serie, isSkeleton);
    case 'line':
      return getLineSeries(serie, theme, isSkeleton);
    case 'lines':
      return getLinesSeries(serie, isSkeleton);
    case 'parallel':
      return getParallelSeries(serie, isSkeleton);
    case 'pie':
      return getPieSeries(serie, theme, isSkeleton);
    case 'sankey':
      return getSankeySeries(serie, theme, isSkeleton);
    case 'sunburst':
      return getSunburstSeries(serie, isSkeleton);
    case 'themeRiver':
      return getThemeRiverSeries(serie, isSkeleton);
    case 'tree':
      return getTreeSeries(serie, isSkeleton);
    case 'treemap':
      return getTreemapSeries(serie, isSkeleton);
    default:
      return isSkeleton ? defaultsDeep(serie, { emphasis: { disabled: true } }) : serie;
  }
};

/**
 * Kind of tooltip used by default for the given series type
 */
export const getTooltipType = (type: string | undefined) => {
  switch (type) {
    case 'sankey':
      return 'sankey';
    case 'line':
    case 'bar':
    case 'pictorialBar':
      return 'legend';
    default:
      return 'item';
  }
};
