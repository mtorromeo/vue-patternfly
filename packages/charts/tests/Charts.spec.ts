import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import * as echarts from 'echarts/core';
import { LineChart, PieChart, SankeyChart } from 'echarts/charts';
import { DataZoomComponent, GridComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import PfCharts from '../src/Charts.vue';
import { getTheme } from '../src/utils/theme';

vi.mock('echarts/core', async importOriginal => {
  const original = await importOriginal<typeof import('echarts/core')>();
  return { ...original, init: vi.fn(original.init) };
});

echarts.use([
  DataZoomComponent,
  GridComponent,
  LineChart,
  PieChart,
  SankeyChart,
  SVGRenderer,
  TitleComponent,
  TooltipComponent,
]);

const init = vi.mocked(echarts.init);

const lineOption = {
  xAxis: { type: 'category' as const, data: ['2015', '2016'] },
  yAxis: { type: 'value' as const },
  series: [{ name: 'Cats', type: 'line' as const, data: [1, 2] }],
};

function mountChart(props: Record<string, unknown> = {}) {
  return mount(PfCharts, { props: { height: 200, width: 400, option: lineOption, ...props }, attachTo: document.body });
}

function chartOf(wrapper: ReturnType<typeof mountChart>) {
  return (wrapper.vm as any).chart as echarts.ECharts;
}

beforeEach(() => {
  init.mockClear();
});

describe('PfCharts', () => {
  it('renders an SVG chart in the container', () => {
    const wrapper = mountChart();
    expect(wrapper.classes()).toContain('pf-v6-c-chart');
    expect(wrapper.attributes('style')).toContain('height: 200px; width: 400px;');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/Charts');
    expect(wrapper.find('svg').exists()).toBe(true);
    expect(init).toHaveBeenCalledWith(wrapper.element, expect.any(Object), {
      height: 200,
      renderer: 'svg',
      width: 400,
    });
  });

  it('uses the canvas renderer when svgRenderer is false', () => {
    mountChart({ svgRenderer: false });
    expect(init.mock.calls[0][2]).toMatchObject({ renderer: 'canvas' });
  });

  it('applies the series defaults and the legend tooltip', () => {
    const option: any = chartOf(mountChart()).getOption();
    expect(option.series[0]).toMatchObject({ type: 'line', showSymbol: false, emphasis: { focus: 'adjacency' } });
    expect(option.tooltip[0]).toMatchObject({ trigger: 'axis', confine: true });
    expect(option.tooltip[0].formatter).toBeTypeOf('function');
  });

  it('draws the series symbol in the legend tooltip', () => {
    const option: any = chartOf(
      mountChart({ option: { ...lineOption, series: [{ ...lineOption.series[0], symbol: 'circle' }] } }),
    ).getOption();
    const html = option.tooltip[0].formatter([
      { name: '2015', seriesIndex: 0, seriesName: 'Cats', value: 1, color: 'red', dataIndex: 0 },
    ]);
    expect(html).toContain('2015');
    expect(html).toContain('Cats');
    expect(html).toContain('M18.1 7A5.6'); // The circle path
    expect(html).toContain('<strong style="float:right; margin-left: 20px;">1</strong>');
  });

  it('keeps the user tooltip without the legend tooltip', () => {
    const option: any = chartOf(
      mountChart({ legendTooltip: false, option: { ...lineOption, tooltip: { trigger: 'item' } } }),
    ).getOption();
    expect(option.tooltip[0].trigger).toBe('item');
    expect(option.tooltip[0].formatter).toBeUndefined();
  });

  it('uses an item tooltip for other series', () => {
    const option: any = chartOf(
      mountChart({ option: { series: [{ type: 'pie', data: [{ name: 'a', value: 1 }] }] } }),
    ).getOption();
    expect(option.tooltip[0]).toMatchObject({ trigger: 'item', confine: true });
  });

  it('uses the sankey tooltip with its labels', () => {
    const option: any = chartOf(
      mountChart({
        option: {
          series: [
            { type: 'sankey', data: [{ name: 'a' }, { name: 'b' }], links: [{ source: 'a', target: 'b', value: 1 }] },
          ],
          tooltip: { sourceLabel: 'From', destinationLabel: 'To' },
        },
      }),
    ).getOption();
    const html = option.tooltip[0].formatter({ data: { source: 'a', target: 'b' }, seriesIndex: 0, value: 1 });
    expect(html).toContain('From');
    expect(html).toContain('To');
  });

  it('removes interactions for the skeleton', () => {
    const option: any = chartOf(mountChart({ themeColor: 'skeleton' })).getOption();
    expect(option.series[0].emphasis.disabled).toBe(true);
    expect(option.tooltip).toEqual([]);
  });

  it('updates the option without recreating the chart', async () => {
    const wrapper = mountChart();
    const chart = chartOf(wrapper);
    await wrapper.setProps({ option: { ...lineOption, series: [{ name: 'Dogs', type: 'line', data: [3, 4] }] } });
    expect(init).toHaveBeenCalledTimes(1);
    expect((chart.getOption() as any).series[0]).toMatchObject({ name: 'Dogs', data: [3, 4] });
  });

  it('removes the components and series missing from the updated option', async () => {
    const wrapper = mountChart({
      option: {
        ...lineOption,
        title: { text: 'Pets' },
        series: [...lineOption.series, { name: 'Dogs', type: 'line', data: [3, 4] }],
      },
    });
    await wrapper.setProps({ option: lineOption });
    const option: any = chartOf(wrapper).getOption();
    expect(option.title).toEqual([]);
    expect(option.series.map((serie: any) => serie.name)).toEqual(['Cats']);
  });

  it('ignores option keys of unregistered components on update', async () => {
    const wrapper = mountChart({ option: { ...lineOption, legend: {} } });
    await wrapper.setProps({ option: lineOption });
    expect((chartOf(wrapper).getOption() as any).series).toHaveLength(1);
  });

  it('keeps the zoomed range when the option is updated', async () => {
    const zoomOption = { ...lineOption, dataZoom: [{ type: 'inside' as const }, { type: 'slider' as const }] };
    const wrapper = mountChart({ option: zoomOption });
    const chart = chartOf(wrapper);
    chart.dispatchAction({ type: 'dataZoom', start: 20, end: 60 });
    // e.g. an inline option rebuilt when the parent renders again
    await wrapper.setProps({ option: { ...zoomOption, dataZoom: [{ type: 'inside' }, { type: 'slider' }] } });
    expect((chart.getOption() as any).dataZoom.map(({ start, end }: any) => [start, end])).toEqual([
      [20, 60],
      [20, 60],
    ]);
  });

  it('applies the zoomed range of the updated option', async () => {
    const zoomOption = { ...lineOption, dataZoom: [{ type: 'inside' as const }] };
    const wrapper = mountChart({ option: zoomOption });
    chartOf(wrapper).dispatchAction({ type: 'dataZoom', start: 20, end: 60 });
    await wrapper.setProps({ option: { ...zoomOption, dataZoom: [{ type: 'inside', start: 0, end: 50 }] } });
    expect((chartOf(wrapper).getOption() as any).dataZoom[0]).toMatchObject({ start: 0, end: 50 });
  });

  it('keeps the series ids across updates, so changes are animated', async () => {
    const wrapper = mountChart();
    await wrapper.setProps({ option: { ...lineOption, series: [{ ...lineOption.series[0], data: [5, 6] }] } });
    expect((chartOf(wrapper).getOption() as any).series[0]).toMatchObject({ id: 'pf-series-0', data: [5, 6] });
  });

  it('recreates the chart when the theme color changes', async () => {
    const wrapper = mountChart({ themeColor: 'blue' });
    const chart = chartOf(wrapper);
    await wrapper.setProps({ themeColor: 'green' });
    expect(init).toHaveBeenCalledTimes(2);
    expect(init.mock.calls[1][1]).toEqual(getTheme('green'));
    expect(chart.isDisposed()).toBe(true);
    expect(chartOf(wrapper).isDisposed()).toBeFalsy();
  });

  it('uses a custom theme', () => {
    const theme = { color: ['#000'] };
    mountChart({ theme });
    expect(init.mock.calls[0][1]).toEqual(theme);
  });

  it('resizes when the size changes', async () => {
    const wrapper = mountChart();
    await wrapper.setProps({ width: 300 });
    expect(chartOf(wrapper).getWidth()).toBe(300);
  });

  describe('theme changes', () => {
    let style: HTMLStyleElement;

    beforeEach(() => {
      style = document.createElement('style');
      // happy-dom doesn't inherit custom properties, so descendants are matched explicitly
      style.textContent = '.dark, .dark * { --pf-v6-chart-echarts-BackgroundColor: #111111; }';
      document.head.append(style);
    });

    afterEach(() => {
      style.remove();
      document.documentElement.className = '';
    });

    it('recreates the chart with the new theme when the theme of the page changes', async () => {
      const wrapper = mountChart();
      expect(init.mock.calls[0][1]).not.toMatchObject({ backgroundColor: '#111111' });
      document.documentElement.classList.add('dark');
      await vi.waitFor(() => expect(init).toHaveBeenCalledTimes(2));
      expect(init.mock.calls[1][1]).toMatchObject({ backgroundColor: '#111111' });
      wrapper.unmount();
    });

    it('ignores class changes that do not change the theme', async () => {
      const wrapper = mountChart();
      document.documentElement.classList.add('unrelated');
      await new Promise(resolve => setTimeout(resolve, 10));
      expect(init).toHaveBeenCalledTimes(1);
      wrapper.unmount();
    });

    it('reads the chart variables overridden on the part of the page it is in', () => {
      const parent = document.createElement('div');
      parent.className = 'dark';
      document.body.append(parent);
      const wrapper = mount(PfCharts, { props: { height: 200, width: 400, option: lineOption }, attachTo: parent });
      expect(init.mock.calls[0][1]).toMatchObject({ backgroundColor: '#111111' });
      wrapper.unmount();
    });
  });

  it('forwards chart events', async () => {
    const wrapper = mountChart();
    chartOf(wrapper).trigger('click', { name: 'Cats' } as any);
    await nextTick();
    expect(wrapper.emitted('click')).toEqual([[{ name: 'Cats' }]]);
  });

  it('disposes the chart when unmounted', () => {
    const wrapper = mountChart();
    const chart = chartOf(wrapper);
    wrapper.unmount();
    expect(chart.isDisposed()).toBe(true);
  });
});
