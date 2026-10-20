import type { ECElementEvent, EChartsOption, TooltipComponentOption } from 'echarts';
import type { EChartsInitOpts } from 'echarts/core';
import type { ThemeDefinition } from './themes/Theme';
import type { ThemeColorName } from './themes/ThemeColor';

export type { ThemeDefinition } from './themes/Theme';
export type { ThemeColorName } from './themes/ThemeColor';

/**
 * See https://echarts.apache.org/en/option.html#tooltip
 */
export type TooltipOption = TooltipComponentOption & {
  /** The destination label shown in the tooltip -- for Sankey only */
  destinationLabel?: string;
  /** The source label shown in the tooltip -- for Sankey only */
  sourceLabel?: string;
};

/**
 * See https://echarts.apache.org/en/option.html
 */
export type ChartsOption = Omit<EChartsOption, 'tooltip'> & {
  /** Tooltip component -- see https://echarts.apache.org/en/option.html#tooltip */
  tooltip?: TooltipOption | TooltipOption[];
};

/**
 * Payload of the `click` event -- see https://echarts.apache.org/en/api.html#events.Mouse%20events
 */
export type ChartClickEvent = ECElementEvent;

/**
 * Payload of the `legendselectchanged` event -- see https://echarts.apache.org/en/api.html#events.legendselectchanged
 */
export interface ChartLegendSelectChangedEvent {
  type: 'legendselectchanged';
  /** Name of the toggled legend item */
  name: string;
  /** Selection state of every legend item, by name */
  selected: Record<string, boolean>;
}

/**
 * Range of a data zoom: percentages (`start`, `end`) or axis values (`startValue`, `endValue`)
 */
export interface ChartDataZoomRange {
  /** Id of the data zoom component */
  dataZoomId?: string;
  /** Start of the range, as a percentage */
  start?: number;
  /** End of the range, as a percentage */
  end?: number;
  /** Start of the range, as an axis value */
  startValue?: number | string | Date;
  /** End of the range, as an axis value */
  endValue?: number | string | Date;
}

/**
 * Payload of the `datazoom` event -- see https://echarts.apache.org/en/api.html#events.datazoom
 */
export interface ChartDataZoomEvent extends ChartDataZoomRange {
  type: 'datazoom';
  /** The ranges of every data zoom component, when the zoom comes from an inside data zoom */
  batch?: ChartDataZoomRange[];
}

/**
 * Payload of the `brushselected` event -- see https://echarts.apache.org/en/api.html#events.brushselected
 */
export interface ChartBrushSelectedEvent {
  type: 'brushselected';
  /** The selected areas of each brush component, with the indices of the selected data of each series */
  batch: {
    /** The selected areas, in axis values */
    areas: { brushType: string; coordRange?: unknown; range?: unknown }[];
    /** The selected data of each series */
    selected: { seriesIndex: number; seriesName?: string; dataIndex: number[] }[];
  }[];
}

/**
 * Props shared by `PfCharts` and every chart wrapper, forwarded to `PfCharts`
 */
export interface ChartsBaseProps {
  /** Specify height explicitly, in pixels. Without it the chart takes the height of its container. */
  height?: number;
  /** Specify width explicitly, in pixels. Without it the chart takes the width of its container. */
  width?: number;
  /**
   * Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.
   */
  legendTooltip?: boolean;
  /** Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property. */
  svgRenderer?: boolean;
  /** Optional chart configuration -- see https://echarts.apache.org/en/api.html#echarts.init */
  opts?: EChartsInitOpts;
  /**
   * The theme to use for determining styles and layout properties. Any styles defined in the theme may be
   * overwritten by the option. Not compatible with `themeColor`.
   *
   * See https://echarts.apache.org/handbook/en/concepts/style/#theme
   */
  theme?: ThemeDefinition;
  /** Specifies the theme color, e.g. 'blue', 'green', 'multi'. Not compatible with `theme`. */
  themeColor?: ThemeColorName;
}

/**
 * A data point, in the same shape used by patternfly-react's Victory based charts
 */
export interface ChartDatum {
  /** The independent value (category, number or date) */
  x?: string | number | Date;
  /** The dependent value */
  y: number;
  /** Optional name, used in tooltips and legends */
  name?: string;
}

/**
 * A series of a cartesian chart wrapper. Any other property is passed to the ECharts series as is.
 */
export interface ChartSeries {
  /** Series name, shown in the legend and tooltip */
  name?: string;
  /** Data points, either `{ x, y }` objects or plain values */
  data: (ChartDatum | number | null)[];
  [key: string]: unknown;
}

/**
 * A node of hierarchical data (tree, treemap, sunburst): leaves carry a value, parents the sum of their children unless given
 */
export interface ChartHierarchicalDatum {
  /** Name of the node, shown in its label and tooltip */
  name: string;
  /** Value of the node; defaults to the sum of its children */
  value?: number;
  /** Child nodes */
  children?: ChartHierarchicalDatum[];
}

/** Position of the legend relative to the chart, or `none` to hide it */
export type ChartLegendPosition = 'bottom' | 'bottom-left' | 'right' | 'none';

/**
 * Props shared by every chart wrapper
 */
export interface ChartWrapperProps extends ChartsBaseProps {
  /**
   * Position of the legend, `none` hiding it. Defaults to `right`, except for donut and bullet charts, which only
   * show a legend (on the right) when `legendData` is set.
   */
  legendPosition?: ChartLegendPosition;
  /** Orientation of the legend; defaults to vertical for a right aligned legend and horizontal otherwise */
  legendOrientation?: 'horizontal' | 'vertical';
  /** Legend entries; defaults to the series (or data) names */
  legendData?: string[];
  /** Applies decal patterns to the data, in addition to colors -- see https://echarts.apache.org/en/option.html#aria.decal */
  patterns?: boolean;
  /** Shows buttons to save the chart as an image and to restore it -- see https://echarts.apache.org/en/option.html#toolbox */
  toolbox?: boolean;
  /** ECharts option deep merged over the generated option, as an escape hatch for anything the props don't cover */
  option?: ChartsOption;
}

/**
 * A frame of a timeline: the series shown when it is selected
 */
export interface ChartTimelineFrame {
  /** Label of the frame on the timeline */
  name: string;
  /** The series to draw for the frame */
  series: ChartSeries[];
}

/**
 * Props shared by the cartesian chart wrappers (area, bar, line, scatter)
 */
export interface ChartCartesianProps extends ChartWrapperProps {
  /** The series to draw */
  series?: ChartSeries[];
  /** Threshold lines drawn over the series as dashed lines, like patternfly-react's ChartThreshold */
  thresholds?: ChartSeries[];
  /** Swaps the axes, drawing the series horizontally */
  horizontal?: boolean;
  /** Label of the independent (category) axis */
  xAxisLabel?: string;
  /** Label of the dependent (value) axis */
  yAxisLabel?: string;
  /**
   * Lets the user zoom into the independent axis, with a slider and with the mouse wheel while holding Ctrl (or by
   * pinching), so the wheel still scrolls the page -- see https://echarts.apache.org/en/option.html#dataZoom
   */
  zoomable?: boolean;
  /**
   * Draws the series on polar coordinates: the categories around the circle and the values from its center or, when
   * horizontal, the categories as rings and the values around them. Axis labels don't apply.
   */
  polar?: boolean;
  /**
   * Frames of the chart, shown one at a time with a timeline to switch between them; they replace `series`
   * -- see https://echarts.apache.org/en/option.html#timeline
   */
  timeline?: ChartTimelineFrame[];
  /** Plays the timeline, unless the user prefers reduced motion */
  timelineAutoplay?: boolean;
  /**
   * Lets the user select a range of the independent axis (areas, for scatter charts) with buttons next to the
   * toolbox, fading the data outside of it and emitting `brushselected` -- see https://echarts.apache.org/en/option.html#brush
   */
  brush?: boolean;
}
