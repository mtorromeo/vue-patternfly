<template>
  <doc-page title="Tabs">
    <template #description><b>Tabs</b> allow users to navigate between views within the same page or context.</template>

    <template #apidocs>
      <component-info name="PfTabs" />
      <component-info name="PfTab" />
      <component-info name="PfTabButton" />
      <component-info name="PfTabContent" />
      <component-info name="PfTabTitleIcon" />
      <component-info name="PfTabTitleText" />
    </template>

    <pre v-md>
      ## Usage
      PatternFly offers a few types of tabs:

      - Default tabs (recommended)
      - Boxed tabs
      - Vertical tabs

      You can use as many tabs as you want in a page, although it is recommended you keep the total number of tabs to a minimum for a better user experience. If you have more tabs than fit on the page, you may use a default overflow which would allow a user to horizontal scroll through your tabs. The uses of both default and boxed stylings are flexible, so use either according to your needs and preferences.

      ## Examples
    </pre>

    <story-canvas title="Default">
      <pf-tabs>
        <pf-tab title="Users"> Users </pf-tab>
        <pf-tab title="Containers" mount-on-enter>
          Containers
          <keep-alive-test />
        </pf-tab>
        <pf-tab title="Database"> Database </pf-tab>
        <pf-tab title="Server" mount-on-enter unmount-on-exit>
          Server
          <keep-alive-test />
        </pf-tab>
        <pf-tab>
          <template #title>
            <pf-tab-title-text>System</pf-tab-title-text>
          </template>
          System
          <keep-alive-test />
        </pf-tab>
        <pf-tab title="Network"> Network </pf-tab>
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
          <pf-tabs subtab default-active-key="1">
            <pf-tab title="Subtab item 1"> Subtab section 1 </pf-tab>
            <pf-tab title="Subtab item 2"> Subtab section 2 </pf-tab>
            <pf-tab title="Subtab item 3"> Subtab section 3 </pf-tab>
            <pf-tab title="Subtab item 4"> Subtab section 4 </pf-tab>
            <pf-tab disabled title="Subtab item 5"> Subtab section 5 </pf-tab>
            <pf-tab disabled title="Subtab item 6"> Subtab section 6 </pf-tab>
            <pf-tab title="Subtab item 7"> Subtab section 7 </pf-tab>
            <pf-tab title="Subtab item 8"> Subtab section 8 </pf-tab>
            <pf-tab title="Subtab item 9"> Subtab section 9 </pf-tab>
            <pf-tab title="Subtab item 10"> Subtab section 10 </pf-tab>
            <pf-tab title="Subtab item 11"> Subtab section 11 </pf-tab>
          </pf-tabs>
        </pf-tab>
        <pf-tab title="Containers"> Containers </pf-tab>
        <pf-tab disabled title="Database"> Database </pf-tab>
        <pf-tab title="Server"> Server </pf-tab>
        <pf-tab title="System"> System </pf-tab>
        <pf-tab title="Network"> Network </pf-tab>
        <pf-tab title="Tab item 7"> Tab section 7 </pf-tab>
        <pf-tab title="Tab item 8"> Tab section 8 </pf-tab>
        <pf-tab title="Tab item 9"> Tab section 9 </pf-tab>
        <pf-tab title="Tab item 10"> Tab section 10 </pf-tab>
        <pf-tab title="Tab item 11"> Tab section 11 </pf-tab>
      </pf-tabs>
    </story-canvas>

    <story-canvas title="Tabs horizontal overflow">
      <pf-tabs overflow-horizontal>
        <pf-tab title="Users"> Users </pf-tab>
        <pf-tab title="Containers"> Containers </pf-tab>
        <pf-tab disabled title="Database"> Database </pf-tab>
        <pf-tab title="Server"> Server </pf-tab>
        <pf-tab title="System"> System </pf-tab>
        <pf-tab title="Network"> Network </pf-tab>
        <pf-tab title="Tab item 7"> Tab section 7 </pf-tab>
        <pf-tab title="Tab item 8"> Tab section 8 </pf-tab>
        <pf-tab title="Tab item 9"> Tab section 9 </pf-tab>
        <pf-tab title="Tab item 10"> Tab section 10 </pf-tab>
        <pf-tab title="Tab item 11"> Tab section 11 </pf-tab>
      </pf-tabs>
    </story-canvas>

    <story-canvas title="Separate content">
      <pf-tabs>
        <pf-tab title="Users" :content-ref="tabUsers" />
        <pf-tab title="Containers" :content-ref="tabContainers" />
        <pf-tab title="Database" :content-ref="tabDatabase" />
        <pf-tab title="Server"> Server </pf-tab>
        <pf-tab title="Network"> Network </pf-tab>
      </pf-tabs>
      <pf-tab-content ref="tabUsers">Users section</pf-tab-content>
      <pf-tab-content ref="tabContainers">Containers section</pf-tab-content>
      <pf-tab-content ref="tabDatabase">Database section</pf-tab-content>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import KeepAliveTest from "../../components/KeepAliveTest.vue";
import UsersIcon from "@vue-patternfly/icons/users-icon";
import BoxIcon from "@vue-patternfly/icons/box-icon";
import DatabaseIcon from "@vue-patternfly/icons/database-icon";
import ServerIcon from "@vue-patternfly/icons/server-icon";
import LaptopIcon from "@vue-patternfly/icons/laptop-icon";
import DiagramProjectIcon from "@vue-patternfly/icons/diagram-project-icon";
import { ref } from "vue";

const tabUsers = ref();
const tabContainers = ref();
const tabDatabase = ref();
</script>
