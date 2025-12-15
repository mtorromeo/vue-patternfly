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

    <story-canvas title="Count">
      <pf-menu-toggle>
        Count
        <template #badge>
          <pf-badge>4 selected</pf-badge>
        </template>
      </pf-menu-toggle>
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

    <story-canvas title="Plain">
      <pf-menu-toggle variant="plain" />
      {{ ' ' }}
      <pf-menu-toggle variant="plain" expanded />
      {{ ' ' }}
      <pf-menu-toggle variant="plain" disabled />
    </story-canvas>

    <story-canvas title="Plain with text">
      <pf-menu-toggle variant="plainText">Custom text</pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="plainText" expanded>Custom text (expanded)</pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="plainText" disabled>Disabled</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split button (checkbox)">
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

    <story-canvas title="Split button (checkbox indeterminate with toggle text)">
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

    <story-canvas title="Split button (checkbox, primary)">
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

    <story-canvas title="Split button (checkbox, secondary)">
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

    <story-canvas title="Split button (action)">
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

    <story-canvas title="Split button (action, primary)">
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

    <story-canvas title="Split button (action, secondary)">
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
  </doc-page>
</template>

<style scoped>
:deep(.inner-canvas .pf-v6-c-menu-toggle) {
  vertical-align: bottom;
}
</style>

<script lang="ts" setup>
import GearIcon from '@vue-patternfly/icons/gear-icon';
</script>
