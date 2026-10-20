import type { ChartsOption, ChartWrapperProps } from '../common';
import { finalizeOption, getLegend } from './common';

export interface ChartBoxPlotDatum {
  /** The independent value (category) */
  x?: string | number;
  /** The samples, summarized as minimum, quartiles and maximum */
  y: number[];
}

export interface ChartBoxPlotSeries {
  /** Series name, shown in the legend and tooltip */
  name?: string;
  /** The boxes */
  data: ChartBoxPlotDatum[];
  [key: string]: unknown;
}

export interface BoxPlotOptions extends ChartWrapperProps {
  /** The series to draw */
  series?: ChartBoxPlotSeries[];
  /** Draws the boxes horizontally */
  horizontal?: boolean;
  /** Label of the independent (category) axis */
  xAxisLabel?: string;
  /** Label of the dependent (value) axis */
  yAxisLabel?: string;
}

/**
 * Linear interpolation quantile of sorted values, as computed by d3 (and therefore Victory)
 */
function quantile(sorted: number[], p: number) {
  const i = (sorted.length - 1) * p;
  const lower = Math.floor(i);
  return sorted[lower] + (sorted[Math.min(lower + 1, sorted.length - 1)] - sorted[lower]) * (i - lower);
}

/**
 * Returns [min, Q1, median, Q3, max] of the given samples
 */
export function getBoxPlotValues(samples: number[]) {
  const sorted = [...samples].sort((a, b) => a - b);
  if (!sorted.length) {
    return [];
  }
  return [sorted[0], quantile(sorted, 0.25), quantile(sorted, 0.5), quantile(sorted, 0.75), sorted[sorted.length - 1]];
}

/**
 * Returns the ECharts option for a box plot chart
 */
export function getBoxPlotOption(options: BoxPlotOptions): ChartsOption {
  const series = options.series ?? [];
  const categories: string[] = [];
  for (const serie of series) {
    serie.data.forEach((datum, index) => {
      const x = String(datum.x ?? index + 1);
      if (!categories.includes(x)) {
        categories.push(x);
      }
    });
  }

  const allSeries = series.map(({ data, ...serie }) => ({
    type: 'boxplot',
    ...serie,
    data: categories.map(category => {
      const datum = data.find((d, index) => String(d.x ?? index + 1) === category);
      return datum ? getBoxPlotValues(datum.y) : [];
    }),
  }));

  const { legend, room } = getLegend(
    options,
    allSeries.map(serie => serie.name),
  );
  const categoryAxis = {
    data: categories,
    type: 'category',
    ...(options.xAxisLabel ? { name: options.xAxisLabel, nameGap: 30, nameLocation: 'middle' } : {}),
  };
  const valueAxis = {
    type: 'value',
    ...(options.yAxisLabel ? { name: options.yAxisLabel, nameGap: 40, nameLocation: 'middle' } : {}),
  };

  return finalizeOption(options, {
    grid: {
      bottom: ((options.horizontal ? options.yAxisLabel : options.xAxisLabel) ? 65 : 40) + (room?.bottom ?? 0),
      left: (options.horizontal ? options.xAxisLabel : options.yAxisLabel) ? 70 : 50,
      right: 20 + (room?.right ?? 0),
      top: 20,
    },
    ...(legend ? { legend } : {}),
    xAxis: options.horizontal ? valueAxis : categoryAxis,
    yAxis: options.horizontal ? categoryAxis : valueAxis,
    series: allSeries,
  });
}
