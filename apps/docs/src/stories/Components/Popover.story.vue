<template>
  <doc-page title="Popover">
    <template #description>A <b>popover</b> is in-app messaging that provides more information on specific product areas. Popovers display content in a new window that overlays the current page. Unlike modals, popovers don't block the current page.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Popover.vue" />
    </template>

    <story-canvas title="Example">
      <pf-popover append-to="body">
        <pf-button>Toggle popover</pf-button>

        <template #header>
          <div>Popover header</div>
        </template>
        <template #body>
          <div>Popovers are triggered by click rather than hover.</div>
        </template>
        <template #footer>
          Popover footer
        </template>
      </pf-popover>
    </story-canvas>
  </doc-page>
</template>
