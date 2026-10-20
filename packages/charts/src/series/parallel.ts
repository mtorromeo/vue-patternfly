import type { ParallelSeriesOption } from 'echarts';
import { defaultsDeep } from '../utils/merge';

/**
 * Returns series properties for Parallel chart. Lines are translucent, so overlapping ones stand out, and thicker
 * while hovered. Lines outside the ranges selected by dragging along the axes almost disappear.
 */
export const getParallelSeries = (serie: ParallelSeriesOption, isSkeleton: boolean) =>
  defaultsDeep(serie, {
    emphasis: isSkeleton ? { disabled: true } : { lineStyle: { opacity: 1, width: 3 } },
    inactiveOpacity: 0.05,
    lineStyle: { opacity: 0.5, width: 2 },
    type: 'parallel',
  });
