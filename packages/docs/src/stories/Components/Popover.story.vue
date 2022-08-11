<template>
  <doc-page title="Popover">
    <component-title name="pf-popover" />

    <story-canvas title="Example">
      <pf-popover>
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
