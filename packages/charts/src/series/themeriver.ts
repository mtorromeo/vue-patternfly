import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import type { ThemeRiverSeriesOption } from 'echarts';
import { defaultsDeep } from '../utils/merge';
import { getComputedStyleValue } from '../utils/styles';

/**
 * Returns series properties for Theme River chart. Hovering a stream fades the others. Labels are drawn before the
 * start of their stream (ECharts aligns them over it), in the PatternFly label color, so they work with the dark theme.
 */
export const getThemeRiverSeries = (serie: ThemeRiverSeriesOption, isSkeleton: boolean) =>
  defaultsDeep(serie, {
    emphasis: isSkeleton ? { disabled: true } : { focus: 'self' },
    label: { align: 'right', color: getComputedStyleValue(chart_global_label_Fill) },
    type: 'themeRiver',
  });
