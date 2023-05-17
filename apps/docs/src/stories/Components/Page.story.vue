<template>
  <doc-page title="Page">
    <component-title name="pf-page" />

    <pre v-md>
      The **page** component is used to define the basic layout of a page with either vertical or horizontal navigation.
      See full [Design guidelines](https://www.patternfly.org/v4/components/page/design-guidelines) on the official patternfly documentation.
      ## Differences from patternfly-react
      - `pf-page-breadcrumb` and `pf-page-section` can be limited in width by setting their `max-width` prop.
    </pre>

    <story-canvas title="Example">
      <pf-page managed-sidebar>
        <template #skeleton>
          <pf-page-header show-nav-toggle>
            <template #logo>
              <pf-brand src="https://www.patternfly.org/assets/images/pf_logo.svg" style="height:40px;filter:invert(1)" />
            </template>
            <pf-page-header-tools>
              <pf-page-header-tools-group>
                <pf-page-header-tools-item visibility-xs="hidden">
                  header-tools
                </pf-page-header-tools-item>
              </pf-page-header-tools-group>
            </pf-page-header-tools>
          </pf-page-header>
          <pf-page-sidebar nav-open>
            <pf-nav>
              <pf-nav-group title="Overview">
                <pf-nav-item>Home</pf-nav-item>
              </pf-nav-group>
              <pf-nav-group title="Components">
                <pf-nav-item>Accordion</pf-nav-item>
                <pf-nav-item>Alert</pf-nav-item>
              </pf-nav-group>
            </pf-nav>
          </pf-page-sidebar>
        </template>
        <pf-page-breadcrumb sticky="top" shadow-bottom>
          <pf-breadcrumb>
            <pf-breadcrumb-item href="#">Section home</pf-breadcrumb-item>
            <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
            <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
            <pf-breadcrumb-item href="#" active>Section landing</pf-breadcrumb-item>
          </pf-breadcrumb>
        </pf-page-breadcrumb>
        <pf-page-section variant="darker">Section with darker background</pf-page-section>
        <pf-page-section variant="dark">Section with dark background</pf-page-section>
        <pf-page-section variant="light">Section with light background</pf-page-section>
        <pf-page-section width-limited>Section with limited width</pf-page-section>
      </pf-page>
    </story-canvas>

    <story-canvas title="Centered">
      <pf-page managed-sidebar>
        <template #skeleton>
          <pf-page-header show-nav-toggle>
            <template #logo>
              <pf-brand src="https://www.patternfly.org/assets/images/pf_logo.svg" style="height:40px;filter:invert(1)" />
            </template>
            <pf-page-header-tools>
              <pf-page-header-tools-group>
                <pf-page-header-tools-item visibility-xs="hidden">
                  header-tools
                </pf-page-header-tools-item>
              </pf-page-header-tools-group>
            </pf-page-header-tools>
          </pf-page-header>
          <pf-page-sidebar nav-open>
            <pf-nav>
              <pf-nav-group title="Overview">
                <pf-nav-item>Home</pf-nav-item>
              </pf-nav-group>
              <pf-nav-group title="Components">
                <pf-nav-item>Accordion</pf-nav-item>
                <pf-nav-item>Alert</pf-nav-item>
              </pf-nav-group>
            </pf-nav>
          </pf-page-sidebar>
        </template>
        <pf-page-section max-width="20rem" center-aligned sticky-sm="bottom">
          <pf-card>
            <pf-card-body>
              When a width limited page section is wider than the value of
              <code>--pf-c-page--section--m-limit-width--MaxWidth</code>, the section will be centered in the main
              section.
              <br>
              <br>
              The content in this example is placed in a card to better illustrate how the section behaves when it is
              centered. A card is not required to center a page section.
            </pf-card-body>
          </pf-card>
        </pf-page-section>
      </pf-page>
    </story-canvas>
  </doc-page>
</template>
