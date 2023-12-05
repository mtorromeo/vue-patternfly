<template>
  <doc-page title="Dropdown">
    <template #description>A <b>dropdown</b> presents a menu of actions or links in a constrained space that will trigger a process or navigate to a new location. See select component guidelines for more information about making one or more selections from a list of items in a value list.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Dropdown/Dropdown.vue" />
      <component-info src="packages/core/src/components/Menu/MenuGroup.vue" alias="DropdownGroup" />
      <component-info src="packages/core/src/components/Menu/MenuItem.vue" alias="DropdownItem" />
      <component-info src="packages/core/src/components/Menu/MenuList.vue" alias="DropdownList" />
    </template>

    <story-canvas title="Basic">
      <pf-dropdown v-model:open="open1" text="Dropdown">
        <pf-dropdown-item @click="onClick">Link</pf-dropdown-item>
        <pf-dropdown-item component="button" @click="onClick">
          Action
        </pf-dropdown-item>
        <pf-dropdown-item disabled @click="onClick">
          Disabled Link
        </pf-dropdown-item>
        <pf-dropdown-item disabled component="button" @click="onClick">
          Disabled Action
        </pf-dropdown-item>
        <pf-divider />
        <pf-dropdown-item @click="onClick">Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button" @click="onClick">
          Separated Action
        </pf-dropdown-item>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="With initial selection">
      <pf-dropdown v-model:open="open2" text="Dropdown">
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button" focused>Action</pf-dropdown-item>
        <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
        <pf-divider />
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
        <pf-divider />
        <pf-dropdown-item>Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="Primary toggle">
      <pf-dropdown v-model:open="open4" text="Dropdown" variant="primary">
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Action</pf-dropdown-item>
        <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
        <pf-divider />
        <pf-dropdown-item>Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="Direction up">
      <pf-dropdown v-model:open="open6" text="Dropdown" placement="top">
        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Action</pf-dropdown-item>
        <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
        <pf-divider />
        <pf-dropdown-item>Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="With kebab">
      <pf-dropdown v-model:open="open7">
        <template #toggle>
          <pf-menu-toggle variant="plain">
            <ellipsis-vertical-icon />
          </pf-menu-toggle>
        </template>

        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Action</pf-dropdown-item>
        <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
        <pf-divider />
        <pf-dropdown-item>Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="Icon only">
      <pf-dropdown v-model:open="open8">
        <template #toggle>
          <pf-menu-toggle aria-label="Applications" variant="plain">
            <table-cells-icon />
          </pf-menu-toggle>
        </template>

        <pf-dropdown-item>Link</pf-dropdown-item>
        <pf-dropdown-item component="button">Action</pf-dropdown-item>
        <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
        <pf-dropdown-item disabled component="button">Disabled Action</pf-dropdown-item>
        <pf-divider />
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
        <pf-divider component="li" />
        <pf-dropdown-group>
          <template #label>Group 2</template>
          <pf-dropdown-item>
            Group 2 Link
          </pf-dropdown-item>
          <pf-dropdown-item component="button">
            Group 2 Action
          </pf-dropdown-item>
        </pf-dropdown-group>
        <pf-divider component="li" />
        <pf-dropdown-group>
          <template #label>Group 3</template>
          <pf-dropdown-item>Group 3 Link</pf-dropdown-item>
          <pf-dropdown-item component="button">
            Group 3 Action Action
          </pf-dropdown-item>
        </pf-dropdown-group>
      </pf-dropdown>
    </story-canvas>

    <story-canvas title="With descriptions">
      <pf-dropdown v-model:open="open10" text="Dropdown">
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

    <story-canvas title="Menu teleported in body">
      <pf-dropdown text="Dropdown" append-to="body">
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
        <pf-divider />
        <pf-dropdown-item>Separated Link</pf-dropdown-item>
        <pf-dropdown-item component="button">
          Separated Action
        </pf-dropdown-item>
      </pf-dropdown>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import BellIcon from '@vue-patternfly/icons/bell-icon';
import CubesIcon from '@vue-patternfly/icons/cubes-icon';
import TableCellsIcon from '@vue-patternfly/icons/table-cells-icon';
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';
import { ref } from "vue";
import { useAlertsStore } from '../../store/alerts';

const alerts = useAlertsStore();

function onClick(e: Event) {
  if (e.target instanceof HTMLElement) {
    alerts.add({
      title: `Clicked "${e.target.innerText}"`,
    });
  }
}

const open1 = ref(false);
const open2 = ref(false);
const open3 = ref(false);
const open4 = ref(false);
const open6 = ref(false);
const open7 = ref(false);
const open8 = ref(false);
const open9 = ref(false);
const open10 = ref(false);
</script>
