import type { TooltipComponentFormatterCallbackParams } from 'echarts';
import type { ChartsOption, ChartWrapperProps } from '../common';
import { finalizeOption, getLegend } from './common';

export interface ChartChordNode {
  /** Node name, referenced by the links */
  name: string;
  /** Size of the node on the circle; defaults to the sum of its links */
  value?: number;
  [key: string]: unknown;
}

export interface ChartChordLink {
  /** Name of the source node */
  source: string;
  /** Name of the target node */
  target: string;
  /** Size of the flow */
  value: number;
  [key: string]: unknown;
}

export interface ChordOptions extends ChartWrapperProps {
  /** The nodes, drawn as arcs of a circle */
  nodes?: ChartChordNode[];
  /** The flows between nodes, drawn as ribbons across the circle */
  links?: ChartChordLink[];
  /** Shows the name of each node outside the circle */
  labels?: boolean;
}

const padding = 20;
// Room for the labels outside the circle, as a share of its radius
const labelRadius = ['70%', '80%'];

/**
 * Returns the ECharts option for a chord chart
 */
export function getChordOption(options: ChordOptions): ChartsOption {
  const nodes = options.nodes ?? [];
  const { legend, room } = getLegend(
    options,
    nodes.map(node => node.name),
  );

  return finalizeOption(options, {
    ...(legend ? { legend } : {}),
    series: [
      {
        type: 'chord',
        bottom: padding + (room?.bottom ?? 0),
        data: nodes,
        label: { show: !!options.labels },
        left: padding,
        links: options.links ?? [],
        radius: options.labels ? labelRadius : ['90%', '100%'],
        right: padding + (room?.right ?? 0),
        top: padding,
        tooltip: {
          formatter: (params: TooltipComponentFormatterCallbackParams) => {
            const { data, dataType, name, value } = [params].flat()[0];
            if (dataType === 'edge') {
              const link = data as ChartChordLink;
              return `${link.source} → ${link.target}: <strong>${link.value}</strong>`;
            }
            return `${name}: <strong>${value}</strong>`;
          },
        },
      },
    ],
  });
}
