<template>
  <PageSection variant="light">
    <Title>Dropdown</Title>

    <Title class="example-heading" h="3">Basic</Title>
    <Dropdown v-model:open="open1" text="Dropdown">
      <DropdownItem>Link</DropdownItem>
      <DropdownItem component="button">
        Action
      </DropdownItem>
      <DropdownItem disabled>
        Disabled Link
      </DropdownItem>
      <DropdownItem disabled component="button">
        Disabled Action
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>Separated Link</DropdownItem>
      <DropdownItem component="button">
        Separated Action
      </DropdownItem>
    </Dropdown>

    <Title class="example-heading" h="3">With initial selection</Title>
    <Dropdown v-model:open="open2" text="Dropdown">
      <DropdownItem>Link</DropdownItem>
      <DropdownItem component="button" auto-focus>
        Action
      </DropdownItem>
      <DropdownItem disabled>
        Disabled Link
      </DropdownItem>
      <DropdownItem disabled component="button">
        Disabled Action
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>Separated Link</DropdownItem>
      <DropdownItem component="button">
        Separated Action
      </DropdownItem>
    </Dropdown>

    <Title class="example-heading" h="3">Disabled</Title>
    <Dropdown v-model:open="open3" text="Dropdown" disabled>
      <DropdownItem>Link</DropdownItem>
      <DropdownItem component="button">
        Action
      </DropdownItem>
      <DropdownItem disabled>
        Disabled Link
      </DropdownItem>
      <DropdownItem disabled component="button">
        Disabled Action
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>Separated Link</DropdownItem>
      <DropdownItem component="button">
        Separated Action
      </DropdownItem>
    </Dropdown>

    <Title class="example-heading" h="3">Primary toggle</Title>
    <Dropdown v-model:open="open4" text="Dropdown" primary>
      <DropdownItem>Link</DropdownItem>
      <DropdownItem component="button">
        Action
      </DropdownItem>
      <DropdownItem disabled>
        Disabled Link
      </DropdownItem>
      <DropdownItem disabled component="button">
        Disabled Action
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>Separated Link</DropdownItem>
      <DropdownItem component="button">
        Separated Action
      </DropdownItem>
    </Dropdown>

    <Title class="example-heading" h="3">Position right</Title>
    <Dropdown v-model:open="open5" text="Dropdown" position="right">
      <DropdownItem>Link</DropdownItem>
      <DropdownItem component="button">
        Action
      </DropdownItem>
      <DropdownItem disabled>
        Disabled Link
      </DropdownItem>
      <DropdownItem disabled component="button">
        Disabled Action
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>Separated Link</DropdownItem>
      <DropdownItem component="button">
        Separated Action
      </DropdownItem>
    </Dropdown>

    <Title class="example-heading" h="3">Direction up</Title>
    <Dropdown v-model:open="open6" text="Dropdown" direction="up">
      <DropdownItem>Link</DropdownItem>
      <DropdownItem component="button">
        Action
      </DropdownItem>
      <DropdownItem disabled>
        Disabled Link
      </DropdownItem>
      <DropdownItem disabled component="button">
        Disabled Action
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>Separated Link</DropdownItem>
      <DropdownItem component="button">
        Separated Action
      </DropdownItem>
    </Dropdown>

    <Title class="example-heading" h="3">With kebab</Title>
    <Dropdown v-model:open="open7" plain>
      <template #toggle>
        <KebabToggle />
      </template>

      <DropdownItem>Link</DropdownItem>
      <DropdownItem component="button">
        Action
      </DropdownItem>
      <DropdownItem disabled>
        Disabled Link
      </DropdownItem>
      <DropdownItem disabled component="button">
        Disabled Action
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>Separated Link</DropdownItem>
      <DropdownItem component="button">
        Separated Action
      </DropdownItem>
    </Dropdown>

    <Title class="example-heading" h="3">Icon only</Title>
    <Dropdown v-model:open="open8" plain>
      <template #toggle>
        <DropdownToggle aria-label="Applications">
          <template #icon>
            <ThIcon />
          </template>
        </DropdownToggle>
      </template>

      <DropdownItem>Link</DropdownItem>
      <DropdownItem component="button">
        Action
      </DropdownItem>
      <DropdownItem disabled>
        Disabled Link
      </DropdownItem>
      <DropdownItem disabled component="button">
        Disabled Action
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>Separated Link</DropdownItem>
      <DropdownItem component="button">
        Separated Action
      </DropdownItem>
    </Dropdown>

    <Title class="example-heading" h="3">Split button</Title>
    <Dropdown v-model:open="open9">
      <template #toggle>
        <DropdownToggle>
          <template #buttons>
            <label class="pf-c-dropdown__toggle-check">
              <input aria-label="Select all" type="checkbox" aria-invalid="false">
            </label>
          </template>
        </DropdownToggle>
      </template>

      <DropdownItem>Link</DropdownItem>
      <DropdownItem component="button">
        Action
      </DropdownItem>
      <DropdownItem disabled>
        Disabled Link
      </DropdownItem>
      <DropdownItem disabled component="button">
        Disabled Action
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>Separated Link</DropdownItem>
      <DropdownItem component="button">
        Separated Action
      </DropdownItem>
    </Dropdown>

    <Title class="example-heading" h="3">Split button (with text)</Title>
    <Dropdown v-model:open="open10">
      <template #toggle>
        <DropdownToggle>
          <template #buttons>
            <label class="pf-c-dropdown__toggle-check">
              <input aria-label="Select all" type="checkbox" aria-invalid="false">
              <span class="pf-c-dropdown__toggle-text" aria-hidden="true">10 selected</span>
            </label>
          </template>
        </DropdownToggle>
      </template>

      <DropdownItem>Link</DropdownItem>
      <DropdownItem component="button">
        Action
      </DropdownItem>
      <DropdownItem disabled>
        Disabled Link
      </DropdownItem>
      <DropdownItem disabled component="button">
        Disabled Action
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>Separated Link</DropdownItem>
      <DropdownItem component="button">
        Separated Action
      </DropdownItem>
    </Dropdown>

    <Title class="example-heading" h="3">Split button (disabled)</Title>
    <Dropdown v-model:open="open11" disabled>
      <template #toggle>
        <DropdownToggle>
          <template #buttons>
            <label class="pf-c-dropdown__toggle-check">
              <input aria-label="Select all" type="checkbox" aria-invalid="false" disabled>
            </label>
          </template>
        </DropdownToggle>
      </template>

      <DropdownItem>Link</DropdownItem>
      <DropdownItem component="button">
        Action
      </DropdownItem>
      <DropdownItem disabled>
        Disabled Link
      </DropdownItem>
      <DropdownItem disabled component="button">
        Disabled Action
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>Separated Link</DropdownItem>
      <DropdownItem component="button">
        Separated Action
      </DropdownItem>
    </Dropdown>

    <Title class="example-heading" h="3">Split button action</Title>
    <Dropdown v-model:open="open12">
      <template #toggle>
        <DropdownToggle variant="action">
          <template #buttons>
            <button class="pf-c-dropdown__toggle-button">
              Action
            </button>
          </template>
        </DropdownToggle>
      </template>

      <DropdownItem>Link</DropdownItem>
      <DropdownItem component="button">
        Action
      </DropdownItem>
      <DropdownItem disabled>
        Disabled Link
      </DropdownItem>
      <DropdownItem disabled component="button">
        Disabled Action
      </DropdownItem>
    </Dropdown>
    {{ ' ' }}
    <Dropdown v-model:open="open13">
      <template #toggle>
        <DropdownToggle variant="action">
          <template #buttons>
            <button class="pf-c-dropdown__toggle-button">
              <CogIcon />
            </button>
          </template>
        </DropdownToggle>
      </template>

      <DropdownItem>Separated Link</DropdownItem>
      <DropdownItem component="button">
        Separated Action
      </DropdownItem>
    </Dropdown>

    <Title class="example-heading" h="3">Dropdown with image and text</Title>
    <Dropdown v-model:open="open14" text="Dropdown">
      <template #toggle>
        <DropdownToggle indicator>
          <template #icon>
            <UserIcon />
          </template>
          New Username
        </DropdownToggle>
      </template>

      <DropdownGroup>
        <DropdownItem component="div" plain>Text</DropdownItem>
        <DropdownItem component="div" plain>More text</DropdownItem>
      </DropdownGroup>
      <DropdownSeparator />
      <DropdownGroup>
        <DropdownItem>My profile</DropdownItem>
        <DropdownItem component="button">
          User management
        </DropdownItem>
        <DropdownItem>Logout</DropdownItem>
      </DropdownGroup>
    </Dropdown>

    <Title class="example-heading" h="3">Dropdown with descriptions</Title>
    <Dropdown v-model:open="open15" text="Dropdown">
      <DropdownItem description="This is a description">
        <template #icon>
          <CubesIcon />
        </template>
        Link
      </DropdownItem>
      <DropdownItem component="button" description="This is a very long description that describes the menu item">
        <template #icon>
          <BellIcon />
        </template>
        Action
      </DropdownItem>
      <DropdownItem disabled description="Disabled link description">
        Disabled Link
      </DropdownItem>
      <DropdownItem disabled component="button" description="This is a description">
        Disabled Action
      </DropdownItem>
    </Dropdown>
  </PageSection>
</template>

<script>
import {
  BellIcon,
  CogIcon,
  CubesIcon,
  ThIcon,
  UserIcon,
} from '@vue-patternfly4/icons';

export default {
  name: 'DropdownPage',

  components: {
    BellIcon,
    CogIcon,
    CubesIcon,
    ThIcon,
    UserIcon,
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
    };
  },
};
</script>
