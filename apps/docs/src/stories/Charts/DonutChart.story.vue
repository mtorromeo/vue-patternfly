<template>
  <doc-page title="Donut chart">
    <template #description
      >A <b>donut chart</b> is a pie chart with a hole in the middle, where a title summarizes the data.</template
    >

    <template #apidocs>
      <component-info name="PfChartDonut" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <div style="width: 230px">
        <pf-chart-donut
          aria-label="Donut chart example"
          :data="[
            { x: 'Cats', y: 35 },
            { x: 'Dogs', y: 55 },
            { x: 'Birds', y: 10 },
          ]"
          :height="230"
          sub-title="Pets"
          title="100"
        />
      </div>
    </story-canvas>

    <story-canvas title="Right aligned legend">
      <div style="width: 350px">
        <pf-chart-donut
          aria-label="Donut chart example"
          :data="[
            { x: 'Cats', y: 35 },
            { x: 'Dogs', y: 55 },
            { x: 'Birds', y: 10 },
          ]"
          :height="230"
          legend-position="right"
          sub-title="Pets"
          title="100"
        />
      </div>
    </story-canvas>

    <story-canvas title="Multi-color (ordered) with right aligned legend">
      <div style="width: 350px">
        <pf-chart-donut
          aria-label="Donut chart example"
          :data="[
            { x: 'Cats', y: 35 },
            { x: 'Dogs', y: 55 },
            { x: 'Birds', y: 10 },
          ]"
          :height="230"
          legend-position="right"
          sub-title="Pets"
          theme-color="multi-ordered"
          title="100"
        />
      </div>
    </story-canvas>

    <story-canvas title="Bottom aligned legend">
      <div style="width: 300px">
        <pf-chart-donut
          aria-label="Donut chart example"
          :data="[
            { x: 'Cats', y: 35 },
            { x: 'Dogs', y: 55 },
            { x: 'Birds', y: 10 },
          ]"
          :height="275"
          legend-position="bottom"
          sub-title="Pets"
          title="100"
        />
      </div>
    </story-canvas>

    <story-canvas title="Small with bottom aligned subtitle">
      <div style="width: 150px">
        <pf-chart-donut
          aria-label="Donut chart example"
          :data="[
            { x: 'Cats', y: 35 },
            { x: 'Dogs', y: 55 },
            { x: 'Birds', y: 10 },
          ]"
          :height="180"
          sub-title="Pets"
          sub-title-position="bottom"
          title="100"
        />
      </div>
    </story-canvas>

    <story-canvas title="Small with right aligned subtitle">
      <div style="width: 250px">
        <pf-chart-donut
          aria-label="Donut chart example"
          :data="[
            { x: 'Cats', y: 35 },
            { x: 'Dogs', y: 55 },
            { x: 'Birds', y: 10 },
          ]"
          :height="150"
          sub-title="Pets"
          sub-title-position="right"
          title="100"
        />
      </div>
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      The title is drawn as the label of a transparent pie in the middle of the donut, so it stays centered whatever the legend layout. Subtitles aligned to the bottom or right are drawn with the ECharts title component, relative to the whole chart.
    </pre>
  </doc-page>
</template>
