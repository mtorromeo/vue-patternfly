<template>
  <doc-page title="Menu toggle">
    <template #description
      >The <b>menu toggle</b> component pairs with the menu OR the panel component to create more customizable dropdown
      and select implementations. Using a menu toggle with a menu enables you to create custom component configurations
      not supported by the standard dropdown or select components.</template
    >

    <template #apidocs>
      <component-info name="PfMenuToggle" />
      <component-info name="PfMenuToggleAction" />
      <component-info name="PfMenuToggleCheckbox" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The expanded state is bound with `v-model:expanded`, and clicking the toggle button toggles it when unbound.
      - `@click` is emitted only by the toggle button: in a split or typeahead toggle, clicks on the split button items or on the input do not emit it.
      - The `icon`, `badge` and `statusIcon` props are replaced by the `icon`, `badge` and `status-icon` slots.
      - The `splitButtonItems` prop is replaced by the `split-buttons` slot.
      - `size="sm"` is replaced by the `small` prop.
      - A `plain` toggle with no content renders an ellipsis icon.
      - The toggle button of a disabled typeahead toggle is disabled too.
      - The checked state of `pf-menu-toggle-checkbox` is bound with `v-model:checked` (`isChecked`, `null` for indeterminate), which also manages it internally when unbound (`defaultChecked`); changes are emitted with `@change`.
      - The `isValid` prop of `pf-menu-toggle-checkbox` is replaced by `invalid` with inverted behavior.
      - The `id` of `pf-menu-toggle-checkbox` goes on the input, rather than being used as its `name` and as the `id` of the label text.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Collapsed toggle">
      <template #intro>
        <pre v-md>
          A toggle is collapsed until it is selected by a user.
        </pre>
      </template>

      <pf-menu-toggle :aria-haspopup="false">Collapsed</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Expanded toggle">
      <template #intro>
        <pre v-md>
          When a user selects a toggle, it becomes expanded and is styled with a blue underline. To flag expanded toggles, and apply expanded styling, use the `expanded` property, bound with `v-model:expanded`.
        </pre>
      </template>

      <pf-menu-toggle :aria-haspopup="false" expanded>Expanded</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Small toggle">
      <template #intro>
        <pre v-md>
          You can pass the `small` property to a `pf-menu-toggle` to style it as a small toggle, such as within a [breadcrumb](#/stories/components/breadcrumb).
        </pre>
      </template>

      <pf-menu-toggle :aria-haspopup="false" small>Small toggle</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Disabled toggle">
      <template #intro>
        <pre v-md>
          To disable the selection and expansion of a toggle, use the `disabled` property.
        </pre>
      </template>

      <pf-menu-toggle :aria-haspopup="false" disabled>Disabled</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="With a badge">
      <template #intro>
        <pre v-md>
          To display a count of selected items in a toggle, use the `badge` slot. You can also pass in `variant="plainText"` for a badge only toggle.
        </pre>
      </template>

      <pf-menu-toggle :aria-haspopup="false">
        Count
        <template #badge>
          <pf-badge>4 selected</pf-badge>
        </template>
      </pf-menu-toggle>
      <pf-menu-toggle :aria-haspopup="false" variant="plainText">
        <template #badge>
          <pf-badge screen-reader-text="additional items">4</pf-badge>
        </template>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Settings toggle">
      <template #intro>
        <pre v-md>
          To create a "settings" menu toggle that will animate on hover and focus, you can pass the `settings` property in. Doing so will override the `icon` slot, as a specific icon is used internally for the animations.
        </pre>
      </template>

      <pf-menu-toggle :aria-haspopup="false" settings>Settings</pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle :aria-haspopup="false" settings variant="plain" aria-label="Settings" />
    </story-canvas>

    <story-canvas title="Custom icons">
      <template #intro>
        <pre v-md>
          To add a recognizable icon to a menu toggle, use the `icon` slot. The following example adds a `plus-icon` to the toggle.

          For most basic icons, it is recommended to wrap it inside our [icon component](#/stories/components/icon).
        </pre>
      </template>

      <pf-menu-toggle :aria-haspopup="false" variant="primary">
        <template #icon>
          <plus-icon />
        </template>
        Icon
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle :aria-haspopup="false" variant="secondary">
        <template #icon>
          <plus-icon />
        </template>
        Icon
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle :aria-haspopup="false" variant="secondary" disabled>
        <template #icon>
          <plus-icon />
        </template>
        Icon
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="With avatar and text">
      <template #intro>
        <pre v-md>
          You can also pass images into the `icon` slot. The following example passes in a `pf-avatar`.

          This can be used alongside a text label that provides more context for the image.
        </pre>
      </template>

      <pf-menu-toggle :aria-haspopup="false">
        <template #icon>
          <pf-avatar src="avatar.svg" alt="avatar" size="sm" />
        </template>
        Ned Username
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle :aria-haspopup="false" expanded>
        <template #icon>
          <pf-avatar src="avatar.svg" alt="avatar" size="sm" />
        </template>
        Ned Username
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle :aria-haspopup="false" disabled>
        <template #icon>
          <pf-avatar src="avatar.svg" alt="avatar" size="sm" />
        </template>
        Ned Username
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Variant styles">
      <template #intro>
        <pre v-md>
          Variant styling can be applied to menu toggles. In the following example, the toggle uses primary styling by passing `variant="primary"` into the `pf-menu-toggle` component. Additional variant options include "default", "plain", "plainText", "secondary", and "typeahead".
        </pre>
      </template>

      <pf-menu-toggle :aria-haspopup="false" variant="primary">Collapsed</pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle :aria-haspopup="false" variant="primary" expanded>Expanded</pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle :aria-haspopup="false" variant="primary" disabled>Disabled</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Plain toggle with icon">
      <template #intro>
        <pre v-md>
          To apply plain styling to a menu toggle with an icon, pass in `variant="plain"`. This will remove the default bottom border and caret. You may pass in an `icon` slot to serve as the menu toggle; without one, an `ellipsis-vertical-icon` is rendered.

          If the toggle does not have any visible text content, use the `aria-label` attribute to provide an accessible name.
        </pre>
      </template>

      <pf-menu-toggle :aria-haspopup="false" variant="plain" aria-label="plain kebab">
        <template #icon>
          <ellipsis-vertical-icon />
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle :aria-haspopup="false" variant="plain" expanded aria-label="plain expanded kebab">
        <template #icon>
          <ellipsis-vertical-icon />
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle :aria-haspopup="false" variant="plain" disabled aria-label="disabled plain kebab">
        <template #icon>
          <ellipsis-vertical-icon />
        </template>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Plain circle toggle">
      <template #intro>
        <pre v-md>
          You can also pass the `circle` property to a plain, icon-only toggle to adjust the styling to a complete circular shape, rather than a rounded square.
        </pre>
      </template>

      <pf-menu-toggle :aria-haspopup="false" circle variant="plain" aria-label="plain circle kebab">
        <template #icon>
          <ellipsis-vertical-icon />
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle :aria-haspopup="false" circle variant="plain" expanded aria-label="plain circle expanded kebab">
        <template #icon>
          <ellipsis-vertical-icon />
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle :aria-haspopup="false" circle variant="plain" disabled aria-label="disabled plain circle kebab">
        <template #icon>
          <ellipsis-vertical-icon />
        </template>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Plain toggle with text label">
      <template #intro>
        <pre v-md>
          To apply plain styling to a menu toggle with a text label, pass in `variant="plainText"`. Unlike the "plain" variant, "plainText" adds a caret pointing down in the toggle.
        </pre>
      </template>

      <pf-menu-toggle :aria-haspopup="false" variant="plainText" disabled aria-label="Disabled plain menu toggle">
        Disabled
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle :aria-haspopup="false" variant="plainText" aria-label="Plain menu toggle">
        Custom text
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle :aria-haspopup="false" variant="plainText" expanded aria-label="Expanded plain menu toggle">
        Custom text (expanded)
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split toggle with checkbox">
      <template #intro>
        <pre v-md>
          To add a checkbox (or other action/control) to a menu toggle, use a split button.

          A `pf-menu-toggle` can be rendered as a split button by filling its `split-buttons` slot with the elements to be displayed before the toggle button.

          The following example shows a split button with a `pf-menu-toggle-checkbox`.

          Variant styling can be applied to split button toggles to adjust their appearance for different scenarios. Both "primary" and "secondary" variants can be used with split button toggles.
        </pre>
      </template>

      <pf-menu-toggle aria-label="Menu toggle with checkbox split button">
        <template #split-buttons>
          <pf-menu-toggle-checkbox aria-label="Select all" />
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="primary" aria-label="Menu toggle with checkbox split button">
        <template #split-buttons>
          <pf-menu-toggle-checkbox aria-label="Select all" />
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="secondary" aria-label="Menu toggle with checkbox split button">
        <template #split-buttons>
          <pf-menu-toggle-checkbox aria-label="Select all" />
        </template>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split toggle with labeled checkbox">
      <template #intro>
        <pre v-md>
          You can allow users to select a toggle checkbox by clicking either the checkbox or the text label.

          To link a split toggle label to the toggle's checkbox, pass the label to the default slot of the `pf-menu-toggle-checkbox` in the `split-buttons` slot.
        </pre>
      </template>

      <pf-menu-toggle aria-label="Menu toggle with checkbox split button and text">
        <template #split-buttons>
          <pf-menu-toggle-checkbox aria-label="Select all">10 selected</pf-menu-toggle-checkbox>
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="primary" aria-label="Primary menu toggle with checkbox split button">
        <template #split-buttons>
          <pf-menu-toggle-checkbox aria-label="Select all">10 selected</pf-menu-toggle-checkbox>
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="secondary" aria-label="Secondary menu toggle with checkbox split button">
        <template #split-buttons>
          <pf-menu-toggle-checkbox aria-label="Select all">10 selected</pf-menu-toggle-checkbox>
        </template>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split toggle with checkbox and toggle text">
      <template #intro>
        <pre v-md>
          To link a split toggle label to the toggle button itself, pass the label to the default slot of the `pf-menu-toggle`, instead of the `split-buttons` slot.
        </pre>
      </template>

      <pf-menu-toggle aria-label="Menu toggle with checkbox split button and text">
        <template #split-buttons>
          <pf-menu-toggle-checkbox aria-label="Select all" />
        </template>
        10 selected
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="primary" aria-label="Primary menu toggle with checkbox split button">
        <template #split-buttons>
          <pf-menu-toggle-checkbox aria-label="Select all" />
        </template>
        10 selected
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="secondary" aria-label="Secondary menu toggle with checkbox split button">
        <template #split-buttons>
          <pf-menu-toggle-checkbox aria-label="Select all" />
        </template>
        10 selected
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split toggle with action">
      <template #intro>
        <pre v-md>
          To add an action to a split button, add a `pf-menu-toggle-action` to the `split-buttons` slot.

          Actions may be used with primary and secondary toggle variants.
        </pre>
      </template>

      <pf-menu-toggle aria-label="Menu toggle with action split button">
        <template #split-buttons>
          <pf-menu-toggle-action aria-label="Action">Action</pf-menu-toggle-action>
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="primary" aria-label="Menu toggle with action split button">
        <template #split-buttons>
          <pf-menu-toggle-action aria-label="Action">Action</pf-menu-toggle-action>
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="secondary" aria-label="Menu toggle with action split button">
        <template #split-buttons>
          <pf-menu-toggle-action aria-label="Action">Action</pf-menu-toggle-action>
        </template>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Full height toggle">
      <template #intro>
        <pre v-md>
          A full height toggle fills the height of its parent. To flag a full height toggle, use the `full-height` property.

          In the following example, the toggle fills the size of the "80px" `&lt;div&gt;` element that it is within.
        </pre>
      </template>

      <div style="height: 80px">
        <pf-menu-toggle :aria-haspopup="false" full-height aria-label="Full height menu toggle">
          Full height
        </pf-menu-toggle>
      </div>
    </story-canvas>

    <story-canvas title="Full width toggle">
      <template #intro>
        <pre v-md>
          A full width toggle fills the width of its parent. To flag a full width toggle, use the `full-width` property.

          In the following example, the toggle fills the width of its parent as the window size changes.
        </pre>
      </template>

      <pf-menu-toggle :aria-haspopup="false" full-width aria-label="Full width menu toggle">Full width</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Toggle in a form">
      <template #intro>
        <pre v-md>
          When a menu toggle is used inside a form, pass the `in-form` property so the toggle receives form-appropriate styling.
        </pre>
      </template>

      <pf-menu-toggle :aria-haspopup="false" in-form aria-label="Menu toggle in a form">In form</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Typeahead toggle">
      <template #intro>
        <pre v-md>
          To create a typeahead toggle, pass in `variant="typeahead"` to the `pf-menu-toggle`. Then, pass a `pf-text-input-group` component in the default slot of the `pf-menu-toggle`.

          To create a multiple typeahead toggle, pass a `pf-text-input-group` component implemented like the [text input group's filter example](#/stories/components/text-input-group) in the default slot of `pf-menu-toggle`.
        </pre>
      </template>

      <pf-menu-toggle :aria-haspopup="false" variant="typeahead" full-width aria-label="Typeahead menu toggle">
        <pf-text-input-group plain>
          <pf-text-input-group-main id="typeahead-select-input" v-model="inputValue" autocomplete="off" />

          <pf-text-input-group-utilities>
            <pf-button v-if="inputValue" variant="plain" aria-label="Clear input value" @click="inputValue = ''">
              <template #icon>
                <x-icon />
              </template>
            </pf-button>
          </pf-text-input-group-utilities>
        </pf-text-input-group>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Status toggle">
      <template #intro>
        <pre v-md>
          To create a toggle with a status, pass in the `status` property to the `pf-menu-toggle`. The default icon associated with each status may be overridden by using the `status-icon` slot.

          When the status value is "warning" or "danger", you must include helper text that conveys what is causing the warning/error.
        </pre>
      </template>

      <pf-menu-toggle :aria-haspopup="false" status="success">Success</pf-menu-toggle>
      <br />
      <br />
      <pf-menu-toggle :aria-haspopup="false" status="warning">Warning</pf-menu-toggle>
      <pf-helper-text>
        <pf-helper-text-item variant="warning">Warning text that explains the issue.</pf-helper-text-item>
      </pf-helper-text>
      <br />
      <br />
      <pf-menu-toggle :aria-haspopup="false" status="danger">Danger</pf-menu-toggle>
      <pf-helper-text>
        <pf-helper-text-item variant="error">Danger text that explains the issue.</pf-helper-text-item>
      </pf-helper-text>
    </story-canvas>

    <story-canvas title="Placeholder text in toggle">
      <template #intro>
        <pre v-md>
          To indicate the toggle contains placeholder text, pass the `placeholder` property to the `pf-menu-toggle`.
        </pre>
      </template>

      <pf-menu-toggle :aria-haspopup="false" placeholder>Placeholder text</pf-menu-toggle>
    </story-canvas>
  </doc-page>
</template>

<style scoped>
:deep(.inner-canvas .pf-v6-c-menu-toggle) {
  vertical-align: bottom;
}
</style>

<script lang="ts" setup>
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';
import PlusIcon from '@vue-patternfly/icons/plus-icon';
import XIcon from '@vue-patternfly/icons/x-icon';
import { ref } from 'vue';

const inputValue = ref('');
</script>
