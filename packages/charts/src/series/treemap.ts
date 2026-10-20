import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import t_global_background_color_secondary_default from '@patternfly/react-tokens/dist/esm/t_global_background_color_secondary_default';
import t_global_border_color_default from '@patternfly/react-tokens/dist/esm/t_global_border_color_default';
import type { TreemapSeriesOption } from 'echarts';
import { defaultsDeep, merge } from '../utils/merge';
import { getComputedStyleValue } from '../utils/styles';

/**
 * Returns series properties for Treemap chart. ECharts separates nodes with white borders and draws a black
 * breadcrumb: nodes are separated by gaps showing the chart background instead, and the breadcrumb follows the
 * PatternFly colors, so both work with the dark theme. The skeleton is static, even with drill down.
 */
export const getTreemapSeries = (serie: TreemapSeriesOption, isSkeleton: boolean) => {
  const result = defaultsDeep(serie, {
    breadcrumb: {
      emphasis: { itemStyle: { color: getComputedStyleValue(t_global_border_color_default) } },
      itemStyle: {
        borderColor: getComputedStyleValue(t_global_border_color_default),
        borderWidth: 1,
        color: getComputedStyleValue(t_global_background_color_secondary_default),
        shadowBlur: 0,
        textStyle: { color: getComputedStyleValue(chart_global_label_Fill) },
      },
    },
    itemStyle: { borderColor: 'transparent', borderWidth: 2, gapWidth: 2 },
    type: 'treemap',
  });
  return isSkeleton
    ? merge(result, { breadcrumb: { show: false }, emphasis: { disabled: true }, nodeClick: false })
    : result;
};
