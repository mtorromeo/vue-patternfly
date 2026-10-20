import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import type { SeriesOption } from 'echarts';
import { defaultsDeep } from '../utils/merge';
import { getComputedStyleValue } from '../utils/styles';

/**
 * Returns series properties for Chord chart. Labels follow the PatternFly label color, so they work with the dark
 * theme; ribbons take the color of their source, and hovering a node or ribbon highlights its connections, like
 * ECharts does by default.
 */
export const getChordSeries = (serie: SeriesOption, isSkeleton: boolean) =>
  defaultsDeep(serie, {
    ...(isSkeleton ? { emphasis: { disabled: true } } : {}),
    label: { color: getComputedStyleValue(chart_global_label_Fill) },
    type: 'chord',
  });
