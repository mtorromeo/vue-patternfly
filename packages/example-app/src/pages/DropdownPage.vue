<template>
  <doc-page title="Dropdown">
    <pf-title class="example-heading" h="3">
      Basic
    </pf-title>
    <pf-dropdown v-model:open="open1" text="Dropdown">
      <pf-dropdown-item>Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Action
      </pf-dropdown-item>
      <pf-dropdown-item disabled>
        Disabled Link
      </pf-dropdown-item>
      <pf-dropdown-item disabled component="button">
        Disabled Action
      </pf-dropdown-item>
      <pf-dropdown-separator />
      <pf-dropdown-item>Separated Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Separated Action
      </pf-dropdown-item>
    </pf-dropdown>

    <pf-title class="example-heading" h="3">
      With initial selection
    </pf-title>
    <pf-dropdown v-model:open="open2" text="Dropdown">
      <pf-dropdown-item>Link</pf-dropdown-item>
      <pf-dropdown-item component="button" auto-focus>
        Action
      </pf-dropdown-item>
      <pf-dropdown-item disabled>
        Disabled Link
      </pf-dropdown-item>
      <pf-dropdown-item disabled component="button">
        Disabled Action
      </pf-dropdown-item>
      <pf-dropdown-separator />
      <pf-dropdown-item>Separated Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Separated Action
      </pf-dropdown-item>
    </pf-dropdown>

    <pf-title class="example-heading" h="3">
      Disabled
    </pf-title>
    <pf-dropdown v-model:open="open3" text="Dropdown" disabled>
      <pf-dropdown-item>Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Action
      </pf-dropdown-item>
      <pf-dropdown-item disabled>
        Disabled Link
      </pf-dropdown-item>
      <pf-dropdown-item disabled component="button">
        Disabled Action
      </pf-dropdown-item>
      <pf-dropdown-separator />
      <pf-dropdown-item>Separated Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Separated Action
      </pf-dropdown-item>
    </pf-dropdown>

    <pf-title class="example-heading" h="3">
      Primary toggle
    </pf-title>
    <pf-dropdown v-model:open="open4" text="Dropdown" primary>
      <pf-dropdown-item>Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Action
      </pf-dropdown-item>
      <pf-dropdown-item disabled>
        Disabled Link
      </pf-dropdown-item>
      <pf-dropdown-item disabled component="button">
        Disabled Action
      </pf-dropdown-item>
      <pf-dropdown-separator />
      <pf-dropdown-item>Separated Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Separated Action
      </pf-dropdown-item>
    </pf-dropdown>

    <pf-title class="example-heading" h="3">
      Position right
    </pf-title>
    <pf-dropdown v-model:open="open5" text="Dropdown" position="right">
      <pf-dropdown-item>Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Action
      </pf-dropdown-item>
      <pf-dropdown-item disabled>
        Disabled Link
      </pf-dropdown-item>
      <pf-dropdown-item disabled component="button">
        Disabled Action
      </pf-dropdown-item>
      <pf-dropdown-separator />
      <pf-dropdown-item>Separated Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Separated Action
      </pf-dropdown-item>
    </pf-dropdown>

    <pf-title class="example-heading" h="3">
      Direction up
    </pf-title>
    <pf-dropdown v-model:open="open6" text="Dropdown" direction="up">
      <pf-dropdown-item>Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Action
      </pf-dropdown-item>
      <pf-dropdown-item disabled>
        Disabled Link
      </pf-dropdown-item>
      <pf-dropdown-item disabled component="button">
        Disabled Action
      </pf-dropdown-item>
      <pf-dropdown-separator />
      <pf-dropdown-item>Separated Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Separated Action
      </pf-dropdown-item>
    </pf-dropdown>

    <pf-title class="example-heading" h="3">
      With kebab
    </pf-title>
    <pf-dropdown v-model:open="open7" plain>
      <template #toggle>
        <pf-kebab-toggle />
      </template>

      <pf-dropdown-item>Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Action
      </pf-dropdown-item>
      <pf-dropdown-item disabled>
        Disabled Link
      </pf-dropdown-item>
      <pf-dropdown-item disabled component="button">
        Disabled Action
      </pf-dropdown-item>
      <pf-dropdown-separator />
      <pf-dropdown-item>Separated Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Separated Action
      </pf-dropdown-item>
    </pf-dropdown>

    <pf-title class="example-heading" h="3">
      Icon only
    </pf-title>
    <pf-dropdown v-model:open="open8" plain>
      <template #toggle>
        <pf-dropdown-toggle aria-label="Applications">
          <template #icon>
            <ThIcon />
          </template>
        </pf-dropdown-toggle>
      </template>

      <pf-dropdown-item>Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Action
      </pf-dropdown-item>
      <pf-dropdown-item disabled>
        Disabled Link
      </pf-dropdown-item>
      <pf-dropdown-item disabled component="button">
        Disabled Action
      </pf-dropdown-item>
      <pf-dropdown-separator />
      <pf-dropdown-item>Separated Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Separated Action
      </pf-dropdown-item>
    </pf-dropdown>

    <pf-title class="example-heading" h="3">
      With badge
    </pf-title>
    <pf-dropdown v-model:open="open16" plain>
      <template #toggle>
        <pf-badge-toggle aria-label="Applications">
          3
        </pf-badge-toggle>
      </template>

      <pf-dropdown-item component="button">
        <template #icon>
          <AngleLeftIcon />
        </template>
        Edit
      </pf-dropdown-item>
      <pf-dropdown-item component="button">
        <template #icon>
          <AngleLeftIcon />
        </template>
        Deployment
      </pf-dropdown-item>
      <pf-dropdown-item component="button">
        <template #icon>
          <AngleLeftIcon />
        </template>
        Applications
      </pf-dropdown-item>
    </pf-dropdown>

    <pf-title class="example-heading" h="3">
      Split button
    </pf-title>
    <pf-dropdown v-model:open="open9">
      <template #toggle>
        <pf-dropdown-toggle>
          <template #buttons>
            <label class="pf-c-dropdown__toggle-check">
              <input aria-label="Select all" type="checkbox" aria-invalid="false">
            </label>
          </template>
        </pf-dropdown-toggle>
      </template>

      <pf-dropdown-item>Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Action
      </pf-dropdown-item>
      <pf-dropdown-item disabled>
        Disabled Link
      </pf-dropdown-item>
      <pf-dropdown-item disabled component="button">
        Disabled Action
      </pf-dropdown-item>
      <pf-dropdown-separator />
      <pf-dropdown-item>Separated Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Separated Action
      </pf-dropdown-item>
    </pf-dropdown>

    <pf-title class="example-heading" h="3">
      Split button (with text)
    </pf-title>
    <pf-dropdown v-model:open="open10">
      <template #toggle>
        <pf-dropdown-toggle>
          <template #buttons>
            <label class="pf-c-dropdown__toggle-check">
              <input aria-label="Select all" type="checkbox" aria-invalid="false">
              <span class="pf-c-dropdown__toggle-text" aria-hidden="true">10 selected</span>
            </label>
          </template>
        </pf-dropdown-toggle>
      </template>

      <pf-dropdown-item>Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Action
      </pf-dropdown-item>
      <pf-dropdown-item disabled>
        Disabled Link
      </pf-dropdown-item>
      <pf-dropdown-item disabled component="button">
        Disabled Action
      </pf-dropdown-item>
      <pf-dropdown-separator />
      <pf-dropdown-item>Separated Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Separated Action
      </pf-dropdown-item>
    </pf-dropdown>

    <pf-title class="example-heading" h="3">
      Split button (disabled)
    </pf-title>
    <pf-dropdown v-model:open="open11" disabled>
      <template #toggle>
        <pf-dropdown-toggle>
          <template #buttons>
            <label class="pf-c-dropdown__toggle-check">
              <input aria-label="Select all" type="checkbox" aria-invalid="false" disabled>
            </label>
          </template>
        </pf-dropdown-toggle>
      </template>

      <pf-dropdown-item>Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Action
      </pf-dropdown-item>
      <pf-dropdown-item disabled>
        Disabled Link
      </pf-dropdown-item>
      <pf-dropdown-item disabled component="button">
        Disabled Action
      </pf-dropdown-item>
      <pf-dropdown-separator />
      <pf-dropdown-item>Separated Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Separated Action
      </pf-dropdown-item>
    </pf-dropdown>

    <pf-title class="example-heading" h="3">
      Split button action
    </pf-title>
    <pf-dropdown v-model:open="open12">
      <template #toggle>
        <pf-dropdown-toggle variant="action">
          <template #buttons>
            <button class="pf-c-dropdown__toggle-button">
              Action
            </button>
          </template>
        </pf-dropdown-toggle>
      </template>

      <pf-dropdown-item>Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Action
      </pf-dropdown-item>
      <pf-dropdown-item disabled>
        Disabled Link
      </pf-dropdown-item>
      <pf-dropdown-item disabled component="button">
        Disabled Action
      </pf-dropdown-item>
    </pf-dropdown>
    {{ ' ' }}
    <pf-dropdown v-model:open="open13">
      <template #toggle>
        <pf-dropdown-toggle variant="action">
          <template #buttons>
            <button class="pf-c-dropdown__toggle-button">
              <CogIcon />
            </button>
          </template>
        </pf-dropdown-toggle>
      </template>

      <pf-dropdown-item>Separated Link</pf-dropdown-item>
      <pf-dropdown-item component="button">
        Separated Action
      </pf-dropdown-item>
    </pf-dropdown>

    <pf-title class="example-heading" h="3">
      Dropdown with image and text
    </pf-title>
    <pf-dropdown v-model:open="open14" text="Dropdown">
      <template #toggle>
        <pf-dropdown-toggle indicator>
          <template #icon>
            <UserIcon />
          </template>
          New Username
        </pf-dropdown-toggle>
      </template>

      <pf-dropdown-group>
        <pf-dropdown-item component="div" plain>
          PfText
        </pf-dropdown-item>
        <pf-dropdown-item component="div" plain>
          More text
        </pf-dropdown-item>
      </pf-dropdown-group>
      <pf-dropdown-separator />
      <pf-dropdown-group>
        <pf-dropdown-item>My profile</pf-dropdown-item>
        <pf-dropdown-item component="button">
          User management
        </pf-dropdown-item>
        <pf-dropdown-item>Logout</pf-dropdown-item>
      </pf-dropdown-group>
    </pf-dropdown>

    <pf-title class="example-heading" h="3">
      Dropdown with descriptions
    </pf-title>
    <pf-dropdown v-model:open="open15" text="Dropdown">
      <pf-dropdown-item description="This is a description">
        <template #icon>
          <CubesIcon />
        </template>
        Link
      </pf-dropdown-item>
      <pf-dropdown-item component="button" description="This is a very long description that describes the menu item">
        <template #icon>
          <BellIcon />
        </template>
        Action
      </pf-dropdown-item>
      <pf-dropdown-item disabled description="Disabled link description">
        Disabled Link
      </pf-dropdown-item>
      <pf-dropdown-item disabled component="button" description="This is a description">
        Disabled Action
      </pf-dropdown-item>
    </pf-dropdown>
  </doc-page>
</template>

<script>
import BellIcon from '@vue-patternfly4/icons/dist/esm/icons/bell-icon';
import CogIcon from '@vue-patternfly4/icons/dist/esm/icons/cog-icon';
import CubesIcon from '@vue-patternfly4/icons/dist/esm/icons/cubes-icon';
import ThIcon from '@vue-patternfly4/icons/dist/esm/icons/th-icon';
import UserIcon from '@vue-patternfly4/icons/dist/esm/icons/user-icon';
import AngleLeftIcon from '@vue-patternfly4/icons/dist/esm/icons/angle-left-icon';


export default {
  name: 'DropdownPage',

  components: {
    BellIcon,
    CogIcon,
    CubesIcon,
    ThIcon,
    UserIcon,
    AngleLeftIcon,
  },

  data() {
    return {
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
      open6: false,
      open7: false,
      open8: false,
      open9: false,
      open10: false,
      open11: false,
      open12: false,
      open13: false,
      open14: false,
      open15: false,
      open16: false,
    };
  },
};
</script>
