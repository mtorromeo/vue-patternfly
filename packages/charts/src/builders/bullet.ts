import chart_bullet_comparative_measure_error_Fill_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_error_Fill_Color';
import chart_bullet_comparative_measure_error_Width from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_error_Width';
import chart_bullet_comparative_measure_Fill_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_Fill_Color';
import chart_bullet_comparative_measure_warning_Fill_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_warning_Fill_Color';
import chart_bullet_comparative_measure_warning_Width from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_warning_Width';
import chart_bullet_comparative_measure_Width from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_Width';
import chart_bullet_label_subtitle_Fill from '@patternfly/react-tokens/dist/esm/chart_bullet_label_subtitle_Fill';
import chart_bullet_label_title_Fill from '@patternfly/react-tokens/dist/esm/chart_bullet_label_title_Fill';
import chart_bullet_negative_measure_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_bullet_negative_measure_ColorScale_100';
import chart_bullet_negative_measure_ColorScale_200 from '@patternfly/react-tokens/dist/esm/chart_bullet_negative_measure_ColorScale_200';
import chart_bullet_negative_measure_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_bullet_negative_measure_ColorScale_300';
import chart_bullet_negative_measure_ColorScale_400 from '@patternfly/react-tokens/dist/esm/chart_bullet_negative_measure_ColorScale_400';
import chart_bullet_negative_measure_ColorScale_500 from '@patternfly/react-tokens/dist/esm/chart_bullet_negative_measure_ColorScale_500';
import chart_bullet_primary_measure_dot_size from '@patternfly/react-tokens/dist/esm/chart_bullet_primary_measure_dot_size';
import chart_bullet_primary_measure_segmented_Width from '@patternfly/react-tokens/dist/esm/chart_bullet_primary_measure_segmented_Width';
import chart_bullet_qualitative_range_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_100';
import chart_bullet_qualitative_range_ColorScale_200 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_200';
import chart_bullet_qualitative_range_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_300';
import chart_bullet_qualitative_range_ColorScale_400 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_400';
import chart_bullet_qualitative_range_ColorScale_500 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_500';
import chart_bullet_qualitative_range_Width from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_Width';
import chart_global_FontSize_lg from '@patternfly/react-tokens/dist/esm/chart_global_FontSize_lg';
import chart_global_FontSize_sm from '@patternfly/react-tokens/dist/esm/chart_global_FontSize_sm';
import type { ChartDatum, ChartsOption, ChartWrapperProps } from '../common';
import { getComputedStyleValue } from '../utils/styles';
import { datumLabel, finalizeOption, getLegend } from './common';

export interface BulletOptions extends ChartWrapperProps {
  /** Comparative measures drawn as markers, e.g. a target */
  comparativeMeasureData?: ChartDatum[];
  /** Comparative error measures, drawn as markers in the danger color */
  comparativeErrorMeasureData?: ChartDatum[];
  /** Comparative warning measures, drawn as markers in the warning color */
  comparativeWarningMeasureData?: ChartDatum[];
  /** Primary measures drawn as dots */
  primaryDotMeasureData?: ChartDatum[];
  /** Primary measures drawn as overlapping bars */
  primarySegmentedMeasureData?: ChartDatum[];
  /** Qualitative ranges drawn as overlapping bars behind the measures */
  qualitativeRangeData?: ChartDatum[];
  /** Draws the bullet horizontally (default) or vertically */
  horizontal?: boolean;
  /** Reverses the direction of the value axis */
  invert?: boolean;
  /** The minimum value of the value axis; defaults to 0, or the lowest negative value */
  minDomain?: number;
  /** The maximum value of the value axis; defaults to the highest value */
  maxDomain?: number;
  /** Title of the bullet */
  title?: string;
  /** Subtitle of the bullet */
  subTitle?: string;
  /** Position of the title */
  titlePosition?: 'left' | 'top-left';
}

const num = (token: { value: string | number }) => Number(token.value);

/**
 * Returns the ECharts option for a bullet chart. ECharts has no bullet chart: it is drawn as overlapping bars for
 * the ranges and segmented measures, and scatter markers for the dot and comparative measures.
 *
 * @param colors The theme color scale, used for the primary measures
 */
export function getBulletOption(options: BulletOptions, colors: string[] = []): ChartsOption {
  const horizontal = options.horizontal ?? true;
  const qualitativeColors = [
    chart_bullet_qualitative_range_ColorScale_100,
    chart_bullet_qualitative_range_ColorScale_200,
    chart_bullet_qualitative_range_ColorScale_300,
    chart_bullet_qualitative_range_ColorScale_400,
    chart_bullet_qualitative_range_ColorScale_500,
  ].map(token => getComputedStyleValue(token));
  const negativeColors = [
    chart_bullet_negative_measure_ColorScale_100,
    chart_bullet_negative_measure_ColorScale_200,
    chart_bullet_negative_measure_ColorScale_300,
    chart_bullet_negative_measure_ColorScale_400,
    chart_bullet_negative_measure_ColorScale_500,
  ].map(token => getComputedStyleValue(token));

  // Bars overlap, so the largest (in absolute value) are drawn first, behind the smaller ones
  const bySize = (data: ChartDatum[] = []) => [...data].sort((a, b) => Math.abs(b.y) - Math.abs(a.y));
  const point = (value: number) => (horizontal ? [value, 0] : [0, value]);

  // Bars of different widths overlapping on the same axis are not centered, so ranges and measures each get their
  // own (hidden) category axis
  const bars = (
    data: ChartDatum[] | undefined,
    width: number,
    colorScale: (datum: ChartDatum, index: number) => string,
    z: number,
  ) =>
    bySize(data).map((datum, index) => ({
      [horizontal ? 'yAxisIndex' : 'xAxisIndex']: z - 1,
      barGap: '-100%',
      barWidth: width,
      data: [datum.y],
      itemStyle: { color: colorScale(datum, index) },
      name: datumLabel(datum),
      type: 'bar',
      z,
    }));

  const markers = (data: ChartDatum[] | undefined, color: string, size: number) =>
    (data ?? []).map(datum => ({
      data: [point(datum.y)],
      itemStyle: { color },
      name: datumLabel(datum),
      symbol: 'rect',
      symbolSize: horizontal ? [3, size] : [size, 3],
      type: 'scatter',
      z: 5,
    }));

  let positive = 0;
  let negative = 0;
  const primaryColor = (datum: ChartDatum) =>
    datum.y < 0 ? negativeColors[negative++ % negativeColors.length] : colors[positive++ % Math.max(colors.length, 1)];

  const series = [
    ...bars(
      options.qualitativeRangeData,
      num(chart_bullet_qualitative_range_Width),
      (_datum, index) => qualitativeColors[index % qualitativeColors.length],
      1,
    ),
    ...bars(options.primarySegmentedMeasureData, num(chart_bullet_primary_measure_segmented_Width), primaryColor, 2),
    ...(options.primaryDotMeasureData ?? []).map((datum, index) => ({
      data: [point(datum.y)],
      itemStyle: { color: colors[index % Math.max(colors.length, 1)] },
      name: datumLabel(datum),
      symbol: 'circle',
      symbolSize: num(chart_bullet_primary_measure_dot_size) * 2,
      type: 'scatter',
      z: 4,
    })),
    ...markers(
      options.comparativeMeasureData,
      getComputedStyleValue(chart_bullet_comparative_measure_Fill_Color),
      num(chart_bullet_comparative_measure_Width),
    ),
    ...markers(
      options.comparativeWarningMeasureData,
      getComputedStyleValue(chart_bullet_comparative_measure_warning_Fill_Color),
      num(chart_bullet_comparative_measure_warning_Width),
    ),
    ...markers(
      options.comparativeErrorMeasureData,
      getComputedStyleValue(chart_bullet_comparative_measure_error_Fill_Color),
      num(chart_bullet_comparative_measure_error_Width),
    ),
    // Ranges, measures and markers overlap and are read together, so hovering them highlights nothing: the default
    // emphasis would fade the other parts and lighten the hovered one (making the light ranges vanish)
  ].map(serie => ({ emphasis: { disabled: true }, ...serie }));

  const values = [
    options.qualitativeRangeData,
    options.primarySegmentedMeasureData,
    options.primaryDotMeasureData,
    options.comparativeMeasureData,
    options.comparativeWarningMeasureData,
    options.comparativeErrorMeasureData,
  ].flatMap(data => (data ?? []).map(datum => datum.y));

  const names = [...new Set(series.map(serie => serie.name))];
  const { legend, room } = getLegend(options, names, false);
  const titleOnLeft = horizontal && (options.titlePosition ?? 'left') === 'left';
  const hasTitle = !!(options.title || options.subTitle);

  const valueAxis = {
    inverse: !!options.invert,
    max: options.maxDomain ?? Math.max(0, ...values),
    min: options.minDomain ?? Math.min(0, ...values),
    splitLine: { show: false },
    type: 'value',
  };
  const categoryAxis = { data: [''], show: false, type: 'category' };

  return finalizeOption(options, {
    grid: {
      bottom: 30 + (room?.bottom ?? 0),
      left: hasTitle && titleOnLeft ? 160 : 20,
      right: 20 + (room?.right ?? 0),
      top: hasTitle && !titleOnLeft ? 60 : 20,
    },
    ...(legend ? { legend } : {}),
    ...(hasTitle
      ? {
          title: {
            left: 10,
            subtext: options.subTitle,
            subtextStyle: {
              color: getComputedStyleValue(chart_bullet_label_subtitle_Fill),
              fontSize: num(chart_global_FontSize_sm),
            },
            text: options.title,
            textStyle: {
              color: getComputedStyleValue(chart_bullet_label_title_Fill),
              fontSize: num(chart_global_FontSize_lg),
            },
            top: titleOnLeft ? 'middle' : 10,
          },
        }
      : {}),
    tooltip: { trigger: 'item' },
    xAxis: horizontal ? valueAxis : [categoryAxis, categoryAxis],
    yAxis: horizontal ? [categoryAxis, categoryAxis] : valueAxis,
    series,
  });
}
