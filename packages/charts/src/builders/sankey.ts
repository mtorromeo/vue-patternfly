import type { ChartsOption, ChartWrapperProps } from '../common';
import { finalizeOption } from './common';

export interface ChartSankeyNode {
  /** Node name, referenced by the links */
  name: string;
  [key: string]: unknown;
}

export interface ChartSankeyLink {
  /** Name of the source node */
  source: string;
  /** Name of the target node */
  target: string;
  /** Size of the flow */
  value: number;
  [key: string]: unknown;
}

export interface SankeyOptions extends Omit<ChartWrapperProps, 'legendPosition' | 'legendOrientation' | 'legendData'> {
  /** The nodes */
  nodes?: ChartSankeyNode[];
  /** The flows between nodes */
  links?: ChartSankeyLink[];
  /** Label of the source node in the tooltip */
  sourceLabel?: string;
  /** Label of the destination node in the tooltip */
  destinationLabel?: string;
}

/**
 * Returns the ECharts option for a sankey chart
 */
export function getSankeyOption(options: SankeyOptions): ChartsOption {
  // ECharts legends don't list sankey nodes, whose names are shown as labels instead
  return finalizeOption(options, {
    series: [
      {
        bottom: 20,
        data: options.nodes ?? [],
        left: 20,
        links: options.links ?? [],
        right: 80,
        top: 20,
        type: 'sankey',
      },
    ],
    tooltip: {
      destinationLabel: options.destinationLabel,
      sourceLabel: options.sourceLabel,
    },
  });
}
