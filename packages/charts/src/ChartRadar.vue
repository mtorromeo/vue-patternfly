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
import { RadarChart } from 'echarts/charts';
import { AriaComponent, LegendComponent, RadarComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import type { ChartClickEvent, ChartDataZoomEvent, ChartLegendSelectChangedEvent, ChartWrapperProps } from './common';
import { getRadarOption, type ChartRadarIndicator, type ChartRadarSeries } from './builders/radar';
import PfCharts from './Charts.vue';
import { useChartsProps, useThemeVersion } from './use';
import { withStyleSource } from './utils/styles';

use([RadarChart, AriaComponent, LegendComponent, RadarComponent, ToolboxComponent, TooltipComponent, SVGRenderer]);

interface Props extends OUIAProps, ChartWrapperProps, /* @vue-ignore */ HTMLAttributes {
  /** The axes, as names or with their range */
  indicators?: (string | ChartRadarIndicator)[];
  /** The series to draw, each as a polygon with one value per indicator */
  series?: ChartRadarSeries[];
  /** Shape of the grid */
  shape?: 'polygon' | 'circle';
  /** Fills the area of each series */
  filled?: boolean;
  /** Number of grid levels */
  levels?: number;
}
</script>

<script setup lang="ts">
defineOptions({
  name: 'PfChartRadar',
});

const props = withDefaults(defineProps<Props>(), {
  legendTooltip: true,
  svgRenderer: true,
  filled: true,
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
const chartOption = computed(() => {
  void themeVersion.value;
  return withStyleSource(chartElement(), () => getRadarOption(props));
});
</script>
