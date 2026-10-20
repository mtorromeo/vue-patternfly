import type { ChartHierarchicalDatum, ChartsOption, ChartWrapperProps } from '../common';
import { finalizeOption } from './common';

export interface TreeOptions extends Omit<ChartWrapperProps, 'legendPosition' | 'legendOrientation' | 'legendData'> {
  /** The tree, nested through `children`: several top level nodes are joined under a root named after `name` */
  data?: ChartHierarchicalDatum[];
  /** Series name, shown in the tooltip, and name of the root joining several top level nodes */
  name?: string;
  /** Direction from the root to the leaves: left to right, right to left, top to bottom or bottom to top */
  orient?: 'LR' | 'RL' | 'TB' | 'BT';
  /** Puts the root at the center, with its descendants around it; `orient` doesn't apply */
  radial?: boolean;
  /** Expands or collapses a node when it is clicked; collapsed nodes are filled */
  collapsible?: boolean;
  /** Number of levels expanded at first when `collapsible`; all of them by default */
  depth?: number;
}

const padding = 20;
// Rough estimate of the width of a label
const labelWidth = (name: string) => name.length * 7 + 10;

function leafNames(datum: ChartHierarchicalDatum): string[] {
  return datum.children?.length ? datum.children.flatMap(leafNames) : [datum.name];
}

/** Label layouts of the nodes and of the leaves for each orientation: the root is at the start, the leaves at the end */
const labelLayouts = {
  LR: { node: { align: 'right', position: 'left' }, leaf: { align: 'left', position: 'right' } },
  RL: { node: { align: 'left', position: 'right' }, leaf: { align: 'right', position: 'left' } },
  TB: {
    node: { align: 'right', position: 'left', rotate: -90 },
    leaf: { align: 'left', position: 'right', rotate: -90 },
  },
  BT: {
    node: { align: 'left', position: 'right', rotate: -90 },
    leaf: { align: 'right', position: 'left', rotate: -90 },
  },
} as const;

/**
 * Returns the ECharts option for a tree chart
 *
 * @param colors The theme color scale: nodes get its first color
 */
export function getTreeOption(options: TreeOptions, colors: string[] = []): ChartsOption {
  const data = options.data ?? [];
  const root = data.length > 1 ? { name: options.name ?? '', children: data } : data[0];
  const orient = options.orient ?? 'LR';

  // Labels of the root and of the leaves are drawn outside the tree: leave room for them
  const rootRoom = root ? labelWidth(root.name) : 0;
  const leafRoom = root ? Math.max(...leafNames(root).map(labelWidth)) : 0;
  const box = options.radial
    ? { bottom: leafRoom, left: leafRoom, right: leafRoom, top: leafRoom }
    : {
        bottom: orient === 'TB' ? leafRoom : orient === 'BT' ? rootRoom : 0,
        left: orient === 'LR' ? rootRoom : orient === 'RL' ? leafRoom : 0,
        right: orient === 'LR' ? leafRoom : orient === 'RL' ? rootRoom : 0,
        top: orient === 'TB' ? rootRoom : orient === 'BT' ? leafRoom : 0,
      };
  const labelLayout = options.radial ? undefined : labelLayouts[orient];

  return finalizeOption(options, {
    series: [
      {
        type: 'tree',
        ...(options.name ? { name: options.name } : {}),
        bottom: padding + box.bottom,
        data: root ? [root] : [],
        expandAndCollapse: !!options.collapsible,
        initialTreeDepth: options.collapsible ? (options.depth ?? -1) : -1,
        ...(colors.length ? { itemStyle: { color: colors[0] } } : {}),
        ...(labelLayout
          ? { label: { ...labelLayout.node, verticalAlign: 'middle' }, leaves: { label: labelLayout.leaf } }
          : {}),
        layout: options.radial ? 'radial' : 'orthogonal',
        left: padding + box.left,
        ...(options.radial ? {} : { orient }),
        right: padding + box.right,
        // Roaming would capture the page scroll
        roam: false,
        // ECharts fills expanded nodes with white, which only stands out from the background when they can collapse
        symbol: options.collapsible ? 'emptyCircle' : 'circle',
        top: padding + box.top,
      },
    ],
  });
}
