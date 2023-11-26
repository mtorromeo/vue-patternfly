<template>
  <doc-page title="List">
    <template #description>A <b>list</b> component embeds a formatted list (bulleted or numbered list) into page content.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/List/List.vue" />
      <component-info src="packages/core/src/components/List/ListItem.vue" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-list>
        <pf-list-item>First</pf-list-item>
        <pf-list-item>Second</pf-list-item>
        <pf-list-item>Third</pf-list-item>
      </pf-list>
    </story-canvas>
  </doc-page>
</template>
