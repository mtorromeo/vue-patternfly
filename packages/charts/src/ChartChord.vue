<template>
  <pf-charts
    ref="chartsRef"
    v-bind="{ ...chartsProps, ...ouiaProps }"
    :option="chartOption"
    @click="emit('click', $event)"
    @datazoom="emit('datazoom', $event)"
    @legendselectchanged="emit('legendselectchanged', $event)"
  />
</template>

<script lang="ts">
import { computed, useTemplateRef, type HTMLAttributes } from 'vue';
import { use } from 'echarts/core';
import * as charts from 'echarts/charts';
import { AriaComponent, LegendComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import { devWarn } from '@vue-patternfly/core/helpers/dev';
import type { ChartClickEvent, ChartDataZoomEvent, ChartLegendSelectChangedEvent, ChartWrapperProps } from './common';
import { getChordOption, type ChartChordLink, type ChartChordNode } from './builders/chord';
import PfCharts from './Charts.vue';
import { useChartsProps, useThemeVersion } from './use';
import { withStyleSource } from './utils/styles';

// Chord series are new in ECharts 6: with ECharts 5 the export is missing and the chart stays empty
const ChordChart = (charts as Partial<typeof charts>).ChordChart;
use([
  AriaComponent,
  LegendComponent,
  ToolboxComponent,
  TooltipComponent,
  SVGRenderer,
  ...(ChordChart ? [ChordChart] : []),
]);

interface Props extends OUIAProps, ChartWrapperProps, /* @vue-ignore */ HTMLAttributes {
  /** The nodes, drawn as arcs of a circle */
  nodes?: ChartChordNode[];
  /** The flows between nodes, drawn as ribbons across the circle */
  links?: ChartChordLink[];
  /** Shows the name of each node outside the circle */
  labels?: boolean;
}
</script>

<script setup lang="ts">
defineOptions({
  name: 'PfChartChord',
});

const props = withDefaults(defineProps<Props>(), {
  legendTooltip: true,
  svgRenderer: true,
});

const emit = defineEmits<{
  /** Emitted when a chart element is clicked -- see https://echarts.apache.org/en/api.html#events.Mouse%20events */
  (name: 'click', params: ChartClickEvent): void;
  /** Emitted when a legend item is toggled -- see https://echarts.apache.org/en/api.html#events.legendselectchanged */
  (name: 'legendselectchanged', params: ChartLegendSelectChangedEvent): void;
  /** Emitted when the data zoom range changes -- see https://echarts.apache.org/en/api.html#events.datazoom */
  (name: 'datazoom', params: ChartDataZoomEvent): void;
}>();

const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
const chartsProps = useChartsProps(props);
const chartsRef = useTemplateRef('chartsRef');
const chartElement = (): Element | undefined => chartsRef.value?.$el;
const themeVersion = useThemeVersion(chartElement);
if (!ChordChart) {
  devWarn('PfChartChord needs ECharts 6 or later');
}
const chartOption = computed(() => {
  void themeVersion.value;
  return ChordChart ? withStyleSource(chartElement(), () => getChordOption(props)) : {};
});
</script>
