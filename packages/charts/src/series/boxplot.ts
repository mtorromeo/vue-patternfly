import chart_boxplot_max_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_boxplot_max_stroke_Color';
import chart_boxplot_max_stroke_Width from '@patternfly/react-tokens/dist/esm/chart_boxplot_max_stroke_Width';
import type { BoxplotSeriesOption, LegendComponentOption, SeriesOption } from 'echarts';
import type { ThemeDefinition } from '../themes/Theme';
import { defaultsDeep } from '../utils/merge';
import { getComputedStyleNumber, getComputedStyleValue } from '../utils/styles';

/**
 * Returns series properties for Box plot chart. ECharts draws boxes as outlines on a white fill, and the PatternFly
 * ECharts theme gives them no border: like patternfly-react, boxes are filled with the series color instead, with
 * dark whiskers. ECharts uses one stroke for the box, whiskers and median, so the median is dark too.
 */
export const getBoxPlotSeries = (
  serie: BoxplotSeriesOption,
  theme: ThemeDefinition,
  isSkeleton: boolean,
  index: number,
) => {
  const colors = theme?.color ?? [];
  const borderWidth = getComputedStyleNumber(chart_boxplot_max_stroke_Width) || 1;
  return defaultsDeep(serie, {
    emphasis: isSkeleton ? { disabled: true } : { itemStyle: { borderWidth: borderWidth + 1 } },
    itemStyle: {
      borderColor: getComputedStyleValue(chart_boxplot_max_stroke_Color),
      borderWidth,
      ...(colors.length ? { color: colors[index % colors.length] } : {}),
    },
    type: 'boxplot',
  });
};

/**
 * ECharts colors legend icons of box plots with their stroke: returns the legend with the box plot entries colored
 * with their fill instead
 */
export const getBoxPlotLegend = (legend: LegendComponentOption | LegendComponentOption[], series: SeriesOption[]) => {
  const fills = new Map<string, string>();
  for (const serie of series) {
    const color = serie.type === 'boxplot' ? serie.itemStyle?.color : undefined;
    if (serie.name && typeof color === 'string') {
      fills.set(String(serie.name), color);
    }
  }
  if (!fills.size || !legend || Array.isArray(legend)) {
    return legend;
  }

  const data =
    legend.data ??
    series
      .map(serie => serie.name)
      .filter(name => name !== undefined)
      .map(String);
  return {
    ...legend,
    data: data.map(item => {
      const name = typeof item === 'object' ? item.name : item;
      const color = name === undefined ? undefined : fills.get(String(name));
      if (!color) {
        return item;
      }
      return typeof item === 'object' ? defaultsDeep(item, { itemStyle: { color } }) : { name, itemStyle: { color } };
    }),
  };
};
