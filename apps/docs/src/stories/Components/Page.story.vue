<template>
  <define-masthead v-slot="{ id, sidebarOpen, toggle }">
    <pf-masthead>
      <pf-masthead-main>
        <pf-masthead-toggle v-if="id">
          <pf-page-toggle-button
            :id="id"
            hamburger
            aria-label="Global navigation"
            :sidebar-open="sidebarOpen"
            @update:sidebar-open="toggle?.()"
          />
        </pf-masthead-toggle>
        <pf-masthead-brand>
          <pf-masthead-logo href="https://patternfly.org" target="_blank">Logo</pf-masthead-logo>
        </pf-masthead-brand>
      </pf-masthead-main>
      <pf-masthead-content>
        <pf-toolbar>
          <pf-toolbar-content>
            <pf-toolbar-item>header-tools</pf-toolbar-item>
          </pf-toolbar-content>
        </pf-toolbar>
      </pf-masthead-content>
    </pf-masthead>
  </define-masthead>

  <doc-page title="Page">
    <template #description
      >The <b>page</b> component is used to define the basic layout of a page with either vertical or horizontal
      navigation.</template
    >

    <template #apidocs>
      <component-info name="PfPage" />
      <component-info name="PfPageHeader" />
      <component-info name="PfPageSidebar" />
      <component-info name="PfPageSidebarBody" />
      <component-info name="PfPageSection" />
      <component-info name="PfPageGroup" />
      <component-info name="PfPageBreadcrumb" />
      <component-info name="PfPageBody" />
      <component-info name="PfPageToggleButton" />
      <component-info name="PfPageFooter" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `masthead`, `sidebar`, `footer`, `skipToContent`, `notificationDrawer` and `dockContent` props of `pf-page` are slots (`drawer` for the notification drawer); without a `pf-page-sidebar`, the page gets the no-sidebar layout.
      - `pf-page` has no `breadcrumb`, `horizontalSubnav`, `banner` or grouping props: put a `pf-page-breadcrumb`, a subnav `pf-page-section` or a `pf-page-group` in the default slot.
      - Boolean props drop their prefix (`managed-sidebar`, `content-filled`, `plain`, `width-limited`, `filled`, `sticky-stuck`…); `hasBodyWrapper` is `no-body-wrapper` and `usePageInsets` is `insets`.
      - The open state of an unmanaged sidebar is bound with `v-model:sidebar-open` on `pf-page-toggle-button`, and `isNotificationDrawerExpanded` is `drawer-expanded`; `onPageResize` and `onNotificationDrawerExpand` are the `page-resize` and `notification-drawer-expand` events.
      - `padding` and `stickyOnBreakpoint` are flat breakpoint props (`padding`, `padding-md`, `sticky`, `sticky-lg`…).
      - `pf-page-breadcrumb` and `pf-page-section` can be limited in width by setting their `max-width` prop.
      - A `pf-page-sidebar` wraps loose content in a `pf-page-sidebar-body`.
      See [common differences from patternfly-react](#/).

      ## Examples

      ### Basic page components
      A page will typically contain the following components:

      - A `&lt;pf-page&gt;` with a `masthead` slot that often contains a [masthead](#/stories/components/masthead) or a `&lt;pf-page-header&gt;`
        - Mastheads contain a `&lt;pf-masthead-main&gt;` component, which includes the `&lt;pf-masthead-toggle&gt;`, a `&lt;pf-masthead-logo&gt;`, and the page's toolbar (via `&lt;pf-masthead-content&gt;`). The `&lt;pf-masthead-toggle&gt;` component contains a `&lt;pf-page-toggle-button&gt;`, and the `&lt;pf-masthead-logo&gt;` component contains a `&lt;pf-masthead-brand&gt;`.
      - 1 or more `&lt;pf-page-sidebar-body&gt;` components inside `&lt;pf-page-sidebar&gt;` for vertical navigation or other sidebar content
      - 1 or more `&lt;pf-page-section&gt;` components
    </pre>

    <story-canvas title="Vertical navigation">
      <template #intro>
        <pre v-md>
          To add a vertical sidebar to a `&lt;pf-page&gt;`, pass a `&lt;pf-page-sidebar&gt;` component into the `sidebar` slot. To render navigation in the sidebar, pass a `&lt;pf-page-sidebar-body&gt;` component to `&lt;pf-page-sidebar&gt;`.

          The `sidebar-open` property helps facilitate the opening and closing of the sidebar and should be `true` when the sidebar is visible.
        </pre>
      </template>

      <pf-page style="height: 400px">
        <template #masthead>
          <masthead id="vertical-nav-toggle" :sidebar-open="open.vertical" :toggle="() => toggle('vertical')" />
        </template>
        <template #sidebar>
          <pf-page-sidebar id="vertical-sidebar" :sidebar-open="open.vertical">
            <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
          </pf-page-sidebar>
        </template>
        <pf-page-section aria-labelledby="section-1">
          <h2 id="section-1">Vertical nav example section 1</h2>
        </pf-page-section>
        <pf-page-section variant="secondary" aria-labelledby="section-2">
          <h2 id="section-2">Vertical nav example section 2 with secondary variant styling</h2>
        </pf-page-section>
        <pf-page-section aria-labelledby="section-3">
          <h2 id="section-3">Vertical nav example section 3</h2>
        </pf-page-section>
      </pf-page>
    </story-canvas>

    <story-canvas title="Multiple sidebar body">
      <template #intro>
        <pre v-md>
          You can have multiple `&lt;pf-page-sidebar-body&gt;` components inside the `&lt;pf-page-sidebar&gt;` for more customization. You can modify the `&lt;pf-page-sidebar-body&gt;` further by passing the following properties:

          - `insets` will modify the component's insets to match page insets
          - `:filled="true"` will cause the component to grow to fill the available vertical space
          - `:filled="false"` will cause the component to **not** grow to fill the available vertical space

          By default, the last `&lt;pf-page-sidebar-body&gt;` will grow to fill the available vertical space. This can be changed by passing `:filled="false"` as demonstrated in the following example.
        </pre>
      </template>

      <pf-page style="height: 400px">
        <template #masthead>
          <masthead
            id="multiple-sidebar-body-nav-toggle"
            :sidebar-open="open.multiple"
            :toggle="() => toggle('multiple')"
          />
        </template>
        <template #sidebar>
          <pf-page-sidebar id="multiple-sidebar-body-sidebar" :sidebar-open="open.multiple">
            <pf-page-sidebar-body context-selector>
              First sidebar body (for a context selector/perspective switcher)
            </pf-page-sidebar-body>
            <pf-page-sidebar-body insets>Second sidebar body (with insets)</pf-page-sidebar-body>
            <pf-page-sidebar-body :filled="true">Third sidebar body (with fill)</pf-page-sidebar-body>
            <pf-page-sidebar-body :filled="false" insets>
              Fourth sidebar body (with insets and no fill)
            </pf-page-sidebar-body>
          </pf-page-sidebar>
        </template>
        <pf-page-section aria-labelledby="multiple-section-1">
          <h2 id="multiple-section-1">Multiple sidebar body example section 1</h2>
        </pf-page-section>
        <pf-page-section aria-labelledby="multiple-section-2">
          <h2 id="multiple-section-2">Multiple sidebar body example section 2</h2>
        </pf-page-section>
        <pf-page-section aria-labelledby="multiple-section-3">
          <h2 id="multiple-section-3">Multiple sidebar body example section 3</h2>
        </pf-page-section>
      </pf-page>
    </story-canvas>

    <story-canvas title="Horizontal navigation">
      <template #intro>
        <pre v-md>
          To add horizontal navigation to the top of a `&lt;pf-page&gt;`, add the navigation inside of a `&lt;pf-toolbar-item&gt;` in the `&lt;pf-toolbar&gt;` that is passed to the `&lt;pf-masthead-content&gt;` of the `&lt;pf-masthead&gt;`.
        </pre>
      </template>

      <pf-page style="height: 400px">
        <template #masthead>
          <pf-masthead inset="xs">
            <pf-masthead-main>
              <pf-masthead-brand>
                <pf-masthead-logo href="https://patternfly.org" target="_blank">Logo</pf-masthead-logo>
              </pf-masthead-brand>
            </pf-masthead-main>
            <pf-masthead-content>
              <pf-toolbar id="horizontal-toolbar">
                <pf-toolbar-content>
                  <pf-toolbar-item>Navigation</pf-toolbar-item>
                  <pf-toolbar-item>header-tools</pf-toolbar-item>
                </pf-toolbar-content>
              </pf-toolbar>
            </pf-masthead-content>
          </pf-masthead>
        </template>
        <pf-page-section aria-labelledby="horizontal-section-1">
          <h2 id="horizontal-section-1">Horizontal nav example section 1</h2>
        </pf-page-section>
        <pf-page-section variant="secondary" aria-labelledby="horizontal-section-2">
          <h2 id="horizontal-section-2">Horizontal nav example section 2 with secondary variant styling</h2>
        </pf-page-section>
        <pf-page-section aria-labelledby="horizontal-section-3">
          <h2 id="horizontal-section-3">Horizontal nav example section 3</h2>
        </pf-page-section>
      </pf-page>
    </story-canvas>

    <story-canvas title="Uncontrolled navigation">
      <template #intro>
        <pre v-md>
          When the `managed-sidebar` property is true, it manages the sidebar open/close state, removing the need to pass `sidebar-open` into the `&lt;pf-page-sidebar&gt;` and to bind it on the `&lt;pf-page-toggle-button&gt;`.
        </pre>
      </template>

      <pf-page managed-sidebar style="height: 400px">
        <template #masthead>
          <masthead id="uncontrolled-nav-toggle" />
        </template>
        <template #sidebar>
          <pf-page-sidebar id="uncontrolled-sidebar">
            <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
          </pf-page-sidebar>
        </template>
        <pf-page-section aria-labelledby="uncontrolled-section-1">
          <h2 id="uncontrolled-section-1">Uncontrolled nav example section 1</h2>
        </pf-page-section>
        <pf-page-section aria-labelledby="uncontrolled-section-2">
          <h2 id="uncontrolled-section-2">Uncontrolled nav example section 2</h2>
        </pf-page-section>
        <pf-page-section aria-labelledby="uncontrolled-section-3">
          <h2 id="uncontrolled-section-3">Uncontrolled nav example section 3</h2>
        </pf-page-section>
      </pf-page>
    </story-canvas>

    <story-canvas title="Filled page sections">
      <template #intro>
        <pre v-md>
          By default, page sections will not expand to fill in the available vertical space in a page.

          To change this default behavior, pass `content-filled` to the `&lt;pf-page&gt;` component and `:filled="true"` to any child `&lt;pf-page-section&gt;` or `&lt;pf-page-group&gt;` component that you want to fill the space. If multiple components are set to fill, then the available space will be split equally between them.
        </pre>
      </template>

      <pf-page content-filled style="height: 400px">
        <template #masthead>
          <masthead id="fill-nav-toggle" :sidebar-open="open.fill" :toggle="() => toggle('fill')" />
        </template>
        <template #sidebar>
          <pf-page-sidebar id="fill-sidebar" :sidebar-open="open.fill">
            <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
          </pf-page-sidebar>
        </template>
        <pf-page-section aria-labelledby="fill-section-1">
          <h2 id="fill-section-1">Section without fill</h2>
        </pf-page-section>
        <pf-page-section :filled="true" variant="secondary" aria-labelledby="fill-section-2">
          <h2 id="fill-section-2">Section with fill</h2>
        </pf-page-section>
        <pf-page-section aria-labelledby="fill-section-3">
          <h2 id="fill-section-3">Another section without fill</h2>
        </pf-page-section>
      </pf-page>
    </story-canvas>

    <story-canvas title="Main section padding">
      <template #intro>
        <pre v-md>
          To adjust the padding of a `&lt;pf-page-section&gt;`, you can pass in different values to the `padding` property and to its breakpoint variants `padding-sm`, `padding-md`, `padding-lg`, `padding-xl` and `padding-2xl`. Each property should be given a value of either "padding" or "no-padding".

          As the page's viewport width increases, breakpoints inherit the padding behavior of the previous breakpoint. For example, padding that is set on `lg` also applies to `xl` and `2xl`.

          To remove padding entirely, pass "no-padding" to `padding`. For example, the second section in this example passes in `padding="no-padding"`. Since no specific breakpoints are mentioned, every breakpoint will have no padding.

          To add padding at specific breakpoints, pass in "padding" at those breakpoints. For example, the third section in this example passes in `padding="no-padding" padding-md="padding"`. At `md`, `lg`, `xl`, and `2xl` breakpoints, the default value will be overwritten, and padding will be added.

          To remove padding at specific breakpoints, pass in "no-padding" at those breakpoints. For example, the fourth section in this example passes in `padding-md="no-padding"`, which means that `md`, `lg`, `xl`, and `2xl` breakpoints will have no padding.
        </pre>
      </template>

      <pf-page style="height: 400px">
        <template #masthead>
          <masthead id="main-padding-nav-toggle" :sidebar-open="open.padding" :toggle="() => toggle('padding')" />
        </template>
        <template #sidebar>
          <pf-page-sidebar id="main-padding-sidebar" :sidebar-open="open.padding">
            <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
          </pf-page-sidebar>
        </template>
        <pf-page-section aria-labelledby="padding-section-1">
          <h2 id="padding-section-1">Section with default padding</h2>
        </pf-page-section>
        <pf-page-section padding="no-padding" aria-labelledby="padding-section-2">
          <h2 id="padding-section-2">Section with no padding</h2>
        </pf-page-section>
        <pf-page-section padding="no-padding" padding-md="padding" aria-labelledby="padding-section-3">
          <h2 id="padding-section-3">Section with padding on medium</h2>
        </pf-page-section>
        <pf-page-section padding-md="no-padding" aria-labelledby="padding-section-4">
          <h2 id="padding-section-4">Section with no padding on medium</h2>
        </pf-page-section>
      </pf-page>
    </story-canvas>

    <story-canvas title="Main section variations">
      <template #intro>
        <pre v-md>
          This example shows all types of page sections.
        </pre>
      </template>

      <pf-page style="height: 400px">
        <template #masthead>
          <masthead id="variations-nav-toggle" :sidebar-open="open.variations" :toggle="() => toggle('variations')" />
        </template>
        <template #sidebar>
          <pf-page-sidebar id="variations-sidebar" :sidebar-open="open.variations">
            <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
          </pf-page-sidebar>
        </template>
        <pf-page-section type="subnav" aria-label="With subnav type">
          Section with <code>type="subnav"</code> for horizontal subnav navigation
        </pf-page-section>
        <pf-page-section type="tabs" aria-label="With tabs type">
          Section with <code>type="tabs"</code> for tabs
        </pf-page-section>
        <pf-page-section type="breadcrumb" aria-label="With breadcrumb type">
          Section with <code>type="breadcrumb"</code> for breadcrumbs
        </pf-page-section>
        <pf-page-section aria-label="With default type">
          Section without <code>type</code> prop or <code>type="default"</code> for main sections
        </pf-page-section>
        <pf-page-section type="wizard" aria-label="With wizard type">
          Section with <code>type="wizard"</code> for wizards
        </pf-page-section>
      </pf-page>
    </story-canvas>

    <story-canvas title="Group section">
      <template #intro>
        <pre v-md>
          To group page content sections, add 1 or more `&lt;pf-page-group&gt;` components to a `&lt;pf-page&gt;`.

          The following example adds a group containing `&lt;pf-page-breadcrumb&gt;` and `&lt;pf-page-section&gt;` components.
        </pre>
      </template>

      <pf-page style="height: 400px">
        <template #masthead>
          <masthead id="group-nav-toggle" :sidebar-open="open.group" :toggle="() => toggle('group')" />
        </template>
        <template #sidebar>
          <pf-page-sidebar id="group-sidebar" :sidebar-open="open.group">
            <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
          </pf-page-sidebar>
        </template>
        <pf-page-group>
          <pf-nav aria-label="Group section navigation" variant="horizontal-subnav">
            <pf-nav-list>
              <pf-nav-item href="#" :item-id="0" active>System panel</pf-nav-item>
              <pf-nav-item href="#" :item-id="1">Policy</pf-nav-item>
              <pf-nav-item href="#" :item-id="2">Authentication</pf-nav-item>
              <pf-nav-item href="#" :item-id="3">Network services</pf-nav-item>
              <pf-nav-item href="#" :item-id="4">Server</pf-nav-item>
            </pf-nav-list>
          </pf-nav>
          <pf-page-breadcrumb>
            <pf-breadcrumb>
              <pf-breadcrumb-item>Section home</pf-breadcrumb-item>
              <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
              <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
              <pf-breadcrumb-item href="#" active>Section landing</pf-breadcrumb-item>
            </pf-breadcrumb>
          </pf-page-breadcrumb>
          <pf-page-section aria-labelledby="grouped-section">
            <h2 id="grouped-section">Grouped section</h2>
          </pf-page-section>
        </pf-page-group>
        <pf-page-section aria-labelledby="group-section-1">
          <h2 id="group-section-1">Grouped example section 1</h2>
        </pf-page-section>
        <pf-page-section aria-labelledby="group-section-2">
          <h2 id="group-section-2">Grouped example section 2</h2>
        </pf-page-section>
      </pf-page>
    </story-canvas>

    <story-canvas title="Centered section">
      <template #intro>
        <pre v-md>
          By default, a page section spans the width of the page. To reduce the width of a section, use the `width-limited` property. To center align width-limited page sections, use the `center-aligned` property. When the main content area of a page is wider than the value of a centered, width-limited page section's `--pf-v6-c-page--section--m-limit-width--MaxWidth` custom property, the section will automatically be centered.

          The content in this example is placed in a card to better illustrate how the section behaves when it is centered, but a card is not required to center a page section.
        </pre>
      </template>

      <pf-page style="height: 400px">
        <template #masthead>
          <masthead id="centered-nav-toggle" :sidebar-open="open.centered" :toggle="() => toggle('centered')" />
        </template>
        <template #sidebar>
          <pf-page-sidebar id="centered-sidebar" :sidebar-open="open.centered">
            <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
          </pf-page-sidebar>
        </template>
        <pf-page-section width-limited center-aligned aria-label="width limited page section">
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

    <story-canvas title="Plain sections and groups">
      <template #intro>
        <pre v-md>
          To remove the default background color from a page section or group, use the `plain` property on `&lt;pf-page-section&gt;` or `&lt;pf-page-group&gt;` components.
        </pre>
      </template>

      <pf-page style="height: 500px">
        <template #masthead>
          <masthead
            id="plain-sections-nav-toggle"
            :sidebar-open="open.plainSections"
            :toggle="() => toggle('plainSections')"
          />
        </template>
        <template #sidebar>
          <pf-page-sidebar id="plain-sections-sidebar" :sidebar-open="open.plainSections">
            <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
          </pf-page-sidebar>
        </template>
        <pf-page-section plain aria-label="Plain section example">
          <h2>Plain PageSection</h2>
          <p>This section uses <code>plain</code> to apply plain styling with no background color.</p>
        </pf-page-section>
        <pf-page-section aria-label="Default section example">
          <h2>Default PageSection</h2>
          <p>This section has the default styling with a background color.</p>
        </pf-page-section>
        <pf-page-group plain>
          <pf-page-section aria-label="Section in plain group">
            <h2>PageSection inside Plain PageGroup</h2>
            <p>This section is inside a PageGroup with <code>plain</code> applied.</p>
          </pf-page-section>
          <pf-page-section aria-label="Another section in plain group">
            <h2>Another Section in Plain Group</h2>
            <p>Both sections are grouped with plain styling.</p>
          </pf-page-section>
        </pf-page-group>
        <pf-page-section variant="secondary" aria-label="Secondary variant section">
          <h2>Secondary Variant Section</h2>
          <p>This section uses the secondary variant for contrast.</p>
        </pf-page-section>
      </pf-page>
    </story-canvas>

    <story-canvas title="Dynamic sticky section">
      <template #intro>
        <pre v-md>
          A page section may be made sticky with separate control of its sticky positioning and stuck styling using the `sticky-base` and `sticky-stuck` properties. The `sticky-base` property accepts a value of "top" or "bottom" and applies the base sticky positioning in the given direction. The `sticky-stuck` property applies visual "stuck" styling such as a background, box shadow, and border, and should be toggled based on the scroll position of the scroll parent container.

          In this example, a scroll event listener on the scroll parent container toggles `sticky-stuck` when its `scrollTop` is greater than 0, so the stuck styling appears only when the content is scrolled.
        </pre>
      </template>

      <pf-page style="height: 400px">
        <template #masthead>
          <masthead />
        </template>
        <div
          style="overflow-y: auto; height: 100%"
          @scroll.passive="stuck = ($event.target as HTMLElement).scrollTop > 0"
        >
          <pf-page-section type="breadcrumb" sticky-base="top" :sticky-stuck="stuck">
            <pf-breadcrumb>
              <pf-breadcrumb-item>Section home</pf-breadcrumb-item>
              <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
              <pf-breadcrumb-item href="#" active>Section landing</pf-breadcrumb-item>
            </pf-breadcrumb>
          </pf-page-section>
          <pf-page-section>
            <pf-content>
              <h1>Main title</h1>
              <p>
                Scroll the container to see the breadcrumb section above dynamically apply its stuck styling. The
                section uses <code>sticky-base="top"</code> to remain fixed at the top of the scroll parent, and
                <code>sticky-stuck</code> is toggled via a scroll event listener to apply visual styling when the
                section is no longer at the top edge.
              </p>
            </pf-content>
          </pf-page-section>
          <pf-page-section v-for="i in 30" :key="i" :variant="i % 2 === 1 ? 'default' : 'secondary'">
            <pf-content>
              <p>Section {{ i }} content</p>
            </pf-content>
          </pf-page-section>
        </div>
      </pf-page>
    </story-canvas>

    <story-canvas title="Custom header">
      <template #intro>
        <pre v-md>
          To use a page header instead of passing a [masthead](#/stories/components/masthead) directly, pass a `&lt;pf-page-header&gt;` to the `masthead` slot. `&lt;pf-page-header&gt;` should only be used to wrap custom header content.
        </pre>
      </template>

      <pf-page style="height: 300px">
        <template #masthead>
          <pf-page-header>Custom page header</pf-page-header>
        </template>
        <template #sidebar>
          <pf-page-sidebar id="custom-header-vertical-sidebar">
            <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
          </pf-page-sidebar>
        </template>
        <pf-page-section aria-labelledby="custom-header-section">
          <h2 id="custom-header-section">Page content</h2>
        </pf-page-section>
      </pf-page>
    </story-canvas>

    <story-canvas title="Footer">
      <template #intro>
        <pre v-md>
          `&lt;pf-page-footer&gt;` can be passed to the `footer` slot, and should be used to wrap custom footer content.
        </pre>
      </template>

      <pf-page style="height: 300px">
        <template #masthead>
          <masthead id="custom-footer-body-nav-toggle" :sidebar-open="open.footer" :toggle="() => toggle('footer')" />
        </template>
        <template #sidebar>
          <pf-page-sidebar id="custom-footer-vertical-sidebar" :sidebar-open="open.footer">
            <pf-page-sidebar-body>Navigation</pf-page-sidebar-body>
          </pf-page-sidebar>
        </template>
        <pf-page-section aria-labelledby="custom-footer-section">
          <h2 id="custom-footer-section">Page content</h2>
        </pf-page-section>
        <template #footer>
          <pf-page-footer>Page footer</pf-page-footer>
        </template>
      </pf-page>
    </story-canvas>

    <story-canvas title="Plain">
      <template #intro>
        <pre v-md>
          When a page should not have the default content area background or overflow scrolling, pass the `plain` property to `&lt;pf-page&gt;`.
        </pre>
      </template>

      <pf-page plain style="height: 200px">
        <template #masthead>
          <pf-page-header>Custom header</pf-page-header>
        </template>
        <pf-page-section aria-labelledby="plain-page-section">
          <h2 id="plain-page-section">Page content</h2>
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

              <pf-masthead-brand>
                <pf-masthead-logo :to="{ name: 'introduction' }">Logo</pf-masthead-logo>
              </pf-masthead-brand>
            </pf-masthead-main>

            <pf-masthead-content>
              <pf-toolbar full-height>
                <pf-toolbar-content>
                  <pf-toolbar-group align="end">
                    <pf-toolbar-item visibility="visible">
                      <pf-notification-badge
                        variant="read"
                        aria-label="Notifications"
                        :expanded="expanded"
                        @click="expanded = !expanded"
                      />
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
              <pf-dropdown position="right">
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
                        <pf-dropdown position="right">
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
                        <pf-dropdown position="right">
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
                        <pf-dropdown position="right">
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
                        <pf-dropdown position="right">
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
                        <pf-dropdown position="right">
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
                        <pf-dropdown position="right">
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
                        <pf-dropdown position="right">
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
                        <pf-dropdown position="right">
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
                    <pf-empty-state title="No alerts found" heading-level="h2">
                      <template #icon>
                        <magnifying-glass-icon />
                      </template>
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
                <pf-masthead-brand>
                  <pf-masthead-logo href="#">Logo</pf-masthead-logo>
                </pf-masthead-brand>
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
  </doc-page>
</template>

<script lang="ts" setup>
import CloudIcon from '@vue-patternfly/icons/cloud-icon';
import CodeIcon from '@vue-patternfly/icons/code-icon';
import CubesIcon from '@vue-patternfly/icons/cubes-icon';
import FileIcon from '@vue-patternfly/icons/file-icon';
import FolderIcon from '@vue-patternfly/icons/folder-icon';
import MagnifyingGlassIcon from '@vue-patternfly/icons/magnifying-glass-icon';
import TableCellsLargeIcon from '@vue-patternfly/icons/table-cells-large-icon';
import { createReusableTemplate, onKeyStroke, onClickOutside } from '@vueuse/core';
import { computed, reactive, ref, useTemplateRef } from 'vue';

const [DefineMasthead, Masthead] = createReusableTemplate<{
  id?: string;
  sidebarOpen?: boolean;
  toggle?: () => void;
}>();

// the sidebar open state of each controlled example
const open = reactive({
  vertical: true,
  multiple: true,
  fill: true,
  padding: true,
  variations: true,
  group: true,
  centered: true,
  plainSections: true,
  footer: true,
});

function toggle(example: keyof typeof open) {
  open[example] = !open[example];
}

const stuck = ref(false);

const expanded = ref(false);

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
