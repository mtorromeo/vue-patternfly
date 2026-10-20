import type { ChartHierarchicalDatum, ChartsOption, ChartWrapperProps } from '../common';
import { finalizeOption, getHierarchicalData } from './common';

export interface TreemapOptions extends Omit<ChartWrapperProps, 'legendPosition' | 'legendOrientation' | 'legendData'> {
  /** The nodes to draw, nested through their `children` */
  data?: ChartHierarchicalDatum[];
  /** Series name, shown in the tooltip and as the root of the breadcrumb, which is empty without it */
  name?: string;
  /** Zooms into a node when it is clicked, showing a breadcrumb to go back */
  drillDown?: boolean;
}

const padding = 10;
const breadcrumbHeight = 22;

/**
 * Returns the ECharts option for a treemap chart
 *
 * @param colors The theme color scale: each top level node gets the next color, which its descendants inherit, so
 * labels can contrast with it
 */
export function getTreemapOption(options: TreemapOptions, colors: string[] = []): ChartsOption {
  return finalizeOption(options, {
    series: [
      {
        type: 'treemap',
        ...(options.name ? { name: options.name } : {}),
        bottom: padding + (options.drillDown ? breadcrumbHeight + padding : 0),
        breadcrumb: options.drillDown ? { bottom: padding, height: breadcrumbHeight, show: true } : { show: false },
        data: getHierarchicalData(options.data, colors),
        left: padding,
        nodeClick: options.drillDown ? 'zoomToNode' : false,
        right: padding,
        // Roaming would capture the page scroll
        roam: false,
        top: padding,
      },
    ],
  });
}
