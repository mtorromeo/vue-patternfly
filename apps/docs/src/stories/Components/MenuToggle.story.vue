<template>
  <doc-page title="Menu toggle">
    <template #description>The <b>menu toggle</b> component pairs with the menu OR the panel component to create more customizable dropdown and select implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the standard dropdown or select components.</template>

    <template #apidocs>
      <component-info name="PfMenuToggle" />
      <component-info name="PfMenuToggleAction" />
      <component-info name="PfMenuToggleCheckbox" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Collapsed">
      <pf-menu-toggle>Collapsed</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Expanded">
      <pf-menu-toggle expanded>Expanded</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Disabled">
      <pf-menu-toggle disabled>Disabled</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="With a badge">
      <pf-menu-toggle>
        Count
        <template #badge>
          <pf-badge>4 selected</pf-badge>
        </template>
      </pf-menu-toggle>
      <pf-menu-toggle variant="plainText">
        <template #badge>
          <pf-badge>4</pf-badge>
        </template>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Settings toggle">
      <pf-menu-toggle settings>Settings</pf-menu-toggle>
      <pf-menu-toggle settings variant="plain" aria-label="Settings" />
    </story-canvas>

    <story-canvas title="Primary">
      <pf-menu-toggle variant="primary">Collapsed</pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="primary">
        <template #icon>
          <gear-icon />
        </template>
        Icon
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="primary" settings>
        Settings
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="primary" expanded>Expanded</pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="primary" disabled>Disabled</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Secondary">
      <pf-menu-toggle variant="secondary">Collapsed</pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="secondary">
        <template #icon>
          <gear-icon />
        </template>
        Icon
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="secondary" settings>
        Settings
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="secondary" expanded>Expanded</pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="secondary" disabled>Disabled</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Plain toggle with icon">
      <pf-menu-toggle variant="plain" />
      {{ ' ' }}
      <pf-menu-toggle variant="plain" expanded />
      {{ ' ' }}
      <pf-menu-toggle variant="plain" disabled />
    </story-canvas>

    <story-canvas title="Plain circle toggle">
      <pf-menu-toggle circle variant="plain" />
      {{ ' ' }}
      <pf-menu-toggle circle variant="plain" expanded />
      {{ ' ' }}
      <pf-menu-toggle circle variant="plain" disabled />
    </story-canvas>

    <story-canvas title="Plain toggle with text label">
      <pf-menu-toggle variant="plainText">Custom text</pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="plainText" expanded>Custom text (expanded)</pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="plainText" disabled>Disabled</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split toggle with checkbox">
      <pf-menu-toggle>
        <template #split-buttons>
          <pf-menu-toggle-checkbox />
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle expanded>
        <template #split-buttons>
          <pf-menu-toggle-checkbox />
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle disabled>
        <template #split-buttons>
          <pf-menu-toggle-checkbox disabled />
        </template>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split toggle (checkbox indeterminate with toggle text)">
      <pf-menu-toggle>
        <template #split-buttons>
          <pf-menu-toggle-checkbox :checked="null">10 selected</pf-menu-toggle-checkbox>
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle expanded>
        <template #split-buttons>
          <pf-menu-toggle-checkbox :checked="null">10 selected</pf-menu-toggle-checkbox>
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle disabled>
        <template #split-buttons>
          <pf-menu-toggle-checkbox :checked="null" disabled>10 selected</pf-menu-toggle-checkbox>
        </template>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split toggle (checkbox, primary)">
      <pf-menu-toggle variant="primary">
        <template #split-buttons>
          <pf-menu-toggle-checkbox>10 selected</pf-menu-toggle-checkbox>
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="primary" expanded>
        <template #split-buttons>
          <pf-menu-toggle-checkbox>10 selected</pf-menu-toggle-checkbox>
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="primary" disabled>
        <template #split-buttons>
          <pf-menu-toggle-checkbox>10 selected</pf-menu-toggle-checkbox>
        </template>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split toggle (checkbox, secondary)">
      <pf-menu-toggle variant="secondary">
        <template #split-buttons>
          <pf-menu-toggle-checkbox>10 selected</pf-menu-toggle-checkbox>
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="secondary" expanded>
        <template #split-buttons>
          <pf-menu-toggle-checkbox>10 selected</pf-menu-toggle-checkbox>
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="secondary" disabled>
        <template #split-buttons>
          <pf-menu-toggle-checkbox disabled>10 selected</pf-menu-toggle-checkbox>
        </template>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split toggle (action)">
      <pf-menu-toggle>
        <template #split-buttons>
          <pf-menu-toggle-action>Action</pf-menu-toggle-action>
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle expanded>
        <template #split-buttons>
          <pf-menu-toggle-action>Action</pf-menu-toggle-action>
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle disabled>
        <template #split-buttons>
          <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
        </template>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split toggle (action, primary)">
      <pf-menu-toggle variant="primary">
        <template #split-buttons>
          <pf-menu-toggle-action>Action</pf-menu-toggle-action>
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="primary" expanded>
        <template #split-buttons>
          <pf-menu-toggle-action>Action</pf-menu-toggle-action>
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="primary" disabled>
        <template #split-buttons>
          <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
        </template>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split toggle (action, secondary)">
      <pf-menu-toggle variant="secondary">
        <template #split-buttons>
          <pf-menu-toggle-action>Action</pf-menu-toggle-action>
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="secondary" expanded>
        <template #split-buttons>
          <pf-menu-toggle-action>Action</pf-menu-toggle-action>
        </template>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="secondary" disabled>
        <template #split-buttons>
          <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
        </template>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="With icon/image and text">
      <pf-menu-toggle variant="secondary">
        <template #icon>
          <gear-icon />
        </template>
        Icon
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="secondary" disabled>
        <template #icon>
          <gear-icon />
        </template>
        Icon
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="With avatar and text">
      <pf-menu-toggle>
        <template #icon>
          <pf-avatar src="avatar.svg" alt="avatar" />
        </template>
        Ned Username
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle expanded>
        <template #icon>
          <pf-avatar src="avatar.svg" alt="avatar" />
        </template>
        Ned Username
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle disabled>
        <template #icon>
          <pf-avatar src="avatar.svg" alt="avatar" />
        </template>
        Ned Username
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Full height">
      <div style="height:80px">
        <pf-menu-toggle full-height>Full height</pf-menu-toggle>
      </div>
    </story-canvas>

    <story-canvas title="Full width">
      <pf-menu-toggle full-width>Full width</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Typeahead toggle">
      <pf-menu-toggle variant="typeahead" full-width>
        <pf-text-input-group plain>
          <pf-text-input-group-main autocomplete="off" v-model="inputValue" />

          <pf-text-input-group-utilities>
            <pf-button v-if="inputValue" variant="plain" aria-label="Clear input">
              <template #icon>
                <x-icon />
              </template>
            </pf-button>
          </pf-text-input-group-utilities>
        </pf-text-input-group>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Status toggle">
      <pf-menu-toggle status="success">Success</pf-menu-toggle>
      <br>
      <br>
      <pf-menu-toggle status="warning">Warning</pf-menu-toggle>
      <pf-helper-text>
        <pf-helper-text-item variant="warning">Warning text that provides context about the menu toggle</pf-helper-text-item>
      </pf-helper-text>
      <br>
      <br>
      <pf-menu-toggle status="danger">Danger</pf-menu-toggle>
      <pf-helper-text>
        <pf-helper-text-item variant="error">Danger text that provides context about the menu toggle</pf-helper-text-item>
      </pf-helper-text>
    </story-canvas>

    <story-canvas title="Placeholder text in toggle">
      <pf-menu-toggle placeholder>Placeholder text</pf-menu-toggle>
    </story-canvas>
  </doc-page>
</template>

<style scoped>
:deep(.inner-canvas .pf-v6-c-menu-toggle) {
  vertical-align: bottom;
}
</style>

<script lang="ts" setup>
import GearIcon from '@vue-patternfly/icons/gear-icon';
import XIcon from '@vue-patternfly/icons/x-icon';
import { ref } from 'vue';

const inputValue = ref('');
</script>
