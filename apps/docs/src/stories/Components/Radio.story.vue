<template>
  <doc-page title="Radio">
    <template #description>A <b>radio</b> button is used to present the user with mutually exclusive choices. Always present radio buttons in groups of 2 or more.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Radio.vue" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-radio id="radio1" name="radio" label="Radio" />
    </story-canvas>

    <story-canvas title="With description">
      <pf-radio
        component="label"
        name="radio-with-description"
        label="Radio with description"
        description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."
      />
    </story-canvas>

    <story-canvas title="Basic">
      <pf-radio id="radio1" name="radio" label="Radio" />
    </story-canvas>

    <story-canvas title="Radio with same name">
      <pf-radio
        component="label"
        name="radio-choice"
        label="Choice 1"
      />
      <pf-radio
        component="label"
        name="radio-choice"
        label="Choice 2"
      />
    </story-canvas>

    <story-canvas title="With description and body">
      <pf-radio
        id="radio3"
        name="radio-with-description-and-body"
        label="Radio with description and body"
        description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."
        body="This is where custom content goes."
      />
    </story-canvas>
  </doc-page>
</template>
