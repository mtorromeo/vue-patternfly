<template>
  <doc-page title="Masthead">
    <component-title name="pf-masthead" />

    <pre v-md>
      A **masthead** contains global properties such as logotype, navigation and settings in an organized fashion and it is accessible from all parts of the application. All pages should share a common masthead.

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-masthead>
        <pf-masthead-toggle>
          <pf-button variant="plain" aria-label="Global navigation">
            <BarsIcon />
          </pf-button>
        </pf-masthead-toggle>
        <pf-masthead-main>
          <pf-masthead-brand>Logo</pf-masthead-brand>
        </pf-masthead-main>
        <pf-masthead-content>
          <span>Content</span>
        </pf-masthead-content>
      </pf-masthead>
    </story-canvas>

    <story-canvas title="Basic with mixed content">
      <pf-masthead>
        <pf-masthead-toggle>
          <pf-button variant="plain" aria-label="Global navigation">
            <BarsIcon />
          </pf-button>
        </pf-masthead-toggle>
        <pf-masthead-main>
          <pf-masthead-brand>Logo</pf-masthead-brand>
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
        <pf-masthead-toggle>
          <pf-button variant="plain" aria-label="Global navigation">
            <BarsIcon />
          </pf-button>
        </pf-masthead-toggle>
        <pf-masthead-main>
          <pf-masthead-brand>Logo</pf-masthead-brand>
        </pf-masthead-main>
        <pf-masthead-content>
          <span>Content</span>
        </pf-masthead-content>
      </pf-masthead>
    </story-canvas>

    <story-canvas title="Light variant">
      <pf-masthead background-color="light">
        <pf-masthead-toggle>
          <pf-button variant="plain" aria-label="Global navigation">
            <BarsIcon />
          </pf-button>
        </pf-masthead-toggle>
        <pf-masthead-main>
          <pf-masthead-brand>Logo</pf-masthead-brand>
        </pf-masthead-main>
        <pf-masthead-content>
          <span>Content</span>
        </pf-masthead-content>
      </pf-masthead>
    </story-canvas>

    <story-canvas title="Light200 variant">
      <pf-masthead background-color="light200">
        <pf-masthead-toggle>
          <pf-button variant="plain" aria-label="Global navigation">
            <BarsIcon />
          </pf-button>
        </pf-masthead-toggle>
        <pf-masthead-main>
          <pf-masthead-brand>Logo</pf-masthead-brand>
        </pf-masthead-main>
        <pf-masthead-content>
          <span>Content</span>
        </pf-masthead-content>
      </pf-masthead>
    </story-canvas>

    <story-canvas title="Inset">
      <pf-masthead inset="sm">
        <pf-masthead-toggle>
          <pf-button variant="plain" aria-label="Global navigation">
            <BarsIcon />
          </pf-button>
        </pf-masthead-toggle>
        <pf-masthead-main>
          <pf-masthead-brand>Logo</pf-masthead-brand>
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
