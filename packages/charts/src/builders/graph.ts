import type { ChartsOption, ChartWrapperProps } from '../common';
import { finalizeOption, getLegend } from './common';

export interface ChartGraphNode {
  /** Node name, referenced by the links */
  name: string;
  /** Value of the node, shown in the tooltip */
  value?: number;
  /** Category of the node: categories get the theme colors and are listed in the legend */
  category?: string;
  /** Horizontal position of the node, for the `none` layout */
  x?: number;
  /** Vertical position of the node, for the `none` layout */
  y?: number;
  [key: string]: unknown;
}

export interface ChartGraphLink {
  /** Name of the source node */
  source: string;
  /** Name of the target node */
  target: string;
  /** Value of the link, shown in the tooltip */
  value?: number;
  [key: string]: unknown;
}

export interface GraphOptions extends ChartWrapperProps {
  /** The nodes */
  nodes?: ChartGraphNode[];
  /** The links between nodes */
  links?: ChartGraphLink[];
  /**
   * Placement of the nodes: `force` simulates links pulling nodes together while nodes push each other away, `circular`
   * puts them on a circle and `none` places them at their `x` and `y`
   */
  layout?: 'force' | 'circular' | 'none';
  /** Draws an arrow at the target end of each link */
  directed?: boolean;
  /** Shows the name of each node next to it */
  labels?: boolean;
}

const padding = 20;

/**
 * Returns the ECharts option for a graph chart
 */
export function getGraphOption(options: GraphOptions): ChartsOption {
  const nodes = options.nodes ?? [];
  const categories = [...new Set(nodes.map(node => node.category).filter((name): name is string => !!name))];
  const layout = options.layout ?? 'force';
  // Only categories are listed in the legend: without them there is nothing to show
  const { legend, room } = getLegend(options, categories, categories.length > 0);
  // Circular labels point outwards: the circle leaves room for the longest one (a rough estimate of its width)
  const labelRoom =
    options.labels && layout === 'circular' ? Math.max(0, ...nodes.map(node => node.name.length)) * 7 : 0;
  const box = padding + labelRoom;

  return finalizeOption(options, {
    ...(legend ? { legend } : {}),
    series: [
      {
        type: 'graph',
        bottom: box + (room?.bottom ?? 0),
        categories: categories.map(name => ({ name })),
        data: nodes.map(({ category, ...node }) => ({
          ...node,
          ...(category ? { category: categories.indexOf(category) } : {}),
        })),
        ...(options.directed ? { edgeSymbol: ['none', 'arrow'], edgeSymbolSize: 8 } : {}),
        label: options.labels ? { formatter: '{b}', position: 'right', show: true } : { show: false },
        layout,
        ...(layout === 'force' ? { draggable: true, force: { edgeLength: 80, gravity: 0.1, repulsion: 200 } } : {}),
        ...(layout === 'circular' ? { circular: { rotateLabel: !!options.labels } } : {}),
        left: box,
        links: options.links ?? [],
        right: box + (room?.right ?? 0),
        // Roaming would capture the page scroll
        roam: false,
        symbolSize: 16,
        top: box,
      },
    ],
  });
}
