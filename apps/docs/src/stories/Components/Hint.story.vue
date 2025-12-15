<template>
  <doc-page title="Hint">
    <template #description>A <b>hint</b> is in-app messaging that provides a one-step reminder, explanation, or call to action for a page or modal.</template>

    <template #apidocs>
      <component-info name="PfHint" />
      <component-info name="PfHintBody" />
      <component-info name="PfHintFooter" />
      <component-info name="PfHintTitle" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Example">
      <pf-hint>
        <template #actions>
          <pf-dropdown position="right">
            <template #toggle>
              <pf-menu-toggle variant="plain" />
            </template>
            <pf-dropdown-item>Action 1</pf-dropdown-item>
            <pf-dropdown-item>Action 2</pf-dropdown-item>
            <pf-divider component="li" />
            <pf-dropdown-item>Action 3</pf-dropdown-item>
          </pf-dropdown>
        </template>
        <pf-hint-title>Do more with Find it Fix it capabilities</pf-hint-title>
        <pf-hint-body>Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.</pf-hint-body>
        <pf-hint-footer>
          <pf-button variant="link" inline>Try it for 90 days</pf-button>
        </pf-hint-footer>
      </pf-hint>
    </story-canvas>
  </doc-page>
</template>
