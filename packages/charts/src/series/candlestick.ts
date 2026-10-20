import chart_global_danger_Color_100 from '@patternfly/react-tokens/dist/esm/chart_global_danger_Color_100';
import chart_global_success_Color_100 from '@patternfly/react-tokens/dist/esm/chart_global_success_Color_100';
import type { CandlestickSeriesOption } from 'echarts';
import { defaultsDeep } from '../utils/merge';
import { getComputedStyleValue } from '../utils/styles';

/**
 * Returns series properties for Candlestick chart. The PatternFly ECharts theme draws rising candles with the
 * "negative" color and falling ones with the "positive" color, which is white: falling candles vanish on a light
 * background, and every candle is white on a dark one. Rising candles get the success color and falling ones the
 * danger color instead. The skeleton theme keeps its own colors.
 */
export const getCandlestickSeries = (serie: CandlestickSeriesOption, isSkeleton: boolean) => {
  if (isSkeleton) {
    return defaultsDeep(serie, { emphasis: { disabled: true } });
  }
  const rising = getComputedStyleValue(chart_global_success_Color_100);
  const falling = getComputedStyleValue(chart_global_danger_Color_100);
  return defaultsDeep(serie, {
    itemStyle: { borderColor: rising, borderColor0: falling, color: rising, color0: falling },
    type: 'candlestick',
  });
};
