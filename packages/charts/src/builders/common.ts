import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import type { ChartDatum, ChartHierarchicalDatum, ChartsOption, ChartWrapperProps } from '../common';
import { getLabelColorOver } from '../utils/color';
import { merge } from '../utils/merge';
import { getComputedStyleValue } from '../utils/styles';

/**
 * Legend layout for the given position, along with the room the plot must leave for it.
 *
 * Without a `legendPosition` the legend is on the right, but charts whose title carries the information (donuts,
 * bullets) only show it when `legendData` is given, like patternfly-react.
 *
 * ECharts only shows legend items matching a series (or data) name, so custom `legendData` entries are applied as
 * labels of the named items, in order.
 *
 * @param showByDefault Whether the legend is shown without a `legendPosition` nor `legendData`
 */
export function getLegend(props: ChartWrapperProps, names: (string | undefined)[], showByDefault = true) {
  const position = props.legendPosition ?? (showByDefault || props.legendData ? 'right' : 'none');
  if (position === 'none') {
    return {};
  }

  const named = names.filter((name): name is string => !!name);
  const labels = props.legendData ?? named;
  const data = props.legendData ? named.slice(0, props.legendData.length) : named;
  const formatter = props.legendData ? (name: string) => labels[data.indexOf(name)] ?? name : undefined;

  if (position === 'right') {
    const orient = props.legendOrientation ?? 'vertical';
    // Rough estimate of the legend width, so the plot doesn't overlap it
    const longest = Math.max(0, ...labels.map(label => label.length));
    const legendWidth = orient === 'vertical' ? longest * 7 + 40 : 0;
    return {
      legend: { data, formatter, orient, right: 10, top: 'middle' },
      room: { right: legendWidth + 20 },
    };
  }

  return {
    legend: {
      bottom: 0,
      data,
      formatter,
      itemGap: 20,
      left: position === 'bottom-left' ? 0 : 'center',
      orient: props.legendOrientation ?? 'horizontal',
    },
    room: { bottom: 50 },
  };
}

/**
 * Decal pattern options. Patterns need the ECharts aria component, whose generated label is disabled so it doesn't
 * replace the `aria-label` given to the chart.
 */
export function getAria(props: ChartWrapperProps) {
  return props.patterns ? { aria: { decal: { show: true }, enabled: true, label: { enabled: false } } } : {};
}

const sliderSize = 20;
/** Room the data zoom slider takes along the independent axis */
export const sliderRoom = sliderSize + 25;

/**
 * Data zoom of the independent axis: a slider below the plot (on its right when horizontal), and zooming with the mouse
 * wheel while holding Ctrl or by pinching. Dragging doesn't pan, so neither the wheel nor touches capture the page
 * scroll.
 *
 * @param offset Distance of the slider from the bottom (or right) of the chart, e.g. for the legend
 */
export function getDataZoom(horizontal: boolean, offset: number) {
  const axisIndex = horizontal ? { yAxisIndex: 0 } : { xAxisIndex: 0 };
  return {
    dataZoom: [
      { ...axisIndex, moveOnMouseMove: false, moveOnMouseWheel: false, type: 'inside', zoomOnMouseWheel: 'ctrl' },
      {
        ...axisIndex,
        type: 'slider',
        ...(horizontal ? { right: 10 + offset, width: sliderSize } : { bottom: 10 + offset, height: sliderSize }),
      },
    ],
  };
}

/** Position of the toolbox, at the top right, shared by the features other props add to it (e.g. brush) */
export const toolboxPosition = { right: 10, top: 0 };

/**
 * Toolbox saving the chart as an image (SVG with the SVG renderer) and restoring it. Skeletons have no interactions.
 */
export function getToolbox(props: ChartWrapperProps): ChartsOption {
  return props.toolbox && props.themeColor !== 'skeleton'
    ? { toolbox: { ...toolboxPosition, feature: { restore: {}, saveAsImage: {} } } }
    : {};
}

/**
 * Merges the generated option with the toolbox and pattern options and, last, the user provided option
 */
export function finalizeOption(props: ChartWrapperProps, option: ChartsOption): ChartsOption {
  return merge(option, getToolbox(props), getAria(props), props.option);
}

/** Returns the y value of a datum given either as an object or a plain value */
export function datumY(datum: ChartDatum | number | null | undefined) {
  return datum == null || typeof datum === 'number' ? datum : datum.y;
}

/** Returns the label of a datum: its name, or its x value */
export function datumLabel(datum: ChartDatum | number | null | undefined) {
  if (datum == null || typeof datum === 'number') {
    return undefined;
  }
  return datum.name ?? (datum.x instanceof Date ? datum.x.toISOString() : datum.x?.toString());
}

interface HierarchicalNode {
  name: string;
  value?: number;
  children?: HierarchicalNode[];
  itemStyle?: { color: string };
  label: { color: string };
}

/**
 * Returns the node and its descendants with labels contrasting with `color`, the color they inherit
 */
function getHierarchicalNode({ children, ...datum }: ChartHierarchicalDatum, labelColor: string): HierarchicalNode {
  return {
    ...datum,
    label: { color: labelColor },
    ...(children ? { children: children.map(child => getHierarchicalNode(child, labelColor)) } : {}),
  };
}

/**
 * Returns hierarchical data (treemap, sunburst) where each top level node gets the next color of the theme, which its
 * descendants inherit, with labels contrasting with it
 */
export function getHierarchicalData(data: ChartHierarchicalDatum[] = [], colors: string[] = []): HierarchicalNode[] {
  return data.map((datum, index) => {
    const color = colors.length ? colors[index % colors.length] : undefined;
    return {
      ...getHierarchicalNode(datum, getLabelColorOver(color)),
      ...(color ? { itemStyle: { color } } : {}),
    };
  });
}

/**
 * Continuous visual map mapping values from `min` to `max` to the `colors` scale, shown as the legend unless its
 * position is `none`: without it, values are still mapped to colors
 */
export function getVisualMap(props: ChartWrapperProps, min: number, max: number, colors: string[]) {
  const position = props.legendPosition ?? 'right';
  return {
    calculable: false,
    inRange: { color: colors },
    itemHeight: 140,
    itemWidth: 12,
    max,
    min,
    orient: props.legendOrientation ?? (position === 'right' ? 'vertical' : 'horizontal'),
    show: position !== 'none',
    // Skeletons show no values
    ...(props.themeColor === 'skeleton' ? {} : { text: [String(max), String(min)] }),
    textStyle: { color: getComputedStyleValue(chart_global_label_Fill) },
    type: 'continuous',
    ...(position === 'right'
      ? { right: 10, top: 'middle' }
      : { bottom: 0, left: position === 'bottom-left' ? 0 : 'center' }),
  };
}
