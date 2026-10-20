import chart_donut_label_subtitle_Fill from '@patternfly/react-tokens/dist/esm/chart_donut_label_subtitle_Fill';
import chart_donut_label_title_Fill from '@patternfly/react-tokens/dist/esm/chart_donut_label_title_Fill';
import chart_donut_threshold_danger_Color from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_danger_Color';
import chart_donut_threshold_first_Color from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_first_Color';
import chart_donut_threshold_second_Color from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_second_Color';
import chart_donut_threshold_third_Color from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_third_Color';
import chart_donut_threshold_warning_Color from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_warning_Color';
import chart_global_FontSize_2xl from '@patternfly/react-tokens/dist/esm/chart_global_FontSize_2xl';
import chart_global_FontSize_sm from '@patternfly/react-tokens/dist/esm/chart_global_FontSize_sm';
import type { ChartDatum, ChartsOption, ChartWrapperProps } from '../common';
import { getComputedStyleValue } from '../utils/styles';
import { datumLabel, finalizeOption, getLegend } from './common';

export interface PieOptions extends ChartWrapperProps {
  /** Slices of the pie */
  data?: ChartDatum[];
  /** Angle between slices, in degrees */
  padAngle?: number;
}

export interface DonutTitleOptions {
  /** Title shown in the center of the donut */
  title?: string;
  /** Subtitle shown below the title, or next to the donut */
  subTitle?: string;
  /** Position of the subtitle */
  subTitlePosition?: 'center' | 'bottom' | 'right';
}

export interface DonutOptions extends PieOptions, DonutTitleOptions {}

export interface DonutThreshold {
  /** Value from which the threshold applies */
  value: number;
  /** Color of the utilization once the threshold is reached; defaults to the warning and danger colors */
  color?: string;
}

export interface DonutUtilizationOptions extends Omit<DonutOptions, 'data'> {
  /** Utilization, as a percentage (`y`) and an optional name (`x`) */
  data?: ChartDatum;
  /** Changes the color of the utilization once it reaches each threshold */
  thresholds?: DonutThreshold[];
  /** Thresholds apply when the utilization drops below their value, instead of above it */
  invert?: boolean;
  /** Shows the unused part of the donut */
  static?: boolean;
}

export interface DonutThresholdOptions extends Omit<DonutOptions, 'data'> {
  /** Threshold ranges drawn around the utilization, each `y` being the percentage where the range ends */
  data?: ChartDatum[];
  /** Reverses the order of the threshold colors */
  invert?: boolean;
  /** The utilization drawn inside the thresholds */
  utilization?: ChartDatum;
  /** Changes the color of the utilization once it reaches each threshold */
  thresholds?: DonutThreshold[];
}

type Room = { right?: number; bottom?: number };

const padding = 20;

function getBox(room: Room = {}, subTitlePosition?: string) {
  return {
    bottom: padding + (room.bottom ?? 0) + (subTitlePosition === 'bottom' ? 30 : 0),
    left: padding,
    right: padding + (room.right ?? 0) + (subTitlePosition === 'right' ? 100 : 0),
    top: padding,
  };
}

/**
 * A transparent, non interactive pie in the middle of the donut whose label is the donut title, so the title stays
 * centered in the donut whatever the legend layout
 */
function getTitleSeries(options: DonutTitleOptions, box: ReturnType<typeof getBox>, radius: string) {
  const subTitleInside = (options.subTitlePosition ?? 'center') === 'center';
  const lines = [
    options.title ? `{title|${options.title}}` : '',
    options.subTitle && subTitleInside ? `{subTitle|${options.subTitle}}` : '',
  ].filter(Boolean);
  if (!lines.length) {
    return [];
  }

  return [
    {
      type: 'pie',
      ...box,
      data: [{ itemStyle: { color: 'transparent' }, name: '', value: 1 }],
      emphasis: { disabled: true },
      label: {
        formatter: lines.join('\n'),
        position: 'center',
        rich: {
          subTitle: {
            color: getComputedStyleValue(chart_donut_label_subtitle_Fill),
            fontSize: Number(chart_global_FontSize_sm.value),
            lineHeight: 20,
          },
          title: {
            color: getComputedStyleValue(chart_donut_label_title_Fill),
            fontSize: Number(chart_global_FontSize_2xl.value),
            lineHeight: 32,
          },
        },
        show: true,
      },
      labelLine: { show: false },
      radius: [0, radius],
      silent: true,
      tooltip: { show: false },
      z: 0,
    },
  ];
}

function getSubTitle(options: DonutTitleOptions) {
  if (!options.subTitle || (options.subTitlePosition ?? 'center') === 'center') {
    return {};
  }
  return {
    title: {
      subtext: options.subTitle,
      subtextStyle: { color: getComputedStyleValue(chart_donut_label_subtitle_Fill) },
      ...(options.subTitlePosition === 'bottom'
        ? { bottom: padding, left: 'center' }
        : { right: padding, top: 'middle' }),
    },
  };
}

function pieData(data: ChartDatum[] = []) {
  return data.map((datum, index) => ({ name: datumLabel(datum) ?? `${index + 1}`, value: datum.y }));
}

/**
 * Returns the ECharts option for a pie chart
 */
export function getPieOption(options: PieOptions): ChartsOption {
  const data = pieData(options.data);
  const { legend, room } = getLegend(
    options,
    data.map(datum => datum.name),
  );
  return finalizeOption(options, {
    ...(legend ? { legend } : {}),
    series: [
      {
        type: 'pie',
        ...getBox(room),
        data,
        ...(options.padAngle !== undefined ? { padAngle: options.padAngle } : {}),
        radius: [0, '100%'],
      },
    ],
  });
}

/**
 * Returns the ECharts option for a donut chart
 */
export function getDonutOption(options: DonutOptions): ChartsOption {
  const data = pieData(options.data);
  const { legend, room } = getLegend(
    options,
    data.map(datum => datum.name),
    false,
  );
  const box = getBox(room, options.subTitlePosition);
  return finalizeOption(options, {
    ...(legend ? { legend } : {}),
    ...getSubTitle(options),
    series: [
      {
        type: 'pie',
        ...box,
        data,
        ...(options.padAngle !== undefined ? { padAngle: options.padAngle } : {}),
        radius: ['84%', '100%'],
      },
      ...getTitleSeries(options, box, '84%'),
    ],
  });
}

function getThresholdColors(thresholds: DonutThreshold[], invert: boolean) {
  const colorScale = [
    getComputedStyleValue(chart_donut_threshold_warning_Color),
    getComputedStyleValue(chart_donut_threshold_danger_Color),
  ];
  return [...thresholds]
    .sort((a, b) => (invert ? b.value - a.value : a.value - b.value))
    .map((threshold, index) => ({ ...threshold, color: threshold.color ?? colorScale[index % colorScale.length] }));
}

/**
 * Color of the utilization: the color of the last threshold reached, if any
 */
export function getUtilizationColor(value: number, thresholds: DonutThreshold[] = [], invert = false) {
  let color: string | undefined;
  for (const threshold of getThresholdColors(thresholds, invert)) {
    if (invert ? value <= threshold.value : value >= threshold.value) {
      color = threshold.color;
    }
  }
  return color;
}

function getUtilizationData(options: {
  data?: ChartDatum;
  thresholds?: DonutThreshold[];
  invert?: boolean;
  static?: boolean;
}) {
  const used = options.data?.y ?? 0;
  const color = getUtilizationColor(used, options.thresholds, options.invert);
  return [
    { name: datumLabel(options.data) ?? 'Used', value: used, ...(color ? { itemStyle: { color } } : {}) },
    ...(options.static === false
      ? []
      : [
          {
            emphasis: { disabled: true },
            itemStyle: { color: getComputedStyleValue(chart_donut_threshold_first_Color) },
            name: 'Unused',
            tooltip: { show: false },
            value: Math.max(0, 100 - used),
          },
        ]),
  ];
}

/**
 * Returns the ECharts option for a donut utilization chart
 */
export function getDonutUtilizationOption(options: DonutUtilizationOptions): ChartsOption {
  const data = getUtilizationData(options);
  const { legend, room } = getLegend(
    options,
    data.map(datum => datum.name),
    false,
  );
  const box = getBox(room, options.subTitlePosition);
  return finalizeOption(options, {
    ...(legend ? { legend } : {}),
    ...getSubTitle(options),
    series: [
      {
        type: 'pie',
        ...box,
        data,
        ...(options.padAngle !== undefined ? { padAngle: options.padAngle } : {}),
        radius: ['84%', '100%'],
      },
      ...getTitleSeries(options, box, '84%'),
    ],
  });
}

/**
 * Returns the ECharts option for a donut utilization chart surrounded by static thresholds
 */
export function getDonutThresholdOption(options: DonutThresholdOptions): ChartsOption {
  // Each range ends at its y value, so slices are the differences between consecutive values; the remaining slice
  // completes the donut to 100
  const ranges = [...(options.data ?? [])].sort((a, b) => a.y - b.y);
  const colors = [
    getComputedStyleValue(chart_donut_threshold_first_Color),
    getComputedStyleValue(chart_donut_threshold_second_Color),
    getComputedStyleValue(chart_donut_threshold_third_Color),
  ];
  if (options.invert) {
    colors.reverse();
  }

  let previous = 0;
  const thresholdData = [...ranges, { y: 100 }].map((range: ChartDatum, index) => {
    const label = datumLabel(range);
    const slice = {
      itemStyle: { color: colors[index % colors.length] },
      name: label ?? '',
      value: Math.max(0, range.y - previous),
      ...(label ? {} : { tooltip: { show: false } }),
    };
    previous = range.y;
    return slice;
  });

  const utilizationData = options.utilization
    ? getUtilizationData({
        data: options.utilization,
        invert: options.invert,
        thresholds: options.thresholds,
        static: false,
      })
    : [];

  const { legend, room } = getLegend(
    options,
    [...utilizationData, ...thresholdData].map(datum => datum.name),
    false,
  );
  const box = getBox(room, options.subTitlePosition);
  return finalizeOption(options, {
    ...(legend ? { legend } : {}),
    ...getSubTitle(options),
    series: [
      {
        type: 'pie',
        ...box,
        data: thresholdData,
        padAngle: options.padAngle ?? 1,
        radius: ['92%', '100%'],
      },
      ...(utilizationData.length
        ? [
            {
              type: 'pie',
              ...box,
              // The utilization only covers its share of the circle, like patternfly-react
              data: [
                ...utilizationData,
                {
                  emphasis: { disabled: true },
                  itemStyle: { color: 'transparent' },
                  name: '',
                  tooltip: { show: false },
                  value: Math.max(0, 100 - (options.utilization?.y ?? 0)),
                },
              ],
              radius: ['72%', '86%'],
            },
          ]
        : []),
      ...getTitleSeries(options, box, '72%'),
    ],
  });
}
