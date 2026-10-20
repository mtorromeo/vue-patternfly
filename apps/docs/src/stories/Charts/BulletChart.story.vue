<template>
  <doc-page title="Bullet chart">
    <template #description
      >A <b>bullet chart</b> compares a measure against qualitative ranges and comparative targets.</template
    >

    <template #apidocs>
      <component-info name="PfChartBullet" />
    </template>

    <pre v-md>
      Note: charts live in their own package at [@vue-patternfly/charts](https://www.npmjs.com/package/@vue-patternfly/charts)!

      ECharts has no bullet chart: it is drawn with overlapping bars for the qualitative ranges and the primary measures, and markers for the dot and comparative measures. Since they are read together, hovering them only shows the tooltip, without the highlight of the other charts.

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-chart-bullet
        aria-label="Bullet chart example"
        :comparative-warning-measure-data="[{ name: 'Warning', y: 88 }]"
        :height="150"
        :max-domain="100"
        :primary-segmented-measure-data="[{ name: 'Measure', y: 60 }]"
        :qualitative-range-data="[
          { name: 'Range', y: 50 },
          { name: 'Range', y: 75 },
        ]"
      />
    </story-canvas>

    <story-canvas title="Segmented primary measure">
      <pf-chart-bullet
        aria-label="Bullet chart example"
        :comparative-warning-measure-data="[{ name: 'Warning', y: 88 }]"
        :height="150"
        :max-domain="100"
        :primary-segmented-measure-data="[
          { name: 'Measure', y: 25 },
          { name: 'Measure', y: 60 },
        ]"
        :qualitative-range-data="[
          { name: 'Range', y: 50 },
          { name: 'Range', y: 75 },
        ]"
        sub-title="Measure details"
        title="Text label"
      />
    </story-canvas>

    <story-canvas title="Primary measure dot with bottom aligned legend">
      <pf-chart-bullet
        aria-label="Bullet chart example"
        :comparative-warning-measure-data="[{ name: 'Warning', y: 88 }]"
        :height="200"
        legend-position="bottom"
        :max-domain="100"
        :primary-dot-measure-data="[
          { name: 'Measure', y: 25 },
          { name: 'Measure', y: 60 },
        ]"
        :qualitative-range-data="[
          { name: 'Range', y: 50 },
          { name: 'Range', y: 75 },
        ]"
        sub-title="Measure details"
        title="Text label"
      />
    </story-canvas>

    <story-canvas title="Error measure">
      <pf-chart-bullet
        aria-label="Bullet chart example"
        :comparative-error-measure-data="[{ name: 'Error', y: 120 }]"
        :comparative-warning-measure-data="[{ name: 'Warning', y: 80 }]"
        :height="150"
        :max-domain="125"
        :primary-segmented-measure-data="[
          { name: 'Measure', y: 25 },
          { name: 'Measure', y: 75 },
        ]"
        :qualitative-range-data="[
          { name: 'Range', y: 65 },
          { name: 'Range', y: 100 },
        ]"
        title="Text label"
      />
    </story-canvas>

    <story-canvas title="Negative and positive primary measures">
      <pf-chart-bullet
        aria-label="Bullet chart example"
        :comparative-warning-measure-data="[{ name: 'Warning', y: 60 }]"
        :height="150"
        :max-domain="75"
        :min-domain="-25"
        :primary-segmented-measure-data="[
          { name: 'Measure', y: -15 },
          { name: 'Measure', y: -10 },
          { name: 'Measure', y: 25 },
          { name: 'Measure', y: 50 },
        ]"
        :qualitative-range-data="[
          { name: 'Range', y: 25 },
          { name: 'Range', y: 50 },
        ]"
        title="Text label"
      />
    </story-canvas>

    <story-canvas title="Reversed with right aligned legend">
      <pf-chart-bullet
        aria-label="Bullet chart example"
        :comparative-warning-measure-data="[{ name: 'Warning', y: 88 }]"
        :height="150"
        invert
        legend-position="right"
        :max-domain="100"
        :primary-segmented-measure-data="[
          { name: 'Measure', y: 25 },
          { name: 'Measure', y: 60 },
        ]"
        :qualitative-range-data="[
          { name: 'Range', y: 50 },
          { name: 'Range', y: 75 },
        ]"
        title="Text label"
      />
    </story-canvas>

    <story-canvas title="Vertical with segmented primary measure">
      <div style="width: 200px">
        <pf-chart-bullet
          aria-label="Bullet chart example"
          :comparative-warning-measure-data="[{ name: 'Warning', y: 88 }]"
          :height="500"
          :horizontal="false"
          :max-domain="100"
          :primary-segmented-measure-data="[
            { name: 'Measure', y: 25 },
            { name: 'Measure', y: 60 },
          ]"
          :qualitative-range-data="[
            { name: 'Range', y: 50 },
            { name: 'Range', y: 75 },
          ]"
          title="Text label"
        />
      </div>
    </story-canvas>

    <pre v-md>
      ## Differences from patternfly-react

      - Bullet groups (several bullets sharing a group title) are not supported yet: render several `PfChartBullet`.
      - Domains are numbers (`max-domain="100"`) rather than `{ y: 100 }` objects.
      - `comparativeMeasureData` adds plain comparative markers, which patternfly-react only exposes as `comparativeZeroMeasureComponent`.
    </pre>
  </doc-page>
</template>
