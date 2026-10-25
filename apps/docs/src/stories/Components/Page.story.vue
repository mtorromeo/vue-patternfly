<template>
  <doc-page title="Page">
    <template #description
      >The <b>page</b> component is used to define the basic layout of a page with either vertical or horizontal
      navigation.</template
    >

    <template #apidocs>
      <component-info name="PfPage" />
      <component-info name="PfPageBreadcrumb" />
      <component-info name="PfPageFooter" />
      <component-info name="PfPageGroup" />
      <component-info name="PfPageHeader" />
      <component-info name="PfPageSection" />
      <component-info name="PfPageSidebar" />
      <component-info name="PfPageSidebarBody" />
      <component-info name="PfPageToggleButton" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - `pf-page-breadcrumb` and `pf-page-section` can be limited in width by setting their `max-width` prop.

      ## Examples

      ### Basic page components
      A page will typically contain the following components:

      - A `&lt;pf-page&gt;` with a `header` that often contains a [masthead](#/stories/components/masthead)
        - Mastheads contain the `&lt;pf-page-toggle-button&gt;`, a `&lt;pf-masthead-main&gt;` that contains a `&lt;pf-masthead-brand&gt;`, and the page's header toolbar within `&lt;pf-masthead-content&gt;`.
      - 1 or more `&lt;pf-page-sidebar-body&gt;` components inside `&lt;pf-page-sidebar&gt;` for vertical navigation or other sidebar content
      - 1 or more `&lt;pf-page-section&gt;` components
    </pre>

    <story-canvas title="Vertical Navigation">
      <template #intro>
        <pre v-md>
          To add a vertical sidebar to a `&lt;pf-page&gt;`, pass a `&lt;pf-page-sidebar&gt;` component into the `sidebar` property. To render navigation in the sidebar, pass a `&lt;pf-page-sidebar-body&gt;` component to `&lt;pf-page-sidebar&gt;`.

          The `sidebar-open` property helps facilitate the opening and closing of the sidebar and should be 'true' when the sidebar is visible.
        </pre>
      </template>

      <pf-page managed-sidebar style="height: 500px">
        <template #masthead>
          <pf-masthead>
            <pf-masthead-main>
              <pf-masthead-toggle>
                <pf-page-toggle-button hamburger />
              </pf-masthead-toggle>

              <router-link v-slot="{ href }" :to="{ name: 'introduction' }" custom>
                <pf-masthead-brand :href="href"> Logo </pf-masthead-brand>
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
        </template>

        <template #sidebar>
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

        <pf-page-section>Section 1</pf-page-section>
        <pf-page-section variant="secondary">Section 2 with secondary styling</pf-page-section>
        <pf-page-section>Section 3</pf-page-section>
      </pf-page>
    </story-canvas>

    <story-canvas title="Centered" style="height: 500px">
      <template #intro>
        <pre v-md>
          By default, a page section spans the width of the page. To reduce the width of a section, use the `width-limited` property. To center align width-limited page sections, use the `center-aligned` property. When the main content area of a page is wider than the value of a centered, width-limited page section's `--pf-v6-c-page--section--m-limit-width--MaxWidth` custom property, the section will automatically be centered.

          The content in this example is placed in a card to better illustrate how the section behaves when it is centered, but a card is not required to center a page section.
        </pre>
      </template>

      <pf-page managed-sidebar style="height: 500px">
        <template #masthead>
          <pf-masthead>
            <pf-masthead-main>
              <pf-masthead-toggle>
                <pf-page-toggle-button hamburger />
              </pf-masthead-toggle>

              <router-link v-slot="{ href }" :to="{ name: 'introduction' }" custom>
                <pf-masthead-brand :href="href"> Logo </pf-masthead-brand>
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
        </template>

        <template #sidebar>
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
              <code>--pf-v6-c-page--section--m-limit-width--MaxWidth</code>, the section will be centered in the main
              section.
              <br />
              <br />
              The content in this example is placed in a card to better illustrate how the section behaves when it is
              centered. A card is not required to center a page section.
            </pf-card-body>
          </pf-card>
        </pf-page-section>
      </pf-page>
    </story-canvas>

    <story-canvas title="With notification drawer">
      <pf-page managed-sidebar :drawer-expanded="expanded" style="height: 500px">
        <template #masthead>
          <pf-masthead>
            <pf-masthead-main>
              <pf-masthead-toggle>
                <pf-page-toggle-button hamburger />
              </pf-masthead-toggle>

              <router-link v-slot="{ href }" :to="{ name: 'introduction' }" custom>
                <pf-masthead-brand :href="href"> Logo </pf-masthead-brand>
              </router-link>
            </pf-masthead-main>

            <pf-masthead-content>
              <pf-toolbar full-height>
                <pf-toolbar-content>
                  <pf-toolbar-group align="end">
                    <pf-toolbar-item visibility="visible">
                      <pf-notification-badge variant="read" :expanded="expanded" @click="expanded = !expanded">
                        <bell-icon />
                      </pf-notification-badge>
                    </pf-toolbar-item>
                  </pf-toolbar-group>
                </pf-toolbar-content>
              </pf-toolbar>
            </pf-masthead-content>
          </pf-masthead>
        </template>

        <template #sidebar>
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
              <pf-dropdown close-on-select position="right">
                <template #toggle>
                  <pf-menu-toggle variant="plain" />
                </template>

                <pf-dropdown-item>Action</pf-dropdown-item>
              </pf-dropdown>
            </pf-notification-drawer-header>

            <pf-notification-drawer-body>
              <pf-notification-drawer-group-list>
                <pf-notification-drawer-group title="First notification group" count="2">
                  <pf-notification-drawer-list aria-label="Notifications in the basic example">
                    <pf-notification-drawer-list-item variant="info">
                      <pf-notification-drawer-list-item-header
                        variant="info"
                        title="Unread info notification title"
                        sr-title="Info notification:"
                      >
                        <pf-dropdown close-on-select position="right">
                          <template #toggle>
                            <pf-menu-toggle variant="plain" />
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
                        <pf-dropdown close-on-select position="right">
                          <template #toggle>
                            <pf-menu-toggle variant="plain" />
                          </template>

                          <pf-dropdown-item>Action</pf-dropdown-item>
                        </pf-dropdown>
                      </pf-notification-drawer-list-item-header>
                      <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
                        This is a danger notification description. This is a long description to show how the title will
                        wrap if it is long and wraps to multiple lines.
                      </pf-notification-drawer-list-item-body>
                    </pf-notification-drawer-list-item>

                    <pf-notification-drawer-list-item variant="warning" read>
                      <pf-notification-drawer-list-item-header
                        variant="warning"
                        title="Read warning notification title"
                        sr-title="Warning notification:"
                      >
                        <pf-dropdown close-on-select position="right">
                          <template #toggle>
                            <pf-menu-toggle variant="plain" />
                          </template>

                          <pf-dropdown-item>Action</pf-dropdown-item>
                        </pf-dropdown>
                      </pf-notification-drawer-list-item-header>
                      <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
                        This is a danger notification description. This is a long description to show how the title will
                        wrap if it is long and wraps to multiple lines.
                      </pf-notification-drawer-list-item-body>
                    </pf-notification-drawer-list-item>

                    <pf-notification-drawer-list-item variant="success" read>
                      <pf-notification-drawer-list-item-header
                        variant="success"
                        title="Read success notification title"
                        sr-title="Success notification:"
                      >
                        <pf-dropdown close-on-select position="right">
                          <template #toggle>
                            <pf-menu-toggle variant="plain" />
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

                <pf-notification-drawer-group title="Second notification group" count="2">
                  <pf-notification-drawer-list aria-label="Notifications in the second group">
                    <pf-notification-drawer-list-item variant="info">
                      <pf-notification-drawer-list-item-header
                        variant="info"
                        title="Unread info notification title"
                        sr-title="Info notification:"
                      >
                        <pf-dropdown close-on-select position="right">
                          <template #toggle>
                            <pf-menu-toggle variant="plain" />
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
                        <pf-dropdown close-on-select position="right">
                          <template #toggle>
                            <pf-menu-toggle variant="plain" />
                          </template>

                          <pf-dropdown-item>Action</pf-dropdown-item>
                        </pf-dropdown>
                      </pf-notification-drawer-list-item-header>
                      <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
                        This is a danger notification description. This is a long description to show how the title will
                        wrap if it is long and wraps to multiple lines.
                      </pf-notification-drawer-list-item-body>
                    </pf-notification-drawer-list-item>

                    <pf-notification-drawer-list-item variant="warning" read>
                      <pf-notification-drawer-list-item-header
                        variant="warning"
                        title="Read warning notification title"
                        sr-title="Warning notification:"
                      >
                        <pf-dropdown close-on-select position="right">
                          <template #toggle>
                            <pf-menu-toggle variant="plain" />
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
                        <pf-dropdown close-on-select position="right">
                          <template #toggle>
                            <pf-menu-toggle variant="plain" />
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

        <pf-page-section> Main section </pf-page-section>
      </pf-page>
    </story-canvas>

    <story-canvas title="Docked navigation">
      <template #intro>
        <pre v-md>
          With the `docked` variant, the content of the `dock-content` slot is rendered in a vertical dock, while the `masthead` slot is only rendered at mobile viewports. The docked components (`pf-nav`, `pf-button` and `pf-menu-toggle`) only display their text when the dock is expanded.

          Set `dock-expanded` to expand the dock inline, pushing the page content aside.

          With `dock-overlay` the expanded dock is instead positioned on top of the page content, like it always is at mobile viewports; while not expanded, an overlay dock is hidden. In this example the overlay is used when a nav group is opened from the collapsed dock: try expanding "Folder" while the dock is collapsed. Selecting an item, pressing Escape or clicking outside the dock closes the overlay.

          The dock is fixed to the viewport, so the page in this example uses `transform` to keep it inside the example frame.
        </pre>
      </template>

      <div ref="dockedPage">
        <pf-page
          variant="docked"
          :dock-expanded="dockExpanded"
          :dock-overlay="dockOverlay"
          style="height: 500px; transform: translateZ(0)"
        >
          <template #masthead>
            <pf-masthead>
              <pf-masthead-main>
                <pf-masthead-toggle>
                  <pf-button
                    variant="plain"
                    hamburger
                    :expanded="dockExpanded"
                    aria-label="Global navigation"
                    @click="toggleDock"
                  />
                </pf-masthead-toggle>
                <pf-masthead-brand href="#">Logo</pf-masthead-brand>
              </pf-masthead-main>
            </pf-masthead>
          </template>

          <template #dock-content>
            <pf-masthead variant="docked">
              <pf-masthead-main>
                <pf-masthead-toggle>
                  <pf-button
                    variant="plain"
                    hamburger
                    :expanded="dockExpanded"
                    aria-label="Global navigation"
                    @click="toggleDock"
                  />
                </pf-masthead-toggle>
              </pf-masthead-main>
              <pf-divider />
              <pf-masthead-content>
                <pf-toolbar vertical>
                  <pf-toolbar-content>
                    <pf-toolbar-item>
                      <pf-nav
                        variant="docked"
                        :expanded="dockExpanded"
                        aria-label="Docked global"
                        @select="onDockSelect"
                      >
                        <pf-nav-list>
                          <pf-nav-item active>
                            <template #icon><cubes-icon /></template>
                            System panel
                          </pf-nav-item>
                          <pf-nav-expandable
                            title="Folder"
                            expandable-icon
                            :expanded="folderExpanded"
                            @update:expanded="toggleFolder"
                          >
                            <template #icon><folder-icon /></template>
                            <pf-nav-item>
                              <template #icon><file-icon /></template>
                              Subnav link 1
                            </pf-nav-item>
                          </pf-nav-expandable>
                          <pf-nav-item>
                            <template #icon><cloud-icon /></template>
                            Authentication
                          </pf-nav-item>
                          <pf-nav-item>
                            <template #icon><code-icon /></template>
                            Network services
                          </pf-nav-item>
                        </pf-nav-list>
                      </pf-nav>
                    </pf-toolbar-item>
                    <pf-toolbar-group variant="action-group-plain" align="end" gap="none" gap-md="md">
                      <pf-toolbar-item>
                        <pf-menu-toggle variant="plain" docked aria-label="Applications">
                          <template #icon><table-cells-large-icon /></template>
                          Applications
                        </pf-menu-toggle>
                      </pf-toolbar-item>
                      <pf-toolbar-item>
                        <pf-button variant="plain" docked settings aria-label="Settings">Settings</pf-button>
                      </pf-toolbar-item>
                    </pf-toolbar-group>
                  </pf-toolbar-content>
                </pf-toolbar>
              </pf-masthead-content>
            </pf-masthead>
          </template>

          <pf-page-section>Main section</pf-page-section>
        </pf-page>
      </div>
    </story-canvas>

    <story-canvas title="Custom header and footer">
      <template #intro>
        <pre v-md>
          `pf-page-header` can be passed to the `masthead` slot as an alternative to `pf-masthead`, to wrap custom header content. Use `pf-page-footer` in the `footer` slot to render a footer below the main content.

          The `plain` property renders the page without the content area background and overflow scroll.
        </pre>
      </template>

      <pf-switch v-model:checked="plain" label="Plain" /><br /><br />

      <pf-page :plain="plain" style="height: 300px">
        <template #masthead>
          <pf-page-header>Custom header content</pf-page-header>
        </template>

        <pf-page-section>Main section</pf-page-section>

        <template #footer>
          <pf-page-footer>Custom footer content</pf-page-footer>
        </template>
      </pf-page>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import BellIcon from '@vue-patternfly/icons/bell-icon';
import CloudIcon from '@vue-patternfly/icons/cloud-icon';
import CodeIcon from '@vue-patternfly/icons/code-icon';
import CubesIcon from '@vue-patternfly/icons/cubes-icon';
import FileIcon from '@vue-patternfly/icons/file-icon';
import FolderIcon from '@vue-patternfly/icons/folder-icon';
import MagnifyingGlassIcon from '@vue-patternfly/icons/magnifying-glass-icon';
import TableCellsLargeIcon from '@vue-patternfly/icons/table-cells-large-icon';
import { onKeyStroke, onClickOutside } from '@vueuse/core';
import { computed, ref, useTemplateRef } from 'vue';

const expanded = ref(false);
const plain = ref(false);

const dockExpanded = ref(false);
const dockOverlay = ref(false);
const folderExpanded = ref(false);
const dockedPage = useTemplateRef<HTMLElement>('dockedPage');
const dock = computed(() => dockedPage.value?.querySelector<HTMLElement>('.pf-v6-c-page__dock'));

function closeDock() {
  dockExpanded.value = false;
  dockOverlay.value = false;
}

function toggleDock() {
  if (dockExpanded.value) {
    closeDock();
  } else {
    dockExpanded.value = true;
  }
}

function toggleFolder(value: boolean) {
  // opening a group from the collapsed dock expands it as an overlay
  if (!dockExpanded.value) {
    folderExpanded.value = true;
    dockOverlay.value = true;
    dockExpanded.value = true;
  } else {
    folderExpanded.value = value;
  }
}

function onDockSelect() {
  if (dockOverlay.value) {
    closeDock();
  }
}

onKeyStroke('Escape', () => {
  if (dockOverlay.value) {
    closeDock();
  }
});

onClickOutside(dock, () => {
  if (dockOverlay.value) {
    closeDock();
  }
});
</script>
