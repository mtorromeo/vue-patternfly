import chart_echarts_global_axis_axis_line_item_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_axis_line_item_style_Color';
import type { ChartSeries, ChartsOption, ChartWrapperProps } from '../common';
import { getComputedStyleValue } from '../utils/styles';
import { finalizeOption, getLegend } from './common';

export interface ThemeRiverOptions extends ChartWrapperProps {
  /** The streams, each with its values over time: `x` is a date (or a number) and `y` the value */
  series?: ChartSeries[];
  /** Shows the name of each stream before its start */
  labels?: boolean;
  /** Label of the time axis */
  xAxisLabel?: string;
}

type ThemeRiverDatum = [string | number | Date, number, string];

const padding = 20;

/**
 * Returns the ECharts option for a theme river chart
 */
export function getThemeRiverOption(options: ThemeRiverOptions): ChartsOption {
  const series = options.series ?? [];
  // ECharts draws every stream as the data of a single series, named by the third value of each datum
  const names = series.map((serie, index) => serie.name ?? `${index + 1}`);
  const data: ThemeRiverDatum[] = series.flatMap((serie, index) =>
    serie.data.flatMap((datum, position): ThemeRiverDatum[] => {
      const point = datum !== null && typeof datum === 'object' ? datum : { x: undefined, y: datum };
      // Like Victory, data without x values is placed at x = 1, 2, 3...
      return point.y == null ? [] : [[point.x ?? position + 1, point.y, names[index]]];
    }),
  );
  const axisType = data.length && data.every(([x]) => typeof x === 'number') ? 'value' : 'time';
  const { legend, room } = getLegend(options, names);
  // Labels are drawn before the start of their stream
  const labelRoom = options.labels ? Math.max(0, ...names.map(name => name.length)) * 7 + 10 : 0;

  return finalizeOption(options, {
    ...(legend ? { legend } : {}),
    series: [
      {
        type: 'themeRiver',
        data,
        // Without room for them, names are only shown in the tooltip, even on hover
        emphasis: { label: { show: !!options.labels } },
        label: { show: !!options.labels },
      },
    ],
    singleAxis: {
      bottom: (options.xAxisLabel ? 55 : 30) + (room?.bottom ?? 0),
      left: padding + labelRoom,
      // The last axis label is centered on the end of the axis
      right: padding * 2 + (room?.right ?? 0),
      top: padding,
      type: axisType,
      // Like Victory, a numeric axis spans the data and shows plain numbers (2015, not 2,015)
      ...(axisType === 'value'
        ? { axisLabel: { formatter: (value: number) => String(value) }, max: 'dataMax', min: 'dataMin' }
        : {}),
      ...(options.xAxisLabel ? { name: options.xAxisLabel, nameGap: 30, nameLocation: 'middle' } : {}),
    },
    tooltip: {
      axisPointer: {
        lineStyle: { color: getComputedStyleValue(chart_echarts_global_axis_axis_line_item_style_Color) },
        type: 'line',
      },
      trigger: 'axis',
    },
  });
}
