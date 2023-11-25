<template>
  <doc-page title="Table">
    <component-title name="pf-table" />

    <pre v-md>
      Note: `Table` lives in its own package at [@vue-patternfly/table](https://www.npmjs.com/package/@vue-patternfly/table)!

      The `Table` component takes an explicit and declarative approach, and its implementation closely mirrors that of an HTML table.

      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-toggle-group>
        <pf-toggle-group-item :selected="tableVariant === 'default'" @update:selected="tableVariant = 'default'">Default</pf-toggle-group-item>
        <pf-toggle-group-item :selected="tableVariant === 'compact'" @update:selected="tableVariant = 'compact'">Compact</pf-toggle-group-item>
        <pf-toggle-group-item :selected="tableVariant === 'compactBorderless'" @update:selected="tableVariant = 'compactBorderless'">Compact borderless</pf-toggle-group-item>
      </pf-toggle-group>

      <br>

      <pf-table
        aria-label="Simple table"
        :compact="tableVariant !== 'default'"
        :no-borders="tableVariant === 'compactBorderless'"
      >
        <!-- <Caption>Simple table using composable components</Caption> -->
        <pf-thead>
          <pf-tr>
            <pf-th>{{ columnNames.name }}</pf-th>
            <pf-th>{{ columnNames.branches }}</pf-th>
            <pf-th>{{ columnNames.prs }}</pf-th>
            <pf-th>{{ columnNames.workspaces }}</pf-th>
            <pf-th>{{ columnNames.lastCommit }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr v-for="repo in repositories" :key="repo.name">
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';

interface Repository {
  name: string;
  branches: string | null;
  prs: string | null;
  workspaces: string;
  lastCommit: string;
}

const repositories: Repository[] = [
  { name: 'one', branches: 'two', prs: 'three', workspaces: 'four', lastCommit: 'five' },
  { name: 'one - 2', branches: null, prs: null, workspaces: 'four - 2', lastCommit: 'five - 2' },
  { name: 'one - 3', branches: 'two - 3', prs: 'three - 3', workspaces: 'four - 3', lastCommit: 'five - 3' }
];

const columnNames = {
  name: 'Repositories',
  branches: 'Branches',
  prs: 'Pull requests',
  workspaces: 'Workspaces',
  lastCommit: 'Last commit'
};

const tableVariant: Ref<'default' | 'compact' | 'compactBorderless'> = ref('default');
</script>
