import type { BarSeriesOption, PictorialBarSeriesOption } from 'echarts';
import type { ThemeDefinition } from '../themes/Theme';
import { getLabelColorOver } from '../utils/color';
import { defaultsDeep } from '../utils/merge';

/**
 * Returns series properties for Bar chart, including pictorial bars. The values inside mark points (pins) contrast
 * with them: the theme label color would otherwise replace the white ECharts picks.
 *
 * @param index The index of the series in the option, giving its color
 */
export const getBarSeries = (
  serie: BarSeriesOption | PictorialBarSeriesOption,
  theme: ThemeDefinition,
  isSkeleton: boolean,
  index = 0,
) => {
  const color =
    typeof serie.itemStyle?.color === 'string' ? serie.itemStyle.color : theme?.color?.[index % theme.color.length];
  return defaultsDeep(serie, {
    emphasis: isSkeleton ? { disabled: true } : { focus: 'series' },
    ...(serie.markPoint ? { markPoint: { label: { color: getLabelColorOver(color) } } } : {}),
    type: 'bar',
  });
};
