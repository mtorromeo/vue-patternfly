import type { ChartHierarchicalDatum, ChartsOption, ChartWrapperProps } from '../common';
import { finalizeOption, getHierarchicalData } from './common';

export interface SunburstOptions extends Omit<
  ChartWrapperProps,
  'legendPosition' | 'legendOrientation' | 'legendData'
> {
  /** The nodes to draw from the center outwards, nested through their `children` */
  data?: ChartHierarchicalDatum[];
  /** Series name, shown in the tooltip */
  name?: string;
  /** Makes a node the new center when it is clicked; clicking the center goes back to its parent */
  drillDown?: boolean;
}

/**
 * Returns the ECharts option for a sunburst chart
 *
 * @param colors The theme color scale: each top level node gets the next color, which its descendants inherit, so
 * labels can contrast with it
 */
export function getSunburstOption(options: SunburstOptions, colors: string[] = []): ChartsOption {
  return finalizeOption(options, {
    series: [
      {
        type: 'sunburst',
        ...(options.name ? { name: options.name } : {}),
        data: getHierarchicalData(options.data, colors),
        nodeClick: options.drillDown ? 'rootToNode' : false,
        radius: [0, '95%'],
      },
    ],
  });
}
