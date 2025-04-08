<template>
  <doc-page class="page__layouts" title="Stack" doc-section="layouts">
    <template #description>
      <pre v-md>
        The **stack** layout positions items vertically, with one or more items filling the available vertical space.
      </pre>
    </template>

    <template #apidocs>
      <component-info src="packages/core/src/layouts/Stack/Stack.vue" />
      <component-info src="packages/core/src/layouts/Stack/StackItem.vue" />
    </template>

    <story-canvas title="Stack">
      <pf-stack gutter style="height: 300px">
        <pf-stack-item>content</pf-stack-item>
        <pf-stack-item filled>pf-m-fill</pf-stack-item>
        <pf-stack-item>content</pf-stack-item>
      </pf-stack>
    </story-canvas>
  </doc-page>
</template>
