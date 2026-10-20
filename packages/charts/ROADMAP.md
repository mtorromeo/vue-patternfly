# @vue-patternfly/charts roadmap

`@vue-patternfly/charts` mirrors `@patternfly/react-charts`, but uses Apache ECharts only: the Victory based charts of react-charts are rebuilt on ECharts. This file records how each react-charts chart maps to ECharts, and the plan for the ECharts charts that are not wrapped yet.

Every chart can already be drawn with `PfCharts` and a raw ECharts option: a wrapper adds PatternFly defaults, simple props and documentation on top.

## Coverage of react-charts

| react-charts | @vue-patternfly/charts | Match |
|---|---|---|
| `Charts` (echarts) | `PfCharts` | Exact |
| Line, Sankey (echarts) | `PfCharts` series defaults, `PfChartLine`, `PfChartSankey` | Exact |
| `ChartArea` | `PfChartArea` (`line` series with `areaStyle`) | Exact |
| `ChartBar` | `PfChartBar`; ECharts pictorial bars with `pictorial` | Exact |
| `ChartLine` | `PfChartLine` | Exact |
| `ChartScatter` | `PfChartScatter`; points on lines and areas with `show-symbol`; ECharts ripples with `effect`, off when reduced motion is preferred | Exact |
| `ChartPie` | `PfChartPie` | Exact |
| `ChartDonut` | `PfChartDonut` (`pie` with an inner radius, title drawn by a transparent center pie) | Exact |
| `ChartDonutUtilization` | `PfChartDonutUtilization` | Exact |
| `ChartBoxPlot` | `PfChartBoxPlot` (quartiles computed like d3) | Partial: no per box labels, values are in the tooltip |
| `ChartStack`, `ChartGroup` | `stacked` prop, several `series` | Different API |
| `ChartThreshold` | `thresholds` prop of the cartesian wrappers | Different API |
| `ChartDonutThreshold` | `PfChartDonutThreshold` with a `utilization` prop instead of a child | Different API |
| Sparkline examples | `PfChartSparkline` | Different API (react has no component) |
| `ChartBullet` | `PfChartBullet` (overlapping bars and scatter markers) | **Partial: no native bullet chart in ECharts; no bullet groups** |
| `ChartAxis`, `ChartLabel`, `ChartPoint`, `ChartContainer` | Axis label props and ECharts option keys | Concept only |
| `ChartTooltip`, `ChartVoronoiContainer`, `ChartCursorContainer`, `ChartCursorTooltip`, `ChartLegendTooltip` | ECharts `tooltip` and `axisPointer`; legend tooltip ported from react | Exact |
| victory-zoom-container | `zoomable` prop of the cartesian and candlestick wrappers (ECharts `dataZoom`, wheel zoom only with Ctrl) | Exact |
| `ChartLegend` | `legend-position`, `legend-data`; interactive by default | Exact |
| Legend tooltips | `legend.tooltip` | **Partial: text only** |
| Legend links | `legendselectchanged` event | **No match: ECharts legend items can't be links**; the event can trigger navigation |
| Tooltip with embedded HTML | `tooltip.formatter` returning HTML | **Partial: no Vue components in tooltips** |
| Patterns (`hasPatterns`) | `patterns` prop (ECharts decals) | **Partial: decals don't look like PatternFly's SVG patterns** |
| Skeletons | `theme-color="skeleton"` | Exact |
| ResizeObserver | Built into `PfCharts` | Exact |
| — | `PfChartGauge` (ECharts `gauge`, styled like the donut utilization) | ECharts only: react-charts has no gauge |
| — | `PfChartHeatmap` (ECharts `heatmap` with a sequential scale of the theme color) | ECharts only: react-charts has no heatmap |
| — | `PfChartCalendar` (ECharts `heatmap` on a `calendar`, with the heatmap color scale and localized day and month names) | ECharts only: react-charts has no calendar |
| — | `PfChartMap` (ECharts `map` choropleth with the heatmap color scale, GeoJSON given with `geo-json` or registered) | ECharts only: react-charts has no map |
| — | `PfChartLines` (ECharts `lines` on a `geo` map, optionally curved, directed, with end points and moving symbols) | ECharts only: react-charts has no lines |
| — | `PfChartChord` (ECharts `chord`, nodes in the theme colors and the legend; **ECharts 6 only**, empty with a warning on ECharts 5) | ECharts only: react-charts has no chord |
| — | `PfChartRadar` (ECharts `radar`, one polygon per series) | ECharts only: react-charts has no radar |
| — | `PfChartFunnel` (ECharts `funnel`, labels contrasting with each stage) | ECharts only: react-charts has no funnel |
| — | `PfChartCandlestick` (ECharts `candlestick`, rising and falling candles in the success and danger colors) | ECharts only: react-charts has no candlestick |
| — | `PfChartTreemap` (ECharts `treemap`, top level nodes in the theme colors, optional drill down with a breadcrumb) | ECharts only: react-charts has no treemap |
| — | `PfChartSunburst` (ECharts `sunburst`, top level nodes in the theme colors like the treemap, optional drill down) | ECharts only: react-charts has no sunburst |
| — | `PfChartGraph` (ECharts `graph`, force, circular and fixed layouts, node categories in the theme colors and the legend) | ECharts only: react-charts has no graph |
| — | `PfChartParallel` (ECharts `parallel`, value and category axes, ranges selected by dragging along the axes) | ECharts only: react-charts has no parallel coordinates |
| — | `PfChartTree` (ECharts `tree`, four orientations or radial, optionally collapsible) | ECharts only: react-charts has no tree |
| — | `PfChartThemeRiver` (ECharts `themeRiver` on a single time or value axis, streams given as `series`) | ECharts only: react-charts has no theme river |
| — | `toolbox` prop of every wrapper but the sparkline (ECharts `toolbox`: save as image, restore) | ECharts only |
| — | `polar` prop of the cartesian wrappers (ECharts `polar`, with radial bars when horizontal) | ECharts only |
| — | `timeline` and `timeline-autoplay` props of the cartesian wrappers (ECharts `timeline`, frames of series) | ECharts only |
| — | `brush` prop of the cartesian wrappers (ECharts `brush` from the toolbox, `brushselected` event) | ECharts only |
| `nodeSelector` (dark theme observer) | Always on: theme changes on `html`/`body` are followed | Exact, without a prop |
| `ChartTheme`, `ChartThemeColor` | `getTheme`, `getCustomTheme`, `ThemeColor` | ECharts themes: Victory theme objects don't apply |
| Custom `*Component` props | Formatters and rich text | **No match** |

## Gaps to close

1. **Bullet groups**: several bullets sharing a title, drawn as several grids in one chart (or a `custom` series), with `groupTitle`/`groupSubTitle`.
2. **Vue tooltips**: a `#tooltip` slot rendered into the ECharts tooltip (render the slot into a detached element and return it from `tooltip.formatter`).
3. **Box plot labels**: optional `labels` drawing min, quartiles, median and max next to each box with `markPoint` or a `custom` series.
4. **PatternFly patterns**: decal definitions approximating PatternFly's SVG patterns.

## ECharts charts without a wrapper

ECharts 6.1 exports these chart types that have no wrapper yet. Each wrapper follows the existing pattern:
- a builder in `src/builders` (pure props to option, unit tested);
- PatternFly series defaults in `src/series` where useful;
- a `.vue` wrapper registering its ECharts modules;
- a story in `apps/docs/src/stories/Charts`.

"PF tokens" tells whether the PatternFly ECharts theme (`src/themes`) already styles the type through `chart_echarts_*` tokens.

| ECharts type | Proposed wrapper | Data props | Extra ECharts modules | PF tokens | Priority | Notes |
|---|---|---|---|---|---|---|
| `custom` | None, documented through `PfCharts` (flame graph example) | `renderItem` | — | — | — | Building block for bullet groups, timelines and flame graphs |

### Components without a dedicated API

These are already usable through `option` but could get props or documentation:

- `visualMap`: the heatmap uses a sequential scale of the theme color (`getSequentialColors`); a diverging scale is still missing, and maps will need it too.
- `matrix` (ECharts 6 only): matrix layouts.
