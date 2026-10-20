import chart_threshold_stroke_dash_array from '@patternfly/react-tokens/dist/esm/chart_threshold_stroke_dash_array';
import chart_threshold_stroke_Width from '@patternfly/react-tokens/dist/esm/chart_threshold_stroke_Width';
import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import type { ChartCartesianProps, ChartDatum, ChartSeries, ChartsOption } from '../common';
import { parseColor } from '../utils/color';
import { getComputedStyleValue } from '../utils/styles';
import { finalizeOption, getDataZoom, getLegend, sliderRoom, toolboxPosition } from './common';

export type CartesianType = 'area' | 'bar' | 'line' | 'scatter';

export interface CartesianOptions extends ChartCartesianProps {
  /** Stacks the series on top of each other */
  stacked?: boolean;
  /** Width of the bars (bar charts only) */
  barWidth?: number | string;
  /**
   * Draws the bars with this symbol (bar charts only): an ECharts symbol (`circle`, `rect`, `roundRect`, `triangle`,
   * `diamond`, `pin`, `arrow`), `image://` followed by an image URL or `path://` followed by an SVG path. Pictorial
   * bars are not stacked.
   */
  pictorial?: string;
  /** Repeats the pictorial symbol along the bar, cutting the last one at the value, instead of stretching it over the bar */
  pictorialRepeat?: boolean;
  /** Size of the pictorial symbol in pixels, as `[width, height]` or one value for both; defaults to the width of the bar */
  pictorialSize?: number | [number, number];
  /** Draws a point for each data point (area and line charts only) */
  showSymbol?: boolean;
  /** Draws ripples around the points (scatter charts only) */
  effect?: boolean;
  /** Hides axes and grid lines, filling the whole area (sparkline) */
  sparkline?: boolean;
}

type X = string | number | Date;

const isObjectDatum = (datum: unknown): datum is ChartDatum => datum !== null && typeof datum === 'object';

/**
 * Picks the axis type from the x values: numbers and dates get a continuous axis, anything else (including data
 * without x values) is a category
 */
function getAxisType(series: ChartSeries[], xs: X[]) {
  const explicit = series.some(serie => serie.data.some(datum => isObjectDatum(datum) && datum.x !== undefined));
  if (!explicit) {
    return 'category';
  }
  if (xs.length && xs.every(x => typeof x === 'number')) {
    return 'value';
  }
  if (xs.length && xs.every(x => x instanceof Date)) {
    return 'time';
  }
  return 'category';
}

function getXs(series: ChartSeries[]) {
  const xs: X[] = [];
  for (const serie of series) {
    serie.data.forEach((datum, index) => {
      // Like Victory, data without x values is placed at x = 1, 2, 3...
      const x = isObjectDatum(datum) && datum.x !== undefined ? datum.x : index + 1;
      if (!xs.some(other => other === x || (other instanceof Date && x instanceof Date && +other === +x))) {
        xs.push(x);
      }
    });
  }
  return xs;
}

function getData(serie: ChartSeries, axisType: string, categories: X[], horizontal: boolean) {
  const points = serie.data.map((datum, index) => ({
    x: isObjectDatum(datum) && datum.x !== undefined ? datum.x : index + 1,
    y: isObjectDatum(datum) ? datum.y : datum,
    name: isObjectDatum(datum) ? datum.name : undefined,
  }));

  if (axisType === 'category') {
    // Values aligned to the categories, so tooltips show plain values
    return categories.map(category => {
      const point = points.find(p => p.x === category);
      if (!point || point.y == null) {
        return null;
      }
      return point.name ? { name: point.name, value: point.y } : point.y;
    });
  }

  return points.map(({ x, y, name }) => {
    const value = horizontal ? [y, x] : [x, y];
    return name ? { name, value } : value;
  });
}

/**
 * Series options drawing bars with a symbol. Unlike regular bars, ECharts overlaps pictorial bars of different series
 * by default: they are drawn side by side instead.
 */
function getPictorialOption(symbol: string, options: CartesianOptions) {
  return {
    type: 'pictorialBar',
    barGap: '30%',
    symbol,
    ...(options.pictorialRepeat ? { symbolClip: true, symbolMargin: '15%', symbolRepeat: true } : {}),
    ...(options.pictorialSize !== undefined ? { symbolSize: options.pictorialSize } : {}),
  };
}

function getSeriesOption(type: CartesianType, serie: ChartSeries, data: unknown[], options: CartesianOptions) {
  const { data: _data, ...rest } = serie;
  const result: { name?: string; data: unknown[]; [key: string]: unknown } = {
    type: type === 'area' ? 'line' : type,
    ...rest,
    data,
  };
  if (type === 'area') {
    result.areaStyle ??= {};
  }
  if (type === 'bar' && options.barWidth !== undefined) {
    result.barWidth ??= options.barWidth;
  }
  if (type === 'bar' && options.pictorial) {
    Object.assign(result, getPictorialOption(options.pictorial, options), rest);
  }
  if (type === 'scatter' && options.effect) {
    result.type = rest.type ?? 'effectScatter';
  }
  if ((type === 'area' || type === 'line') && options.showSymbol !== undefined) {
    result.showSymbol ??= options.showSymbol;
  }
  // ECharts doesn't stack pictorial bars, which would overlap
  if (options.stacked && result.type !== 'pictorialBar') {
    result.stack ??= 'total';
  }
  return result;
}

const thresholdStyle = () => ({
  emphasis: { disabled: true },
  lineStyle: {
    type: chart_threshold_stroke_dash_array.value.split(/[ ,]+/).map(Number),
    width: Number(chart_threshold_stroke_Width.value),
  },
  showSymbol: false,
  smooth: false,
  type: 'line',
  z: 3,
});

const timelineRoom = 60;

/**
 * Returns the ECharts option for an area, bar, line or scatter chart
 */
export function getCartesianOption(type: CartesianType, options: CartesianOptions): ChartsOption {
  const frames = options.timeline?.length ? options.timeline : undefined;
  const series = frames ? frames[0].series : (options.series ?? []);
  const thresholds = options.thresholds ?? [];
  const horizontal = !!options.horizontal;
  const polar = !!options.polar && !options.sparkline;
  const interactive = !options.sparkline && options.themeColor !== 'skeleton';
  // The axes span the data of every frame, so they stay still when switching frames
  const allSeries = [...(frames ? frames.flatMap(frame => frame.series) : series), ...thresholds];
  const xs = getXs(allSeries);
  const axisType = getAxisType(allSeries, xs);
  const categories = axisType === 'category' ? xs : [];
  const coordinateSystem = polar ? { coordinateSystem: 'polar' } : {};

  const getSeries = (list: ChartSeries[]) => [
    ...list.map(serie => ({
      ...getSeriesOption(type, serie, getData(serie, axisType, categories, horizontal), options),
      ...coordinateSystem,
    })),
    ...thresholds.map(({ data, ...threshold }) => ({
      ...thresholdStyle(),
      ...coordinateSystem,
      ...threshold,
      data: getData({ data }, axisType, categories, horizontal),
    })),
  ];
  const firstSeries = getSeries(series);

  // The legend lists the series of every frame
  const names = [...new Set((frames ? [...allSeries] : [...series, ...thresholds]).map(serie => serie.name))];
  const { legend, room } = getLegend(options, names, !options.sparkline);
  const hasMarkPoint = series.some(serie => serie.markPoint);
  const hasMarkLine = series.some(serie => serie.markLine);

  const independentAxis: Record<string, unknown> = {
    type: axisType,
    ...(axisType === 'category' ? { data: categories.map(String) } : {}),
    // Around a circle, the first and last categories would overlap without a gap
    ...(type !== 'bar' && axisType === 'category' && !polar ? { boundaryGap: false } : {}),
    // Like Victory, a numeric x axis spans the data (rather than starting from 0) and shows plain numbers (2015,
    // not 2,015)
    ...(axisType === 'value' ? { axisLabel: { formatter: (value: number) => String(value) }, scale: true } : {}),
    ...(options.xAxisLabel && !polar ? { name: options.xAxisLabel, nameGap: 30, nameLocation: 'middle' } : {}),
  };
  const dependentAxis: Record<string, unknown> = {
    type: 'value',
    ...(options.yAxisLabel && !polar ? { name: options.yAxisLabel, nameGap: 40, nameLocation: 'middle' } : {}),
  };

  if (options.sparkline) {
    for (const axis of [independentAxis, dependentAxis]) {
      axis.show = false;
    }
  }

  const zoomable = !!options.zoomable && interactive && !polar;
  const timelineBottom = room?.bottom ?? 0;
  const dataZoom = zoomable
    ? getDataZoom(horizontal, horizontal ? (room?.right ?? 0) : timelineBottom + (frames ? timelineRoom : 0))
    : {};

  // Brushing selects ranges of the independent axis, or areas of scatter charts
  const brushable = !!options.brush && interactive && !polar;
  const brushTypes =
    type === 'scatter' ? ['rect', 'polygon', 'keep', 'clear'] : [horizontal ? 'lineY' : 'lineX', 'keep', 'clear'];
  const brushColor = getComputedStyleValue(chart_global_label_Fill);
  const [r, g, b] = parseColor(brushColor) ?? [0, 0, 0];
  const brush = brushable
    ? {
        brush: {
          brushStyle: { borderColor: brushColor, borderWidth: 1, color: `rgba(${r}, ${g}, ${b}, 0.1)` },
          outOfBrush: { colorAlpha: 0.2 },
          toolbox: brushTypes,
          xAxisIndex: 'all',
        },
        toolbox: { ...toolboxPosition, feature: { brush: { type: brushTypes } } },
      }
    : {};

  const layout = polar
    ? {
        polar: {
          // Leave room for the legend, like the radar charts
          center: room?.right ? ['40%', '50%'] : room?.bottom || frames ? ['50%', '45%'] : ['50%', '50%'],
          radius: [0, frames ? '60%' : '70%'],
        },
        angleAxis: horizontal ? dependentAxis : independentAxis,
        radiusAxis: horizontal ? independentAxis : dependentAxis,
      }
    : {
        grid: options.sparkline
          ? { bottom: 0, left: 0, right: 0, top: 0 }
          : {
              bottom:
                ((horizontal ? options.yAxisLabel : options.xAxisLabel) ? 65 : 40) +
                (room?.bottom ?? 0) +
                (zoomable && !horizontal ? sliderRoom : 0) +
                (frames ? timelineRoom : 0),
              left: (horizontal ? options.xAxisLabel : options.yAxisLabel) ? 70 : 50,
              // Mark points (pins) rise above the highest values, mark line labels follow the end of their line
              right:
                20 +
                (room?.right ?? 0) +
                (hasMarkLine && !horizontal ? 40 : 0) +
                (zoomable && horizontal ? sliderRoom : 0),
              top:
                20 + (hasMarkPoint ? 30 : hasMarkLine && horizontal ? 20 : 0) + (brushable || options.toolbox ? 10 : 0),
            },
        xAxis: horizontal ? dependentAxis : independentAxis,
        yAxis: horizontal ? independentAxis : dependentAxis,
      };

  const option = finalizeOption(options, {
    ...layout,
    ...(legend ? { legend } : {}),
    ...dataZoom,
    ...brush,
    series: firstSeries,
    ...(frames
      ? {
          timeline: {
            autoPlay: !!options.timelineAutoplay,
            axisType: 'category',
            bottom: 10 + timelineBottom,
            data: frames.map(frame => frame.name),
            left: 50,
            playInterval: 2000,
            right: 20 + (room?.right ?? 0),
          },
        }
      : {}),
  });

  // ECharts switches between the options of a timeline, each merged over the base option
  return frames ? { baseOption: option, options: frames.map(frame => ({ series: getSeries(frame.series) })) } : option;
}
