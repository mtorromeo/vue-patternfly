<template>
  <doc-page title="Checkbox">
    <component-title name="pf-checkbox" />

    <story-canvas title="Default">
      <pf-checkbox id="basic-checkbox" label="Basic checkbox" />
    </story-canvas>

    <story-canvas title="With description">
      <pf-checkbox
        id="checkbox-with-description"
        label="Checkbox with description"
        description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."
      />
    </story-canvas>

    <story-canvas title="With description and body">
      <pf-checkbox
        id="checkbox-with-description-and-body"
        label="Checkbox with description and body"
        description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."
        body="This is where custom content goes."
      />
    </story-canvas>
  </doc-page>
</template>
