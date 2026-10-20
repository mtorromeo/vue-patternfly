import { describe, expect, it } from 'vitest';
import { getBoxPlotLegend, getSeries, getTooltipType } from '../src/series';

const theme = { color: ['red', 'green'] };

// The helpers return loosely typed ECharts options: tests read them freely
const seriesOf = getSeries as (...args: any[]) => any;
const boxPlotLegendOf = getBoxPlotLegend as (...args: any[]) => any;

describe('getSeries', () => {
  it('applies line defaults', () => {
    expect(seriesOf({ type: 'line', data: [1] }, theme, false)).toEqual({
      data: [1],
      emphasis: { focus: 'adjacency' },
      showSymbol: false,
      type: 'line',
    });
  });

  it('keeps user values over the defaults', () => {
    expect(seriesOf({ type: 'line', showSymbol: true }, theme, false).showSymbol).toBe(true);
  });

  it('colors sankey nodes from the theme, cycling through it', () => {
    const serie = seriesOf(
      { type: 'sankey', data: [{ name: 'a' }, { name: 'b' }, { name: 'c', itemStyle: { color: 'blue' } }] },
      theme,
      false,
    );
    expect(serie.data.map((node: any) => node.itemStyle.color)).toEqual(['red', 'green', 'blue']);
    expect(serie.lineStyle).toEqual({ color: 'source', opacity: 0.6 });
  });

  it('disables interactions for the skeleton', () => {
    expect(seriesOf({ type: 'line' }, theme, true).emphasis).toEqual({ disabled: true });
    expect(seriesOf({ type: 'sankey', data: [] }, theme, true).draggable).toBe(false);
    expect(seriesOf({ type: 'gauge' }, theme, true).emphasis).toEqual({ disabled: true });
  });

  it('hides pie labels', () => {
    expect(seriesOf({ type: 'pie' }, theme, false).label).toEqual({ show: false });
  });

  it('fills box plots with the series color, with visible whiskers', () => {
    const serie = seriesOf({ type: 'boxplot' }, theme, false, 1);
    expect(serie.itemStyle).toEqual({ borderColor: '#1f1f1f', borderWidth: 1, color: 'green' });
    expect(serie.emphasis.itemStyle.borderWidth).toBe(2);
    expect(seriesOf({ type: 'boxplot', itemStyle: { color: 'blue' } }, theme, false, 1).itemStyle.color).toBe('blue');
  });

  it('colors rising and falling candles with the success and danger colors', () => {
    expect(seriesOf({ type: 'candlestick' }, theme, false).itemStyle).toEqual({
      borderColor: '#0066cc',
      borderColor0: '#b1380b',
      color: '#0066cc',
      color0: '#b1380b',
    });
    expect(seriesOf({ type: 'candlestick', itemStyle: { color: 'blue' } }, theme, false).itemStyle.color).toBe('blue');
  });

  it('keeps the skeleton colors of candlesticks', () => {
    expect(seriesOf({ type: 'candlestick' }, theme, true)).toEqual({
      type: 'candlestick',
      emphasis: { disabled: true },
    });
  });

  it('separates treemap nodes and styles the breadcrumb', () => {
    const serie = seriesOf({ type: 'treemap' }, theme, false);
    expect(serie.itemStyle).toEqual({ borderColor: 'transparent', borderWidth: 2, gapWidth: 2 });
    expect(serie.breadcrumb.itemStyle).toMatchObject({ borderWidth: 1, shadowBlur: 0 });
    expect(serie.nodeClick).toBeUndefined();
    expect(seriesOf({ type: 'treemap', itemStyle: { gapWidth: 0 } }, theme, false).itemStyle.gapWidth).toBe(0);
  });

  it('makes the skeleton treemap static', () => {
    const drillDown = { type: 'treemap', nodeClick: 'zoomToNode', breadcrumb: { show: true } };
    const serie = seriesOf(drillDown, theme, true);
    expect(serie).toMatchObject({ emphasis: { disabled: true }, nodeClick: false, breadcrumb: { show: false } });
  });

  it('separates sunburst nodes and highlights the path to the hovered node', () => {
    const serie = seriesOf({ type: 'sunburst' }, theme, false);
    expect(serie).toMatchObject({
      emphasis: { focus: 'ancestor' },
      itemStyle: { borderWidth: 2 },
      label: { minAngle: 10 },
    });
    expect(serie.itemStyle.borderColor).toBeTruthy();
    expect(serie.nodeClick).toBeUndefined();
    expect(seriesOf({ type: 'sunburst', emphasis: { focus: 'descendant' } }, theme, false).emphasis.focus).toBe(
      'descendant',
    );
  });

  it('makes the skeleton sunburst static', () => {
    const serie = seriesOf({ type: 'sunburst', nodeClick: 'rootToNode' }, theme, true);
    expect(serie).toMatchObject({ emphasis: { disabled: true }, nodeClick: false });
  });

  it('highlights the neighbors of graph nodes, coloring links by their source', () => {
    const serie = seriesOf({ type: 'graph' }, theme, false);
    expect(serie).toMatchObject({ emphasis: { focus: 'adjacency' }, lineStyle: { color: 'source' } });
    expect(seriesOf({ type: 'graph', lineStyle: { color: 'red' } }, theme, false).lineStyle.color).toBe('red');
  });

  it('makes the skeleton graph static', () => {
    const serie = seriesOf({ type: 'graph', draggable: true }, theme, true);
    expect(serie).toMatchObject({ emphasis: { disabled: true }, draggable: false });
  });

  it('draws translucent parallel lines, thicker while hovered', () => {
    const serie = seriesOf({ type: 'parallel' }, theme, false);
    expect(serie).toMatchObject({ lineStyle: { opacity: 0.5 }, emphasis: { lineStyle: { opacity: 1 } } });
    expect(seriesOf({ type: 'parallel' }, theme, true).emphasis).toEqual({ disabled: true });
  });

  it('highlights the path to tree nodes, with themed edges and labels', () => {
    const serie = seriesOf({ type: 'tree' }, theme, false);
    expect(serie.emphasis).toEqual({ focus: 'ancestor' });
    expect(serie.lineStyle.color).toBeTruthy();
    expect(serie.label.color).toBeTruthy();
  });

  it('makes the skeleton tree static', () => {
    const serie = seriesOf({ type: 'tree', expandAndCollapse: true }, theme, true);
    expect(serie).toMatchObject({ emphasis: { disabled: true }, expandAndCollapse: false });
  });

  it('makes the values inside bar mark points contrast with the series color', () => {
    const colors = { color: ['#000000', '#ffffff'] };
    const markPoint = { data: [{ type: 'max' }] };
    expect(seriesOf({ type: 'bar', markPoint }, colors, false, 0).markPoint.label.color).toBe('#ffffff');
    expect(seriesOf({ type: 'bar', markPoint }, colors, false, 1).markPoint.label.color).not.toBe('#ffffff');
    expect(
      seriesOf({ type: 'bar', markPoint, itemStyle: { color: '#ffffff' } }, colors, false, 0).markPoint.label.color,
    ).not.toBe('#ffffff');
    expect(seriesOf({ type: 'bar' }, colors, false).markPoint).toBeUndefined();
  });

  it('applies the bar defaults to pictorial bars', () => {
    expect(seriesOf({ type: 'pictorialBar' }, theme, false)).toEqual({
      type: 'pictorialBar',
      emphasis: { focus: 'series' },
    });
  });

  it('hides the ripples of the skeleton scatter', () => {
    expect(seriesOf({ type: 'effectScatter' }, theme, true)).toEqual({
      type: 'effectScatter',
      emphasis: { disabled: true },
      showEffectOn: 'emphasis',
    });
  });

  it('fades the other streams of a theme river, drawing labels before them', () => {
    const serie = seriesOf({ type: 'themeRiver' }, theme, false);
    expect(serie).toMatchObject({ emphasis: { focus: 'self' }, label: { align: 'right' } });
    expect(seriesOf({ type: 'themeRiver' }, theme, true).emphasis).toEqual({ disabled: true });
  });

  it('draws translucent lines, without trails in the skeleton', () => {
    expect(seriesOf({ type: 'lines' }, theme, false)).toMatchObject({ lineStyle: { opacity: 0.6 } });
    expect(seriesOf({ type: 'lines', effect: { show: true } }, theme, true)).toMatchObject({
      effect: { show: false },
      emphasis: { disabled: true },
    });
  });

  it('colors the chord labels, keeping them static in the skeleton', () => {
    expect(seriesOf({ type: 'chord' }, theme, false).label.color).toBeTruthy();
    expect(seriesOf({ type: 'chord' }, theme, false).emphasis).toBeUndefined();
    expect(seriesOf({ type: 'chord' }, theme, true).emphasis).toEqual({ disabled: true });
  });

  it('leaves series without defaults untouched', () => {
    const serie = { type: 'gauge' };
    expect(seriesOf(serie, theme, false)).toBe(serie);
  });
});

describe('base theme', () => {
  it('unquotes the symbol tokens', async () => {
    const { getTheme } = await import('../src/utils/theme');
    const theme: any = getTheme('blue');
    expect([theme.line.symbol, theme.radar.symbol, theme.graph.symbol]).not.toContain("'square'");
    expect(theme.radar.symbol).toBe('square');
  });
});

describe('getBoxPlotLegend', () => {
  it('colors box plot legend icons with their fill', () => {
    const series = [
      { type: 'boxplot', name: 'Cats', itemStyle: { color: 'red' } },
      { type: 'line', name: 'Dogs' },
    ];
    expect(boxPlotLegendOf({ right: 0 }, series)).toEqual({
      right: 0,
      data: [{ name: 'Cats', itemStyle: { color: 'red' } }, 'Dogs'],
    });
    expect(boxPlotLegendOf({ data: [{ name: 'Cats', icon: 'rect' }] }, series).data).toEqual([
      { name: 'Cats', icon: 'rect', itemStyle: { color: 'red' } },
    ]);
  });

  it('leaves other legends untouched', () => {
    const legend = { data: ['Dogs'] };
    expect(boxPlotLegendOf(legend, [{ type: 'line', name: 'Dogs' }])).toBe(legend);
  });
});

describe('getTooltipType', () => {
  it('maps series types to tooltips', () => {
    expect(getTooltipType('sankey')).toBe('sankey');
    expect(getTooltipType('line')).toBe('legend');
    expect(getTooltipType('bar')).toBe('legend');
    expect(getTooltipType('pictorialBar')).toBe('legend');
    expect(getTooltipType('pie')).toBe('item');
  });
});
