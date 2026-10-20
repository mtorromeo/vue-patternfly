import type { SankeySeriesOption } from 'echarts';
import type { ThemeDefinition } from '../themes/Theme';
import { defaultsDeep } from '../utils/merge';

/**
 * Returns series properties for Sankey chart
 */
export const getSankeySeries = (serie: SankeySeriesOption, theme: ThemeDefinition, isSkeleton: boolean) =>
  defaultsDeep(serie, {
    // Node colors are merged index by index into the given data
    data: (serie.data ?? []).map((_datum, index) => ({
      itemStyle: {
        color: theme?.color?.[index % theme.color.length],
      },
    })),
    ...(isSkeleton ? { draggable: false } : {}),
    emphasis: isSkeleton ? { disabled: true } : { focus: 'adjacency' },
    layout: 'none',
    lineStyle: {
      color: 'source',
      opacity: 0.6,
    },
    type: 'sankey',
  });
