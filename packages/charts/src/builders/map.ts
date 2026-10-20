import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import t_global_background_color_primary_default from '@patternfly/react-tokens/dist/esm/t_global_background_color_primary_default';
import t_global_background_color_secondary_default from '@patternfly/react-tokens/dist/esm/t_global_background_color_secondary_default';
import type { TooltipComponentFormatterCallbackParams } from 'echarts';
import type { registerMap } from 'echarts/core';
import type { ChartsOption, ChartWrapperProps } from '../common';
import { colorAt, getLabelColorOver } from '../utils/color';
import { getComputedStyleValue } from '../utils/styles';
import { finalizeOption, getVisualMap } from './common';
import { getSequentialColors } from './heatmap';

/** A map for `echarts.registerMap`: GeoJSON, or an SVG -- see https://echarts.apache.org/en/api.html#echarts.registerMap */
export type ChartMapGeoJson = Parameters<typeof registerMap>[1];

export interface ChartMapDatum {
  /** Name of the region, as in the map */
  name: string;
  /** Value of the region, mapped to its color */
  value: number | null;
}

export interface MapOptions extends Omit<ChartWrapperProps, 'legendData'> {
  /** Name of the map, registered with `echarts.registerMap` or given with its `geoJson` */
  map: string;
  /** The regions with a value */
  data?: ChartMapDatum[];
  /** The value mapped to the lightest color; defaults to the lowest value */
  min?: number;
  /** The value mapped to the darkest color; defaults to the highest value */
  max?: number;
  /** Shows the name of each region */
  labels?: boolean;
  /** Lets the user zoom and pan the map, capturing the page scroll over it */
  roam?: boolean;
}

const padding = 20;

/**
 * Returns the ECharts option for a choropleth map
 */
export function getMapOption(options: MapOptions): ChartsOption {
  const data = options.data ?? [];
  const values = data.map(datum => datum.value).filter((value): value is number => value != null);
  const max = options.max ?? (values.length ? Math.max(...values) : 1);
  const min = options.min ?? (values.length ? Math.min(...values) : 0);
  const labelColor = getComputedStyleValue(chart_global_label_Fill);
  const position = options.legendPosition ?? 'right';
  const colors = getSequentialColors(options.themeColor);
  // Labels contrast with their region
  const labelColorOf = (value: number | null) =>
    value == null ? labelColor : getLabelColorOver(colorAt(colors, max > min ? (value - min) / (max - min) : 0));

  return finalizeOption(options, {
    series: [
      {
        type: 'map',
        bottom: padding + (position === 'bottom' || position === 'bottom-left' ? 50 : 0),
        data: data.map(datum => ({
          label: { color: labelColorOf(datum.value) },
          name: datum.name,
          value: datum.value ?? '-',
        })),
        // Hovering a region outlines it, keeping its color
        emphasis: {
          itemStyle: { areaColor: 'inherit', borderColor: labelColor, borderWidth: 1.5 },
          label: { show: true },
        },
        itemStyle: {
          // Regions without a value, unlike the lightest color of the scale
          areaColor: getComputedStyleValue(t_global_background_color_secondary_default),
          borderColor: getComputedStyleValue(t_global_background_color_primary_default),
          borderWidth: 1,
        },
        label: { color: labelColor, show: !!options.labels },
        left: padding,
        map: options.map,
        right: padding + (position === 'right' ? 70 : 0),
        roam: !!options.roam,
        selectedMode: false,
        top: padding,
        tooltip: {
          formatter: (params: TooltipComponentFormatterCallbackParams) => {
            const { name, value } = [params].flat()[0];
            return typeof value === 'number' && !isNaN(value) ? `${name}: <strong>${value}</strong>` : name;
          },
        },
      },
    ],
    // Only the map: other series added through `option` keep their colors
    visualMap: { ...getVisualMap(options, min, max, colors), seriesIndex: 0 },
  });
}
