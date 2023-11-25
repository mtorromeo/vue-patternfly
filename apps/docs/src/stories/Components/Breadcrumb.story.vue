<template>
  <doc-page title="Breadcrumb">
    <template #description>A <b>breadcrumb</b> provides page context to help users navigate more efficiently and understand where they are in the application hierarchy.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Breadcrumb/Breadcrumb.vue" />
      <component-info src="packages/core/src/components/Breadcrumb/BreadcrumbItem.vue" />
    </template>

    <story-canvas title="Example">
      <pf-breadcrumb>
        <pf-breadcrumb-item href="#">Section home</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#">Section title</pf-breadcrumb-item>
        <pf-breadcrumb-item href="#" active>Section landing</pf-breadcrumb-item>
      </pf-breadcrumb>
    </story-canvas>
  </doc-page>
</template>
