import type { PieSeriesOption } from 'echarts';
import type { ThemeDefinition } from '../themes/Theme';
import { defaultsDeep } from '../utils/merge';

/**
 * Returns series properties for Pie and Donut charts. Like patternfly-react, slices have no labels: their
 * values are shown in the tooltip and legend.
 */
export const getPieSeries = (serie: PieSeriesOption, _theme: ThemeDefinition, isSkeleton: boolean) =>
  defaultsDeep(serie, {
    emphasis: isSkeleton ? { disabled: true } : { scale: false },
    label: { show: false },
    labelLine: { show: false },
    type: 'pie',
  });
