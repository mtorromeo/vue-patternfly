<template>
  <doc-page title="Panel">
    <component-title name="pf-panel" />

    <pre v-md>
      The **panel** component is a container that supports flexible content layouts. It can be used to house other components such as fields, forms, videos, buttons, and more. The panel should not be confused with the drawer component, which allows you to surface information via a collapsable container.
    </pre>

    <story-canvas title="Basic">
      <pf-panel>
        <pf-panel-main>
          <pf-panel-main-body>Main content</pf-panel-main-body>
        </pf-panel-main>
      </pf-panel>
    </story-canvas>

    <story-canvas title="Header">
      <pf-panel>
        <pf-panel-header>Header content</pf-panel-header>
        <pf-divider />
        <pf-panel-main>
          <pf-panel-main-body>Main content</pf-panel-main-body>
        </pf-panel-main>
      </pf-panel>
    </story-canvas>

    <story-canvas title="Footer">
      <pf-panel>
        <pf-panel-main>
          <pf-panel-main-body>Main content</pf-panel-main-body>
        </pf-panel-main>
        <pf-panel-footer>Footer content</pf-panel-footer>
      </pf-panel>
    </story-canvas>

    <story-canvas title="Header and footer">
      <pf-panel>
        <pf-panel-header>Header content</pf-panel-header>
        <pf-divider />
        <pf-panel-main>
          <pf-panel-main-body>Main content</pf-panel-main-body>
        </pf-panel-main>
        <pf-panel-footer>Footer content</pf-panel-footer>
      </pf-panel>
    </story-canvas>

    <story-canvas title="No body">
      <pf-panel>
        <pf-panel-main>Main content</pf-panel-main>
      </pf-panel>
    </story-canvas>

    <story-canvas title="Raised">
      <pf-panel variant="raised">
        <pf-panel-main>
          <pf-panel-main-body>Main content</pf-panel-main-body>
        </pf-panel-main>
      </pf-panel>
    </story-canvas>

    <story-canvas title="Bordered">
      <pf-panel variant="bordered">
        <pf-panel-main>
          <pf-panel-main-body>Main content</pf-panel-main-body>
        </pf-panel-main>
      </pf-panel>
    </story-canvas>

    <story-canvas title="Scrollable">
      <pf-panel scrollable>
        <pf-panel-main>
          <pf-panel-main-body>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
          </pf-panel-main-body>
        </pf-panel-main>
      </pf-panel>
    </story-canvas>

    <story-canvas title="Scrollable with header and footer">
      <pf-panel scrollable>
        <pf-panel-header>Header content</pf-panel-header>
        <pf-divider />
        <pf-panel-main>
          <pf-panel-main-body>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
            <br>
            <br>
            Main content
          </pf-panel-main-body>
        </pf-panel-main>
        <pf-panel-footer>Footer content</pf-panel-footer>
      </pf-panel>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
// import { ref } from "vue";
// const page = ref(1);
// const perPage = ref(10);
</script>
