import type { ChartsOption, ChartWrapperProps } from '../common';
import { finalizeOption, getDataZoom, getLegend, sliderRoom } from './common';

export interface ChartCandlestickDatum {
  /** The independent value (category), e.g. the day */
  x?: string | number;
  /** Opening value */
  open: number;
  /** Closing value */
  close: number;
  /** Lowest value */
  low: number;
  /** Highest value */
  high: number;
}

export interface CandlestickOptions extends ChartWrapperProps {
  /** The candles to draw */
  data?: ChartCandlestickDatum[];
  /** Series name, shown in the legend and tooltip */
  name?: string;
  /** Label of the independent (category) axis */
  xAxisLabel?: string;
  /** Label of the dependent (value) axis */
  yAxisLabel?: string;
  /**
   * Lets the user zoom into the days, with a slider and with the mouse wheel while holding Ctrl (or by pinching), so
   * the wheel still scrolls the page
   */
  zoomable?: boolean;
}

/**
 * Returns the ECharts option for a candlestick chart
 */
export function getCandlestickOption(options: CandlestickOptions): ChartsOption {
  const data = options.data ?? [];

  // The legend is only useful when the series is named
  const { legend, room } = getLegend(options, [options.name], !!options.name);
  const zoomable = !!options.zoomable && options.themeColor !== 'skeleton';

  return finalizeOption(options, {
    grid: {
      bottom: (options.xAxisLabel ? 65 : 40) + (room?.bottom ?? 0) + (zoomable ? sliderRoom : 0),
      left: options.yAxisLabel ? 70 : 50,
      right: 20 + (room?.right ?? 0),
      top: 20 + (options.toolbox ? 10 : 0),
    },
    ...(legend ? { legend } : {}),
    ...(zoomable ? getDataZoom(false, room?.bottom ?? 0) : {}),
    xAxis: {
      data: data.map((datum, index) => String(datum.x ?? index + 1)),
      type: 'category',
      ...(options.xAxisLabel ? { name: options.xAxisLabel, nameGap: 30, nameLocation: 'middle' } : {}),
    },
    // Prices rarely start from 0: the axis spans the data
    yAxis: {
      scale: true,
      type: 'value',
      ...(options.yAxisLabel ? { name: options.yAxisLabel, nameGap: 40, nameLocation: 'middle' } : {}),
    },
    series: [
      {
        type: 'candlestick',
        ...(options.name ? { name: options.name } : {}),
        // ECharts orders the values as open, close, lowest, highest
        data: data.map(({ open, close, low, high }) => [open, close, low, high]),
      },
    ],
  });
}
