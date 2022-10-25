<template>
  <doc-page title="Radio">
    <component-title name="pf-radio" />

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-radio id="radio" label="Radio" />
    </story-canvas>

    <story-canvas title="With description">
      <pf-radio
        id="radio-with-description"
        label="Radio with description"
        description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."
      />
    </story-canvas>

    <story-canvas title="With description and body">
      <pf-radio
        id="radio-with-description-and-body"
        label="Radio with description and body"
        description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."
        body="This is where custom content goes."
      />
    </story-canvas>
  </doc-page>
</template>
