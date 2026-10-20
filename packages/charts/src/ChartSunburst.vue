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
import { SunburstChart } from 'echarts/charts';
import { AriaComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { useOUIAProps, type OUIAProps } from '@vue-patternfly/core/helpers/ouia';
import type {
  ChartClickEvent,
  ChartDataZoomEvent,
  ChartHierarchicalDatum,
  ChartLegendSelectChangedEvent,
  ChartsBaseProps,
  ChartsOption,
} from './common';
import { getSunburstOption } from './builders/sunburst';
import PfCharts from './Charts.vue';
import { useChartsProps, useThemeVersion } from './use';
import { withStyleSource } from './utils/styles';
import { getTheme } from './utils/theme';

use([SunburstChart, AriaComponent, ToolboxComponent, TooltipComponent, SVGRenderer]);

interface Props extends OUIAProps, ChartsBaseProps, /* @vue-ignore */ HTMLAttributes {
  /** The nodes to draw from the center outwards, nested through their `children` */
  data?: ChartHierarchicalDatum[];
  /** Series name, shown in the tooltip */
  name?: string;
  /** Makes a node the new center when it is clicked; clicking the center goes back to its parent */
  drillDown?: boolean;
  /** Applies decal patterns to the data, in addition to colors */
  patterns?: boolean;
  /** Shows buttons to save the chart as an image and to restore it */
  toolbox?: boolean;
  /** ECharts option deep merged over the generated option */
  option?: ChartsOption;
}
</script>

<script setup lang="ts">
defineOptions({
  name: 'PfChartSunburst',
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
    getSunburstOption(props, (props.theme ?? getTheme(props.themeColor)).color),
  );
});
</script>
