import chart_color_black_100 from '@patternfly/react-tokens/dist/esm/chart_color_black_100';
import chart_color_black_200 from '@patternfly/react-tokens/dist/esm/chart_color_black_200';
import chart_color_black_300 from '@patternfly/react-tokens/dist/esm/chart_color_black_300';
import chart_color_black_400 from '@patternfly/react-tokens/dist/esm/chart_color_black_400';
import chart_color_black_500 from '@patternfly/react-tokens/dist/esm/chart_color_black_500';
import chart_color_blue_100 from '@patternfly/react-tokens/dist/esm/chart_color_blue_100';
import chart_color_blue_200 from '@patternfly/react-tokens/dist/esm/chart_color_blue_200';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_blue_400 from '@patternfly/react-tokens/dist/esm/chart_color_blue_400';
import chart_color_blue_500 from '@patternfly/react-tokens/dist/esm/chart_color_blue_500';
import chart_color_green_100 from '@patternfly/react-tokens/dist/esm/chart_color_green_100';
import chart_color_green_200 from '@patternfly/react-tokens/dist/esm/chart_color_green_200';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';
import chart_color_green_400 from '@patternfly/react-tokens/dist/esm/chart_color_green_400';
import chart_color_green_500 from '@patternfly/react-tokens/dist/esm/chart_color_green_500';
import chart_color_orange_100 from '@patternfly/react-tokens/dist/esm/chart_color_orange_100';
import chart_color_orange_200 from '@patternfly/react-tokens/dist/esm/chart_color_orange_200';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';
import chart_color_orange_400 from '@patternfly/react-tokens/dist/esm/chart_color_orange_400';
import chart_color_orange_500 from '@patternfly/react-tokens/dist/esm/chart_color_orange_500';
import chart_color_purple_100 from '@patternfly/react-tokens/dist/esm/chart_color_purple_100';
import chart_color_purple_200 from '@patternfly/react-tokens/dist/esm/chart_color_purple_200';
import chart_color_purple_300 from '@patternfly/react-tokens/dist/esm/chart_color_purple_300';
import chart_color_purple_400 from '@patternfly/react-tokens/dist/esm/chart_color_purple_400';
import chart_color_purple_500 from '@patternfly/react-tokens/dist/esm/chart_color_purple_500';
import chart_color_teal_100 from '@patternfly/react-tokens/dist/esm/chart_color_teal_100';
import chart_color_teal_200 from '@patternfly/react-tokens/dist/esm/chart_color_teal_200';
import chart_color_teal_300 from '@patternfly/react-tokens/dist/esm/chart_color_teal_300';
import chart_color_teal_400 from '@patternfly/react-tokens/dist/esm/chart_color_teal_400';
import chart_color_teal_500 from '@patternfly/react-tokens/dist/esm/chart_color_teal_500';
import chart_color_yellow_100 from '@patternfly/react-tokens/dist/esm/chart_color_yellow_100';
import chart_color_yellow_200 from '@patternfly/react-tokens/dist/esm/chart_color_yellow_200';
import chart_color_yellow_300 from '@patternfly/react-tokens/dist/esm/chart_color_yellow_300';
import chart_color_yellow_400 from '@patternfly/react-tokens/dist/esm/chart_color_yellow_400';
import chart_color_yellow_500 from '@patternfly/react-tokens/dist/esm/chart_color_yellow_500';
import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import chart_skeleton_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_skeleton_ColorScale_100';
import chart_skeleton_ColorScale_500 from '@patternfly/react-tokens/dist/esm/chart_skeleton_ColorScale_500';
import t_global_background_color_primary_default from '@patternfly/react-tokens/dist/esm/t_global_background_color_primary_default';
import type { TooltipComponentFormatterCallbackParams } from 'echarts';
import type { ChartsOption, ChartWrapperProps } from '../common';
import { colorAt, getLabelColorOver } from '../utils/color';
import { getComputedStyleValue } from '../utils/styles';
import { finalizeOption, getVisualMap } from './common';

export interface ChartHeatmapDatum {
  /** Column of the cell */
  x: string | number;
  /** Row of the cell */
  y: string | number;
  /** Value of the cell, mapped to its color */
  value: number | null;
}

export interface HeatmapOptions extends Omit<ChartWrapperProps, 'legendData'> {
  /** The cells */
  data?: ChartHeatmapDatum[];
  /** The columns, in order; defaults to the x values in order of appearance */
  xCategories?: (string | number)[];
  /** The rows, from top to bottom; defaults to the y values in order of appearance */
  yCategories?: (string | number)[];
  /** The value mapped to the lightest color; defaults to the lowest value */
  min?: number;
  /** The value mapped to the darkest color; defaults to the highest value */
  max?: number;
  /** Shows the value inside each cell */
  labels?: boolean;
  /** Label of the x axis */
  xAxisLabel?: string;
  /** Label of the y axis */
  yAxisLabel?: string;
}

// Each color family, from the lightest to the darkest (the theme color scales alternate shades instead)
const sequentialScales = {
  blue: [chart_color_blue_100, chart_color_blue_200, chart_color_blue_300, chart_color_blue_400, chart_color_blue_500],
  gray: [
    chart_color_black_100,
    chart_color_black_200,
    chart_color_black_300,
    chart_color_black_400,
    chart_color_black_500,
  ],
  green: [
    chart_color_green_100,
    chart_color_green_200,
    chart_color_green_300,
    chart_color_green_400,
    chart_color_green_500,
  ],
  orange: [
    chart_color_orange_100,
    chart_color_orange_200,
    chart_color_orange_300,
    chart_color_orange_400,
    chart_color_orange_500,
  ],
  purple: [
    chart_color_purple_100,
    chart_color_purple_200,
    chart_color_purple_300,
    chart_color_purple_400,
    chart_color_purple_500,
  ],
  skeleton: [chart_skeleton_ColorScale_100, chart_skeleton_ColorScale_500],
  teal: [chart_color_teal_100, chart_color_teal_200, chart_color_teal_300, chart_color_teal_400, chart_color_teal_500],
  yellow: [
    chart_color_yellow_100,
    chart_color_yellow_200,
    chart_color_yellow_300,
    chart_color_yellow_400,
    chart_color_yellow_500,
  ],
};

/**
 * The sequential color scale of a theme color, from the lightest to the darkest. Multi-color themes, meant for
 * categories, fall back to blue.
 */
export function getSequentialColors(themeColor?: string) {
  const scale = sequentialScales[themeColor as keyof typeof sequentialScales] ?? sequentialScales.blue;
  return scale.map(token => getComputedStyleValue(token));
}

function categoriesOf(values: (string | number)[]) {
  return [...new Set(values)];
}

/**
 * Returns the ECharts option for a heatmap chart
 */
export function getHeatmapOption(options: HeatmapOptions): ChartsOption {
  const data = options.data ?? [];
  const xCategories = options.xCategories ?? categoriesOf(data.map(datum => datum.x));
  const yCategories = options.yCategories ?? categoriesOf(data.map(datum => datum.y));
  const values = data.map(datum => datum.value).filter((value): value is number => value != null);
  const max = options.max ?? (values.length ? Math.max(...values) : 1);
  const min = options.min ?? (values.length ? Math.min(...values) : 0);
  const labelColor = getComputedStyleValue(chart_global_label_Fill);
  const colors = getSequentialColors(options.themeColor);

  const position = options.legendPosition ?? 'right';
  const visualMap = getVisualMap(options, min, max, colors);

  // Labels contrast with their cell
  const labelColorOf = (value: number | null) =>
    value == null ? labelColor : getLabelColorOver(colorAt(colors, max > min ? (value - min) / (max - min) : 0));

  const axis = (categories: (string | number)[], name: string | undefined, nameGap: number) => ({
    axisLine: { show: false },
    axisTick: { show: false },
    // ECharts draws heatmap cells only between the ticks: the PatternFly theme disables that for category axes
    boundaryGap: true,
    data: categories.map(String),
    splitArea: { show: false },
    splitLine: { show: false },
    type: 'category',
    ...(name ? { name, nameGap, nameLocation: 'middle' } : {}),
  });

  return finalizeOption(options, {
    grid: {
      bottom: (options.xAxisLabel ? 55 : 30) + (position === 'bottom' || position === 'bottom-left' ? 50 : 0),
      left: options.yAxisLabel ? 90 : 70,
      right: 20 + (position === 'right' ? 70 : 0),
      top: 10,
    },
    series: [
      {
        data: data.map(datum => ({
          label: { color: labelColorOf(datum.value) },
          value: [xCategories.indexOf(datum.x), yCategories.indexOf(datum.y), datum.value ?? '-'],
        })),
        emphasis: { focus: 'none', itemStyle: { borderColor: labelColor } },
        itemStyle: {
          borderColor: getComputedStyleValue(t_global_background_color_primary_default),
          borderWidth: 2,
        },
        label: { show: !!options.labels },
        type: 'heatmap',
      },
    ],
    tooltip: {
      formatter: (params: TooltipComponentFormatterCallbackParams) => {
        // Heatmap tooltips are triggered by item, so they get the parameters of the cell
        const [x, y, value] = [params].flat()[0].value as [number, number, number | string];
        return `${xCategories[x]} · ${yCategories[y]}: <strong>${value}</strong>`;
      },
    },
    visualMap,
    xAxis: axis(xCategories, options.xAxisLabel, 30),
    // The first row on top, like a table
    yAxis: { ...axis(yCategories, options.yAxisLabel, 60), inverse: true },
  });
}
