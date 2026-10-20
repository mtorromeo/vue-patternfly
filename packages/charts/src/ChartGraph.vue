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
import { GraphChart } from 'echarts/charts';
import { AriaComponent, LegendComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import type { ChartClickEvent, ChartDataZoomEvent, ChartLegendSelectChangedEvent, ChartWrapperProps } from './common';
import { getGraphOption, type ChartGraphLink, type ChartGraphNode } from './builders/graph';
import PfCharts from './Charts.vue';
import { useChartsProps, useThemeVersion } from './use';
import { withStyleSource } from './utils/styles';

use([GraphChart, AriaComponent, LegendComponent, ToolboxComponent, TooltipComponent, SVGRenderer]);

interface Props extends OUIAProps, ChartWrapperProps, /* @vue-ignore */ HTMLAttributes {
  /** The nodes */
  nodes?: ChartGraphNode[];
  /** The links between nodes */
  links?: ChartGraphLink[];
  /**
   * Placement of the nodes: `force` simulates links pulling nodes together while nodes push each other away, `circular`
   * puts them on a circle and `none` places them at their `x` and `y`
   */
  layout?: 'force' | 'circular' | 'none';
  /** Draws an arrow at the target end of each link */
  directed?: boolean;
  /** Shows the name of each node next to it */
  labels?: boolean;
}
</script>

<script setup lang="ts">
defineOptions({
  name: 'PfChartGraph',
});

const props = withDefaults(defineProps<Props>(), {
  legendTooltip: true,
  layout: 'force',
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
  return withStyleSource(chartElement(), () => getGraphOption(props));
});
</script>
