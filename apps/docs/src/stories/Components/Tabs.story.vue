<template>
  <doc-page title="Tabs">
    <component-title name="pf-tabs" />

    <pre v-md>
      **Tabs** allow users to navigate between views within the same page or context.

      ## Usage
      PatternFly offers a few types of tabs:

      - Default tabs (recommended)
      - Boxed tabs
      - Vertical tabs

      You can use as many tabs as you want in a page, although it is recommended you keep the total number of tabs to a minimum for a better user experience. If you have more tabs than fit on the page, you may use a default overflow which would allow a user to horizontal scroll through your tabs. The uses of both default and boxed stylings are flexible, so use either according to your needs and preferences.

      See full [Design guidelines](https://www.patternfly.org/v4/components/tabs/design-guidelines) on the official patternfly documentation.
    </pre>

    <story-canvas title="Default">
      <pf-tabs>
        <pf-tab title="Users">
          Users
        </pf-tab>
        <pf-tab title="Containers">
          Containers
        </pf-tab>
        <pf-tab title="Database">
          Database
        </pf-tab>
        <pf-tab title="Server" mount-on-enter unmount-on-exit>
          Server
          <keep-alive-test />
        </pf-tab>
        <pf-tab>
          <template #title>System</template>
          System
        </pf-tab>
        <pf-tab title="Network">
          Network
        </pf-tab>
      </pf-tabs>
    </story-canvas>

    <story-canvas title="Icons and text">
      <pf-tabs>
        <pf-tab>
          <template #title>
            <pf-tab-title-icon><users-icon /></pf-tab-title-icon>
            <pf-tab-title-text>Users</pf-tab-title-text>
          </template>
          Users
        </pf-tab>
        <pf-tab key="containers-tab">
          <template #title>
            <pf-tab-title-icon><box-icon /></pf-tab-title-icon>
            <pf-tab-title-text>Containers</pf-tab-title-text>
          </template>
          Containers
        </pf-tab>
        <pf-tab disabled>
          <template #title>
            <pf-tab-title-icon><database-icon /></pf-tab-title-icon>
            <pf-tab-title-text>Database</pf-tab-title-text>
          </template>
          Database
        </pf-tab>
        <pf-tab>
          <template #title>
            <pf-tab-title-icon><server-icon /></pf-tab-title-icon>
            <pf-tab-title-text>Server</pf-tab-title-text>
          </template>
          Server
        </pf-tab>
        <pf-tab>
          <template #title>
            <pf-tab-title-icon><laptop-icon /></pf-tab-title-icon>
            <pf-tab-title-text>System</pf-tab-title-text>
          </template>
          System
        </pf-tab>
        <pf-tab>
          <template #title>
            <pf-tab-title-icon><diagram-project-icon /></pf-tab-title-icon>
            <pf-tab-title-text>Network</pf-tab-title-text>
          </template>
          Network
        </pf-tab>
      </pf-tabs>
    </story-canvas>

    <story-canvas title="Tabs with sub tabs">
      <pf-tabs>
        <pf-tab title="Users">
          <pf-tabs secondary default-active-key="1">
            <pf-tab title="Secondary tab item 1">
              Secondary tab section 1
            </pf-tab>
            <pf-tab title="Secondary tab item 2">
              Secondary tab section 2
            </pf-tab>
            <pf-tab title="Secondary tab item 3">
              Secondary tab section 3
            </pf-tab>
            <pf-tab title="Secondary tab item 4">
              Secondary tab section 4
            </pf-tab>
            <pf-tab disabled title="Secondary tab item 5">
              Secondary tab section 5
            </pf-tab>
            <pf-tab disabled title="Secondary tab item 6">
              Secondary tab section 6
            </pf-tab>
            <pf-tab title="Secondary tab item 7">
              Secondary tab section 7
            </pf-tab>
            <pf-tab title="Secondary tab item 8">
              Secondary tab section 8
            </pf-tab>
            <pf-tab title="Secondary tab item 9">
              Secondary tab section 9
            </pf-tab>
            <pf-tab title="Secondary tab item 10">
              Secondary tab section 10
            </pf-tab>
            <pf-tab title="Secondary tab item 11">
              Secondary tab section 11
            </pf-tab>
          </pf-tabs>
        </pf-tab>
        <pf-tab title="Containers">
          Containers
        </pf-tab>
        <pf-tab disabled title="Database">
          Database
        </pf-tab>
        <pf-tab title="Server">
          Server
        </pf-tab>
        <pf-tab title="System">
          System
        </pf-tab>
        <pf-tab title="Network">
          Network
        </pf-tab>
        <pf-tab title="Tab item 7">
          Tab section 7
        </pf-tab>
        <pf-tab title="Tab item 8">
          Tab section 8
        </pf-tab>
        <pf-tab title="Tab item 9">
          Tab section 9
        </pf-tab>
        <pf-tab title="Tab item 10">
          Tab section 10
        </pf-tab>
        <pf-tab title="Tab item 11">
          Tab section 11
        </pf-tab>
      </pf-tabs>
    </story-canvas>

    <story-canvas title="Separate content">
      <pf-tabs>
        <pf-tab title="Users" :content-ref="tabUsers" />
        <pf-tab title="Containers" :content-ref="tabContainers" />
        <pf-tab title="Database" :content-ref="tabDatabase" />
        <pf-tab title="Server">
          Server
        </pf-tab>
        <pf-tab title="Network">
          Network
        </pf-tab>
      </pf-tabs>
      <pf-tab-content ref="tabUsers">Users section</pf-tab-content>
      <pf-tab-content ref="tabContainers">Containers section</pf-tab-content>
      <pf-tab-content ref="tabDatabase">Database section</pf-tab-content>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import KeepAliveTest from "../../components/KeepAliveTest.vue";
import UsersIcon from "@vue-patternfly/icons/dist/esm/icons/users-icon";
import BoxIcon from "@vue-patternfly/icons/dist/esm/icons/box-icon";
import DatabaseIcon from "@vue-patternfly/icons/dist/esm/icons/database-icon";
import ServerIcon from "@vue-patternfly/icons/dist/esm/icons/server-icon";
import LaptopIcon from "@vue-patternfly/icons/dist/esm/icons/laptop-icon";
import DiagramProjectIcon from "@vue-patternfly/icons/dist/esm/icons/diagram-project-icon";
import { ref } from "vue";

const tabUsers = ref();
const tabContainers = ref();
const tabDatabase = ref();
</script>
