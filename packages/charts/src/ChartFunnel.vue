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
import { FunnelChart } from 'echarts/charts';
import { AriaComponent, LegendComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import type {
  ChartClickEvent,
  ChartDataZoomEvent,
  ChartDatum,
  ChartLegendSelectChangedEvent,
  ChartWrapperProps,
} from './common';
import { getFunnelOption } from './builders/funnel';
import PfCharts from './Charts.vue';
import { useChartsProps, useThemeVersion } from './use';
import { withStyleSource } from './utils/styles';
import { getTheme } from './utils/theme';

use([FunnelChart, AriaComponent, LegendComponent, ToolboxComponent, TooltipComponent, SVGRenderer]);

interface Props extends OUIAProps, ChartWrapperProps, /* @vue-ignore */ HTMLAttributes {
  /** The stages: `y` is the value and `x` (or `name`) the label */
  data?: ChartDatum[];
  /** Order of the stages; `none` keeps the order of the data */
  sort?: 'descending' | 'ascending' | 'none';
  /** Draws the funnel top to bottom (default) or left to right */
  orient?: 'vertical' | 'horizontal';
  /** Space between the stages, in pixels */
  gap?: number;
  /** Shows the name and value of each stage inside it */
  labels?: boolean;
}
</script>

<script setup lang="ts">
defineOptions({
  name: 'PfChartFunnel',
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
  return withStyleSource(chartElement(), () =>
    getFunnelOption(props, (props.theme ?? getTheme(props.themeColor)).color),
  );
});
</script>
