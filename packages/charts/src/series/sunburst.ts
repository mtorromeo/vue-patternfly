import t_global_background_color_primary_default from '@patternfly/react-tokens/dist/esm/t_global_background_color_primary_default';
import type { SunburstSeriesOption } from 'echarts';
import { defaultsDeep, merge } from '../utils/merge';
import { getComputedStyleValue } from '../utils/styles';

/**
 * Returns series properties for Sunburst chart. ECharts separates nodes with white borders: they show the chart
 * background instead, so they work with the dark theme. Hovering a node highlights its ancestors, the path to it, and
 * labels too narrow to fit their slice are hidden. The skeleton is static, even with drill down.
 */
export const getSunburstSeries = (serie: SunburstSeriesOption, isSkeleton: boolean) => {
  const result = defaultsDeep(serie, {
    emphasis: { focus: 'ancestor' },
    itemStyle: { borderColor: getComputedStyleValue(t_global_background_color_primary_default), borderWidth: 2 },
    label: { minAngle: 10 },
    type: 'sunburst',
  });
  return isSkeleton ? merge(result, { emphasis: { disabled: true }, nodeClick: false }) : result;
};
