<template>
  <doc-page title="Notification Badge">
    <template #description>A <b>notification badge</b> is intended to be used with a notification drawer as a visible indicator to alert the user about incoming notifications.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/NotificationBadge.vue" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Basic" style="background-color: var(--pf-v6-global--BackgroundColor--dark-100)">
      <pf-notification-badge />
    </story-canvas>

    <story-canvas title="With count" style="background-color: var(--pf-v6-global--BackgroundColor--dark-100)">
      <pf-notification-badge :count="30" />
    </story-canvas>
  </doc-page>
</template>
