import type { LinesSeriesOption } from 'echarts';
import { defaultsDeep, merge } from '../utils/merge';

/**
 * Returns series properties for Lines chart. Lines are translucent, so overlapping ones stand out, and opaque while
 * hovered. The skeleton is static, without trails.
 */
export const getLinesSeries = (serie: LinesSeriesOption, isSkeleton: boolean) => {
  const result = defaultsDeep(serie, {
    emphasis: { lineStyle: { opacity: 1, width: 3 } },
    lineStyle: { opacity: 0.6, width: 2 },
    type: 'lines',
  });
  return isSkeleton ? merge(result, { effect: { show: false }, emphasis: { disabled: true } }) : result;
};
