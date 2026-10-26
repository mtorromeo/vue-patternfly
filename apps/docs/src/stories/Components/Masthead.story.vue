<template>
  <doc-page title="Masthead">
    <template #description
      >A <b>masthead</b> contains global properties such as logotype, navigation and settings in an organized fashion
      and it is accessible from all parts of the application. All pages should share a common masthead.</template
    >

    <template #apidocs>
      <component-info name="PfMasthead" />
      <component-info name="PfMastheadBrand" />
      <component-info name="PfMastheadContent" />
      <component-info name="PfMastheadLogo" />
      <component-info name="PfMastheadMain" />
      <component-info name="PfMastheadToggle" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `display` and `inset` breakpoint objects are replaced by the `display`, `display-sm`, … and `inset`, `inset-sm`, … props.
      - `pf-masthead-logo` renders a vue-router link with the `to` prop.
      See [common differences from patternfly-react](#/).

      ## Examples

      To maintain proper layout and formatting, a `pf-masthead` should contain both a `pf-masthead-main` and `pf-masthead-content` component.

      Mastheads contain the `pf-masthead-main` that wraps a `pf-page-toggle-button` and `pf-masthead-brand`. The `pf-masthead-brand` wraps `pf-masthead-logo`. The masthead also contains the page's header toolbar within `pf-masthead-content`.
    </pre>

    <story-canvas title="Basic">
      <pf-masthead id="basic-example">
        <pf-masthead-main>
          <pf-masthead-toggle>
            <pf-button variant="plain" hamburger aria-label="Global navigation" />
          </pf-masthead-toggle>
          <pf-masthead-brand>
            <pf-masthead-logo component="a">Logo</pf-masthead-logo>
          </pf-masthead-brand>
        </pf-masthead-main>
        <pf-masthead-content>
          <span>Content</span>
        </pf-masthead-content>
      </pf-masthead>
    </story-canvas>

    <story-canvas title="Basic with mixed content">
      <pf-masthead id="basic-mixed">
        <pf-masthead-main>
          <pf-masthead-toggle>
            <pf-button variant="plain" hamburger aria-label="Global navigation" />
          </pf-masthead-toggle>
          <pf-masthead-brand>
            <pf-masthead-logo component="a">Logo</pf-masthead-logo>
          </pf-masthead-brand>
        </pf-masthead-main>
        <pf-masthead-content>
          <pf-flex>
            <span>Content</span>
            <pf-button>Primary</pf-button>
            <pf-flex-item align-self="flex-end">
              <pf-button variant="secondary">Secondary</pf-button>
            </pf-flex-item>
            <pf-flex-item align-self="flex-end">
              <pf-button variant="tertiary">Tertiary</pf-button>
            </pf-flex-item>
          </pf-flex>
        </pf-masthead-content>
      </pf-masthead>
    </story-canvas>

    <story-canvas title="Display inline">
      <pf-masthead id="inline-masthead" display="inline">
        <pf-masthead-main>
          <pf-masthead-toggle>
            <pf-button variant="plain" hamburger aria-label="Global navigation" />
          </pf-masthead-toggle>
          <pf-masthead-brand>
            <pf-masthead-logo component="a">Logo</pf-masthead-logo>
          </pf-masthead-brand>
        </pf-masthead-main>
        <pf-masthead-content>
          <span>Content</span>
        </pf-masthead-content>
      </pf-masthead>
    </story-canvas>

    <story-canvas title="Display stack">
      <pf-masthead id="stack-masthead" display="stack">
        <pf-masthead-main>
          <pf-masthead-toggle>
            <pf-button variant="plain" hamburger aria-label="Global navigation" />
          </pf-masthead-toggle>
          <pf-masthead-brand>
            <pf-masthead-logo component="a">Logo</pf-masthead-logo>
          </pf-masthead-brand>
        </pf-masthead-main>
        <pf-masthead-content>
          <span>Content</span>
        </pf-masthead-content>
      </pf-masthead>
    </story-canvas>

    <story-canvas title="Display stack, display inline responsive">
      <pf-masthead id="stack-inline-masthead" display="inline" display-lg="stack" display-2xl="inline">
        <pf-masthead-main>
          <pf-masthead-toggle>
            <pf-button variant="plain" hamburger aria-label="Global navigation" />
          </pf-masthead-toggle>
          <pf-masthead-brand>
            <pf-masthead-logo component="a">Logo</pf-masthead-logo>
          </pf-masthead-brand>
        </pf-masthead-main>
        <pf-masthead-content>
          <span>Content</span>
        </pf-masthead-content>
      </pf-masthead>
    </story-canvas>

    <story-canvas title="Inset">
      <pf-masthead id="inset-masthead" inset="sm">
        <pf-masthead-main>
          <pf-masthead-toggle>
            <pf-button variant="plain" hamburger aria-label="Global navigation" />
          </pf-masthead-toggle>
          <pf-masthead-brand>
            <pf-masthead-logo component="a">Logo</pf-masthead-logo>
          </pf-masthead-brand>
        </pf-masthead-main>
        <pf-masthead-content>
          <span>Content</span>
        </pf-masthead-content>
      </pf-masthead>
    </story-canvas>

    <story-canvas title="Custom logo component">
      <template #intro>
        <pre v-md>
          `pf-masthead-logo` renders an anchor with `href`, and a vue-router link with `to`, for in-app linking without reloading the page. Any other element or component can be passed to its `component` prop.
        </pre>
      </template>
      <pf-masthead id="icon-router-link">
        <pf-masthead-main>
          <pf-masthead-toggle>
            <pf-button variant="plain" hamburger aria-label="Global navigation" />
          </pf-masthead-toggle>
          <pf-masthead-brand>
            <pf-masthead-logo to="/">
              <pf-brand :src="pfLogo" alt="PatternFly" height="36px" />
            </pf-masthead-logo>
          </pf-masthead-brand>
        </pf-masthead-main>
        <pf-masthead-content>
          <span>Content</span>
        </pf-masthead-content>
      </pf-masthead>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import pfLogo from '@patternfly/patternfly/assets/images/PF-HorizontalLogo-Color.svg';
</script>
