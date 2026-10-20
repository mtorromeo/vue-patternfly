import type { LineSeriesOption } from 'echarts';
import type { ThemeDefinition } from '../themes/Theme';
import { defaultsDeep } from '../utils/merge';

/**
 * Returns series properties for Line chart
 */
export const getLineSeries = (serie: LineSeriesOption, _theme: ThemeDefinition, isSkeleton: boolean) =>
  defaultsDeep(serie, {
    emphasis: isSkeleton ? { disabled: true } : { focus: 'adjacency' },
    showSymbol: false,
    type: 'line',
  });
