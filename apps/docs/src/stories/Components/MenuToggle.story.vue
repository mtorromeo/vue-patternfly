<template>
  <doc-page title="Menu toggle">
    <component-title name="pf-menu-toggle" />

    <pre v-md>
      The **menu toggle** component pairs with the menu OR the panel component to create more customizable dropdown and select implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the standard dropdown or select components.

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
      <pf-menu-toggle variant="secondary" expanded>Expanded</pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="secondary" disabled>Disabled</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Plain">
      <pf-menu-toggle variant="plain"><ellipsis-vertical-icon /></pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="plain" expanded><ellipsis-vertical-icon /></pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="plain" disabled><ellipsis-vertical-icon /></pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Plain with text">
      <pf-menu-toggle variant="plainText">Custom text</pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="plainText" expanded>Custom text (expanded)</pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle variant="plainText" disabled>Disabled</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split button (checkbox)">
      <pf-menu-toggle split-button>
        <pf-menu-toggle-checkbox />
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle split-button expanded>
        <pf-menu-toggle-checkbox />
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle split-button disabled>
        <pf-menu-toggle-checkbox disabled />
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split button (checkbox with toggle text)">
      <pf-menu-toggle split-button>
        <pf-menu-toggle-checkbox /> 10 selected
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle split-button expanded>
        <pf-menu-toggle-checkbox /> 10 selected
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle split-button disabled>
        <pf-menu-toggle-checkbox disabled /> 10 selected
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split button (checkbox, primary)">
      <pf-menu-toggle split-button variant="primary">
        <pf-menu-toggle-checkbox /> 10 selected
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle split-button variant="primary" expanded>
        <pf-menu-toggle-checkbox /> 10 selected
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle split-button variant="primary" disabled>
        <pf-menu-toggle-checkbox disabled /> 10 selected
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split button (checkbox, secondary)">
      <pf-menu-toggle split-button variant="secondary">
        <pf-menu-toggle-checkbox /> 10 selected
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle split-button variant="secondary" expanded>
        <pf-menu-toggle-checkbox /> 10 selected
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle split-button variant="secondary" disabled>
        <pf-menu-toggle-checkbox disabled /> 10 selected
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split button (action)">
      <pf-menu-toggle split-button="action">
        <pf-menu-toggle-action>Action</pf-menu-toggle-action>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle split-button="action" expanded>
        <pf-menu-toggle-action>Action</pf-menu-toggle-action>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle split-button="action" disabled>
        <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split button (action, primary)">
      <pf-menu-toggle split-button="action" variant="primary">
        <pf-menu-toggle-action>Action</pf-menu-toggle-action>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle split-button="action" variant="primary" expanded>
        <pf-menu-toggle-action>Action</pf-menu-toggle-action>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle split-button="action" variant="primary" disabled>
        <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
      </pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Split button (action, secondary)">
      <pf-menu-toggle split-button="action" variant="secondary">
        <pf-menu-toggle-action>Action</pf-menu-toggle-action>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle split-button="action" variant="secondary" expanded>
        <pf-menu-toggle-action>Action</pf-menu-toggle-action>
      </pf-menu-toggle>
      {{ ' ' }}
      <pf-menu-toggle split-button="action" variant="secondary" disabled>
        <pf-menu-toggle-action disabled>Action</pf-menu-toggle-action>
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
      <pf-menu-toggle full-height>Full height</pf-menu-toggle>
    </story-canvas>

    <story-canvas title="Full width">
      <pf-menu-toggle full-width>Full width</pf-menu-toggle>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import GearIcon from '@vue-patternfly/icons/gear-icon';
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';
</script>
