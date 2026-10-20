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
import { PieChart } from 'echarts/charts';
import { AriaComponent, LegendComponent, TitleComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import type {
  ChartClickEvent,
  ChartDataZoomEvent,
  ChartDatum,
  ChartLegendSelectChangedEvent,
  ChartWrapperProps,
} from './common';
import { getDonutThresholdOption, type DonutThreshold } from './builders/pie';
import PfCharts from './Charts.vue';
import { useChartsProps, useThemeVersion } from './use';
import { withStyleSource } from './utils/styles';

use([PieChart, AriaComponent, LegendComponent, TitleComponent, ToolboxComponent, TooltipComponent, SVGRenderer]);

interface Props extends OUIAProps, ChartWrapperProps, /* @vue-ignore */ HTMLAttributes {
  /** Threshold ranges drawn around the utilization, each `y` being the percentage where the range ends */
  data?: ChartDatum[];
  /** Reverses the order of the threshold colors and of the utilization thresholds */
  invert?: boolean;
  /** The utilization drawn inside the thresholds, as a percentage (`y`) and an optional name (`x`) */
  utilization?: ChartDatum;
  /** Changes the color of the utilization once it reaches each threshold */
  thresholds?: DonutThreshold[];
  /** Angle between the threshold ranges, in degrees */
  padAngle?: number;
  /** Title shown in the center of the donut */
  title?: string;
  /** Subtitle shown below the title, or next to the donut */
  subTitle?: string;
  /** Position of the subtitle */
  subTitlePosition?: 'center' | 'bottom' | 'right';
}
</script>

<script setup lang="ts">
defineOptions({
  name: 'PfChartDonutThreshold',
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
const chartOption = computed(() => {
  void themeVersion.value;
  return withStyleSource(chartElement(), () => getDonutThresholdOption(props));
});
</script>
