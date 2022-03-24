<template>
  <doc-page title="Dropdown">
    <component-title name="pf-dropdown" />

    <story-canvas title="Basic">
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
    </story-canvas>

    <story-canvas title="With initial selection">
      <pf-dropdown v-model:open="open2" text="Dropdown">
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button" auto-focus>Action</pf-dropdown-item>
        <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
        <pf-dropdown-separator />
        <pf-dropdown-item>Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="Disabled">
      <pf-dropdown v-model:open="open3" text="Dropdown" disabled>
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Action</pf-dropdown-item>
        <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
        <pf-dropdown-separator />
        <pf-dropdown-item>Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="Primary toggle">
      <pf-dropdown v-model:open="open4" text="Dropdown" primary>
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Action</pf-dropdown-item>
        <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
        <pf-dropdown-separator />
        <pf-dropdown-item>Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="Position right">
      <pf-dropdown v-model:open="open5" text="Dropdown" position="right">
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Action</pf-dropdown-item>
        <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
        <pf-dropdown-separator />
        <pf-dropdown-item>Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="Direction up">
      <pf-dropdown v-model:open="open6" text="Dropdown" direction="up">
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Action</pf-dropdown-item>
        <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
        <pf-dropdown-separator />
        <pf-dropdown-item>Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="With kebab">
      <pf-dropdown v-model:open="open7" plain>
        <template #toggle>
          <pf-kebab-toggle />
        </template>

        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Action</pf-dropdown-item>
        <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
        <pf-dropdown-separator />
        <pf-dropdown-item>Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="Icon only">
      <pf-dropdown v-model:open="open8" plain>
        <template #toggle>
          <pf-dropdown-toggle aria-label="Applications">
            <template #icon>
              <th-icon />
            </template>
          </pf-dropdown-toggle>
        </template>

        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Action</pf-dropdown-item>
        <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
        <pf-dropdown-separator />
        <pf-dropdown-item>Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="With groups">
      <pf-dropdown v-model:open="open9" text="Dropdown">
        <pf-dropdown-group>
          <pf-dropdown-item>Link</pf-dropdown-item>
          <pf-dropdown-item component="button">
            Action
          </pf-dropdown-item>
        </pf-dropdown-group>
        <pf-dropdown-group>
          <template #label>Group 2</template>
          <pf-dropdown-item>
            Group 2 Link
          </pf-dropdown-item>
          <pf-dropdown-item component="button">
            Group 2 Action
          </pf-dropdown-item>
        </pf-dropdown-group>
        <pf-dropdown-group>
          <template #label>Group 3</template>
          <pf-dropdown-item>Group 3 Link</pf-dropdown-item>
          <pf-dropdown-item component="button">
            Group 3 Action Action
          </pf-dropdown-item>
        </pf-dropdown-group>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="With badge">
      <pf-dropdown v-model:open="open10" text="Dropdown" plain>
        <template #toggle>
          <pf-badge-toggle aria-label="Applications">
            3
          </pf-badge-toggle>
        </template>
        <pf-dropdown-item component="button">
          <template #icon><angle-left-icon /></template>
          Edit
        </pf-dropdown-item>
        <pf-dropdown-item component="button">
          <template #icon><angle-left-icon /></template>
          Deployment
        </pf-dropdown-item>
        <pf-dropdown-item component="button">
          <template #icon><angle-left-icon /></template>
          Applications
        </pf-dropdown-item>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="Split button">
      <pf-dropdown v-model:open="open11" text="Dropdown">
        <template #toggle>
          <pf-dropdown-toggle>
            <template #buttons>
              <pf-dropdown-toggle-checkbox v-model:checked="checked1" />
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
    </story-canvas>

    <story-canvas title="Split button with text">
      <pf-dropdown v-model:open="open12" text="Dropdown">
        <template #toggle>
          <pf-dropdown-toggle>
            <template #buttons>
              <pf-dropdown-toggle-checkbox v-model:checked="checked2">
                10 selected
              </pf-dropdown-toggle-checkbox>
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
    </story-canvas>

    <story-canvas title="Split button third state">
      <pf-dropdown v-model:open="open13" text="Dropdown">
        <template #toggle>
          <pf-dropdown-toggle>
            <template #buttons>
              <pf-dropdown-toggle-checkbox>
                10 selected
              </pf-dropdown-toggle-checkbox>
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
    </story-canvas>

    <story-canvas title="With descriptions">
      <pf-dropdown v-model:open="open14" text="Dropdown">
        <pf-dropdown-item description="This is a description">
          <template #icon>
            <cubes-icon />
          </template>
          Link
        </pf-dropdown-item>
        <pf-dropdown-item component="button" description="This is a very long description that describes the menu item">
          <template #icon>
            <bell-icon />
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
    </story-canvas>

    <story-canvas title="With image and text">
      <pf-dropdown v-model:open="open15" text="Dropdown">
        <template #toggle>
          <pf-dropdown-toggle indicator>
            <template #icon>
              <pf-avatar src="/avatar.svg" alt="avatar" />
            </template>
            Ned Username
          </pf-dropdown-toggle>
        </template>
        <pf-dropdown-group>
          <pf-dropdown-item component="div" plain-text>Text</pf-dropdown-item>
          <pf-dropdown-item component="div" plain-text>More text</pf-dropdown-item>
        </pf-dropdown-group>
        <pf-dropdown-separator />
        <pf-dropdown-group>
          <pf-dropdown-item>
            My profile
          </pf-dropdown-item>
          <pf-dropdown-item component="button">
            User management
          </pf-dropdown-item>
          <pf-dropdown-item>
            Logout
          </pf-dropdown-item>
        </pf-dropdown-group>
      </pf-dropdown>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import BellIcon from '@vue-patternfly/icons/dist/esm/icons/bell-icon';
import CubesIcon from '@vue-patternfly/icons/dist/esm/icons/cubes-icon';
import ThIcon from '@vue-patternfly/icons/dist/esm/icons/th-icon';
import AngleLeftIcon from '@vue-patternfly/icons/dist/esm/icons/angle-left-icon';

import { ref } from "vue";
const open1 = ref(false);
const open2 = ref(false);
const open3 = ref(false);
const open4 = ref(false);
const open5 = ref(false);
const open6 = ref(false);
const open7 = ref(false);
const open8 = ref(false);
const open9 = ref(false);
const open10 = ref(false);
const open11 = ref(false);
const open12 = ref(false);
const open13 = ref(false);
const open14 = ref(false);
const open15 = ref(false);

const checked1 = ref(false);
const checked2 = ref(false);
</script>
