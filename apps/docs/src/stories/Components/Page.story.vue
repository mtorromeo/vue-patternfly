<template>
  <doc-page title="Page">
    <template #description>The <b>page</b> component is used to define the basic layout of a page with either vertical or horizontal navigation.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Page/Page.vue" />
      <component-info src="packages/core/src/components/Page/PageBreadcrumb.vue" />
      <component-info src="packages/core/src/components/Page/PageGroup.vue" />
      <component-info src="packages/core/src/components/Page/PageNavigation.vue" />
      <component-info src="packages/core/src/components/Page/PageSection.vue" />
      <component-info src="packages/core/src/components/Page/PageSidebar.vue" />
      <component-info src="packages/core/src/components/Page/PageSidebarBody.vue" />
      <component-info src="packages/core/src/components/Page/PageToggleButton.vue" />
    </template>

    <pre v-md>
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
              <pf-page-toggle-button>
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
              <pf-toolbar full-height>
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
              <pf-page-toggle-button>
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
              <pf-toolbar full-height>
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
              <pf-page-toggle-button>
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
              <pf-toolbar full-height>
                <pf-toolbar-content>
                  <pf-toolbar-group space-items="none" align="right">
                    <pf-toolbar-item visibility="visible">
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

          <pf-notification-drawer>
            <pf-notification-drawer-header count="4">
              <pf-dropdown position="right">
                <template #toggle>
                  <pf-menu-toggle variant="plain">
                    <ellipsis-vertical-icon aria-hidden="true" />
                  </pf-menu-toggle>
                </template>

                <pf-dropdown-item>Action</pf-dropdown-item>
              </pf-dropdown>
            </pf-notification-drawer-header>

            <pf-notification-drawer-body>
              <pf-notification-drawer-group-list>
                <pf-notification-drawer-group
                  title="First notification group"
                  count="2"
                >
                  <pf-notification-drawer-list aria-label="Notifications in the basic example">
                    <pf-notification-drawer-list-item variant="info">
                      <pf-notification-drawer-list-item-header
                        variant="info"
                        title="Unread info notification title"
                        sr-title="Info notification:"
                      >
                        <pf-dropdown position="right">
                          <template #toggle>
                            <pf-menu-toggle variant="plain">
                              <ellipsis-vertical-icon aria-hidden="true" />
                            </pf-menu-toggle>
                          </template>

                          <pf-dropdown-item>Action</pf-dropdown-item>
                        </pf-dropdown>
                      </pf-notification-drawer-list-item-header>
                      <pf-notification-drawer-list-item-body timestamp="5 minutes ago">
                        This is an info notification description.
                      </pf-notification-drawer-list-item-body>
                    </pf-notification-drawer-list-item>

                    <pf-notification-drawer-list-item variant="danger">
                      <pf-notification-drawer-list-item-header
                        variant="danger"
                        title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                        sr-title="Danger notification:"
                      >
                        <pf-dropdown position="right">
                          <template #toggle>
                            <pf-menu-toggle variant="plain">
                              <ellipsis-vertical-icon aria-hidden="true" />
                            </pf-menu-toggle>
                          </template>

                          <pf-dropdown-item>Action</pf-dropdown-item>
                        </pf-dropdown>
                      </pf-notification-drawer-list-item-header>
                      <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
                        This is a danger notification description. This is a long description to show how the title will wrap if
                        it is long and wraps to multiple lines.
                      </pf-notification-drawer-list-item-body>
                    </pf-notification-drawer-list-item>

                    <pf-notification-drawer-list-item variant="warning" read>
                      <pf-notification-drawer-list-item-header
                        variant="warning"
                        title="Read warning notification title"
                        sr-title="Warning notification:"
                      >
                        <pf-dropdown position="right">
                          <template #toggle>
                            <pf-menu-toggle variant="plain">
                              <ellipsis-vertical-icon aria-hidden="true" />
                            </pf-menu-toggle>
                          </template>

                          <pf-dropdown-item>Action</pf-dropdown-item>
                        </pf-dropdown>
                      </pf-notification-drawer-list-item-header>
                      <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
                        This is a danger notification description. This is a long description to show how the title will wrap if
                        it is long and wraps to multiple lines.
                      </pf-notification-drawer-list-item-body>
                    </pf-notification-drawer-list-item>

                    <pf-notification-drawer-list-item variant="success" read>
                      <pf-notification-drawer-list-item-header
                        variant="success"
                        title="Read success notification title"
                        sr-title="Success notification:"
                      >
                        <pf-dropdown position="right">
                          <template #toggle>
                            <pf-menu-toggle variant="plain">
                              <ellipsis-vertical-icon aria-hidden="true" />
                            </pf-menu-toggle>
                          </template>

                          <pf-dropdown-item>Action</pf-dropdown-item>
                        </pf-dropdown>
                      </pf-notification-drawer-list-item-header>
                      <pf-notification-drawer-list-item-body timestamp="30 minutes ago">
                        This is a success notification description.
                      </pf-notification-drawer-list-item-body>
                    </pf-notification-drawer-list-item>
                  </pf-notification-drawer-list>
                </pf-notification-drawer-group>


                <pf-notification-drawer-group
                  title="Second notification group"
                  count="2"
                >
                  <pf-notification-drawer-list aria-label="Notifications in the second group">
                    <pf-notification-drawer-list-item variant="info">
                      <pf-notification-drawer-list-item-header
                        variant="info"
                        title="Unread info notification title"
                        sr-title="Info notification:"
                      >
                        <pf-dropdown position="right">
                          <template #toggle>
                            <pf-menu-toggle variant="plain">
                              <ellipsis-vertical-icon aria-hidden="true" />
                            </pf-menu-toggle>
                          </template>

                          <pf-dropdown-item>Action</pf-dropdown-item>
                        </pf-dropdown>
                      </pf-notification-drawer-list-item-header>
                      <pf-notification-drawer-list-item-body timestamp="5 minutes ago">
                        This is an info notification description.
                      </pf-notification-drawer-list-item-body>
                    </pf-notification-drawer-list-item>

                    <pf-notification-drawer-list-item variant="danger">
                      <pf-notification-drawer-list-item-header
                        variant="danger"
                        title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                        sr-title="Danger notification:"
                      >
                        <pf-dropdown position="right">
                          <template #toggle>
                            <pf-menu-toggle variant="plain">
                              <ellipsis-vertical-icon aria-hidden="true" />
                            </pf-menu-toggle>
                          </template>

                          <pf-dropdown-item>Action</pf-dropdown-item>
                        </pf-dropdown>
                      </pf-notification-drawer-list-item-header>
                      <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
                        This is a danger notification description. This is a long description to show how the title will wrap
                        if it is long and wraps to multiple lines.
                      </pf-notification-drawer-list-item-body>
                    </pf-notification-drawer-list-item>

                    <pf-notification-drawer-list-item variant="warning" read>
                      <pf-notification-drawer-list-item-header
                        variant="warning"
                        title="Read warning notification title"
                        sr-title="Warning notification:"
                      >
                        <pf-dropdown position="right">
                          <template #toggle>
                            <pf-menu-toggle variant="plain">
                              <ellipsis-vertical-icon aria-hidden="true" />
                            </pf-menu-toggle>
                          </template>

                          <pf-dropdown-item>Action</pf-dropdown-item>
                        </pf-dropdown>
                      </pf-notification-drawer-list-item-header>
                      <pf-notification-drawer-list-item-body timestamp="20 minutes ago">
                        This is a warning notification description.
                      </pf-notification-drawer-list-item-body>
                    </pf-notification-drawer-list-item>

                    <pf-notification-drawer-list-item variant="success" read>
                      <pf-notification-drawer-list-item-header
                        variant="success"
                        title="Read success notification title"
                        sr-title="Success notification:"
                      >
                        <pf-dropdown position="right">
                          <template #toggle>
                            <pf-menu-toggle variant="plain">
                              <ellipsis-vertical-icon aria-hidden="true" />
                            </pf-menu-toggle>
                          </template>

                          <pf-dropdown-item>Action</pf-dropdown-item>
                        </pf-dropdown>
                      </pf-notification-drawer-list-item-header>
                      <pf-notification-drawer-list-item-body timestamp="30 minutes ago">
                        This is a success notification description.
                      </pf-notification-drawer-list-item-body>
                    </pf-notification-drawer-list-item>
                  </pf-notification-drawer-list>
                </pf-notification-drawer-group>

                <pf-notification-drawer-group
                  title="Third notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line."
                  count="0"
                  :truncate-title="1"
                  read
                >
                  <pf-notification-drawer-list aria-label="Notifications in the third group">
                    <pf-empty-state variant="full">
                      <pf-empty-state-header heading-level="h2" title="No alerts found">
                        <template #icon>
                          <magnifying-glass-icon />
                        </template>
                      </pf-empty-state-header>
                      <pf-empty-state-body>
                        There are currently no critical alerts firing. There may be firing alerts of other severities or
                        silenced critical alerts however.
                      </pf-empty-state-body>
                      <pf-empty-state-footer>
                        <pf-empty-state-actions>
                          <pf-button variant="link">Action</pf-button>
                        </pf-empty-state-actions>
                      </pf-empty-state-footer>
                    </pf-empty-state>
                  </pf-notification-drawer-list>
                </pf-notification-drawer-group>

              </pf-notification-drawer-group-list>
            </pf-notification-drawer-body>
          </pf-notification-drawer>

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
