import type {
  DefaultLabelFormatterCallbackParams,
  SeriesOption,
  TooltipComponentFormatterCallbackParams,
} from 'echarts';
import type { ECharts } from 'echarts/core';
import type { ChartsOption, TooltipOption } from '../common';
import { defaultsDeep } from './merge';
import { getMarker, getSymbol } from './symbol';

type ValueFormatter = NonNullable<TooltipOption['valueFormatter']>;
type FormatterValue = Parameters<ValueFormatter>[0];

/** Parameters of an axis tooltip item */
interface AxisFormatterParams extends DefaultLabelFormatterCallbackParams {
  axisDim?: string;
  axisValueLabel?: string;
}

const defaultValueFormatter: ValueFormatter = value => String(value);

/** The tooltip of the option, unless given one per component */
const getTooltipOption = (option: ChartsOption) => (Array.isArray(option?.tooltip) ? undefined : option?.tooltip);

/**
 * Returns the value of an axis tooltip item. Data on continuous axes is given as [x, y] pairs (or [y, x] when
 * horizontal): the value is the one not on the axis the tooltip is triggered by.
 *
 * @private Not intended as public API and subject to change
 */
function getAxisValue(param: AxisFormatterParams) {
  if (!Array.isArray(param.value)) {
    return param.value as FormatterValue;
  }
  const dimension = param.axisDim === 'y' ? (param.encode?.x?.[0] ?? 0) : (param.encode?.y?.[0] ?? 1);
  return param.value[dimension] as FormatterValue;
}

/**
 * Returns a custom legend tooltip for Line charts
 *
 * @param series
 * @param option
 * @param echart
 * @private Not intended as public API and subject to change
 */
export function getLegendTooltip(series: SeriesOption[], option: ChartsOption, echart: ECharts) {
  const tooltip = getTooltipOption(option);
  const valueFormatter = tooltip?.valueFormatter ?? defaultValueFormatter;

  const defaults = {
    confine: true,
    formatter: (params: TooltipComponentFormatterCallbackParams) => {
      let result = '';
      [params].flat().forEach((param: AxisFormatterParams, index) => {
        if (index === 0) {
          result += `<p style="text-align:left; padding-bottom: 5px;">${param.name || param.axisValueLabel || ''}</p>`;
        }
        const symbol = param.seriesIndex === undefined ? undefined : getSymbol(series, param.seriesIndex, echart);
        const marker = getMarker(symbol ?? 'square', typeof param.color === 'string' ? param.color : undefined);
        const formattedValue = valueFormatter(getAxisValue(param), param.dataIndex);
        const seriesName = `<span style="margin-left: 10px;">${param.seriesName}</span>`;
        const value = `<strong style="float:right; margin-left: 20px;">${formattedValue}</strong>`;

        result += `<p style="text-align:left;">${marker}${seriesName}${value}</p>`;
      });
      return result;
    },
    trigger: 'axis',
  };
  return defaultsDeep(tooltip, defaults);
}

interface SankeyLinkData {
  source: string;
  target: string;
}

const isSankeyLink = (data: unknown): data is SankeyLinkData =>
  typeof data === 'object' && data !== null && 'source' in data && 'target' in data && !!data.source && !!data.target;

/**
 * Returns source and target colors from given series
 *
 * @param series
 * @param seriesIndex
 * @param link
 * @private Not intended as public API and subject to change
 */
function getItemColor(series: SeriesOption[], seriesIndex: number | undefined, link: SankeyLinkData) {
  const serie = seriesIndex === undefined ? undefined : series[seriesIndex];
  const nodes = serie?.type === 'sankey' ? (serie.data ?? []) : [];
  const sourceColor = nodes.find(node => node.name === link.source)?.itemStyle?.color;
  const targetColor = nodes.find(node => node.name === link.target)?.itemStyle?.color;
  return { sourceColor, targetColor };
}

/**
 * Returns a custom legend tooltip for Sankey chart
 *
 * @param series
 * @param option
 * @private Not intended as public API and subject to change
 */
export function getSankeyTooltip(series: SeriesOption[], option: ChartsOption) {
  const symbolSize = '10px';
  const tooltip = getTooltipOption(option);
  const sourceLabel = tooltip?.sourceLabel ?? '';
  const destinationLabel = tooltip?.destinationLabel ?? '';
  const valueFormatter = tooltip?.valueFormatter ?? defaultValueFormatter;

  const defaults = {
    confine: true,
    formatter: (formatterParams: TooltipComponentFormatterCallbackParams) => {
      // Sankey tooltips are triggered by item, so they get the parameters of a single item
      const params = [formatterParams].flat()[0];
      const value = params.value as FormatterValue;
      let result;
      if (isSankeyLink(params.data)) {
        const { sourceColor, targetColor } = getItemColor(series, params.seriesIndex, params.data);
        result = `
            <p>${sourceLabel}</p>
            <div style="display: inline-block; background-color: ${sourceColor}; height: ${symbolSize}; width: ${symbolSize};"></div>
            ${params.data.source}
            <p style="padding-top: 10px;">${destinationLabel}</p>
            <p style="text-align:left;">
              <div style="display: inline-block; background-color: ${targetColor}; height: ${symbolSize}; width: ${symbolSize};"></div>
              ${params.data.target}
              <strong style="float:right;">
                ${valueFormatter(value, params.dataIndex)}
              </strong>
            </p>
          `;
      } else {
        result = `
          <div style="display: inline-block; background-color: ${params.color}; height: ${symbolSize}; width: ${symbolSize};"></div>
          ${params.name} ${valueFormatter(value, params.dataIndex)}
        `;
      }
      return result.replace(/\s\s+/g, ' ');
    },
    trigger: 'item',
    triggerOn: 'mousemove',
  };
  return defaultsDeep(tooltip, defaults);
}
