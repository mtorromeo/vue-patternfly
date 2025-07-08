<template>
  <!-- <pre>{{ JSON.stringify(doc, undefined, 2) }}</pre> -->
  <pf-title h="2">
    {{ componentName }} <component-title :name="componentName" />
  </pf-title>
  <pf-text>
    <pf-button variant="link" inline target="_blank" :href="`https://github.com/mtorromeo/vue-patternfly/blob/v5/${src}`">
      <github-icon /> Source code
    </pf-button>
  </pf-text>

  <template v-if="doc">
    <br>

    <pf-title h="3">Props</pf-title>
    <pf-empty-state v-if="!doc.props?.length">
      No props
    </pf-empty-state>
    <pf-table v-else compact>
      <pf-thead>
        <pf-tr>
          <pf-th>Name</pf-th>
          <pf-th>Type</pf-th>
          <pf-th>Default</pf-th>
          <pf-th>Description</pf-th>
        </pf-tr>
      </pf-thead>
      <pf-tbody>
        <pf-tr v-for="prop in doc.props" :key="prop.name">
          <pf-td>{{ prop.name }} <span v-if="prop.required" :style="{color: 'var(--pf-v5-global--danger-color--100)'}">*</span></pf-td>
          <pf-td v-if="prop.type?.name === 'union'">{{ (prop.type as any).elements.map((e: any) => e.name).join(' | ') }}</pf-td>
          <pf-td v-else-if="prop.type?.name === 'Array'">{{ (prop.type as any).elements.map((e: any) => e.name).join(' | ') }}[]</pf-td>
          <pf-td v-else-if="prop.type?.name === 'TSFunctionType'">function</pf-td>
          <pf-td v-else>{{ prop.type?.name }}</pf-td>
          <pf-td v-if="prop.type?.name === 'boolean' && !prop.defaultValue">false</pf-td>
          <pf-td v-else>{{ prop.defaultValue?.value }}</pf-td>
          <pf-td>{{ prop.description }}</pf-td>
        </pf-tr>
      </pf-tbody>
    </pf-table>

    <br>

    <pf-title h="3">Events</pf-title>
    <pf-empty-state v-if="!doc.events?.length">
      No events
    </pf-empty-state>
    <pf-table v-else compact>
      <pf-thead>
        <pf-tr>
          <pf-th>Name</pf-th>
          <pf-th>Description</pf-th>
        </pf-tr>
      </pf-thead>
      <pf-tbody>
        <pf-tr v-for="event in doc.events" :key="event.name">
          <pf-td>{{ event.name }}(<template v-for="(p, i) of event.properties">{{ p.name }}: {{ p.type.names.join(' | ') }}<template v-if="i !== (event.properties?.length ?? 0) - 1">, </template></template>)</pf-td>
          <pf-td>{{ event.description }}</pf-td>
        </pf-tr>
      </pf-tbody>
    </pf-table>

    <br>

    <pf-title h="3">Slots</pf-title>
    <pf-empty-state v-if="!doc.slots?.length">
      No slots
    </pf-empty-state>
    <pf-table v-else compact>
      <pf-thead>
        <pf-tr>
          <pf-th>Name</pf-th>
          <pf-th>Description</pf-th>
        </pf-tr>
      </pf-thead>
      <pf-tbody>
        <pf-tr v-for="slot in doc.slots" :key="slot.name">
          <pf-td>{{ slot.name }}</pf-td>
          <pf-td>{{ slot.description }}</pf-td>
        </pf-tr>
      </pf-tbody>
    </pf-table>

  </template>

  <pf-empty-state v-else>
    <pf-empty-state-header title="Documentation not available" />
    <pf-empty-state-body>
      Definitions for this component could not be extracted due to a limitation of vue-docgen-api. Please consult the linked component's source code instead.
    </pf-empty-state-body>
  </pf-empty-state>

  <br>
</template>

<script lang="ts" setup>
import type { ComponentDoc } from 'vue-docgen-api';
import GithubIcon from '@vue-patternfly/icons/github-icon';

interface Props {
  src: string;
  alias?: string;
  doc?: ComponentDoc;
}

const props = defineProps<Props>();

const componentName = `Pf${(props.alias ?? props.src.replace(/^.*\/|\..*$/g, ''))}`;
</script>
