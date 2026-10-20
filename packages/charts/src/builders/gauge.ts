import chart_donut_label_subtitle_Fill from '@patternfly/react-tokens/dist/esm/chart_donut_label_subtitle_Fill';
import chart_donut_label_title_Fill from '@patternfly/react-tokens/dist/esm/chart_donut_label_title_Fill';
import chart_donut_threshold_first_Color from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_first_Color';
import chart_global_FontSize_2xl from '@patternfly/react-tokens/dist/esm/chart_global_FontSize_2xl';
import chart_global_FontSize_sm from '@patternfly/react-tokens/dist/esm/chart_global_FontSize_sm';
import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import type { ChartsOption, ChartWrapperProps } from '../common';
import { getComputedStyleValue } from '../utils/styles';
import { finalizeOption } from './common';
import { getUtilizationColor, type DonutThreshold } from './pie';

export interface GaugeOptions extends Omit<ChartWrapperProps, 'legendPosition' | 'legendOrientation' | 'legendData'> {
  /** The value shown by the gauge */
  value?: number;
  /** The value at the start of the gauge */
  min?: number;
  /** The value at the end of the gauge */
  max?: number;
  /** Changes the color of the value once it reaches each threshold, in the same unit as the value */
  thresholds?: DonutThreshold[];
  /** Thresholds apply when the value drops below them, instead of above */
  invert?: boolean;
  /** Title shown in the center of the gauge; defaults to the value */
  title?: string;
  /** Subtitle shown below the title */
  subTitle?: string;
  /** Angle where the gauge starts, in degrees (0 is the right, counter-clockwise) */
  startAngle?: number;
  /** Angle where the gauge ends, in degrees */
  endAngle?: number;
  /** Shows the scale: split lines, ticks and labels */
  ticks?: boolean;
  /** Shows a needle pointing at the value */
  pointer?: boolean;
}

const thickness = 12;

/**
 * Returns the ECharts option for a gauge chart
 */
export function getGaugeOption(options: GaugeOptions): ChartsOption {
  const min = options.min ?? 0;
  const max = options.max ?? 100;
  const value = options.value ?? min;
  const color = getUtilizationColor(value, options.thresholds, options.invert);
  const labelColor = getComputedStyleValue(chart_global_label_Fill);
  const startAngle = options.startAngle ?? 225;
  const endAngle = options.endAngle ?? -45;
  // An arc of half a circle or less leaves the bottom half empty: lower the center and grow the radius to fill it
  const halfCircle = Math.abs(startAngle - endAngle) <= 180;

  return finalizeOption(options, {
    series: [
      {
        type: 'gauge',
        anchor: { show: false },
        axisLabel: {
          color: labelColor,
          distance: thickness + 8,
          fontSize: Number(chart_global_FontSize_sm.value),
          show: !!options.ticks,
        },
        axisLine: {
          lineStyle: {
            color: [[1, getComputedStyleValue(chart_donut_threshold_first_Color)]],
            width: thickness,
          },
        },
        axisTick: {
          distance: -thickness,
          length: 4,
          lineStyle: { color: labelColor },
          show: !!options.ticks,
        },
        center: ['50%', halfCircle ? '75%' : '55%'],
        data: [{ name: options.subTitle ?? '', value }],
        detail: {
          color: getComputedStyleValue(chart_donut_label_title_Fill),
          fontSize: Number(chart_global_FontSize_2xl.value),
          fontWeight: 'normal',
          // A function, so titles containing braces aren't read as ECharts templates
          formatter: options.title !== undefined ? () => options.title! : (detail: number) => String(detail),
          offsetCenter: [0, options.pointer ? '45%' : 0],
          valueAnimation: true,
        },
        endAngle,
        max,
        min,
        pointer: { show: !!options.pointer, width: 4 },
        progress: {
          ...(color ? { itemStyle: { color } } : {}),
          show: true,
          width: thickness,
        },
        radius: halfCircle ? '120%' : '90%',
        splitLine: {
          distance: -thickness,
          length: thickness,
          lineStyle: { color: labelColor, width: 1 },
          show: !!options.ticks,
        },
        startAngle,
        title: {
          color: getComputedStyleValue(chart_donut_label_subtitle_Fill),
          fontSize: Number(chart_global_FontSize_sm.value),
          offsetCenter: [0, options.pointer ? '65%' : '25%'],
          show: !!options.subTitle,
        },
      },
    ],
  });
}
