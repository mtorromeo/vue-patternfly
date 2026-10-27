<template>
  <doc-page title="Select">
    <template #description
      >A <b>select list</b> enables users to select one or more items from a list. Use a select list when options are
      dynamic or variable.</template
    >

    <template #apidocs>
      <component-info name="PfSelect" />
      <component-info name="PfMenuGroup" alias="SelectGroup" />
      <component-info name="PfMenuList" alias="SelectList" />
      <component-info name="PfMenuItem" alias="SelectOption" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - A default menu toggle is included: its text is the `label` prop or slot, its icon the `icon` slot, and `disabled`, `variant`, `full-width` and `full-height` are passed to it. The `toggle` slot replaces it with a custom toggle, which receives the expanded state, the click and the keydown handlers (`toggle`).
      - The open state is bound with `v-model:open` (`isOpen`, `onOpenChange`) and the selection with `v-model:selected` (`selected`).
      - `close-on-select` closes the menu on select, which `pf-dropdown` does by default.
      - The default toggle, or a `pf-menu-toggle` in the `toggle` slot without its own, gets the `ouia-id` of the select.
      - `popperProps` are the `placement`, `append-to` and `z-index` props, `min-width` sets the minimum width of the menu.
      - `shouldPreventScrollOnItemFocus` is inverted into `scroll-on-item-focus`; `onOpenChangeKeys` is `open-change-keys`.
      - `variant="typeahead"` is the variant of the default toggle too.
      - `pf-select-option` is `pf-menu-item`: `has-checkbox` is `check`, `is-selected` is `selected`.
      See [common differences from patternfly-react](#/).

      ## Examples
      Select builds off of the menu component suite to adapt commonly used properties and functions to create a select menu. See the [menu documentation](#/stories/components/menu) for a full list of properties that may be used to further customize a select menu.
    </pre>

    <story-canvas title="Single select">
      <template #intro>
        <pre v-md>
          To let users select a single item from a list, use a single select menu.

          You can add multiple `pf-select-option` components to build out a list of menu items. For each select option, pass a relevant option label to the `value` property.

          To disable the select menu toggle, use the `disabled` property. In the following example, select the checkbox to observe this behavior.
        </pre>
      </template>

      <pf-checkbox id="toggle-disabled" v-model="disabled" label="disabled" style="margin-bottom: 20px" />
      <pf-select
        id="single-select"
        v-model:open="single.open"
        v-model:selected="single.selected"
        :label="single.selected ?? 'Select a value'"
        :disabled="disabled"
        should-focus-toggle-on-select
        close-on-select
      >
        <pf-select-list>
          <pf-select-option value="Option 1">Option 1</pf-select-option>
          <pf-select-option value="Option 2">Option 2</pf-select-option>
          <pf-select-option value="Option 3">Option 3</pf-select-option>
        </pf-select-list>
      </pf-select>
    </story-canvas>

    <story-canvas title="Select option variants">
      <template #intro>
        <pre v-md>
          The following example showcases different option variants and customizations that are commonly used in a select menu.

          To create these variants, you can pass different properties into a `pf-select-option` component.

          This example provides examples of:

          - An option with a description, which is created by using the `description` property.
          - An option with a link, which is created by passing a URL into the `to` property. For external links, use the `external-link` property so that the option is styled with an outbound link icon.
          - An option with an icon, which is created by using the `icon` slot.
          - An option that is disabled by using the `disabled` property.
        </pre>
      </template>

      <pf-select
        id="option-variations-select"
        v-model:open="variations.open"
        v-model:selected="variations.selected"
        :label="variations.selected ?? 'Select a value'"
        should-focus-toggle-on-select
        close-on-select
      >
        <pf-select-list>
          <pf-select-option value="Basic option">Basic option</pf-select-option>
          <pf-select-option value="Option with description" description="This is a description">
            Option with description
          </pf-select-option>
          <pf-select-option to="#" value="Option with link" external-link @click.prevent>
            Option with link
          </pf-select-option>
          <pf-select-option value="Option with icon">
            <template #icon><bell-icon /></template>
            Option with icon
          </pf-select-option>
          <pf-select-option value="Disabled option" disabled>Disabled option</pf-select-option>
          <pf-select-option value="See Menu for additional variations!">
            See Menu for additional variations!
          </pf-select-option>
        </pf-select-list>
      </pf-select>
    </story-canvas>

    <story-canvas title="With grouped items">
      <template #intro>
        <pre v-md>
          To group related select options together, use 1 or more `pf-select-group` components and title each group using the `label` property.
        </pre>
      </template>

      <pf-select
        id="single-grouped-select"
        v-model:open="grouped.open"
        v-model:selected="grouped.selected"
        :label="grouped.selected ?? 'Select a value'"
        should-focus-toggle-on-select
        close-on-select
      >
        <pf-select-group label="Group 1">
          <pf-select-list>
            <pf-select-option value="Option 1">Option 1</pf-select-option>
            <pf-select-option value="Option 2">Option 2</pf-select-option>
            <pf-select-option value="Option 3">Option 3</pf-select-option>
          </pf-select-list>
        </pf-select-group>
        <pf-divider />
        <pf-select-group label="Group 2">
          <pf-select-list>
            <pf-select-option value="Option 4">Option 4</pf-select-option>
            <pf-select-option value="Option 5">Option 5</pf-select-option>
            <pf-select-option value="Option 6">Option 6</pf-select-option>
          </pf-select-list>
        </pf-select-group>
      </pf-select>
    </story-canvas>

    <story-canvas title="With validation">
      <template #intro>
        <pre v-md>
          To create a toggle with a status, pass in `status` to the `pf-menu-toggle` of the `toggle` slot. The default icon associated with each status may be overridden by using the `status-icon` slot.

          When the status value is "warning" or "danger", you must include helper text that conveys what is causing the warning/error.
        </pre>
      </template>

      <pf-select
        id="validated-select"
        v-model:open="validated.open"
        v-model:selected="validated.selected"
        should-focus-toggle-on-select
        close-on-select
      >
        <template #toggle>
          <pf-menu-toggle style="width: 200px" :status="validatedStatus">
            {{ validated.selected ?? 'Select a value' }}
          </pf-menu-toggle>
        </template>

        <pf-select-list>
          <pf-select-option value="Success">Success</pf-select-option>
          <pf-select-option value="Warning">Warning</pf-select-option>
          <pf-select-option value="Danger">Danger</pf-select-option>
        </pf-select-list>
      </pf-select>
      <pf-helper-text v-if="validatedStatus === 'warning' || validatedStatus === 'danger'" live-region>
        <pf-helper-text-item :variant="validatedStatus === 'warning' ? 'warning' : 'error'">
          <template v-if="validatedStatus === 'warning'">Warning text that explains the issue.</template>
          <template v-else>Danger text that explains the issue.</template>
        </pf-helper-text-item>
      </pf-helper-text>
    </story-canvas>

    <story-canvas title="Checkbox select">
      <template #intro>
        <pre v-md>
          To let users select multiple list options via checkbox input, use a checkbox select.

          To create a checkbox select, pass `role="menu"` to the `pf-select`, and `check` into each `pf-select-option` component. Bind an array with `v-model:selected` to toggle the selected options.

          By default, the menu toggle will display a badge to indicate the number of items that a user has selected.
        </pre>
      </template>

      <pf-select id="checkbox-select" v-model:open="checkbox.open" v-model:selected="checkbox.selected" role="menu">
        <template #label>
          Filter by status
          <pf-badge v-if="checkbox.selected.length > 0" read>{{ checkbox.selected.length }}</pf-badge>
        </template>

        <pf-select-list>
          <pf-select-option check :value="0">Debug</pf-select-option>
          <pf-select-option check :value="1">Info</pf-select-option>
          <pf-select-option check :value="2">Warn</pf-select-option>
          <pf-select-option check disabled :value="4">Error</pf-select-option>
        </pf-select-list>
      </pf-select>
    </story-canvas>

    <story-canvas title="Typeahead" src="./Select-Typeahead.vue">
      <template #intro>
        <pre v-md>
          Typeahead is a select variant that replaces the typical button toggle for opening the select menu with a text input and button toggle combo. As a user enters characters into the text input, the menu options will be filtered to match.

          To make a typeahead, pass `variant="typeahead"` into the `pf-select` and put a `pf-text-input-group` in the `label` slot of its toggle.
        </pre>
      </template>
    </story-canvas>

    <story-canvas title="Typeahead with create option" src="./Select-TypeaheadCreatable.vue">
      <template #intro>
        <pre v-md>
          If a user enters a value into a typeahead select menu that does not exist, you can allow them to create an option of that value.

          To enable the creation ability, pass a predetermined `value` into a `pf-select-option` component. You can use the `placeholder` property to change the default text shown in the text input.
        </pre>
      </template>
    </story-canvas>

    <story-canvas title="Multiple typeahead with labels" src="./Select-MultiTypeahead.vue">
      <template #intro>
        <pre v-md>
          A multiple typeahead can be used to allow users to select multiple options from a list. Additionally, you can render a label group to be placed in the select toggle.

          When more items than the allowed limit are selected, overflowing items will be hidden under a "more" button. The following example hides items after more than 3 are selected. To show hidden items, select the “more” button. Select "show less" to hide extra items again.
        </pre>
      </template>
    </story-canvas>

    <story-canvas title="Multiple typeahead with create option" src="./Select-MultiTypeaheadCreatable.vue">
      <template #intro>
        <pre v-md>
          If the text that is entered into a typeahead doesn't match a menu item, users can choose to create a new option that matches the text input. You can also combine this create functionality with a label group to display created items as labels.
        </pre>
      </template>
    </story-canvas>

    <story-canvas title="Multiple typeahead with checkboxes" src="./Select-MultiTypeaheadCheckbox.vue">
      <template #intro>
        <pre v-md>
          By default, a multiple typeahead select allows you to select multiple menu items, placing a checkmark beside selected items. Like basic checkbox select menus, you can add checkboxes to your menu items. This approach may be more accurate and comprehensive for more complex menu scenarios like filtering.
        </pre>
      </template>
    </story-canvas>

    <story-canvas title="With view more">
      <template #intro>
        <pre v-md>
          To reduce the processing load for long select lists, you can add a "View more" action to load additional items.

          The following example shows 3 items before the "View more" link, but you can adjust the number of visible items for your use case.
        </pre>
      </template>

      <pf-select
        id="single-view-more-select"
        v-model:open="viewMore.open"
        :selected="viewMore.selected"
        :label="viewMore.selected ?? 'Select a value'"
        @select="onViewMoreSelect"
      >
        <pf-select-list>
          <pf-select-option
            v-for="(option, i) in viewMoreOptions.slice(0, viewMore.count)"
            :id="`view-more-option-${i}`"
            :key="option"
            :value="option"
          >
            {{ option }}
          </pf-select-option>
          <pf-select-option
            v-if="viewMore.count < viewMoreOptions.length"
            value="loader"
            :load-button="!viewMore.loading"
            :loading="viewMore.loading"
            @click="onViewMoreClick"
          >
            <pf-spinner v-if="viewMore.loading" size="lg" />
            <template v-else>View more</template>
          </pf-select-option>
        </pf-select-list>
      </pf-select>
    </story-canvas>

    <story-canvas title="With a footer">
      <template #intro>
        <pre v-md>
          You can add a `pf-menu-footer` component to a select menu to hold additional actions that users can take on menu items, through elements such as link buttons. A footer will be placed beneath a divider at the end of the select menu.
        </pre>
      </template>

      <pf-select
        id="menu-with-footer"
        v-model:open="footer.open"
        v-model:selected="footer.selected"
        :label="footer.selected ?? 'Select a value'"
        :open-change-keys="['Escape']"
      >
        <pf-select-list>
          <pf-select-option value="Option 1">Option 1</pf-select-option>
          <pf-select-option value="Option 2">Option 2</pf-select-option>
          <pf-select-option value="Option 3">Option 3</pf-select-option>
        </pf-select-list>
        <pf-menu-footer>
          <pf-button variant="link" inline>Footer action</pf-button>
        </pf-menu-footer>
      </pf-select>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { computed, nextTick, reactive, ref } from 'vue';
import BellIcon from '@vue-patternfly/icons/bell-icon';
import type { MenuItemId } from '@vue-patternfly/core/components/Menu/Menu.vue';

type SingleState = { open: boolean; selected: string | null };

const disabled = ref(false);
const single = reactive<SingleState>({ open: false, selected: null });
const variations = reactive<SingleState>({ open: false, selected: null });
const grouped = reactive<SingleState>({ open: false, selected: null });
const footer = reactive<SingleState>({ open: false, selected: null });

const validated = reactive<SingleState>({ open: false, selected: null });
const validatedStatus = computed(
  () => validated.selected?.toLowerCase() as 'success' | 'warning' | 'danger' | undefined,
);

const checkbox = reactive<{ open: boolean; selected: number[] }>({ open: false, selected: [] });

const viewMoreOptions = [
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
  'Option 6',
  'Option 7',
  'Option 8',
  'Option 9',
  'Final Option 10',
];
const viewMore = reactive<SingleState & { count: number; loading: boolean }>({
  open: false,
  selected: null,
  count: 3,
  loading: false,
});

function onViewMoreClick() {
  viewMore.loading = true;
  // simulate a network call
  setTimeout(() => {
    const firstNew = viewMore.count;
    viewMore.count = Math.min(viewMore.count + 3, viewMoreOptions.length);
    viewMore.loading = false;
    // focus the first loaded option
    nextTick(() => document.querySelector<HTMLElement>(`#view-more-option-${firstNew} button`)?.focus());
  }, 2000);
}

function onViewMoreSelect(_event: Event, value?: MenuItemId | null) {
  if (value !== 'loader' && typeof value === 'string') {
    viewMore.selected = value;
    viewMore.open = false;
  }
}
</script>
