<template>
  <doc-page title="Tabs">
    <component-title name="pf-tabs" />

    <pre v-md>
      ## Examples
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
        <pf-tab title="Server" hidden>
          Server
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
            <pf-tab-title-icon><project-diagram-icon /></pf-tab-title-icon>
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
        <pf-tab title="Users" :content-ref="$refs.tabUsers" />
        <pf-tab title="Containers" :content-ref="$refs.tabContainers" />
        <pf-tab title="Database" :content-ref="$refs.tabDatabase" />
        <pf-tab title="Server" hidden>
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
import UsersIcon from "@vue-patternfly/icons/dist/esm/icons/users-icon";
import BoxIcon from "@vue-patternfly/icons/dist/esm/icons/box-icon";
import DatabaseIcon from "@vue-patternfly/icons/dist/esm/icons/database-icon";
import ServerIcon from "@vue-patternfly/icons/dist/esm/icons/server-icon";
import LaptopIcon from "@vue-patternfly/icons/dist/esm/icons/laptop-icon";
import ProjectDiagramIcon from "@vue-patternfly/icons/dist/esm/icons/project-diagram-icon";
</script>
