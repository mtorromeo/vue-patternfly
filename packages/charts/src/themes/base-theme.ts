import chart_echarts_bar_item_style_BarBorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_bar_item_style_BarBorderWidth';
import chart_echarts_boxplot_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_boxplot_item_style_BorderWidth';
import chart_echarts_candlestick_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_candlestick_item_style_BorderWidth';
import chart_echarts_datazoom_HandleSize from '@patternfly/react-tokens/dist/esm/chart_echarts_datazoom_HandleSize';
import chart_echarts_funnel_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_funnel_item_style_BorderWidth';
import chart_echarts_gauge_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_gauge_item_style_BorderWidth';
import chart_echarts_geo_emphasis_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_geo_emphasis_item_style_BorderWidth';
import chart_echarts_geo_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_geo_item_style_BorderWidth';
import chart_echarts_global_axis_BoundaryGap from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_BoundaryGap';
import chart_echarts_global_axis_axis_label_Show from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_axis_label_Show';
import chart_echarts_global_axis_axis_line_Show from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_axis_line_Show';
import chart_echarts_global_axis_axis_tick_Show from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_axis_tick_Show';
import chart_echarts_global_axis_split_area_Show from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_split_area_Show';
import chart_echarts_global_axis_split_line_Show from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_split_line_Show';
import chart_echarts_graph_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_graph_item_style_BorderWidth';
import chart_echarts_graph_line_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_graph_line_style_BorderWidth';
import chart_echarts_graph_Smooth from '@patternfly/react-tokens/dist/esm/chart_echarts_graph_Smooth';
import chart_echarts_graph_Symbol from '@patternfly/react-tokens/dist/esm/chart_echarts_graph_Symbol';
import chart_echarts_graph_SymbolSize from '@patternfly/react-tokens/dist/esm/chart_echarts_graph_SymbolSize';
import chart_echarts_line_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_line_item_style_BorderWidth';
import chart_echarts_line_line_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_line_line_style_BorderWidth';
import chart_echarts_line_Smooth from '@patternfly/react-tokens/dist/esm/chart_echarts_line_Smooth';
import chart_echarts_line_Symbol from '@patternfly/react-tokens/dist/esm/chart_echarts_line_Symbol';
import chart_echarts_line_SymbolSize from '@patternfly/react-tokens/dist/esm/chart_echarts_line_SymbolSize';
import chart_echarts_map_emphasis_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_map_emphasis_item_style_BorderWidth';
import chart_echarts_map_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_map_item_style_BorderWidth';
import chart_echarts_parallel_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_parallel_item_style_BorderWidth';
import chart_echarts_pie_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_pie_item_style_BorderWidth';
import chart_echarts_radar_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_radar_item_style_BorderWidth';
import chart_echarts_radar_line_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_radar_line_style_BorderWidth';
import chart_echarts_radar_Smooth from '@patternfly/react-tokens/dist/esm/chart_echarts_radar_Smooth';
import chart_echarts_radar_Symbol from '@patternfly/react-tokens/dist/esm/chart_echarts_radar_Symbol';
import chart_echarts_radar_SymbolSize from '@patternfly/react-tokens/dist/esm/chart_echarts_radar_SymbolSize';
import chart_echarts_sankey_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_sankey_item_style_BorderWidth';
import chart_echarts_scatter_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_scatter_item_style_BorderWidth';
import chart_echarts_timeline_control_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_timeline_control_style_BorderWidth';
import chart_echarts_timeline_emphasis_control_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_timeline_emphasis_control_style_BorderWidth';
import chart_echarts_timeline_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_timeline_item_style_BorderWidth';
import chart_echarts_timeline_line_style_Width from '@patternfly/react-tokens/dist/esm/chart_echarts_timeline_line_style_Width';
import chart_echarts_tooltip_axis_pointer_cross_style_Width from '@patternfly/react-tokens/dist/esm/chart_echarts_tooltip_axis_pointer_cross_style_Width';
import chart_echarts_tooltip_axis_pointer_line_style_Width from '@patternfly/react-tokens/dist/esm/chart_echarts_tooltip_axis_pointer_line_style_Width';
import chart_global_FontFamily from '@patternfly/react-tokens/dist/esm/chart_global_FontFamily';
import chart_global_FontSize_sm from '@patternfly/react-tokens/dist/esm/chart_global_FontSize_sm';

import type { ThemeDefinition } from './Theme';
import { getComputedStyleBoolean, getComputedStyleNumber, getComputedStyleValue } from '../utils/styles';

const unquote = (value: unknown) => String(value).replace(/^['"]|['"]$/g, '');

/**
 * Base theme containing EChart properties only
 *
 * @private Not intended as public API and subject to change
 */
export const BaseTheme = (): ThemeDefinition => {
  const textProps = {
    // The resolved font, rather than the CSS variable, so ECharts can measure text (e.g. to lay out legends)
    fontFamily: getComputedStyleValue(chart_global_FontFamily).replace(/"/g, "'"), // Well-formed XML
    fontSize: chart_global_FontSize_sm.value,
  };

  const axisProps = {
    boundaryGap: getComputedStyleBoolean(chart_echarts_global_axis_BoundaryGap),
    axisLabel: {
      ...textProps,
      show: getComputedStyleBoolean(chart_echarts_global_axis_axis_label_Show),
    },
    axisLine: {
      lineStyle: {},
      show: getComputedStyleBoolean(chart_echarts_global_axis_axis_line_Show),
    },
    axisTick: {
      lineStyle: {},
      show: getComputedStyleBoolean(chart_echarts_global_axis_axis_tick_Show),
    },
    splitArea: {
      areaStyle: {},
      show: getComputedStyleBoolean(chart_echarts_global_axis_split_area_Show),
    },
    splitLine: {
      lineStyle: {},
      show: getComputedStyleBoolean(chart_echarts_global_axis_split_line_Show), // Grid
    },
  };

  return {
    bar: {
      itemStyle: {
        barBorderWidth: getComputedStyleNumber(chart_echarts_bar_item_style_BarBorderWidth),
      },
    },
    boxplot: {
      itemStyle: {
        borderWidth: getComputedStyleNumber(chart_echarts_boxplot_item_style_BorderWidth),
      },
    },
    candlestick: {
      itemStyle: {
        borderWidth: getComputedStyleNumber(chart_echarts_candlestick_item_style_BorderWidth),
      },
    },
    categoryAxis: { ...axisProps },
    dataZoom: {
      handleSize: getComputedStyleValue(chart_echarts_datazoom_HandleSize),
      textStyle: { ...textProps },
    },
    funnel: {
      itemStyle: {
        borderWidth: getComputedStyleNumber(chart_echarts_funnel_item_style_BorderWidth),
      },
    },
    gauge: {
      itemStyle: {
        borderWidth: getComputedStyleNumber(chart_echarts_gauge_item_style_BorderWidth),
      },
    },
    geo: {
      emphasis: {
        itemStyle: {
          borderWidth: getComputedStyleNumber(chart_echarts_geo_emphasis_item_style_BorderWidth),
        },
        label: {},
      },
      itemStyle: {
        borderWidth: getComputedStyleNumber(chart_echarts_geo_item_style_BorderWidth),
      },
      label: {},
    },
    graph: {
      itemStyle: {
        borderWidth: getComputedStyleNumber(chart_echarts_graph_item_style_BorderWidth),
      },
      label: {},
      lineStyle: {
        width: getComputedStyleNumber(chart_echarts_graph_line_style_BorderWidth),
      },
      smooth: getComputedStyleBoolean(chart_echarts_graph_Smooth),
      symbolSize: getComputedStyleNumber(chart_echarts_graph_SymbolSize),
      symbol: unquote(getComputedStyleValue(chart_echarts_graph_Symbol)), // The token values are quoted (e.g. 'square')
    },
    label: {
      ...textProps,
    },
    legend: {
      textStyle: { ...textProps },
    },
    line: {
      itemStyle: {
        borderWidth: getComputedStyleNumber(chart_echarts_line_item_style_BorderWidth),
      },
      lineStyle: {
        width: getComputedStyleNumber(chart_echarts_line_line_style_BorderWidth),
      },
      smooth: getComputedStyleBoolean(chart_echarts_line_Smooth),
      symbolSize: getComputedStyleNumber(chart_echarts_line_SymbolSize),
      symbol: unquote(getComputedStyleValue(chart_echarts_line_Symbol)), // The token values are quoted (e.g. 'square')
    },
    logAxis: { ...axisProps },
    map: {
      emphasis: {
        itemStyle: {
          borderWidth: getComputedStyleNumber(chart_echarts_map_emphasis_item_style_BorderWidth),
        },
        label: {},
      },
      itemStyle: {
        borderWidth: getComputedStyleNumber(chart_echarts_map_item_style_BorderWidth),
      },
      label: {
        label: {},
      },
    },
    markPoint: {
      emphasis: {
        label: {},
      },
      label: {},
    },
    parallel: {
      itemStyle: {
        borderWidth: getComputedStyleNumber(chart_echarts_parallel_item_style_BorderWidth),
      },
    },
    pie: {
      itemStyle: {
        borderWidth: getComputedStyleNumber(chart_echarts_pie_item_style_BorderWidth),
      },
    },
    radar: {
      itemStyle: {
        borderWidth: getComputedStyleNumber(chart_echarts_radar_item_style_BorderWidth),
      },
      lineStyle: {
        width: getComputedStyleNumber(chart_echarts_radar_line_style_BorderWidth),
      },
      smooth: getComputedStyleBoolean(chart_echarts_radar_Smooth),
      symbolSize: getComputedStyleNumber(chart_echarts_radar_SymbolSize),
      symbol: unquote(getComputedStyleValue(chart_echarts_radar_Symbol)), // The token values are quoted (e.g. 'square')
    },
    sankey: {
      itemStyle: {
        borderWidth: getComputedStyleNumber(chart_echarts_sankey_item_style_BorderWidth),
      },
    },
    scatter: {
      itemStyle: {
        borderWidth: getComputedStyleNumber(chart_echarts_scatter_item_style_BorderWidth),
      },
    },
    textStyle: { ...textProps },
    timeAxis: { ...axisProps },
    timeline: {
      emphasis: {
        controlStyle: {
          borderWidth: getComputedStyleNumber(chart_echarts_timeline_emphasis_control_style_BorderWidth),
        },
        itemStyle: {},
        label: {},
      },
      checkpointStyle: {},
      controlStyle: {
        borderWidth: getComputedStyleNumber(chart_echarts_timeline_control_style_BorderWidth),
      },
      itemStyle: {
        borderWidth: getComputedStyleNumber(chart_echarts_timeline_item_style_BorderWidth),
      },
      label: {},
      lineStyle: {
        width: getComputedStyleNumber(chart_echarts_timeline_line_style_Width),
      },
    },
    title: {
      subtextStyle: { ...textProps },
      textStyle: { ...textProps },
    },
    toolbox: {
      emphasis: {
        iconStyle: {},
      },
      iconStyle: {},
    },
    tooltip: {
      axisPointer: {
        crossStyle: {
          width: getComputedStyleNumber(chart_echarts_tooltip_axis_pointer_cross_style_Width),
        },
        lineStyle: {
          width: getComputedStyleNumber(chart_echarts_tooltip_axis_pointer_line_style_Width),
        },
      },
    },
    valueAxis: { ...axisProps },
    visualMap: {},
  };
};
