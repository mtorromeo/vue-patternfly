<template>
  <!-- <pre>{{ JSON.stringify(doc, undefined, 2) }}</pre> -->
  <template v-if="doc">
    <pf-title h="2">{{ componentName }} <component-title :name="componentName" /></pf-title>

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
          <pf-td>{{ event.name }}</pf-td>
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

    <br>
  </template>
</template>

<script lang="ts" setup>
import type { ComponentDoc } from 'vue-docgen-api';

interface Props {
  src: string;
  doc?: ComponentDoc;
}

const props = defineProps<Props>();

const componentName = `Pf${props.src.replace(/^.*\/|\..*$/g, '')}`;
</script>
