<template>
  <doc-page title="Tabs">
    <template #description><b>Tabs</b> allow users to navigate between views within the same page or context.</template>

    <template #apidocs>
      <component-info name="PfTabs" />
      <component-info name="PfTab" />
      <component-info name="PfTabContent" />
      <component-info name="PfTabContentBody" />
      <component-info name="PfTabTitleText" />
      <component-info name="PfTabTitleIcon" />
      <component-info name="PfTabAction" />
      <component-info name="PfTabButton" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The active tab is bound with `v-model:active-key` (`activeKey`, `onSelect`), or set initially with `default-active-key`; when none matches a tab, the first tab is active. `select` is emitted with the event and the key of the selected tab.
      - A tab is identified by its `event-key`, or by its Vue `key` when not set.
      - The title is the `title` prop or the `title` slot, with an optional `icon` slot; `actions` is a slot of `pf-tab`.
      - Other attributes of `pf-tab` go on its tab panel, not on its tab button.
      - `isHidden` is replaced by `v-if` on the tab.
      - `variant="secondary"` is the `secondary` prop; `isNav`, `isBox`, `isFilled`, `isSubtab`, `isVertical`, `hasNoBorderBottom` and `usePageInsets` are `nav`, `box`, `filled`, `subtab`, `vertical`, `no-border-bottom` and `page-insets`.
      - `inset` and `expandable` take a value per breakpoint as separate props (`inset-md`, `expandable-lg`…).
      - The expanded state of vertical tabs is bound with `v-model:expanded` (`isExpanded`, `onToggle`), or set initially with `default-expanded`.
      - `isOverflowHorizontal` is `overflow-horizontal`, and its settings are the `overflow-show-tab-count`, `overflow-title-text` and `overflow-toggle-aria-label` props.
      - A `close` listener (`onClose`) adds a close button to every tab and an `add` listener (`onAdd`) the add button.
      - A tab content defined outside of the tabs is passed to `content-ref` (`tabContentRef`), with its id in `content-id`.
      - `mount-on-enter` and `unmount-on-exit` can also be set on a single tab.
      - A tooltip is added with the `tooltip` prop or slot of `pf-tab`, plus `tooltip-attrs`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Default tabs">
      <template #intro>
        <pre v-md>
          A `pf-tabs` component contains multiple `pf-tab` components that may be used to navigate between sets of content within a page.

          You can adjust a tab in the following ways:

          - To label a tab with text, use the `title` property, or a `pf-tab-title-text` in the `title` slot.
          - To disable a tab, use the `disabled` property. Tabs using `disabled` are not perceivable or operable by users navigating via assistive technologies.
          - To disable a tab, but keep it perceivable to assistive technology users, use the `aria-disabled` property. If a disabled tab has a tooltip, use this property instead of `disabled`.
          - To add a tooltip to an aria-disabled tab, use the `tooltip` property.

          Tabs can be styled as 'default' or 'boxed':

          - Default tabs do not have any borders and use a bottom line to distinguish between a selected tab, a hovered tab, and an inactive tab.
          - Boxed tabs are outlined to emphasize the area that a tab spans. To preview boxed tabs in the following examples, select the 'box' checkbox, which sets the `box` property to true.
        </pre>
      </template>

      <pf-tabs v-model:active-key="defaultTabs.active" :box="defaultTabs.box" aria-label="Tabs in the default example">
        <pf-tab :event-key="0" title="Users">Users</pf-tab>
        <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
        <pf-tab :event-key="2" title="Database">Database</pf-tab>
        <pf-tab :event-key="3" title="Disabled" disabled>Disabled</pf-tab>
        <pf-tab :event-key="4" title="ARIA Disabled" aria-disabled>ARIA Disabled</pf-tab>
        <pf-tab
          :event-key="5"
          title="ARIA Disabled (Tooltip)"
          aria-disabled
          tooltip="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support."
        >
          ARIA Disabled (Tooltip)
        </pf-tab>
      </pf-tabs>
      <div style="margin-top: 20px">
        <pf-checkbox id="toggle-box-default" v-model="defaultTabs.box" label="box" />
      </div>
    </story-canvas>

    <story-canvas title="Boxed secondary tabs">
      <template #intro>
        <pre v-md>
          To change the background color of boxed tabs or the tab content, use the `secondary` property.

          Toggle the tab color by selecting the 'Tabs secondary variant' checkbox in the following example.
        </pre>
      </template>

      <pf-tabs
        v-model:active-key="boxSecondary.active"
        :secondary="boxSecondary.secondary"
        box
        aria-label="Tabs in the box light variation example"
      >
        <pf-tab :event-key="0" title="Users">Users</pf-tab>
        <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
        <pf-tab :event-key="2" title="Database">Database</pf-tab>
        <pf-tab :event-key="3" title="Disabled" disabled>Disabled</pf-tab>
        <pf-tab :event-key="4" title="ARIA Disabled" aria-disabled>ARIA Disabled</pf-tab>
        <pf-tab
          :event-key="5"
          title="ARIA Disabled (Tooltip)"
          aria-disabled
          tooltip="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support."
        >
          ARIA Disabled (Tooltip)
        </pf-tab>
      </pf-tabs>
      <div style="margin-top: 20px">
        <pf-checkbox id="toggle-tabs-variant" v-model="boxSecondary.secondary" label="Tabs secondary variant" />
      </div>
    </story-canvas>

    <story-canvas title="Vertical tabs">
      <template #intro>
        <pre v-md>
          Vertical tabs are placed on the left-hand side of a page or container and may appear in both 'default' and 'boxed' tab variations.

          To style tabs vertically, use the `vertical` property.
        </pre>
      </template>

      <pf-tabs
        v-model:active-key="verticalTabs.active"
        vertical
        :box="verticalTabs.box"
        aria-label="Tabs in the vertical example"
      >
        <pf-tab :event-key="0" title="Users">Users</pf-tab>
        <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
        <pf-tab :event-key="2" title="Database">Database</pf-tab>
        <pf-tab :event-key="3" title="Disabled" disabled>Disabled</pf-tab>
        <pf-tab :event-key="4" title="ARIA Disabled" aria-disabled>ARIA Disabled</pf-tab>
        <pf-tab
          :event-key="5"
          title="ARIA Disabled (Tooltip)"
          aria-disabled
          tooltip="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support."
        >
          ARIA Disabled (Tooltip)
        </pf-tab>
      </pf-tabs>
      <div style="margin-top: 20px">
        <pf-checkbox id="toggle-box-vertical" v-model="verticalTabs.box" label="box" />
      </div>
    </story-canvas>

    <story-canvas title="Vertical expandable tabs">
      <template #intro>
        <pre v-md>
          Vertical tabs can be made expandable to save space. Users can select the caret to expand a menu and switch between tabs.

          Expandable tabs can be enabled at different breakpoints. The following example sets `expandable="expandable"`, `expandable-md="nonExpandable"` and `expandable-lg="expandable"` on the `pf-tabs` component.

          To flag vertical tabs when they're expanded, bind `v-model:expanded`.
        </pre>
      </template>

      <pf-tabs
        v-model:active-key="expandableTabs.active"
        v-model:expanded="expandableTabs.expanded"
        vertical
        expandable="expandable"
        expandable-md="nonExpandable"
        expandable-lg="expandable"
        toggle-text="Containers"
        aria-label="Tabs in the vertical expandable example"
      >
        <pf-tab :event-key="0" title="Users">Users</pf-tab>
        <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
        <pf-tab :event-key="2" title="Database">Database</pf-tab>
        <pf-tab :event-key="3" title="Server">Server</pf-tab>
        <pf-tab :event-key="4" title="System">System</pf-tab>
        <pf-tab :event-key="6" title="Network">Network</pf-tab>
      </pf-tabs>
    </story-canvas>

    <story-canvas title="Vertical expandable uncontrolled">
      <template #intro>
        <pre v-md>
          To flag the default expanded state for uncontrolled tabs, use the `default-expanded` property.
        </pre>
      </template>

      <pf-tabs
        v-model:active-key="expandableUncontrolled"
        vertical
        expandable="expandable"
        expandable-md="nonExpandable"
        expandable-lg="expandable"
        :default-expanded="false"
        toggle-text="Containers"
        aria-label="Tabs in the vertical expandable uncontrolled example"
      >
        <pf-tab :event-key="0" title="Users">Users</pf-tab>
        <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
        <pf-tab :event-key="2" title="Database">Database</pf-tab>
        <pf-tab :event-key="3" title="Server">Server</pf-tab>
        <pf-tab :event-key="4" title="System">System</pf-tab>
        <pf-tab :event-key="6" title="Network">Network</pf-tab>
      </pf-tabs>
    </story-canvas>

    <story-canvas title="Default overflow tabs">
      <template #intro>
        <pre v-md>
          By default, overflow is applied when there are too many tabs for the width of the container they are in. This overflow can be navigated by side-scrolling within the tabs section, or by selecting the left and right arrows.
        </pre>
      </template>

      <pf-tabs
        v-model:active-key="defaultOverflow.active"
        :box="defaultOverflow.box"
        aria-label="Tabs in the default overflow example"
      >
        <pf-tab v-for="tab in manyTabs" :key="tab.key" :event-key="tab.key" :title="tab.title">
          {{ tab.content }}
        </pf-tab>
      </pf-tabs>
      <div style="margin-top: 20px">
        <pf-checkbox id="toggle-box-overflow" v-model="defaultOverflow.box" label="box" />
      </div>
    </story-canvas>

    <story-canvas title="Horizontal overflow tabs">
      <template #intro>
        <pre v-md>
          Horizontal overflow can be used instead of the default application. To navigate horizontal overflow tabs users can select the last tab, labeled “more”, to see the overflowed content.

          To enable horizontal overflow, use the `overflow-horizontal` property.

          In the following example, select the 'Show overflowing tab count' checkbox to add a count of overflow items to the final “more” tab.
        </pre>
      </template>

      <pf-tabs
        v-model:active-key="horizontalOverflow.active"
        overflow-horizontal
        :overflow-show-tab-count="horizontalOverflow.showTabCount"
        aria-label="Tabs in the horizontal overflow example"
      >
        <pf-tab v-for="tab in manyTabs" :key="tab.key" :event-key="tab.key" :title="tab.title">
          {{ tab.content }}
        </pf-tab>
      </pf-tabs>
      <div style="margin-top: 20px">
        <pf-checkbox
          id="toggle-show-count-overflow"
          v-model="horizontalOverflow.showTabCount"
          label="Show overflowing tab count"
        />
      </div>
    </story-canvas>

    <story-canvas title="With tooltip react ref">
      <template #intro>
        <pre v-md>
          A tooltip on a tab is set with the `tooltip` property, or the `tooltip` slot for rich content, while `tooltip-attrs` customizes the tooltip, for example with its `id`. Pass that `id` into the tab's `aria-describedby` to ensure the tooltip will be announced by the JAWS and NVDA screen readers.
        </pre>
      </template>

      <pf-tabs
        v-model:active-key="tooltipTabs.active"
        :box="tooltipTabs.box"
        aria-label="Tabs in the example with a tooltip ref"
      >
        <pf-tab :event-key="0" title="Users">Users</pf-tab>
        <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
        <pf-tab :event-key="2" title="Database">Database</pf-tab>
        <pf-tab :event-key="3" title="Disabled" disabled>Disabled</pf-tab>
        <pf-tab :event-key="4" title="ARIA Disabled" aria-disabled>ARIA Disabled</pf-tab>
        <pf-tab
          :event-key="5"
          title="ARIA Disabled (Tooltip)"
          aria-disabled
          :tooltip-attrs="{ id: 'tooltip-ref1' }"
          aria-describedby="tooltip-ref1"
        >
          <template #tooltip>
            Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support.
          </template>
          ARIA Disabled (Tooltip)
        </pf-tab>
      </pf-tabs>
      <div style="margin-top: 20px">
        <pf-checkbox id="toggle-box-tooltip-ref" v-model="tooltipTabs.box" label="box" />
      </div>
    </story-canvas>

    <story-canvas title="Uncontrolled tabs">
      <template #intro>
        <pre v-md>
          To allow the `pf-tabs` component to manage setting the active tab and displaying correct content itself, use uncontrolled tabs, as shown in the following example.
        </pre>
      </template>

      <pf-tabs :default-active-key="0" aria-label="Tabs in the uncontrolled example">
        <pf-tab :event-key="0" title="Users">Users</pf-tab>
        <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
        <pf-tab :event-key="2" title="Database">Database</pf-tab>
        <pf-tab :event-key="3" title="Disabled" disabled>Disabled</pf-tab>
        <pf-tab :event-key="4" title="ARIA Disabled" aria-disabled>ARIA Disabled</pf-tab>
        <pf-tab
          :event-key="5"
          title="ARIA Disabled (Tooltip)"
          aria-disabled
          tooltip="Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support."
        >
          ARIA Disabled (Tooltip)
        </pf-tab>
      </pf-tabs>
    </story-canvas>

    <story-canvas title="With adjusted inset">
      <template #intro>
        <pre v-md>
          To adjust the inset of tabs and visually separate them more, use the `inset` properties. You can set the inset to "none", "xs", "sm", "md", "lg", "xl", "2xl" or "3xl" with `inset`, `inset-sm`, `inset-md`, `inset-lg`, `inset-xl` and `inset-2xl`.
        </pre>
      </template>

      <pf-tabs
        v-model:active-key="insetTabs.active"
        inset="none"
        inset-md="sm"
        inset-xl="lg"
        inset-2xl="2xl"
        :box="insetTabs.box"
        aria-label="Tabs in the inset example"
      >
        <pf-tab :event-key="0" title="Users">Users</pf-tab>
        <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
        <pf-tab :event-key="2" title="Database">Database</pf-tab>
        <pf-tab :event-key="3" title="Server">Server</pf-tab>
        <pf-tab :event-key="4" title="System">System</pf-tab>
        <pf-tab :event-key="6" title="Network">Network</pf-tab>
      </pf-tabs>
      <div style="margin-top: 20px">
        <pf-checkbox id="toggle-box-inset" v-model="insetTabs.box" label="box" />
      </div>
    </story-canvas>

    <story-canvas title="With page insets">
      <template #intro>
        <pre v-md>
          To adjust the left padding of tabs, use the `page-insets` property. This property aligns the tabs padding with the default padding of the page section, which makes it easier to align tabs with page section content.
        </pre>
      </template>

      <pf-tabs
        v-model:active-key="pageInsetTabs.active"
        page-insets
        :box="pageInsetTabs.box"
        aria-label="Tabs in the page insets example"
      >
        <pf-tab :event-key="0" title="Users">Users</pf-tab>
        <pf-tab :event-key="1" title="Containers">Containers</pf-tab>
        <pf-tab :event-key="2" title="Database">Database</pf-tab>
        <pf-tab :event-key="3" title="Server">Server</pf-tab>
        <pf-tab :event-key="4" title="System">System</pf-tab>
        <pf-tab :event-key="6" title="Network">Network</pf-tab>
      </pf-tabs>
      <div style="margin-top: 20px">
        <pf-checkbox id="toggle-box-page-inset" v-model="pageInsetTabs.box" label="box" />
      </div>
    </story-canvas>

    <story-canvas title="With icons and text">
      <template #intro>
        <pre v-md>
          You can render different content in the title of a tab to add icons and text.

          To add an icon to a tab, use the `icon` slot, or a `pf-tab-title-icon` in the `title` slot. To use an icon alongside styled text, keep the text in the `pf-tab-title-text` component.
        </pre>
      </template>

      <pf-tabs v-model:active-key="iconTabs" aria-label="Tabs in the icons and text example">
        <pf-tab :event-key="0" title="Users">
          <template #icon><users-icon /></template>
          Users
        </pf-tab>
        <pf-tab :event-key="1" title="Containers">
          <template #icon><box-icon /></template>
          Containers
        </pf-tab>
        <pf-tab :event-key="2" title="Database">
          <template #icon><database-icon /></template>
          Database
        </pf-tab>
        <pf-tab :event-key="3" title="Server">
          <template #icon><server-icon /></template>
          Server
        </pf-tab>
        <pf-tab :event-key="4" title="System">
          <template #icon><laptop-icon /></template>
          System
        </pf-tab>
        <pf-tab :event-key="6" title="Network">
          <template #icon><diagram-project-icon /></template>
          Network
        </pf-tab>
      </pf-tabs>
    </story-canvas>

    <story-canvas title="Subtabs">
      <template #intro>
        <pre v-md>
          Use subtabs within other components, like modals. Subtabs have less visually prominent styling.

          To apply subtab styling to tabs, use the `subtab` property.

          For accessibility, give the primary tablist an accessible name (for example, `tab-list-aria-label="Primary"`) and give any subtab tablist an accessible name that matches the currently selected primary tab (for example, `tab-list-aria-label="Users"`).
        </pre>
      </template>

      <pf-tabs
        v-model:active-key="subtabs.primary"
        :box="subtabs.box"
        aria-label="Tabs in the tabs with subtabs example"
        tab-list-aria-label="Primary"
      >
        <pf-tab :event-key="0" title="Users">
          <pf-tabs
            v-model:active-key="subtabs.secondary"
            subtab
            aria-label="subtabs for users"
            tab-list-aria-label="Users"
          >
            <pf-tab v-for="n in 8" :key="n" :event-key="19 + n" :title="`Subtab item ${n}`">
              Subtab item {{ n }} section
            </pf-tab>
          </pf-tabs>
        </pf-tab>
        <pf-tab v-for="tab in manyTabs.slice(1)" :key="tab.key" :event-key="tab.key" :title="tab.title">
          {{ tab.content }}
        </pf-tab>
      </pf-tabs>
      <div style="margin-top: 20px">
        <pf-checkbox id="toggle-box-subtabs" v-model="subtabs.box" label="box" />
      </div>
    </story-canvas>

    <story-canvas title="Filled tabs with icons">
      <template #intro>
        <pre v-md>
          To allow tabs to fill the available width of the page section, use the `filled` property.
        </pre>
      </template>

      <pf-tabs
        v-model:active-key="filledTabs.active"
        filled
        :box="filledTabs.box"
        aria-label="Tabs in the filled with icons example"
      >
        <pf-tab :event-key="0" title="Users">
          <template #icon><users-icon /></template>
          Users
        </pf-tab>
        <pf-tab :event-key="1" title="Containers">
          <template #icon><box-icon /></template>
          Containers
        </pf-tab>
        <pf-tab :event-key="2" title="Database">
          <template #icon><database-icon /></template>
          Database
        </pf-tab>
      </pf-tabs>
      <div style="margin-top: 20px">
        <pf-checkbox id="toggle-box-filled-icons" v-model="filledTabs.box" label="box" />
      </div>
    </story-canvas>

    <story-canvas title="Tabs linked to nav elements">
      <template #intro>
        <pre v-md>
          To let tabs link to nav elements, set the `component` property to "nav".

          Nav tabs should use the `href` property to link the tab to the URL of another page or page section. A tab with an `href` will render as an `&lt;a&gt;` instead of a `&lt;button&gt;`.
        </pre>
      </template>

      <pf-tabs v-model:active-key="navTabs" component="nav" aria-label="Tabs in the nav element example">
        <pf-tab :event-key="0" title="Users" href="#users">Users</pf-tab>
        <pf-tab :event-key="1" title="Containers" href="#containers">Containers</pf-tab>
        <pf-tab :event-key="2" title="Database" href="#database">Database</pf-tab>
        <pf-tab :event-key="3" title="Disabled" disabled href="#disabled">Disabled</pf-tab>
        <pf-tab :event-key="4" title="ARIA Disabled" aria-disabled href="#aria-disabled">ARIA Disabled</pf-tab>
        <pf-tab :event-key="6" title="Network" href="#network">Network</pf-tab>
      </pf-tabs>
    </story-canvas>

    <story-canvas title="Subtabs linked to nav elements">
      <template #intro>
        <pre v-md>
          Subtabs can also link to nav elements.
        </pre>
      </template>

      <pf-tabs
        v-model:active-key="navSubtabs.primary"
        component="nav"
        aria-label="Tabs in the sub tabs with nav element example"
        tab-list-aria-label="Primary"
      >
        <pf-tab :event-key="0" title="Users" href="#">
          <pf-tabs
            v-model:active-key="navSubtabs.secondary"
            subtab
            component="nav"
            aria-label="Local secondary"
            tab-list-aria-label="Users"
          >
            <pf-tab :event-key="20" title="Item 1" href="#">Item 1 item section</pf-tab>
            <pf-tab :event-key="21" title="Item 2" href="#">Item 2 section</pf-tab>
            <pf-tab :event-key="22" title="Item 3" href="#">Item 3 section</pf-tab>
            <pf-tab :event-key="3" title="Disabled" disabled href="#">Disabled</pf-tab>
            <pf-tab :event-key="4" title="ARIA Disabled" aria-disabled href="#">ARIA Disabled</pf-tab>
            <pf-tab :event-key="25" title="Item 6" href="#">Item 6 section</pf-tab>
          </pf-tabs>
        </pf-tab>
        <pf-tab :event-key="1" title="Containers" href="#">Containers</pf-tab>
        <pf-tab :event-key="2" title="Database" href="#">Database</pf-tab>
        <pf-tab :event-key="3" title="Server" href="#">Server</pf-tab>
        <pf-tab :event-key="4" title="System" href="#">System</pf-tab>
        <pf-tab :event-key="6" title="Network" href="#">Network</pf-tab>
      </pf-tabs>
    </story-canvas>

    <story-canvas title="Tabs used for site navigation">
      <template #intro>
        <pre v-md>
          Site navigation tabs use the `nav` property, which renders them in a nav element with the nav styling.
        </pre>
      </template>

      <pf-tabs v-model:active-key="siteNavTabs" nav aria-label="Site navigation with nav styling example">
        <pf-tab :event-key="0" title="Users" href="#users">Users</pf-tab>
        <pf-tab :event-key="1" title="Containers" href="#containers">Containers</pf-tab>
        <pf-tab :event-key="2" title="Database" href="#database">Database</pf-tab>
        <pf-tab :event-key="3" title="Disabled" disabled href="#disabled">Disabled</pf-tab>
        <pf-tab :event-key="4" title="ARIA Disabled" aria-disabled href="#aria-disabled">ARIA Disabled</pf-tab>
        <pf-tab :event-key="6" title="Network" href="#network">Network</pf-tab>
      </pf-tabs>
    </story-canvas>

    <story-canvas title="With separate content">
      <template #intro>
        <pre v-md>
          If a `pf-tab-content` component is defined outside of a `pf-tabs` component, use the `content-ref` and `content-id` properties. The tab hides its content while it is not active.
        </pre>
      </template>

      <pf-tabs v-model:active-key="separateTabs" aria-label="Tabs in the separate content example">
        <pf-tab :event-key="0" title="Tab item 1" content-id="refTab1Section" :content-ref="separate1" />
        <pf-tab :event-key="1" title="Tab item 2" content-id="refTab2Section" :content-ref="separate2" />
        <pf-tab :event-key="2" title="Tab item 3" content-id="refTab3Section" :content-ref="separate3" />
      </pf-tabs>
      <div>
        <pf-tab-content
          id="refTab1Section"
          ref="separate1"
          aria-label="This is content for the first separate content tab"
        >
          Tab 1 section
        </pf-tab-content>
        <pf-tab-content
          id="refTab2Section"
          ref="separate2"
          aria-label="This is content for the second separate content tab"
        >
          Tab 2 section
        </pf-tab-content>
        <pf-tab-content
          id="refTab3Section"
          ref="separate3"
          aria-label="This is content for the third separate content tab"
        >
          Tab 3 section
        </pf-tab-content>
      </div>
    </story-canvas>

    <story-canvas title="With tab content with body and padding">
      <template #intro>
        <pre v-md>
          To add a content body to a `pf-tab-content` component, pass a `pf-tab-content-body`. To add padding to the body section, use the `padding` property.
        </pre>
      </template>

      <pf-tabs v-model:active-key="bodyPaddingTabs" aria-label="Tabs in the body and padding example">
        <pf-tab :event-key="0" title="Tab item 1" content-id="tab1SectionBodyPadding" :content-ref="body1" />
        <pf-tab :event-key="1" title="Tab item 2" content-id="tab2SectionBodyPadding" :content-ref="body2" />
        <pf-tab :event-key="2" title="Tab item 3" content-id="tab3SectionBodyPadding" :content-ref="body3" />
      </pf-tabs>
      <div>
        <pf-tab-content id="tab1SectionBodyPadding" ref="body1">
          <pf-tab-content-body padding> Tab 1 section with body and padding </pf-tab-content-body>
        </pf-tab-content>
        <pf-tab-content id="tab2SectionBodyPadding" ref="body2">
          <pf-tab-content-body padding> Tab 2 section with body and padding </pf-tab-content-body>
        </pf-tab-content>
        <pf-tab-content id="tab3SectionBodyPadding" ref="body3">
          <pf-tab-content-body padding> Tab 3 section with body and padding </pf-tab-content-body>
        </pf-tab-content>
      </div>
    </story-canvas>

    <story-canvas title="Children mounting on click">
      <template #intro>
        <pre v-md>
          To mount tab children (add to the DOM) when a tab is clicked, use the `mount-on-enter` property.

          Note that this property does not create the tab children until the tab is clicked, so they are not preloaded into the DOM. The timers below start when their tab is first shown, and keep running when it is hidden.
        </pre>
      </template>

      <pf-tabs
        v-model:active-key="mountingTabs"
        mount-on-enter
        aria-label="Tabs in the children mounting on click example"
      >
        <pf-tab :event-key="0" title="Tab item 1">Tab 1 section <keep-alive-test /></pf-tab>
        <pf-tab :event-key="1" title="Tab item 2">Tab 2 section <keep-alive-test /></pf-tab>
        <pf-tab :event-key="2" title="Tab item 3">Tab 3 section <keep-alive-test /></pf-tab>
      </pf-tabs>
    </story-canvas>

    <story-canvas title="Unmounting invisible children">
      <template #intro>
        <pre v-md>
          To unmount tab children (remove from the DOM) when they are no longer visible, use the `unmount-on-exit` property. The timers below restart every time their tab is shown.
        </pre>
      </template>

      <pf-tabs
        v-model:active-key="unmountingTabs"
        unmount-on-exit
        aria-label="Tabs in the unmounting invisible children example"
      >
        <pf-tab :event-key="0" title="Tab item 1">Tab 1 section <keep-alive-test /></pf-tab>
        <pf-tab :event-key="1" title="Tab item 2">Tab 2 section <keep-alive-test /></pf-tab>
        <pf-tab :event-key="2" title="Tab item 3">Tab 3 section <keep-alive-test /></pf-tab>
      </pf-tabs>
    </story-canvas>

    <story-canvas title="Toggled tab content">
      <template #intro>
        <pre v-md>
          You may control tabs from outside of the tabs component. For example, select the "Hide tab 2" button below to make "Tab item 2" invisible.

          The tab its content should only be mounted when the tab is visible.
        </pre>
      </template>

      <pf-button @click="tab2Hidden = !tab2Hidden">{{ tab2Hidden ? 'Show' : 'Hide' }} tab 2</pf-button>
      <pf-divider style="padding-top: 1rem; padding-bottom: 1rem" />
      <pf-tabs v-model:active-key="toggledTabs" aria-label="Tabs in the toggled separate content example">
        <pf-tab :event-key="0" title="Tab item 1" content-id="tab1SectionSeparateContent" :content-ref="toggled1" />
        <pf-tab
          v-if="!tab2Hidden"
          :event-key="1"
          title="Tab item 2"
          content-id="tab2SectionSeparateContent"
          :content-ref="toggled2"
        />
        <pf-tab :event-key="2" title="Tab item 3" content-id="tab3SectionSeparateContent" :content-ref="toggled3" />
      </pf-tabs>
      <div>
        <pf-tab-content
          id="tab1SectionSeparateContent"
          ref="toggled1"
          aria-label="This is content for the first toggled separate content tab"
        >
          Tab 1 section
        </pf-tab-content>
        <pf-tab-content
          v-if="!tab2Hidden"
          id="tab2SectionSeparateContent"
          ref="toggled2"
          aria-label="This is content for the second toggled separate content tab"
        >
          Tab 2 section
        </pf-tab-content>
        <pf-tab-content
          id="tab3SectionSeparateContent"
          ref="toggled3"
          aria-label="This is content for the third toggled separate content tab"
        >
          Tab 3 section
        </pf-tab-content>
      </div>
    </story-canvas>

    <story-canvas title="Dynamic tabs">
      <template #intro>
        <pre v-md>
          To enable closeable tabs, listen to the `close` event of the `pf-tabs` component. To enable a button that adds new tabs, listen to its `add` event.
        </pre>
      </template>

      <pf-tabs
        v-model:active-key="dynamic.active"
        aria-label="Tabs in the addable/closeable example"
        add-button-aria-label="Add new tab"
        @close="(_event, key) => closeDynamicTab(dynamic, Number(key))"
        @add="addDynamicTab"
      >
        <pf-tab
          v-for="(tab, index) in dynamic.tabs"
          :key="tab"
          :event-key="index"
          :title="tab"
          :close-button-aria-label="`Close ${tab}`"
          :close-disabled="dynamic.tabs.length === 1"
        >
          {{ tab }}
        </pf-tab>
      </pf-tabs>
    </story-canvas>

    <story-canvas title="With help action popover">
      <template #intro>
        <pre v-md>
          You may add a help action to a tab to provide users with additional context in a popover.

          To render an action beside the tab content, use the `actions` slot of a `pf-tab`. Pass a `pf-tab-action` component and a popover triggered by it into the `actions` slot.
        </pre>
      </template>

      <pf-tabs v-model:active-key="helpTabs" aria-label="Tabs in the help action example">
        <pf-tab
          v-for="(tab, index) in helpTabNames"
          :key="tab"
          :event-key="index"
          :title="tab"
          :disabled="tab === 'Disabled'"
          :aria-disabled="tab === 'ARIA disabled'"
        >
          <template #actions>
            <pf-tab-action
              :id="`help-action-${index}`"
              :aria-label="`Help action for ${tab}`"
              :disabled="tab === 'Help disabled'"
            >
              <circle-question-icon />
            </pf-tab-action>
            <pf-popover :trigger-ref="`#help-action-${index}`">
              <template #header
                ><div>Help popover for {{ tab }}</div></template
              >
              <template #body>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla
                  turpis.
                </div>
              </template>
              <template #footer>Popover footer</template>
            </pf-popover>
          </template>
          {{ tab }}
        </pf-tab>
      </pf-tabs>
    </story-canvas>

    <story-canvas title="With help and close actions">
      <template #intro>
        <pre v-md>
          To add multiple actions to a tab, create a `pf-tab-action` component for each action.

          The following example passes in both help popover and close actions.
        </pre>
      </template>

      <pf-tabs v-model:active-key="helpAndClose.active" aria-label="Tabs in the help enabled and closeable example">
        <pf-tab v-for="(tab, index) in helpAndClose.tabs" :key="tab" :event-key="index" :title="tab">
          <template #actions>
            <pf-tab-action :id="`help-close-action-${index}`" :aria-label="`Help for ${tab}`">
              <circle-question-icon />
            </pf-tab-action>
            <pf-tab-action
              :aria-label="`Close ${tab}`"
              :disabled="helpAndClose.tabs.length === 1"
              @click="closeDynamicTab(helpAndClose, index)"
            >
              <xmark-icon />
            </pf-tab-action>
            <pf-popover :trigger-ref="`#help-close-action-${index}`">
              <template #header
                ><div>Help popover for {{ tab }}</div></template
              >
              <template #body>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla
                  turpis.
                </div>
              </template>
              <template #footer>Popover footer</template>
            </pf-popover>
          </template>
          {{ tab }}
        </pf-tab>
      </pf-tabs>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { reactive, ref, useTemplateRef } from 'vue';
import KeepAliveTest from '../../components/KeepAliveTest.vue';
import UsersIcon from '@vue-patternfly/icons/users-icon';
import BoxIcon from '@vue-patternfly/icons/box-icon';
import DatabaseIcon from '@vue-patternfly/icons/database-icon';
import ServerIcon from '@vue-patternfly/icons/server-icon';
import LaptopIcon from '@vue-patternfly/icons/laptop-icon';
import DiagramProjectIcon from '@vue-patternfly/icons/diagram-project-icon';
import CircleQuestionIcon from '@vue-patternfly/icons/circle-question-icon';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';

type TabKey = string | number | symbol | undefined;

const manyTabs = [
  { key: 0, title: 'Users', content: 'Users' },
  { key: 1, title: 'Containers', content: 'Containers' },
  { key: 2, title: 'Database', content: 'Database' },
  { key: 3, title: 'Server', content: 'Server' },
  { key: 4, title: 'System', content: 'System' },
  { key: 6, title: 'Network', content: 'Network' },
  { key: 7, title: 'Tab item 7', content: 'Tab 7 section' },
  { key: 8, title: 'Tab item 8', content: 'Tab 8 section' },
  { key: 9, title: 'Tab item 9', content: 'Tab 9 section' },
  { key: 10, title: 'Tab item 10', content: 'Tab 10 section' },
  { key: 11, title: 'Tab item 11', content: 'Tab 11 section' },
];

const defaultTabs = reactive({ active: 0 as TabKey, box: false });
const boxSecondary = reactive({ active: 0 as TabKey, secondary: true });
const verticalTabs = reactive({ active: 0 as TabKey, box: false });
const expandableTabs = reactive({ active: 0 as TabKey, expanded: false as boolean | undefined });
const expandableUncontrolled = ref<TabKey>(0);
const defaultOverflow = reactive({ active: 0 as TabKey, box: false });
const horizontalOverflow = reactive({ active: 0 as TabKey, showTabCount: false });
const tooltipTabs = reactive({ active: 0 as TabKey, box: false });
const insetTabs = reactive({ active: 0 as TabKey, box: false });
const pageInsetTabs = reactive({ active: 0 as TabKey, box: false });
const iconTabs = ref<TabKey>(0);
const subtabs = reactive({ primary: 0 as TabKey, secondary: 20 as TabKey, box: false });
const filledTabs = reactive({ active: 0 as TabKey, box: false });
const navTabs = ref<TabKey>(0);
const navSubtabs = reactive({ primary: 0 as TabKey, secondary: 20 as TabKey });
const siteNavTabs = ref<TabKey>(0);
const separateTabs = ref<TabKey>(0);
const separate1 = useTemplateRef('separate1');
const separate2 = useTemplateRef('separate2');
const separate3 = useTemplateRef('separate3');
const bodyPaddingTabs = ref<TabKey>(0);
const body1 = useTemplateRef('body1');
const body2 = useTemplateRef('body2');
const body3 = useTemplateRef('body3');
const mountingTabs = ref<TabKey>(0);
const unmountingTabs = ref<TabKey>(0);
const toggledTabs = ref<TabKey>(0);
const tab2Hidden = ref(false);
const toggled1 = useTemplateRef('toggled1');
const toggled2 = useTemplateRef('toggled2');
const toggled3 = useTemplateRef('toggled3');

type DynamicTabs = { active: TabKey; tabs: string[] };

const dynamic = reactive<DynamicTabs & { next: number }>({
  active: 0,
  tabs: ['Terminal 1', 'Terminal 2', 'Terminal 3'],
  next: 4,
});
const helpAndClose = reactive<DynamicTabs>({ active: 0, tabs: ['Terminal 1', 'Terminal 2', 'Terminal 3'] });

function closeDynamicTab(state: DynamicTabs, index: number) {
  const active = Number(state.active);
  let next = active;
  if (index < active) {
    // if a preceding tab is closing, keep focus on the new index of the current tab
    next = Math.max(active - 1, 0);
  } else if (active === state.tabs.length - 1) {
    // if the closing tab is the last tab, focus the preceding tab
    next = Math.max(state.tabs.length - 2, 0);
  }
  state.tabs = state.tabs.filter((_tab, i) => i !== index);
  state.active = next;
}

function addDynamicTab() {
  dynamic.tabs = [...dynamic.tabs, `Terminal ${dynamic.next}`];
  dynamic.active = dynamic.tabs.length - 1;
  dynamic.next++;
}

const helpTabs = ref<TabKey>(0);
const helpTabNames = ['Users', 'Containers', 'Database', 'Disabled', 'ARIA disabled', 'Help disabled'];
</script>
