import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import type { ECharts } from 'echarts/core';

// ECharts 5 has no chord series: reading the missing export of the module gives undefined
vi.mock('echarts/charts', async importOriginal => ({
  ...(await importOriginal<typeof import('echarts/charts')>()),
  ChordChart: undefined,
}));

describe('PfChartChord with ECharts 5', () => {
  it('draws nothing and warns', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { default: PfChartChord } = await import('../src/ChartChord.vue');
    const { default: PfCharts } = await import('../src/Charts.vue');
    const wrapper = mount(PfChartChord, {
      props: { height: 200, width: 400, nodes: [{ name: 'a' }], links: [] },
      attachTo: document.body,
    });
    const chart = (wrapper.findComponent(PfCharts).vm as any).chart as ECharts;
    expect((chart.getOption().series as unknown[] | undefined) ?? []).toEqual([]);
    expect(warn).toHaveBeenCalledWith('PfChartChord needs ECharts 6 or later');
    warn.mockRestore();
  });
});
