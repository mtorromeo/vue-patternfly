<template>
  <doc-page title="Dropdown">
    <template #description
      >A <b>dropdown</b> presents a menu of actions or links in a constrained space that will trigger a process or
      navigate to a new location. See select component guidelines for more information about making one or more
      selections from a list of items in a value list.</template
    >

    <template #apidocs>
      <component-info name="PfDropdown" />
      <component-info name="PfMenuGroup" alias="DropdownGroup" />
      <component-info name="PfMenuItem" alias="DropdownItem" />
      <component-info name="PfMenuList" alias="DropdownList" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The open state is bound with `v-model:open`, replacing `isOpen` and `onOpenChange`.
      - The toggle is the `#toggle` slot instead of the `toggle` prop; its id, `expanded` state, `aria-haspopup` and keyboard handling are bound automatically. Without the slot, a `pf-menu-toggle` is rendered with the `text`, `variant`, `split-button`, `disabled` and `id` props.
      - `close-on-select` closes the menu when an item is selected, instead of closing it in the `select` listener.
      - `onOpenChangeKeys` is `open-change-keys` and `onToggleKeydown` the `toggle-keydown` listener.
      - `scroll-on-item-focus` replaces `shouldPreventScrollOnItemFocus`, which defaults to `true`.
      - `popperProps` is replaced by the `append-to`, `placement`, `position` and `z-index` props; the menu always flips to stay in view.
      - `pf-dropdown-group`, `pf-dropdown-item` and `pf-dropdown-list` are `pf-menu-group`, `pf-menu-item` and `pf-menu-list`: items take `value` and are reported as `PF/MenuItem` to OUIA.
      - `tooltipProps` of the items is replaced by the `tooltip` prop or slot, with `tooltip-attrs` for the other tooltip props.
      - `aria-disabled` replaces `isAriaDisabled`.

      See [common differences from patternfly-react](#/).

      ## Examples

      `pf-dropdown` builds off of the Menu component suite to wrap commonly used properties and functions for a dropdown menu. Attributes that are not dropdown props, such as `plain`, are passed to the underlying `pf-menu`.
    </pre>

    <story-canvas title="Basic dropdowns">
      <template #intro>
        <pre v-md>
          Basic dropdowns present users with a menu of items upon clicking a dropdown toggle.

          A `pf-dropdown` renders a [menu toggle](#/stories/components/menu-toggle) with its `text`, or the one passed in the `#toggle` slot, and a `pf-dropdown-list` with multiple `pf-dropdown-item` components. The open state of the menu is bound with `v-model:open`.

          The following example shows a few different states of dropdown items. As shown in this example, dropdown items may:

          - Use the `disabled` property to disable an item.
          - Use the `aria-disabled` property to disable an item while keeping it focusable, for example to show a `tooltip`.
          - Use the `click` event to trigger a callback for an action.

          This example also uses a `pf-divider` with `component="li"` to split the menu into 2 sections with a horizontal line.
        </pre>
      </template>

      <pf-dropdown
        v-model:open="open.basic"
        text="Dropdown"
        ouia-id="BasicDropdown"
        should-focus-toggle-on-select
        close-on-select
        @select="onSelect"
      >
        <pf-dropdown-list>
          <pf-dropdown-item :value="0">Action</pf-dropdown-item>
          <pf-dropdown-item :value="1" to="#default-link2" @click="$event.preventDefault()">Link</pf-dropdown-item>
          <pf-dropdown-item :value="2" disabled>Disabled Action</pf-dropdown-item>
          <pf-dropdown-item :value="3" disabled to="#default-link4">Disabled Link</pf-dropdown-item>
          <pf-dropdown-item
            :value="4"
            aria-disabled
            to="#default-link5"
            tooltip="aria-disabled link"
            :tooltip-attrs="{ position: 'top' }"
          >
            Aria-disabled Link
          </pf-dropdown-item>
          <pf-divider component="li" />
          <pf-dropdown-item :value="5">Separated Action</pf-dropdown-item>
          <pf-dropdown-item :value="6" to="#default-link6" @click="$event.preventDefault()">
            Separated Link
          </pf-dropdown-item>
        </pf-dropdown-list>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="With kebab toggle">
      <template #intro>
        <pre v-md>
          To style a dropdown menu's toggle with a kebab icon, pass a "plain" `pf-menu-toggle` in the `#toggle` slot. When there isn't enough space for a labeled button, a kebab icon can be used to toggle the dropdown menu open or closed.
        </pre>
      </template>

      <pf-dropdown v-model:open="open.kebab" should-focus-toggle-on-select close-on-select @select="onSelect">
        <template #toggle>
          <pf-menu-toggle aria-label="kebab dropdown toggle" variant="plain">
            <template #icon>
              <ellipsis-vertical-icon />
            </template>
          </pf-menu-toggle>
        </template>

        <pf-dropdown-list>
          <pf-dropdown-item :value="0">Action</pf-dropdown-item>
          <pf-dropdown-item :value="1" to="#default-link2" @click="$event.preventDefault()">Link</pf-dropdown-item>
          <pf-dropdown-item :value="2" disabled>Disabled Action</pf-dropdown-item>
          <pf-dropdown-item :value="3" disabled to="#default-link4">Disabled Link</pf-dropdown-item>
          <pf-divider component="li" />
          <pf-dropdown-item :value="4">Separated Action</pf-dropdown-item>
          <pf-dropdown-item :value="5" to="#default-link6" @click="$event.preventDefault()">
            Separated Link
          </pf-dropdown-item>
        </pf-dropdown-list>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="With groups of items">
      <template #intro>
        <pre v-md>
          To group sets of related dropdown items together, use a `pf-dropdown-group`. When more than 1 `pf-dropdown-group` is created in a menu, use the `label` and `label-heading-level` properties to assign a name and heading level to each group.
        </pre>
      </template>

      <pf-dropdown
        v-model:open="open.groups"
        text="Dropdown"
        should-focus-toggle-on-select
        close-on-select
        @select="onSelect"
      >
        <pf-dropdown-group>
          <pf-dropdown-list>
            <pf-dropdown-item :value="0">Action</pf-dropdown-item>
            <pf-dropdown-item :value="1" to="#default-link2" @click="$event.preventDefault()">Link</pf-dropdown-item>
          </pf-dropdown-list>
        </pf-dropdown-group>
        <pf-divider component="li" />
        <pf-dropdown-group label="Group 2" label-heading-level="h3">
          <pf-dropdown-list>
            <pf-dropdown-item :value="2">Group 2 action</pf-dropdown-item>
            <pf-dropdown-item :value="3" to="#default-link4" @click="$event.preventDefault()">
              Group 2 link
            </pf-dropdown-item>
          </pf-dropdown-list>
        </pf-dropdown-group>
        <pf-divider />
        <pf-dropdown-group label="Group 3" label-heading-level="h3">
          <pf-dropdown-list>
            <pf-dropdown-item :value="4">Group 3 action</pf-dropdown-item>
            <pf-dropdown-item :value="5" to="#default-link6" @click="$event.preventDefault()">
              Group 3 link
            </pf-dropdown-item>
          </pf-dropdown-list>
        </pf-dropdown-group>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="With item descriptions">
      <template #intro>
        <pre v-md>
          To provide users with more context about a `pf-dropdown-item`, pass a short message to the `description` property. As shown in the example below, an item's description will appear below its label.
        </pre>
      </template>

      <pf-dropdown v-model:open="open.descriptions" should-focus-toggle-on-select close-on-select @select="onSelect">
        <template #toggle>
          <pf-menu-toggle full-width>Dropdown</pf-menu-toggle>
        </template>

        <pf-dropdown-list>
          <pf-dropdown-item :value="0" description="This is a description">Action</pf-dropdown-item>
          <pf-dropdown-item
            :value="1"
            description="This is a very long description that describes the menu item"
            to="#default-link2"
            @click="$event.preventDefault()"
          >
            Link
          </pf-dropdown-item>
          <pf-dropdown-item :value="2" disabled description="Disabled link description">
            Disabled action
          </pf-dropdown-item>
          <pf-dropdown-item :value="3" disabled description="This is a description" to="#default-link4">
            Disabled link
          </pf-dropdown-item>
        </pf-dropdown-list>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="Split toggle with checkbox">
      <template #intro>
        <pre v-md>
          To combine a checkbox or other control with a dropdown menu, use a split button.

          A `pf-menu-toggle` can be rendered as a split button via its `#split-buttons` slot. Elements to be displayed before the dropdown toggle button (like the `pf-menu-toggle-checkbox`) must be included in the slot.

          If the dropdown menu closes upon selection, you will need to manually shift focus back to the toggle button after a user selects an item from the menu.
        </pre>
      </template>

      <pf-dropdown v-model:open="open.split" close-on-select @select="focusSplitToggle">
        <template #toggle>
          <pf-menu-toggle ref="splitToggle" aria-label="Dropdown with checkbox split button">
            <template #split-buttons>
              <pf-menu-toggle-checkbox id="split-button-checkbox-example" aria-label="Select all" />
            </template>
          </pf-menu-toggle>
        </template>

        <pf-dropdown-list>
          <pf-dropdown-item :value="0">Action</pf-dropdown-item>
          <pf-dropdown-item :value="1" to="#default-link2" @click="$event.preventDefault()">Link</pf-dropdown-item>
          <pf-dropdown-item :value="2" disabled>Disabled Action</pf-dropdown-item>
          <pf-dropdown-item :value="3" disabled to="#default-link4">Disabled Link</pf-dropdown-item>
          <pf-dropdown-item
            :value="4"
            aria-disabled
            to="#default-link5"
            tooltip="aria-disabled link"
            :tooltip-attrs="{ position: 'top' }"
          >
            Aria-disabled Link
          </pf-dropdown-item>
          <pf-divider component="li" />
          <pf-dropdown-item :value="5">Separated Action</pf-dropdown-item>
          <pf-dropdown-item :value="6" to="#default-link6" @click="$event.preventDefault()">
            Separated Link
          </pf-dropdown-item>
        </pf-dropdown-list>
      </pf-dropdown>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { reactive, useTemplateRef } from 'vue';
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';

const open = reactive({
  basic: false,
  kebab: false,
  groups: false,
  descriptions: false,
  split: false,
});

function onSelect(_event: Event, value: unknown) {
  console.log('selected', value);
}

const splitToggle = useTemplateRef<{ el: HTMLElement | null }>('splitToggle');

function focusSplitToggle() {
  splitToggle.value?.el?.querySelector<HTMLElement>('button[aria-expanded]')?.focus();
}
</script>
