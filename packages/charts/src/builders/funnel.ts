import type { ChartDatum, ChartsOption, ChartWrapperProps } from '../common';
import { getLabelColorOver } from '../utils/color';
import { datumLabel, finalizeOption, getLegend } from './common';

export interface FunnelOptions extends ChartWrapperProps {
  /** The stages: `y` is the value and `x` (or `name`) the label */
  data?: ChartDatum[];
  /** Order of the stages; `none` keeps the order of the data */
  sort?: 'descending' | 'ascending' | 'none';
  /** Draws the funnel top to bottom (default) or left to right */
  orient?: 'vertical' | 'horizontal';
  /** Space between the stages, in pixels */
  gap?: number;
  /** Shows the name and value of each stage inside it */
  labels?: boolean;
}

const padding = 20;

/**
 * Returns the ECharts option for a funnel chart
 *
 * @param colors The theme color scale, giving the color of each stage, so their labels can contrast with it
 */
export function getFunnelOption(options: FunnelOptions, colors: string[] = []): ChartsOption {
  const data = (options.data ?? []).map((datum, index) => ({
    name: datumLabel(datum) ?? `${index + 1}`,
    value: datum.y,
    ...(options.labels ? { label: { color: getLabelColorOver(colors[index % Math.max(colors.length, 1)]) } } : {}),
  }));
  const { legend, room } = getLegend(
    options,
    data.map(datum => datum.name),
  );

  return finalizeOption(options, {
    ...(legend ? { legend } : {}),
    series: [
      {
        type: 'funnel',
        bottom: padding + (room?.bottom ?? 0),
        data,
        gap: options.gap ?? 2,
        label: options.labels ? { formatter: '{b}: {c}', position: 'inside', show: true } : { show: false },
        labelLine: { show: false },
        left: padding,
        orient: options.orient ?? 'vertical',
        right: padding + (room?.right ?? 0),
        sort: options.sort ?? 'descending',
        top: padding,
      },
    ],
  });
}
