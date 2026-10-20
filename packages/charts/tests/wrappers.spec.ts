import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, type Component } from 'vue';
import type { ECharts } from 'echarts/core';
import {
  PfChartArea,
  PfChartBar,
  PfChartBoxPlot,
  PfChartCandlestick,
  PfChartChord,
  PfChartBullet,
  PfChartCalendar,
  PfChartDonut,
  PfChartDonutThreshold,
  PfChartDonutUtilization,
  PfChartFunnel,
  PfChartGauge,
  PfChartGraph,
  PfChartHeatmap,
  PfChartLine,
  PfChartLines,
  PfChartMap,
  PfChartParallel,
  PfChartPie,
  PfChartRadar,
  PfCharts,
  PfChartSankey,
  PfChartScatter,
  PfChartSparkline,
  PfChartSunburst,
  PfChartThemeRiver,
  PfChartTree,
  PfChartTreemap,
} from '../src';

const series = [
  {
    name: 'Cats',
    data: [
      { x: '2015', y: 1 },
      { x: '2016', y: 2 },
    ],
  },
  {
    name: 'Dogs',
    data: [
      { x: '2015', y: 2 },
      { x: '2016', y: 1 },
    ],
  },
];

function mountWrapper(component: Component, props: Record<string, unknown>) {
  const wrapper = mount(component, { props: { height: 200, width: 400, ...props }, attachTo: document.body });
  const chart = () => (wrapper.findComponent(PfCharts).vm as any).chart as ECharts;
  return { wrapper, chart, option: () => chart().getOption() as any };
}

describe.each([
  ['PfChartArea', PfChartArea, { series, legendPosition: 'bottom' }, 'line'],
  ['PfChartBar', PfChartBar, { series, stacked: true }, 'bar'],
  ['PfChartLine', PfChartLine, { series }, 'line'],
  ['PfChartScatter', PfChartScatter, { series }, 'scatter'],
  ['PfChartSparkline', PfChartSparkline, { series: [series[0]] }, 'line'],
  ['PfChartPie', PfChartPie, { data: [{ x: 'Cats', y: 35 }], legendPosition: 'right' }, 'pie'],
  ['PfChartDonut', PfChartDonut, { data: [{ x: 'Cats', y: 35 }], title: '35' }, 'pie'],
  ['PfChartDonutUtilization', PfChartDonutUtilization, { data: { x: 'Storage', y: 45 }, title: '45%' }, 'pie'],
  [
    'PfChartDonutThreshold',
    PfChartDonutThreshold,
    { data: [{ x: 'Warning', y: 60 }], utilization: { x: 'Storage', y: 45 } },
    'pie',
  ],
  [
    'PfChartFunnel',
    PfChartFunnel,
    {
      data: [
        { x: 'Visits', y: 100 },
        { x: 'Sign ups', y: 60 },
      ],
      labels: true,
    },
    'funnel',
  ],
  ['PfChartGauge', PfChartGauge, { value: 40, title: '40%' }, 'gauge'],
  [
    'PfChartGraph',
    PfChartGraph,
    {
      nodes: [
        { name: 'a', category: 'x' },
        { name: 'b', category: 'y' },
      ],
      links: [{ source: 'a', target: 'b' }],
      labels: true,
    },
    'graph',
  ],
  [
    'PfChartCalendar',
    PfChartCalendar,
    {
      data: [
        { date: '2026-01-01', value: 1 },
        { date: '2026-01-02', value: 5 },
      ],
      range: '2026-01',
    },
    'heatmap',
  ],
  [
    'PfChartHeatmap',
    PfChartHeatmap,
    {
      data: [
        { x: 'Mon', y: 'Morning', value: 1 },
        { x: 'Tue', y: 'Morning', value: 5 },
      ],
      legendPosition: 'bottom',
    },
    'heatmap',
  ],
  [
    'PfChartLines',
    PfChartLines,
    {
      map: 'squares',
      geoJson: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: { name: 'A' },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [0, 0],
                  [1, 0],
                  [1, 1],
                  [0, 0],
                ],
              ],
            },
          },
        ],
      },
      series: [
        {
          name: 'Links',
          data: [
            {
              coords: [
                [0, 0],
                [1, 1],
              ],
            },
          ],
        },
      ],
      points: true,
    },
    'lines',
  ],
  [
    'PfChartMap',
    PfChartMap,
    {
      map: 'squares',
      geoJson: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: { name: 'A' },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [0, 0],
                  [1, 0],
                  [1, 1],
                  [0, 0],
                ],
              ],
            },
          },
        ],
      },
      data: [{ name: 'A', value: 1 }],
    },
    'map',
  ],
  [
    'PfChartParallel',
    PfChartParallel,
    { dimensions: ['CPU', 'Memory'], series: [{ name: 'Node 1', data: [[60, 70]] }] },
    'parallel',
  ],
  [
    'PfChartRadar',
    PfChartRadar,
    { indicators: ['CPU', 'Memory', 'Disk'], series: [{ name: 'Node 1', data: [60, 70, 30] }] },
    'radar',
  ],
  [
    'PfChartBullet',
    PfChartBullet,
    { primarySegmentedMeasureData: [{ name: 'Measure', y: 60 }], qualitativeRangeData: [{ name: 'Range', y: 75 }] },
    'bar',
  ],
  ['PfChartBoxPlot', PfChartBoxPlot, { series: [{ name: 'Cats', data: [{ x: '2015', y: [1, 2, 3, 5] }] }] }, 'boxplot'],
  [
    'PfChartCandlestick',
    PfChartCandlestick,
    { name: 'Stock', data: [{ x: 'Mon', open: 20, close: 34, low: 10, high: 38 }] },
    'candlestick',
  ],
  [
    'PfChartChord',
    PfChartChord,
    { nodes: [{ name: 'a' }, { name: 'b' }], links: [{ source: 'a', target: 'b', value: 1 }], labels: true },
    'chord',
  ],
  [
    'PfChartTreemap',
    PfChartTreemap,
    { data: [{ name: 'Frontend', children: [{ name: 'Web', value: 40 }] }], drillDown: true },
    'treemap',
  ],
  [
    'PfChartSunburst',
    PfChartSunburst,
    { data: [{ name: 'Frontend', children: [{ name: 'Web', value: 40 }] }], drillDown: true },
    'sunburst',
  ],
  [
    'PfChartThemeRiver',
    PfChartThemeRiver,
    {
      series: [
        {
          name: 'Cats',
          data: [
            { x: '2026-01-01', y: 1 },
            { x: '2026-02-01', y: 2 },
          ],
        },
      ],
    },
    'themeRiver',
  ],
  [
    'PfChartTree',
    PfChartTree,
    { data: [{ name: 'Frontend', children: [{ name: 'Web' }] }], collapsible: true },
    'tree',
  ],
  [
    'PfChartSankey',
    PfChartSankey,
    { nodes: [{ name: 'a' }, { name: 'b' }], links: [{ source: 'a', target: 'b', value: 1 }] },
    'sankey',
  ],
] as [string, Component, Record<string, unknown>, string][])('%s', (name, component, props, type) => {
  it('renders the chart without extra setup', () => {
    const { wrapper, option } = mountWrapper(component, props);
    expect(wrapper.find('svg').exists()).toBe(true);
    expect(wrapper.attributes('data-ouia-component-type')).toBe(`PF/${name.replace(/^Pf/, '')}`);
    expect(option().series[0].type).toBe(type);
  });
});

describe('chart wrappers', () => {
  it('render an image labelled by the native aria attributes', () => {
    const { wrapper } = mountWrapper(PfChartBar, { series, patterns: true, 'aria-label': 'Pets' } as any);
    expect(wrapper.attributes('role')).toBe('img');
    expect(wrapper.attributes('aria-label')).toBe('Pets');
  });

  it('forward the theme color and size to PfCharts', () => {
    const { wrapper } = mountWrapper(PfChartBar, { series, themeColor: 'green' });
    expect(wrapper.findComponent(PfCharts).props()).toMatchObject({
      height: 200,
      width: 400,
      themeColor: 'green',
      legendTooltip: true,
      svgRenderer: true,
    });
  });

  it('update the chart when the props change', async () => {
    const { wrapper, option } = mountWrapper(PfChartLine, { series });
    await wrapper.setProps({ series: [{ name: 'Birds', data: [3, 4] }] });
    await nextTick();
    expect(option().series).toHaveLength(1);
    expect(option().series[0]).toMatchObject({ name: 'Birds', data: [3, 4] });
  });

  it('forward the chart events', async () => {
    const { wrapper, chart } = mountWrapper(PfChartPie, { data: [{ x: 'Cats', y: 35 }] });
    chart().trigger('legendselectchanged', { name: 'Cats' } as any);
    await nextTick();
    expect(wrapper.emitted('legendselectchanged')).toEqual([[{ name: 'Cats' }]]);
  });

  it('forward the brush selections', async () => {
    const { wrapper, chart } = mountWrapper(PfChartLine, { series, brush: true });
    chart().trigger('brushselected', { batch: [] } as any);
    await nextTick();
    expect(wrapper.emitted('brushselected')).toEqual([[{ batch: [] }]]);
  });

  it('draw the frames of a timeline, playing it unless the user prefers reduced motion', async () => {
    const timeline = [
      { name: '2025', series: [series[0]] },
      { name: '2026', series: [series[1]] },
    ];
    const { option } = mountWrapper(PfChartBar, { timeline, timelineAutoplay: true });
    expect(option().timeline[0]).toMatchObject({ autoPlay: true, data: ['2025', '2026'] });
    expect(option().series[0]).toMatchObject({ name: 'Cats', emphasis: { focus: 'series' } });

    // Switching frames keeps the axes of the base option, after the option is rebuilt on mount
    const paused = mountWrapper(PfChartBar, { timeline });
    await nextTick();
    paused.chart().dispatchAction({ type: 'timelineChange', currentIndex: 1 });
    expect(paused.option().series[0].name).toBe('Dogs');
    expect(paused.option().xAxis).toHaveLength(1);

    const matchMedia = vi.spyOn(window, 'matchMedia').mockImplementation(
      query =>
        ({
          matches: query === '(prefers-reduced-motion: reduce)',
          media: query,
          addEventListener: () => {},
          removeEventListener: () => {},
        }) as any,
    );
    try {
      expect(mountWrapper(PfChartBar, { timeline, timelineAutoplay: true }).option().timeline[0].autoPlay).toBe(false);
    } finally {
      matchMedia.mockRestore();
    }
  });

  it('draw the cartesian charts with zoom, toolbox, brush and on polar coordinates', () => {
    const { wrapper, option } = mountWrapper(PfChartArea, { series, zoomable: true, toolbox: true, brush: true });
    expect(wrapper.find('svg').exists()).toBe(true);
    expect(option().dataZoom).toHaveLength(2);
    expect(option().toolbox[0].feature).toMatchObject({ brush: {}, saveAsImage: {} });
    expect(mountWrapper(PfChartBar, { series, polar: true }).option().series[0].coordinateSystem).toBe('polar');
  });

  it('keep the bullet hover highlight disabled over the bar defaults', () => {
    const { option } = mountWrapper(PfChartBullet, { primarySegmentedMeasureData: [{ y: 60 }] });
    expect(option().series[0].emphasis.disabled).toBe(true);
  });

  it('use an item tooltip for bullets', () => {
    const { option } = mountWrapper(PfChartBullet, { primarySegmentedMeasureData: [{ name: 'Measure', y: 60 }] });
    expect(option().tooltip[0].trigger).toBe('item');
    expect(option().tooltip[0].formatter).toBeUndefined();
  });

  it('draw pictorial bars with the legend tooltip', () => {
    const { wrapper, option } = mountWrapper(PfChartBar, { series, pictorial: 'circle', pictorialRepeat: true });
    expect(wrapper.find('svg').exists()).toBe(true);
    expect(option().series.map((serie: any) => serie.type)).toEqual(['pictorialBar', 'pictorialBar']);
    expect(option().tooltip[0]).toMatchObject({ trigger: 'axis' });
    expect(option().tooltip[0].formatter).toBeTypeOf('function');
  });

  it('draw scatter ripples unless the user prefers reduced motion', () => {
    expect(mountWrapper(PfChartScatter, { series, effect: true }).option().series[0].type).toBe('effectScatter');

    const matchMedia = vi.spyOn(window, 'matchMedia').mockImplementation(
      query =>
        ({
          matches: query === '(prefers-reduced-motion: reduce)',
          media: query,
          addEventListener: () => {},
          removeEventListener: () => {},
        }) as any,
    );
    try {
      expect(mountWrapper(PfChartScatter, { series, effect: true }).option().series[0].type).toBe('scatter');
    } finally {
      matchMedia.mockRestore();
    }
  });

  it('register the GeoJSON of the map under its name', async () => {
    const { getMap } = await import('echarts/core');
    const square = [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 0],
    ];
    const geoJson = {
      type: 'FeatureCollection',
      features: [{ type: 'Feature', properties: { name: 'A' }, geometry: { type: 'Polygon', coordinates: [square] } }],
    };
    mountWrapper(PfChartMap, { map: 'registered-by-the-wrapper', geoJson });
    expect(getMap('registered-by-the-wrapper')).toBeTruthy();
  });

  it('use an item tooltip for bars when the option asks for it', () => {
    const { option } = mountWrapper(PfChartBar, { series, option: { tooltip: { trigger: 'item' } } });
    expect(option().tooltip[0].formatter).toBeUndefined();
  });

  it('recompute their colors when the theme of the page changes', async () => {
    const style = document.createElement('style');
    // happy-dom doesn't inherit custom properties, so descendants are matched explicitly
    style.textContent = '.dark, .dark * { --pf-v6-chart-donut--threshold--first--Color: #222222; }';
    document.head.append(style);
    const { option } = mountWrapper(PfChartDonutUtilization, { data: { y: 45 } });
    expect(option().series[0].data[1].itemStyle.color).toBe('#e0e0e0');
    document.documentElement.classList.add('dark');
    await vi.waitFor(() => expect(option().series[0].data[1].itemStyle.color).toBe('#222222'));
    document.documentElement.classList.remove('dark');
    style.remove();
  });

  it('accept the heatmap props as props, not attributes', () => {
    const { wrapper, option } = mountWrapper(PfChartHeatmap, {
      data: [{ x: 'Mon', y: 'Morning', value: 1 }],
      legendPosition: 'none',
      labels: true,
    });
    expect(wrapper.attributes('legend-position')).toBeUndefined();
    expect(option().visualMap[0].show).toBe(false);
  });

  it('draw the heatmap cells', async () => {
    const { wrapper } = mountWrapper(PfChartHeatmap, {
      data: [
        { x: 'Mon', y: 'Morning', value: 1 },
        { x: 'Tue', y: 'Morning', value: 5 },
      ],
      legendPosition: 'none',
    });
    // Cells are rendered asynchronously, and a failure there doesn't reject anything the test awaits
    await vi.waitFor(() =>
      expect(wrapper.findAll('path').filter(path => path.attributes('fill')?.startsWith('rgb(')).length).toBe(2),
    );
  });

  it('fill the radar polygons by default, each in its own color', async () => {
    const { wrapper, option } = mountWrapper(PfChartRadar, {
      indicators: ['CPU', 'Memory', 'Disk'],
      series: [
        { name: 'Node 1', data: [60, 70, 30] },
        { name: 'Node 2', data: [40, 30, 90] },
      ],
      legendPosition: 'none',
    });
    expect(option().series[0].data[0].areaStyle.opacity).toBe(0.3);
    await vi.waitFor(() => {
      const fills = wrapper
        .findAll('path')
        .map(path => path.attributes('fill'))
        .filter(fill => fill?.startsWith('rgb') || fill?.startsWith('#'));
      expect(new Set(fills).size).toBeGreaterThanOrEqual(2);
    });
  });

  it('update the heatmap scale', async () => {
    const { wrapper, option } = mountWrapper(PfChartHeatmap, {
      data: [
        { x: 'Mon', y: 'Morning', value: 1 },
        { x: 'Tue', y: 'Morning', value: 5 },
      ],
    });
    await wrapper.setProps({ max: 20 });
    await nextTick();
    expect(option().visualMap[0].max).toBe(20);
  });

  it('apply the user option over the generated one', () => {
    const { option } = mountWrapper(PfChartBar, { series, option: { yAxis: { max: 10 } } });
    expect(option().yAxis[0].max).toBe(10);
  });

  it('show the unused part of utilization donuts by default', () => {
    const { option } = mountWrapper(PfChartDonutUtilization, { data: { y: 45 } });
    expect(option().series[0].data.map((slice: any) => slice.name)).toEqual(['Used', 'Unused']);
  });

  it('draw bullets horizontally by default, with the theme colors', () => {
    const { option } = mountWrapper(PfChartBullet, { primarySegmentedMeasureData: [{ y: 60 }], themeColor: 'green' });
    expect(option().xAxis[0].type).toBe('value');
    expect(option().series[0].itemStyle.color).toBe('#63993d');
  });
});
