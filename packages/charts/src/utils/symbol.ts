import type { SeriesOption } from 'echarts';
import type { ECharts } from 'echarts/core';
import { getComputedStyleValue } from './styles';

import chart_echarts_BackgroundColor from '@patternfly/react-tokens/dist/esm/chart_echarts_BackgroundColor';

// ECharts icon types -- see https://svg-path.com/
const symbols = {
  arrow: 'M12.5 7L19.9667 18.2L12.5 15.4L5.0333 18.2L12.5 7Z',
  circle: 'M18.1 7A5.6 5.6 0 1 1 18.1 6.9994Z',
  diamond: 'M12.5 1.4L18.1 7L12.5 12.6L6.9 7Z',
  emptyArrow: 'M12.5 7L19.9667 18.2L12.5 15.4L5.0333 18.2L12.5 7Z',
  emptyCircle: 'M18.1 7A5.6 5.6 0 1 1 18.1 6.9994Z',
  emptyDiamond: 'M12.5 1.4L18.1 7L12.5 12.6L6.9 7Z',
  emptyPin:
    'M9.4642 2.04A3.36 3.36 0 1 1 15.5358 2.04C14.6718 3.8615 12.5 4.648 12.5 7C12.5 4.648 10.3282 3.8615 9.4642 2.04Z',
  emptyRect: 'M6.9,1.4 l14.2,0 l0,11.2 l-14.2,0 Z',
  emptyRoundRect:
    'M9.7,1.4 L18.3,1.4 A2.8,2.8,0,0,1,21.1,4.2 L21.1,9.8 A2.8,2.8,0,0,1,18.3,12.6 L9.7,12.6 A2.8,2.8,0,0,1,6.9,9.8 L6.9,4.2 A2.8,2.8,0,0,1,9.7,1.4 Z',
  emptySquare: 'M6.9 1.4l11.2 0l0 11.2l-11.2 0Z',
  emptyTriangle: 'M12.5 1.4L18.1 12.5L12.5 12.5L6.9 12.5Z',
  pin: 'M9.4642 2.04A3.36 3.36 0 1 1 15.5358 2.04C14.6718 3.8615 12.5 4.648 12.5 7C12.5 4.648 10.3282 3.8615 9.4642 2.04Z',
  rect: 'M6.9,1.4 l18.2,0 l0,11.2 l-18.2,0 Z',
  roundRect:
    'M9.7,1.4 L22.3,1.4 A2.8,2.8,0,0,1,25.1,4.2 L25.1,9.8 A2.8,2.8,0,0,1,22.3,12.6 L9.7,12.6 A2.8,2.8,0,0,1,6.9,9.8 L6.9,4.2 A2.8,2.8,0,0,1,9.7,1.4 Z',
  square: 'M6.9 1.4l11.2 0l0 11.2l-11.2 0Z',
  triangle: 'M12.5 1.4L18.1 12.5L12.5 12.5L6.9 12.5Z',
};

const isSymbolName = (symbol: string): symbol is keyof typeof symbols => symbol in symbols;

/**
 * Returns marker -- see https://github.com/apache/echarts/issues/19826
 *
 * @param symbol
 * @param color
 * @private Not intended as public API and subject to change
 */
export function getMarker(symbol: string, color = '') {
  const size = 18;
  const svgStyle = 'vertical-align: middle;';

  let transform;

  const path = isSymbolName(symbol) ? symbols[symbol] : symbols.square;
  const pathStyle = symbol.startsWith('empty')
    ? `fill:${getComputedStyleValue(chart_echarts_BackgroundColor)}; stroke:${color}; stroke-width:2`
    : `fill:${color}; margin-left:-50px;`;

  // Set SVG style for EChart symbols
  switch (symbol) {
    case 'arrow':
    case 'emptyArrow':
      transform = 'translate(-5 -5)';
      break;
    case 'pin':
    case 'emptyDiamond':
      transform = 'translate(-5 5)';
      break;
    case 'rect':
    case 'roundRect':
      transform = 'translate(-7 0)';
      break;
    default:
      transform = 'translate(-5 0)';
      break;
  }

  const marker = `<path d="${path}" style="${pathStyle}" transform="${transform}" />`;
  const svg = `<svg viewBox="0 0 ${size} ${size}" height="${size}px" width="${size}px" style="${svgStyle}">${marker}</svg>`;

  return svg;
}

/**
 * Returns default symbol
 *
 * @param series
 * @param seriesIndex
 * @param echart
 * @private Not intended as public API and subject to change
 */
export function getSymbol(series: SeriesOption[], seriesIndex: number, echart: ECharts) {
  const visual = echart.getVisual({ seriesIndex }, 'symbol');
  const symbol = typeof visual === 'string' ? visual.replace(/"/g, '') : undefined;

  if (!symbol) {
    const serie = series[seriesIndex];
    if (serie && 'symbol' in serie && typeof serie.symbol === 'string') {
      return serie.symbol;
    }
    if (serie?.type === 'bar') {
      return 'rect';
    }
    if (serie?.type === 'line') {
      return 'square';
    }
  }
  return symbol;
}
