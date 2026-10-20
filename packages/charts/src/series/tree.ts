import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import chart_echarts_global_axis_axis_line_item_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_axis_line_item_style_Color';
import type { TreeSeriesOption } from 'echarts';
import { defaultsDeep, merge } from '../utils/merge';
import { getComputedStyleValue } from '../utils/styles';

/**
 * Returns series properties for Tree chart. Edges follow the color of the axes and labels the PatternFly label color, so they work with the dark
 * theme, and hovering a node highlights the path from the root to it. The skeleton is static, even when collapsible.
 */
export const getTreeSeries = (serie: TreeSeriesOption, isSkeleton: boolean) => {
  const result = defaultsDeep(serie, {
    emphasis: { focus: 'ancestor' },
    label: { color: getComputedStyleValue(chart_global_label_Fill) },
    lineStyle: { color: getComputedStyleValue(chart_echarts_global_axis_axis_line_item_style_Color) },
    type: 'tree',
  });
  return isSkeleton ? merge(result, { emphasis: { disabled: true }, expandAndCollapse: false }) : result;
};
