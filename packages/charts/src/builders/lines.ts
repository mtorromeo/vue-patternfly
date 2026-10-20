import t_global_background_color_primary_default from '@patternfly/react-tokens/dist/esm/t_global_background_color_primary_default';
import t_global_background_color_secondary_default from '@patternfly/react-tokens/dist/esm/t_global_background_color_secondary_default';
import type { TooltipComponentFormatterCallbackParams } from 'echarts';
import type { ChartsOption, ChartWrapperProps } from '../common';
import { getComputedStyleValue } from '../utils/styles';
import { finalizeOption, getLegend } from './common';

/** A point of the map, as `[longitude, latitude]` (or `[x, y]` for maps that are not geographic) */
export type ChartLinesCoord = [number, number];

export interface ChartLinesDatum {
  /** The points of the line: its start and end, or more for a path */
  coords: ChartLinesCoord[];
  /** Name of the line, shown in the tooltip */
  name?: string;
  /** Value of the line, shown in the tooltip */
  value?: number;
}

export interface ChartLinesSeries {
  /** Series name, shown in the legend and tooltip */
  name?: string;
  /** The lines of the series */
  data: ChartLinesDatum[];
  [key: string]: unknown;
}

export interface LinesOptions extends ChartWrapperProps {
  /** Name of the map drawn under the lines, registered with `echarts.registerMap` or given with its `geoJson` */
  map: string;
  /** The series to draw, each as a group of lines */
  series?: ChartLinesSeries[];
  /** Bends the lines with only a start and an end */
  curved?: boolean;
  /** Draws an arrow at the end of each line with only a start and an end */
  directed?: boolean;
  /** Draws a point at the start and end of each line */
  points?: boolean;
  /** Moves a symbol along the lines, with a trail behind it with the canvas renderer */
  effect?: boolean;
  /** Lets the user zoom and pan the map, capturing the page scroll over it */
  roam?: boolean;
}

const padding = 20;

/** Returns the start and end points of the lines, once each */
function getEnds(data: ChartLinesDatum[]) {
  const ends = new Map<string, ChartLinesCoord>();
  for (const { coords } of data) {
    for (const coord of [coords[0], coords[coords.length - 1]]) {
      if (coord) {
        ends.set(coord.join(','), coord);
      }
    }
  }
  return [...ends.values()];
}

/**
 * Returns the ECharts option for lines drawn on a map, such as routes or flows between places
 *
 * @param colors The theme color scale: the points at the ends of the lines get the color of their series
 */
export function getLinesOption(options: LinesOptions, colors: string[] = []): ChartsOption {
  const series = options.series ?? [];
  const { legend, room } = getLegend(
    options,
    series.map(serie => serie.name),
  );

  return finalizeOption(options, {
    // The map is a neutral, non interactive background for the lines
    geo: {
      bottom: padding + (room?.bottom ?? 0),
      itemStyle: {
        areaColor: getComputedStyleValue(t_global_background_color_secondary_default),
        borderColor: getComputedStyleValue(t_global_background_color_primary_default),
        borderWidth: 1,
      },
      left: padding,
      map: options.map,
      right: padding + (room?.right ?? 0),
      roam: !!options.roam,
      silent: true,
      top: padding,
    },
    ...(legend ? { legend } : {}),
    series: [
      ...series.map(({ data, ...serie }) => {
        // ECharts only bends lines with a start and an end, and draws the others as paths
        const polyline = data.some(datum => datum.coords.length > 2);
        return {
          type: 'lines',
          coordinateSystem: 'geo',
          // The SVG renderer can't draw trails behind the moving symbols
          ...(options.effect
            ? { effect: { show: true, symbolSize: 5, trailLength: options.svgRenderer === false ? 0.2 : 0 } }
            : {}),
          ...(options.curved && !polyline ? { lineStyle: { curveness: 0.2 } } : {}),
          ...(polyline ? { polyline } : {}),
          ...(options.directed ? { symbol: ['none', 'arrow'], symbolSize: 8 } : {}),
          tooltip: {
            formatter: (params: TooltipComponentFormatterCallbackParams) => {
              const { data: datum, seriesName } = [params].flat()[0];
              const { name, value } = datum as ChartLinesDatum;
              const label = name ?? seriesName ?? '';
              return value === undefined ? label : `${label}: <strong>${value}</strong>`;
            },
          },
          ...serie,
          data,
        };
      }),
      // The ends of the lines of each series, in its color: listed after the lines, so series indices still match
      ...(options.points
        ? series.map((serie, index) => ({
            type: 'scatter',
            coordinateSystem: 'geo',
            data: getEnds(serie.data),
            name: serie.name,
            symbolSize: 6,
            ...(colors.length ? { itemStyle: { color: colors[index % colors.length] } } : {}),
            tooltip: { show: false },
          }))
        : []),
    ],
  });
}
