<template>
  <doc-page title="Page">
    <component-title name="pf-page" />

    <pre v-md>
      The **page** component is used to define the basic layout of a page with either vertical or horizontal navigation.

      See full [design guidelines](https://www.patternfly.org/components/page/design-guidelines) on the official patternfly documentation.
      ## Differences from patternfly-react
      - `pf-page-breadcrumb`, `pf-page-navigation` and `pf-page-section` can be limited in width by setting their `max-width` prop.

      ## Examples

      ### Basic page components
      A page will typically contain the following components:

      - A `&lt;pf-page&gt;` with a `header` that often contains a [masthead](#/stories/components/masthead)
        - Mastheads contain the `&lt;pf-page-toggle-button&gt;`, a `&lt;pf-masthead-main&gt;` that contains a `&lt;pf-masthead-brand&gt;`, and the page's header toolbar within `&lt;pf-masthead-content&gt;`.
      - 1 or more `&lt;pf-page-sidebar-body&gt;` components inside `&lt;pf-page-sidebar&gt;` for vertical navigation or other sidebar content
      - 1 or more `&lt;pf-page-section&gt;` components
    </pre>

    <story-canvas title="Vertical Navigation" style="height:500px">
      <template #intro>
        <pre v-md>
          To add a vertical sidebar to a `&lt;pf-page&gt;`, pass a `&lt;pf-page-sidebar&gt;` component into the `sidebar` property. To render navigation in the sidebar, pass a `&lt;pf-page-sidebar-body&gt;` component to `&lt;pf-page-sidebar&gt;`.

          The `sidebar-open` property helps facilitate the opening and closing of the sidebar and should be 'true' when the sidebar is visible.
        </pre>
      </template>

      <pf-page managed-sidebar>
        <template #skeleton>
          <pf-masthead>
            <pf-masthead-toggle>
              <pf-page-toggle-button variant="plain">
                <bars-icon />
              </pf-page-toggle-button>
            </pf-masthead-toggle>
            <pf-masthead-main>
              <router-link v-slot="{ href }" :to="{ name: 'introduction' }" custom>
                <pf-masthead-brand :href="href">
                  Logo
                </pf-masthead-brand>
              </router-link>
            </pf-masthead-main>
            <pf-masthead-content>
              <pf-toolbar>
                <pf-toolbar-content>
                  <pf-toolbar-item>header-tools</pf-toolbar-item>
                </pf-toolbar-content>
              </pf-toolbar>
            </pf-masthead-content>
          </pf-masthead>

          <pf-page-sidebar>
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

    <story-canvas title="Centered" style="height:500px">
      <template #intro>
        <pre v-md>
          By default, a page section spans the width of the page. To reduce the width of a section, use the `width-limited` property. To center align width-limited page sections, use the `center-aligned` property. When the main content area of a page is wider than the value of a centered, width-limited page section's `--pf-v5-c-page--section--m-limit-width--MaxWidth` custom property, the section will automatically be centered.

          The content in this example is placed in a card to better illustrate how the section behaves when it is centered, but a card is not required to center a page section.
        </pre>
      </template>

      <pf-page managed-sidebar>
        <template #skeleton>
          <pf-masthead>
            <pf-masthead-toggle>
              <pf-page-toggle-button variant="plain">
                <bars-icon />
              </pf-page-toggle-button>
            </pf-masthead-toggle>
            <pf-masthead-main>
              <router-link v-slot="{ href }" :to="{ name: 'introduction' }" custom>
                <pf-masthead-brand :href="href">
                  Logo
                </pf-masthead-brand>
              </router-link>
            </pf-masthead-main>
            <pf-masthead-content>
              <pf-toolbar>
                <pf-toolbar-content>
                  <pf-toolbar-item>header-tools</pf-toolbar-item>
                </pf-toolbar-content>
              </pf-toolbar>
            </pf-masthead-content>
          </pf-masthead>

          <pf-page-sidebar>
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
              <code>--pf-v5-c-page--section--m-limit-width--MaxWidth</code>, the section will be centered in the main
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

    <story-canvas title="With notification drawer" style="height:500px">
      <pf-page managed-sidebar :drawer-expanded="expanded">
        <template #skeleton>
          <pf-masthead>
            <pf-masthead-toggle>
              <pf-page-toggle-button variant="plain">
                <bars-icon />
              </pf-page-toggle-button>
            </pf-masthead-toggle>
            <pf-masthead-main>
              <router-link v-slot="{ href }" :to="{ name: 'introduction' }" custom>
                <pf-masthead-brand :href="href">
                  Logo
                </pf-masthead-brand>
              </router-link>
            </pf-masthead-main>
            <pf-masthead-content>
              <pf-toolbar>
                <pf-toolbar-content>
                  <pf-toolbar-group space-items="none" align="right">
                    <pf-toolbar-item visibility="visible" :selected="expanded">
                      <pf-notification-badge variant="unread" :expanded="expanded" @click="expanded = !expanded">
                        <bell-icon />
                      </pf-notification-badge>
                    </pf-toolbar-item>
                  </pf-toolbar-group>
                </pf-toolbar-content>
              </pf-toolbar>
            </pf-masthead-content>
          </pf-masthead>

          <pf-page-sidebar>
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

        <template #drawer>
          Drawer content
        </template>

        <pf-page-section>
          Main section
        </pf-page-section>
      </pf-page>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import BarsIcon from '@vue-patternfly/icons/bars-icon';
import BellIcon from '@vue-patternfly/icons/bell-icon';
import { ref } from 'vue';

const expanded = ref(false);
</script>
