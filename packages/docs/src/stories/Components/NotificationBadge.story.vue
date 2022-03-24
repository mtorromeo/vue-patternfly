<template>
  <doc-page title="Notification Badge">
    <component-title name="pf-notification-badge" />

    <md>
      A **notification badge** is intended to be used with a notification drawer as a visible indicator to alert the user about incoming notifications.
      See full [Design guidelines](https://www.patternfly.org/v4/components/notification-badge/design-guidelines) on the official patternfly documentation.
      ## Examples
    </md>

    <story-canvas title="Basic" style="background-color: var(--pf-global--BackgroundColor--dark-100)">
      <pf-notification-badge />
    </story-canvas>

    <story-canvas title="With count" style="background-color: var(--pf-global--BackgroundColor--dark-100)">
      <pf-notification-badge :count="30" />
    </story-canvas>
  </doc-page>
</template>
