<template>
  <doc-page title="Masthead">
    <template #description>A <b>masthead</b> contains global properties such as logotype, navigation and settings in an organized fashion and it is accessible from all parts of the application. All pages should share a common masthead.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Masthead/Masthead.vue" />
      <component-info src="packages/core/src/components/Masthead/MastheadBrand.vue" />
      <component-info src="packages/core/src/components/Masthead/MastheadContent.vue" />
      <component-info src="packages/core/src/components/Masthead/MastheadLogo.vue" />
      <component-info src="packages/core/src/components/Masthead/MastheadMain.vue" />
      <component-info src="packages/core/src/components/Masthead/MastheadToggle.vue" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-masthead>
        <pf-masthead-main>
          <pf-masthead-toggle>
            <pf-button variant="plain" aria-label="Global navigation">
              <bars-icon />
            </pf-button>
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
      <pf-masthead>
        <pf-masthead-main>
          <pf-masthead-toggle>
            <pf-button variant="plain" aria-label="Global navigation">
              <bars-icon />
            </pf-button>
          </pf-masthead-toggle>
          <pf-masthead-brand>
            <pf-masthead-logo component="a">Logo</pf-masthead-logo>
          </pf-masthead-brand>
        </pf-masthead-main>
        <pf-masthead-content>
          <pf-flex>
            <span>Testing text color</span>
            <pf-button>testing</pf-button>
            <pf-flex-item align-self="flex-end">
              <pf-button>testing</pf-button>
            </pf-flex-item>
          </pf-flex>
        </pf-masthead-content>
      </pf-masthead>
    </story-canvas>

    <story-canvas title="Display stack, display inline responsive">
      <pf-masthead display="inline" display-lg="stack" display-2xl="inline">
        <pf-masthead-main>
          <pf-masthead-toggle>
            <pf-button variant="plain" aria-label="Global navigation">
              <bars-icon />
            </pf-button>
          </pf-masthead-toggle>
          <pf-masthead-brand>
            <pf-masthead-logo>Logo</pf-masthead-logo>
          </pf-masthead-brand>
        </pf-masthead-main>
        <pf-masthead-content>
          <span>Content</span>
        </pf-masthead-content>
      </pf-masthead>
    </story-canvas>

    <story-canvas title="Inset">
      <pf-masthead inset="sm">
        <pf-masthead-main>
          <pf-masthead-toggle>
            <pf-button variant="plain" aria-label="Global navigation">
              <bars-icon />
            </pf-button>
          </pf-masthead-toggle>
          <pf-masthead-brand>
            <pf-masthead-logo>Logo</pf-masthead-logo>
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
import BarsIcon from '@vue-patternfly/icons/bars-icon';
</script>
