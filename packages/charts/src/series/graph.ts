import type { GraphSeriesOption } from 'echarts';
import { defaultsDeep, merge } from '../utils/merge';

/**
 * Returns series properties for Graph chart. Hovering a node highlights its links and neighbors, and links take the
 * color of their source node. The skeleton is static, even when nodes are draggable.
 */
export const getGraphSeries = (serie: GraphSeriesOption, isSkeleton: boolean) => {
  const result = defaultsDeep(serie, {
    emphasis: { focus: 'adjacency' },
    lineStyle: { color: 'source', opacity: 0.6 },
    type: 'graph',
  });
  return isSkeleton ? merge(result, { draggable: false, emphasis: { disabled: true } }) : result;
};
