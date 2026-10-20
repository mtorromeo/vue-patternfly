import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import type { ChartsOption, ChartWrapperProps } from '../common';
import { getComputedStyleValue } from '../utils/styles';
import { finalizeOption, getLegend } from './common';

export interface ChartParallelDimension {
  /** Name of the axis */
  name: string;
  /** Values of a category axis, from bottom to top; without them the axis is a value axis */
  categories?: string[];
  /** Value at the bottom of a value axis; defaults to a value fitting the data */
  min?: number;
  /** Value at the top of a value axis; defaults to a value fitting the data */
  max?: number;
  /** Puts the lowest values at the top */
  inverse?: boolean;
}

export interface ChartParallelSeries {
  /** Series name, shown in the legend and tooltip */
  name?: string;
  /** The lines of the series, each with one value per dimension, in the same order */
  data: (number | string | null)[][];
  [key: string]: unknown;
}

export interface ParallelOptions extends ChartWrapperProps {
  /** The axes, as names or with their range or categories */
  dimensions?: (string | ChartParallelDimension)[];
  /** The series to draw, each as a group of lines */
  series?: ChartParallelSeries[];
  /** Draws the axes as rows, from top to bottom, instead of columns */
  horizontal?: boolean;
  /** Draws the lines as curves */
  smooth?: boolean;
}

const padding = 20;

/**
 * Returns the ECharts option for a parallel coordinates chart
 */
export function getParallelOption(options: ParallelOptions): ChartsOption {
  const series = options.series ?? [];
  const labelColor = getComputedStyleValue(chart_global_label_Fill);
  const { legend, room } = getLegend(
    options,
    series.map(serie => serie.name),
  );
  const dimensions = (options.dimensions ?? []).map(dimension =>
    typeof dimension === 'string' ? { name: dimension } : dimension,
  );
  // Axis names are drawn after the end of their axis: above columns, right of rows (a rough estimate of their width)
  const nameRoom = options.horizontal ? Math.max(0, ...dimensions.map(({ name }) => name.length)) * 7 + 10 : 30;

  return finalizeOption(options, {
    ...(legend ? { legend } : {}),
    parallel: {
      // Axis labels are centered on the ends of the axes
      bottom: padding * 2 + (room?.bottom ?? 0),
      layout: options.horizontal ? 'vertical' : 'horizontal',
      left: padding * 2,
      right: padding + (room?.right ?? 0) + (options.horizontal ? nameRoom : padding),
      top: padding + (options.horizontal ? padding : nameRoom),
    },
    parallelAxis: dimensions.map(({ categories, ...axis }, dim) => ({
      ...axis,
      dim,
      nameTextStyle: { color: labelColor },
      ...(categories ? { data: categories, type: 'category' } : { type: 'value' }),
    })),
    series: series.map(({ data, ...serie }) => ({
      type: 'parallel',
      ...serie,
      data: data.map(line => line.map(value => value ?? '-')),
      ...(options.smooth ? { smooth: true } : {}),
    })),
  });
}
