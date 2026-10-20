import chart_area_Opacity from '@patternfly/react-tokens/dist/esm/chart_area_Opacity';
import chart_echarts_global_axis_axis_tick_item_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_axis_tick_item_style_Color';
import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import type { ChartsOption, ChartWrapperProps } from '../common';
import { getComputedStyleValue } from '../utils/styles';
import { finalizeOption, getLegend } from './common';

export interface ChartRadarIndicator {
  /** Name of the axis */
  name: string;
  /** Value at the outer edge of the axis; defaults to a value fitting the data */
  max?: number;
  /** Value at the center of the axis; defaults to 0 */
  min?: number;
}

export interface ChartRadarSeries {
  /** Series name, shown in the legend and tooltip */
  name?: string;
  /** One value per indicator, in the same order */
  data: (number | null)[];
  [key: string]: unknown;
}

export interface RadarOptions extends ChartWrapperProps {
  /** The axes, as names or with their range */
  indicators?: (string | ChartRadarIndicator)[];
  /** The series to draw, each as a polygon */
  series?: ChartRadarSeries[];
  /** Shape of the grid */
  shape?: 'polygon' | 'circle';
  /** Fills the area of each series */
  filled?: boolean;
  /** Number of grid levels */
  levels?: number;
}

/** Parses the area opacity token, given as a percentage (e.g. 30%) */
function getAreaOpacity() {
  const value = getComputedStyleValue(chart_area_Opacity).trim();
  const opacity = value.endsWith('%') ? parseFloat(value) / 100 : parseFloat(value);
  return isNaN(opacity) ? 0.3 : opacity;
}

/**
 * Returns the ECharts option for a radar chart
 */
export function getRadarOption(options: RadarOptions): ChartsOption {
  const series = options.series ?? [];
  const lineColor = getComputedStyleValue(chart_echarts_global_axis_axis_tick_item_style_Color);
  const { legend } = getLegend(
    options,
    series.map(serie => serie.name),
  );
  const position = legend ? (options.legendPosition ?? 'right') : 'none';

  return finalizeOption(options, {
    ...(legend ? { legend } : {}),
    radar: {
      axisLine: { lineStyle: { color: lineColor } },
      axisName: { color: getComputedStyleValue(chart_global_label_Fill) },
      // Leave room for the legend (ECharts radars take percentages of the whole chart)
      center: position === 'right' ? ['40%', '50%'] : position === 'none' ? ['50%', '50%'] : ['50%', '45%'],
      indicator: (options.indicators ?? []).map(indicator =>
        typeof indicator === 'string' ? { name: indicator } : indicator,
      ),
      radius: '65%',
      shape: options.shape ?? 'polygon',
      ...(options.levels !== undefined ? { splitNumber: options.levels } : {}),
      splitArea: { show: false },
      splitLine: { lineStyle: { color: lineColor } },
    },
    series: [
      {
        type: 'radar',
        // ECharts draws every polygon as a data item of a single series
        data: series.map(({ data, ...serie }) => ({
          ...(options.filled === false ? {} : { areaStyle: { opacity: getAreaOpacity() } }),
          ...serie,
          value: data.map(value => value ?? '-'),
        })),
      },
    ],
  });
}
