<template>
  <doc-page title="Banner">
    <template #description
      >A <b>banner</b> is a 1-line, full color, full width container that can be used to communicate short snippets of
      information to users. Banners are un-intrusive and non-dismissible.</template
    >

    <template #apidocs>
      <component-info name="PfBanner" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `screen-reader-text` slot can replace the `screen-reader-text` prop.

      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <template #intro>
        <pre v-md>
          Banners can be styled with one of 9 different colors using the `color` prop. A basic banner should only be used when the banner color does not represent status or severity.
        </pre>
      </template>

      <pf-banner>Default banner</pf-banner>
      <br />
      <pf-banner color="red">Red banner</pf-banner>
      <br />
      <pf-banner color="orangered">Orangered banner</pf-banner>
      <br />
      <pf-banner color="orange">Orange banner</pf-banner>
      <br />
      <pf-banner color="yellow">Yellow banner</pf-banner>
      <br />
      <pf-banner color="green">Green banner</pf-banner>
      <br />
      <pf-banner color="teal">Teal banner</pf-banner>
      <br />
      <pf-banner color="blue">Blue banner</pf-banner>
      <br />
      <pf-banner color="purple">Purple banner</pf-banner>
    </story-canvas>

    <story-canvas title="Status">
      <template #intro>
        <pre v-md>
          When a banner is used to convey status it should be styled using the `status` prop. Additionally, it is advised to pass an icon inside the banner to convey the status in a way besides just color.

          The `screen-reader-text` prop should also be passed in to convey the status/severity of the banner to users of certain assistive technologies such as screen readers.

          In the following example, a flex layout is used inside the banner content to show one possible way to create spacing between the icons and banner text.
        </pre>
      </template>

      <pf-banner status="success" screen-reader-text="Success banner">
        <pf-flex space-items="sm">
          <pf-flex-item>
            <circle-check-icon />
          </pf-flex-item>
          <pf-flex-item>Success banner</pf-flex-item>
        </pf-flex>
      </pf-banner>
      <br />
      <pf-banner status="warning" screen-reader-text="Warning banner">
        <pf-flex space-items="sm">
          <pf-flex-item>
            <triangle-exclamation-icon />
          </pf-flex-item>
          <pf-flex-item>Warning banner</pf-flex-item>
        </pf-flex>
      </pf-banner>
      <br />
      <pf-banner status="danger" screen-reader-text="Danger banner">
        <pf-flex space-items="sm">
          <pf-flex-item>
            <circle-exclamation-icon />
          </pf-flex-item>
          <pf-flex-item>Danger banner</pf-flex-item>
        </pf-flex>
      </pf-banner>
      <br />
      <pf-banner status="info" screen-reader-text="Info banner">
        <pf-flex space-items="sm">
          <pf-flex-item>
            <circle-info-icon />
          </pf-flex-item>
          <pf-flex-item>Info banner</pf-flex-item>
        </pf-flex>
      </pf-banner>
      <br />
      <pf-banner status="custom" screen-reader-text="Custom banner">
        <pf-flex space-items="sm">
          <pf-flex-item>
            <bell-icon />
          </pf-flex-item>
          <pf-flex-item>Custom banner</pf-flex-item>
        </pf-flex>
      </pf-banner>
    </story-canvas>

    <story-canvas title="Pill">
      <template #intro>
        <pre v-md>
          Banners may also have a rounded pill style by passing the `pill` prop.
        </pre>
      </template>

      <pf-banner pill>Default pill banner</pf-banner>
      <br />
      <pf-banner color="red" pill>Red pill banner</pf-banner>
      <br />
      <pf-banner pill screen-reader-text="Success pill banner" status="success">
        <pf-flex space-items="sm">
          <pf-flex-item>
            <circle-check-icon />
          </pf-flex-item>
          <pf-flex-item>Success pill banner</pf-flex-item>
        </pf-flex>
      </pf-banner>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import CircleInfoIcon from '@vue-patternfly/icons/circle-info-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
import BellIcon from '@vue-patternfly/icons/bell-icon';
</script>
