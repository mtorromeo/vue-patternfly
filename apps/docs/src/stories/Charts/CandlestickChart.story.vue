<template>
  <doc-page title="Candlestick chart">
    <template #description
      >A <b>candlestick chart</b> shows how a value moves over a period: each candle spans the lowest and highest
      values, and its body goes from the opening to the closing value.</template
    >

    <template #apidocs>
      <component-info name="PfChartCandlestick" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-chart-candlestick
        aria-label="Candlestick chart example"
        :data="[
          { x: '2017-10-24', open: 20, close: 34, low: 10, high: 38 },
          { x: '2017-10-25', open: 40, close: 35, low: 30, high: 50 },
          { x: '2017-10-26', open: 31, close: 38, low: 28, high: 44 },
          { x: '2017-10-27', open: 38, close: 15, low: 5, high: 42 },
          { x: '2017-10-30', open: 15, close: 28, low: 12, high: 30 },
          { x: '2017-10-31', open: 28, close: 32, low: 25, high: 36 },
          { x: '2017-11-01', open: 32, close: 26, low: 22, high: 35 },
          { x: '2017-11-02', open: 26, close: 40, low: 24, high: 43 },
        ]"
        :height="300"
      />
    </story-canvas>

    <story-canvas title="With axis labels and bottom aligned legend">
      <pf-chart-candlestick
        aria-label="Candlestick chart example"
        :data="[
          { x: '2017-10-24', open: 20, close: 34, low: 10, high: 38 },
          { x: '2017-10-25', open: 40, close: 35, low: 30, high: 50 },
          { x: '2017-10-26', open: 31, close: 38, low: 28, high: 44 },
          { x: '2017-10-27', open: 38, close: 15, low: 5, high: 42 },
          { x: '2017-10-30', open: 15, close: 28, low: 12, high: 30 },
          { x: '2017-10-31', open: 28, close: 32, low: 25, high: 36 },
          { x: '2017-11-01', open: 32, close: 26, low: 22, high: 35 },
          { x: '2017-11-02', open: 26, close: 40, low: 24, high: 43 },
        ]"
        :height="350"
        legend-position="bottom"
        name="Stock price"
        x-axis-label="Day"
        y-axis-label="Price"
      />
    </story-canvas>

    <story-canvas title="Zoomable, with toolbox">
      <pf-chart-candlestick
        aria-label="Candlestick chart example"
        :data="[
          { x: '2017-10-24', open: 20, close: 34, low: 10, high: 38 },
          { x: '2017-10-25', open: 40, close: 35, low: 30, high: 50 },
          { x: '2017-10-26', open: 31, close: 38, low: 28, high: 44 },
          { x: '2017-10-27', open: 38, close: 15, low: 5, high: 42 },
          { x: '2017-10-30', open: 15, close: 28, low: 12, high: 30 },
          { x: '2017-10-31', open: 28, close: 32, low: 25, high: 36 },
          { x: '2017-11-01', open: 32, close: 26, low: 22, high: 35 },
          { x: '2017-11-02', open: 26, close: 40, low: 24, high: 43 },
        ]"
        :height="350"
        toolbox
        zoomable
      />
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      react-charts has no candlestick chart: this is an ECharts only chart.

      With `zoomable`, the slider below the chart zooms into the days, as does the mouse wheel while holding Ctrl (or a
      pinch): the wheel alone still scrolls the page. The `toolbox` saves the chart as an image and restores the zoom.

      Rising candles (closing above the opening value) are drawn with the success color, falling ones with the danger
      color: override them with `option.series[0].itemStyle` (`color` and `borderColor` for rising candles, `color0` and
      `borderColor0` for falling ones).
    </pre>
  </doc-page>
</template>
