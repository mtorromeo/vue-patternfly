import { describe, expect, it } from 'vitest';
import {
  getBoxPlotOption,
  getBoxPlotValues,
  getCandlestickOption,
  getChordOption,
  getBulletOption,
  getCalendarOption,
  getCartesianOption,
  getDonutOption,
  getDonutThresholdOption,
  getDonutUtilizationOption,
  getFunnelOption,
  getGaugeOption,
  getGraphOption,
  getHeatmapOption,
  getLinesOption,
  getMapOption,
  getParallelOption,
  getSequentialColors,
  getLegend,
  getPieOption,
  getRadarOption,
  getSankeyOption,
  getSunburstOption,
  getThemeRiverOption,
  getTreeOption,
  getTreemapOption,
  getUtilizationColor,
} from '../src/builders';

const cats = {
  name: 'Cats',
  data: [
    { x: '2015', y: 1 },
    { x: '2016', y: 2 },
  ],
};
const dogs = {
  name: 'Dogs',
  data: [
    { x: '2016', y: 3 },
    { x: '2017', y: 4 },
  ],
};

describe('getLegend', () => {
  it('shows the legend on the right by default', () => {
    expect(getLegend({}, ['a']).legend).toMatchObject({ data: ['a'], right: 10, top: 'middle' });
  });

  it('hides the legend with the none position', () => {
    expect(getLegend({ legendPosition: 'none' }, ['a'])).toEqual({});
    expect(getLegend({ legendPosition: 'none', legendData: ['A'] }, ['a'], false)).toEqual({});
  });

  it('shows the legend of charts hiding it by default only with a position or legend data', () => {
    expect(getLegend({}, ['a'], false)).toEqual({});
    expect(getLegend({ legendData: ['A'] }, ['a'], false).legend).toMatchObject({ data: ['a'], right: 10 });
    expect(getLegend({ legendPosition: 'bottom' }, ['a'], false).legend).toMatchObject({ bottom: 0 });
  });

  it('places a vertical legend on the right, leaving room for it', () => {
    const { legend, room } = getLegend({ legendPosition: 'right' }, ['Cats', undefined, 'Dogs']);
    expect(legend).toMatchObject({ data: ['Cats', 'Dogs'], orient: 'vertical', right: 10, top: 'middle' });
    expect(room!.right).toBeGreaterThan(0);
  });

  it('places a horizontal legend at the bottom', () => {
    expect(getLegend({ legendPosition: 'bottom' }, ['a']).legend).toMatchObject({
      bottom: 0,
      left: 'center',
      orient: 'horizontal',
    });
    expect(getLegend({ legendPosition: 'bottom-left' }, ['a']).legend).toMatchObject({ left: 0 });
  });

  it('applies custom legend data as labels of the named items', () => {
    const { legend } = getLegend({ legendPosition: 'bottom', legendData: ['Used: 45%', 'Free'] }, ['Used', 'Unused']);
    expect(legend!.data).toEqual(['Used', 'Unused']);
    expect(legend!.formatter!('Unused')).toBe('Free');
  });
});

describe('getCartesianOption', () => {
  it('aligns category data across series', () => {
    const option: any = getCartesianOption('bar', { series: [cats, dogs] });
    expect(option.xAxis).toMatchObject({ type: 'category', data: ['2015', '2016', '2017'] });
    expect(option.yAxis).toMatchObject({ type: 'value' });
    expect(option.series.map((serie: any) => serie.data)).toEqual([
      [1, 2, null],
      [null, 3, 4],
    ]);
    expect(option.series[0]).toMatchObject({ name: 'Cats', type: 'bar' });
  });

  it('draws pictorial bars side by side, never stacked', () => {
    const option: any = getCartesianOption('bar', { series: [cats, dogs], pictorial: 'triangle', stacked: true });
    expect(option.series[0]).toMatchObject({ type: 'pictorialBar', symbol: 'triangle', barGap: '30%' });
    expect(option.series[0].stack).toBeUndefined();
    expect(option.series[0].symbolRepeat).toBeUndefined();
    expect(option.series[1].data).toEqual([null, 3, 4]);
  });

  it('repeats the pictorial symbol, cutting the last one at the value', () => {
    const option: any = getCartesianOption('bar', {
      series: [{ ...cats, symbol: 'circle' }],
      pictorial: 'path://M0 0h1v1z',
      pictorialRepeat: true,
      pictorialSize: [10, 12],
    });
    // Series options win over the pictorial ones
    expect(option.series[0]).toMatchObject({
      type: 'pictorialBar',
      symbol: 'circle',
      symbolClip: true,
      symbolRepeat: true,
      symbolSize: [10, 12],
    });
  });

  it('ignores the pictorial symbol outside bar charts', () => {
    const option: any = getCartesianOption('line', { series: [cats], pictorial: 'circle' });
    expect(option.series[0].type).toBe('line');
  });

  it('draws ripples around scatter points with effect', () => {
    const option: any = getCartesianOption('scatter', { series: [cats, { ...dogs, type: 'scatter' }], effect: true });
    expect(option.series.map((serie: any) => serie.type)).toEqual(['effectScatter', 'scatter']);
    expect((getCartesianOption('scatter', { series: [cats] }) as any).series[0].type).toBe('scatter');
    expect((getCartesianOption('line', { series: [cats], effect: true }) as any).series[0].type).toBe('line');
  });

  it('leaves room for the mark points above the bars and the mark line labels after the lines', () => {
    const plain: any = getCartesianOption('bar', { series: [cats], legendPosition: 'none' });
    const marked: any = getCartesianOption('bar', {
      series: [{ ...cats, markPoint: { data: [{ type: 'max' }] }, markLine: { data: [{ type: 'average' }] } }],
      legendPosition: 'none',
    });
    expect(marked.grid.top).toBeGreaterThan(plain.grid.top);
    expect(marked.grid.right).toBeGreaterThan(plain.grid.right);
    expect(marked.series[0].markPoint).toEqual({ data: [{ type: 'max' }] });

    // Horizontal mark lines are vertical, with their label above
    const horizontal: any = getCartesianOption('bar', {
      series: [{ ...cats, markLine: { data: [{ type: 'average' }] } }],
      horizontal: true,
      legendPosition: 'none',
    });
    expect(horizontal.grid.top).toBeGreaterThan(plain.grid.top);
    expect(horizontal.grid.right).toBe(plain.grid.right);
  });

  it('places plain values at x = 1, 2, 3...', () => {
    const option: any = getCartesianOption('line', { series: [{ data: [5, 6] }] });
    expect(option.xAxis.data).toEqual(['1', '2']);
    expect(option.series[0].data).toEqual([5, 6]);
  });

  it('uses a continuous axis with [x, y] pairs for numeric x values', () => {
    const option: any = getCartesianOption('scatter', {
      series: [
        {
          data: [
            { x: 1, y: 2 },
            { x: 3, y: 4 },
          ],
        },
      ],
    });
    expect(option.xAxis.type).toBe('value');
    expect(option.series[0].data).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it('spans the numeric x values without separators, like Victory', () => {
    const option: any = getCartesianOption('scatter', {
      series: [
        {
          data: [
            { x: 2015, y: 1 },
            { x: 2019, y: 4 },
          ],
        },
      ],
    });
    expect(option.xAxis.scale).toBe(true);
    expect(option.xAxis.axisLabel.formatter(2015)).toBe('2015');
    expect((getCartesianOption('bar', { series: [cats] }) as any).xAxis.scale).toBeUndefined();
  });

  it('swaps the axes when horizontal', () => {
    const option: any = getCartesianOption('bar', { horizontal: true, series: [cats] });
    expect(option.xAxis.type).toBe('value');
    expect(option.yAxis.type).toBe('category');
  });

  it('draws areas as filled lines and stacks them', () => {
    const option: any = getCartesianOption('area', { series: [cats, dogs], stacked: true });
    expect(option.series[0]).toMatchObject({ type: 'line', areaStyle: {}, stack: 'total' });
  });

  it('draws thresholds as dashed lines', () => {
    const option: any = getCartesianOption('area', {
      series: [cats],
      thresholds: [
        {
          name: 'Limit',
          data: [
            { x: '2015', y: 3 },
            { x: '2016', y: 3 },
          ],
        },
      ],
    });
    expect(option.series[1]).toMatchObject({ name: 'Limit', type: 'line', showSymbol: false, data: [3, 3] });
    expect(option.series[1].lineStyle.type).toEqual([4, 2]);
  });

  it('labels the axes', () => {
    const option: any = getCartesianOption('line', { series: [cats], xAxisLabel: 'Year', yAxisLabel: 'Pets' });
    expect(option.xAxis).toMatchObject({ name: 'Year', nameLocation: 'middle' });
    expect(option.yAxis).toMatchObject({ name: 'Pets', nameLocation: 'middle' });
  });

  it('hides axes, padding and legend for sparklines', () => {
    const option: any = getCartesianOption('area', { series: [cats], sparkline: true });
    expect(option.legend).toBeUndefined();
    expect(option.grid).toEqual({ bottom: 0, left: 0, right: 0, top: 0 });
    expect(option.xAxis.show).toBe(false);
    expect(option.yAxis.show).toBe(false);
  });

  it('adds patterns, keeping the given aria-label', () => {
    expect((getCartesianOption('bar', { series: [cats] }) as any).aria).toBeUndefined();
    const option: any = getCartesianOption('bar', { series: [cats], patterns: true });
    expect(option.aria).toEqual({ enabled: true, label: { enabled: false }, decal: { show: true } });
  });

  it('merges the user option last', () => {
    const option: any = getCartesianOption('bar', {
      series: [cats],
      option: { yAxis: { max: 10 }, grid: { left: 0 } },
    });
    expect(option.yAxis).toMatchObject({ type: 'value', max: 10 });
    expect(option.grid.left).toBe(0);
  });
});

describe('getPieOption', () => {
  it('draws the data as slices', () => {
    const option: any = getPieOption({
      data: [
        { x: 'Cats', y: 35 },
        { x: 'Dogs', y: 55 },
      ],
      legendPosition: 'right',
    });
    expect(option.series[0]).toMatchObject({
      type: 'pie',
      radius: [0, '100%'],
      data: [
        { name: 'Cats', value: 35 },
        { name: 'Dogs', value: 55 },
      ],
    });
    expect(option.legend.data).toEqual(['Cats', 'Dogs']);
  });
});

describe('getDonutOption', () => {
  it('shows the title and subtitle in the center', () => {
    const option: any = getDonutOption({ data: [{ x: 'Cats', y: 35 }], title: '100', subTitle: 'Pets' });
    expect(option.series[0].radius).toEqual(['84%', '100%']);
    expect(option.series[1]).toMatchObject({
      silent: true,
      label: { formatter: '{title|100}\n{subTitle|Pets}', position: 'center' },
    });
    expect(option.title).toBeUndefined();
  });

  it('shows the subtitle below the donut', () => {
    const option: any = getDonutOption({
      data: [{ x: 'Cats', y: 35 }],
      title: '100',
      subTitle: 'Pets',
      subTitlePosition: 'bottom',
    });
    expect(option.series[1].label.formatter).toBe('{title|100}');
    expect(option.title).toMatchObject({ subtext: 'Pets', left: 'center' });
  });

  it('has no legend without legend data', () => {
    expect((getDonutOption({ data: [{ x: 'Cats', y: 35 }] }) as any).legend).toBeUndefined();
    expect((getDonutUtilizationOption({ data: { y: 45 } }) as any).legend).toBeUndefined();
    expect((getBulletOption({ primarySegmentedMeasureData: [{ y: 60 }] }) as any).legend).toBeUndefined();
    expect((getDonutOption({ data: [{ x: 'Cats', y: 35 }], legendData: ['Cats: 35'] }) as any).legend).toMatchObject({
      right: 10,
    });
  });

  it('has no title series without a title', () => {
    expect((getDonutOption({ data: [{ x: 'Cats', y: 35 }] }) as any).series).toHaveLength(1);
  });
});

describe('getDonutUtilizationOption', () => {
  it('draws the used and unused parts', () => {
    const option: any = getDonutUtilizationOption({ data: { x: 'Storage', y: 45 } });
    expect(option.series[0].data).toMatchObject([
      { name: 'Storage', value: 45 },
      { name: 'Unused', value: 55 },
    ]);
    expect(option.series[0].data[0].itemStyle).toBeUndefined();
  });

  it('omits the unused part when not static', () => {
    expect((getDonutUtilizationOption({ data: { y: 45 }, static: false }) as any).series[0].data).toHaveLength(1);
  });

  it('colors the utilization from the thresholds it reached', () => {
    const thresholds = [{ value: 60 }, { value: 90, color: 'black' }];
    expect(getUtilizationColor(45, thresholds)).toBeUndefined();
    expect(getUtilizationColor(60, thresholds)).toBe('#dca614');
    expect(getUtilizationColor(95, thresholds)).toBe('black');
    expect(getUtilizationColor(95, thresholds, true)).toBeUndefined();
    expect(getUtilizationColor(50, [{ value: 60 }, { value: 20 }], true)).toBe('#dca614');
  });
});

describe('getDonutThresholdOption', () => {
  it('draws the threshold ranges around the utilization', () => {
    const option: any = getDonutThresholdOption({
      data: [
        { x: 'Danger at 90%', y: 90 },
        { x: 'Warning at 60%', y: 60 },
      ],
      utilization: { x: 'Storage', y: 45 },
    });
    expect(option.series[0].data.map((slice: any) => [slice.name, slice.value])).toEqual([
      ['Warning at 60%', 60],
      ['Danger at 90%', 30],
      ['', 10],
    ]);
    expect(option.series[1].data.map((slice: any) => slice.value)).toEqual([45, 55]);
    expect(option.series[1].data[1].itemStyle.color).toBe('transparent');
  });
});

describe('getBulletOption', () => {
  it('overlaps ranges and measures, largest first', () => {
    const option: any = getBulletOption(
      {
        comparativeWarningMeasureData: [{ name: 'Warning', y: 88 }],
        primarySegmentedMeasureData: [
          { name: 'Measure', y: 25 },
          { name: 'Measure', y: 60 },
        ],
        qualitativeRangeData: [
          { name: 'Range', y: 50 },
          { name: 'Range', y: 75 },
        ],
        maxDomain: 100,
      },
      ['blue1', 'blue2'],
    );

    const bars = option.series.filter((serie: any) => serie.type === 'bar');
    expect(bars.map((bar: any) => [bar.name, bar.data[0], bar.yAxisIndex])).toEqual([
      ['Range', 75, 0],
      ['Range', 50, 0],
      ['Measure', 60, 1],
      ['Measure', 25, 1],
    ]);
    expect(bars[2].itemStyle.color).toBe('blue1');
    const warning = option.series.find((serie: any) => serie.name === 'Warning');
    expect(warning).toMatchObject({ type: 'scatter', data: [[88, 0]], symbol: 'rect' });
    expect(option.xAxis).toMatchObject({ type: 'value', min: 0, max: 100 });
    expect(option.yAxis).toHaveLength(2);
  });

  it('highlights nothing on hover', () => {
    const option: any = getBulletOption({ primaryDotMeasureData: [{ y: 30 }], qualitativeRangeData: [{ y: 50 }] });
    expect(option.series.map((serie: any) => serie.emphasis)).toEqual([{ disabled: true }, { disabled: true }]);
  });

  it('draws vertically', () => {
    const option: any = getBulletOption({ horizontal: false, primaryDotMeasureData: [{ y: 30 }] });
    expect(option.yAxis.type).toBe('value');
    expect(option.series[0].data).toEqual([[0, 30]]);
  });

  it('includes negative values in the domain', () => {
    const option: any = getBulletOption({ primarySegmentedMeasureData: [{ y: -15 }, { y: 30 }] });
    expect(option.xAxis).toMatchObject({ min: -15, max: 30 });
  });

  it('shows the title on the left', () => {
    const option: any = getBulletOption({ title: 'Text label', subTitle: 'Measure details' });
    expect(option.title).toMatchObject({ text: 'Text label', subtext: 'Measure details', top: 'middle' });
    expect(option.grid.left).toBe(160);
  });
});

describe('getBoxPlotOption', () => {
  it('summarizes samples like d3', () => {
    expect(getBoxPlotValues([1, 2, 3, 5])).toEqual([1, 1.75, 2.5, 3.5, 5]);
    expect(getBoxPlotValues([])).toEqual([]);
  });

  it('draws a box per category', () => {
    const option: any = getBoxPlotOption({
      series: [
        {
          name: 'Cats',
          data: [
            { x: '2015', y: [1, 2, 3, 5] },
            { x: '2016', y: [3, 2, 8, 10] },
          ],
        },
      ],
    });
    expect(option.xAxis.data).toEqual(['2015', '2016']);
    expect(option.series[0]).toMatchObject({ type: 'boxplot', name: 'Cats' });
    expect(option.series[0].data[1]).toEqual([2, 2.75, 5.5, 8.5, 10]);
  });
});

describe('getCandlestickOption', () => {
  it('orders the values as ECharts expects', () => {
    const option: any = getCandlestickOption({
      name: 'Stock',
      data: [
        { x: 'Mon', open: 20, close: 34, low: 10, high: 38 },
        { open: 40, close: 35, low: 30, high: 50 },
      ],
    });
    expect(option.xAxis.data).toEqual(['Mon', '2']);
    expect(option.yAxis.scale).toBe(true);
    expect(option.series[0]).toEqual({
      type: 'candlestick',
      name: 'Stock',
      data: [
        [20, 34, 10, 38],
        [40, 35, 30, 50],
      ],
    });
    expect(option.legend.data).toEqual(['Stock']);
  });

  it('shows no legend for an unnamed series', () => {
    const option: any = getCandlestickOption({ data: [{ open: 1, close: 2, low: 0, high: 3 }] });
    expect(option.legend).toBeUndefined();
    expect(option.grid.right).toBe(20);
  });
});

describe('getSankeyOption', () => {
  it('passes nodes, links and tooltip labels', () => {
    const option: any = getSankeyOption({
      nodes: [{ name: 'a' }, { name: 'b' }],
      links: [{ source: 'a', target: 'b', value: 5 }],
      sourceLabel: 'From',
      destinationLabel: 'To',
    });
    expect(option.series[0]).toMatchObject({
      type: 'sankey',
      data: [{ name: 'a' }, { name: 'b' }],
      links: [{ source: 'a', target: 'b', value: 5 }],
    });
    expect(option.tooltip).toEqual({ sourceLabel: 'From', destinationLabel: 'To' });
  });
});

describe('getGaugeOption', () => {
  it('draws the value as progress over a track, without scale nor pointer', () => {
    const option: any = getGaugeOption({ value: 40 });
    const serie = option.series[0];
    expect(serie).toMatchObject({
      type: 'gauge',
      min: 0,
      max: 100,
      startAngle: 225,
      endAngle: -45,
      data: [{ value: 40, name: '' }],
    });
    expect(serie.progress).toEqual({ show: true, width: 12 });
    expect(serie.axisLine.lineStyle.color).toEqual([[1, '#e0e0e0']]);
    expect(serie.pointer.show).toBe(false);
    expect(serie.axisLabel.show).toBe(false);
    expect(serie.title.show).toBe(false);
    expect(serie.detail.formatter(40)).toBe('40');
  });

  it('shows the title and subtitle', () => {
    const serie: any = (getGaugeOption({ value: 40, title: '{40} GiB', subTitle: 'of 100 GiB' }) as any).series[0];
    expect(serie.detail.formatter(40)).toBe('{40} GiB');
    expect(serie.title.show).toBe(true);
    expect(serie.data[0].name).toBe('of 100 GiB');
  });

  it('colors the value from the thresholds it reached', () => {
    expect(
      (getGaugeOption({ value: 40, thresholds: [{ value: 60 }] }) as any).series[0].progress.itemStyle,
    ).toBeUndefined();
    expect((getGaugeOption({ value: 70, thresholds: [{ value: 60 }] }) as any).series[0].progress.itemStyle.color).toBe(
      '#dca614',
    );
    expect(
      (getGaugeOption({ value: 10, invert: true, thresholds: [{ value: 20, color: 'red' }] }) as any).series[0].progress
        .itemStyle.color,
    ).toBe('red');
  });

  it('lowers and grows half circle gauges to fill the chart', () => {
    expect((getGaugeOption({ value: 40 }) as any).series[0]).toMatchObject({ center: ['50%', '55%'], radius: '90%' });
    expect((getGaugeOption({ value: 40, startAngle: 180, endAngle: 0 }) as any).series[0]).toMatchObject({
      center: ['50%', '75%'],
      radius: '120%',
    });
  });

  it('shows the scale and pointer', () => {
    const serie: any = (getGaugeOption({ value: 40, min: -50, max: 50, ticks: true, pointer: true }) as any).series[0];
    expect(serie).toMatchObject({
      min: -50,
      max: 50,
      pointer: { show: true },
      axisLabel: { show: true },
      splitLine: { show: true },
    });
  });
});

describe('getHeatmapOption', () => {
  const data = [
    { x: 'Mon', y: 'Morning', value: 1 },
    { x: 'Tue', y: 'Morning', value: 5 },
    { x: 'Mon', y: 'Evening', value: 9 },
  ];

  it('maps the cells to category indexes, first row on top', () => {
    const option: any = getHeatmapOption({ data });
    expect(option.xAxis.data).toEqual(['Mon', 'Tue']);
    expect(option.yAxis).toMatchObject({ data: ['Morning', 'Evening'], inverse: true });
    expect(option.series[0].data.map((cell: any) => cell.value)).toEqual([
      [0, 0, 1],
      [1, 0, 5],
      [0, 1, 9],
    ]);
  });

  it('uses the given categories', () => {
    const option: any = getHeatmapOption({ data, xCategories: ['Tue', 'Mon', 'Wed'] });
    expect(option.xAxis.data).toEqual(['Tue', 'Mon', 'Wed']);
    expect(option.series[0].data[0].value).toEqual([1, 0, 1]);
  });

  it('maps values to a light to dark scale of the theme color', () => {
    expect(getSequentialColors('green')).toEqual(['#afdc8f', '#87bb62', '#63993d', '#3d7317', '#204d00']);
    expect(getSequentialColors('multi-ordered')).toEqual(getSequentialColors('blue'));
    const option: any = getHeatmapOption({ data, themeColor: 'green' });
    expect(option.visualMap).toMatchObject({
      min: 1,
      max: 9,
      text: ['9', '1'],
      show: true,
      orient: 'vertical',
      right: 10,
      inRange: { color: getSequentialColors('green') },
    });
    expect(getHeatmapOption({ data, min: 0, max: 10 }) as any).toMatchObject({ visualMap: { min: 0, max: 10 } });
  });

  it('shows no values on the scale of skeletons', () => {
    expect((getHeatmapOption({ data, themeColor: 'skeleton' }) as any).visualMap.text).toBeUndefined();
  });

  it('places or hides the color scale like a legend', () => {
    expect((getHeatmapOption({ data, legendPosition: 'bottom' }) as any).visualMap).toMatchObject({
      orient: 'horizontal',
      bottom: 0,
      left: 'center',
    });
    expect((getHeatmapOption({ data, legendPosition: 'none' }) as any).visualMap.show).toBe(false);
  });

  it('shows readable labels', () => {
    const option: any = getHeatmapOption({ data, labels: true });
    expect(option.series[0].label.show).toBe(true);
    const [low, , high] = option.series[0].data;
    expect(low.label.color).toBe('#1f1f1f');
    expect(high.label.color).toBe('#ffffff');
  });

  it('describes the cell in the tooltip', () => {
    const option: any = getHeatmapOption({ data });
    expect(option.tooltip.formatter({ value: [1, 0, 5] })).toBe('Tue · Morning: <strong>5</strong>');
  });
});

describe('getRadarOption', () => {
  const series = [
    { name: 'Node 1', data: [60, 70, 30] },
    { name: 'Node 2', data: [40, null, 90] },
  ];

  it('draws each series as a filled polygon of one radar series', () => {
    const option: any = getRadarOption({ indicators: ['CPU', { name: 'Memory', max: 100 }, 'Disk'], series });
    expect(option.radar.indicator).toEqual([{ name: 'CPU' }, { name: 'Memory', max: 100 }, { name: 'Disk' }]);
    expect(option.radar.shape).toBe('polygon');
    expect(option.series).toHaveLength(1);
    expect(option.series[0].data).toEqual([
      { areaStyle: { opacity: 0.3 }, name: 'Node 1', value: [60, 70, 30] },
      { areaStyle: { opacity: 0.3 }, name: 'Node 2', value: [40, '-', 90] },
    ]);
  });

  it('draws lines only when not filled', () => {
    expect(
      (getRadarOption({ indicators: ['a'], series, filled: false }) as any).series[0].data[0].areaStyle,
    ).toBeUndefined();
  });

  it('shows the legend on the right by default, moving the radar aside', () => {
    const option: any = getRadarOption({ indicators: ['a'], series });
    expect(option.legend).toMatchObject({ data: ['Node 1', 'Node 2'], right: 10 });
    expect(option.radar.center).toEqual(['40%', '50%']);
    expect((getRadarOption({ indicators: ['a'], series, legendPosition: 'none' }) as any).radar.center).toEqual([
      '50%',
      '50%',
    ]);
    expect((getRadarOption({ indicators: ['a'], series, legendPosition: 'bottom' }) as any).radar.center).toEqual([
      '50%',
      '45%',
    ]);
  });

  it('sets the shape and levels', () => {
    expect((getRadarOption({ indicators: ['a'], series, shape: 'circle', levels: 4 }) as any).radar).toMatchObject({
      shape: 'circle',
      splitNumber: 4,
    });
  });
});

describe('getFunnelOption', () => {
  const data = [
    { x: 'Visits', y: 100 },
    { x: 'Sign ups', y: 60 },
    { x: 'Purchases', y: 12 },
  ];

  it('draws the stages, largest on top, with a legend on the right', () => {
    const option: any = getFunnelOption({ data });
    expect(option.series[0]).toMatchObject({
      type: 'funnel',
      data: [
        { name: 'Visits', value: 100 },
        { name: 'Sign ups', value: 60 },
        { name: 'Purchases', value: 12 },
      ],
      sort: 'descending',
      orient: 'vertical',
      gap: 2,
      label: { show: false },
    });
    expect(option.legend).toMatchObject({ data: ['Visits', 'Sign ups', 'Purchases'], right: 10 });
    expect(option.series[0].right).toBeGreaterThan(20);
  });

  it('shows labels inside the stages, contrasting with each stage', () => {
    const serie = (getFunnelOption({ data, labels: true }, ['#003366', '#f2f2f2']) as any).series[0];
    expect(serie.label).toEqual({ formatter: '{b}: {c}', position: 'inside', show: true });
    expect(serie.data.map((stage: any) => stage.label.color)).toEqual(['#ffffff', '#1f1f1f', '#ffffff']);
    expect((getFunnelOption({ data }, ['#003366']) as any).series[0].data[0].label).toBeUndefined();
  });

  it('sets the order, orientation and gap', () => {
    expect(
      (getFunnelOption({ data, sort: 'none', orient: 'horizontal', gap: 0, legendPosition: 'none' }) as any).series[0],
    ).toMatchObject({ sort: 'none', orient: 'horizontal', gap: 0, right: 20 });
  });
});

describe('getTreemapOption', () => {
  const data = [
    { name: 'Frontend', children: [{ name: 'Web', value: 40 }] },
    { name: 'Backend', children: [{ name: 'API', value: 35 }] },
    { name: 'Infrastructure', value: 30 },
  ];

  it('colors each top level node, with labels contrasting with the color its descendants inherit', () => {
    const option: any = getTreemapOption({ data }, ['#000000', '#ffffff']);
    expect(option.series[0].data).toEqual([
      {
        name: 'Frontend',
        itemStyle: { color: '#000000' },
        label: { color: '#ffffff' },
        children: [{ name: 'Web', value: 40, label: { color: '#ffffff' } }],
      },
      {
        name: 'Backend',
        itemStyle: { color: '#ffffff' },
        label: { color: '#1f1f1f' },
        children: [{ name: 'API', value: 35, label: { color: '#1f1f1f' } }],
      },
      { name: 'Infrastructure', value: 30, itemStyle: { color: '#000000' }, label: { color: '#ffffff' } },
    ]);
  });

  it('is static without drill down', () => {
    const option: any = getTreemapOption({ data });
    expect(option.series[0]).toMatchObject({
      type: 'treemap',
      nodeClick: false,
      roam: false,
      breadcrumb: { show: false },
    });
    expect(option.series[0].data[0].itemStyle).toBeUndefined();
  });

  it('zooms into the clicked node with drill down, leaving room for the breadcrumb', () => {
    const option: any = getTreemapOption({ data, drillDown: true, name: 'Teams' });
    expect(option.series[0]).toMatchObject({ name: 'Teams', nodeClick: 'zoomToNode', breadcrumb: { show: true } });
    expect(option.series[0].bottom).toBeGreaterThan(option.series[0].top);
  });

  it('draws nothing without data', () => {
    expect((getTreemapOption({}) as any).series[0].data).toEqual([]);
  });
});

describe('getSunburstOption', () => {
  const data = [
    { name: 'Frontend', children: [{ name: 'Web', value: 40 }] },
    { name: 'Backend', children: [{ name: 'API', value: 35 }] },
    { name: 'Infrastructure', value: 30 },
  ];

  it('colors each top level node, with labels contrasting with the color its descendants inherit', () => {
    const option: any = getSunburstOption({ data }, ['#000000', '#ffffff']);
    expect(option.series[0].data).toEqual([
      {
        name: 'Frontend',
        itemStyle: { color: '#000000' },
        label: { color: '#ffffff' },
        children: [{ name: 'Web', value: 40, label: { color: '#ffffff' } }],
      },
      {
        name: 'Backend',
        itemStyle: { color: '#ffffff' },
        label: { color: '#1f1f1f' },
        children: [{ name: 'API', value: 35, label: { color: '#1f1f1f' } }],
      },
      { name: 'Infrastructure', value: 30, itemStyle: { color: '#000000' }, label: { color: '#ffffff' } },
    ]);
  });

  it('is static without drill down', () => {
    const option: any = getSunburstOption({ data, name: 'Teams' });
    expect(option.series[0]).toMatchObject({ type: 'sunburst', name: 'Teams', nodeClick: false });
  });

  it('makes the clicked node the center with drill down', () => {
    expect((getSunburstOption({ data, drillDown: true }) as any).series[0].nodeClick).toBe('rootToNode');
  });

  it('draws nothing without data', () => {
    expect((getSunburstOption({}) as any).series[0].data).toEqual([]);
  });
});

describe('getGraphOption', () => {
  const nodes = [
    { name: 'Router', category: 'Network' },
    { name: 'Web', category: 'Service', value: 3 },
    { name: 'API', category: 'Service' },
    { name: 'Database' },
  ];
  const links = [
    { source: 'Router', target: 'Web' },
    { source: 'Web', target: 'API' },
    { source: 'API', target: 'Database', value: 5 },
  ];

  it('lists the node categories in the legend, in order of appearance', () => {
    const option: any = getGraphOption({ nodes, links });
    expect(option.series[0].categories).toEqual([{ name: 'Network' }, { name: 'Service' }]);
    expect(option.series[0].data).toEqual([
      { name: 'Router', category: 0 },
      { name: 'Web', category: 1, value: 3 },
      { name: 'API', category: 1 },
      { name: 'Database' },
    ]);
    expect(option.series[0].links).toEqual(links);
    expect(option.legend.data).toEqual(['Network', 'Service']);
    expect(option.series[0].right).toBeGreaterThan(option.series[0].left);
  });

  it('has no legend without categories', () => {
    const option: any = getGraphOption({ nodes: [{ name: 'a' }, { name: 'b' }] });
    expect(option.legend).toBeUndefined();
    expect(option.series[0].right).toBe(option.series[0].left);
  });

  it('lays out the nodes with draggable forces by default, without roaming', () => {
    const option: any = getGraphOption({ nodes, links });
    expect(option.series[0]).toMatchObject({ layout: 'force', draggable: true, roam: false, label: { show: false } });
    expect(option.series[0].force).toBeDefined();
  });

  it('puts the nodes on a circle, rotating their labels', () => {
    const option: any = getGraphOption({ nodes, layout: 'circular', labels: true });
    expect(option.series[0]).toMatchObject({
      layout: 'circular',
      circular: { rotateLabel: true },
      label: { show: true },
    });
    expect(option.series[0].draggable).toBeUndefined();
    // The circle leaves room for the labels pointing outwards
    expect(option.series[0].top).toBeGreaterThan((getGraphOption({ nodes, layout: 'circular' }) as any).series[0].top);
  });

  it('keeps the node positions with no layout', () => {
    const option: any = getGraphOption({ nodes: [{ name: 'a', x: 1, y: 2 }], layout: 'none' });
    expect(option.series[0]).toMatchObject({ layout: 'none', data: [{ name: 'a', x: 1, y: 2 }] });
    expect(option.series[0].force).toBeUndefined();
  });

  it('draws arrows on directed links', () => {
    expect((getGraphOption({ nodes, links, directed: true }) as any).series[0].edgeSymbol).toEqual(['none', 'arrow']);
    expect((getGraphOption({ nodes, links }) as any).series[0].edgeSymbol).toBeUndefined();
  });

  it('draws nothing without data', () => {
    const option: any = getGraphOption({});
    expect(option.series[0]).toMatchObject({ data: [], links: [], categories: [] });
  });
});

describe('getParallelOption', () => {
  const dimensions = ['CPU', { name: 'Memory', max: 64 }, { name: 'Tier', categories: ['Bronze', 'Gold'] }];
  const series = [
    { name: 'Cluster A', data: [[60, 12, 'Gold']] },
    { name: 'Cluster B', data: [[20, null, 'Bronze']], smooth: 0.2 },
  ];

  it('draws one axis per dimension, as category axes when given categories', () => {
    const option: any = getParallelOption({ dimensions, series });
    expect(option.parallelAxis).toMatchObject([
      { dim: 0, name: 'CPU', type: 'value' },
      { dim: 1, name: 'Memory', max: 64, type: 'value' },
      { dim: 2, name: 'Tier', type: 'category', data: ['Bronze', 'Gold'] },
    ]);
    expect(option.parallelAxis[2].categories).toBeUndefined();
  });

  it('draws each series as a group of lines, with gaps for missing values', () => {
    const option: any = getParallelOption({ dimensions, series });
    expect(option.series).toEqual([
      { type: 'parallel', name: 'Cluster A', data: [[60, 12, 'Gold']] },
      { type: 'parallel', name: 'Cluster B', data: [[20, '-', 'Bronze']], smooth: 0.2 },
    ]);
    expect(option.legend.data).toEqual(['Cluster A', 'Cluster B']);
    expect(option.parallel.right).toBeGreaterThan(option.parallel.left);
  });

  it('draws the axes as rows, leaving room for their names on the right', () => {
    const option: any = getParallelOption({ dimensions, series, horizontal: true, legendPosition: 'bottom' });
    expect(option.parallel.layout).toBe('vertical');
    expect(option.parallel.right).toBeGreaterThanOrEqual(20 + 'Memory'.length * 7);
    expect((getParallelOption({ dimensions }) as any).parallel.layout).toBe('horizontal');
  });

  it('smooths every line', () => {
    expect((getParallelOption({ series, smooth: true }) as any).series.map((serie: any) => serie.smooth)).toEqual([
      true,
      true,
    ]);
  });

  it('draws nothing without data', () => {
    const option: any = getParallelOption({});
    expect(option).toMatchObject({ parallelAxis: [], series: [] });
  });
});

describe('getTreeOption', () => {
  const tree = { name: 'Teams', children: [{ name: 'Frontend', children: [{ name: 'Web' }] }, { name: 'Backend' }] };

  it('draws a single top level node as the root, in the first theme color', () => {
    const option: any = getTreeOption({ data: [tree] }, ['#000000', '#ffffff']);
    expect(option.series[0]).toMatchObject({
      type: 'tree',
      data: [tree],
      itemStyle: { color: '#000000' },
      layout: 'orthogonal',
      orient: 'LR',
      roam: false,
    });
  });

  it('joins several top level nodes under a root named after the series', () => {
    const option: any = getTreeOption({ data: tree.children, name: 'Teams' });
    expect(option.series[0]).toMatchObject({ name: 'Teams', data: [{ name: 'Teams', children: tree.children }] });
    expect((getTreeOption({ data: tree.children }) as any).series[0].data[0].name).toBe('');
  });

  it('leaves room for the labels of the root and of the leaves, on their side', () => {
    const lr: any = getTreeOption({ data: [tree] });
    expect(lr.series[0].left).toBeGreaterThan(lr.series[0].top);
    expect(lr.series[0].right).toBeGreaterThan(lr.series[0].top);
    expect(lr.series[0]).toMatchObject({ label: { position: 'left' }, leaves: { label: { position: 'right' } } });

    const bt: any = getTreeOption({ data: [tree], orient: 'BT' });
    expect(bt.series[0].bottom).toBeGreaterThan(bt.series[0].left);
    expect(bt.series[0].top).toBeGreaterThan(bt.series[0].left);
    expect(bt.series[0].label.rotate).toBe(-90);
  });

  it('lays out the tree around the root when radial', () => {
    const option: any = getTreeOption({ data: [tree], radial: true, orient: 'TB' });
    expect(option.series[0]).toMatchObject({ layout: 'radial' });
    expect(option.series[0].orient).toBeUndefined();
    expect(option.series[0].label).toBeUndefined();
  });

  it('is fully expanded and static unless collapsible', () => {
    expect((getTreeOption({ data: [tree] }) as any).series[0]).toMatchObject({
      expandAndCollapse: false,
      initialTreeDepth: -1,
      symbol: 'circle',
    });
    expect((getTreeOption({ data: [tree], collapsible: true, depth: 1 }) as any).series[0]).toMatchObject({
      expandAndCollapse: true,
      initialTreeDepth: 1,
      symbol: 'emptyCircle',
    });
  });

  it('draws nothing without data', () => {
    expect((getTreeOption({}) as any).series[0].data).toEqual([]);
  });
});

describe('getCalendarOption', () => {
  const data = [
    { date: '2026-03-02', value: 4 },
    { date: new Date(2026, 0, 15), value: 1 },
    { date: '2026-02-10', value: null },
  ];

  it('draws a cell per day, with gaps for missing values', () => {
    const option: any = getCalendarOption({ data });
    expect(option.series[0]).toMatchObject({ type: 'heatmap', coordinateSystem: 'calendar' });
    expect(option.series[0].data).toEqual([
      ['2026-03-02', 4],
      ['2026-01-15', 1],
      ['2026-02-10', '-'],
    ]);
    expect(option.visualMap).toMatchObject({ min: 1, max: 4, type: 'continuous', show: true, seriesIndex: 0 });
  });

  it('spans the days of the data unless given a range', () => {
    expect((getCalendarOption({ data }) as any).calendar.range).toEqual(['2026-01-15', '2026-03-02']);
    expect((getCalendarOption({ data, range: 2026 }) as any).calendar.range).toBe(2026);
    expect((getCalendarOption({ data, range: [new Date(2026, 0, 1), '2026-06-30'] }) as any).calendar.range).toEqual([
      '2026-01-01',
      '2026-06-30',
    ]);
    expect((getCalendarOption({}) as any).calendar.range).toBe(new Date().getFullYear());
  });

  it('names the days and months in the given locale, starting the week from the given day', () => {
    const option: any = getCalendarOption({ data, locale: 'en-US', firstDay: 1 });
    expect(option.calendar.dayLabel).toMatchObject({
      firstDay: 1,
      nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    });
    expect(option.calendar.monthLabel.nameMap.slice(0, 3)).toEqual(['Jan', 'Feb', 'Mar']);
    expect((getCalendarOption({ data }) as any).calendar.dayLabel.firstDay).toBe(0);
  });

  it('shows the date and value in the tooltip', () => {
    const option: any = getCalendarOption({ data, locale: 'en-US' });
    expect(option.series[0].tooltip.formatter({ value: ['2026-03-02', 4] })).toBe('Mar 2, 2026: <strong>4</strong>');
    // Series added through the option keep their own tooltip
    expect(option.tooltip).toBeUndefined();
  });

  it('lays out the weeks vertically, leaving room for the labels and the legend', () => {
    const option: any = getCalendarOption({ data, vertical: true, legendPosition: 'bottom' });
    expect(option.calendar.orient).toBe('vertical');
    expect(option.calendar.top).toBeGreaterThan(20);
    expect(option.calendar.bottom).toBeGreaterThan(option.calendar.top);
    expect(option.visualMap).toMatchObject({ orient: 'horizontal', bottom: 0 });
  });
});

describe('getThemeRiverOption', () => {
  const series = [
    {
      name: 'Cats',
      data: [{ x: '2026-01-01', y: 1 }, null],
    },
    { name: 'Dogs', data: [{ x: new Date(2026, 0, 1), y: 3 }] },
  ];

  it('draws every stream as the data of a single series on a time axis, skipping missing values', () => {
    const option: any = getThemeRiverOption({ series });
    expect(option.series).toHaveLength(1);
    expect(option.series[0]).toMatchObject({ type: 'themeRiver', label: { show: false } });
    expect(option.series[0].data).toEqual([
      ['2026-01-01', 1, 'Cats'],
      [new Date(2026, 0, 1), 3, 'Dogs'],
    ]);
    expect(option.singleAxis.type).toBe('time');
    expect(option.legend.data).toEqual(['Cats', 'Dogs']);
    expect(option.tooltip.trigger).toBe('axis');
  });

  it('uses a value axis spanning numeric x values, placing plain values at x = 1, 2, 3...', () => {
    const option: any = getThemeRiverOption({ series: [{ data: [5, 6] }], xAxisLabel: 'Year' });
    expect(option.series[0].data).toEqual([
      [1, 5, '1'],
      [2, 6, '1'],
    ]);
    expect(option.singleAxis).toMatchObject({ type: 'value', min: 'dataMin', max: 'dataMax', name: 'Year' });
    expect(option.singleAxis.axisLabel.formatter(2015)).toBe('2015');
  });

  it('leaves room for the labels before the streams', () => {
    const option: any = getThemeRiverOption({ series, labels: true });
    expect(option.series[0]).toMatchObject({ label: { show: true }, emphasis: { label: { show: true } } });
    expect(option.singleAxis.left).toBeGreaterThan((getThemeRiverOption({ series }) as any).singleAxis.left);
  });

  it('draws nothing without data', () => {
    expect((getThemeRiverOption({}) as any).series[0].data).toEqual([]);
  });
});

describe('getMapOption', () => {
  const data = [
    { name: 'Italy', value: 10 },
    { name: 'France', value: 30 },
    { name: 'Spain', value: null },
  ];

  it('colors each region by its value, with gaps for missing values', () => {
    const option: any = getMapOption({ map: 'world', data });
    expect(option.series[0]).toMatchObject({ type: 'map', map: 'world', roam: false, selectedMode: false });
    expect(option.series[0].data.map(({ name, value }: any) => [name, value])).toEqual([
      ['Italy', 10],
      ['France', 30],
      ['Spain', '-'],
    ]);
    expect(option.visualMap).toMatchObject({ min: 10, max: 30, seriesIndex: 0, show: true });
  });

  it('draws regions without a value apart from the color scale, keeping the color of hovered ones', () => {
    const option: any = getMapOption({ map: 'world', data });
    expect(option.series[0].itemStyle.areaColor).toBeTruthy();
    expect(option.series[0].emphasis.itemStyle.areaColor).toBe('inherit');
  });

  it('shows labels contrasting with their region', () => {
    const option: any = getMapOption({ map: 'world', data, labels: true });
    expect(option.series[0].label.show).toBe(true);
    const [lightest, darkest] = option.series[0].data.map((datum: any) => datum.label.color);
    expect(lightest).not.toBe(darkest);
  });

  it('lets the user zoom and pan with roam', () => {
    expect((getMapOption({ map: 'world', roam: true }) as any).series[0].roam).toBe(true);
  });

  it('shows the value in the tooltip, or only the name without one', () => {
    const { formatter } = (getMapOption({ map: 'world', data }) as any).series[0].tooltip;
    expect(formatter({ name: 'Italy', value: 10 })).toBe('Italy: <strong>10</strong>');
    expect(formatter({ name: 'Spain', value: NaN })).toBe('Spain');
  });
});

describe('getLinesOption', () => {
  const series = [
    {
      name: 'Replication',
      data: [
        {
          name: 'A → B',
          coords: [
            [0, 0],
            [10, 10],
          ] as [number, number][],
          value: 5,
        },
        {
          name: 'B → C',
          coords: [
            [10, 10],
            [20, 0],
          ] as [number, number][],
        },
      ],
    },
    {
      name: 'Paths',
      data: [
        {
          coords: [
            [0, 0],
            [5, 5],
            [20, 0],
          ] as [number, number][],
        },
      ],
    },
  ];

  it('draws the lines on a neutral, non interactive map', () => {
    const option: any = getLinesOption({ map: 'world', series });
    expect(option.geo).toMatchObject({ map: 'world', roam: false, silent: true });
    expect(option.geo.itemStyle.areaColor).toBeTruthy();
    expect(option.series.map((serie: any) => [serie.type, serie.coordinateSystem, serie.name])).toEqual([
      ['lines', 'geo', 'Replication'],
      ['lines', 'geo', 'Paths'],
    ]);
    expect(option.legend.data).toEqual(['Replication', 'Paths']);
  });

  it('draws lines with more than two points as paths, bending only the others', () => {
    const option: any = getLinesOption({ map: 'world', series, curved: true });
    expect(option.series[0].lineStyle.curveness).toBeGreaterThan(0);
    expect(option.series[0].polyline).toBeUndefined();
    expect(option.series[1]).toMatchObject({ polyline: true });
    expect(option.series[1].lineStyle).toBeUndefined();
  });

  it('draws arrows, trails and the ends of the lines in the color of their series', () => {
    const option: any = getLinesOption({ map: 'world', series, directed: true, effect: true, points: true }, [
      'red',
      'green',
    ]);
    expect(option.series[0]).toMatchObject({ symbol: ['none', 'arrow'], effect: { show: true, trailLength: 0 } });
    expect(option.series.slice(2)).toMatchObject([
      {
        type: 'scatter',
        name: 'Replication',
        itemStyle: { color: 'red' },
        data: [
          [0, 0],
          [10, 10],
          [20, 0],
        ],
      },
      {
        type: 'scatter',
        name: 'Paths',
        itemStyle: { color: 'green' },
        data: [
          [0, 0],
          [20, 0],
        ],
      },
    ]);
    // Only the canvas renderer draws trails
    expect(
      (getLinesOption({ map: 'world', series, effect: true, svgRenderer: false }) as any).series[0].effect,
    ).toMatchObject({ trailLength: 0.2 });
  });

  it('shows the name and value of the lines in the tooltip', () => {
    const { formatter } = (getLinesOption({ map: 'world', series }) as any).series[0].tooltip;
    expect(formatter({ data: series[0].data[0], seriesName: 'Replication' })).toBe('A → B: <strong>5</strong>');
    expect(formatter({ data: { coords: [] }, seriesName: 'Replication' })).toBe('Replication');
  });
});

describe('getChordOption', () => {
  const nodes = [{ name: 'Frontend' }, { name: 'API' }, { name: 'Database', value: 50 }];
  const links = [
    { source: 'Frontend', target: 'API', value: 40 },
    { source: 'API', target: 'Database', value: 25 },
  ];

  it('draws the nodes on a circle linked by the flows, listed in the legend', () => {
    const option: any = getChordOption({ nodes, links });
    expect(option.series[0]).toMatchObject({ type: 'chord', data: nodes, links, label: { show: false } });
    expect(option.legend.data).toEqual(['Frontend', 'API', 'Database']);
    expect(option.series[0].right).toBeGreaterThan(option.series[0].left);
  });

  it('leaves room for the labels outside the circle', () => {
    const [, outer] = (getChordOption({ nodes, links, labels: true }) as any).series[0].radius;
    const [, full] = (getChordOption({ nodes, links }) as any).series[0].radius;
    expect(parseFloat(outer)).toBeLessThan(parseFloat(full));
  });

  it('shows the flow of a ribbon, or the value of a node, in the tooltip', () => {
    const { formatter } = (getChordOption({ nodes, links }) as any).series[0].tooltip;
    expect(formatter({ dataType: 'edge', data: links[0] })).toBe('Frontend → API: <strong>40</strong>');
    expect(formatter({ dataType: 'node', name: 'API', value: 65 })).toBe('API: <strong>65</strong>');
  });

  it('draws nothing without data', () => {
    expect((getChordOption({}) as any).series[0]).toMatchObject({ data: [], links: [] });
  });
});

describe('toolbox', () => {
  it('saves the chart as an image and restores it, on every chart', () => {
    for (const option of [
      getPieOption({ data: [{ x: 'Cats', y: 1 }], toolbox: true }),
      getCartesianOption('bar', { series: [cats], toolbox: true }),
      getGaugeOption({ value: 1, toolbox: true }),
    ] as any[]) {
      expect(option.toolbox.feature).toEqual({ restore: {}, saveAsImage: {} });
    }
  });

  it('is not shown by default nor on skeletons', () => {
    expect((getPieOption({ data: [] }) as any).toolbox).toBeUndefined();
    expect((getPieOption({ data: [], toolbox: true, themeColor: 'skeleton' }) as any).toolbox).toBeUndefined();
  });
});

describe('cartesian interactions', () => {
  it('zooms the independent axis with a slider and Ctrl + wheel, leaving room for the slider', () => {
    const plain: any = getCartesianOption('line', { series: [cats], legendPosition: 'none' });
    const option: any = getCartesianOption('line', { series: [cats], legendPosition: 'none', zoomable: true });
    expect(option.dataZoom).toMatchObject([
      { type: 'inside', xAxisIndex: 0, zoomOnMouseWheel: 'ctrl', moveOnMouseMove: false, moveOnMouseWheel: false },
      { type: 'slider', xAxisIndex: 0 },
    ]);
    expect(option.grid.bottom).toBeGreaterThan(plain.grid.bottom);

    const horizontal: any = getCartesianOption('bar', {
      series: [cats],
      legendPosition: 'none',
      zoomable: true,
      horizontal: true,
    });
    expect(horizontal.dataZoom.map((zoom: any) => zoom.yAxisIndex)).toEqual([0, 0]);
    expect(horizontal.grid.right).toBeGreaterThan(plain.grid.right);
  });

  it('does not zoom sparklines, skeletons and polar charts', () => {
    for (const extra of [{ sparkline: true }, { themeColor: 'skeleton' as const }, { polar: true }]) {
      expect(
        (getCartesianOption('line', { series: [cats], zoomable: true, ...extra }) as any).dataZoom,
      ).toBeUndefined();
    }
  });

  it('zooms candlesticks', () => {
    const option: any = getCandlestickOption({ data: [{ open: 1, close: 2, low: 0, high: 3 }], zoomable: true });
    expect(option.dataZoom[1]).toMatchObject({ type: 'slider', xAxisIndex: 0 });
  });

  it('draws the series on polar coordinates, categories around the circle', () => {
    const option: any = getCartesianOption('line', {
      series: [cats],
      thresholds: [dogs],
      polar: true,
      xAxisLabel: 'Year',
    });
    expect(option.grid).toBeUndefined();
    expect(option.xAxis).toBeUndefined();
    expect(option.angleAxis).toMatchObject({ type: 'category', data: ['2015', '2016', '2017'] });
    // Around a circle, the first and last categories would overlap without a gap
    expect(option.angleAxis.boundaryGap).toBeUndefined();
    expect(option.angleAxis.name).toBeUndefined();
    expect(option.radiusAxis).toMatchObject({ type: 'value' });
    expect(option.series.map((serie: any) => serie.coordinateSystem)).toEqual(['polar', 'polar']);
    expect(option.polar.radius).toBeDefined();

    const radial: any = getCartesianOption('bar', { series: [cats], polar: true, horizontal: true });
    expect(radial.angleAxis.type).toBe('value');
    expect(radial.radiusAxis.type).toBe('category');
  });

  it('switches between the frames of a timeline, with axes and legend spanning every frame', () => {
    const option: any = getCartesianOption('bar', {
      timeline: [
        { name: '2025', series: [cats] },
        { name: '2026', series: [dogs] },
      ],
      thresholds: [{ name: 'Limit', data: [{ x: '2015', y: 3 }] }],
      timelineAutoplay: true,
    });
    expect(option.baseOption.timeline).toMatchObject({ axisType: 'category', data: ['2025', '2026'], autoPlay: true });
    expect(option.baseOption.xAxis.data).toEqual(['2015', '2016', '2017']);
    expect(option.baseOption.legend.data).toEqual(['Cats', 'Dogs', 'Limit']);
    expect(option.baseOption.series.map((serie: any) => serie.name)).toEqual(['Cats', 'Limit']);
    expect(option.options.map((frame: any) => frame.series.map((serie: any) => serie.name))).toEqual([
      ['Cats', 'Limit'],
      ['Dogs', 'Limit'],
    ]);
    expect(option.options[1].series[0].data).toEqual([null, 3, 4]);
  });

  it('brushes ranges of the independent axis, or areas of scatter charts, from the toolbox', () => {
    const bar: any = getCartesianOption('bar', { series: [cats], brush: true, toolbox: true });
    expect(bar.brush).toMatchObject({ toolbox: ['lineX', 'keep', 'clear'], outOfBrush: { colorAlpha: 0.2 } });
    expect(bar.toolbox.feature).toEqual({
      brush: { type: ['lineX', 'keep', 'clear'] },
      restore: {},
      saveAsImage: {},
    });
    expect((getCartesianOption('bar', { series: [cats], brush: true, horizontal: true }) as any).brush.toolbox[0]).toBe(
      'lineY',
    );
    expect((getCartesianOption('scatter', { series: [cats], brush: true }) as any).brush.toolbox).toEqual([
      'rect',
      'polygon',
      'keep',
      'clear',
    ]);
    expect(
      (getCartesianOption('bar', { series: [cats], brush: true, themeColor: 'skeleton' }) as any).brush,
    ).toBeUndefined();
  });
});
