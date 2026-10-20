<template>
  <doc-page title="Heatmap chart">
    <template #description
      >A <b>heatmap</b> shows a value for each combination of two categories, mapping it to the shade of a
      color.</template
    >

    <template #apidocs>
      <component-info name="PfChartHeatmap" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      patternfly-react has no heatmap: `PfChartHeatmap` is based on the ECharts [heatmap series](https://echarts.apache.org/en/option.html#series-heatmap). Values are mapped to a scale of the theme color, from the lightest to the darkest shade; the scale is shown as the legend.

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-chart-heatmap
        aria-label="Heatmap chart example"
        :data="[
          { x: '00:00', y: 'Mon', value: 33 },
          { x: '03:00', y: 'Mon', value: 55 },
          { x: '06:00', y: 'Mon', value: 71 },
          { x: '09:00', y: 'Mon', value: 79 },
          { x: '12:00', y: 'Mon', value: 66 },
          { x: '15:00', y: 'Mon', value: 56 },
          { x: '18:00', y: 'Mon', value: 40 },
          { x: '21:00', y: 'Mon', value: 20 },
          { x: '00:00', y: 'Tue', value: 40 },
          { x: '03:00', y: 'Tue', value: 62 },
          { x: '06:00', y: 'Tue', value: 67 },
          { x: '09:00', y: 'Tue', value: 75 },
          { x: '12:00', y: 'Tue', value: 73 },
          { x: '15:00', y: 'Tue', value: 52 },
          { x: '18:00', y: 'Tue', value: 36 },
          { x: '21:00', y: 'Tue', value: 16 },
          { x: '00:00', y: 'Wed', value: 36 },
          { x: '03:00', y: 'Wed', value: 58 },
          { x: '06:00', y: 'Wed', value: 74 },
          { x: '09:00', y: 'Wed', value: 71 },
          { x: '12:00', y: 'Wed', value: 69 },
          { x: '15:00', y: 'Wed', value: 59 },
          { x: '18:00', y: 'Wed', value: 43 },
          { x: '21:00', y: 'Wed', value: 12 },
          { x: '00:00', y: 'Thu', value: 43 },
          { x: '03:00', y: 'Thu', value: 54 },
          { x: '06:00', y: 'Thu', value: 70 },
          { x: '09:00', y: 'Thu', value: 78 },
          { x: '12:00', y: 'Thu', value: 65 },
          { x: '15:00', y: 'Thu', value: 55 },
          { x: '18:00', y: 'Thu', value: 39 },
          { x: '21:00', y: 'Thu', value: 19 },
          { x: '00:00', y: 'Fri', value: 39 },
          { x: '03:00', y: 'Fri', value: 61 },
          { x: '06:00', y: 'Fri', value: 66 },
          { x: '09:00', y: 'Fri', value: 74 },
          { x: '12:00', y: 'Fri', value: 72 },
          { x: '15:00', y: 'Fri', value: 62 },
          { x: '18:00', y: 'Fri', value: 35 },
          { x: '21:00', y: 'Fri', value: 15 },
          { x: '00:00', y: 'Sat', value: 20 },
          { x: '03:00', y: 'Sat', value: 29 },
          { x: '06:00', y: 'Sat', value: 36 },
          { x: '09:00', y: 'Sat', value: 30 },
          { x: '12:00', y: 'Sat', value: 31 },
          { x: '15:00', y: 'Sat', value: 30 },
          { x: '18:00', y: 'Sat', value: 27 },
          { x: '21:00', y: 'Sat', value: 11 },
          { x: '00:00', y: 'Sun', value: 27 },
          { x: '03:00', y: 'Sun', value: 25 },
          { x: '06:00', y: 'Sun', value: 32 },
          { x: '09:00', y: 'Sun', value: 37 },
          { x: '12:00', y: 'Sun', value: 38 },
          { x: '15:00', y: 'Sun', value: 26 },
          { x: '18:00', y: 'Sun', value: 23 },
          { x: '21:00', y: 'Sun', value: 18 },
        ]"
        :height="300"
      />
    </story-canvas>

    <story-canvas title="Labels">
      <pf-chart-heatmap
        aria-label="Heatmap chart with labels example"
        :data="[
          { x: 'W1', y: 'us-east', value: 0 },
          { x: 'W2', y: 'us-east', value: 3 },
          { x: 'W3', y: 'us-east', value: 6 },
          { x: 'W4', y: 'us-east', value: 9 },
          { x: 'W5', y: 'us-east', value: 12 },
          { x: 'W1', y: 'us-west', value: 5 },
          { x: 'W2', y: 'us-west', value: 8 },
          { x: 'W3', y: 'us-west', value: 11 },
          { x: 'W4', y: 'us-west', value: 1 },
          { x: 'W5', y: 'us-west', value: 4 },
          { x: 'W1', y: 'eu-central', value: 10 },
          { x: 'W2', y: 'eu-central', value: 0 },
          { x: 'W3', y: 'eu-central', value: 3 },
          { x: 'W4', y: 'eu-central', value: 12 },
          { x: 'W5', y: 'eu-central', value: 9 },
          { x: 'W1', y: 'ap-south', value: 2 },
          { x: 'W2', y: 'ap-south', value: 5 },
          { x: 'W3', y: 'ap-south', value: 8 },
          { x: 'W4', y: 'ap-south', value: 11 },
          { x: 'W5', y: 'ap-south', value: 1 },
        ]"
        :height="250"
        labels
        x-axis-label="Week"
        y-axis-label="Cluster"
      />
    </story-canvas>

    <story-canvas title="Green with bottom aligned scale">
      <pf-chart-heatmap
        aria-label="Heatmap chart example"
        :data="[
          { x: '00:00', y: 'Mon', value: 33 },
          { x: '03:00', y: 'Mon', value: 55 },
          { x: '06:00', y: 'Mon', value: 71 },
          { x: '09:00', y: 'Mon', value: 79 },
          { x: '12:00', y: 'Mon', value: 66 },
          { x: '15:00', y: 'Mon', value: 56 },
          { x: '18:00', y: 'Mon', value: 40 },
          { x: '21:00', y: 'Mon', value: 20 },
          { x: '00:00', y: 'Tue', value: 40 },
          { x: '03:00', y: 'Tue', value: 62 },
          { x: '06:00', y: 'Tue', value: 67 },
          { x: '09:00', y: 'Tue', value: 75 },
          { x: '12:00', y: 'Tue', value: 73 },
          { x: '15:00', y: 'Tue', value: 52 },
          { x: '18:00', y: 'Tue', value: 36 },
          { x: '21:00', y: 'Tue', value: 16 },
          { x: '00:00', y: 'Wed', value: 36 },
          { x: '03:00', y: 'Wed', value: 58 },
          { x: '06:00', y: 'Wed', value: 74 },
          { x: '09:00', y: 'Wed', value: 71 },
          { x: '12:00', y: 'Wed', value: 69 },
          { x: '15:00', y: 'Wed', value: 59 },
          { x: '18:00', y: 'Wed', value: 43 },
          { x: '21:00', y: 'Wed', value: 12 },
          { x: '00:00', y: 'Thu', value: 43 },
          { x: '03:00', y: 'Thu', value: 54 },
          { x: '06:00', y: 'Thu', value: 70 },
          { x: '09:00', y: 'Thu', value: 78 },
          { x: '12:00', y: 'Thu', value: 65 },
          { x: '15:00', y: 'Thu', value: 55 },
          { x: '18:00', y: 'Thu', value: 39 },
          { x: '21:00', y: 'Thu', value: 19 },
          { x: '00:00', y: 'Fri', value: 39 },
          { x: '03:00', y: 'Fri', value: 61 },
          { x: '06:00', y: 'Fri', value: 66 },
          { x: '09:00', y: 'Fri', value: 74 },
          { x: '12:00', y: 'Fri', value: 72 },
          { x: '15:00', y: 'Fri', value: 62 },
          { x: '18:00', y: 'Fri', value: 35 },
          { x: '21:00', y: 'Fri', value: 15 },
          { x: '00:00', y: 'Sat', value: 20 },
          { x: '03:00', y: 'Sat', value: 29 },
          { x: '06:00', y: 'Sat', value: 36 },
          { x: '09:00', y: 'Sat', value: 30 },
          { x: '12:00', y: 'Sat', value: 31 },
          { x: '15:00', y: 'Sat', value: 30 },
          { x: '18:00', y: 'Sat', value: 27 },
          { x: '21:00', y: 'Sat', value: 11 },
          { x: '00:00', y: 'Sun', value: 27 },
          { x: '03:00', y: 'Sun', value: 25 },
          { x: '06:00', y: 'Sun', value: 32 },
          { x: '09:00', y: 'Sun', value: 37 },
          { x: '12:00', y: 'Sun', value: 38 },
          { x: '15:00', y: 'Sun', value: 26 },
          { x: '18:00', y: 'Sun', value: 23 },
          { x: '21:00', y: 'Sun', value: 18 },
        ]"
        :height="350"
        legend-position="bottom"
        theme-color="green"
      />
    </story-canvas>

    <story-canvas title="Custom range and categories">
      <pf-chart-heatmap
        aria-label="Heatmap chart example"
        :data="[
          { x: 'W1', y: 'us-east', value: 0 },
          { x: 'W2', y: 'us-east', value: 3 },
          { x: 'W3', y: 'us-east', value: 6 },
          { x: 'W4', y: 'us-east', value: 9 },
          { x: 'W5', y: 'us-east', value: 12 },
          { x: 'W1', y: 'us-west', value: 5 },
          { x: 'W2', y: 'us-west', value: 8 },
          { x: 'W3', y: 'us-west', value: 11 },
          { x: 'W4', y: 'us-west', value: 1 },
          { x: 'W5', y: 'us-west', value: 4 },
          { x: 'W1', y: 'eu-central', value: 10 },
          { x: 'W2', y: 'eu-central', value: 0 },
          { x: 'W3', y: 'eu-central', value: 3 },
          { x: 'W4', y: 'eu-central', value: 12 },
          { x: 'W5', y: 'eu-central', value: 9 },
          { x: 'W1', y: 'ap-south', value: 2 },
          { x: 'W2', y: 'ap-south', value: 5 },
          { x: 'W3', y: 'ap-south', value: 8 },
          { x: 'W4', y: 'ap-south', value: 11 },
          { x: 'W5', y: 'ap-south', value: 1 },
        ]"
        :height="250"
        labels
        :max="20"
        :min="0"
        theme-color="purple"
        :x-categories="['W1', 'W2', 'W3', 'W4', 'W5', 'W6']"
      />
    </story-canvas>

    <story-canvas title="Skeleton">
      <pf-chart-heatmap
        aria-label="Heatmap chart skeleton example"
        :data="[
          { x: '00:00', y: 'Mon', value: 33 },
          { x: '03:00', y: 'Mon', value: 55 },
          { x: '06:00', y: 'Mon', value: 71 },
          { x: '09:00', y: 'Mon', value: 79 },
          { x: '12:00', y: 'Mon', value: 66 },
          { x: '15:00', y: 'Mon', value: 56 },
          { x: '18:00', y: 'Mon', value: 40 },
          { x: '21:00', y: 'Mon', value: 20 },
          { x: '00:00', y: 'Tue', value: 40 },
          { x: '03:00', y: 'Tue', value: 62 },
          { x: '06:00', y: 'Tue', value: 67 },
          { x: '09:00', y: 'Tue', value: 75 },
          { x: '12:00', y: 'Tue', value: 73 },
          { x: '15:00', y: 'Tue', value: 52 },
          { x: '18:00', y: 'Tue', value: 36 },
          { x: '21:00', y: 'Tue', value: 16 },
          { x: '00:00', y: 'Wed', value: 36 },
          { x: '03:00', y: 'Wed', value: 58 },
          { x: '06:00', y: 'Wed', value: 74 },
          { x: '09:00', y: 'Wed', value: 71 },
          { x: '12:00', y: 'Wed', value: 69 },
          { x: '15:00', y: 'Wed', value: 59 },
          { x: '18:00', y: 'Wed', value: 43 },
          { x: '21:00', y: 'Wed', value: 12 },
          { x: '00:00', y: 'Thu', value: 43 },
          { x: '03:00', y: 'Thu', value: 54 },
          { x: '06:00', y: 'Thu', value: 70 },
          { x: '09:00', y: 'Thu', value: 78 },
          { x: '12:00', y: 'Thu', value: 65 },
          { x: '15:00', y: 'Thu', value: 55 },
          { x: '18:00', y: 'Thu', value: 39 },
          { x: '21:00', y: 'Thu', value: 19 },
          { x: '00:00', y: 'Fri', value: 39 },
          { x: '03:00', y: 'Fri', value: 61 },
          { x: '06:00', y: 'Fri', value: 66 },
          { x: '09:00', y: 'Fri', value: 74 },
          { x: '12:00', y: 'Fri', value: 72 },
          { x: '15:00', y: 'Fri', value: 62 },
          { x: '18:00', y: 'Fri', value: 35 },
          { x: '21:00', y: 'Fri', value: 15 },
          { x: '00:00', y: 'Sat', value: 20 },
          { x: '03:00', y: 'Sat', value: 29 },
          { x: '06:00', y: 'Sat', value: 36 },
          { x: '09:00', y: 'Sat', value: 30 },
          { x: '12:00', y: 'Sat', value: 31 },
          { x: '15:00', y: 'Sat', value: 30 },
          { x: '18:00', y: 'Sat', value: 27 },
          { x: '21:00', y: 'Sat', value: 11 },
          { x: '00:00', y: 'Sun', value: 27 },
          { x: '03:00', y: 'Sun', value: 25 },
          { x: '06:00', y: 'Sun', value: 32 },
          { x: '09:00', y: 'Sun', value: 37 },
          { x: '12:00', y: 'Sun', value: 38 },
          { x: '15:00', y: 'Sun', value: 26 },
          { x: '18:00', y: 'Sun', value: 23 },
          { x: '21:00', y: 'Sun', value: 18 },
        ]"
        :height="300"
        theme-color="skeleton"
      />
    </story-canvas>
  </doc-page>
</template>
